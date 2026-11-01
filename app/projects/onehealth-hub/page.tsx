import type { Metadata } from "next";
import Link from "next/link";
import { FeatureShot, ShotComposition } from "@/components/projects/ScreenshotShowcase";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { Section } from "@/components/ui/Section";
import { publishedProjects } from "@/content/projects";
import { oneHealthHub as project, oneHealthStory as s } from "@/content/projects/onehealth-hub";
import { buildMetadata } from "@/lib/metadata";
import { caseStudySchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: project.title,
  description: project.summary,
  path: `/projects/${project.slug}`,
});

const h2 = "text-[clamp(30px,4vw,50px)] leading-[1.05] tracking-[-0.02em]";

/*
 * A project showcase rather than a report: the real prototype screens lead,
 * the reporting loop is drawn as one connected path, and what is built is kept
 * visibly apart from what is only a concept.
 */
export default function OneHealthHubPage() {
  const [live, repo] = project.links;
  const index = publishedProjects.findIndex((p) => p.slug === project.slug);
  const next = publishedProjects[(index + 1) % publishedProjects.length];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema(project)) }} />

      {/* Header; the dashboard overlaps its lower edge. */}
      <header className="surface-navy relative isolate overflow-hidden bg-deep px-[clamp(20px,5vw,64px)] pt-[clamp(28px,5vw,64px)] pb-[clamp(140px,18vw,280px)] text-white">
        <HealthBackdrop tone="dark" animated={false} className="-z-10 opacity-80" />
        <div className="relative mx-auto max-w-[1280px]">
          <Link href="/projects" className="text-[14px] font-medium text-white/70 hover:text-white">
            <span aria-hidden="true">←</span> All projects
          </Link>
          <div className="mt-8 grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-end gap-[clamp(28px,5vw,72px)] max-lg:grid-cols-1">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Eyebrow tone="dark">{project.classification}</Eyebrow>
                <span className="border border-gold/60 px-2.5 py-0.5 text-[12px] font-medium text-gold">{project.status}</span>
              </div>
              <h1 className="mt-5 text-[clamp(44px,7vw,92px)] leading-[0.98] tracking-[-0.03em] text-white">{project.title}</h1>
              <p className="mt-4 font-serif text-[clamp(20px,2.4vw,28px)] italic leading-snug text-gold">{project.subtitle}</p>
            </div>
            <div>
              <p className="text-[17px] leading-relaxed text-white/80 sm:text-[18px]">{project.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={live.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:bg-paper"
                >
                  {live.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                >
                  {repo.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              <p className="mt-6 text-[13.5px] text-white/60">
                <span className="mr-2 font-semibold uppercase tracking-[0.1em] text-white/80">Built with</span>
                {s.tech.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 -mt-[clamp(100px,14vw,220px)] px-[clamp(20px,5vw,64px)]">
        <div className="mx-auto max-w-[1180px] bg-cream">
          <FeatureShot shots={s.shots} />
        </div>
      </div>

      {/* The challenge and the design question */}
      <Section>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-[clamp(32px,6vw,96px)] max-lg:grid-cols-1">
          <div>
            <h2 className={`${h2} text-navy`}>{s.challenge.heading}</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-text-muted sm:text-[18px]">{s.challenge.text}</p>
          </div>
          <figure className="self-center border-l-2 border-gold pl-[clamp(20px,3vw,40px)]">
            <figcaption className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-gold-text">The design question</figcaption>
            <blockquote className="mt-4 font-serif text-[clamp(23px,2.6vw,32px)] leading-snug text-navy">{s.challenge.question}</blockquote>
          </figure>
        </div>

        <dl className="mt-[clamp(40px,6vw,72px)] grid grid-cols-[1fr_auto_1fr] items-stretch border border-border bg-ivory max-md:grid-cols-1">
          <div className="p-[clamp(20px,3vw,32px)]">
            <dt className="font-serif text-[21px] font-semibold text-navy">{s.challenge.distinction[0].term}</dt>
            <dd className="mt-2 text-[15.5px] leading-relaxed text-text-muted">{s.challenge.distinction[0].text}</dd>
          </div>
          <div aria-hidden="true" className="flex items-center justify-center border-border px-4 font-serif text-[15px] italic text-gold-text md:border-x max-md:border-y max-md:py-2">
            is not a
          </div>
          <div className="p-[clamp(20px,3vw,32px)]">
            <dt className="font-serif text-[21px] font-semibold text-navy">{s.challenge.distinction[1].term}</dt>
            <dd className="mt-2 text-[15.5px] leading-relaxed text-text-muted">{s.challenge.distinction[1].text}</dd>
          </div>
        </dl>
      </Section>

      {/* How it works: one connected path */}
      <Section background="dark" backdrop="static">
        <Eyebrow tone="dark">How the prototype works</Eyebrow>
        <h2 className={`mt-3 max-w-[760px] ${h2} text-white`}>From a community report back to a community message</h2>

        <ol className="relative mt-[clamp(48px,7vw,88px)] grid grid-cols-4 gap-[clamp(20px,3vw,40px)] max-md:grid-cols-1 max-md:gap-10 max-md:pl-10">
          {/* connecting lines: horizontal on desktop, vertical on phones */}
          <span aria-hidden="true" className="draw-x absolute top-[11px] right-[12%] left-0 h-px bg-gradient-to-r from-gold via-gold/70 to-gold/20 max-md:hidden" />
          <span aria-hidden="true" className="draw-y absolute top-2 bottom-8 left-[11px] w-px bg-gradient-to-b from-gold to-gold/20 md:hidden" />
          {s.journey.map((step, i) => (
            <li key={step.name} className="reveal relative">
              <span
                aria-hidden="true"
                className="absolute top-0 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-gold bg-deep max-md:-left-10"
              >
                <span className="h-[9px] w-[9px] rounded-full bg-gold" />
              </span>
              <p className="pt-12 font-serif text-[clamp(44px,5vw,64px)] leading-none text-gold/35 max-md:pt-0">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[clamp(21px,2vw,25px)] leading-snug text-white">{step.name}</h3>
              <p className="mt-2 max-w-[280px] text-[15.5px] leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* The prototype screens */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className={`${h2} text-navy`}>Inside the prototype</h2>
          <p className="max-w-[420px] text-[15.5px] text-text-muted">Captured from the live prototype. Figures shown are records held in the prototype, not official surveillance statistics.</p>
        </div>
        <div className="mt-[clamp(32px,5vw,64px)]">
          <ShotComposition shots={s.shots} />
        </div>
      </Section>

      {/* What is built, and what is only a concept */}
      <Section background="band">
        <h2 className={`${h2} text-navy`}>What has been built</h2>
        <div className="mt-[clamp(28px,4vw,48px)] grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-[clamp(20px,3vw,40px)] max-lg:grid-cols-1">
          <div className="border-t-2 border-navy pt-6">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-navy">Implemented</p>
            <ul className="mt-4 divide-y divide-border">
              {s.implemented.map((item) => (
                <li key={item.name} className="flex gap-4 py-3.5 text-[16.5px] text-text">
                  <span aria-hidden="true" className="mt-[7px] h-[10px] w-[10px] shrink-0 bg-gold" />
                  <div>
                    {item.name}
                    {item.note && <p className="mt-1.5 text-[15px] leading-relaxed text-text-muted">{item.note}</p>}
                    {item.status && (
                      <p className="mt-1.5 text-[14px] leading-relaxed text-text-muted">
                        <span className="font-semibold text-navy">Deployment status:</span> {item.status}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start border border-dashed border-input-border bg-cream/60 p-[clamp(20px,3vw,32px)]">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-text-muted">Concept only — not live</p>
            <ul className="mt-4 space-y-5">
              {s.concept.map((c) => (
                <li key={c.name}>
                  <p className="font-serif text-[20px] font-semibold text-navy">{c.name}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-text-muted">{c.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contribution and limitations */}
      <Section>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[clamp(32px,6vw,96px)] max-lg:grid-cols-1">
          <div>
            <Eyebrow>My contribution</Eyebrow>
            <p className="mt-4 font-serif text-[clamp(21px,2.2vw,27px)] leading-snug text-navy">{s.contribution}</p>
          </div>
          <div className="self-start border-l-2 border-gold pl-[clamp(20px,3vw,32px)]">
            <Eyebrow>Limitations</Eyebrow>
            <p className="mt-4 text-[16px] leading-relaxed text-text">{s.limitations.text}</p>
            <p className="mt-5 text-[13px] font-semibold text-navy">It would next need:</p>
            <ul className="mt-2 space-y-1.5 text-[15.5px] text-text-muted">
              {s.limitations.future.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,80px)] flex flex-wrap items-stretch gap-4 border-t border-border pt-[clamp(28px,4vw,40px)]">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                i === 0
                  ? "inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-[14.5px] font-semibold text-cream transition-colors hover:bg-gold hover:text-ink"
                  : "inline-flex items-center gap-2 border border-input-border px-6 py-3.5 text-[14.5px] font-semibold text-navy transition-colors hover:border-navy"
              }
            >
              {l.label} <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
          {next && next.slug !== project.slug && (
            <Link href={`/projects/${next.slug}`} className="group ml-auto self-center text-right max-sm:ml-0 max-sm:text-left">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-text">Next project</span>
              <span className="font-serif text-[20px] font-semibold text-navy group-hover:text-gold-text">
                {next.title} <span aria-hidden="true">→</span>
              </span>
            </Link>
          )}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
