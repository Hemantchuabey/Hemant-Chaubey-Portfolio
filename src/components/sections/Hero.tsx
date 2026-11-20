"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiActivity,
  FiArrowDownRight,
  FiCheck,
  FiCheckCircle,
  FiCopy,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMapPin,
  FiServer,
} from "react-icons/fi";
import { impactStats, profile } from "@/data/profile";
import { LinkButton } from "@/components/ui/Button";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import profilePhoto from "../../../public/profile.jpeg";

const ARCHITECTURE_VIEWS = [
  {
    id: "overview",
    label: "System Profile",
    icon: FiLayers,
    badge: "5+ Years · Full-Stack",
    headline: "End-to-End Product & Systems Architecture",
    description:
      "Bridging React 19 / Next.js 16 interfaces with Express 5 APIs, MySQL 8 transactional schemas, Redis/BullMQ workers, and real-time WebSocket streams.",
    highlights: [
      { label: "Current Role", value: "Senior SWE @ Uttam Galva" },
      { label: "Previous Role", value: "System Engineer @ TCS (5 Yrs)" },
      { label: "Core Stack", value: "Next.js 16 · TypeScript · Node · MySQL" },
      { label: "Cloud & QA", value: "AWS (99.9% Uptime) · 90% Jest · k6" },
    ],
  },
  {
    id: "benchmarks",
    label: "Audited Metrics",
    icon: FiActivity,
    badge: "Lighthouse 98 · 0.9s FCP",
    headline: "Verified Production Performance Deltas",
    description:
      "Measured engineering improvements delivered across 120K+ user commerce storefronts and real-time industrial telemetry dashboards.",
    highlights: [
      { label: "FCP", value: "5.1s → 0.9s (−82% Faster)" },
      { label: "Lighthouse Audit", value: "98 Perf · 98 A11y · 100 SEO" },
      { label: "Stream Ingest Latency", value: "62ms → 18ms (−70% Latency)" },
      { label: "Feature Delivery Speed", value: "+30% via Shared UI Library" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    icon: FiDatabase,
    badge: "Express 5 · MySQL · Redis",
    headline: "Resilient APIs, Queues & Real-Time Pipelines",
    description:
      "Designed for zero duplicate transactions, role-protected enterprise workflows, and high-frequency sensor streaming.",
    highlights: [
      { label: "API & Auth Layer", value: "Node.js · Express 5 · JWT / RBAC" },
      { label: "Data & Queues", value: "MySQL 8 · MongoDB · Redis · BullMQ" },
      { label: "Streaming Engine", value: "WebSockets · Socket.IO · SSE · LTTB" },
      { label: "Load Validation", value: "Grafana k6 Staged Concurrency" },
    ],
  },
] as const;

export function Hero() {
  const [activeTab, setActiveTab] = useState<(typeof ARCHITECTURE_VIEWS)[number]["id"]>("overview");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const currentView =
    ARCHITECTURE_VIEWS.find((v) => v.id === activeTab) ?? ARCHITECTURE_VIEWS[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="about" aria-labelledby="about-title" className="pt-28 sm:pt-32 lg:pt-36">
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left 7 Columns: Executive Pitch & Full-Stack Positioning */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-subtle">
              <FiMapPin aria-hidden className="size-3 text-accent" />
              {profile.location}
            </span>
          </div>

          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {profile.name} · {profile.role} · {profile.headline}
          </p>

          <h1
            id="about-title"
            className="mt-3 text-[clamp(2.25rem,4.8vw,4.1rem)] font-semibold leading-[1.07] tracking-tight text-fg"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-accent via-amber-400 to-orange-500 bg-clip-text text-transparent">
              high-throughput, full-stack
            </span>{" "}
            web platforms built for scale.
          </h1>

          <div className="mt-5 max-w-2xl space-y-3.5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>

          {/* Balanced Full-Stack Capability Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card/75 px-3 py-1.5 font-mono text-xs font-medium text-fg/90"
              >
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ResumeButton label="Download Resume (PDF)" />
            <LinkButton href="#lab" variant="secondary">
              <FiServer aria-hidden className="size-4 text-accent" />
              Explore Live Architecture Lab
            </LinkButton>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 font-mono text-xs font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              {copiedEmail ? (
                <>
                  <FiCheck aria-hidden className="size-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Email</span>
                </>
              ) : (
                <>
                  <FiCopy aria-hidden className="size-3.5 text-accent" />
                  <span>{profile.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                Verified Profiles
              </span>
              <SocialLinks />
            </div>
            <a
              href="#experience"
              className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
            >
              Inspect career timeline
              <FiArrowDownRight aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Right 5 Columns: Single Portrait + Interactive Engineering Dossier */}
        <div className="lg:col-span-5">
          <SpotlightCard className="p-6 sm:p-7">
            {/* Identity Header - portrait with object-[center_8%] to show full headroom */}
            <div className="flex items-center gap-4 border-b border-border/80 pb-5">
              <div className="relative shrink-0">
                <div className="relative h-24 w-20 overflow-hidden rounded-2xl border border-accent/40 bg-bg shadow-md sm:h-28 sm:w-24">
                  <Image
                    src={profilePhoto}
                    alt={profile.name}
                    fill
                    sizes="96px"
                    priority
                    placeholder="blur"
                    className="object-cover object-[center_8%]"
                  />
                </div>
                <span
                  title="Verified Senior Software Engineer"
                  className="absolute -bottom-1.5 -right-1.5 inline-flex size-6 items-center justify-center rounded-full bg-accent text-accent-fg shadow"
                >
                  <FiCheckCircle aria-hidden className="size-3.5" />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold tracking-tight text-fg">{profile.name}</h2>
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                    5+ YRS EXP
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent">{profile.role}</p>
                <p className="mt-1 font-mono text-xs text-subtle">
                  Uttam Galva · Ex-TCS · Mumbai, India
                </p>
                <p className="mt-1.5 font-mono text-[11px] text-muted">
                  B.E. Electronics &amp; Telecom · CGPA 8.28/10
                </p>
              </div>
            </div>

            {/* Interactive Dossier Mode Switcher */}
            <div
              role="tablist"
              aria-label="Engineering dossier views"
              className="mt-5 grid grid-cols-3 gap-1.5 rounded-xl border border-border/80 bg-bg/70 p-1"
            >
              {ARCHITECTURE_VIEWS.map((view) => {
                const Icon = view.icon;
                const selected = view.id === currentView.id;
                return (
                  <button
                    key={view.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveTab(view.id)}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 font-mono text-[11px] font-semibold transition-all ${
                      selected
                        ? "bg-accent text-accent-fg shadow-sm"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    <Icon aria-hidden className="size-3.5 shrink-0" />
                    <span className="truncate">{view.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Dossier View Content */}
            <div className="mt-4 rounded-2xl border border-border/80 bg-bg/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-fg">{currentView.headline}</h3>
                <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                  {currentView.badge}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {currentView.description}
              </p>

              <dl className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {currentView.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/70 bg-card/80 px-3 py-2.5"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 font-mono text-xs font-semibold text-fg">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Lighthouse 98 & FCP 0.9s Summary Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/70 bg-bg/50 px-3.5 py-2.5 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 text-muted">
                <FiCpu aria-hidden className="size-3.5 text-accent" />
                FCP: <strong className="text-fg">5.1s → 0.9s</strong>{" "}
                <span className="text-emerald-400">(−82%)</span>
              </span>
              <span className="font-semibold text-emerald-400">Lighthouse 98 / 100</span>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Bottom 4-Card Verified Metric Bento */}
      <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <SpotlightCard key={stat.id} className="p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                {stat.id} {"//"} PRODUCTION KPI
              </span>
              <span className="size-2 rounded-full bg-accent" aria-hidden />
            </div>
            <dd className="mt-2.5 font-mono text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {stat.value}
            </dd>
            <dt className="mt-1.5 text-sm font-semibold text-accent">{stat.label}</dt>
            <p className="mt-1 text-xs leading-relaxed text-muted">{stat.detail}</p>
          </SpotlightCard>
        ))}
      </dl>
    </section>
  );
}
