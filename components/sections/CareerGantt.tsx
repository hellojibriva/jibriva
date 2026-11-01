"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { JourneyItem } from "@/content/journey";
import { cn } from "@/utils/cn";

type Journey = {
  axis: { from: number; to: number; ahead: number };
  present: number;
  tracks: string[];
  items: JourneyItem[];
  thread: { label: string; steps: { item: string; text: string }[] };
};

const ROW = 64;
const MILESTONE_ROW = 112;

/**
 * "The journey so far": a Gantt-style chart of education, employment,
 * independent milestones and an emerging research direction, with a "data &
 * evidence" thread drawn through it. Every bar and marker is a button that
 * opens a detail panel. Phones get a stacked timeline instead of a squeezed
 * chart. Colours come from the theme tokens, so both themes work.
 */
export function CareerGantt({ journey }: { journey: Journey }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showThread, setShowThread] = useState(true);
  const id = useId();
  const { from, ahead } = journey.axis;
  const x = (t: number) => ((t - from) / (ahead - from)) * 100;
  const item = journey.items.find((i) => i.id === selected) ?? null;
  const rowHeight = (track: number) => (journey.items.some((i) => i.track === track && i.kind === "milestone") ? MILESTONE_ROW : ROW);
  const rowTop = (track: number) => journey.tracks.slice(0, track).reduce((sum, _, t) => sum + rowHeight(t), 0);
  const total = rowTop(journey.tracks.length);
  const years = Array.from({ length: journey.axis.to - from }, (_, i) => from + i); // labelled years; "Ahead" follows

  // Thread: one point per step, at the middle of its item, on its row.
  const threadPoints = journey.thread.steps
    .map((s) => journey.items.find((i) => i.id === s.item))
    .filter((i): i is JourneyItem => !!i)
    .map((i) => {
      const end = i.kind === "emerging" ? i.end : i.end && Math.min(i.end, journey.present);
      const cx = end ? (i.start + end) / 2 : i.start;
      return `${x(Math.min(cx, ahead - 0.5)).toFixed(2)},${rowTop(i.track) + rowHeight(i.track) / 2}`;
    })
    .join(" ");

  const select = (next: string) => setSelected((cur) => (cur === next ? null : next));
  const panelId = `${id}-detail`;

  return (
    <div>
      {/* Legend and thread toggle */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-text-muted" aria-label="Legend">
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-6 rounded-[3px] border border-gold-text bg-[repeating-linear-gradient(135deg,var(--c-gold)_0_2px,transparent_2px_6px)]" />
            Education
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-6 rounded-[3px] bg-navy" />
            Employment
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-6 rounded-[3px] bg-gold" />
            Current role
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 rotate-45 bg-gold-text" />
            Project or certificate
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-6 rounded-[3px] border border-dashed border-gold-text" />
            Emerging direction
          </li>
        </ul>
        <button
          type="button"
          aria-pressed={showThread}
          onClick={() => setShowThread((v) => !v)}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold transition-colors max-md:hidden",
            showThread ? "border-gold bg-gold/15 text-navy" : "border-border text-text-muted hover:text-navy",
          )}
        >
          <span aria-hidden="true" className="h-px w-5 border-t-2 border-dashed border-gold" />
          Data &amp; evidence thread
        </button>
      </div>

      {/* Desktop and tablet: the Gantt chart */}
      <div className="mt-5 overflow-hidden rounded-[12px] border border-border bg-ivory shadow-[0_30px_60px_-44px_rgba(15,23,42,0.55)] max-md:hidden">
        <div className="grid grid-cols-[clamp(150px,17vw,210px)_minmax(0,1fr)]">
          {/* Axis header */}
          <div className="border-b border-border bg-cream/60" />
          <div className="relative h-10 border-b border-border bg-cream/60">
            {years.map((y) => (
              <span
                key={y}
                className={cn("absolute top-3 -translate-x-1/2 text-[11.5px] font-semibold text-text-muted", y % 2 === 0 && "max-lg:hidden")}
                style={{ left: `${x(y + 0.5)}%` }}
              >
                {y}
              </span>
            ))}
            <span className="absolute top-3 -translate-x-1/2 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-gold-text" style={{ left: `${x((journey.axis.to + ahead) / 2)}%` }}>
              Ahead
            </span>
          </div>

          {/* Track labels */}
          <div>
            {journey.tracks.map((t, i) => (
              <div key={t} className="flex items-center border-b border-border px-4 last:border-b-0" style={{ height: rowHeight(i) }}>
                <span className="text-[12.5px] font-semibold leading-snug text-navy">
                  <span className="mr-1.5 font-serif text-gold-text">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* Chart body */}
          <div className="relative border-l border-border" style={{ height: total }}>
            {/* Year gridlines, the "ahead" area and today's marker */}
            {years.map((y) => (
              <span key={y} aria-hidden="true" className="absolute inset-y-0 w-px bg-border/70" style={{ left: `${x(y)}%` }} />
            ))}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 bg-[repeating-linear-gradient(135deg,transparent_0_8px,color-mix(in_srgb,var(--c-gold)_10%,transparent)_8px_9px)]"
              style={{ left: `${x(journey.axis.to)}%`, right: 0 }}
            />
            <span aria-hidden="true" className="absolute inset-y-0 z-10 w-0.5 bg-gold" style={{ left: `${x(journey.present)}%` }}>
              <span className="absolute -top-0 left-1 rounded-[3px] bg-gold px-1 text-[10px] font-bold uppercase text-ink">Now</span>
            </span>
            {journey.tracks.map((t, i) => (
              <span key={t} aria-hidden="true" className="absolute inset-x-0 border-b border-border last:border-b-0" style={{ top: rowTop(i), height: rowHeight(i) }} />
            ))}

            {/* Data & evidence thread */}
            {showThread && (
              <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox={`0 0 100 ${total}`} preserveAspectRatio="none">
                <polyline points={threadPoints} fill="none" stroke="var(--c-gold)" strokeWidth="2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" opacity="0.85" />
              </svg>
            )}

            {/* Items */}
            {journey.items.map((it) => {
              const top = rowTop(it.track);
              const h = rowHeight(it.track);
              const active = selected === it.id;
              const common = {
                type: "button" as const,
                onClick: () => select(it.id),
                "aria-pressed": active,
                "aria-controls": panelId,
                "aria-label": `${it.title}, ${it.org}, ${it.dates}`,
              };

              if (it.kind === "milestone") {
                const lane = journey.items.filter((m) => m.track === it.track && m.kind === "milestone").indexOf(it);
                return (
                  <button
                    key={it.id}
                    {...common}
                    className="group absolute z-20 flex items-center gap-2 whitespace-nowrap rounded-[4px] py-0.5 pl-1.5 text-[12px] font-medium"
                    style={{ top: top + 10 + lane * 24, right: `${100 - x(it.start)}%`, transform: "translateX(6px)" }}
                  >
                    <span className={cn("transition-colors", active ? "font-semibold text-navy" : "text-text-muted group-hover:text-navy")}>{it.title}</span>
                    <span aria-hidden="true" className="h-px w-4 border-t border-dotted border-gold-text" />
                    <span aria-hidden="true" className={cn("h-3 w-3 shrink-0 rotate-45 border-2 transition-colors", active ? "border-gold bg-gold" : "border-gold-text bg-ivory group-hover:bg-gold/40")} />
                  </button>
                );
              }

              const left = x(it.start);
              const width = x(Math.min(it.end ?? it.start, ahead)) - left;
              const label = it.short ?? it.title;
              const inside = width > 8;
              const nearEnd = left > 70;
              return (
                <button
                  key={it.id}
                  {...common}
                  className={cn(
                    "group absolute z-20 flex items-center rounded-[6px] text-left text-[12.5px] font-semibold transition-[box-shadow,transform] duration-200 hover:-translate-y-px motion-reduce:transform-none",
                    it.kind === "education" && "border border-gold-text bg-[repeating-linear-gradient(135deg,color-mix(in_srgb,var(--c-gold)_35%,transparent)_0_3px,transparent_3px_8px)] text-navy",
                    it.kind === "work" && !it.current && "bg-navy text-cream",
                    it.current && "bg-gold text-ink",
                    it.kind === "emerging" && "border border-dashed border-gold-text bg-gold/5 text-navy",
                    active && "ring-2 ring-gold ring-offset-2 ring-offset-ivory",
                  )}
                  style={{ top: top + h / 2 - 15, height: 30, left: `${left}%`, width: `${Math.max(width, 1.2)}%` }}
                >
                  {inside ? (
                    <span className="truncate px-2 text-[11.5px]">{label}</span>
                  ) : (
                    <span className={cn("absolute whitespace-nowrap text-[12px] font-semibold text-navy", nearEnd ? "right-full mr-2" : "left-full ml-2")}>
                      {label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phones: a stacked timeline with the same items and detail */}
      <ol className="mt-5 space-y-6 md:hidden">
        {journey.tracks.map((t, ti) => (
          <li key={t}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gold-text">
              {String(ti + 1).padStart(2, "0")} · {t}
            </p>
            <ul className="mt-2 space-y-2 border-l-2 border-border pl-4">
              {journey.items
                .filter((it) => it.track === ti)
                .map((it) => (
                  <li key={it.id}>
                    <button
                      type="button"
                      onClick={() => select(it.id)}
                      aria-expanded={selected === it.id}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-[8px] border px-3 py-2.5 text-left transition-colors",
                        selected === it.id ? "border-gold bg-gold/10" : "border-border bg-ivory",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "shrink-0",
                          it.kind === "milestone" ? "h-2.5 w-2.5 rotate-45 bg-gold-text" : "h-3 w-5 rounded-[3px]",
                          it.kind === "education" && "border border-gold-text bg-[repeating-linear-gradient(135deg,var(--c-gold)_0_2px,transparent_2px_6px)]",
                          it.kind === "work" && (it.current ? "bg-gold" : "bg-navy"),
                          it.kind === "emerging" && "border border-dashed border-gold-text",
                        )}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14.5px] font-semibold leading-snug text-navy">{it.title}</span>
                        <span className="block text-[12.5px] text-text-muted">{it.dates}</span>
                      </span>
                      {it.current && <span className="rounded-full bg-gold px-2 py-px text-[10px] font-bold uppercase text-ink">Now</span>}
                    </button>
                    {selected === it.id && (
                      <div className="mt-2">
                        <Detail item={it} onClose={() => setSelected(null)} />
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Desktop detail panel */}
      <div id={panelId} aria-live="polite" className="mt-5 max-md:hidden">
        {item ? (
          <Detail item={item} onClose={() => setSelected(null)} />
        ) : (
          <p className="rounded-[12px] border border-dashed border-border px-5 py-4 text-[14.5px] text-text-muted">
            Select any bar or milestone to see what it involved.
          </p>
        )}
      </div>

      {/* The data thread, step by step */}
      <div className="mt-[clamp(28px,4vw,48px)]">
        <p className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-text">
          <span aria-hidden="true" className="w-8 border-t-2 border-dashed border-gold" />
          {journey.thread.label}
        </p>
        <ol className="mt-4 grid grid-cols-3 gap-x-6 gap-y-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {journey.thread.steps.map((s, i) => (
            <li key={s.item}>
              <button
                type="button"
                onClick={() => setSelected(s.item)}
                aria-controls={panelId}
                className="group flex w-full gap-3 rounded-[8px] p-2 text-left transition-colors hover:bg-sand/70"
              >
                <span aria-hidden="true" className="font-serif text-[15px] text-gold-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14.5px] leading-snug text-text group-hover:text-navy">{s.text}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Detail({ item, onClose }: { item: JourneyItem; onClose: () => void }) {
  const status = item.kind === "emerging" ? "Emerging direction" : item.current ? "Current" : item.kind === "milestone" ? "Milestone" : item.kind === "education" ? "Education" : "Past role";
  return (
    <div className="fade-up rounded-[12px] border border-border bg-ivory p-[clamp(18px,2.6vw,28px)] shadow-[0_24px_50px_-40px_rgba(15,23,42,0.5)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="flex flex-wrap items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-gold-text">
            <span className={cn("rounded-full px-2 py-px normal-case tracking-normal", item.current ? "bg-gold text-ink" : "border border-border text-text-muted")}>{status}</span>
            {item.dates}
          </p>
          <h3 className="mt-2 text-[clamp(20px,2.2vw,26px)] leading-snug text-navy">{item.title}</h3>
          <p className="mt-1 text-[14.5px] text-text-muted">{item.org}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-full border border-border px-3 py-1 text-[13px] font-semibold text-navy transition-colors hover:border-gold hover:text-gold-text"
        >
          Close <span aria-hidden="true">✕</span>
        </button>
      </div>
      <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text">{item.description}</p>
      {item.list && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {item.list.map((l) => (
            <li key={l} className="rounded-[6px] border border-dashed border-gold-text px-2.5 py-1 text-[13px] text-navy">
              {l}
            </li>
          ))}
        </ul>
      )}
      {item.learning && <p className="mt-4 max-w-[760px] border-l-2 border-gold pl-4 text-[15px] leading-relaxed text-navy">{item.learning}</p>}
      {item.link && (
        <Link href={item.link.href} className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-1 text-[14px] font-semibold text-navy hover:text-gold-text">
          {item.link.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
