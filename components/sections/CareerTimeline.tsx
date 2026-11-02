"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { CareerRole } from "@/types/content";
import { cn } from "@/utils/cn";

/**
 * Interactive career timeline: roles as stops on a dated line (oldest to
 * newest, arrow keys move between them; the line fills to the selected role
 * and the current role is marked) and a detail panel with the selected role's
 * progression note, highlight, responsibilities, context and tools.
 */
export function CareerTimeline({ roles, notes }: { roles: CareerRole[]; notes: (string | undefined)[] }) {
  const [active, setActive] = useState(roles.length - 1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const role = roles[active];
  const note = notes[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = Math.min(roles.length - 1, Math.max(0, active + step));
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Roles, oldest to newest" className="relative grid grid-cols-4 gap-3 max-md:grid-cols-1 max-md:gap-0 max-md:pl-6">
        <span aria-hidden="true" className="absolute top-[11px] right-[12.5%] left-[12.5%] h-px bg-border max-md:hidden" />
        <span
          aria-hidden="true"
          className="absolute top-[11px] left-[12.5%] h-[2px] -translate-y-px bg-gold transition-[width] duration-500 motion-reduce:transition-none max-md:hidden"
          style={{ width: `${(active / (roles.length - 1)) * 75}%` }}
        />
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[11px] w-px bg-border md:hidden" />
        {roles.map((r, i) => (
          <button
            key={`${r.organisationShort}-${r.years}`}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKey}
            className="group relative flex flex-col items-center px-2 pb-2 text-center max-md:items-start max-md:py-3 max-md:text-left"
          >
            <span
              aria-hidden="true"
              className={cn(
                "relative z-10 h-[22px] w-[22px] rotate-45 border-2 transition-colors max-md:absolute max-md:top-[18px] max-md:-left-[24px]",
                active === i ? "border-gold bg-gold" : "border-gold/70 bg-cream group-hover:bg-gold/30",
              )}
            />
            <span className="mt-4 flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] text-gold-text max-md:mt-0">
              {r.years}
              {i === roles.length - 1 && (
                <span className="rounded-full bg-gold px-2 py-px text-[10.5px] font-bold uppercase tracking-[0.08em] text-ink">Current</span>
              )}
            </span>
            <span className={cn("mt-1 font-serif text-[18px] font-semibold leading-snug transition-colors", active === i ? "text-navy" : "text-text-muted group-hover:text-navy")}>
              {r.title}
            </span>
            <span className="mt-0.5 text-[13px] text-text-muted">{r.organisationShort}</span>
          </button>
        ))}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="mt-[clamp(24px,3vw,40px)] overflow-hidden rounded-[12px] border border-border bg-ivory shadow-[0_24px_50px_-36px_rgba(15,23,42,0.5)]"
      >
        <div key={active} className="fade-up grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] max-lg:grid-cols-1">
          <div className="p-[clamp(22px,3vw,40px)]">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-text">{role.period}</p>
            <h3 className="mt-2 text-[clamp(24px,2.6vw,32px)] leading-tight text-navy">{role.title}</h3>
            <p className="mt-1.5 text-[15px] text-text-muted">
              {role.programme} · {role.organisation}
            </p>
            {note && <p className="mt-5 border-l-2 border-gold pl-4 font-serif text-[18px] italic leading-snug text-navy/85">{note}</p>}
            {role.metrics && (
              <figure className="mt-5">
                <dl className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-px overflow-hidden rounded-[8px] border border-border bg-border">
                  {role.metrics.items.map((m) => (
                    <div key={m.label} className="bg-cream/70 px-4 py-3">
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <span className="block font-serif text-[clamp(24px,2.4vw,30px)] font-semibold leading-none text-navy">{m.value}</span>
                        <span className="mt-1.5 block text-[12.5px] leading-snug text-text-muted" aria-hidden="true">
                          {m.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <figcaption className="mt-2 text-[12.5px] leading-snug text-text-muted">{role.metrics.note}</figcaption>
              </figure>
            )}
            {role.highlight && (
              <div className="mt-5 rounded-[8px] border border-gold/50 bg-gold/10 p-4">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-gold-text">Highlight</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-navy">{role.highlight}</p>
              </div>
            )}
            <h4 className="label-heading mt-6 text-[12px] uppercase tracking-[0.1em] text-navy">Responsibilities</h4>
            <ul className="mt-3 space-y-2.5">
              {role.responsibilities.map((item) => (
                <li key={item.slice(0, 40)} className="flex gap-3 text-[15px] leading-relaxed text-text">
                  <span aria-hidden="true" className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border-border bg-cream/60 p-[clamp(22px,3vw,40px)] lg:border-l max-lg:border-t">
            {role.context && (
              <>
                <h4 className="label-heading text-[12px] uppercase tracking-[0.1em] text-navy">Programme context</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-text">{role.context}</p>
              </>
            )}
            {role.tools && role.tools.length > 0 && (
              <>
                <h4 className="label-heading mt-6 text-[12px] uppercase tracking-[0.1em] text-navy">Systems and tools</h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {role.tools.map((t) => (
                    <li key={t} className="rounded-[6px] border border-border bg-ivory px-2.5 py-1 text-[13px] text-text">
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
