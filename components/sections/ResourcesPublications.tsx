import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { resourcesPublications } from "@/content/home";

export function ResourcesPublications() {
  return (
    <Section>
      <Eyebrow>{resourcesPublications.eyebrow}</Eyebrow>
      <h2 className="mt-3 mb-10 max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
        {resourcesPublications.h2}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {resourcesPublications.items.map((item) => (
          <ResourceCard key={item.name} resource={item} />
        ))}
      </div>
    </Section>
  );
}
