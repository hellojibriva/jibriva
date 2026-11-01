"use client";

import { useId, useState } from "react";
import { cn } from "@/utils/cn";

/*
 * Hero "programme intelligence" panel: three small working views of the kind
 * of monitoring Abi does — indicator trends against a target, reporting and
 * data-quality checks, and One Health surveillance signals. Every figure here
 * is illustrative demonstration data (and labelled as such on screen); none of
 * it is a programme result or live surveillance.
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const INDICATORS = [
  { id: "reporting", label: "Reporting completeness", unit: "%", target: 90, values: [84, 87, 86, 90, 91, 93, 92, 95] },
  { id: "anc4", label: "ANC4 retention", unit: "%", target: 60, values: [47, 49, 52, 51, 54, 57, 56, 59] },
  { id: "hts", label: "HIV testing in ANC", unit: "%", target: 95, values: [89, 91, 93, 92, 95, 96, 95, 97] },
];

type FacilityStatus = "ontime" | "late" | "missing";
const FACILITIES: FacilityStatus[] = [
  "ontime", "ontime", "late", "ontime", "ontime", "ontime", "missing", "ontime",
  "ontime", "late", "ontime", "ontime", "ontime", "ontime", "ontime", "late",
  "ontime", "ontime", "ontime", "missing", "ontime", "ontime", "ontime", "ontime",
];
const STATUS_LABEL: Record<FacilityStatus, string> = { ontime: "On time", late: "Late", missing: "Not received" };

const SIGNALS = {
  human: { label: "Human", values: [3, 4, 3, 5, 4, 6, 8, 11, 14, 12, 9, 7, 6, 5, 4, 4] },
  animal: { label: "Animal", values: [1, 2, 2, 2, 3, 5, 7, 6, 5, 4, 3, 3, 2, 2, 1, 2] },
  environment: { label: "Environmental", values: [0, 1, 1, 1, 2, 2, 3, 4, 3, 3, 2, 1, 1, 1, 1, 0] },
};
const THRESHOLD = 10;

type View = "indicators" | "quality" | "signals";
const VIEWS: { id: View; label: string }[] = [
  { id: "indicators", label: "Indicators" },
  { id: "quality", label: "Data quality" },
  { id: "signals", label: "Surveillance" },
];

export function IntelligencePanel() {
  const [view, setView] = useState<View>("indicators");
  const id = useId();

  return (
    <section
      aria-label="Programme intelligence panel with illustrative demonstration data"
      className="overflow-hidden rounded-[12px] border border-border bg-ivory shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)]"
    >
      <header className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-border px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="label-heading text-[11.5px] uppercase tracking-[0.12em] text-gold-text">Programme intelligence</p>
          <span className="rounded-[4px] border border-border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-text-muted">
            Demonstration data
          </span>
        </div>
        <div role="tablist" aria-label="Panel views" className="flex rounded-full border border-border bg-cream p-0.5 max-sm:w-full">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              id={`${id}-tab-${v.id}`}
              aria-selected={view === v.id}
              aria-controls={`${id}-panel`}
              onClick={() => setView(v.id)}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-1 text-[12.5px] font-semibold transition-colors max-sm:flex-1 sm:px-3",
                view === v.id ? "bg-navy text-cream" : "text-text-muted hover:text-navy",
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
      </header>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${view}`} className="min-h-[300px] p-4 sm:p-5">
        {view === "indicators" && <IndicatorView />}
        {view === "quality" && <QualityView />}
        {view === "signals" && <SignalsView />}
      </div>

    </section>
  );
}

/* ── Indicators: pick an indicator; hover or focus a month ─────────────── */

function IndicatorView() {
  const [which, setWhich] = useState(INDICATORS[0].id);
  const [month, setMonth] = useState(MONTHS.length - 1);
  const ind = INDICATORS.find((i) => i.id === which) ?? INDICATORS[0];
  const lo = Math.min(...ind.values, ind.target) - 6;
  const hi = Math.max(...ind.values, ind.target) + 4;
  const W = 320;
  const H = 130;
  const x = (i: number) => 14 + (i * (W - 28)) / (MONTHS.length - 1);
  const y = (v: number) => H - 14 - ((v - lo) / (hi - lo)) * (H - 28);
  const line = ind.values.map((v, i) => `${i ? "L" : "M"}${x(i)} ${y(v)}`).join(" ");
  const v = ind.values[month];
  const met = v >= ind.target;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {INDICATORS.map((i) => (
          <button
            key={i.id}
            type="button"
            aria-pressed={which === i.id}
            onClick={() => setWhich(i.id)}
            className={cn(
              "rounded-[6px] border px-2.5 py-1 text-[12.5px] font-medium transition-colors",
              which === i.id ? "border-gold bg-gold/15 text-navy" : "border-border text-text-muted hover:border-gold/60 hover:text-navy",
            )}
          >
            {i.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[12px] text-text-muted">{MONTHS[month]} · {ind.label}</p>
          <p className="font-serif text-[34px] font-semibold leading-none text-navy">
            {v}
            <span className="text-[18px]">{ind.unit}</span>
          </p>
        </div>
        <p className={cn("rounded-full px-2.5 py-1 text-[12px] font-semibold", met ? "bg-navy/10 text-navy" : "bg-gold/20 text-gold-text")}>
          {met ? "At or above target" : `Below ${ind.target}${ind.unit} target`}
        </p>
      </div>

      <div className="relative mt-3">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
          <line x1="8" x2={W - 8} y1={y(ind.target)} y2={y(ind.target)} stroke="var(--c-gold)" strokeDasharray="4 4" />
          <text x={12} y={y(ind.target) - 5} fontSize="9" fill="var(--c-gold-text)">
            Target {ind.target}
            {ind.unit}
          </text>
          <path d={`${line} L${x(MONTHS.length - 1)} ${H - 8} L${x(0)} ${H - 8} Z`} fill="var(--c-navy)" opacity="0.06" />
          <path d={line} fill="none" stroke="var(--c-navy)" strokeWidth="2" />
          {ind.values.map((val, i) => (
            <circle key={i} cx={x(i)} cy={y(val)} r={i === month ? 5 : 3} fill={i === month ? "var(--c-gold)" : "var(--c-navy)"} />
          ))}
        </svg>
        {/* One focusable column per month: hover, focus or tap to read it. */}
        <div className="absolute inset-0 flex">
          {MONTHS.map((m, i) => (
            <button
              key={m}
              type="button"
              aria-label={`${m}: ${ind.values[i]}${ind.unit}`}
              onMouseEnter={() => setMonth(i)}
              onFocus={() => setMonth(i)}
              onClick={() => setMonth(i)}
              className="h-full flex-1 rounded-sm focus-visible:bg-gold/10"
            />
          ))}
        </div>
      </div>
      <div className="mt-1 flex justify-between px-1 text-[10.5px] text-text-muted">
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Data quality: checks, and facility reports filtered by status ─────── */

function QualityView() {
  const [filter, setFilter] = useState<FacilityStatus | null>(null);
  const counts = (s: FacilityStatus) => FACILITIES.filter((f) => f === s).length;
  const checks = [
    { label: "Completeness", value: `${Math.round(((FACILITIES.length - counts("missing")) / FACILITIES.length) * 100)}%`, ok: true },
    { label: "Timeliness", value: `${Math.round((counts("ontime") / FACILITIES.length) * 100)}%`, ok: false },
    { label: "Consistency flags", value: "3 to review", ok: false },
    { label: "Outliers queried", value: "2 resolved", ok: true },
  ];
  const tone: Record<FacilityStatus, string> = { ontime: "bg-navy", late: "bg-gold", missing: "border border-dashed border-text-muted bg-transparent" };

  return (
    <div className="grid gap-5 sm:grid-cols-[1fr_1.1fr]">
      <ul className="divide-y divide-border">
        {checks.map((c) => (
          <li key={c.label} className="flex items-center justify-between gap-3 py-2.5 text-[13.5px]">
            <span className="text-text">{c.label}</span>
            <span className={cn("font-semibold", c.ok ? "text-navy" : "text-gold-text")}>
              <span aria-hidden="true">{c.ok ? "✓ " : "! "}</span>
              {c.value}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <p className="text-[12px] text-text-muted">Monthly reports by facility · tap a status to filter</p>
        <div className="mt-2 grid grid-cols-8 gap-1.5" role="list" aria-label="Facility reports">
          {FACILITIES.map((s, i) => (
            <span
              key={i}
              role="listitem"
              aria-label={`Facility ${i + 1}: ${STATUS_LABEL[s]}`}
              className={cn("aspect-square rounded-[3px] transition-opacity", tone[s], filter && filter !== s && "opacity-15")}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {(Object.keys(STATUS_LABEL) as FacilityStatus[]).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={filter === s}
              onClick={() => setFilter(filter === s ? null : s)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-[6px] border px-2 py-1 text-[12px] transition-colors",
                filter === s ? "border-gold bg-gold/15 text-navy" : "border-border text-text-muted hover:text-navy",
              )}
            >
              <span aria-hidden="true" className={cn("h-2.5 w-2.5 rounded-[2px]", tone[s])} />
              {STATUS_LABEL[s]} ({counts(s)})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Surveillance: weekly One Health signals against an alert threshold ── */

function SignalsView() {
  const [sector, setSector] = useState<keyof typeof SIGNALS>("human");
  const [week, setWeek] = useState<number | null>(null);
  const data = SIGNALS[sector].values;
  const max = 16;
  const above = data.filter((v) => v >= THRESHOLD).length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(SIGNALS) as (keyof typeof SIGNALS)[]).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={sector === k}
              onClick={() => {
                setSector(k);
                setWeek(null);
              }}
              className={cn(
                "rounded-[6px] border px-2.5 py-1 text-[12.5px] font-medium transition-colors",
                sector === k ? "border-gold bg-gold/15 text-navy" : "border-border text-text-muted hover:border-gold/60 hover:text-navy",
              )}
            >
              {SIGNALS[k].label}
            </button>
          ))}
        </div>
        <p className="text-[12px] text-text-muted" aria-live="polite">
          {week === null ? `${above} week${above === 1 ? "" : "s"} above alert threshold` : `Week ${week + 1}: ${data[week]} reported signals`}
        </p>
      </div>

      <div className="relative mt-4 h-[170px]">
        <div aria-hidden="true" className="absolute inset-x-0 border-t border-dashed border-gold" style={{ bottom: `${(THRESHOLD / max) * 100}%` }}>
          <span className="absolute -top-4 right-0 text-[10px] text-gold-text">Alert threshold</span>
        </div>
        <div className="absolute inset-0 flex items-end gap-[3px] border-b border-border">
          {data.map((v, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Week ${i + 1}: ${v} reported signals`}
              onMouseEnter={() => setWeek(i)}
              onFocus={() => setWeek(i)}
              onClick={() => setWeek(i)}
              className="group flex h-full flex-1 items-end"
            >
              <span
                className={cn(
                  "block w-full rounded-t-[2px] transition-[height,background-color] duration-300 motion-reduce:transition-none",
                  v >= THRESHOLD ? "bg-gold" : "bg-navy/70",
                  week === i && "outline outline-2 outline-offset-1 outline-gold",
                )}
                style={{ height: `${Math.max(2, (v / max) * 100)}%` }}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mt-1 flex justify-between text-[10.5px] text-text-muted">
        <span>Week 1</span>
        <span>Week 16</span>
      </div>
      <p className="mt-3 text-[12px] leading-snug text-text-muted">
        Community-reported signals are symptoms, not diagnoses — each waits for field verification.
      </p>
    </div>
  );
}
