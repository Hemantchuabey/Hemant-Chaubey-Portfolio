import type { StaticImageData } from "next/image";
import sneakerHome from "../../public/sneakerhome.png";
import foodKart from "../../public/foodkart.png";

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
    slug: "sneakers-world",
    id: "BUILD_01",
    title: "Sneaker World",
    category: "Haute Couture Commerce · RFC 7519 JWT & Web Audio",
    tagline: "High-performance luxury footwear storefront featuring RFC 7519 client-side JWT auth, 15-minute auto-expiry session guard, and Web Audio synthesis.",
    description:
      "A luxury e-commerce platform and private collector vault engineered with modern React 18, Redux Toolkit, and Tailwind CSS. Features an RFC 7519 compliant client-side JWT authentication system with active token countdown and auto-logout, a tab-lifecycle storage guard using sessionStorage sentinels, and a synthesized Web Audio feedback engine with zero audio asset latency.",
    highlights: [
      "Client-side RFC 7519 JWT authentication with base64url header/payload decoding, 15-minute token lifespan countdown, expiry warnings, and interactive inspector modal.",
      "Tab lifecycle storage guard utilizing sessionStorage sentinels to cleanly purge stale auth state when browser tabs are closed while preserving reload persistence.",
      "Zero-latency haptic sound engine synthesized directly via the Web Audio API for bag additions, navigation clicks, and order settlements.",
      "Luxury visual craft with 3D interactive card tilt physics, dynamic cursor spotlights, and responsive Tailwind layouts.",
    ],
    stack: [
      "React 18",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router 6",
      "Web Audio API",
      "RFC 7519 JWT",
      "Vercel Edge",
    ],
    metrics: [
      { label: "Session Security", value: "RFC 7519 JWT" },
      { label: "Audio Latency", value: "0ms (Web Audio)" },
    ],
    image: sneakerHome,
    live: "https://sneakers-world-phi.vercel.app/",
    repo: "https://github.com/Hemantchuabey/Sneakers-World",
  },
  {
    slug: "food-tailwind-app",
    id: "BUILD_02",
    title: "Food Tailwind App",
    category: "Culinary Commerce · Context Cart & Framer Motion",
    tagline: "Dynamic food ordering experience with category filtering, slide-over cart drawer, and fluid Framer Motion animations.",
    description:
      "A modern, responsive food discovery and delivery web application built with React 18, Tailwind CSS, and Framer Motion. Engineered with centralized CartContext state management, category filtering across dishes, an interactive cart drawer with quantity counters and instant subtotal calculation, and smooth page micro-interactions.",
    highlights: [
      "React CartContext state architecture managing item additions, quantity updates, modifier states, and sliding cart drawer synchronization.",
      "Category-driven food menu filtering with instant response, responsive product cards, and quick-add actions.",
      "Fluid micro-interactions and transition physics crafted using Framer Motion and custom Tailwind design tokens.",
      "Lazy-loaded route splitting for Checkout and Order status pages to maintain fast first contentful paint.",
    ],
    stack: [
      "React 18",
      "Framer Motion",
      "Tailwind CSS",
      "React Router 6",
      "Context API",
      "Vercel Edge",
    ],
    metrics: [
      { label: "State Engine", value: "Context API" },
      { label: "Motion", value: "Framer 60 FPS" },
    ],
    image: foodKart,
    live: "https://food-tailwind-app-three.vercel.app/",
    repo: "https://github.com/Hemantchuabey/Food-Tailwind-App",
  },
];
