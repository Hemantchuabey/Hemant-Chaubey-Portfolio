import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, profile } from "@/data/profile";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { RevealObserver } from "@/components/ui/RevealObserver";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
});

const title = `${profile.name} - ${profile.role} · React, Next.js & TypeScript`;
const description =
  "Senior Software Engineer with 5+ years building fast, real-time web systems across enterprise OMS/WMS, industrial IoT telemetry, e-commerce, and BFSI platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Hemant Chaubey",
    "Senior Software Engineer",
    "Frontend Engineer",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Mumbai",
    "Freelance Next.js developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${profile.name} Portfolio`,
    title,
    description,
    firstName: profile.firstName,
    lastName: profile.lastName,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description, creator: "@Hemant1905" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#08080b" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        {/* Ambient architectural grid & subtle lighting */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-architectural-grid absolute inset-0" />
          <div className="animate-pulse-slow absolute -top-48 left-1/2 h-[540px] w-[960px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          <div className="absolute top-[38%] -right-64 h-[420px] w-[520px] rounded-full bg-accent/5 blur-[130px]" />
        </div>

        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>

        <TopNavbar />

        <main id="content" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <RevealObserver />
      </body>
    </html>
  );
}
