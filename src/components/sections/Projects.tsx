"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight, FiCheckCircle, FiCode, FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TagList } from "@/components/ui/Tag";

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string>(featuredProjects[0].slug);
  const activeProject =
    featuredProjects.find((p) => p.slug === activeSlug) ?? featuredProjects[0];

  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-28 sm:pt-36">
      <SectionHeading
        id="projects"
        index="03"
        eyebrow="Interactive Frontend & Open-Source Builds"
        title="Live builds & UI architecture explorations"
        description="Explore my deployed web applications and UI builds with live Vercel links, state architecture notes, and GitHub source code."
      />

      {/* Interactive Build Deck: Left Selector + Right Live Preview Window */}
      <SpotlightCard className="reveal p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left 4 Columns: Project Switcher List */}
          <div className="flex flex-col justify-between lg:col-span-4 lg:border-r lg:border-border/70 lg:pr-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  SELECT A BUILD
                </span>
                <span className="font-mono text-xs text-subtle">
                  {featuredProjects.length} apps
                </span>
              </div>

              <div
                role="tablist"
                aria-label="Featured frontend builds"
                className="mt-4 space-y-2.5"
              >
                {featuredProjects.map((project) => {
                  const isSelected = project.slug === activeProject.slug;
                  return (
                    <button
                      key={project.slug}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveSlug(project.slug)}
                      className={`group flex w-full flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                        isSelected
                          ? "border-accent bg-accent/10 shadow-sm"
                          : "border-border/70 bg-bg/50 hover:border-fg/30"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                          {project.id}
                        </span>
                        <span className="font-mono text-[10px] text-subtle">
                          {project.metrics[0]?.value}
                        </span>
                      </div>
                      <p className="mt-1 text-base font-semibold text-fg group-hover:text-accent">
                        {project.title}
                      </p>
                      <p className="mt-0.5 line-clamp-1 text-xs text-subtle">
                        {project.category}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border/70 bg-bg/60 p-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                More on GitHub
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Browse additional React, Next.js, TypeScript and DSA repositories on my GitHub profile.
              </p>
              <a
                href="https://github.com/Hemantchuabey"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline"
              >
                <FiGithub aria-hidden className="size-3.5" />
                github.com/Hemantchuabey
                <FiArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Right 8 Columns: Active Build Browser Window & Architecture Breakdown */}
          <div className="flex flex-col justify-between lg:col-span-8">
            <div>
              {/* Browser Window Mockup Frame */}
              <div className="overflow-hidden rounded-2xl border border-border/90 bg-bg shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 bg-card/90 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-amber-400/80" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-subtle">
                      {activeProject.live
                        ? activeProject.live.replace("https://", "")
                        : `github.com/Hemantchuabey/${activeProject.slug}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {activeProject.live ? (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] font-semibold text-accent-fg transition-opacity hover:opacity-90"
                      >
                        Launch Live App
                        <FiExternalLink aria-hidden className="size-3" />
                      </a>
                    ) : null}
                    {activeProject.repo ? (
                      <a
                        href={activeProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-fg hover:border-accent hover:text-accent"
                      >
                        <FiCode aria-hidden className="size-3" />
                        Source
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Screenshot Viewport */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} application preview`}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 55vw, 95vw"
                    className="object-cover object-top transition-all duration-500"
                  />
                </div>
              </div>

              {/* Project Narrative & Highlights */}
              <div className="mt-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {activeProject.category}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                      {activeProject.title}
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    {activeProject.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-border/80 bg-bg/60 px-3 py-1.5 text-right"
                      >
                        <p className="font-mono text-sm font-bold text-accent">{m.value}</p>
                        <p className="text-[10px] text-subtle">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {activeProject.description}
                </p>

                <div className="mt-5">
                  <h4 className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-subtle">
                    <FiLayers aria-hidden className="size-3.5 text-accent" />
                    Implementation Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {activeProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-xs leading-relaxed text-muted sm:text-sm"
                      >
                        <FiCheckCircle
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-emerald-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-border/60 pt-5">
              <TagList items={activeProject.stack} label={`${activeProject.title} stack`} />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
