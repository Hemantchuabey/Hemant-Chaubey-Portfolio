# [Hemant Chaubey — Portfolio](https://hemant-chaubey-portfolio.vercel.app/)

Personal portfolio of **Hemant Chaubey**, Senior Software Engineer (React · Next.js · TypeScript).

## Stack

- **Next.js 16** (App Router, React Server Components, Server Actions), **React 19**
- **TypeScript** (strict), **Tailwind CSS** with CSS-variable design tokens (light / dark)
- **Resend** for contact-form delivery (optional; falls back to a pre-filled `mailto:` draft)

## Architecture & performance notes

- The page is **statically prerendered**. Everything is a Server Component except five small client islands:
  `MobileHeader`, `ScrollSpyNav`, `ThemeToggle`, `RevealObserver`, `ContactForm` (+ `CopyEmailButton`).
- No animation library: reveal and hover effects are CSS transitions driven by a single shared `IntersectionObserver`,
  and they respect `prefers-reduced-motion`.
- Theme is applied by a tiny inline script before first paint, so there's no flash of the wrong theme.
- `next/image` with AVIF/WebP, blur placeholders and responsive `sizes`; self-hosted Geist variable fonts.
- SEO: Metadata API, generated Open Graph image, JSON-LD `Person`, `sitemap.xml`, `robots.txt`.
- Accessibility: skip link, landmarks, `aria-current` scroll-spy, focus-trapped mobile menu, labelled form fields.
- Content lives in typed modules under `src/data/*`, separate from the UI.

```
src/
  app/            layout, page, server action, sitemap/robots/OG image
  components/
    layout/       SideIntro (desktop), MobileHeader, ScrollSpyNav, Footer
    sections/     Hero, Experience, Projects, Skills, Services, Education, Contact
    ui/           Button, Tag, SectionHeading, ResumeButton, ThemeToggle, ...
  data/           profile, experience, projects, skills, services
  lib/            contact form types + validation
```

## Scripts

```bash
npm run dev        # local development
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Environment variables (contact form)

| Name | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | for email delivery | API key from https://resend.com. Without it, the form opens a pre-filled email draft instead. |
| `CONTACT_TO_EMAIL` | no | Inbox that receives messages (defaults to the email in `src/data/profile.ts`). |
| `CONTACT_FROM_EMAIL` | no | Verified sender, e.g. `Portfolio <hello@yourdomain.com>`. Defaults to `onboarding@resend.dev`, which only delivers to the email address your Resend account is registered with. |

## Updating the resume

Replace `public/Hemant_Chaubey_Resume.pdf`. The download buttons pick it up automatically.
