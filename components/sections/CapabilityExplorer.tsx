"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { CapabilityArea } from "@/content/capabilities";
import { cn } from "@/utils/cn";

/**
 * Capability areas as vertical tabs (a scrolling row on phones). The panel
 * shows what each area covers (research interests tagged as such), the tools
 * used — split between programme work and independent projects — and real
 * examples.
 */
export function CapabilityExplorer({ areas }: { areas: CapabilityArea[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const area = areas[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + areas.length) % areas.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] gap-[clamp(20px,3vw,40px)] max-lg:grid-cols-1">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Capability areas"
        className="flex flex-col border-t border-navy/15 max-lg:-mx-1 max-lg:flex-row max-lg:overflow-x-auto max-lg:border-t-0 max-lg:pb-1"
      >
        {areas.map((a, i) => (
          <button
            key={a.name}
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
            className={cn(
              "group flex items-center gap-4 border-b border-navy/15 py-4 text-left transition-colors max-lg:mx-1 max-lg:shrink-0 max-lg:rounded-[6px] max-lg:border max-lg:px-3 max-lg:py-2",
              active === i ? "max-lg:border-gold max-lg:bg-gold/15" : "max-lg:border-border",
            )}
          >
            <span aria-hidden="true" className={cn("font-serif text-[15px] max-lg:hidden", active === i ? "text-gold-text" : "text-text-muted")}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "font-serif text-[clamp(16px,1.5vw,19px)] font-semibold leading-snug transition-colors max-lg:text-[14px]",
                active === i ? "text-navy" : "text-text-muted group-hover:text-navy",
              )}
            >
              {a.name}
            </span>
            <span aria-hidden="true" className={cn("ml-auto text-gold-text transition-opacity max-lg:hidden", active === i ? "opacity-100" : "opacity-0")}>
              →
            </span>
          </button>
        ))}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="rounded-[12px] border border-border bg-ivory p-[clamp(22px,3vw,40px)] shadow-[0_24px_50px_-36px_rgba(15,23,42,0.5)]"
      >
        <div key={active} className="fade-up">
          <h3 className="text-[clamp(24px,2.6vw,32px)] leading-tight text-navy">{area.name}</h3>
          <p className="mt-2 font-serif text-[18px] italic text-text-muted">{area.summary}</p>

          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 max-sm:grid-cols-1">
            {area.items.map((c) => (
              <li key={c.text} className="flex gap-3 text-[15.5px] text-text">
                <span aria-hidden="true" className={cn("mt-[9px] h-[6px] w-[6px] shrink-0", c.interest ? "border border-gold" : "bg-gold")} />
                <span>
                  {c.text}
                  {c.interest && (
                    <span className="ml-2 inline-block rounded-[4px] border border-border px-1.5 py-px align-middle text-[10.5px] font-semibold uppercase tracking-[0.08em] text-text-muted">
                      Research interest
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          {(area.toolsWork.length > 0 || area.toolsIndependent.length > 0) && (
            <div className="mt-7 grid grid-cols-2 gap-6 border-t border-border pt-6 max-sm:grid-cols-1">
              {area.toolsWork.length > 0 && <ToolGroup label="In my programme work" tools={area.toolsWork} />}
              {area.toolsIndependent.length > 0 && <ToolGroup label="In independent projects" tools={area.toolsIndependent} dashed />}
            </div>
          )}

          <div className="mt-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-muted">In practice</p>
            <ul className="mt-3 space-y-3">
              {area.examples.map((ex) => (
                <li key={ex.text} className="border-l-2 border-gold pl-4">
                  <p className="text-[15px] leading-relaxed text-navy">{ex.text}</p>
                  <p className="mt-1 text-[12px] font-semibold tracking-[0.06em] text-gold-text">{ex.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolGroup({ label, tools, dashed = false }: { label: string; tools: string[]; dashed?: boolean }) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-muted">{label}</p>
      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {tools.map((t) => (
          <li key={t} className={cn("rounded-[6px] border px-2.5 py-1 text-[13px] text-text", dashed ? "border-dashed border-input-border" : "border-border bg-cream")}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
