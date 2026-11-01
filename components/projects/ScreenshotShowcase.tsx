"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox, type LightboxItem } from "@/components/projects/Lightbox";
import { cn } from "@/utils/cn";

type Shot = LightboxItem & { caption: string };

/** Browser-window frame around a screenshot; the whole frame is the button. */
function Framed({ shot, sizes, priority, onOpen, dark }: { shot: Shot; sizes: string; priority?: boolean; onOpen: () => void; dark?: boolean }) {
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left">
      <span
        className={cn(
          "block overflow-hidden border shadow-[0_30px_60px_-34px_rgba(15,23,42,0.55)] transition-[border-color,transform] duration-300 group-hover:-translate-y-1 group-focus-visible:border-gold motion-reduce:transform-none",
          dark ? "border-white/20 group-hover:border-gold/70" : "border-border group-hover:border-gold",
        )}
      >
        <span aria-hidden="true" className="flex gap-1.5 border-b border-border bg-ivory px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </span>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={sizes} priority={priority} className="h-auto w-full" />
      </span>
      <span className={cn("mt-3 flex items-baseline justify-between gap-4 text-[14.5px]", dark ? "text-white/80" : "text-text-muted")}>
        {shot.caption}
        <span className={cn("shrink-0 text-[12.5px] font-semibold", dark ? "text-gold" : "text-gold-text")}>Enlarge ↗</span>
      </span>
    </button>
  );
}

/** The lead screenshot alone, large (e.g. overlapping a page header). */
export function FeatureShot({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <Framed shot={shots[0]} sizes="(max-width: 1280px) 100vw, 1180px" priority onOpen={() => setOpen(0)} />
      <Lightbox items={shots} index={open} onIndex={setOpen} />
    </>
  );
}

/** The remaining screenshots in an asymmetric composition; the lightbox still steps through all of them. */
export function ShotComposition({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [, a, b, c] = shots;
  return (
    <>
      <div className="grid grid-cols-12 gap-x-[clamp(16px,3vw,40px)] gap-y-[clamp(28px,4vw,56px)]">
        <div className="reveal col-span-7 max-md:col-span-12">
          <Framed shot={a} sizes="(max-width: 767px) 100vw, 700px" onOpen={() => setOpen(1)} />
        </div>
        <div className="reveal col-span-5 self-end max-md:col-span-12 md:mb-[-12%]">
          <Framed shot={b} sizes="(max-width: 767px) 100vw, 500px" onOpen={() => setOpen(2)} />
        </div>
        <div className="reveal col-span-8 col-start-4 max-md:col-span-12 max-md:col-start-1 md:mt-[6%]">
          <Framed shot={c} sizes="(max-width: 767px) 100vw, 820px" onOpen={() => setOpen(3)} />
        </div>
      </div>
      <Lightbox items={shots} index={open} onIndex={setOpen} />
    </>
  );
}
