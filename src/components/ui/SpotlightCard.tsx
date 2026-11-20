"use client";

import { useRef, type HTMLAttributes, type MouseEvent, type ReactNode } from "react";

type SpotlightCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "article" | "li";
};

export function SpotlightCard({
  children,
  className = "",
  as: Component = "div",
  ...props
}: SpotlightCardProps) {
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = rectRef.current;
    if (!rect) return;
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Component
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className={`card spotlight-card transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/35 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
