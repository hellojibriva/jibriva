import { Section } from "@/components/ui/Section";
import { SectionHeaderRow } from "@/components/ui/SectionHeaderRow";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ourWorkTeaser } from "@/content/home";
import { projects } from "@/content/our-work";

export function OurWorkTeaser() {
  const teaserProjects = ourWorkTeaser.slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => {
      const overview = ourWorkTeaser.overviewOverrides[project.slug];
      return overview ? { ...project, overview } : project;
    });

  return (
    <Section background="neutral">
      <SectionHeaderRow
        eyebrow={ourWorkTeaser.eyebrow}
        h2={ourWorkTeaser.h2}
        linkLabel={ourWorkTeaser.linkLabel}
        linkHref="/our-work"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {teaserProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="lightweight" />
        ))}
      </div>
    </Section>
  );
}
