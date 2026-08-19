// Transcribed verbatim from the primary source dataset:
// "Quantitative data 2026-08-18.csv" (re-extraction; confirmed byte-for-byte
// identical, record for record, to the original "Bruscella_WAHIS_Quantitative
// data 2026-08-10 (1).csv" extraction — the 24 records below are unchanged).
// (World Organisation for Animal Health, WAHIS quantitative data, Nigeria,
// disease = Brucellosis). Every row below corresponds 1:1 to a CSV row.
// Fields that were constant or 100% empty across all 24 rows (World region,
// Country, Animal Category, Event_id, Species, Outbreak_id, Susceptible,
// Measuring units, Cases, Killed and disposed of, Slaughtered, Deaths,
// Vaccinated) are captured once in WAHIS_METADATA / getDataQuality() rather
// than repeated per record. Disease is NOT constant — it varies per row
// (e.g. "Brucella abortus (Inf. with)") and is the source of the Brucella
// species/category breakdown captured below as `subtype`. The dedicated
// Serotype/Subtype/Genotype WAHIS field, distinct from Disease, was
// unpopulated for all 24 records. No values are invented or estimated.

export type BrucellaSubtype = "Brucella abortus" | "Brucella melitensis" | "Brucella suis";
export type Semester = "H1" | "H2";

export interface WahisRecord {
  year: number;
  semester: Semester;
  semesterLabel: string;
  state: string;
  subtype: BrucellaSubtype;
  newOutbreaks: number;
}

export const WAHIS_METADATA = {
  source: "World Organisation for Animal Health (WOAH) WAHIS Quantitative Data",
  sourceFile: "Quantitative data 2026-08-18.csv",
  country: "Nigeria",
  worldRegion: "Africa",
  disease: "Brucellosis",
  animalCategory: "Both animal categories",
  recordCount: 24,
  // Fields present in the WAHIS schema that were 0% populated for every one
  // of the 24 Nigeria records in this extract.
  unpopulatedFields: [
    "Event_id",
    "Species (host)",
    "Outbreak_id",
    "Susceptible",
    "Measuring units",
    "Cases",
    "Killed and disposed of",
    "Slaughtered",
    "Deaths",
    "Vaccinated",
  ] as const,
} as const;

export const wahisRecords: WahisRecord[] = [
  { year: 2008, semester: "H1", semesterLabel: "Jan-Jun 2008", state: "Adamawa", subtype: "Brucella abortus", newOutbreaks: 4 },
  { year: 2008, semester: "H2", semesterLabel: "Jul-Dec 2008", state: "Kano", subtype: "Brucella abortus", newOutbreaks: 3 },
  { year: 2008, semester: "H2", semesterLabel: "Jul-Dec 2008", state: "Nasarawa", subtype: "Brucella abortus", newOutbreaks: 2 },
  { year: 2010, semester: "H1", semesterLabel: "Jan-Jun 2010", state: "Kano", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2010, semester: "H2", semesterLabel: "Jul-Dec 2010", state: "Osun", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2013, semester: "H1", semesterLabel: "Jan-Jun 2013", state: "Enugu", subtype: "Brucella melitensis", newOutbreaks: 1 },
  { year: 2017, semester: "H2", semesterLabel: "Jul-Dec 2017", state: "Kaduna", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2017, semester: "H2", semesterLabel: "Jul-Dec 2017", state: "Katsina", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2018, semester: "H2", semesterLabel: "Jul-Dec 2018", state: "Kwara", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2018, semester: "H2", semesterLabel: "Jul-Dec 2018", state: "Plateau", subtype: "Brucella abortus", newOutbreaks: 4 },
  { year: 2019, semester: "H1", semesterLabel: "Jan-Jun 2019", state: "Plateau", subtype: "Brucella abortus", newOutbreaks: 4 },
  { year: 2019, semester: "H2", semesterLabel: "Jul-Dec 2019", state: "Kaduna", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2019, semester: "H2", semesterLabel: "Jul-Dec 2019", state: "Niger", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2020, semester: "H1", semesterLabel: "Jan-Jun 2020", state: "Kaduna", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2020, semester: "H1", semesterLabel: "Jan-Jun 2020", state: "Niger", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2020, semester: "H2", semesterLabel: "Jul-Dec 2020", state: "Kaduna", subtype: "Brucella abortus", newOutbreaks: 2 },
  { year: 2021, semester: "H2", semesterLabel: "Jul-Dec 2021", state: "Kwara", subtype: "Brucella melitensis", newOutbreaks: 1 },
  { year: 2021, semester: "H2", semesterLabel: "Jul-Dec 2021", state: "Zamfara", subtype: "Brucella suis", newOutbreaks: 1 },
  { year: 2022, semester: "H1", semesterLabel: "Jan-Jun 2022", state: "Ekiti", subtype: "Brucella abortus", newOutbreaks: 2 },
  { year: 2022, semester: "H2", semesterLabel: "Jul-Dec 2022", state: "Benue", subtype: "Brucella melitensis", newOutbreaks: 2 },
  { year: 2023, semester: "H1", semesterLabel: "Jan-Jun 2023", state: "Jigawa", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2023, semester: "H1", semesterLabel: "Jan-Jun 2023", state: "Niger", subtype: "Brucella abortus", newOutbreaks: 1 },
  { year: 2023, semester: "H1", semesterLabel: "Jan-Jun 2023", state: "Ondo", subtype: "Brucella suis", newOutbreaks: 1 },
  { year: 2023, semester: "H2", semesterLabel: "Jul-Dec 2023", state: "Zamfara", subtype: "Brucella abortus", newOutbreaks: 1 },
];
