export const SITE_URL = "https://hemant-chaubey-portfolio.vercel.app";

export const profile = {
  name: "Hemant Chaubey",
  firstName: "Hemant",
  lastName: "Chaubey",
  role: "Senior Software Engineer",
  headline: "Full-Stack Product, Real-Time & AI Systems Engineer",
  focus: [
    "React 19 & Next.js 16",
    "TypeScript",
    "Node.js & Express 5",
    "AI Agents & Copilot Workflows",
    "MySQL 8 · Redis · BullMQ",
    "WebSockets & Real-Time Systems",
    "AWS & Grafana k6",
  ],
  pitch:
    "Senior Software Engineer with 5+ years of experience architecting full-stack web products, event-driven APIs, and real-time operational platforms across enterprise supply chain, industrial telemetry, and high-scale commerce.",
  summary: [
    "I build production systems end-to-end, connecting Next.js 16 & React 19 frontends with Express 5 / Node.js services, MySQL 8 schemas, Redis/BullMQ job queues, and WebSocket/SSE streaming pipelines.",
    "At Uttam Galva, I lead architecture across OMS, WMS, and CSMS platforms alongside real-time industrial telemetry and AI diagnostics. Previously at TCS, I engineered e-commerce applications for 120K+ users, driving an 82% FCP reduction (5.1s → 0.9s, 98 Lighthouse score) with 90% automated test coverage and 99.9% AWS uptime.",
  ],
  location: "Mumbai, India",
  phone: "+91 9820341831",
  email: "hementchaubey@gmail.com",
  resume: "/Hemant_Chaubey_Resume.pdf",
  resumeFileName: "Hemant_Chaubey_Resume.pdf",
  availability: "Open to 0 to 1 product builds & high-impact engineering challenges",
  socials: {
    linkedin: "https://www.linkedin.com/in/hemant-chaubey-9400a1267/",
    github: "https://github.com/Hemantchuabey",
    leetcode: "https://leetcode.com/u/hemant_chaubey/",
    x: "https://x.com/Hemant1905",
  },
} as const;

export const impactStats = [
  {
    id: "01",
    value: "98 / 100",
    label: "Lighthouse Performance",
    detail: "0.9s FCP (down from 5.1s · −82% faster)",
  },
  {
    id: "02",
    value: "120K+",
    label: "Active Platform Users",
    detail: "+25% user engagement & 99.9% production AWS availability",
  },
  {
    id: "03",
    value: "−70%",
    label: "Stream Ingest Latency",
    detail: "Ring-buffer memory windows, binary timestamp slicing & LTTB",
  },
  {
    id: "04",
    value: "90%",
    label: "Automated Test Coverage",
    detail: "Jest, React Testing Library & Grafana k6 virtual-user load tests",
  },
] as const;

export const navItems = [
  { id: "about", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "lab", label: "Architecture" },
  { id: "projects", label: "Builds" },
  { id: "skills", label: "Stack" },
  { id: "services", label: "Advisory" },
  { id: "contact", label: "Contact" },
] as const;
