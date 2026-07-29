import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { finalCta } from "@/content/cta";

export function FinalCta() {
  return (
    <Section background="dark" contentClassName="flex flex-col items-center text-center">
      <h2 className="max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-white">
        {finalCta.h2}
      </h2>
      <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
        {finalCta.paragraph}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href={finalCta.primaryHref} tone="dark" variant="primary">
          {finalCta.primaryLabel}
        </Button>
        <Button href={finalCta.secondaryHref} tone="dark" variant="secondary">
          {finalCta.secondaryLabel}
        </Button>
      </div>
    </Section>
  );
}
