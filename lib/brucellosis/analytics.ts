import { wahisRecords, WAHIS_METADATA, type BrucellaSubtype } from "@/data/brucellosis/wahis-records";
import { ZONE_STATES, getZoneForState, type GeopoliticalZone } from "@/data/brucellosis/zones";

const TOTAL_NIGERIA_STATES = 37; // 36 states + FCT

export interface SummaryMetrics {
  totalOutbreaks: number;
  recordCount: number;
  statesReporting: number;
  totalStates: number;
  yearsWithReports: number;
  periodStart: number;
  periodEnd: number;
  subtypeCount: number;
  periodsReported: number;
  periodsPossible: number;
}

export function getSummaryMetrics(): SummaryMetrics {
  const years = new Set(wahisRecords.map((r) => r.year));
  const states = new Set(wahisRecords.map((r) => r.state));
  const subtypes = new Set(wahisRecords.map((r) => r.subtype));
  const periods = new Set(wahisRecords.map((r) => `${r.year}-${r.semester}`));
  const periodStart = Math.min(...years);
  const periodEnd = Math.max(...years);
  const periodsPossible = (periodEnd - periodStart + 1) * 2;

  return {
    totalOutbreaks: wahisRecords.reduce((sum, r) => sum + r.newOutbreaks, 0),
    recordCount: wahisRecords.length,
    statesReporting: states.size,
    totalStates: TOTAL_NIGERIA_STATES,
    yearsWithReports: years.size,
    periodStart,
    periodEnd,
    subtypeCount: subtypes.size,
    periodsReported: periods.size,
    periodsPossible,
  };
}

export interface YearlyTrendPoint {
  year: number;
  outbreaks: number;
  records: number;
}

/** Zero-filled across the full reporting span so gaps are visible, not hidden. */
export function getYearlyTrend(): YearlyTrendPoint[] {
  const { periodStart, periodEnd } = getSummaryMetrics();
  const byYear = new Map<number, { outbreaks: number; records: number }>();
  for (const r of wahisRecords) {
    const entry = byYear.get(r.year) ?? { outbreaks: 0, records: 0 };
    entry.outbreaks += r.newOutbreaks;
    entry.records += 1;
    byYear.set(r.year, entry);
  }
  const points: YearlyTrendPoint[] = [];
  for (let year = periodStart; year <= periodEnd; year++) {
    const entry = byYear.get(year) ?? { outbreaks: 0, records: 0 };
    points.push({ year, ...entry });
  }
  return points;
}

export interface SemesterSplit {
  semester: "H1" | "H2";
  label: string;
  outbreaks: number;
}

export function getSemesterSplit(): SemesterSplit[] {
  const h1 = wahisRecords.filter((r) => r.semester === "H1").reduce((s, r) => s + r.newOutbreaks, 0);
  const h2 = wahisRecords.filter((r) => r.semester === "H2").reduce((s, r) => s + r.newOutbreaks, 0);
  return [
    { semester: "H1", label: "Jan–Jun", outbreaks: h1 },
    { semester: "H2", label: "Jul–Dec", outbreaks: h2 },
  ];
}

export interface StateSummary {
  state: string;
  zone: GeopoliticalZone | undefined;
  outbreaks: number;
  records: number;
}

export function getStateSummary(): StateSummary[] {
  const byState = new Map<string, { outbreaks: number; records: number }>();
  for (const r of wahisRecords) {
    const entry = byState.get(r.state) ?? { outbreaks: 0, records: 0 };
    entry.outbreaks += r.newOutbreaks;
    entry.records += 1;
    byState.set(r.state, entry);
  }
  return Array.from(byState.entries())
    .map(([state, v]) => ({ state, zone: getZoneForState(state), ...v }))
    .sort((a, b) => b.outbreaks - a.outbreaks);
}

export interface SubtypeSummary {
  subtype: BrucellaSubtype;
  outbreaks: number;
  records: number;
  percentOfOutbreaks: number;
}

export function getSubtypeSummary(): SubtypeSummary[] {
  const total = getSummaryMetrics().totalOutbreaks;
  const byType = new Map<BrucellaSubtype, { outbreaks: number; records: number }>();
  for (const r of wahisRecords) {
    const entry = byType.get(r.subtype) ?? { outbreaks: 0, records: 0 };
    entry.outbreaks += r.newOutbreaks;
    entry.records += 1;
    byType.set(r.subtype, entry);
  }
  return Array.from(byType.entries())
    .map(([subtype, v]) => ({
      subtype,
      ...v,
      percentOfOutbreaks: Math.round((v.outbreaks / total) * 1000) / 10,
    }))
    .sort((a, b) => b.outbreaks - a.outbreaks);
}

export interface ZoneSummary {
  zone: GeopoliticalZone;
  outbreaks: number;
  statesReporting: number;
  statesInZone: number;
  percentOfOutbreaks: number;
}

export function getZoneSummary(): ZoneSummary[] {
  const stateSummary = getStateSummary();
  const total = getSummaryMetrics().totalOutbreaks;
  return (Object.keys(ZONE_STATES) as GeopoliticalZone[]).map((zone) => {
    const statesInThisZone = stateSummary.filter((s) => s.zone === zone);
    const outbreaks = statesInThisZone.reduce((sum, s) => sum + s.outbreaks, 0);
    return {
      zone,
      outbreaks,
      statesReporting: statesInThisZone.length,
      statesInZone: ZONE_STATES[zone].length,
      percentOfOutbreaks: Math.round((outbreaks / total) * 1000) / 10,
    };
  }).sort((a, b) => b.outbreaks - a.outbreaks);
}

export interface StateRankingRow extends StateSummary {
  rank: number;
  percentOfOutbreaks: number;
}

/** State summary with rank and share-of-outbreaks added, for the ranking table. */
export function getStateRanking(): StateRankingRow[] {
  const total = getSummaryMetrics().totalOutbreaks;
  return getStateSummary().map((s, i) => ({
    ...s,
    rank: i + 1,
    percentOfOutbreaks: Math.round((s.outbreaks / total) * 1000) / 10,
  }));
}

export interface ZoneConcentration {
  zones: GeopoliticalZone[];
  outbreaks: number;
  totalOutbreaks: number;
  percent: number;
}

/** Combined share of reported outbreaks held by the top N zones (sorted by getZoneSummary). */
export function getTopZoneConcentration(n: number): ZoneConcentration {
  const zoneSummary = getZoneSummary();
  const top = zoneSummary.slice(0, n);
  const outbreaks = top.reduce((sum, z) => sum + z.outbreaks, 0);
  const totalOutbreaks = getSummaryMetrics().totalOutbreaks;
  return {
    zones: top.map((z) => z.zone),
    outbreaks,
    totalOutbreaks,
    percent: Math.round((outbreaks / totalOutbreaks) * 1000) / 10,
  };
}

export interface ReportingContinuityCell {
  year: number;
  semester: "H1" | "H2";
  reported: boolean;
  outbreaks: number;
}

/** Every half-year period across the full study span, flagged reported/not — the
 *  32-cell surveillance-continuity grid (not an incidence grid). */
export function getReportingContinuity(): ReportingContinuityCell[] {
  const { periodStart, periodEnd } = getSummaryMetrics();
  const bySemester = new Map<string, number>();
  for (const r of wahisRecords) {
    const key = `${r.year}-${r.semester}`;
    bySemester.set(key, (bySemester.get(key) ?? 0) + r.newOutbreaks);
  }
  const cells: ReportingContinuityCell[] = [];
  for (let year = periodStart; year <= periodEnd; year++) {
    for (const semester of ["H1", "H2"] as const) {
      const key = `${year}-${semester}`;
      cells.push({ year, semester, reported: bySemester.has(key), outbreaks: bySemester.get(key) ?? 0 });
    }
  }
  return cells;
}

export interface FieldAvailability {
  field: string;
  availability: "populated" | "not-reported";
  note: string;
}

export interface DataQuality {
  recordCount: number;
  duplicateRecords: number;
  statesReporting: number;
  totalStates: number;
  geographicCoveragePercent: number;
  yearsWithReports: number;
  yearsInSpan: number;
  temporalCoveragePercent: number;
  periodsReported: number;
  periodsPossible: number;
  periodCoveragePercent: number;
  fields: FieldAvailability[];
}

export function getDataQuality(): DataQuality {
  const summary = getSummaryMetrics();
  const yearsInSpan = summary.periodEnd - summary.periodStart + 1;

  // Duplicate check: no two records share the same (state, year, semester).
  const seen = new Set<string>();
  let duplicateRecords = 0;
  for (const r of wahisRecords) {
    const key = `${r.state}|${r.year}|${r.semester}`;
    if (seen.has(key)) duplicateRecords += 1;
    seen.add(key);
  }

  const populatedFields: FieldAvailability[] = [
    { field: "Year", availability: "populated", note: "100% of records" },
    { field: "Semester", availability: "populated", note: "100% of records" },
    { field: "Administrative Division (state)", availability: "populated", note: "100% of records" },
    {
      field: "Disease",
      availability: "populated",
      note: "100% of records — varies per row (e.g. \"Brucella abortus (Inf. with)\"); Brucella species/category counts are derived from this field",
    },
    { field: "Animal Category", availability: "populated", note: "Constant: Both animal categories" },
    { field: "New outbreaks", availability: "populated", note: "100% of records" },
  ];

  const unpopulatedFields: FieldAvailability[] = WAHIS_METADATA.unpopulatedFields.map((field) => ({
    field,
    availability: "not-reported",
    note: "Not reported in this WAHIS extract",
  }));

  // The dedicated Serotype/Subtype/Genotype field is a distinct case: it was
  // unpopulated in the extract, but (unlike the fields above) Brucella
  // species/category counts are still available via the Disease field. Given
  // its own entry, rather than the generic note, so this distinction is not lost.
  const serotypeSubtypeGenotypeField: FieldAvailability = {
    field: "Serotype/Subtype/Genotype (dedicated WAHIS field)",
    availability: "not-reported",
    note:
      "The dedicated Serotype/Subtype/Genotype field was unpopulated in the extracted dataset. However, Brucella infection categories were available through the Disease field, from which B. abortus, B. melitensis and B. suis counts were derived.",
  };

  return {
    recordCount: summary.recordCount,
    duplicateRecords,
    statesReporting: summary.statesReporting,
    totalStates: summary.totalStates,
    geographicCoveragePercent: Math.round((summary.statesReporting / summary.totalStates) * 1000) / 10,
    yearsWithReports: summary.yearsWithReports,
    yearsInSpan,
    temporalCoveragePercent: Math.round((summary.yearsWithReports / yearsInSpan) * 1000) / 10,
    periodsReported: summary.periodsReported,
    periodsPossible: summary.periodsPossible,
    periodCoveragePercent: Math.round((summary.periodsReported / summary.periodsPossible) * 1000) / 10,
    fields: [...populatedFields, serotypeSubtypeGenotypeField, ...unpopulatedFields],
  };
}

