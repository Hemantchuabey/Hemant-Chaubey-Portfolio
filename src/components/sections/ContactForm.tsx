"use client";

import { useActionState, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiMail, FiSend } from "react-icons/fi";
import { submitContact } from "@/app/actions/contact";
import {
  budgetOptions,
  initialContactState,
  inquiryTypes,
  timelineOptions,
  type ContactField,
  type InquiryType,
} from "@/lib/contact";
import { buttonClasses } from "@/components/ui/Button";

const inputClass =
  "block w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-fg placeholder:text-subtle/80 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 aria-[invalid=true]:border-red-500";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
      <FiAlertCircle aria-hidden className="size-4 shrink-0" />
      {message}
    </p>
  );
}

function Form({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const [type, setType] = useState<InquiryType>((state.values?.type as InquiryType) || "job");
  const v = state.values ?? {};
  const err = (field: ContactField) => state.errors?.[field];
  const describedBy = (field: ContactField) => (err(field) ? `${field}-error` : undefined);

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <FiCheckCircle aria-hidden className="size-10 text-emerald-500" />
        <div>
          <h3 className="text-xl font-semibold text-fg">Message sent - thank you!</h3>
          <p className="mt-2 text-muted">I will reply within 24-48 hours.</p>
        </div>
        <button type="button" onClick={onReset} className={buttonClasses("secondary")}>
          Send another message
        </button>
      </div>
    );
  }

  if (state.status === "fallback" && state.mailto) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <FiMail aria-hidden className="size-10 text-accent" />
        <div>
          <h3 className="text-xl font-semibold text-fg">Almost there</h3>
          <p className="mt-2 text-muted">{state.message}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={state.mailto} className={buttonClasses("primary")}>
            <FiMail aria-hidden className="size-4" />
            Open email draft
          </a>
          <button type="button" onClick={onReset} className={buttonClasses("ghost")}>
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative space-y-6">
      {/* Honeypot - hidden from humans and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-fg">What can I help with?</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {inquiryTypes.map((option) => (
            <label
              key={option.value}
              className="relative flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-bg px-3 py-2.5 text-center text-sm font-medium text-muted transition-colors hover:border-fg/30 has-[:checked]:border-accent has-[:checked]:bg-accent/10 has-[:checked]:text-fg has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent"
            >
              <input
                type="radio"
                name="type"
                value={option.value}
                defaultChecked={(v.type || "job") === option.value}
                onChange={() => setType(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id="type-error" message={err("type")} />
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-fg">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            defaultValue={v.name}
            aria-invalid={Boolean(err("name"))}
            aria-describedby={describedBy("name")}
            className={`${inputClass} mt-2`}
          />
          <FieldError id="name-error" message={err("name")} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-fg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={Boolean(err("email"))}
            aria-describedby={describedBy("email")}
            className={`${inputClass} mt-2`}
          />
          <FieldError id="email-error" message={err("email")} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-fg">
          Company <span className="font-normal text-subtle">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={120}
          autoComplete="organization"
          defaultValue={v.company}
          aria-invalid={Boolean(err("company"))}
          aria-describedby={describedBy("company")}
          className={`${inputClass} mt-2`}
        />
        <FieldError id="company-error" message={err("company")} />
      </div>

      {type === "freelance" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className="text-sm font-medium text-fg">
              Budget range
            </label>
            <select id="budget" name="budget" defaultValue={v.budget || ""} className={`${inputClass} mt-2`}>
              <option value="">Select…</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="text-sm font-medium text-fg">
              Timeline
            </label>
            <select id="timeline" name="timeline" defaultValue={v.timeline || ""} className={`${inputClass} mt-2`}>
              <option value="">Select…</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      <div>
        <label htmlFor="message" className="text-sm font-medium text-fg">
          {type === "freelance" ? "Tell me about your project" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={5}
          defaultValue={v.message}
          placeholder={
            type === "freelance"
              ? "Goals, scope, tech stack and anything else that helps me understand the project."
              : "Role, team and what you're looking for."
          }
          aria-invalid={Boolean(err("message"))}
          aria-describedby={describedBy("message")}
          className={`${inputClass} mt-2 resize-y`}
        />
        <FieldError id="message-error" message={err("message")} />
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
          <FiAlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          {state.message}
        </p>
      ) : null}

      <button type="submit" disabled={pending} className={buttonClasses("primary", "w-full sm:w-auto")}>
        {pending ? (
          <>
            <span aria-hidden className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
            Sending…
          </>
        ) : (
          <>
            <FiSend aria-hidden className="size-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}

export function ContactForm() {
  const [formKey, setFormKey] = useState(0);
  return <Form key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}
