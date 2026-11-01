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
  { category: "Health information systems", tools: ["DHIS2", "DATIM", "NMRS", "NHLMIS"] },
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

/*
 * "What drives my work": the reasons behind the work, in Abi's voice. Each
 * point rests on something in her CV or projects; no new experience.
 */
export const drivers = {
  h2: "What drives my work",
  items: [
    {
      title: "Systems that hold up",
      text: "A programme is only as strong as the routine systems under it. I care about facilities reporting complete, timely data, because every decision upstream depends on it.",
    },
    {
      title: "Where primary care meets surveillance",
      text: "Primary healthcare facilities are often where unusual illness first shows up. I'm interested in how the reporting they already do can feed earlier detection.",
    },
    {
      title: "One Health and early detection",
      text: "My animal science background keeps me looking at the animal side of outbreaks. Many emerging infections start there, long before they reach a clinic.",
    },
    {
      title: "Evidence that changes practice",
      text: "Analysis matters when it changes what happens next — a reporting routine, a follow-up visit, a corrective action. That's the part of the work I enjoy most.",
    },
  ],
};

/*
 * "Ask me about my work": short answers grounded in the CV and the projects on
 * this site. Keep the facts here in step with content/profile.ts.
 */
export const askMe = {
  h2: "Ask me about my work",
  intro: "A few questions about my experience, how I work and the public-health challenges I care about.",
  items: [
    {
      q: "What kind of public-health programmes have I worked on?",
      a: [
        "HIV prevention, treatment and PMTCT on PEPFAR/USAID-funded programmes at SCIDaR — first on ACHIEVE, then on ASPIRE, where I led the PMTCT workstream.",
        "Primary healthcare through PSHAN's Adopt-A-Health-Facility Programme, where I support monitoring and performance analysis across revitalised facilities.",
        "Earlier, polio vaccination campaigns in Jigawa State with the World Health Organization, during my National Youth Service.",
      ],
    },
    {
      q: "How do I approach monitoring, evaluation and data quality?",
      a: [
        "I start by asking whether the data can be trusted. I check routine facility data for missing, inconsistent or unusual values and follow up with facilities until they are corrected.",
        "Only then do I analyse indicators and turn them into reports and dashboards. Where the same data-quality problems keep returning, I look for the cause — that's why I developed an HMIS and data-quality training plan and reporting checklists at PSHAN.",
      ],
    },
    {
      q: "What experience do I have supporting primary healthcare facilities?",
      a: [
        "At PSHAN I work with facility Officers-in-Charge and local government M&E structures on reporting gaps, outstanding submissions and implementation challenges, and I supervise programme liaison officers who support the facilities directly.",
        "On ASPIRE I worked with facility focal persons on HIV and PMTCT service delivery, reviewing records, registers and reports.",
      ],
    },
    {
      q: "How have I used health information to improve programme implementation?",
      a: [
        "On ASPIRE, facilities were reporting late and poorly. I used a Google Forms assessment to find out why, analysed the feedback in Excel, and introduced weekly reporting, clear deadlines, register reviews and structured follow-up.",
        "Those routines contributed to previously low-performing facilities moving from the red category on the NHLMIS dashboard into the top 10.",
      ],
    },
    {
      q: "What is OneHealth Hub, and how does it relate to my interest in One Health surveillance?",
      a: [
        "OneHealth Hub is an independent research prototype I built to explore how a community observation could reach an integrated surveillance picture — across human, animal and environmental health — and how risk messages could go back to that community.",
        "The dashboard, map, field reporting and risk-communication screens are implemented; USSD reporting was tested in the Africa's Talking Sandbox; SORMAS interoperability is only explored through a JSON export. It has not been used in a live surveillance programme.",
      ],
    },
    {
      q: "What kind of roles and collaborations am I interested in?",
      a: [
        "Roles in public-health programme implementation, MEAL and health information, especially where data quality and evidence shape decisions.",
        "Research collaborations in disease surveillance, epidemiology and One Health, and short pieces of support such as a data-quality review or an analysis.",
      ],
    },
  ],
};
