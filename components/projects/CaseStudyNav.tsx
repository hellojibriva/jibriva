"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export type Chapter = { id: string; label: string };

/**
 * Case-study chapter navigation with scroll-spy: the chapter in view is
 * highlighted as you read. "bar" is a sticky strip under the site header (a
 * swipeable row on phones); "list" is a vertical list for a sidebar.
 */
export function CaseStudyNav({ chapters, variant = "bar", label = "Case study chapters" }: { chapters: Chapter[]; variant?: "bar" | "list"; label?: string }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    // The active chapter is the last one whose top has passed a line a third
    // of the way down the viewport (works for nested chapters too). A handful
    // of position reads per scroll, so it runs directly on each event.
    const update = () => {
      const line = window.innerHeight * 0.33;
      let current = chapters[0]?.id;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= line) current = c.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [chapters]);

  if (variant === "list") {
    return (
      <ul className="mt-3 space-y-1 border-l border-border" aria-label={label}>
        {chapters.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              aria-current={active === c.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l py-1 pl-4 text-[14px] transition-colors",
                active === c.id ? "border-gold font-semibold text-navy" : "border-transparent text-text-muted hover:border-gold/60 hover:text-navy",
              )}
            >
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav aria-label={label} className="sticky top-[72px] z-30 border-b border-border bg-cream/95 px-[clamp(20px,5vw,64px)] backdrop-blur-[8px] print:hidden">
      <ol className="mx-auto flex max-w-[1280px] gap-1 overflow-x-auto py-2.5">
        {chapters.map((c, i) => (
          <li key={c.id} className="shrink-0">
            <a
              href={`#${c.id}`}
              aria-current={active === c.id ? "location" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13.5px] font-medium transition-colors",
                active === c.id ? "bg-navy text-cream" : "text-text-muted hover:bg-sand hover:text-navy",
              )}
            >
              <span aria-hidden="true" className={cn("font-serif text-[12.5px]", active === c.id ? "text-gold" : "text-gold-text")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
