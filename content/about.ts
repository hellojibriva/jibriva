import { siteConfig } from "@/config/site";
import type { SkillCategory } from "@/types/content";

export const aboutHero = {
  eyebrow: "About",
  h1: siteConfig.name,
  subtitle: siteConfig.title,
};

/* Sources: Abi's CV of 31 Oct 2026 and her chat instructions. Written in her own voice — keep it plain. */
export const profile = [
  "Most of my work has been about making programme data reliable and useful: checking it, reporting it, and following up on what it shows. I currently work as a Project Officer on the Adopt-A-Health-Facility Programme at the Private Sector Health Alliance of Nigeria (PSHAN), supporting monitoring and performance analysis across a network of primary healthcare facilities.",
  "Before PSHAN, I worked at the Solina Centre for International Development and Research (SCIDaR) on PEPFAR/USAID-funded HIV programmes — first as a Data Entry Clerk on ACHIEVE, then as Programme Officer and PMTCT Workstream Lead on ASPIRE. I started out with the World Health Organization in Jigawa State, monitoring polio vaccination campaigns during my National Youth Service.",
  "My degree is in animal science, and it's a large part of why epidemiology, zoonotic disease surveillance and One Health interest me — many of the diseases that matter for public health begin in animals. I'm developing that interest through epidemiological research and independent projects, alongside my programme work.",
];

/** Exactly as supplied by Abi — no additions, no proficiency ratings. */
export const technicalSkills: SkillCategory[] = [
  {
    category: "Programme and data tools",
    tools: ["Microsoft Excel, PowerPoint and Word", "Power BI", "SPSS", "Google Forms", "Google Workspace"],
  },
  { category: "Health information systems", tools: ["DHIS2", "SORMAS", "DATIM", "NMRS", "NHLMIS"] },
  { category: "Data collection and monitoring", tools: ["KoboToolbox", "ODK", "SurveyCTO"] },
  {
    category: "Digital and geographic tools",
    tools: ["GIS mapping", "Spatial visualisation", "Leaflet", "Supabase", "Next.js"],
  },
  {
    category: "Project and collaboration tools",
    tools: ["Microsoft Teams and related digital coordination tools"],
  },
  {
    category: "Artificial intelligence",
    tools: ["Generative AI tools for data analysis, drafting and summarisation (Google AI Essentials)"],
  },
];

export const education = {
  qualification: "B.Agric. Animal Science",
  institution: "Nasarawa State University, Keffi",
  year: "2015",
};

export const professionalDevelopment = [
  "Google Project Management Professional Certificate",
  "Google Data Analytics Professional Certificate",
  "Google AI Essentials",
];

export const languages = [
  { language: "English", level: "Fluent" },
  { language: "Hausa", level: "Fluent" },
];

/** Development interests — research interests, distinct from professional experience. */
export const developmentInterests = [
  "One Health",
  "Zoonotic and emerging infectious disease surveillance",
  "Integrated human, animal and environmental health approaches",
  "Primary healthcare and surveillance systems",
  "Evidence-informed public health programming",
];

export const principles =
  "Evidence only matters when someone acts on it. Collaboration across sectors isn't optional in One Health work. And a tool or system is worth little if the people who inherit it can't sustain it.";
