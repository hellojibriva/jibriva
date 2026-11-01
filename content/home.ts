import type { ExperienceVisual } from "@/components/sections/ExperienceCard";
import { siteConfig } from "@/config/site";

export const hero = {
  eyebrow: siteConfig.title,
  name: siteConfig.name,
  statement: siteConfig.message,
  intro:
    "I work across public health programme implementation and management, monitoring, evaluation and learning (MEAL), and health information systems, with research interests in epidemiology, disease surveillance and One Health.",
  now: { label: "Currently", text: "Project Officer, Adopt-A-Health-Facility Programme at PSHAN" },
  primary: { label: "View My Work", href: "/projects" },
  secondary: { label: "View Resume", href: "/resume" },
};

/*
 * "What I Bring": wording from Abi's brief, checked against the master CV
 * (Nov 2026). Areas 1–4 are established practice; area 5 is a developing
 * research and innovation direction and is presented as such.
 */
export const whatIBring = {
  h2: "What I Bring",
  intro:
    "Programme management, implementation and evidence-informed approaches to strengthening public health systems and service delivery.",
  areas: [
    {
      title: "Programme Management & Implementation",
      desc: "Coordinating programme activities, managing implementation priorities, tracking deliverables and supporting effective service delivery.",
    },
    {
      title: "Programme Performance & MEAL",
      desc: "Monitoring results, analysing performance, strengthening data quality and translating findings into practical programme improvements.",
    },
    {
      title: "Health Systems & Service Delivery",
      desc: "Supporting primary healthcare and HIV programme delivery through facility engagement, stakeholder coordination and implementation follow-up.",
    },
    {
      title: "Research, Data & Evidence",
      desc: "Applying data analysis, epidemiological research and surveillance insights to understand public health challenges and inform decisions.",
    },
  ],
  direction: {
    title: "Digital Innovation & One Health",
    desc: "Exploring how digital tools, integrated surveillance and multisectoral approaches can strengthen public health systems and disease reporting.",
  },
};

/** Organisations Abi has worked for (employment only; text marks, no logos). */
export const organisations = {
  label: "Where I've worked",
  items: [
    { short: "PSHAN", name: "Private Sector Health Alliance of Nigeria" },
    { short: "SCIDaR", name: "Solina Centre for International Development and Research" },
    { short: "WHO", name: "World Health Organization, Jigawa State" },
  ],
};

/*
 * "How I work": a working approach drawn from Abi's roles, not a formal
 * methodology. Each "inWork" example is stated in her CV.
 */
export const howIWork = {
  h2: "How I work",
  intro: "The loop I follow on programmes, from understanding a problem to fixing it.",
  stages: [
    {
      name: "Understand",
      text: "Assess the programme context, identify implementation challenges and understand where service delivery falls short.",
      inWork: "On ASPIRE, I used a Google Forms assessment to find out why facilities were reporting late, and analysed the feedback in Excel.",
    },
    {
      name: "Plan",
      text: "Translate programme priorities into activities, workplans, deliverables and monitoring arrangements.",
      inWork: "I prepared activity plans with estimated costs for patient-tracking activities, and monitored spending against approved budgets.",
    },
    {
      name: "Implement",
      text: "Coordinate activities, support facilities and stakeholders, and follow through on programme delivery.",
      inWork: "I led the PMTCT workstream, coordinating programme staff, facility focal persons and community mobilisers.",
    },
    {
      name: "Monitor",
      text: "Review indicators, assess data quality, track performance and communicate what the data shows.",
      inWork: "At PSHAN I turn routine HMIS data into monthly indicator analyses, dashboards and reports for programme reviews.",
    },
    {
      name: "Improve",
      text: "Identify gaps, strengthen reporting processes and use evidence to guide corrective action.",
      inWork: "Weekly reporting and register reviews I introduced helped low-performing facilities move into the NHLMIS top 10.",
    },
  ],
};

export const experienceSnapshot = {
  eyebrow: "Experience",
  h2: "Where I've worked",
  linkLabel: "Full experience",
};

/*
 * One visual per role, keyed by `${organisationShort}-${years}`.
 * PSHAN uses the overview page of Abi's own PHC Performance Dashboard
 * (exported PDF, page 1, rendered at 200 dpi), reconstructed with fictional
 * demonstration figures in place of every real value (chart labels scaled to
 * match the bars; axis scale numbers removed). No on-card label, at Abi's
 * request; the alt text still says the figures are fictional. Script: Jibriva/archive/experience-screen-sources. ACHIEVE and ASPIRE use screens
 * built for this site (fictional data; HTML sources in
 * Jibriva/archive/experience-screen-sources). WHO uses a drawn panel until a
 * genuine photograph that matches the brief is supplied.
 */
export const experienceVisuals: Record<string, ExperienceVisual> = {
  "PSHAN-2026 – Present": {
    kind: "image",
    src: "/experience/pshan-dashboard-reconstructed.png",
    alt: "Reconstructed preview of a Power BI PHC Performance Dashboard overview, showing fictional demonstration figures for reporting completeness, patients seen, deliveries, ANC4 retention, IPTp3, malaria positivity, family planning and monthly trends",
    position: "50% 0%",
  },
  "SCIDaR-2023 – 2026": {
    kind: "image",
    src: "/experience/aspire-pmtct-review-screen.png",
    alt: "Monitor showing a PMTCT cascade review: ANC attendance, HIV testing, ART initiation, mother–baby follow-up, early infant diagnosis and viral load, with fictional data",
    position: "50% 50%",
  },
  "SCIDaR-2021 – 2022": {
    kind: "image",
    src: "/experience/achieve-data-entry-screen.png",
    alt: "Monitor showing a monthly facility report data-entry form with validation checks, using fictional data",
    position: "50% 50%",
  },
  "WHO, Jigawa State-2016 – 2017": { kind: "panel", panel: "register" },
};

export const resumeTransition = {
  h2: "Explore my professional background",
  linkLabel: "View resume",
};

export const featuredProject = {
  h2: "Selected Projects",
};

export const closingCta = {
  h2: "Working on a programme, a research question or a role where this fits?",
  paragraph: "I'd like to hear about it — programme implementation, MEAL, research, surveillance or One Health.",
  primaryLabel: "Get in touch",
};
