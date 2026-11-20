import type { StaticImageData } from "next/image";
import sneakerWorld from "../../public/sneaker-world.png";
import foodTailwind from "../../public/food-tailwind.png";
import foodShopKart from "../../public/food-shop-kart.png";
import kanbanBoard from "../../public/kanban-board.png";

export type FeaturedProject = {
  slug: string;
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  image: StaticImageData;
  live?: string;
  repo?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "sneaker-world",
    id: "BUILD_01",
    title: "Sneaker World",
    category: "E-Commerce Storefront · State & Filtering Engine",
    tagline: "High-speed responsive sneaker commerce experience with instant multi-facet filtering & dynamic cart state.",
    description:
      "Designed and built a fast, tactile sneaker shopping platform focused on zero-latency catalog filtering, size/color variant selection, and persistent cart orchestration.",
    highlights: [
      "Instant client-side multi-attribute filtering (brand, price bracket, category, availability) with zero layout shift.",
      "Optimistic cart state transitions with quantity validation, subtotal calculation, and responsive drawer UX.",
      "Mobile-first product grid with smooth hover physics and lazy-loaded high-DPI sneaker imagery.",
    ],
    stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Context / State API", "Vercel Edge"],
    metrics: [
      { label: "Filter Latency", value: "<16ms" },
      { label: "Lighthouse UI", value: "96+" },
    ],
    image: sneakerWorld,
    live: "https://sneakers-world-hemantchuabey.vercel.app/",
    repo: "https://github.com/Hemantchuabey",
  },
  {
    slug: "food-shop-kart",
    id: "BUILD_02",
    title: "Food Shop Kart",
    category: "Consumer Ordering App · Redux Toolkit Architecture",
    tagline: "Full-cycle food ordering application powered by deterministic Redux Toolkit slices and instant checkout flows.",
    description:
      "A food discovery and cart ordering application demonstrating normalized Redux state management, dish customization, and friction-free checkout UX.",
    highlights: [
      "Centralized Redux Toolkit slices handling menu hydration, item modifiers, coupon logic, and cart persistence.",
      "Category-driven menu exploration with debounced search and instant dietary filtering.",
      "Accessible, touch-optimized item counters and real-time bill breakdown.",
    ],
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST Integration", "Vercel"],
    metrics: [
      { label: "State Architecture", value: "RTK Slices" },
      { label: "UX Flow", value: "3-Tap Order" },
    ],
    image: foodShopKart,
    live: "https://food-shop-kart.vercel.app/",
    repo: "https://github.com/Hemantchuabey",
  },
  {
    slug: "kanban-board",
    id: "BUILD_03",
    title: "Interactive Kanban Workspace",
    category: "Productivity Tool · Drag-and-Drop State Machine",
    tagline: "Tactile task & sprint board with multi-column drag-and-drop, priority tagging, and local state persistence.",
    description:
      "An engineering-focused Kanban workflow board built to handle smooth card reordering across columns without external heavy dependencies.",
    highlights: [
      "Deterministic column & card ordering state with drag-and-drop swimlane transitions.",
      "Inline task creation, priority badges, and instant board filtering by status or tag.",
      "Zero-flicker local persistence ensuring workspace state survives reloads cleanly.",
    ],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Drag & Drop API", "Local Storage"],
    metrics: [
      { label: "Interaction", value: "60 FPS Drag" },
      { label: "Persistence", value: "Local-First" },
    ],
    image: kanbanBoard,
    repo: "https://github.com/Hemantchuabey",
  },
  {
    slug: "food-tailwind",
    id: "BUILD_04",
    title: "Tailwind Culinary Experience",
    category: "Design System & UI Craft · Responsive Architecture",
    tagline: "Editorial-grade restaurant & culinary landing system crafted with custom Tailwind utility tokens.",
    description:
      "A showcase of fluid typography, responsive grid choreography, and accessible dark/light contrast built from scratch using Tailwind CSS.",
    highlights: [
      "Fluid clamp() typography and responsive CSS Grid layouts across mobile, tablet, and ultrawide viewports.",
      "Custom micro-interactions, curated visual hierarchy, and semantic HTML5 landmarks.",
      "Optimized asset delivery achieving sub-second First Contentful Paint.",
    ],
    stack: ["React.js", "Tailwind CSS", "HTML5 Semantic DOM", "Responsive Grid", "Vercel"],
    metrics: [
      { label: "FCP Speed", value: "~0.9s" },
      { label: "Accessibility", value: "WCAG AA" },
    ],
    image: foodTailwind,
    live: "https://food-tailwind-app.vercel.app/",
    repo: "https://github.com/Hemantchuabey",
  },
];
