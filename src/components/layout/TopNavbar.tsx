"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navItems, profile } from "@/data/profile";
import { buttonClasses } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "./useActiveSection";

const ids = navItems.map((item) => item.id);

export function TopNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border border-border/90 bg-card/85 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border border-border/50 bg-card/60 backdrop-blur-md"
        }`}
      >
        {/* Brand Identity (Monogram instead of repeating photo) */}
        <a href="#about" className="group flex items-center gap-3">
          <div className="relative flex size-9 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 font-mono text-xs font-bold tracking-wider text-accent transition-transform duration-300 group-hover:scale-105">
            HC
            <span
              aria-hidden
              className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-card"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-fg">
              {profile.firstName} <span className="text-accent">{profile.lastName}</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
              Senior SWE · Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Pill Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-border/80 bg-bg/70 p-1 lg:flex"
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-accent-fg shadow-sm"
                    : "text-muted hover:bg-fg/5 hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={profile.resume}
            download={profile.resumeFileName}
            aria-label="Download Resume (PDF)"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-bg/80 px-3.5 py-2 text-xs font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent sm:inline-flex"
          >
            <FiDownload aria-hidden className="size-3.5 text-accent" />
            <span>Resume PDF</span>
          </a>

          <a
            href="#contact"
            className="hidden items-center gap-1 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-fg transition-all hover:bg-accent/90 md:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight aria-hidden className="size-3.5" />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-bg/60 text-fg transition-colors hover:bg-fg/5 lg:hidden"
          >
            <FiMenu aria-hidden className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Drawer */}
      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-bg/95 px-6 pb-8 pt-5 backdrop-blur-xl lg:hidden"
        >
          <div className="flex h-14 items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 font-mono text-xs font-bold text-accent">
                HC
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">{profile.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  {profile.role}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg transition-colors hover:bg-fg/5"
            >
              <FiX aria-hidden className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile Primary" className="mt-6 flex-1">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "location" : undefined}
                    className={`flex items-baseline justify-between rounded-xl px-3 py-3.5 text-2xl font-semibold tracking-tight transition-colors ${
                      active === item.id
                        ? "bg-accent/10 text-accent"
                        : "text-fg hover:bg-fg/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-subtle">0{index + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-border pt-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className={buttonClasses("primary", "w-full")}
              >
                <FiDownload aria-hidden className="size-4" />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={buttonClasses("secondary", "w-full")}
              >
                Get in touch
                <FiArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
