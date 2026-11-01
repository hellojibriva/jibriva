"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Lightbox, type LightboxItem } from "@/components/projects/Lightbox";

/**
 * Power BI report pages: the first chapter as a large feature, the rest in a
 * horizontal strip of large previews (scroll-snap, with arrow buttons). Every
 * preview opens the shared lightbox, which steps through all chapters.
 */
export function DashboardGallery({ items }: { items: LightboxItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const strip = useRef<HTMLUListElement>(null);
  const [featured, ...rest] = items;

  const scroll = (dir: number) => {
    const el = strip.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(0)} className="group block w-full text-left">
        <span className="block border border-white/15 bg-[#0b0f17] p-[clamp(6px,0.8vw,12px)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.75)] transition-colors group-hover:border-gold/70 group-focus-visible:border-gold">
          <Image
            src={featured.src}
            alt={featured.alt}
            width={featured.width}
            height={featured.height}
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="h-auto w-full"
          />
        </span>
        <span className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-serif text-[clamp(20px,2vw,24px)] font-semibold text-white">
            <span className="mr-3 text-gold">01</span>
            {featured.title}
          </span>
          <span className="text-[13.5px] font-semibold text-gold transition-colors group-hover:text-white">View full size ↗</span>
        </span>
      </button>

      <div className="mt-[clamp(48px,6vw,80px)] flex items-end justify-between gap-4">
        <p className="label-heading text-[12.5px] font-semibold uppercase tracking-[0.12em] text-gold">The other five chapters</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll chapters back"
            className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll chapters forward"
            className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
          >
            →
          </button>
        </div>
      </div>

      <ul
        ref={strip}
        className="mt-5 -mx-[clamp(20px,5vw,64px)] flex snap-x snap-mandatory gap-[clamp(16px,2vw,28px)] overflow-x-auto scroll-px-[clamp(20px,5vw,64px)] px-[clamp(20px,5vw,64px)] pb-4 [scrollbar-color:rgb(201_162_39/0.5)_transparent]"
      >
        {rest.map((item, i) => (
          <li key={item.src} className="w-[min(620px,84vw)] shrink-0 snap-start">
            <button type="button" onClick={() => setOpen(i + 1)} className="group block w-full text-left">
              <span className="block border border-white/15 bg-[#0b0f17] p-1.5 transition-[border-color,transform] duration-300 group-hover:-translate-y-1 group-hover:border-gold/70 group-focus-visible:border-gold motion-reduce:transform-none">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 740px) 84vw, 620px"
                  // Lazy loading inside a horizontal scroller can stall in some browsers.
                  loading="eager"
                  className="h-auto w-full"
                />
              </span>
              <span className="mt-3 block font-serif text-[18px] font-semibold text-white">
                <span className="mr-2.5 text-gold">{String(i + 2).padStart(2, "0")}</span>
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={open} onIndex={setOpen} />
    </>
  );
}
