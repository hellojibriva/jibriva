import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ValuePropCard } from "@/components/cards/ValuePropCard";
import { ourExperience } from "@/content/home";

export function OurExperience() {
  return (
    <Section background="neutral">
      <Eyebrow>{ourExperience.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
        {ourExperience.h2}
      </h2>
      <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
        {ourExperience.paragraph}
      </p>

      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
        {ourExperience.cards.map((card) => (
          <ValuePropCard key={card.title} title={card.title} desc={card.desc} />
        ))}
      </div>
    </Section>
  );
}
