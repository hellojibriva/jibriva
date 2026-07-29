import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { whoWeWorkWith } from "@/content/home";

export function WhoWeWorkWith() {
  return (
    <Section background="neutral">
      <Eyebrow>{whoWeWorkWith.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
        {whoWeWorkWith.h2}
      </h2>
      <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
        {whoWeWorkWith.paragraph}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {whoWeWorkWith.list.map((item) => (
          <Pill key={item} label={item} className="bg-white" />
        ))}
      </div>
    </Section>
  );
}
