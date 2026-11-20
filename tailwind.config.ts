import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        elevated: token("elevated"),
        fg: token("fg"),
        muted: token("muted"),
        subtle: token("subtle"),
        border: token("border"),
        card: token("card"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
