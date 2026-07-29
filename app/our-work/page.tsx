import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/our-work";
import { buildMetadata } from "@/lib/metadata";

// SEO_GUIDE.md flags the source's <title> as a stale "Projects — Jibriva"
// left over from before the "Our Work" nav rename (CHANGELOG.md Known
// Follow-Ups) and recommends updating it during the rebuild — done here.
export const metadata: Metadata = buildMetadata({
  title: "Our Work — Case Studies | Jibriva",
  description:
    "A preview of the platforms and systems Jibriva builds with its partners. Full case studies are in preparation.",
  path: "/our-work",
  ogTitle: "Our Work — Jibriva",
});

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
