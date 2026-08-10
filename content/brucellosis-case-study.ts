export const brucellosisHero = {
  eyebrow: "Case Study · Surveillance & GIS",
  h1: "Nigeria Brucellosis Surveillance & GIS Analysis",
  paragraph:
    "Analysis of brucellosis outbreak records reported for Nigeria through the World Animal Health Information System (WAHIS), 2008–2023.",
};

export const brucellosisQuestion = {
  h2: "Brucellosis, WAHIS reporting, and the scope of this analysis",
  paragraphs: [
    "Brucellosis is a bacterial zoonosis affecting livestock and people, with transmission occurring through contact with infected animals and animal products, including unpasteurised dairy. It is one of the more consequential livestock zoonoses and a standard reference disease in One Health surveillance work.",
    "Countries report livestock disease events to the World Organisation for Animal Health (WOAH) through the World Animal Health Information System (WAHIS). WAHIS provides an internationally accessible system for reporting animal-health events to WOAH.",
    "This analysis examines what Nigeria's WAHIS brucellosis extract, covering 2008 to 2023, actually contains: where outbreaks were reported, when they were reported, and which Brucella subtypes were recorded — and equally, what it does not contain. A WAHIS record reflects a reported event, not a direct measure of disease burden; that distinction shapes how the findings below should be read.",
  ],
};

export const brucellosisDataSection = {
  h2: "The data",
  paragraph:
    "This analysis draws on a single primary source: Nigeria's brucellosis records from the WAHIS Quantitative Data extract. The 24 records were transcribed from the source extract without value substitution.",
  facts: [
    { label: "Source", value: "WOAH WAHIS Quantitative Data" },
    { label: "Geographic scope", value: "Nigeria" },
    { label: "Disease", value: "Brucellosis" },
    { label: "Unit of analysis", value: "State × half-year reporting period" },
    { label: "Records", value: "24 rows" },
    { label: "Reporting period", value: "2008–2023" },
  ],
};

export const brucellosisOneHealth = {
  h2: "One Health relevance",
  paragraphs: [
    "Brucellosis has clear One Health relevance: infection moves between livestock and the people who handle them, chiefly through contact with infected animals, birth products and unpasteurised dairy.",
    "This WAHIS extract is animal-health surveillance data. It contains no human case records, so this analysis does not estimate human disease burden and makes no claim about it.",
    "Its contribution sits on the animal-health side of the One Health picture: showing where, and how consistently, livestock brucellosis outbreaks are being reported to WAHIS, and where reporting coverage is limited or absent in the extract.",
  ],
};

export interface InterpretationSection {
  title: string;
  body: string;
}

export const brucellosisInterpretation: InterpretationSection[] = [
  {
    title: "Geographic reporting",
    body: "Plateau recorded the highest number of reported outbreaks (8), followed by Kaduna (5), and Adamawa and Kano (4 each). At zone level, North Central (17) and North West (13) account for most of the 39 reported outbreaks. This concentration may reflect genuine differences in disease occurrence, differences in surveillance intensity or reporting practice between states, or a combination of both — the WAHIS extract cannot distinguish between these explanations on its own.",
  },
  {
    title: "Reporting continuity",
    body: "Nigeria's brucellosis records appear in 16 of the 32 possible half-year periods between 2008 and 2023 (17 outbreaks in Jan–Jun periods, 22 in Jul–Dec periods). Reporting is intermittent rather than continuous, which limits how much weight year-over-year comparisons can bear: a gap in the record may reflect a gap in reporting rather than a genuine lull in disease activity.",
  },
  {
    title: "Data completeness",
    body: "Beyond outbreak counts and subtype, the extract carries no case, animal-level, mortality or vaccination data for Nigeria — those fields are entirely unpopulated across all 24 records. This restricts the analysis to outbreak-event counts; it cannot support conclusions about the number of animals affected, disease severity, or case fatality.",
  },
  {
    title: "Geographic gaps",
    body: "No South South outbreak records were present in this WAHIS extract, and North East and South East each show only one reporting state. Absence of a record is not evidence of absence of disease — it may reflect differences in surveillance, diagnosis, reporting or WAHIS submission rather than a true absence of brucellosis.",
  },
];

export const brucellosisLimitations = [
  "WAHIS records describe reported events and should not be interpreted as a complete measure of disease occurrence.",
  "Reporting was intermittent — records exist for 16 of 32 possible half-year periods between 2008 and 2023 — which limits comparison of trends across years.",
  "Case, animal-level, mortality and vaccination fields are unpopulated in the Nigeria extract, so the dataset cannot support estimates of disease burden, severity or case fatality.",
  "Host-animal species is not recorded; the extract provides subtype information but no corresponding species-level breakdown.",
  "Geopolitical-zone groupings are a standard public administrative classification applied for this analysis; WAHIS does not supply zone-level data directly.",
  "Absence of a WAHIS record does not indicate absence of disease — it may reflect reporting, testing or diagnostic gaps rather than the true epidemiological picture.",
  "This analysis is independent and does not represent an official position of WOAH or the Nigerian government.",
];

export const brucellosisMethodology = {
  h2: "Methodology & source",
  paragraphs: [
    "Primary analytical source: World Organisation for Animal Health (WOAH), World Animal Health Information System (WAHIS), Quantitative Data, Nigeria, Brucellosis.",
    "Analysis: the 24 Nigeria WAHIS records were transcribed field-for-field from the quantitative extract, without value substitution. Duplicate checking was performed on the state × year × semester combination, and field-level completeness was assessed across all records.",
    "Geographic reference: state boundaries are from geoBoundaries.org's Nigeria ADM1 dataset (CC BY 4.0, boundary year 2022; Runfola et al. 2020, PLoS ONE), used only as a visualization layer for the WAHIS state-level values — no outbreak coordinates are implied or included.",
  ],
};
