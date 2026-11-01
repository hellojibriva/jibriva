"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type LightboxItem = { src: string; alt: string; width: number; height: number; title: string };

/**
 * Full-size image viewer on a native <dialog> (focus trap, Escape and focus
 * return come with it). Previous/next by button, arrow keys or swipe.
 * Controlled: `index` null means closed.
 */
export function Lightbox({
  items,
  index,
  onIndex,
}: {
  items: LightboxItem[];
  index: number | null;
  onIndex: (i: number | null) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const many = items.length > 1;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const go = (step: number) => index !== null && onIndex((index + step + items.length) % items.length);
  const item = index !== null ? items[index] : null;

  return (
    <dialog
      ref={dialog}
      onClose={() => onIndex(null)}
      onClick={(e) => e.target === e.currentTarget && onIndex(null)}
      onKeyDown={(e) => {
        if (!many) return;
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null || !many) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
      aria-label={item?.title ?? "Image viewer"}
      className="m-auto max-h-none w-[min(1480px,96vw)] max-w-none bg-transparent p-0 backdrop:bg-ink/90"
    >
      {item && index !== null && (
        <div className="text-white">
          <div className="flex items-center justify-between gap-4 pb-3">
            <p className="text-[14.5px] font-semibold">
              {many && (
                <span className="mr-3 font-serif text-gold">
                  {index + 1} / {items.length}
                </span>
              )}
              {item.title}
            </p>
            <button
              type="button"
              onClick={() => onIndex(null)}
              className="border border-white/30 px-3 py-1.5 text-[14px] font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              Close <span aria-hidden="true">✕</span>
            </button>
          </div>
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="96vw"
            className="mx-auto h-auto max-h-[80vh] w-auto max-w-full border border-white/10 object-contain"
          />
          {many && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                className="border border-white/30 px-5 py-2.5 text-[14px] font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                <span aria-hidden="true">←</span> Previous
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="border border-gold bg-gold px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
              >
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
