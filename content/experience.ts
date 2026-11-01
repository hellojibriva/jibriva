/*
 * Experience page copy. Role details live in content/profile.ts (from Abi's CV
 * of 31 Oct 2026, condensed). Achievements below are only things that are
 * stated in that CV or are completed, verifiable projects on this site — no
 * new metrics. PSHAN wording stays general: no facility or indicator counts.
 */

export const experienceHero = {
  eyebrow: "Experience",
  h1: "From field data to programme decisions",
  paragraph:
    "My career has moved from collecting surveillance data in the field, to managing HIV programme data, to leading a programme workstream and analysing primary healthcare performance.",
};

/** One line per role describing the step it represents in that progression. */
export const progression: Record<string, string> = {
  "WHO, Jigawa State": "Where I started: field surveillance and independent monitoring of polio campaigns.",
  "SCIDaR-2021 – 2022": "Learning programme data from the inside: entry, checks and reconciliation in DHIS2.",
  "SCIDaR-2023 – 2026": "Leading a workstream: PMTCT implementation, indicators, data quality and reporting.",
  PSHAN: "Now: monitoring and performance analysis across a primary healthcare facility network.",
};

export const achievements = [
  {
    title: "Turned around facility reporting on ASPIRE",
    text: "I identified persistent facility reporting barriers and introduced weekly reporting, submission deadlines, register reviews and structured follow-up. The new routines contributed to previously low-performing facilities moving from the red category on the NHLMIS dashboard into the top 10.",
    source: "SCIDaR · PEPFAR/USAID ASPIRE",
  },
  {
    title: "Led the PMTCT workstream",
    text: "Coordinated PMTCT activities, tracked implementation against national guidelines and targets, and monitored testing, retention and viral-load indicators.",
    source: "SCIDaR · PEPFAR/USAID ASPIRE",
  },
  {
    title: "Built tools to fix recurring data-quality gaps",
    text: "Developed an HMIS and data-quality training plan, and checklists for family planning and mortality/cause-of-death reporting.",
    source: "PSHAN · ADHFP",
  },
  {
    title: "Completed an independent epidemiological analysis",
    text: "Analysed Nigeria's WOAH-WAHIS brucellosis records for 2008–2025 and delivered a validated, interactive Power BI report.",
    source: "Independent research",
    href: "/projects/nigeria-brucellosis-surveillance-analysis",
  },
  {
    title: "Built a One Health surveillance prototype",
    text: "Designed and built OneHealth Hub, linking community reporting, mapping and risk communication in one working tool.",
    source: "Independent project",
    href: "/projects/onehealth-hub",
  },
];
