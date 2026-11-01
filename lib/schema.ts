import { siteConfig } from "@/config/site";
import type { CaseStudy } from "@/types/content";

/** Person schema — the site's only entity. Rendered on Home and About. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: `${siteConfig.domain}/`,
    image: `${siteConfig.domain}/team/abi-precious-jibrin.png`,
    email: `mailto:${siteConfig.contact.email}`,
    knowsAbout: [
      "Public health programme implementation and management",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Health information systems",
      "Data quality improvement",
      "Research and epidemiological analysis",
      "One Health",
      "Integrated disease surveillance",
    ],
    knowsLanguage: ["English", "Hausa"],
    // Current employer (February 2026 – present).
    worksFor: {
      "@type": "Organization",
      name: "Private Sector Health Alliance of Nigeria",
      alternateName: "PSHAN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Nasarawa State University, Keffi",
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
  };
}

/** CreativeWork schema for a project case study, rendered on its /projects/[slug] page. */
export function caseStudySchema(project: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    alternativeHeadline: project.subtitle,
    genre: project.classification,
    description: project.summary,
    url: `${siteConfig.domain}/projects/${project.slug}`,
    sameAs: project.links.map((l) => l.href),
    creator: { "@type": "Person", name: siteConfig.name, url: `${siteConfig.domain}/` },
  };
}
