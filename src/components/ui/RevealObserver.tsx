"use client";

import { useEffect } from "react";

/**
 * One shared IntersectionObserver for every `.reveal` element on the page.
 * Renders nothing; keeps animation cost off the main thread (CSS transitions only).
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        root.classList.remove("dark");
      }
    } catch {
      /* ignore storage errors */
    }

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Attach IntersectionObserver in the next animation frame after any class changes
    // so the browser never performs a synchronous forced reflow during hydration.
    let observer: IntersectionObserver | null = null;
    const rafId = window.requestAnimationFrame(() => {
      root.classList.add("js");
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      elements.forEach((el) => observer?.observe(el));
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  return null;
}
