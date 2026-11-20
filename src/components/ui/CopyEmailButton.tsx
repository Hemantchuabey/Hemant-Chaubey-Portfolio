"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-subtle transition-colors hover:bg-fg/5 hover:text-fg"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {copied ? <FiCheck aria-hidden className="size-4 text-accent" /> : <FiCopy aria-hidden className="size-4" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
