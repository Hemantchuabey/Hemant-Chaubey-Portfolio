import { FiArrowUpRight, FiCheckCircle, FiClock, FiMail, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/profile";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-28 sm:pt-36">
      <SectionHeading
        id="contact"
        index="06"
        eyebrow="Direct Channel & Project Intake"
        title="Let's build something meaningful"
        description="Whether you're taking a product from 0 to 1, scaling a mission-critical system, or solving a tough engineering problem, reach out directly below."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left 5 Columns: Executive Contact Deck & Resume Vault */}
        <div className="space-y-4 lg:col-span-5">
          <SpotlightCard className="reveal p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                AVAILABILITY STATUS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                Accepting Inquiries
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">
              Direct Engineering Contact
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Open to opportunities where I can build 0 to 1 products, scale real-time systems, and drive meaningful engineering impact.
            </p>

            <div className="mt-6 space-y-3">
              {/* Email Card with One-Click Copy */}
              <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-bg/60 p-3.5">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FiMail aria-hidden className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">Direct Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="block truncate text-sm font-medium text-fg hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </div>
                <CopyEmailButton email={profile.email} />
              </div>

              {/* LinkedIn Card */}
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border/80 bg-bg/60 p-3.5 transition-colors hover:border-accent/40"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">LinkedIn Network</p>
                  <p className="text-sm font-medium text-fg group-hover:text-accent">
                    Connect with Hemant Chaubey
                  </p>
                </div>
                <FiArrowUpRight aria-hidden className="size-4 text-subtle group-hover:text-accent" />
                <span className="sr-only">(opens in new tab)</span>
              </a>

              {/* Location & Response SLA */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/80 bg-bg/60 p-3.5">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-subtle">
                    <FiMapPin aria-hidden className="size-3 text-accent" />
                    Base
                  </div>
                  <p className="mt-1 text-xs font-medium text-fg">{profile.location}</p>
                  <p className="text-[11px] text-subtle">IST (UTC+5:30) · Remote</p>
                </div>
                <div className="rounded-xl border border-border/80 bg-bg/60 p-3.5">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-subtle">
                    <FiClock aria-hidden className="size-3 text-accent" />
                    Response Time
                  </div>
                  <p className="mt-1 text-xs font-medium text-fg">&lt; 24 Hours</p>
                  <p className="text-[11px] text-subtle">Direct reply guaranteed</p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Dedicated Resume PDF Vault Card */}
          <SpotlightCard className="reveal p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  <FiCheckCircle aria-hidden className="size-3.5" />
                  Curriculum Vitae (PDF)
                </span>
                <h3 className="mt-2 text-lg font-semibold text-fg">
                  Need the formal 1-page engineering resume?
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Includes full experience at Uttam Galva &amp; TCS, system metrics and architecture keywords formatted for ATS &amp; hiring committees.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <ResumeButton label="Download Resume (PDF)" className="w-full" />
            </div>
          </SpotlightCard>
        </div>

        {/* Right 7 Columns: Interactive Job & Freelance Intake Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="reveal p-6 sm:p-8">
            <div className="mb-6 border-b border-border/70 pb-4">
              <h3 className="text-xl font-semibold tracking-tight text-fg">
                Send a message or scope a project
              </h3>
              <p className="mt-1 text-xs text-subtle">
                Switch between <strong className="text-fg">Job opportunity</strong> and{" "}
                <strong className="text-fg">Freelance project</strong> to tailor the intake fields.
              </p>
            </div>
            <ContactForm />
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
