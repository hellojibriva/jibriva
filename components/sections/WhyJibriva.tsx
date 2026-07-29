import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ValuePropCard } from "@/components/cards/ValuePropCard";
import { whyJibriva } from "@/content/why-jibriva";

interface WhyJibrivaProps {
  background?: "white" | "neutral";
}

export function WhyJibriva({ background = "neutral" }: WhyJibrivaProps) {
  return (
    <Section background={background}>
      <Eyebrow>Why Organisations Choose Jibriva</Eyebrow>
      <h2 className="mt-3 mb-10 max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
        A partner that stays close to the work.
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
        {whyJibriva.map((prop) => (
          <ValuePropCard key={prop.title} title={prop.title} desc={prop.desc} />
        ))}
      </div>
    </Section>
  );
}
