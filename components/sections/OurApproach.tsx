import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import type { TimelineStep } from "@/types/content";

interface OurApproachProps {
  eyebrow: string;
  h2: string;
  intro?: string;
  steps: TimelineStep[];
  variant: "home" | "about";
}

export function OurApproach({ eyebrow, h2, intro, steps, variant }: OurApproachProps) {
  if (variant === "home") {
    return (
      <Section background="dark">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-white">
          {h2}
        </h2>

        {/* Fixed 6-column grid, matching DESIGN_SYSTEM.md §4.5 exactly: "the one
            layout in the system that does not use auto-fit/clamp and will not
            reflow on mobile." A mobile override is explicitly flagged there as
            NOT part of the approved design and needs client sign-off first —
            do not add one here without that sign-off. */}
        <div className="mt-12 grid grid-cols-6 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div key={step.name} className="relative pt-6">
              <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-emerald" />
              <span className="absolute left-[5px] top-2.5 h-px w-full bg-white/15" />
              <h3 className="text-[15.5px] font-bold text-white">{step.name}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <h2 className="max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">{h2}</h2>
      {intro && (
        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
          {intro}
        </p>
      )}

      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8">
        {steps.map((step) => (
          <div key={step.name} className="border-t-2 border-border pt-5">
            <h3 className="text-[15.5px] font-bold text-navy">{step.name}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-text-muted">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
