import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { Section } from "@/components/ui/Section";
import { projectsIntro, publishedProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Independent epidemiological research and a One Health surveillance prototype by Abi Precious Jibrin, Public Health Programme & Systems Specialist.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow={projectsIntro.eyebrow} h1={projectsIntro.h1} paragraph={projectsIntro.paragraph} />
      <Section className="pt-0">
        <div className="space-y-[clamp(56px,8vw,112px)]">
          {publishedProjects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} index={i} flip={i % 2 === 1} detailed />
          ))}
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
