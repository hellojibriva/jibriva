import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AskMe } from "@/components/sections/AskMe";
import { CapabilityExplorer } from "@/components/sections/CapabilityExplorer";
import { CareerGantt } from "@/components/sections/CareerGantt";
import { journey } from "@/content/journey";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { aboutHero, askMe, drivers, education, principles, professionalDevelopment, profile } from "@/content/about";
import { capabilityAreas, researchInterests } from "@/content/capabilities";
import { buildMetadata } from "@/lib/metadata";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About Abi Precious Jibrin, Public Health Programme & Systems Specialist: background in animal science, experience in HIV/PMTCT and primary healthcare programmes, MEAL and health information, and research interests in One Health.",
  path: "/about",
  ogType: "profile",
});

const h2 = "text-[clamp(28px,3.4vw,40px)] leading-[1.08] text-navy";

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />

      {/* Story: name and narrative lead; the portrait supports. */}
      <section className="relative isolate overflow-hidden px-[clamp(20px,5vw,64px)] pt-[clamp(36px,7vw,96px)] pb-[clamp(48px,7vw,96px)]">
        <HealthBackdrop animated={false} className="-z-10 opacity-70 [mask-image:linear-gradient(90deg,transparent_20%,black_80%)]" />
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] gap-[clamp(32px,6vw,96px)] max-md:grid-cols-1">
          <div>
            <Eyebrow>{aboutHero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[clamp(42px,6vw,76px)] leading-[0.98] tracking-[-0.025em] text-navy">
              {aboutHero.h1}
            </h1>
            <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold-text">{aboutHero.subtitle}</p>
            <div className="mt-8 max-w-[680px] space-y-5">
              {profile.map((p, i) => (
                <p
                  key={p.slice(0, 32)}
                  className={
                    i === 0
                      ? "text-[18px] leading-relaxed text-text sm:text-[19.5px]"
                      : "text-[16.5px] leading-relaxed text-text-muted sm:text-[17.5px]"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/experience" className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy hover:text-gold-text">
                My experience <span aria-hidden="true">→</span>
              </Link>
              <Link href="/resume" className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy hover:text-gold-text">
                View resume <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <figure className="relative isolate w-[clamp(170px,17vw,240px)] self-start max-md:order-first max-md:w-[120px]">
            <span aria-hidden="true" className="absolute -bottom-3 -left-3 -z-10 h-full w-full border border-gold/60" />
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-sand">
              <Image
                src="/team/abi-precious-jibrin.png"
                alt={`${siteConfig.name}, ${siteConfig.title}`}
                fill
                priority
                sizes="240px"
                className="object-cover object-top"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* The journey so far: a Gantt-style view of education, roles and projects. */}
      <Section background="band" id="journey" className="scroll-mt-20">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-end gap-[clamp(16px,4vw,64px)] max-lg:grid-cols-1">
          <div>
            <h2 className={h2}>{journey.h2}</h2>
            <p className="mt-3 font-serif text-[clamp(18px,1.8vw,21px)] italic text-text-muted">{journey.intro}</p>
          </div>
          <p className="max-w-[560px] text-[16.5px] leading-relaxed text-text">{journey.statement}</p>
        </div>
        <div className="mt-[clamp(24px,3.5vw,44px)]">
          <CareerGantt journey={journey} />
        </div>
        <Link
          href="/blog/from-animal-science-to-public-health"
          className="mt-[clamp(24px,3vw,36px)] inline-flex items-center gap-2 border-b border-gold pb-1 text-[15px] font-semibold text-navy hover:text-gold-text"
        >
          Read the story behind my journey <span aria-hidden="true">→</span>
        </Link>
      </Section>

      {/* What drives the work: four short reasons, in Abi's voice. */}
      <Section>
        <h2 className={h2}>{drivers.h2}</h2>
        <span aria-hidden="true" className="mt-5 block h-px w-12 bg-gold" />
        <div className="mt-[clamp(24px,3vw,40px)] grid grid-cols-4 border-t border-navy/15 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {drivers.items.map((d, i) => (
            <div
              key={d.title}
              className="reveal border-b border-navy/15 py-6 pr-6 lg:border-b-0 lg:not-first:border-l lg:not-first:pl-6 max-lg:even:border-l max-lg:even:pl-6 max-sm:even:border-l-0 max-sm:even:pl-0"
            >
              <p aria-hidden="true" className="font-serif text-[15px] text-gold-text">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[clamp(19px,1.7vw,22px)] leading-snug text-navy">{d.title}</h3>
              <p className="mt-2 text-[15.5px] leading-relaxed text-text-muted">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities to explore, then research interests. */}
      <Section background="band" className="scroll-mt-20">
        <div id="capabilities" className="scroll-mt-28">
          <h2 className={h2}>Professional Capabilities</h2>
          <span aria-hidden="true" className="mt-5 mb-[clamp(24px,3vw,40px)] block h-px w-12 bg-gold" />
          <CapabilityExplorer areas={capabilityAreas} />
        </div>
        <div className="surface-navy relative mt-[clamp(32px,4vw,56px)] grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-[clamp(24px,4vw,64px)] gap-y-5 overflow-hidden rounded-[12px] bg-deep p-[clamp(24px,3.5vw,44px)] text-white max-md:grid-cols-1">
          <h2 className="text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-white">Areas of Research Interest</h2>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {researchInterests.map((item) => (
              <p key={item} className="border-l-2 border-gold pl-4 font-serif text-[clamp(18px,1.7vw,21px)] font-semibold leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Ask me about my work: an accordion of real questions. */}
      <Section>
        <div id="ask" className="grid scroll-mt-28 grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)] gap-[clamp(24px,5vw,72px)] max-lg:grid-cols-1">
          <div>
            <h2 className={h2}>{askMe.h2}</h2>
            <span aria-hidden="true" className="mt-5 block h-px w-12 bg-gold" />
            <p className="mt-5 max-w-[360px] text-[16.5px] leading-relaxed text-text-muted">{askMe.intro}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy hover:text-gold-text">
              Ask me something else <span aria-hidden="true">→</span>
            </Link>
          </div>
          <AskMe items={askMe.items} />
        </div>
      </Section>

      {/* Education and principles */}
      <Section>
        <div className="grid grid-cols-2 gap-[clamp(40px,6vw,96px)] max-md:grid-cols-1">
          <div>
            <Eyebrow>Education</Eyebrow>
            <h2 className={`mt-3 ${h2}`}>{education.qualification}</h2>
            <p className="mt-2 text-[16px] text-text-muted">
              {education.institution}, {education.year}
            </p>
            <p className="mt-8 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-text">Professional development</p>
            <ul className="mt-3 space-y-2 text-[16px] text-text">
              {professionalDevelopment.map((cert) => (
                <li key={cert} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-gold" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <figure className="self-center border-l-2 border-gold pl-[clamp(20px,3vw,40px)]">
            <blockquote className="font-serif text-[clamp(22px,2.4vw,30px)] italic leading-snug text-navy">{principles}</blockquote>
            <figcaption className="mt-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold-text">How I work</figcaption>
          </figure>
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
