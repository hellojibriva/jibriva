import type { TimelineStep } from "@/types/content";

interface PathwayDiagramProps {
  steps: TimelineStep[];
  caption?: string;
  /** Compact = titles only (project cards); full = titles and descriptions. */
  compact?: boolean;
}

/** A project's pathway as numbered stages. The visible 01–0n labels are the only numbering. */
export function PathwayDiagram({ steps, caption, compact = false }: PathwayDiagramProps) {
  return (
    <figure className="border border-border bg-sand p-[clamp(20px,3vw,36px)]">
      {/* Both variants sit in a column of at most ~760px, so two stages per row. */}
      <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        {steps.map((step, i) => (
          <div key={step.name} className="border border-border bg-ivory p-5">
            <p className="font-serif text-[15px] font-semibold text-gold-text">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-1 text-[15.5px] font-semibold text-navy">{step.name}</p>
            {!compact && <p className="mt-2 text-[14px] leading-relaxed text-text-muted">{step.desc}</p>}
          </div>
        ))}
      </div>
      {caption && <figcaption className="mt-4 text-[13px] text-text-muted">{caption}</figcaption>}
    </figure>
  );
}
