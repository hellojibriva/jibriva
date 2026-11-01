import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { aboutHero, education, principles, professionalDevelopment, profile } from "@/content/about";
import { professionalCapabilities, researchInterests } from "@/content/capabilities";
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

      {/* Capabilities and research interests: two balanced groups. */}
      <Section background="band" className="scroll-mt-20">
        <div id="capabilities" className="grid scroll-mt-28 grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-[clamp(32px,5vw,72px)] max-lg:grid-cols-1">
          <div>
            <h2 className={h2}>Professional Capabilities</h2>
            <span aria-hidden="true" className="mt-5 block h-px w-12 bg-gold" />
            <div className="mt-6 grid grid-cols-2 gap-x-10 border-t border-navy/15 max-sm:grid-cols-1">
              {professionalCapabilities.map((item, i) => (
                <div key={item} className="flex gap-4 border-b border-navy/15 py-5">
                  <span aria-hidden="true" className="font-serif text-[16px] text-gold-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[clamp(18px,1.6vw,20px)] font-semibold leading-snug text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-navy relative self-start overflow-hidden bg-deep p-[clamp(28px,3.5vw,44px)] text-white">
            <h2 className="text-[clamp(26px,3vw,34px)] leading-[1.1] text-white">Areas of Research Interest</h2>
            <span aria-hidden="true" className="mt-5 block h-px w-12 bg-gold" />
            <div className="mt-6 space-y-6">
              {researchInterests.map((item) => (
                <p key={item} className="border-l-2 border-gold pl-4 font-serif text-[clamp(19px,1.8vw,22px)] font-semibold leading-snug">
                  {item}
                </p>
              ))}
            </div>
          </div>
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
