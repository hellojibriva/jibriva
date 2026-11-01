/*
 * "The journey so far" — the Gantt-style career journey on the About page.
 * Sources: Abi's CV (Nov 2026) and her brief. Dates are only those on record:
 *   - Degree: 2011–2015 (2011 from Abi's brief; 2015 and class from the CV).
 *   - WHO: November 2016 – October 2017 (CV). "NPEI" and LQAS from Abi's brief.
 *   - OneHealth Hub May 2026, brucellosis analysis October 2026 (CV project dates).
 *   - Google certificates: 2026, month not recorded — drawn within 2026, no month claimed.
 * Independent projects are milestones, not employment, and were not
 * commissioned by any employer.
 */

export type JourneyKind = "education" | "work" | "milestone" | "emerging";

export type JourneyItem = {
  id: string;
  track: number;
  kind: JourneyKind;
  title: string;
  /** Shorter label for a bar on the chart. */
  short?: string;
  org: string;
  dates: string;
  /** Position on the year axis (decimal years). Milestones use `start` only. */
  start: number;
  end?: number;
  current?: boolean;
  description: string;
  learning?: string;
  link?: { href: string; label: string };
  /** For the emerging area: the interests it covers. */
  list?: string[];
};

export const journey = {
  h2: "The journey so far",
  intro: "From Animal Science to public health programme implementation, data and One Health.",
  statement:
    "Different roles, experiences and interests have shaped my journey. One thread has remained consistent: using information and better systems to improve health.",
  axis: { from: 2011, to: 2027, ahead: 2029 },
  present: 2026.83, // November 2026
  tracks: [
    "Academic foundation",
    "Public health entry",
    "Health programme data",
    "Programme implementation & MEAL",
    "Data, research & independent projects",
    "Emerging research direction",
  ],
  items: [
    {
      id: "degree",
      track: 0,
      kind: "education",
      title: "B.Agric. Animal Science",
      org: "Nasarawa State University, Keffi",
      dates: "2011 – 2015 · Second Class Upper",
      start: 2011,
      end: 2015.99,
      description: "Animal health, disease, production systems and how animals relate to their environment.",
      learning: "An early sense of how closely health and livelihoods are connected — the root of my interest in One Health.",
      link: { href: "/blog/from-animal-science-to-public-health", label: "Read the story behind my journey" },
    },
    {
      id: "who",
      track: 1,
      kind: "work",
      title: "Data Assistant / Independent Monitor",
      short: "Data Assistant / Independent Monitor, WHO",
      org: "WHO / NPEI · Polio campaign surveillance (NYSC), Jigawa State",
      dates: "November 2016 – October 2017",
      start: 2016.83,
      end: 2017.83,
      description: "Field surveillance, data collection and independent monitoring during polio vaccination campaigns, including LQAS monitoring and work in hard-to-reach communities.",
      learning: "My first experience of field monitoring, campaign data and surveillance-related work.",
      link: { href: "/experience", label: "See this role on the Experience page" },
    },
    {
      id: "achieve",
      track: 2,
      kind: "work",
      title: "Data Entry Clerk",
      org: "SCIDaR · PEPFAR/USAID ACHIEVE",
      dates: "March 2021 – December 2022",
      start: 2021.17,
      end: 2022.99,
      description: "Entered and maintained patient and programme data in DHIS2, with routine checks, validation and reconciliation.",
      learning: "Learning programme data from the inside: entry, checks and reconciliation.",
      link: { href: "/experience", label: "See this role on the Experience page" },
    },
    {
      id: "aspire",
      track: 2,
      kind: "work",
      title: "Programme Officer / PMTCT Workstream Lead",
      short: "PMTCT Workstream Lead",
      org: "SCIDaR · PEPFAR/USAID ASPIRE",
      dates: "January 2023 – February 2026",
      start: 2023,
      end: 2026.12,
      description: "Led the PMTCT workstream: coordinating activities, monitoring HIV and PMTCT indicators, data-quality assessments and programme reporting.",
      learning: "New reporting routines contributed to previously low-performing facilities moving from the red category on the NHLMIS dashboard into the top 10.",
      link: { href: "/experience", label: "See this role on the Experience page" },
    },
    {
      id: "pshan",
      track: 3,
      kind: "work",
      title: "Project Officer, Adopt-A-Health-Facility Programme",
      short: "Project Officer, PSHAN",
      org: "PSHAN",
      dates: "February 2026 – Present",
      start: 2026.08,
      end: 2026.83,
      current: true,
      description: "Programme monitoring, MEAL, facility reporting, data quality and primary healthcare performance across a network of revitalised facilities.",
      learning: "Developed an HMIS and data-quality training plan, and reporting checklists, to tackle recurring data-quality gaps.",
      link: { href: "/experience", label: "See this role on the Experience page" },
    },
    {
      id: "cert-da",
      track: 4,
      kind: "milestone",
      title: "Google Data Analytics Professional Certificate",
      org: "Google",
      dates: "2026",
      start: 2026.25,
      description: "Professional certificate in data analysis.",
      link: { href: "/resume", label: "See it on my resume" },
    },
    {
      id: "cert-pm",
      track: 4,
      kind: "milestone",
      title: "Google Project Management Professional Certificate",
      org: "Google",
      dates: "2026",
      start: 2026.45,
      description: "Professional certificate in project management.",
      link: { href: "/resume", label: "See it on my resume" },
    },
    {
      id: "onehealth",
      track: 4,
      kind: "milestone",
      title: "OneHealth Hub",
      org: "Independent research and innovation prototype",
      dates: "May 2026",
      start: 2026.37,
      description: "A prototype exploring community reporting, GIS-based surveillance and multilingual risk communication within a One Health approach. Not a deployed surveillance system.",
      learning: "Brought together surveillance thinking, data and systems design in a working tool.",
      link: { href: "/projects/onehealth-hub", label: "Explore the OneHealth Hub case study" },
    },
    {
      id: "brucellosis",
      track: 4,
      kind: "milestone",
      title: "Nigeria Brucellosis Surveillance Analysis",
      org: "Independent epidemiological research",
      dates: "October 2026",
      start: 2026.75,
      description: "Completed analysis of Nigeria's WOAH-WAHIS brucellosis records, 2008–2025, delivered as a Power BI report.",
      learning: "Reading surveillance records carefully — including what reported data cannot tell us.",
      link: { href: "/projects/nigeria-brucellosis-surveillance-analysis", label: "Explore the brucellosis case study" },
    },
    {
      id: "emerging",
      track: 5,
      kind: "emerging",
      title: "Emerging research direction",
      short: "Research direction",
      org: "A developing direction, not a qualification or position",
      dates: "Ahead",
      start: 2027,
      end: 2029,
      description: "Where my interests are heading.",
      learning: "How better data and connected surveillance systems can strengthen One Health and early disease detection.",
      list: [
        "Epidemiology and disease surveillance",
        "One Health",
        "Zoonotic and emerging infectious disease detection",
        "Primary healthcare–surveillance integration",
      ],
      link: { href: "/about#capabilities", label: "See my research interests" },
    },
  ] as JourneyItem[],
  thread: {
    label: "Data & Evidence — a thread through the journey",
    steps: [
      { item: "degree", text: "Animal Science introduced me to animal health, disease and biological systems." },
      { item: "who", text: "WHO/NPEI introduced me to field monitoring, campaign data and surveillance-related work." },
      { item: "achieve", text: "SCIDaR built my experience in programme data, facility reporting, PMTCT monitoring and data quality." },
      { item: "pshan", text: "At SCIDaR and PSHAN that grew into implementation, MEAL, indicator monitoring and performance improvement." },
      { item: "brucellosis", text: "My brucellosis research and OneHealth Hub bring data, epidemiology, surveillance and systems thinking together." },
      { item: "emerging", text: "Next: how better data and connected surveillance can strengthen One Health and early detection." },
    ],
  },
};
