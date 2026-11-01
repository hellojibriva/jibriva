import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { Section } from "@/components/ui/Section";
import { featuredProject } from "@/content/home";
import { publishedProjects } from "@/content/projects";

/** Homepage "Selected Projects": image-led rows, alternating sides; each project appears once. */
export function FeaturedProject() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div>
          <span aria-hidden="true" className="section-marker mb-5" />
          <h2 className="max-w-[760px] text-[clamp(34px,4.6vw,60px)] leading-[1.02] tracking-[-0.02em] text-navy">
            {featuredProject.h2}
          </h2>
        </div>
      </div>
      <div className="mt-[clamp(40px,6vw,80px)] space-y-[clamp(56px,8vw,112px)]">
        {publishedProjects.map((project, i) => (
          <ProjectFeature key={project.slug} project={project} index={i} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
