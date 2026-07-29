import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { GridSeamPanel } from "@/components/ui/GridSeamPanel";
import { Pill } from "@/components/ui/Pill";
import { sectors, tools, toolsIntro } from "@/content/expertise";

export default function ExpertisePage() {
  return (
    <>
      <Navbar activePath="/expertise" />
      <main>
        <Hero
          eyebrow="Expertise"
          h1="Depth across the sectors that shape health and development."
          paragraph="Our work sits at the intersection of many disciplines. Rarely does a real-world challenge fit inside just one of them."
        />

        <Section className="pt-0">
          <h2 className="mb-8 text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            Sectors We Support
          </h2>
          <GridSeamPanel items={sectors.map((name) => ({ title: name }))} minWidth={160} />
        </Section>

        <Section background="neutral">
          <h2 className="text-[clamp(26px,3.2vw,34px)] font-bold text-navy">Platforms & Tools</h2>
          <p className="mt-3 max-w-[720px] text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            {toolsIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Pill key={tool} label={tool} className="bg-white" />
            ))}
          </div>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
