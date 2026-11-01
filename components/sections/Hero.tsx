import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IntelligencePanel } from "@/components/sections/IntelligencePanel";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { siteConfig } from "@/config/site";

interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface HomeHeroProps {
  eyebrow: string;
  name: string;
  statement: string;
  intro: string;
  now: { label: string; text: string };
  buttons: HeroButton[];
}

/**
 * Homepage hero: name, title, statement and calls to action on the left; an
 * interactive programme-intelligence panel on the right (beneath on phones).
 * A modest portrait sits directly left of the name.
 */
export function HomeHero({ eyebrow, name, statement, intro, now, buttons }: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-[clamp(20px,5vw,64px)] pt-[clamp(28px,6vw,96px)] pb-[clamp(64px,9vw,128px)]">
      <HealthBackdrop className="-z-10 [mask-image:linear-gradient(90deg,transparent_0%,black_45%)] max-md:opacity-60" />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="fade-up relative mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-[clamp(32px,4vw,64px)] max-lg:grid-cols-1">
        <div>
          {/* Portrait beside the name, on its left; the title sits as a small label above the name. */}
          <div className="flex items-center gap-[clamp(16px,3vw,40px)]">
            <figure className="relative isolate w-[clamp(84px,11vw,160px)] shrink-0">
              <span aria-hidden="true" className="absolute -bottom-2 -left-2 -z-10 h-full w-full border border-gold/60 sm:-bottom-3 sm:-left-3" />
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-sand">
                <Image
                  src="/images/abi-precious-jibrin-hero.jpg"
                  alt={`${siteConfig.name}, ${siteConfig.title}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 90px, 160px"
                  className="object-cover object-[50%_15%]"
                />
              </div>
            </figure>
            <div className="min-w-0">
              <p className="text-balance text-[10.5px] font-semibold uppercase leading-[1.5] tracking-[0.1em] text-gold-text sm:text-[11.5px]">
                {eyebrow}
              </p>
              <h1 className="mt-2 text-[clamp(32px,6.4vw,92px)] leading-[0.95] tracking-[-0.03em] text-navy sm:mt-3 lg:text-[clamp(44px,4.6vw,72px)]">
                {name}
              </h1>
            </div>
          </div>

          <div className="mt-[clamp(28px,4vw,44px)] max-w-[780px]">
            <p className="font-serif text-[clamp(20px,2.1vw,26px)] italic leading-snug text-navy/85">{statement}</p>
            <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-text sm:text-[18px]">{intro}</p>

            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-text-muted">
              <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.08em] text-gold-text">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                {now.label}
              </span>
              <span>{now.text}</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {buttons.map((button) => (
                <Button key={button.label} href={button.href} variant={button.variant}>
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <IntelligencePanel />
      </div>
    </section>
  );
}

interface PageHeroProps {
  eyebrow: string;
  h1: string;
  subtitle?: string;
  paragraph?: string;
}

/** Text-only hero used on inner pages. */
export function PageHero({ eyebrow, h1, subtitle, paragraph }: PageHeroProps) {
  return (
    <section className="surface-ivory relative isolate overflow-hidden px-[clamp(20px,5vw,64px)] pt-[clamp(48px,8vw,104px)] pb-[clamp(48px,7vw,88px)]">
      <HealthBackdrop animated={false} className="-z-10 opacity-60 [mask-image:linear-gradient(90deg,transparent_10%,black_70%)]" />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="max-w-[880px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[clamp(38px,5.4vw,64px)] leading-[1.04] tracking-[-0.02em] text-navy">{h1}</h1>
          {subtitle && (
            <p className="mt-3 text-[clamp(18px,2.2vw,24px)] font-semibold text-gold-text">{subtitle}</p>
          )}
          {paragraph && (
            <p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-text-muted sm:text-[18.5px]">
              {paragraph}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
