"use server";

import { headers } from "next/headers";
import {
  inquiryTypes,
  validateContact,
  type ContactField,
  type ContactState,
  type ContactValues,
} from "@/lib/contact";
import { profile } from "@/data/profile";

const FIELDS: ContactField[] = ["name", "email", "type", "company", "budget", "timeline", "message"];
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort, per-instance throttle. Good enough to blunt casual abuse on a portfolio.
const submissions = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  submissions.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

function buildBody(values: ContactValues) {
  const typeLabel = inquiryTypes.find((t) => t.value === values.type)?.label ?? values.type;
  return [
    `Inquiry: ${typeLabel}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    values.budget ? `Budget: ${values.budget}` : null,
    values.timeline ? `Timeline: ${values.timeline}` : null,
    "",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real users never see or fill this field.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success" };
  }

  const values: ContactValues = {};
  for (const field of FIELDS) {
    const raw = formData.get(field);
    values[field] = typeof raw === "string" ? raw.trim() : "";
  }
  if (values.type !== "freelance") {
    values.budget = "";
    values.timeline = "";
  }

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages in a short time. Please try again later or email me directly.",
      values,
    };
  }

  const typeLabel = inquiryTypes.find((t) => t.value === values.type)?.label ?? "Inquiry";
  const subject = `[Portfolio] ${typeLabel} - ${values.name}`;
  const body = buildBody(values);
  const to = process.env.CONTACT_TO_EMAIL || profile.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No email provider configured: hand the visitor a pre-filled mail draft instead of failing.
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return {
      status: "fallback",
      message: "Your message is ready. Open it in your email app to send.",
      mailto,
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      replyTo: values.email,
      subject,
      text: body,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Contact form delivery failed:", err);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email me at ${profile.email}.`,
      values,
    };
  }

  return { status: "success" };
}
