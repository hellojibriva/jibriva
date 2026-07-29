import { Section } from "@/components/ui/Section";
import { SectionHeaderRow } from "@/components/ui/SectionHeaderRow";
import { GridSeamPanel } from "@/components/ui/GridSeamPanel";
import { whatWeDo } from "@/content/home";

export function ServicesTeaser() {
  return (
    <Section>
      <SectionHeaderRow
        eyebrow={whatWeDo.eyebrow}
        h2={whatWeDo.h2}
        linkLabel={whatWeDo.linkLabel}
        linkHref="/services"
      />
      <GridSeamPanel items={whatWeDo.cards} minWidth={230} />
    </Section>
  );
}
