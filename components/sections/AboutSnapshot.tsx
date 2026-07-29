import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { aboutSnapshot } from "@/content/home";

export function AboutSnapshot() {
  return (
    <Section>
      <div className="grid grid-cols-[minmax(240px,1fr)_2fr] gap-14 max-md:grid-cols-1 max-md:gap-6">
        <div>
          <Eyebrow>{aboutSnapshot.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
            {aboutSnapshot.h2}
          </h2>
        </div>
        <div>
          <p className="text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            {aboutSnapshot.paragraph}
          </p>
          <Link
            href="/about"
            className="mt-5 inline-block text-[14px] font-semibold text-emerald hover:text-navy"
          >
            {aboutSnapshot.linkLabel}
          </Link>
        </div>
      </div>
    </Section>
  );
}
