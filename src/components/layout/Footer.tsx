import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-28 border-t border-border/80 py-10 text-sm text-subtle">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-fg">
            {profile.firstName} <span className="text-accent">{profile.lastName}</span> · {profile.role}
          </p>
          <p className="mt-1 text-xs text-subtle">
            Full-Stack Product, Real-Time &amp; AI Systems Engineering · React, Next.js, TypeScript, Node.js, Express, MySQL, Redis &amp; AWS.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="font-mono text-xs text-accent transition-colors hover:underline"
          >
            Back to top ↑
          </a>
          <span className="font-mono text-xs text-subtle">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
