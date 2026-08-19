// Editorial content for /our-work/brucellosis-surveillance-nigeria. All
// numbers referenced in this file are verified against
// data/brucellosis/WAHIS_VERIFIED_RESULTS.md and, on the page itself, are
// rendered from lib/brucellosis/analytics.ts rather than retyped — this file
// carries narrative only. No epidemiological values are set here.

export const brucellosisHero = {
  eyebrow: "Case Study · One Health Surveillance · Epidemiology · GIS",
  h1: "Mapping the Animal-Health Signal: Nigeria Livestock Brucellosis Surveillance, 2008–2023",
  paragraph:
    "A national spatiotemporal analysis of reported livestock brucellosis using WOAH WAHIS data — revealing where surveillance signals concentrate, where reporting is intermittent, and where critical epidemiological information is missing.",
};

export const brucellosisPositioningStatement =
  "Good surveillance is not simply about counting events. It is about understanding what the data can support, what they cannot, and what should happen next.";

export const brucellosisQuestion = {
  h2: "What can Nigeria's international animal-health surveillance data actually tell us about brucellosis?",
  paragraphs: [
    "Brucellosis is a bacterial zoonosis affecting livestock and people, transmitted through contact with infected animals and animal products, including unpasteurised dairy. It connects livestock, human health, food systems and livelihoods, and is a standard reference disease in One Health surveillance work.",
    "Surveillance systems that could inform a coordinated response often operate in institutional silos: animal-health, human-health, food-safety and environmental data are collected separately, if at all. The World Animal Health Information System (WAHIS) provides one important layer of this picture — an internationally accessible channel through which countries report livestock disease events to the World Organisation for Animal Health (WOAH).",
    "This analysis interrogates Nigeria's WAHIS brucellosis extract, 2008–2023, to understand not just the reported outbreak counts, but the structure and limitations of the surveillance signal itself: where outbreaks were reported, when, which Brucella species/categories were recorded — and, just as importantly, what the extract does not and cannot tell us.",
    "A WAHIS record is a reported surveillance event, not a direct estimate of national disease burden. That distinction is the methodological spine of everything that follows.",
  ],
};

export const brucellosisObjectives = {
  h2: "Analytical objectives",
  items: [
    "Characterise the temporal distribution of livestock brucellosis outbreaks reported through WAHIS between 2008 and 2023.",
    "Describe the geographic distribution of reported outbreaks across Nigerian states and geopolitical zones.",
    "Characterise the Brucella species/categories represented in the extract.",
    "Quantify observed reporting coverage and field-level data completeness.",
    "Identify surveillance-data limitations relevant to interpretation within a One Health framework.",
  ],
};

export const brucellosisEvidenceBase = {
  h2: "Evidence base",
  paragraph:
    "Values were retained field-for-field from the source extract. No missing epidemiological values were imputed or estimated.",
  facts: [
    { label: "Primary source", value: "WOAH World Animal Health Information System (WAHIS)" },
    { label: "Geography", value: "Nigeria" },
    { label: "Disease", value: "Brucellosis" },
    { label: "Study period", value: "2008–2023" },
    { label: "Records", value: "24 quantitative records" },
    { label: "Outcome measure", value: "Reported new outbreaks" },
    { label: "Temporal resolution", value: "Half-year reporting period" },
    { label: "Geographic resolution", value: "State / first-level administrative unit" },
    { label: "Spatial analysis", value: "State-level GIS" },
    { label: "Species/category source", value: "WAHIS Disease field" },
  ],
};

export interface KeyFindingContent {
  meaning: string;
}

/** "What this means" lines for the Key Findings section. The claims
 *  themselves are composed in page.tsx from live analytics output so the
 *  numbers can never drift from lib/brucellosis/analytics.ts; this file
 *  carries only the interpretive follow-on sentence for each. */
export const brucellosisKeyFindingMeanings: KeyFindingContent[] = [
  { meaning: "This is a reported-outbreak count, not a measure of the true national outbreak frequency." },
  { meaning: "This describes observed WAHIS reporting coverage, not surveillance sensitivity or disease absence elsewhere." },
  { meaning: "Concentration may reflect disease occurrence, surveillance intensity or reporting practice — this analysis does not adjudicate between them." },
  { meaning: "Species/categories were derived from the Disease field; the dedicated Serotype/Subtype/Genotype field was unpopulated." },
  { meaning: "The dataset supports event surveillance — where, when, how many, which category — not animal-level burden estimation." },
];

export const brucellosisNationalSignal = {
  h2: "39 reported outbreaks. But the number alone is not the story.",
  body: "Four distinct concepts sit behind this headline figure, and this analysis keeps them separate throughout: the record count (how many rows the extract contains), the reported-outbreak count (the sum of the New outbreaks field), reporting coverage (how much of the possible state/year/period space has at least one record), and true disease burden (incidence, prevalence, mortality — none of which this extract can estimate, because the necessary denominators are absent). 39 is a reported-outbreak count. It should not be read as the true number of brucellosis outbreaks that occurred in Nigeria over this period.",
};

export const brucellosisTemporal = {
  h2: "Reported brucellosis activity was intermittent — not continuously observed.",
  body: "Years without a WAHIS record are shown as reporting gaps, not as zero disease activity. A gap may reflect a genuine lull, a reporting gap, a surveillance gap or a WAHIS submission gap — this extract cannot distinguish between these explanations.",
  seasonalityCaveat:
    "The semester distribution describes reported events; it does not establish a biological seasonal pattern. Referring to this split as \"seasonality\" would require a dedicated seasonal analysis this dataset does not support.",
};

export const brucellosisSpatial = {
  h2: "Where does the reported animal-health signal concentrate?",
  body: "WAHIS provides state-level geographic information for this extract; it does not provide outbreak coordinates. The map below is therefore a state-level reporting map, not a point-location outbreak map — it shows where outbreaks were reported, not precisely where they occurred.",
  concentrationQualifier:
    "Reported concentration may reflect genuine disease occurrence, surveillance intensity, diagnostic capacity, reporting practice, livestock movement, or some combination of these factors. This analysis does not attempt to adjudicate between them.",
};

export const brucellosisSpecies = {
  h2: "Brucella species/categories reported",
  body: "The extract records the reported Brucella species/category via the WAHIS Disease field, but not the host animal species — so this reflects pathogen typing only, not a species/host breakdown.",
  clarification:
    "These species/categories were derived from the WAHIS Disease field. The dedicated Serotype/Subtype/Genotype field was unpopulated in the extracted dataset.",
};

export const brucellosisDataQuality = {
  h2: "The most important finding may be what the surveillance system does not capture.",
  body: "The table below reports field-by-field completeness across all 24 Nigeria records in this WAHIS extract: which fields are populated, and which are not reported at all.",
  implication:
    "The dataset is sufficiently structured to answer Where? When? What reported Brucella category? and How many reported outbreaks? It cannot reliably answer Which livestock species were affected? How many animals were infected? How many died? How many were vaccinated? or What was the magnitude of each outbreak?",
  keySentence:
    "This is the difference between event surveillance and epidemiologically complete surveillance intelligence.",
};

export interface AnswerTableRow {
  question: string;
  supported: boolean;
  why: string;
}

export const brucellosisAnswerTable: AnswerTableRow[] = [
  { question: "Where were outbreaks reported?", supported: true, why: "State (Administrative Division) field available" },
  { question: "When were outbreaks reported?", supported: true, why: "Year and semester fields available" },
  { question: "How many outbreaks were reported?", supported: true, why: "New outbreaks field available" },
  { question: "Which Brucella species/categories were represented?", supported: true, why: "Derived from the Disease field" },
  { question: "Which livestock species were affected?", supported: false, why: "Host species field unpopulated" },
  { question: "How many animals were affected?", supported: false, why: "Cases field unpopulated" },
  { question: "How many animals died?", supported: false, why: "Deaths field unpopulated" },
  { question: "What is national prevalence?", supported: false, why: "No denominator (animal population) available" },
  { question: "What is incidence?", supported: false, why: "No denominator, and reporting is incomplete across years" },
  { question: "Are states without WAHIS records disease-free?", supported: false, why: "Absence of a record is not evidence of absence of disease" },
];

export const brucellosisOneHealth = {
  h2: "One Health relevance",
  paragraphs: [
    "Brucellosis is inherently a One Health issue: infection moves between livestock and the people who handle them, chiefly through contact with infected animals, birth products and unpasteurised dairy. But this particular dataset represents only the animal-health layer of that picture — it contains no human case records, so this analysis does not estimate human disease burden and makes no claim about it.",
    "Its contribution sits on the animal-health side of the One Health picture: showing where, and how consistently, livestock brucellosis outbreaks are being reported to WAHIS, and where reporting coverage is limited or absent in the extract.",
  ],
  bridgeQuestion:
    "The analytical question this raises: how can animal-health signals like these be connected with human, community, food and environmental intelligence to support earlier and more coordinated One Health action?",
};

export interface WorkflowStepContent {
  step: string;
  title: string;
  desc: string;
}

export const brucellosisWorkflow: WorkflowStepContent[] = [
  { step: "01", title: "Extract", desc: "Acquire surveillance data from an authoritative source — here, WOAH's WAHIS quantitative data system." },
  { step: "02", title: "Validate", desc: "Reconcile the extract field-for-field, check for duplicates, and confirm what has and hasn't been reported." },
  { step: "03", title: "Analyse", desc: "Apply epidemiological and spatial analysis to the reported events — temporal, geographic and species/category structure." },
  { step: "04", title: "Quantify uncertainty", desc: "Measure reporting coverage and field completeness explicitly, rather than treating gaps as noise to smooth over." },
  { step: "05", title: "Integrate", desc: "Situate the animal-health signal within the wider One Health picture it belongs to, without overstating what one data layer can show." },
  { step: "06", title: "Translate", desc: "Convert findings into decision-relevant implications for surveillance design, not just a set of charts." },
];

export const brucellosisJibrivaInsight = {
  h2: "From disease reporting to surveillance intelligence",
  paragraph:
    "Jibriva does not simply visualise surveillance data. We interrogate the evidence, quantify uncertainty and translate findings into decision support.",
};

export const brucellosisSystemDesign = {
  h2: "From analysis to system design",
  paragraphs: [
    "The most consequential finding of this analysis is not a number — it is structural. A surveillance system built to record that an outbreak happened is not the same as one built to support a decision about it. WAHIS, as reflected in this extract, captures the former well: state, timing and reported category are consistently populated. It was not designed to capture animal-level outcomes, and it does not.",
    "That gap is not a flaw specific to Nigeria's WAHIS reporting — it is a structural feature of event-based international surveillance systems generally. Closing it requires connecting animal-health reporting with the other surveillance layers it currently sits apart from: human health, community-level intelligence, and food/environmental monitoring.",
  ],
};

export const brucellosisOneHealthHub = {
  h2: "OneHealth Hub",
  paragraphs: [
    "The surveillance gaps identified through this analysis — reporting intermittency, unpopulated animal-level fields, siloed sectors — informed the conceptual development of OneHealth Hub, a prototype concept rather than a validated surveillance system.",
    "The prototype explores how animal-health signals like these could eventually be considered alongside human-health, community, food and environmental intelligence within a common analytical environment, instead of the institutional silos most surveillance systems operate in today.",
    "The goal is not another dashboard. The goal is a better line of sight from surveillance signal to decision.",
  ],
  ctaLabel: "Explore OneHealth Hub",
};

export const brucellosisWhyItMatters = {
  h2: "Why this analysis matters",
  paragraphs: [
    "Describing reported outbreaks is only the first layer of surveillance intelligence. The second is understanding the structure and limitations of the reporting system itself.",
    "This analysis therefore treats missingness, geographic gaps and temporal discontinuity as findings about the surveillance signal — not merely technical imperfections in a dataset.",
  ],
};

export const brucellosisConclusion = {
  h2: "What this means, taken together",
  paragraphs: [
    "Taken together, the analysis demonstrates both the value and the limits of international animal-health surveillance data for One Health decision-making.",
    "WAHIS provides a valuable view of reported livestock brucellosis events in Nigeria, including their geographic distribution, temporal occurrence and reported Brucella categories. However, intermittent reporting and the absence of key epidemiological fields constrain inference about disease burden, host distribution and severity.",
    "For Jibriva, this distinction is central: better surveillance intelligence requires not only more data, but better-connected, better-characterised and appropriately interpreted data.",
  ],
};

export const brucellosisManuscriptNote =
  'This analysis also underpins a working research manuscript — "Spatiotemporal Patterns and Reporting Coverage of Livestock Brucellosis in Nigeria, 2008–2023: A Descriptive Analysis of WOAH WAHIS Surveillance Data" (working title, in development) — which follows the same analytical structure presented here.';

export interface CapabilityItem {
  title: string;
  desc: string;
}

export const brucellosisCapabilities: CapabilityItem[] = [
  { title: "Epidemiology", desc: "Interrogating surveillance data for what it can and cannot support, not just what it counts." },
  { title: "One Health", desc: "Reading animal, human, food and environmental health as one connected system." },
  { title: "Surveillance Intelligence", desc: "Turning raw reporting streams into structured, decision-relevant evidence." },
  { title: "GIS & Spatial Intelligence", desc: "State- and boundary-level analysis that respects the resolution the source data actually supports." },
  { title: "Monitoring & Evaluation", desc: "Measuring coverage and completeness explicitly, as part of the evidence, not an afterthought." },
  { title: "Data Intelligence", desc: "Validating, reconciling and quantifying uncertainty before any figure is reported." },
  { title: "Digital Solutions", desc: "Building tools as an instrument for evidence-to-decision work, not as an end in themselves." },
  { title: "Capacity Strengthening", desc: "Working alongside teams and institutions to build lasting analytical capability, not just deliver a report." },
];

export interface InterpretationSection {
  title: string;
  body: string;
}

export const brucellosisInterpretation: InterpretationSection[] = [
  {
    title: "Geographic reporting",
    body: "Plateau recorded the highest number of reported outbreaks (8), followed by Kaduna (5), and Adamawa and Kano (4 each). This concentration may reflect genuine differences in disease occurrence, differences in surveillance intensity or reporting practice between states, or a combination of both — the WAHIS extract cannot distinguish between these explanations on its own.",
  },
  {
    title: "Reporting continuity",
    body: "Nigeria's brucellosis records appear in 16 of the 32 possible half-year periods between 2008 and 2023. Reporting is intermittent rather than continuous, which limits how much weight year-over-year comparisons can bear: a gap in the record may reflect a gap in reporting rather than a genuine lull in disease activity.",
  },
  {
    title: "Data completeness",
    body: "Beyond outbreak counts and species/category, the extract carries no case, animal-level, mortality or vaccination data for Nigeria — those fields are entirely unpopulated across all 24 records. This restricts the analysis to outbreak-event counts; it cannot support conclusions about the number of animals affected, disease severity, or case fatality. Brucella species/categories were derived from the WAHIS Disease field; the dedicated Serotype/Subtype/Genotype field was unpopulated.",
  },
  {
    title: "Geographic gaps",
    body: "No South South outbreak records were present in this WAHIS extract, and North East and South East each show only one reporting state. Absence of a record is not evidence of absence of disease — it may reflect differences in surveillance, diagnosis, reporting or WAHIS submission rather than a true absence of brucellosis.",
  },
];

export const brucellosisLimitations = [
  "WAHIS records describe reported events and should not be interpreted as a complete measure of disease occurrence.",
  "Reporting was intermittent — records exist for 16 of 32 possible half-year periods between 2008 and 2023 — which limits comparison of trends across years.",
  "No denominator data exists in this extract, so incidence and prevalence cannot be calculated.",
  "Host-animal species is not recorded; the extract provides Brucella species/category information but no corresponding host species-level breakdown.",
  "Case, animal-level, mortality and vaccination fields are unpopulated in the Nigeria extract, so the dataset cannot support estimates of disease burden, severity or case fatality.",
  "Geographic analysis is state-level, not coordinate-level — the map shows reporting by state, not outbreak locations.",
  "Geographic concentration of reported outbreaks may reflect reporting or surveillance differences between states rather than true differences in disease occurrence.",
  "Geopolitical-zone groupings are a standard public administrative classification applied for this analysis; WAHIS does not supply zone-level data directly.",
  "Absence of a WAHIS record does not indicate absence of disease — it may reflect reporting, testing or diagnostic gaps rather than the true epidemiological picture.",
  "This analysis is independent and does not represent an official position of WOAH or the Nigerian government.",
];

export const brucellosisMethodology = {
  h2: "Methodology & source",
  paragraphs: [
    "Primary analytical source: World Organisation for Animal Health (WOAH), World Animal Health Information System (WAHIS), Quantitative Data, Nigeria, Brucellosis, 2008–2023.",
    "Analysis: the 24 Nigeria WAHIS records were transcribed field-for-field from the quantitative extract, without value substitution. Duplicate checking was performed on the state × year × semester combination; none were found. Brucella species/category counts were derived from the WAHIS Disease field, which varies per record; the dedicated Serotype/Subtype/Genotype field was unpopulated for all 24 records and is reported as such rather than omitted.",
    "Field completeness was assessed across all records as: completeness = non-missing records ÷ total records × 100. A field reported as \"not reported\" or \"unpopulated\" means it was absent from the extract — not that its true value is zero.",
    "Geopolitical zones (North Central, North East, North West, South East, South South, South West) were derived from a standard public administrative classification of Nigeria's states, applied here purely to roll up the state-level WAHIS totals; WAHIS does not supply or imply zone-level data.",
    "Geographic reference: state boundaries are from geoBoundaries.org's Nigeria ADM1 dataset (CC BY 4.0, boundary year 2022; Runfola et al. 2020, PLoS ONE), used only as a visualisation layer for the WAHIS state-level values — no outbreak coordinates are implied or included.",
  ],
};

export const brucellosisCta = {
  h2: "Turning fragmented data into decision-ready intelligence",
  paragraph:
    "Jibriva works at the intersection of evidence, epidemiology, technology and implementation. We help organisations understand complex health and development problems, strengthen surveillance and monitoring systems, and translate data into practical decisions.",
  primaryLabel: "Partner with Jibriva",
  primaryHref: "/contact",
  secondaryLabel: "Explore OneHealth Hub",
  secondaryHref: "https://onehealth-hub.vercel.app/",
};
