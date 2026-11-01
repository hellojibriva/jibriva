import Image from "next/image";
import Link from "next/link";
import type { CareerRole } from "@/types/content";

/** A role's visual: an image file, or one of the drawn panels below. */
export type ExperienceVisual =
  | {
      kind: "image";
      src: string;
      alt: string;
      /** CSS object-position, so the crop keeps the subject in frame. */
      position?: string;
      /** Short disclosure shown on the image, e.g. "Illustrative figures". */
      label?: string;
      /** One-line note shown directly under the image. */
      caption?: string;
    }
  | { kind: "panel"; panel: "register" };

/**
 * Image-led role card. The whole card is one link to the Experience page:
 * visual on top, then dates, title and programme · organisation, with a small
 * "View experience" cue. Drawn panels carry no figures, logos or documents and
 * are never presented as photographs.
 */
export function ExperienceCard({ role, index, visual }: { role: CareerRole; index: number; visual: ExperienceVisual }) {
  return (
    <Link
      href="/experience"
      className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-ivory shadow-[0_18px_36px_-28px_rgba(15,23,42,0.45)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_26px_48px_-28px_rgba(15,23,42,0.55)] focus-visible:-translate-y-1 focus-visible:border-gold motion-reduce:transform-none"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-gold/40 bg-deep">
        {visual.kind === "image" ? (
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="(max-width: 767px) 100vw, 560px"
            style={{ objectPosition: visual.position }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
          />
        ) : (
          <RegisterPanel />
        )}
        {/* The number sits on its own dark chip so it reads on light screens and dark panels alike. */}
        <span aria-hidden="true" className="absolute bottom-3 left-3 rounded-[4px] bg-ink/80 px-2 py-0.5 font-serif text-[14px] text-paper">
          {String(index + 1).padStart(2, "0")}
        </span>
        {visual.kind === "image" && visual.label && (
          <span className="absolute top-3 right-3 rounded-[4px] border border-gold/60 bg-ink/85 px-2 py-0.5 text-[11.5px] font-semibold tracking-[0.04em] text-paper">
            {visual.label}
          </span>
        )}
      </div>
      {visual.kind === "image" && visual.caption && (
        <p className="border-b border-border bg-cream/60 px-[clamp(18px,2.2vw,26px)] py-2 text-[12.5px] leading-snug text-text-muted">
          {visual.caption}
        </p>
      )}
      <div className="flex flex-1 flex-col p-[clamp(18px,2.2vw,26px)]">
        <p className="text-[13px] font-semibold tracking-[0.06em] text-gold-text">{role.years}</p>
        <h3 className="mt-1.5 text-[clamp(19px,1.9vw,23px)] leading-snug text-navy">{role.title}</h3>
        <p className="mt-1.5 text-[14.5px] leading-snug text-text-muted">
          {role.programme} · {role.organisationShort}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13.5px] font-semibold text-navy transition-colors group-hover:text-gold-text">
          View experience
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}


/** Campaign register: ruled columns with tally marks, as kept by field monitors. */
function RegisterPanel() {
  const rows = [5, 3, 7, 4, 6, 2];
  return (
    <svg aria-hidden="true" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <rect width="320" height="180" fill="var(--c-deep)" />
      <rect x="34" y="18" width="252" height="150" rx="3" fill="rgb(241 234 217 / 0.06)" stroke="rgb(201 162 39 / 0.35)" />
      <line x1="34" x2="286" y1="38" y2="38" stroke="rgb(201 162 39 / 0.5)" />
      {[110, 200].map((x) => (
        <line key={x} x1={x} x2={x} y1="18" y2="168" stroke="rgb(201 162 39 / 0.25)" />
      ))}
      {rows.map((n, r) => {
        const y = 58 + r * 20;
        return (
          <g key={r}>
            <line x1="34" x2="286" y1={y + 8} y2={y + 8} stroke="rgb(201 162 39 / 0.14)" />
            <rect x="44" y={y - 4} width={34 + ((r * 13) % 24)} height="5" rx="2" fill="rgb(241 234 217 / 0.22)" />
            <g stroke="rgb(212 175 55 / 0.85)" strokeWidth="1.6" strokeLinecap="round">
              {Array.from({ length: Math.min(n, 4) }, (_, i) => (
                <line key={i} x1={122 + i * 7} x2={122 + i * 7} y1={y - 7} y2={y + 4} />
              ))}
              {n >= 5 && <line x1="118" x2="146" y1={y + 3} y2={y - 6} />}
              {Array.from({ length: Math.max(n - 5, 0) }, (_, i) => (
                <line key={`b${i}`} x1={156 + i * 7} x2={156 + i * 7} y1={y - 7} y2={y + 4} />
              ))}
            </g>
            <path d={`M212 ${y - 1} l4 4 l8 -9`} fill="none" stroke="rgb(241 234 217 / 0.6)" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
  );
}
