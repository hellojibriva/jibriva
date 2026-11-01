import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
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

      {/* Roles: a progression from 2016 to now. */}
      <Section className="pt-[clamp(48px,6vw,80px)]">
        <div className="relative border-l border-navy/15 md:ml-[180px]">
          {roles.map((role, i) => (
            <article key={`${role.organisationShort}-${role.years}`} className="relative pb-[clamp(48px,6vw,80px)] pl-8 last:pb-0 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 h-[13px] w-[13px] rounded-full border-2 border-gold bg-cream"
              />
              <p className="text-[13px] font-semibold tracking-[0.06em] text-gold-text md:absolute md:-left-[180px] md:top-1.5 md:w-[150px] md:text-right">
                {role.years}
              </p>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-text-muted md:mt-0">
                {String(i + 1).padStart(2, "0")} · {role.organisationShort}
              </p>
              <h2 className="mt-2 text-[clamp(24px,2.8vw,34px)] leading-[1.1] text-navy">{role.title}</h2>
              <p className="mt-1.5 text-[15.5px] text-text-muted">
                {role.programme} · {role.organisation}
              </p>
              <p className="mt-4 max-w-[640px] border-l-2 border-gold pl-4 font-serif text-[18px] italic leading-snug text-navy/85">
                {progressionFor(role.organisationShort, role.years)}
              </p>
              <ul className="mt-5 max-w-[720px] space-y-2.5">
                {role.responsibilities.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-3 text-[15.5px] leading-relaxed text-text">
                    <span aria-hidden="true" className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
