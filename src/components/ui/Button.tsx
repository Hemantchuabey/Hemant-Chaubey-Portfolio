import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 min-h-11 px-5";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent/90",
  secondary: "border border-border bg-card text-fg hover:border-fg/30",
  ghost: "text-muted hover:text-fg",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function LinkButton({ variant = "primary", className, children, ...props }: LinkButtonProps) {
  return (
    <a className={buttonClasses(variant, className)} {...props}>
      {children}
    </a>
  );
}
