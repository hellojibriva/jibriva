import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OurApproach } from "@/components/sections/OurApproach";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyJibriva } from "@/components/sections/WhyJibriva";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import {
  aboutHero,
  whyWeExist,
  missionVisionValues,
  pullQuote,
  aboutApproachIntro,
} from "@/content/about";
import { aboutApproachSteps } from "@/content/timeline";
import { buildMetadata } from "@/lib/metadata";
import { founderPersonSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Jibriva — A Nigerian One Health Consultancy",
  description:
    "Jibriva was created to help organisations respond to health and development challenges that cross the boundaries between people, animals and the environment.",
  path: "/about",
  ogTitle: "About Jibriva",
  ogDescription: "Why Jibriva exists, and how we work with our partners.",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderPersonSchema()) }}
      />
      <Navbar activePath="/about" />
      <main>
        <Hero eyebrow={aboutHero.eyebrow} h1={aboutHero.h1} />

        <Section className="pt-0">
          <div className="grid grid-cols-[minmax(240px,1fr)_2fr] gap-14 max-md:grid-cols-1 max-md:gap-6">
            <h2 className="text-[17px] font-bold text-navy">{whyWeExist.label}</h2>
            <div className="space-y-5">
              {whyWeExist.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[16px] leading-relaxed text-text-muted sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>

        <Section background="neutral">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
            {[missionVisionValues.mission, missionVisionValues.vision, missionVisionValues.values].map(
              (block) => (
                <div key={block.label}>
                  <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-emerald">
                    {block.label}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-text-muted">
                    {block.text}
                  </p>
                </div>
              ),
            )}
          </div>
        </Section>

        <Section background="dark" contentClassName="flex justify-center">
          <p className="max-w-[820px] text-center text-[clamp(22px,2.8vw,30px)] font-bold leading-[1.5] text-white">
            {pullQuote}
          </p>
        </Section>

        <OurApproach
          variant="about"
          eyebrow="Our Approach"
          h2={aboutApproachIntro.h2}
          intro={aboutApproachIntro.paragraph}
          steps={aboutApproachSteps}
        />

        <FounderSection />

        <WhyJibriva background="white" />

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
