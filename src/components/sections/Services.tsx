import { FiActivity, FiArrowUpRight, FiCheckCircle, FiGrid, FiLayers, FiZap } from "react-icons/fi";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const icons = {
  layers: FiLayers,
  activity: FiActivity,
  zap: FiZap,
  grid: FiGrid,
} as const;

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="pt-28 sm:pt-36">
      <SectionHeading
        id="services"
        index="05"
        eyebrow="Freelance & Technical Advisory"
        title="Partner with a senior product engineer"
        description="Available for freelance builds, frontend architecture reviews, and performance sprints to help teams ship reliable products."
      />

      <ul className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <SpotlightCard key={service.title} as="li" className="reveal flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-subtle">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border/60 pt-4">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-fg/90 sm:text-sm">
                      <FiCheckCircle aria-hidden className="size-3.5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:underline"
                >
                  Discuss this engagement
                  <FiArrowUpRight aria-hidden className="size-4" />
                </a>
              </div>
            </SpotlightCard>
          );
        })}
      </ul>
    </section>
  );
}
