"use client";

import { useState } from "react";
import { FiCheck, FiFilter, FiSearch } from "react-icons/fi";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Skills() {
  const [selectedLayer, setSelectedLayer] = useState<string>("ALL");
  const [query, setQuery] = useState<string>("");

  const filteredGroups = skillGroups
    .filter((group) => selectedLayer === "ALL" || group.layer === selectedLayer)
    .map((group) => {
      if (!query.trim()) return group;
      const q = query.trim().toLowerCase();
      const matchedItems = group.items.filter((item) => item.toLowerCase().includes(q));
      const titleMatch =
        group.title.toLowerCase().includes(q) || group.subtitle.toLowerCase().includes(q);
      return {
        ...group,
        items: titleMatch ? group.items : matchedItems,
      };
    })
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-28 sm:pt-36">
      <SectionHeading
        id="skills"
        index="04"
        eyebrow="Interactive Architecture Matrix"
        title="Full-spectrum frontend & systems engineering stack"
        description="Core technical stack from my experience across React 19, Next.js 16 App Router, TypeScript, WebSockets, Express 5, MySQL 8, Redis, BullMQ, Jest, Grafana k6, and AWS."
      />

      {/* Interactive Filter & Live Search Toolbar */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl border border-border/80 bg-card/75 p-4 backdrop-blur-md lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Skill layers">
          <span className="mr-1.5 inline-flex items-center gap-1 font-mono text-xs text-subtle">
            <FiFilter aria-hidden className="size-3.5 text-accent" />
            Layer:
          </span>
          <button
            type="button"
            role="tab"
            aria-selected={selectedLayer === "ALL"}
            onClick={() => setSelectedLayer("ALL")}
            className={`rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
              selectedLayer === "ALL"
                ? "bg-accent text-accent-fg shadow-sm"
                : "border border-border/70 bg-bg/60 text-muted hover:text-fg"
            }`}
          >
            ALL (6)
          </button>
          {skillGroups.map((group) => {
            const active = selectedLayer === group.layer;
            return (
              <button
                key={group.layer}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedLayer(group.layer)}
                className={`rounded-lg px-2.5 py-1.5 font-mono text-xs font-medium transition-all ${
                  active
                    ? "bg-accent text-accent-fg shadow-sm"
                    : "border border-border/70 bg-bg/60 text-muted hover:text-fg"
                }`}
              >
                {group.layer}
              </button>
            );
          })}
        </div>

        {/* Instant Skill Search Input */}
        <div className="relative min-w-[240px]">
          <FiSearch
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter skill (e.g. Next.js, k6, Redis)..."
            aria-label="Filter technical skills"
            className="w-full rounded-xl border border-border bg-bg/80 py-2 pl-9 pr-3 font-mono text-xs text-fg placeholder:text-subtle/70 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      {filteredGroups.length === 0 ? (
        <div className="rounded-2xl border border-border/80 bg-card/60 p-8 text-center">
          <p className="font-mono text-sm text-muted">
            No skills matched <code className="text-accent">&ldquo;{query}&rdquo;</code>.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedLayer("ALL");
            }}
            className="mt-3 rounded-lg bg-accent px-3.5 py-1.5 font-mono text-xs font-semibold text-accent-fg"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => (
            <SpotlightCard
              key={group.title}
              className="reveal flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-accent">
                    {group.layer}
                  </span>
                  <span className="font-mono text-xs text-subtle">
                    {group.items.length} capabilities
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-subtle">{group.subtitle}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.title}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-bg/70 px-2.5 py-1 font-mono text-xs text-fg/90 transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <FiCheck aria-hidden className="size-3 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      )}
    </section>
  );
}
