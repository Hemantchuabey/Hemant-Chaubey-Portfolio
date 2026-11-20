"use client";

import { useState } from "react";
import { FiBriefcase, FiCheckCircle, FiCpu, FiLayers, FiMapPin } from "react-icons/fi";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TagList } from "@/components/ui/Tag";

export function Experience() {
  const [selectedDomains, setSelectedDomains] = useState<Record<string, string>>({
    "uttam-galva": "wms-oms",
    tcs: "perf-scale",
  });

  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-28 sm:pt-36">
      <SectionHeading
        id="experience"
        index="01"
        eyebrow="Career Progression · 2021 - Present"
        title="Production systems engineered at scale"
        description="Five-plus years delivering full-stack web platforms, real-time operational telemetry and high-conversion commerce systems across Uttam Galva and Tata Consultancy Services."
      />

      {/* Connected Narrative Thread Container */}
      <div className="relative space-y-12 before:absolute before:bottom-8 before:left-4 before:top-8 before:hidden before:w-0.5 before:bg-gradient-to-b before:from-emerald-400 before:via-accent before:to-amber-500/30 lg:before:block">
        {experience.map((role, roleIdx) => {
          const currentDomainId = selectedDomains[role.id] ?? role.domains[0].id;
          const activeDomain =
            role.domains.find((d) => d.id === currentDomainId) ?? role.domains[0];

          return (
            <div key={role.id} className="relative lg:pl-14">
              {/* Thread Node Marker on Desktop */}
              <div
                aria-hidden
                className={`absolute left-0 top-8 hidden size-8 items-center justify-center rounded-full border-2 font-mono text-xs font-bold shadow-lg lg:flex ${
                  role.current
                    ? "border-emerald-400 bg-bg text-emerald-400 ring-4 ring-emerald-500/15"
                    : "border-accent bg-bg text-accent ring-4 ring-accent/15"
                }`}
              >
                0{roleIdx + 1}
              </div>

              <SpotlightCard as="article" className="reveal p-6 sm:p-8 lg:p-10">
                {/* Top Role Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {role.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400">
                        <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                        CURRENT ROLE · {role.period}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                        PREVIOUS TENURE · {role.period}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-xs text-subtle">
                      <FiMapPin aria-hidden className="size-3 text-accent" />
                      {role.location}
                    </span>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                    {role.tenureBadge}
                  </span>
                </div>

                {/* Main 12-Col Grid */}
                <div className="mt-7 grid gap-8 lg:grid-cols-12">
                  {/* Left 4 Cols: Company Identity & Audited Impact Counters */}
                  <div className="flex flex-col justify-between lg:col-span-4 lg:border-r lg:border-border/70 lg:pr-8">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                        {role.title}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-2 text-base font-semibold text-accent">
                        <FiBriefcase aria-hidden className="size-4 shrink-0" />
                        {role.company}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {role.summary}
                      </p>
                    </div>

                    {/* 2x2 Impact Bento */}
                    <div className="mt-6">
                      <p className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-subtle">
                        Key Engineering Outcomes
                      </p>
                      <dl className="grid grid-cols-2 gap-2.5">
                        {role.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl border border-border/80 bg-bg/60 p-3"
                          >
                            <dd className="font-mono text-xl font-bold tracking-tight text-accent sm:text-2xl">
                              {metric.value}
                            </dd>
                            <dt className="mt-1 text-[11px] leading-snug text-subtle">
                              {metric.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  {/* Right 8 Cols: Interactive Domain Pillar Explorer */}
                  <div className="flex flex-col justify-between lg:col-span-8">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-subtle">
                          <FiLayers aria-hidden className="size-3.5 text-accent" />
                          Architectural Domains (Select Pillar)
                        </span>
                        <span className="font-mono text-[11px] text-accent">
                          Module {role.domains.findIndex((d) => d.id === activeDomain.id) + 1} of{" "}
                          {role.domains.length}
                        </span>
                      </div>

                      {/* Domain Switcher Tabs */}
                      <div
                        role="tablist"
                        aria-label={`${role.company} engineering domains`}
                        className="mt-3 grid gap-2 sm:grid-cols-3"
                      >
                        {role.domains.map((domain) => {
                          const isSelected = domain.id === activeDomain.id;
                          return (
                            <button
                              key={domain.id}
                              type="button"
                              role="tab"
                              aria-selected={isSelected}
                              onClick={() =>
                                setSelectedDomains((prev) => ({
                                  ...prev,
                                  [role.id]: domain.id,
                                }))
                              }
                              className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                                isSelected
                                  ? "border-accent bg-accent/10 shadow-sm"
                                  : "border-border/70 bg-bg/50 hover:border-fg/30"
                              }`}
                            >
                              <span
                                className={`font-mono text-[10px] font-semibold uppercase tracking-wider ${
                                  isSelected ? "text-accent" : "text-subtle"
                                }`}
                              >
                                {domain.tag.split("·")[0]}
                              </span>
                              <span className="mt-1 text-xs font-semibold leading-snug text-fg">
                                {domain.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Domain Inspection Console */}
                      <div className="mt-4 rounded-2xl border border-border/80 bg-bg/60 p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                          <div className="flex items-center gap-2">
                            <FiCpu aria-hidden className="size-4 text-accent" />
                            <h4 className="text-base font-semibold text-fg">
                              {activeDomain.name}
                            </h4>
                          </div>
                          <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                            {activeDomain.tag}
                          </span>
                        </div>

                        <p className="mt-3 text-xs font-medium text-fg/90 sm:text-sm">
                          {activeDomain.summary}
                        </p>

                        <ul className="mt-4 space-y-2.5">
                          {activeDomain.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-xs leading-relaxed text-muted sm:text-sm"
                            >
                              <FiCheckCircle
                                aria-hidden
                                className="mt-1 size-3.5 shrink-0 text-emerald-400"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Full Role Tech Stack */}
                    <div className="mt-6 border-t border-border/60 pt-5">
                      <TagList items={role.stack} label={`${role.company} tech stack`} />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
