import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/our-work";

export default function OurWorkPage() {
  return (
    <>
      <Navbar activePath="/our-work" />
      <main>
        <Hero
          eyebrow="Our Work"
          h1="Case studies from our work in the field."
          paragraph="We're documenting our work for publication. Here's a preview of the kind of platforms and systems we build with our partners."
        />

        <Section className="pt-0">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
