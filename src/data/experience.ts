export type RoleMetric = {
  value: string;
  label: string;
};

export type RoleDomain = {
  id: string;
  name: string;
  tag: string;
  summary: string;
  bullets: string[];
};

export type Role = {
  id: string;
  company: string;
  shortName: string;
  title: string;
  location: string;
  period: string;
  tenureBadge: string;
  current?: boolean;
  summary: string;
  metrics: RoleMetric[];
  domains: RoleDomain[];
  stack: string[];
};

export const experience: Role[] = [
  {
    id: "uttam-galva",
    company: "Uttam Galva Innovative Solutions",
    shortName: "Uttam Galva",
    title: "Senior Software Engineer",
    location: "Mumbai, India",
    period: "May 2026 - Present",
    tenureBadge: "Full-Stack OMS · WMS · CSMS & Real-Time Telemetry",
    current: true,
    summary:
      "Architecting full-stack modules across Order Management (OMS), Warehouse Management (WMS), Customer Support (CSMS) and real-time industrial telemetry platforms. Integrating Next.js 16 & React 19 interfaces with Express 5 APIs, MySQL 8 workflows, JWT/RBAC security, and Socket.IO/WebSocket streams.",
    metrics: [
      { value: "−70%", label: "Telemetry ingest latency" },
      { value: "−45%", label: "Downtime response time" },
      { value: "+35%", label: "Operational visibility" },
      { value: "−50%", label: "AI diagnostic prep time" },
    ],
    domains: [
      {
        id: "wms-oms",
        name: "Enterprise WMS · OMS · CSMS Systems",
        tag: "Next.js 16 · Express 5 · MySQL 8 · JWT/RBAC",
        summary:
          "End-to-end operational platforms powering procurement, warehouse floor scanning, courier logistics, dispatch manifests and RMA support.",
        bullets: [
          "Architect and deliver modules across OMS, WMS and CSMS portals using Next.js 16, React 19 and TypeScript, delivering operational dashboards, searchable data views, role-aware navigation and validated transactional workflows.",
          "Implement WMS workflows covering Purchase Requisitions (PR), Purchase Orders (PO), gate entry, Goods Receipt Notes (GRN), lot/serial traceability, barcode & DataMatrix labels, quality-control checks, putaway, picking, stock visibility and bin-to-bin transfers.",
          "Build OMS fulfilment journeys for order allocation, packing slips, carton checks, courier selection, AWB/label generation, dispatch manifests, shipment tracking, delivery exceptions and returns alongside CSMS refund and RMA replacement flows.",
          "Integrate portal workflows with Express 5 / MySQL 8 APIs, JWT/RBAC-protected operations, external 3PL courier services and Socket.IO updates with resilient loading, validation, retry and error states.",
        ],
      },
      {
        id: "iot-telemetry",
        name: "Real-Time Telemetry & AI Diagnostics",
        tag: "WebSocket · SSE · Ring Buffers · LTTB",
        summary:
          "High-frequency streaming pipelines and deterministic time-series visualisations for industrial PLC machine data.",
        bullets: [
          "Engineer real-time telemetry interfaces for Siemens S7-1200 PLC streams, including OEE dashboards, production timelines, sensor waveforms, machine status and downtime events over WebSocket/SSE (+35% operational visibility, 45% faster downtime response).",
          "Implement streaming time-series patterns including incremental updates, bounded in-memory ring buffers, binary-search timestamp-range slicing and LTTB waveform downsampling to reduce telemetry ingest latency by 70%.",
          "Integrate AI-copilot workflows for maintenance diagnostics and shift handovers grounded in deterministic operational metrics, cutting diagnostic report preparation time by 50%.",
        ],
      },
      {
        id: "k6-perf",
        name: "Grafana k6 Load Testing & API Architecture",
        tag: "Grafana k6 · Concurrency Profiling · Agile",
        summary:
          "Stress-testing critical order and warehouse journeys under staged virtual-user concurrency.",
        bullets: [
          "Execute Grafana k6 load tests across staged virtual-user concurrency levels; profile response times, throughput and error rates across core journeys to eliminate backend and frontend bottlenecks.",
          "Partner with backend, QA, product and AI engineering teams to define API contracts, data schemas and end-to-end release standards.",
        ],
      },
    ],
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express 5",
      "MySQL 8",
      "WebSockets / SSE",
      "Socket.IO",
      "JWT / RBAC",
      "LTTB Downsampling",
      "Grafana k6",
    ],
  },
  {
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    shortName: "TCS",
    title: "System Engineer",
    location: "Mumbai, India",
    period: "2021 - May 2026",
    tenureBadge: "BFSI & High-Scale E-Commerce (120K+ Users)",
    summary:
      "Engineered and optimised production React.js and Next.js e-commerce applications for a major BFSI client serving 120K+ users, leading performance engineering (98 Lighthouse score, 5.1s → 0.9s FCP), shared UI architecture, REST API contract validation and AWS CI/CD releases.",
    metrics: [
      { value: "120K+", label: "Active platform users" },
      { value: "−82%", label: "FCP (5.1s → 0.9s)" },
      { value: "98", label: "Lighthouse Performance" },
      { value: "90%", label: "Jest & RTL test coverage" },
    ],
    domains: [
      {
        id: "perf-scale",
        name: "High-Scale E-Commerce & Performance",
        tag: "120K+ Users · Lighthouse 98 · 0.9s FCP",
        summary:
          "High-conversion customer journeys and deep bundle optimization for a flagship BFSI e-commerce platform.",
        bullets: [
          "Developed and enhanced React.js/Next.js e-commerce applications serving 120K+ users; increased user engagement by 25% through responsive interfaces, search enhancements and checkout usability improvements.",
          "Cut FCP by 82% (from 5.1s down to 0.9s) and overall page load times by 60%+ via route-level lazy loading, code splitting and bundle optimisation, achieving a 98 Lighthouse Performance score and 95+ Accessibility.",
        ],
      },
      {
        id: "design-system",
        name: "Component Architecture & TypeScript Migration",
        tag: "Shared UI Library · −30% Delivery Time · −25% Defects",
        summary:
          "Standardized component architecture across client engineering teams while modernising legacy codebases to strict TypeScript.",
        bullets: [
          "Designed and shipped a reusable React component library adopted across client teams, standardising UI patterns, enforcing WCAG accessibility, and reducing feature delivery time by 30%.",
          "Modernised legacy React class components to React Hooks and strict TypeScript; reduced production defects by 25% and accelerated incident resolution by 50%.",
        ],
      },
      {
        id: "testing-aws",
        name: "90% Test Coverage, REST APIs & AWS CI/CD",
        tag: "Jest · RTL · Postman/Axios · AWS (99.9% Uptime)",
        summary:
          "Automated testing suites, API contract engineering, and high-availability cloud deployments.",
        bullets: [
          "Established Jest and React Testing Library unit & integration testing suites at 90% code coverage; validated REST API contracts using Postman and Axios with backend teams.",
          "Supported AWS (S3, CloudFront, Amplify, EC2) CI/CD production deployments maintaining 99.9% uptime across Agile sprints.",
          "Mentored 2–3 junior engineers on React architecture, performance optimisation, testing and code review standards.",
        ],
      },
    ],
    stack: [
      "React.js (18/19)",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs / Axios",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "AWS (S3 · CloudFront · Amplify · EC2)",
      "GitHub Actions CI/CD",
    ],
  },
];
