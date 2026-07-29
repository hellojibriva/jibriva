import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { GridSeamPanel } from "@/components/ui/GridSeamPanel";
import { areasOfExpertise } from "@/content/home";

export function AreasOfExpertise() {
  return (
    <Section background="neutral">
      <Eyebrow>{areasOfExpertise.eyebrow}</Eyebrow>
      <h2 className="mt-3 mb-10 max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
        {areasOfExpertise.h2}
      </h2>
      <GridSeamPanel items={areasOfExpertise.grid.map((title) => ({ title }))} minWidth={180} />
    </Section>
  );
}
