"use client";

import { useEffect } from "react";
import { cn } from "@/utils/cn";

/*
 * Light/dark switch. The theme lives on <html data-theme>, set before paint by
 * THEME_SCRIPT (app/layout.tsx) so there is no flash. Until a visitor chooses,
 * the site follows the system setting (and keeps following it); a choice is
 * saved in localStorage and applies on every page and visit. Both icons are
 * always rendered and CSS shows the right one, so server and client markup match.
 */

export const THEME_KEY = "theme";

export const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_KEY}");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

function apply(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.add("theme-switching");
  root.dataset.theme = theme;
  window.setTimeout(() => root.classList.remove("theme-switching"), 300);
}

export function ThemeToggle({ className }: { className?: string }) {
  // Follow system changes while the visitor hasn't made a choice.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      try {
        if (!localStorage.getItem(THEME_KEY)) apply(mq.matches ? "dark" : "light");
      } catch {
        /* storage unavailable: keep the current theme */
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable: the switch still works for this page */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch between light and dark theme"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-gold hover:text-gold-text",
        className,
      )}
    >
      {/* Moon in light theme (switch to dark); sun in dark theme (switch to light). */}
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden h-[18px] w-[18px] dark:block" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
      </svg>
    </button>
  );
}
