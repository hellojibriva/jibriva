"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/utils/cn";

type Stage = { name: string; text: string; inWork: string };

/**
 * Five-stage working loop as a tab set: a connected path of stages (arrow
 * keys move between them) and a detail panel showing what the stage involves
 * and where it shows up in Abi's own work.
 */
export function HowIWork({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const stage = stages[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + stages.length) % stages.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Stages of my working approach" className="relative grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-1">
        <span aria-hidden="true" className="absolute top-[22px] right-[10%] left-[10%] h-px bg-border max-sm:hidden" />
        <span
          aria-hidden="true"
          className="absolute top-[22px] left-[10%] h-px bg-gold transition-[width] duration-500 motion-reduce:transition-none max-sm:hidden"
          style={{ width: `${(active / (stages.length - 1)) * 80}%` }}
        />
        {stages.map((s, i) => (
          <button
            key={s.name}
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
            className="group relative flex flex-col items-center gap-3 rounded-[8px] px-1 py-1 text-center max-sm:flex-row max-sm:gap-4 max-sm:px-2 max-sm:py-2 max-sm:text-left"
          >
            <span
              className={cn(
                "relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border font-serif text-[16px] transition-colors",
                i === active ? "border-gold bg-gold text-ink" : i < active ? "border-gold bg-ivory text-gold-text" : "border-border bg-ivory text-text-muted group-hover:border-gold/60",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={cn("text-[15px] font-semibold transition-colors", i === active ? "text-navy" : "text-text-muted group-hover:text-navy")}>
              {s.name}
            </span>
          </button>
        ))}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="mt-[clamp(24px,3vw,40px)] grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(20px,4vw,56px)] border-t border-gold/50 pt-[clamp(24px,3vw,36px)] max-md:grid-cols-1"
      >
        <div key={`a${active}`} className="fade-up">
          <h3 className="text-[clamp(26px,2.8vw,36px)] leading-tight text-navy">{stage.name}</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-text">{stage.text}</p>
        </div>
        <figure key={`b${active}`} className="fade-up self-start border-l-2 border-gold bg-ivory p-[clamp(18px,2.4vw,28px)]">
          <figcaption className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-text">In my work</figcaption>
          <p className="mt-2 font-serif text-[clamp(18px,1.8vw,21px)] leading-snug text-navy">{stage.inWork}</p>
        </figure>
      </div>
    </div>
  );
}
