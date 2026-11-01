import type { CaseStudy } from "@/types/content";

/*
 * Sources (all in "Abi One health surveillance/Nigeria_Brucellosis_Surveillance_Dashboard"):
 * README.md, documentation/methodology.md, validation_report.md, COMPLETION_REPORT.md,
 * and the source CSV (107 records, SHA-256 66F52672…3519). Every figure below was
 * recomputed from that CSV on 1 Nov 2026. The two maps are the pipeline's own static
 * reference figures (assets/maps). The six dashboard images are the pages of the
 * completed Power BI report, exported to PDF by Abi and rendered at 200 dpi (only
 * the white PDF margin trimmed); the PDF itself is not published.
 * The research and Power BI report are complete;
 * whether to host the interactive report publicly is a separate decision and is
 * not a limitation of the research.
 * Reported surveillance records only — never present as incidence or prevalence.
 */
const IMG = "/projects/nigeria-brucellosis-surveillance-analysis";

export const brucellosis: CaseStudy = {
  slug: "nigeria-brucellosis-surveillance-analysis",
  published: true,
  title: "Nigeria Brucellosis Surveillance Analysis (2008–2025)",
  subtitle: "Reported livestock brucellosis in WOAH-WAHIS records, 2008–2025",
  classification: "Epidemiological Research",
  status: "",
  highlights: {
    role: "Independent researcher",
    question: "What do Nigeria's WOAH-WAHIS brucellosis records (2008–2025) show about timing, geography, species and hosts — and how complete are they?",
    approach: "Data cleaning and validation; descriptive, temporal and geographical analysis",
    outcome: "Completed interactive Power BI report: 487 reported cases across 78 outbreaks",
    tools: "Power BI (DAX, Power Query), Python",
  },
  summary:
    "An analysis of Nigeria's reported livestock brucellosis surveillance records, examining reporting patterns, geographic distribution, Brucella species, animal hosts and data-quality considerations.",
  intro:
    "This project examines the brucellosis records Nigeria reported to the World Organisation for Animal Health's World Animal Health Information System (WOAH-WAHIS) between 2008 and 2025. It describes what the surveillance system received — when, where, in which Brucella species and in which animal hosts — and how complete those records are. Because these are reported surveillance records, the analysis describes reporting patterns rather than population-level incidence or prevalence.",
  glance: [
    { label: "Data source", value: "WOAH-WAHIS" },
    { label: "Study period", value: "2008–2025" },
    { label: "Subject", value: "Reported brucellosis cases and outbreaks in Nigeria" },
    { label: "Methods", value: "Data cleaning and validation; descriptive, temporal and geographical analysis" },
    { label: "Deliverable", value: "Completed interactive Power BI report" },
    { label: "Tools", value: "Power BI (DAX, Power Query), Python" },
  ],
  cardImage: {
    src: `${IMG}/map-reported-cases.png`,
    alt: "Map of Nigeria shading states by reported brucellosis cases, 2008–2025, with states without records in grey",
    width: 898,
    height: 809,
  },
  showcase: {
    heading: "Inside the Power BI Report",
    intro:
      "The analysis was delivered as an interactive Power BI report covering six chapters, from national reporting patterns and geographical distribution to species, hosts, data quality and One Health implications.",
    items: [
      {
        src: `${IMG}/dashboard/01-executive-overview.png`,
        width: 2667,
        height: 1500,
        title: "Executive Overview",
        alt: "Power BI cover page: Brucellosis Surveillance Intelligence, Nigeria 2008–2025, with headline figures 487 reported cases, 78 new outbreaks, 20 of 37 states/FCT and 12 of 18 years, a state map of reported cases, annual cases and outbreaks, and cases by Brucella species",
      },
      {
        src: `${IMG}/dashboard/02-temporal-patterns.png`,
        width: 2667,
        height: 1500,
        title: "Temporal Patterns",
        alt: "Power BI chapter 2, Temporal Surveillance Intelligence: reported cases by year on a continuous axis, cases by semester and a year-on-year change table, with the page guide panel open",
      },
      {
        src: `${IMG}/dashboard/03-geography.png`,
        width: 2667,
        height: 1500,
        title: "Geography",
        alt: "Power BI chapter 3, Geographic Intelligence: state map of reported cases with a cases/outbreaks switch, state ranking led by Adamawa (140) and a geopolitical zone summary",
      },
      {
        src: `${IMG}/dashboard/04-species-and-hosts.png`,
        width: 2667,
        height: 1500,
        title: "Species and Hosts",
        alt: "Power BI chapter 4, Species and Animal Distribution: animated species trajectory, cases by Brucella species and by animal host shown separately, species by year and a state-by-species table",
      },
      {
        src: `${IMG}/dashboard/05-data-quality.png`,
        width: 2667,
        height: 1500,
        title: "Data Quality",
        alt: "Power BI chapter 5, Surveillance Data Quality: completeness figures, field status across 107 records separating reported zeros from missing values, reporting coverage by year and state, and record-level quality flags",
      },
      {
        src: `${IMG}/dashboard/06-findings-one-health.png`,
        width: 2667,
        height: 1500,
        title: "Findings and One Health Implications",
        alt: "Power BI chapter 6, Research Findings and One Health Implications: findings on cases, outbreaks, species, hosts, geography, time and surveillance limits, each linked to its evidence chapter, with surveillance recommendations",
      },
    ],
  },
  sections: [
    {
      id: "question",
      title: "The question",
      blocks: [
        {
          type: "callout",
          text: [
            "What do the brucellosis records Nigeria reported to WOAH-WAHIS between 2008 and 2025 show about the timing, geography, Brucella species and animal hosts of reported cases and outbreaks — and how complete are those records?",
          ],
        },
        {
          type: "list",
          items: [
            "Describe reported cases and outbreaks over time and by state.",
            "Describe the Brucella species and animal hosts recorded.",
            "Assess the completeness of the records and keep reporting gaps visible.",
            "Draw out implications for surveillance and One Health practice.",
          ],
        },
      ],
    },
    {
      id: "background",
      title: "Why it matters",
      blocks: [
        {
          type: "p",
          text: "Brucellosis is a zoonotic bacterial disease of livestock that can also infect people, which makes it a natural case for a One Health view of surveillance.",
        },
        {
          type: "p",
          text: "National reporting to WOAH-WAHIS is one of the few consistent, public sources of animal-health surveillance data. Understanding what those records can and cannot show is a prerequisite for using them well.",
        },
      ],
    },
    {
      id: "approach",
      title: "My approach",
      blocks: [
        { type: "subhead", text: "Data" },
        {
          type: "list",
          items: [
            "WOAH-WAHIS semi-annual reports for Nigeria: an extract of 107 records × 19 fields, covering Brucella abortus, B. melitensis and B. suis.",
            "Study period 2008–2025, with records present in 12 of the 18 years (none in 2009, 2011–2012 or 2014–2016).",
            "Geography: Nigeria's 36 states and the Federal Capital Territory (37 first-level units).",
            "State boundaries for mapping: OCHA Common Operational Datasets, Nigeria admin-1 (HDX).",
          ],
        },
        { type: "subhead", text: "Preparation and analysis" },
        {
          type: "steps",
          steps: [
            {
              name: "Inspect",
              desc: "Profiled all 19 fields and found two record types in one file: 50 outbreak-level and 57 case-level rows.",
            },
            {
              name: "Clean",
              desc: "Treated “-” as missing, never as zero; kept genuine zeros; imputed nothing and logged every step.",
            },
            {
              name: "Model",
              desc: "Separate tables for outbreaks and cases so the two are never added together or double counted.",
            },
            {
              name: "Validate",
              desc: "Reconciled every headline figure against the source file with automated checks (51 of 51 passed).",
            },
          ],
          caption: "Analytical workflow, from the source extract to the Power BI report.",
        },
        {
          type: "list",
          items: [
            "Every record × field cell was classified as reported value, reported zero, missing, not applicable, or unavailable for all records.",
            "A continuous calendar keeps years without records visible; year-on-year change is calculated only when the previous year has records.",
            "Completeness is calculated on applicable cells only (94.6%), with the naive figure (49.5%) shown to explain why the distinction matters.",
          ],
        },
      ],
    },
    {
      id: "maps",
      title: "What I analysed",
      blocks: [
        {
          type: "p",
          text: "Two reference maps from the analysis pipeline keep reported cases and recorded outbreaks apart. Every headline figure in the report is reconciled against the source data by automated validation checks.",
        },
        {
          type: "figures",
          items: [
            {
              src: `${IMG}/map-reported-cases.png`,
              width: 898,
              height: 809,
              alt: "Choropleth map of reported brucellosis cases by state, Nigeria, 2008–2025; Adamawa darkest at 140; grey states have no record",
              caption:
                "Reported cases by state, 2008–2025. Grey = no record. Reference figure from the analysis pipeline. Boundaries: OCHA COD-AB (HDX); data: WOAH-WAHIS.",
            },
            {
              src: `${IMG}/map-recorded-outbreaks.png`,
              width: 890,
              height: 809,
              alt: "Choropleth map of recorded new brucellosis outbreaks by state, Nigeria, 2008–2025; Kano darkest at 12; grey states have no record",
              caption:
                "Recorded new outbreaks by state, 2008–2025. Grey = no record. Boundaries: OCHA COD-AB (HDX); data: WOAH-WAHIS.",
            },
          ],
        },
      ],
    },
    {
      id: "findings",
      title: "Key findings",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "487", label: "reported cases (57 case-level records)" },
            { value: "78", label: "recorded new outbreaks (50 outbreak-level records)" },
            { value: "20 of 37", label: "states / FCT with any record" },
            { value: "12 of 18", label: "years with any record" },
          ],
          note: "Reported surveillance records — not incidence or prevalence.",
        },
        {
          type: "list",
          items: [
            "Brucella abortus accounts for 417 reported cases (85.6%) and 53 recorded outbreaks (67.9%).",
            "Cattle are the most represented host (281 reported cases, 57.7%), followed by swine (95) and camelidae (43). B. abortus appears in six host categories as reported.",
            "Adamawa, Akwa Ibom and Jigawa account for 48.7% of reported cases; Kano (12) and Plateau (9) record the most outbreaks.",
            "One 2008 Adamawa cattle record holds 140 cases — 28.7% of all reported cases — so totals are sensitive to single reports.",
            "Reporting is sparse before 2017 and continuous from 2017; 62.8% of outbreaks (49 of 78) were recorded in 2021–2025, consistent with more regular recent reporting.",
          ],
        },
        { type: "subhead", text: "One Health and surveillance implications" },
        { type: "p", text: "The gaps in the records point to what the reporting system would need:" },
        {
          type: "list",
          items: [
            "Routine semi-annual reporting from all 36 states and the FCT, so that gaps reflect absence of disease rather than absence of reports.",
            "Event or outbreak identifiers, laboratory confirmation methods and Brucella typing, to allow linkage and de-duplication.",
            "Host species recorded at outbreak level.",
            "Linkage between animal and human brucellosis surveillance, and joint risk assessment between veterinary and public health services.",
          ],
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitations and lessons",
      blocks: [
        {
          type: "callout",
          heading: "Reported records reflect surveillance visibility",
          text: [
            "These are records the surveillance system received, not measures of disease burden. More reports in a year or a state can reflect more reporting, laboratory access or surveillance effort, not necessarily more disease.",
          ],
        },
        {
          type: "list",
          items: [
            "There are no population denominators, so incidence and prevalence cannot be estimated.",
            "Reporting is irregular (no records in 6 of 18 years), so trends mix reporting activity with disease occurrence.",
            "17 of 37 states / FCT have no record at all; a gap means unreported, not disease-free.",
            "WAHIS uses a single code (“-”) for both missing and not reported.",
            "Without event or outbreak identifiers or strain typing, records cannot be de-duplicated or linked.",
            "Outbreak counts cannot be attributed to host species.",
          ],
        },
        { type: "subhead", text: "Further research" },
        {
          type: "list",
          items: [
            "Compare the animal-health records with human brucellosis reporting where data exist.",
            "Combine reports with livestock population data to explore denominators.",
          ],
        },
      ],
    },
    {
      id: "contribution",
      title: "My contribution",
      blocks: [
        {
          type: "p",
          text: "I carried out this research independently: preparing the WAHIS extract, defining the cleaning rules and analytical approach, validating the figures against the source data, producing the Power BI report and interpreting the results.",
        },
        {
          type: "p",
          text: "Data: World Organisation for Animal Health (WOAH), World Animal Health Information System (WAHIS), Nigeria brucellosis semi-annual reports, 2008–2025. Independent analysis; not an official WOAH product.",
        },
      ],
    },
  ],
  links: [],
};
