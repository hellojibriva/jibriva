import type { CaseStudy } from "@/types/content";
import { oneHealthHub } from "@/content/projects/onehealth-hub";
import { brucellosis } from "@/content/projects/brucellosis";

/*
 * The project collection, in display order. Add a case study by creating its
 * file here and listing it below. Only `published: true` projects get a page,
 * a sitemap entry, a card on /projects and a place on the homepage.
 */
const allProjects: CaseStudy[] = [oneHealthHub, brucellosis];

export const publishedProjects = allProjects.filter((p) => p.published);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((p) => p.slug === slug);
}

/** Projects rendered by the shared case-study template (not their own route). */
export const templatedProjects = publishedProjects.filter((p) => !p.customPage);

export const projectsIntro = {
  eyebrow: "Projects",
  h1: "Selected work",
  paragraph:
    "Research and building I've done alongside my job, each written up with its methods, what came out of it and its limits.",
};

