import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";

interface WordmarkProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Typographic identity: the name on its own line, the professional title on a
 * second line in smaller, spaced capitals so the two never read as one phrase.
 */
export function Wordmark({ tone = "light", className }: WordmarkProps) {
  const dark = tone === "dark";

  return (
    <Link href="/" aria-label={`${siteConfig.name}, home`} className={cn("block min-w-0", className)}>
      <span
        className={cn(
          "block font-serif text-[19px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[20px]",
          dark ? "text-white" : "text-navy",
        )}
      >
        {siteConfig.name}
      </span>
      <span
        className={cn(
          "mt-1.5 block text-balance text-[10.5px] font-semibold uppercase leading-[1.35] tracking-[0.07em] sm:text-[11px] sm:tracking-[0.08em]",
          dark ? "text-gold" : "text-gold-text",
        )}
      >
        {siteConfig.title}
      </span>
    </Link>
  );
}
