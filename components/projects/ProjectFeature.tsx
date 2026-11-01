import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/content";
import { cn } from "@/utils/cn";

/**
 * Image-led project row: a large framed preview beside the title and summary,
 * alternating sides down the page. The preview is the project's own screenshot
 * or figure; a project without imagery shows its phases as a typographic panel.
 */
export function ProjectFeature({
  project,
  index,
  flip = false,
  detailed = false,
}: {
  project: CaseStudy;
  index: number;
  flip?: boolean;
  /** Show role, question, approach, outcome and tools (the Projects page). */
  detailed?: boolean;
}) {
  const href = `/projects/${project.slug}`;

  return (
    <article className="group grid grid-cols-[1.15fr_1fr] items-center gap-[clamp(28px,5vw,80px)] max-lg:grid-cols-1">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          "relative block overflow-hidden border border-border bg-sand shadow-[0_24px_48px_-32px_rgba(15,23,42,0.45)]",
          flip && "lg:order-2",
        )}
      >
        <div aria-hidden="true" className="flex gap-1.5 border-b border-border bg-ivory px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="relative aspect-[16/10]">
          {project.cardImage ? (
            <Image
              src={project.cardImage.src}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 640px"
              className={cn(
                "transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none",
                // Screenshots fill the frame; near-square figures (maps) are shown whole on ivory.
                project.cardImage.width / project.cardImage.height < 1.4
                  ? "bg-ivory object-contain p-3"
                  : "object-cover object-top",
              )}
            />
          ) : (
            <PhasePanel steps={project.cardSteps ?? []} />
          )}
        </div>
      </Link>

      <div className={cn(flip && "lg:order-1")}>
        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-gold-text">
          <span className="font-serif text-[15px] normal-case tracking-normal">{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {project.classification}
        </p>
        <h3 className="mt-4 text-[clamp(28px,3vw,40px)] leading-[1.08] text-navy">
          <Link href={href} className="transition-colors hover:text-gold-text">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-[520px] text-[16.5px] leading-relaxed text-text-muted">{project.summary}</p>
        {detailed && project.highlights && (
          <dl className="mt-6 max-w-[560px] border-t border-border">
            {(
              [
                ["Role", project.highlights.role],
                ["Question", project.highlights.question],
                ["Approach", project.highlights.approach],
                ["Outcome", project.highlights.outcome],
                ["Tools", project.highlights.tools],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="grid grid-cols-[96px_1fr] gap-4 border-b border-border py-2.5 text-[14.5px] leading-snug max-sm:grid-cols-1 max-sm:gap-0.5">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-text sm:pt-0.5">{label}</dt>
                <dd className="text-text">{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy transition-colors hover:text-gold-text"
        >
          Read the case study
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            →
          </span>
          <span className="sr-only">: {project.title}</span>
        </Link>
      </div>
    </article>
  );
}

/** Typographic preview for a project without imagery: its phases on navy. */
function PhasePanel({ steps }: { steps: { name: string }[] }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3 bg-deep px-[12%]">
      {steps.map((s, i) => (
        <div key={s.name} className="flex items-baseline gap-5 border-b border-white/10 pb-3 last:border-0">
          <span className="font-serif text-[15px] text-gold">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-serif text-[clamp(18px,2vw,24px)] text-white">{s.name}</span>
        </div>
      ))}
    </div>
  );
}
