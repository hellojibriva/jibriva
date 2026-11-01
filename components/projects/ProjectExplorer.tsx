"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export type ExplorerView = { label: string; src: string; alt: string; width: number; height: number };

/**
 * Homepage project preview you can explore: a large framed view of the real
 * project screens with a switcher underneath, and the project's summary and
 * key facts beside it. The whole preview stays one project; the case study
 * link sits with the text.
 */
export function ProjectExplorer({
  index,
  kicker,
  title,
  summary,
  href,
  views,
  aside,
  flip = false,
}: {
  index: number;
  kicker: string;
  title: string;
  summary: string;
  href: string;
  views: ExplorerView[];
  aside: ReactNode;
  flip?: boolean;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const view = views[active];

  return (
    <article className="grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-start gap-[clamp(28px,4.5vw,72px)] max-lg:grid-cols-1">
      <div className={cn(flip && "lg:order-2")}>
        <div
          id={`${id}-view`}
          role="tabpanel"
          aria-label={view.label}
          className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-border bg-deep shadow-[0_30px_60px_-36px_rgba(15,23,42,0.55)]"
        >
          <Image
            key={view.src}
            src={view.src}
            alt={view.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 700px"
            className="fade-up object-contain"
          />
        </div>
        <div role="tablist" aria-label={`${title} views`} className="mt-3 flex flex-wrap gap-1.5">
          {views.map((v, i) => (
            <button
              key={v.src}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls={`${id}-view`}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 rounded-[6px] border px-3 py-1.5 text-[13px] font-medium transition-colors",
                active === i ? "border-gold bg-gold/15 text-navy" : "border-border text-text-muted hover:border-gold/60 hover:text-navy",
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className={cn("lg:pt-2", flip && "lg:order-1")}>
        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-gold-text">
          <span className="font-serif text-[15px] normal-case tracking-normal">{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {kicker}
        </p>
        <h3 className="mt-4 text-[clamp(28px,3vw,40px)] leading-[1.08] text-navy">
          <Link href={href} className="transition-colors hover:text-gold-text">
            {title}
          </Link>
        </h3>
        <p className="mt-4 text-[16.5px] leading-relaxed text-text-muted">{summary}</p>
        <div className="mt-6">{aside}</div>
        <Link
          href={href}
          className="group mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy transition-colors hover:text-gold-text"
        >
          Read the case study
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            →
          </span>
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </article>
  );
}
