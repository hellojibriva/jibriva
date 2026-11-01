/** Approved wording, exactly as specified. Used on About and the Resume. */
export const professionalCapabilities = [
  "Public Health Programme Implementation",
  "Monitoring, Evaluation, Accountability and Learning (MEAL)",
  "Health Information Management and Data Quality",
  "Health Data Analysis, Reporting and Visualisation",
  "Research Support and Evidence Synthesis",
  "Programme Documentation and Technical Reporting",
];

export const researchInterests = [
  "One Health and Integrated Disease Surveillance",
  "Zoonotic Disease Surveillance and Epidemiology",
];

/*
 * Explorable capability areas on the About page. Everything listed is stated
 * in Abi's CV or shown on this site. Items marked `interest` are research
 * interests, shown as such — not established specialisations. Tools are split
 * between programme work and independent projects.
 */
export type CapabilityArea = {
  name: string;
  summary: string;
  items: { text: string; interest?: boolean }[];
  toolsWork: string[];
  toolsIndependent: string[];
  examples: { text: string; source: string }[];
};

export const capabilityAreas: CapabilityArea[] = [
  {
    name: "Programme Implementation & Operations",
    summary: "Turning programme priorities into coordinated work in facilities.",
    items: [
      { text: "Programme coordination and implementation" },
      { text: "Workplan and deliverable tracking" },
      { text: "Facility-level programme support" },
      { text: "Stakeholder coordination" },
      { text: "Activity planning and supervision" },
    ],
    toolsWork: ["Microsoft Excel", "Word", "PowerPoint", "Microsoft Teams"],
    toolsIndependent: [],
    examples: [
      { text: "Led the PMTCT workstream, with activity plans costed and spending tracked against approved budgets.", source: "SCIDaR · ASPIRE" },
      { text: "Coordinate with facility Officers-in-Charge and LGA M&E structures, and supervise programme liaison officers.", source: "PSHAN · ADHFP" },
    ],
  },
  {
    name: "MEAL & Programme Performance",
    summary: "Following results closely enough to act on them.",
    items: [
      { text: "Monitoring, evaluation and learning" },
      { text: "Indicator tracking" },
      { text: "Performance reporting" },
      { text: "Data quality assessments" },
      { text: "Quality improvement" },
    ],
    toolsWork: ["Microsoft Excel", "Power BI", "Google Forms", "SPSS"],
    toolsIndependent: [],
    examples: [
      { text: "Monitored HIV testing, PMTCT, retention and viral-load indicators; weekly, monthly and quarterly reports.", source: "SCIDaR · ASPIRE" },
      { text: "Monthly indicator analyses, dashboards and reports for programme and stakeholder reviews.", source: "PSHAN · ADHFP" },
    ],
  },
  {
    name: "Health Information & Data",
    summary: "Making routine data complete, consistent and on time — then using it.",
    items: [
      { text: "DHIS2 and health information systems" },
      { text: "Health data management" },
      { text: "Excel and Power BI" },
      { text: "Data analysis and visualisation" },
      { text: "Reporting completeness and timeliness" },
    ],
    toolsWork: ["DHIS2", "DATIM", "NMRS", "NHLMIS", "Microsoft Excel", "Power BI", "KoboToolbox", "ODK", "SurveyCTO"],
    toolsIndependent: ["Python", "GIS mapping"],
    examples: [
      { text: "Entered, checked and reconciled patient and programme data in DHIS2.", source: "SCIDaR · ACHIEVE" },
      { text: "Weekly reporting and register reviews that helped low-performing facilities move into the NHLMIS top 10.", source: "SCIDaR · ASPIRE" },
    ],
  },
  {
    name: "Research & Surveillance",
    summary: "Reading surveillance data carefully, including what it cannot show.",
    items: [
      { text: "Epidemiological research" },
      { text: "Evidence synthesis and interpretation" },
      { text: "Infectious disease surveillance", interest: true },
      { text: "One Health and zoonotic disease research", interest: true },
    ],
    toolsWork: [],
    toolsIndependent: ["Power BI", "Python", "GIS mapping", "Next.js", "Supabase", "Leaflet"],
    examples: [
      { text: "Field surveillance and independent monitoring during polio vaccination campaigns.", source: "WHO · Jigawa State" },
      { text: "Completed analysis of Nigeria's WOAH-WAHIS brucellosis records, 2008–2025.", source: "Independent research" },
      { text: "OneHealth Hub, a One Health surveillance research prototype.", source: "Independent project" },
    ],
  },
];

/** The resume PDF is generated from the /resume page's print layout. */
/** Resume summary (kept separate from the homepage introduction). */
export const resumeSummary =
  "I work across public health programme implementation, monitoring and evaluation, and health information systems. My experience spans HIV/PMTCT programmes and primary healthcare, with a growing interest in epidemiological research, surveillance and One Health.";

export const RESUME_PDF = "/cv/Abi-Precious-Jibrin-Resume.pdf";
