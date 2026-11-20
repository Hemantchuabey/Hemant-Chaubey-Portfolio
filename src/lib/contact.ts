export const inquiryTypes = [
  { value: "job", label: "Job opportunity" },
  { value: "freelance", label: "Freelance project" },
  { value: "other", label: "Something else" },
] as const;

export type InquiryType = (typeof inquiryTypes)[number]["value"];

export const budgetOptions = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Not sure yet"] as const;
export const timelineOptions = ["ASAP", "Within a month", "1–3 months", "Flexible"] as const;

export type ContactField = "name" | "email" | "type" | "company" | "budget" | "timeline" | "message";
export type ContactValues = Partial<Record<ContactField, string>>;

export type ContactState = {
  status: "idle" | "success" | "error" | "fallback";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: ContactValues;
  mailto?: string;
};

export const initialContactState: ContactState = { status: "idle" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactValues) {
  const errors: Partial<Record<ContactField, string>> = {};
  const name = values.name?.trim() ?? "";
  const email = values.email?.trim() ?? "";
  const message = values.message?.trim() ?? "";

  if (name.length < 2 || name.length > 80) errors.name = "Please enter your name (2–80 characters).";
  if (!EMAIL_RE.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (!inquiryTypes.some((t) => t.value === values.type)) errors.type = "Please choose an inquiry type.";
  if ((values.company?.length ?? 0) > 120) errors.company = "Please keep this under 120 characters.";
  if (message.length < 20) errors.message = "Please share a little more detail (at least 20 characters).";
  if (message.length > 4000) errors.message = "Please keep your message under 4,000 characters.";

  return errors;
}
