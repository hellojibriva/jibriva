import Image from "next/image";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import type { CapabilityRow, EvidenceItem } from "@/types/content";

/** Case-study section: a short gold rule and a serif heading — no numbering. */
export function CaseStudySection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <span aria-hidden="true" className="block h-px w-10 bg-gold" />
      <h2 id={`${id}-title`} className="mt-5 text-[clamp(26px,3vw,36px)] leading-[1.1] text-navy">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-[17px] leading-[1.7] text-text">{children}</div>
    </section>
  );
}

/** "At a glance" facts as a hairline grid of ivory cells. */
export function FactGrid({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px border border-border bg-border">
      {facts.map((f) => (
        <div key={f.label} className="bg-ivory p-5">
          <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-text">{f.label}</dt>
          <dd className="mt-1.5 text-[15.5px] font-medium text-navy">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Plain tool labels — deliberately understated; the tools are not the story. */
export function ToolChips({ tools }: { tools: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tools used">
      {tools.map((t) => (
        <li key={t} className="border border-border bg-ivory px-3 py-1 text-[14px] text-text">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Bulleted list with small gold squares. */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.slice(0, 40)} className="flex gap-3">
          <span aria-hidden="true" className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Implemented-versus-concept table; stacked cards on phones. */
export function ScopeTable({ rows }: { rows: CapabilityRow[] }) {
  const label = (s: CapabilityRow["status"]) => (s === "Implemented" ? "Implemented" : "Concept only");
  const tone = (s: CapabilityRow["status"]) => (s === "Implemented" ? "live" : "coming-soon");

  return (
    <>
      <ul className="space-y-3 sm:hidden">
        {rows.map((row) => (
          <li key={row.capability} className="border border-border bg-ivory p-5">
            <Badge label={label(row.status)} tone={tone(row.status)} />
            <p className="mt-3 text-[15.5px] font-semibold text-navy">{row.capability}</p>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-text-muted">{row.note}</p>
          </li>
        ))}
      </ul>
      <div className="hidden border border-border bg-ivory sm:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Capabilities and their status</caption>
          <thead>
            <tr className="border-b border-border bg-sand text-[12px] uppercase tracking-[0.08em] text-text-muted">
              <th scope="col" className="px-5 py-3 font-semibold">Capability</th>
              <th scope="col" className="px-5 py-3 font-semibold">Status</th>
              <th scope="col" className="px-5 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability} className="border-b border-border align-top last:border-b-0">
                <th scope="row" className="px-5 py-4 text-[15px] font-semibold text-navy">
                  {row.capability}
                </th>
                <td className="px-5 py-4">
                  <Badge label={label(row.status)} tone={tone(row.status)} />
                </td>
                <td className="px-5 py-4 text-[14.5px] leading-relaxed text-text-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/** A screenshot in a simple browser-style frame, with caption. */
export function EvidenceFigure({ item }: { item: EvidenceItem }) {
  return (
    <figure>
      <div className="border border-border bg-ivory">
        <div aria-hidden="true" className="flex gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <Image
          src={item.src}
          width={item.width}
          height={item.height}
          alt={item.alt}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-[13.5px] text-text-muted">{item.caption}</figcaption>
    </figure>
  );
}

/** Headline figures with an optional caveat line. */
export function StatGrid({ items, note }: { items: { value: string; label: string }[]; note?: string }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-px border border-border bg-border max-lg:grid-cols-2">
        {items.map((s) => (
          <div key={s.label} className="bg-ivory p-5">
            <p className="font-serif text-[clamp(28px,3vw,36px)] font-semibold leading-none text-navy">{s.value}</p>
            <p className="mt-2 text-[13.5px] leading-snug text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      {note && <p className="mt-3 text-[13.5px] font-medium text-gold-text">{note}</p>}
    </div>
  );
}

/** Highlighted note with a gold rule. */
export function Callout({ heading, text }: { heading?: string; text: string[] }) {
  return (
    <div className="border-l-2 border-gold bg-ivory px-5 py-4">
      {heading && <h3 className="text-[19px] leading-snug text-navy">{heading}</h3>}
      {text.map((t) => (
        <p key={t.slice(0, 32)} className={heading ? "mt-2" : undefined}>
          {t}
        </p>
      ))}
    </div>
  );
}

/**
 * Key decisions as an editorial sequence: the first decision is a featured
 * navy panel; the rest follow in a staggered two-column layout with large
 * serif numerals, so the items don't all look the same.
 */
export function ChangeTable({ items }: { items: { change: string; assessment: string }[] }) {
  const [first, ...rest] = items;
  if (!first) return null;
  return (
    <div className="space-y-8 pt-2">
      <div className="surface-navy relative overflow-hidden bg-deep p-[clamp(24px,3vw,36px)] text-white">
        <p className="font-serif text-[clamp(40px,5vw,56px)] leading-none text-gold/80">01</p>
        <p className="mt-3 font-serif text-[clamp(22px,2.4vw,28px)] font-semibold leading-snug">{first.change}</p>
        <p className="mt-2 max-w-[560px] text-[16px] leading-relaxed text-white/75">{first.assessment}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-sm:grid-cols-1">
        {rest.map((c, i) => (
          <div key={c.change} className={i % 2 === 1 ? "sm:translate-y-10" : undefined}>
            <div className="flex items-baseline gap-4 border-t border-gold/50 pt-4">
              <span className="font-serif text-[30px] leading-none text-gold-text/70">{String(i + 2).padStart(2, "0")}</span>
              <p className="font-serif text-[19px] font-semibold leading-snug text-navy">{c.change}</p>
            </div>
            <p className="mt-2 pl-[46px] text-[15.5px] leading-relaxed text-text-muted">{c.assessment}</p>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="h-6 max-sm:hidden" />
    </div>
  );
}

/** Four-stage journey: horizontal with connecting line on desktop, vertical on phones. */
export function JourneyTimeline({ steps }: { steps: { name: string; desc: string }[] }) {
  return (
    <div className="relative grid grid-cols-4 gap-6 pt-2 max-md:grid-cols-1 max-md:gap-0 max-md:border-l max-md:border-gold/50">
      <span aria-hidden="true" className="absolute left-0 right-0 top-[29px] h-px bg-gradient-to-r from-gold via-gold/60 to-gold/20 max-md:hidden" />
      {steps.map((s, i) => (
        <div key={s.name} className="relative max-md:pb-7 max-md:pl-8 max-md:last:pb-0">
          <span
            aria-hidden="true"
            className="relative z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold bg-ivory font-serif text-[15px] text-gold-text shadow-[0_6px_16px_-8px_rgba(122,92,16,0.6)] max-md:absolute max-md:-left-[19px] max-md:top-0"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-4 font-serif text-[20px] font-semibold text-navy max-md:mt-1.5">{s.name}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-text-muted">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

/** Short paired takeaways: bold lead and one line, two per row. */
export function PairGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px border border-border bg-border max-sm:grid-cols-1">
      {items.map((it) => (
        <div key={it.title} className="bg-ivory p-6">
          <span aria-hidden="true" className="block h-px w-6 bg-gold" />
          <p className="mt-3 font-serif text-[19px] font-semibold text-navy">{it.title}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-text-muted">{it.text}</p>
        </div>
      ))}
    </div>
  );
}
