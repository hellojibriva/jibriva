import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { achievements, experienceHero, progression } from "@/content/experience";
import { career } from "@/content/profile";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "Professional experience of Abi Precious Jibrin: PSHAN, SCIDaR (PEPFAR/USAID ASPIRE and ACHIEVE) and WHO polio campaign surveillance, with selected achievements.",
  path: "/experience",
});

// Oldest first, so the page reads as a progression.
const roles = [...career].reverse();
const progressionFor = (org: string, years: string) => progression[`${org}-${years}`] ?? progression[org];

export default function ExperiencePage() {
  return (
    <>
      <PageHero eyebrow={experienceHero.eyebrow} h1={experienceHero.h1} paragraph={experienceHero.paragraph} />

      {/* Roles: an interactive progression from 2016 to now. */}
      <Section className="pt-[clamp(48px,6vw,80px)]">
        <CareerTimeline roles={roles} notes={roles.map((r) => progressionFor(r.organisationShort, r.years))} />
      </Section>

      {/* Achievements — only things stated in the CV or completed projects on this site. */}
      <Section background="dark" backdrop="static">
        <Eyebrow tone="dark">Achievements</Eyebrow>
        <h2 className="mt-3 max-w-[720px] text-[clamp(30px,3.8vw,48px)] leading-[1.05] text-white">What I&apos;m proud of</h2>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-6 gap-px border border-white/10 bg-white/10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`flex flex-col bg-deep/80 p-[clamp(22px,2.6vw,32px)] ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gold">{a.source}</p>
              <h3 className="mt-3 text-[clamp(20px,2vw,24px)] leading-snug text-white">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{a.text}</p>
              {a.href && (
                <Link
                  href={a.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 border-b border-gold/70 pt-5 pb-1 text-[14px] font-semibold text-white hover:text-gold"
                >
                  See the project <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[560px] font-serif text-[clamp(22px,2.4vw,28px)] leading-snug text-navy">
            Want the full picture on one page, with education and skills?
          </p>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[15px] font-semibold text-navy hover:text-gold-text"
          >
            View my resume <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
