"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable - theme still applies for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className={`inline-flex size-11 items-center justify-center rounded-full text-subtle transition-colors hover:bg-fg/5 hover:text-fg ${className}`}
    >
      {/* Icons swap purely via CSS so server and client markup always match. */}
      <FiMoon aria-hidden className="size-5 dark:hidden" />
      <FiSun aria-hidden className="hidden size-5 dark:block" />
    </button>
  );
}
