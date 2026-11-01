import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { HomeHero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { experienceSnapshot, experienceVisuals, hero, howIWork, organisations, resumeTransition, whatIBring } from "@/content/home";
import { career } from "@/content/profile";
import { buildMetadata } from "@/lib/metadata";
import { personSchema } from "@/lib/schema";
import { cn } from "@/utils/cn";

export const metadata: Metadata = buildMetadata({
  description: siteConfig.description,
  path: "/",
  ogType: "profile",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />

      <HomeHero
        eyebrow={hero.eyebrow}
        name={hero.name}
        statement={hero.statement}
        intro={hero.intro}
        now={hero.now}
        buttons={[
          { ...hero.primary, variant: "primary" },
          { ...hero.secondary, variant: "secondary" },
        ]}
      />

      {/* Organisations: a quiet strip of employers, as text marks only. */}
      <section aria-label={organisations.label} className="border-b border-border px-[clamp(20px,5vw,64px)] py-6">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-[clamp(24px,4vw,56px)] gap-y-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted">{organisations.label}</p>
          <ul className="flex flex-wrap items-center gap-x-[clamp(24px,4vw,56px)] gap-y-3">
            {organisations.items.map((org) => (
              <li key={org.short} className="flex items-baseline gap-2.5">
                <span className="font-serif text-[22px] font-semibold tracking-[-0.01em] text-navy">{org.short}</span>
                <span className="text-[12.5px] text-text-muted max-sm:hidden">{org.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What I Bring — four established areas in an asymmetric grid, then the developing direction. */}
      <Section background="dark" backdrop="static">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-end gap-[clamp(20px,5vw,80px)] max-lg:grid-cols-1">
          <h2 className="text-[clamp(38px,5.4vw,72px)] leading-[0.98] tracking-[-0.025em] text-white">{whatIBring.h2}</h2>
          <p className="max-w-[560px] font-serif text-[clamp(19px,1.9vw,23px)] italic leading-snug text-white/75">
            {whatIBring.intro}
          </p>
        </div>

        <div className="mt-[clamp(40px,6vw,80px)] grid grid-cols-12 border-t border-white/15">
          {whatIBring.areas.map((area, i) => (
            <div
              key={area.title}
              className={cn(
                "reveal group relative border-b border-white/15 py-[clamp(28px,3.4vw,48px)] max-md:col-span-12",
                // Alternate wide and narrow columns so the grid reads as a composition, not a row of cards.
                i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5",
                i % 2 === 0 ? "md:pr-[clamp(24px,4vw,64px)]" : "md:border-l md:pl-[clamp(24px,4vw,64px)]",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-[-1px] left-0 h-[2px] w-10 bg-gold transition-[width] duration-500 group-hover:w-24 motion-reduce:transition-none",
                  i % 2 === 1 && "md:left-[clamp(24px,4vw,64px)]",
                )}
              />
              <p aria-hidden="true" className="font-serif text-[15px] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className={cn(
                  "mt-3 leading-[1.12] text-white",
                  i === 0 || i === 3 ? "text-[clamp(26px,2.8vw,36px)]" : "text-[clamp(23px,2.2vw,28px)]",
                )}
              >
                {area.title}
              </h3>
              <p className="mt-3 max-w-[480px] text-[16px] leading-relaxed text-white/70">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-[clamp(32px,4vw,56px)] grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1.2fr)] items-center gap-x-[clamp(20px,4vw,56px)] gap-y-3 bg-ivory p-[clamp(24px,3.4vw,44px)] text-navy max-lg:grid-cols-[auto_minmax(0,1fr)]">
          <p aria-hidden="true" className="row-span-2 self-start font-serif text-[15px] text-gold-text lg:row-span-1 lg:self-center">05</p>
          <div>
            <h3 className="text-[clamp(24px,2.4vw,32px)] leading-[1.1] text-navy">{whatIBring.direction.title}</h3>
          </div>
          <p className="text-[16px] leading-relaxed text-text-muted max-lg:col-start-2">{whatIBring.direction.desc}</p>
        </div>
      </Section>

      {/* How I work — a selectable five-stage loop. */}
      <Section>
        <div className="mb-[clamp(32px,4.5vw,56px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
          <h2 className="text-[clamp(32px,4.2vw,54px)] leading-[1.02] tracking-[-0.02em] text-navy">{howIWork.h2}</h2>
          <p className="max-w-[460px] text-[16.5px] text-text-muted">{howIWork.intro}</p>
        </div>
        <HowIWork stages={howIWork.stages} />
      </Section>

      {/* Experience — four image-led cards, each a link to the full Experience page. */}
      <Section background="band">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <Eyebrow>{experienceSnapshot.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(30px,3.6vw,46px)] leading-[1.08] text-navy">{experienceSnapshot.h2}</h2>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy hover:text-gold-text"
          >
            {experienceSnapshot.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="mt-[clamp(32px,4.5vw,56px)] grid grid-cols-2 gap-[clamp(16px,2.4vw,32px)] max-md:grid-cols-1">
          {career.map((role, i) => {
            const key = `${role.organisationShort}-${role.years}`;
            return (
              <li key={key} className="reveal">
                <ExperienceCard role={role} index={i} visual={experienceVisuals[key]} />
              </li>
            );
          })}
        </ul>

        {/* A quiet hand-off to the resume, not a banner. */}
        <Link
          href="/resume"
          className="group mt-[clamp(40px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t border-gold/50 pt-[clamp(24px,3vw,36px)]"
        >
          <span className="block font-serif text-[clamp(22px,2.4vw,30px)] font-semibold leading-snug text-navy">
            {resumeTransition.h2}
          </span>
          <span className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy transition-colors group-hover:text-gold-text">
            {resumeTransition.linkLabel}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </span>
        </Link>
      </Section>

      <FeaturedProject />

      <ClosingCta />
    </>
  );
}
