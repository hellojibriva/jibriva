import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface SectionHeaderRowProps {
  eyebrow: string;
  h2: string;
  linkLabel: string;
  linkHref: string;
  dark?: boolean;
}

/**
 * Heading + "view more" link pairing. The heading side uses flex:1/min-width
 * and the link side uses flex-shrink:0/whitespace-nowrap so a long heading
 * wrapping to two lines never collides with the link — a real bugfix
 * (Master Spec §5), not a stylistic choice. Do not simplify away.
 */
export function SectionHeaderRow({ eyebrow, h2, linkLabel, linkHref, dark = false }: SectionHeaderRowProps) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-[280px] flex-1">
        <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow>
        <h2
          className={`mt-3 text-[clamp(28px,3.5vw,38px)] font-bold ${dark ? "text-white" : "text-navy"}`}
        >
          {h2}
        </h2>
      </div>
      <Link
        href={linkHref}
        className={`shrink-0 whitespace-nowrap text-[14px] font-semibold ${
          dark ? "text-emerald hover:text-white" : "text-emerald-text hover:text-navy"
        }`}
      >
        {linkLabel}
      </Link>
    </div>
  );
}
