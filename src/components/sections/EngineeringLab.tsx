"use client";

import { useRef, useState, type PointerEvent } from "react";
import {
  FiAlertTriangle,
  FiBarChart2,
  FiCheckCircle,
  FiCpu,
  FiRefreshCw,
  FiZap,
} from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type TelemetryPoint = {
  x: number;
  y: number;
  time: string;
  value: string;
  status: string;
};

type TelemetryPreset = {
  id: "nominal" | "spike" | "slice";
  label: string;
  tag: string;
  ingestMs: string;
  oee: string;
  anomaly: boolean;
  diagnostic: string;
  points: TelemetryPoint[];
  linePath: string;
  areaPath: string;
};

function buildSmoothPath(pts: TelemetryPoint[]) {
  if (pts.length === 0) return "";
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const curr = pts[i];
    const next = pts[i + 1];
    const midX = (curr.x + next.x) / 2;
    d += ` C${midX},${curr.y} ${midX},${next.y} ${next.x},${next.y}`;
  }
  return d;
}

function createPreset(
  config: Omit<TelemetryPreset, "linePath" | "areaPath">
): TelemetryPreset {
  const linePath = buildSmoothPath(config.points);
  const firstX = config.points[0].x;
  const lastX = config.points[config.points.length - 1].x;
  const areaPath = `${linePath} L${lastX},95 L${firstX},95 Z`;
  return { ...config, linePath, areaPath };
}

const TELEMETRY_PRESETS: TelemetryPreset[] = [
  createPreset({
    id: "nominal",
    label: "01 · LTTB Stream",
    tag: "−70% Ingest Latency",
    ingestMs: "18ms",
    oee: "94.6%",
    anomaly: false,
    diagnostic:
      "LTTB (Largest-Triangle-Three-Buckets) preserves visual extrema across high-frequency WebSocket frames while keeping browser rendering smooth at 60 FPS.",
    points: [
      { x: 20, y: 64, time: "08:00 IST", value: "41.8 Hz", status: "Nominal" },
      { x: 95, y: 34, time: "09:15 IST", value: "48.2 Hz", status: "Peak Load" },
      { x: 170, y: 50, time: "10:30 IST", value: "44.6 Hz", status: "Nominal" },
      { x: 245, y: 26, time: "11:45 IST", value: "49.4 Hz", status: "High Throughput" },
      { x: 320, y: 40, time: "13:00 IST", value: "46.1 Hz", status: "Nominal" },
      { x: 395, y: 52, time: "14:15 IST", value: "43.5 Hz", status: "Shift Handover" },
      { x: 470, y: 30, time: "15:30 IST", value: "48.9 Hz", status: "Nominal" },
      { x: 540, y: 22, time: "16:45 IST", value: "50.1 Hz", status: "Optimal OEE" },
    ],
  }),
  createPreset({
    id: "spike",
    label: "02 · Anomaly Detection",
    tag: "−45% Downtime Response",
    ingestMs: "19ms",
    oee: "88.4%",
    anomaly: true,
    diagnostic:
      "Deviation > 3.5σ isolated on Spindle-B at 11:45 IST. Real-time metrics automatically trigger the maintenance copilot summary, reducing diagnostic prep time by 50%.",
    points: [
      { x: 20, y: 60, time: "08:00 IST", value: "2.1 mm/s", status: "Baseline" },
      { x: 95, y: 56, time: "09:15 IST", value: "2.3 mm/s", status: "Baseline" },
      { x: 170, y: 54, time: "10:30 IST", value: "2.4 mm/s", status: "Pre-Warning" },
      { x: 245, y: 10, time: "11:45 IST", value: "9.8 mm/s", status: "CRITICAL SPIKE (3.8σ)" },
      { x: 320, y: 68, time: "13:00 IST", value: "1.8 mm/s", status: "Auto-Throttle" },
      { x: 395, y: 52, time: "14:15 IST", value: "2.2 mm/s", status: "Stabilized" },
      { x: 470, y: 50, time: "15:30 IST", value: "2.3 mm/s", status: "Nominal" },
      { x: 540, y: 48, time: "16:45 IST", value: "2.2 mm/s", status: "Nominal" },
    ],
  }),
  createPreset({
    id: "slice",
    label: "03 · O(log n) Window Slice",
    tag: "Binary Timestamp Search",
    ingestMs: "14ms",
    oee: "96.1%",
    anomaly: false,
    diagnostic:
      "Instead of scanning arrays linearly on every zoom/pan, binary-search timestamp slicing locates shift boundaries in O(log n) over bounded in-memory ring buffers.",
    points: [
      { x: 20, y: 48, time: "12:00:00", value: "95.2% OEE", status: "Window Start" },
      { x: 95, y: 36, time: "12:15:00", value: "96.0% OEE", status: "Sliced Bucket #1" },
      { x: 170, y: 26, time: "12:30:00", value: "96.8% OEE", status: "Sliced Bucket #2" },
      { x: 245, y: 32, time: "12:45:00", value: "96.1% OEE", status: "Sliced Bucket #3" },
      { x: 320, y: 42, time: "13:00:00", value: "95.4% OEE", status: "Sliced Bucket #4" },
      { x: 395, y: 28, time: "13:15:00", value: "96.5% OEE", status: "Sliced Bucket #5" },
      { x: 470, y: 22, time: "13:30:00", value: "97.1% OEE", status: "Sliced Bucket #6" },
      { x: 540, y: 18, time: "13:45:00", value: "97.4% OEE", status: "Window End" },
    ],
  }),
];

type PerfStage = {
  id: "legacy" | "split" | "full";
  label: string;
  bundleKb: string;
  fcp: string;
  fcpDelta: string;
  lighthouse: number;
  a11y: number;
  p95K6: string;
  notes: string;
};

const PERF_STAGES: PerfStage[] = [
  {
    id: "legacy",
    label: "01 · Baseline (5.1s FCP)",
    bundleKb: "1,180 KB",
    fcp: "5.1s",
    fcpDelta: "Baseline",
    lighthouse: 54,
    a11y: 80,
    p95K6: "580ms",
    notes:
      "Initial production baseline across 120K+ user commerce journeys: monolithic client bundle, legacy React class components, and unoptimized route hydration.",
  },
  {
    id: "split",
    label: "02 · Route & Code Splitting",
    bundleKb: "520 KB",
    fcp: "2.1s",
    fcpDelta: "−59% Faster",
    lighthouse: 84,
    a11y: 92,
    p95K6: "240ms",
    notes:
      "Introduced route-level lazy loading, dynamic imports for heavy drawers/modals, and migrated legacy class components to strict TypeScript + React Hooks (−25% production defects).",
  },
  {
    id: "full",
    label: "03 · Production Optimized (0.9s)",
    bundleKb: "310 KB",
    fcp: "0.9s",
    fcpDelta: "−82% Faster",
    lighthouse: 98,
    a11y: 98,
    p95K6: "135ms",
    notes:
      "Final production state: FCP cut by 82% (5.1s → 0.9s), 98 Lighthouse Performance score, shared component library (+30% delivery speed), and k6 load-tested.",
  },
];

export function EngineeringLab() {
  const [telemetryId, setTelemetryId] = useState<TelemetryPreset["id"]>("nominal");
  const [hoveredIdx, setHoveredIdx] = useState<number>(3);
  const [perfId, setPerfId] = useState<PerfStage["id"]>("full");
  const lastIdxRef = useRef<number>(3);

  const telemetry =
    TELEMETRY_PRESETS.find((t) => t.id === telemetryId) ?? TELEMETRY_PRESETS[0];
  const activePoint = telemetry.points[hoveredIdx] ?? telemetry.points[0];
  const perf = PERF_STAGES.find((p) => p.id === perfId) ?? PERF_STAGES[2];

  const svgRectRef = useRef<DOMRect | null>(null);

  const handlePointerEnter = (e: PointerEvent<SVGSVGElement>) => {
    svgRectRef.current = e.currentTarget.getBoundingClientRect();
  };

  // Zero-lag pointer scrubbing across the SVG canvas (no getBoundingClientRect layout thrash on move)
  const handleScrub = (e: PointerEvent<SVGSVGElement>) => {
    e.stopPropagation();
    const rect = svgRectRef.current ?? e.currentTarget.getBoundingClientRect();
    svgRectRef.current = rect;
    if (rect.width === 0) return;
    const relX = ((e.clientX - rect.left) / rect.width) * 560;
    const pts = telemetry.points;
    let nearest = 0;
    let minDist = Math.abs(pts[0].x - relX);
    for (let i = 1; i < pts.length; i++) {
      const dist = Math.abs(pts[i].x - relX);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    }
    if (nearest !== lastIdxRef.current) {
      lastIdxRef.current = nearest;
      setHoveredIdx(nearest);
    }
  };

  return (
    <section id="lab" aria-labelledby="lab-title" className="pt-28 sm:pt-36">
      <SectionHeading
        id="lab"
        index="02"
        eyebrow="Interactive Architecture Benchmarks"
        title="Inspect the real-time & performance engineering"
        description="Glide across the telemetry waveform to inspect live frames at 60 FPS, or step through the optimization stages that took FCP from 5.1s down to 0.9s (98 Lighthouse)."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Sandbox 1: Zero-Lag Interactive Real-Time Telemetry Waveform */}
        <SpotlightCard className="reveal flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-4">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex size-2.5 rounded-full ${
                    telemetry.anomaly ? "bg-red-500" : "bg-emerald-500"
                  }`}
                />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-fg">
                  REAL-TIME STREAMING &amp; ANOMALY ENGINE
                </span>
              </div>
              <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-accent">
                {telemetry.tag}
              </span>
            </div>

            {/* Mode Buttons */}
            <div
              role="tablist"
              aria-label="Telemetry simulation modes"
              className="mt-4 grid gap-2 sm:grid-cols-3"
            >
              {TELEMETRY_PRESETS.map((preset) => {
                const active = preset.id === telemetry.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setTelemetryId(preset.id);
                      lastIdxRef.current = 3;
                      setHoveredIdx(3);
                    }}
                    className={`rounded-xl border px-3 py-2 text-left font-mono text-[11px] font-semibold transition-colors ${
                      active
                        ? "border-accent bg-accent text-accent-fg shadow-sm"
                        : "border-border/80 bg-bg/60 text-muted hover:border-fg/30 hover:text-fg"
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Interactive SVG Waveform Canvas - smooth horizontal pointer scrubbing */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-border/80 bg-bg/90 p-4">
              {/* Live Inspected Node Readout */}
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/70 bg-card/80 px-3.5 py-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-subtle">Frame:</span>
                  <strong className="text-fg">{activePoint.time}</strong>
                  <span className="text-border">•</span>
                  <strong className="text-accent">{activePoint.value}</strong>
                </div>
                <span
                  className={`rounded px-2 py-0.5 text-[11px] font-semibold ${
                    activePoint.status.includes("CRITICAL")
                      ? "bg-red-500/15 text-red-400"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}
                >
                  {activePoint.status}
                </span>
              </div>

              <p className="mt-2.5 font-mono text-[11px] text-subtle">
                Move cursor across the chart to scrub telemetry frames ↓
              </p>

              <svg
                viewBox="0 0 560 100"
                onPointerEnter={handlePointerEnter}
                onPointerMove={handleScrub}
                onPointerDown={handleScrub}
                className="mt-2 h-32 w-full cursor-crosshair select-none overflow-visible touch-pan-y"
                role="img"
                aria-label={`Interactive telemetry waveform for ${telemetry.label}`}
              >
                <defs>
                  <linearGradient id="labWaveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={telemetry.anomaly ? "rgb(239,68,68)" : "rgb(251,146,60)"}
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor={telemetry.anomaly ? "rgb(239,68,68)" : "rgb(251,146,60)"}
                      stopOpacity="0.0"
                    />
                  </linearGradient>
                </defs>

                <line
                  x1="20"
                  y1="25"
                  x2="540"
                  y2="25"
                  stroke="currentColor"
                  className="text-border"
                  strokeDasharray="3 3"
                />
                <line
                  x1="20"
                  y1="55"
                  x2="540"
                  y2="55"
                  stroke="currentColor"
                  className="text-border"
                  strokeDasharray="3 3"
                />
                <line
                  x1="20"
                  y1="95"
                  x2="540"
                  y2="95"
                  stroke="currentColor"
                  className="text-border"
                />

                {/* Pre-computed Area & Curve (no CSS path transition lag) */}
                <path d={telemetry.areaPath} fill="url(#labWaveGrad)" />
                <path
                  d={telemetry.linePath}
                  fill="none"
                  stroke={telemetry.anomaly ? "rgb(239, 68, 68)" : "rgb(251, 146, 60)"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Vertical Crosshair on Active Point */}
                <line
                  x1={activePoint.x}
                  y1="6"
                  x2={activePoint.x}
                  y2="95"
                  stroke="rgb(251, 146, 60)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Data Nodes */}
                {telemetry.points.map((pt, idx) => {
                  const isCurrent = idx === hoveredIdx;
                  const isSpikeNode = telemetry.anomaly && idx === 3;
                  return (
                    <g key={pt.time}>
                      {isCurrent ? (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="9"
                          fill="none"
                          stroke={isSpikeNode ? "rgb(239,68,68)" : "rgb(251,146,60)"}
                          strokeWidth="1.5"
                          opacity="0.8"
                        />
                      ) : null}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isCurrent ? 5.5 : 3.5}
                        fill={
                          isCurrent
                            ? isSpikeNode
                              ? "rgb(239, 68, 68)"
                              : "rgb(251, 146, 60)"
                            : "rgb(24, 24, 27)"
                        }
                        stroke={isSpikeNode ? "rgb(239, 68, 68)" : "rgb(251, 146, 60)"}
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>

              <div className="mt-3 flex items-start gap-2.5 border-t border-border/70 pt-3 text-xs">
                {telemetry.anomaly ? (
                  <FiAlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-red-400" />
                ) : (
                  <FiCpu aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                )}
                <p className="leading-relaxed text-muted">{telemetry.diagnostic}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-4 font-mono text-[11px] text-subtle">
            <span>
              Ingest Latency: <strong className="text-accent">{telemetry.ingestMs}</strong>
            </span>
            <span className="text-emerald-400">OEE Visibility: {telemetry.oee}</span>
          </div>
        </SpotlightCard>

        {/* Sandbox 2: Core Web Vitals (98 Lighthouse & 5.1s → 0.9s FCP) */}
        <SpotlightCard className="reveal flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-4">
              <div className="flex items-center gap-2">
                <FiBarChart2 aria-hidden className="size-4 text-accent" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-fg">
                  PERFORMANCE &amp; K6 LOAD BENCHMARK
                </span>
              </div>
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-400">
                5.1s → 0.9s FCP (−82%)
              </span>
            </div>

            {/* Optimization Stage Switcher */}
            <div
              role="tablist"
              aria-label="Performance optimization stages"
              className="mt-4 grid gap-2 sm:grid-cols-3"
            >
              {PERF_STAGES.map((stage) => {
                const active = stage.id === perf.id;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPerfId(stage.id)}
                    className={`rounded-xl border px-3 py-2 text-left font-mono text-[11px] font-semibold transition-colors ${
                      active
                        ? "border-accent bg-accent text-accent-fg shadow-sm"
                        : "border-border/80 bg-bg/60 text-muted hover:border-fg/30 hover:text-fg"
                    }`}
                  >
                    {stage.label}
                  </button>
                );
              })}
            </div>

            {/* Live Gauges Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-border/80 bg-bg/70 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                  Lighthouse
                </span>
                <p
                  className={`mt-1 font-mono text-2xl font-bold ${
                    perf.lighthouse >= 90
                      ? "text-emerald-400"
                      : perf.lighthouse >= 75
                        ? "text-amber-400"
                        : "text-red-400"
                  }`}
                >
                  {perf.lighthouse}
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-bg/70 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                  FCP
                </span>
                <p className="mt-1 font-mono text-2xl font-bold text-accent">{perf.fcp}</p>
                <span className="font-mono text-[10px] text-emerald-400">{perf.fcpDelta}</span>
              </div>

              <div className="rounded-xl border border-border/80 bg-bg/70 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                  JS Bundle
                </span>
                <p className="mt-1 font-mono text-xl font-bold text-fg">{perf.bundleKb}</p>
              </div>

              <div className="rounded-xl border border-border/80 bg-bg/70 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                  k6 p95 Load
                </span>
                <p className="mt-1 font-mono text-xl font-bold text-emerald-400">
                  {perf.p95K6}
                </p>
              </div>
            </div>

            {/* Visual Progress Bars */}
            <div className="mt-4 space-y-3.5 rounded-2xl border border-border/80 bg-bg/90 p-4">
              <div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-fg">Lighthouse Performance Score</span>
                  <span className="font-bold text-emerald-400">{perf.lighthouse} / 100</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400 transition-[width] duration-300"
                    style={{ width: `${perf.lighthouse}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-fg">WCAG 2.1 Accessibility Score</span>
                  <span className="font-bold text-accent">{perf.a11y} / 100</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-accent transition-[width] duration-300"
                    style={{ width: `${perf.a11y}%` }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-2.5 border-t border-border/70 pt-3 text-xs">
                <FiZap aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                <p className="leading-relaxed text-muted">{perf.notes}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-4 font-mono text-[11px] text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <FiCheckCircle aria-hidden className="size-3.5 text-emerald-400" />
              90% Jest &amp; React Testing Library Coverage
            </span>
            <span className="inline-flex items-center gap-1 text-accent">
              <FiRefreshCw aria-hidden className="size-3" />
              99.9% AWS Production Uptime
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
