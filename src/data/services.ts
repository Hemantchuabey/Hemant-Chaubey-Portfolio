export const services = [
  {
    title: "Full-Stack Product & Platform Engineering",
    tag: "NEXT.JS 16 · NODE · EXPRESS · MYSQL",
    description:
      "End-to-end architecture and delivery of production SaaS portals, enterprise supply-chain systems (OMS/WMS), and high-conversion commerce platforms.",
    deliverables: [
      "Next.js App Router + Express 5 / MySQL 8 APIs",
      "Role-based (JWT / RBAC) enterprise workflows",
      "Idempotent checkout, webhooks & Redis/BullMQ queues",
    ],
    icon: "layers",
  },
  {
    title: "Real-Time Streaming & Operational Dashboards",
    tag: "WEBSOCKET · SOCKET.IO · SSE",
    description:
      "Low-latency operational dashboards that ingest and visualize high-frequency telemetry streams smoothly at 60 FPS without main-thread bottlenecks.",
    deliverables: [
      "WebSocket / Socket.IO / SSE streaming pipelines",
      "Ring buffers, binary timestamp slicing & LTTB charts",
      "Anomaly alerts & deterministic AI-copilot workflows",
    ],
    icon: "activity",
  },
  {
    title: "Performance Engineering & Load Testing",
    tag: "LIGHTHOUSE 98 · 0.9S FCP · K6",
    description:
      "Full performance audits and refactoring to reduce bundle size, cut FCP (5.1s → 0.9s, −82%), and maintain sub-150ms p95 latency under concurrent traffic.",
    deliverables: [
      "Route-level code splitting & bundle optimization",
      "Core Web Vitals (FCP, LCP, INP, CLS) remediation",
      "Grafana k6 staged concurrency & throughput profiling",
    ],
    icon: "zap",
  },
  {
    title: "Shared Component Systems & Quality Gates",
    tag: "DESIGN SYSTEMS · 90% JEST · AWS CI/CD",
    description:
      "Reusable, strictly typed React & TypeScript architectures backed by automated testing and high-availability AWS release pipelines.",
    deliverables: [
      "Accessible (WCAG 2.1 AA) shared UI libraries (+30% velocity)",
      "90% Jest & React Testing Library automated coverage",
      "AWS (S3, CloudFront, Amplify, EC2) CI/CD deployments",
    ],
    icon: "grid",
  },
] as const;
