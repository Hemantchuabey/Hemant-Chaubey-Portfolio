import { FiAward } from "react-icons/fi";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="pt-20 sm:pt-28">
      <SpotlightCard className="reveal p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
              <FiAward aria-hidden className="size-6" />
            </span>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Academic Foundation
              </p>
              <h2 id="education-title" className="mt-1 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                Bachelor of Engineering - Electronics &amp; Telecommunications
              </h2>
              <p className="mt-1 text-sm text-muted">
                University of Mumbai (Vidyavardhini&apos;s College of Engineering &amp; Technology)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end md:gap-1.5">
            <span className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-sm font-bold text-accent">
              CGPA 8.28 / 10
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-subtle">
              2017 - 2021 · Mumbai, India
            </span>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
