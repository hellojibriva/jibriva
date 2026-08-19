import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GridSeamPanel } from "@/components/ui/GridSeamPanel";
import { StatCard } from "@/components/brucellosis/StatCard";
import { YearlyTrendChart } from "@/components/brucellosis/YearlyTrendChart";
import { HorizontalBarList } from "@/components/brucellosis/HorizontalBarList";
import { NigeriaChoropleth } from "@/components/brucellosis/NigeriaChoropleth";
import { DataCompletenessTable } from "@/components/brucellosis/DataCompletenessTable";
import { CoverageBars } from "@/components/brucellosis/CoverageBars";
import { ReportingContinuityMatrix } from "@/components/brucellosis/ReportingContinuityMatrix";
import { StateRankingTable } from "@/components/brucellosis/StateRankingTable";
import { ZoneTable } from "@/components/brucellosis/ZoneTable";
import { AnswerTable } from "@/components/brucellosis/AnswerTable";
import { InsightCallout } from "@/components/brucellosis/InsightCallout";
import { OneHealthArchitecture } from "@/components/brucellosis/OneHealthArchitecture";
import { JibrivaWorkflow } from "@/components/brucellosis/JibrivaWorkflow";
import {
  brucellosisHero,
  brucellosisPositioningStatement,
  brucellosisQuestion,
  brucellosisObjectives,
  brucellosisKeyFindingMeanings,
  brucellosisEvidenceBase,
  brucellosisNationalSignal,
  brucellosisTemporal,
  brucellosisSpatial,
  brucellosisSpecies,
  brucellosisDataQuality,
  brucellosisAnswerTable,
  brucellosisInterpretation,
  brucellosisOneHealth,
  brucellosisWorkflow,
  brucellosisJibrivaInsight,
  brucellosisSystemDesign,
  brucellosisConclusion,
  brucellosisOneHealthHub,
  brucellosisCapabilities,
  brucellosisLimitations,
  brucellosisMethodology,
  brucellosisManuscriptNote,
  brucellosisWhyItMatters,
  brucellosisCta,
} from "@/content/brucellosis-case-study";
import {
  getSummaryMetrics,
  getYearlyTrend,
  getSemesterSplit,
  getStateSummary,
  getStateRanking,
  getSubtypeSummary,
  getZoneSummary,
  getTopZoneConcentration,
  getReportingContinuity,
  getDataQuality,
} from "@/lib/brucellosis/analytics";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Nigeria Livestock Brucellosis Surveillance Analysis | Jibriva",
  description:
    "Jibriva's spatiotemporal and GIS analysis of reported livestock brucellosis in Nigeria using WOAH WAHIS data, examining geographic concentration, reporting continuity, species categories and surveillance-data completeness.",
  path: "/our-work/brucellosis-surveillance-nigeria",
  ogTitle: "Nigeria Livestock Brucellosis Surveillance Analysis — Jibriva",
  keywords: [
    "Nigeria brucellosis surveillance",
    "livestock brucellosis Nigeria",
    "WAHIS Nigeria",
    "One Health surveillance",
    "disease surveillance Nigeria",
    "epidemiological GIS",
    "animal health surveillance",
    "surveillance data quality",
  ],
});

export default function BrucellosisSurveillancePage() {
  const summary = getSummaryMetrics();
  const yearlyTrend = getYearlyTrend();
  const semesterSplit = getSemesterSplit();
  const stateSummary = getStateSummary();
  const stateRanking = getStateRanking();
  const subtypeSummary = getSubtypeSummary();
  const zoneSummary = getZoneSummary();
  const topZones = getTopZoneConcentration(2);
  const continuity = getReportingContinuity();
  const dataQuality = getDataQuality();

  const yearsInSpan = summary.periodEnd - summary.periodStart + 1;
  const notReportedFieldCount = dataQuality.fields.filter((f) => f.availability === "not-reported").length;
  const topSubtype = subtypeSummary[0];

  // Key-finding claims are composed here from live analytics output — never
  // retyped — and paired with the fixed "what this means" line from content.
  const keyFindings = [
    {
      claim: `${summary.totalOutbreaks} reported outbreaks were identified across ${summary.recordCount} WAHIS quantitative records between ${summary.periodStart} and ${summary.periodEnd}.`,
    },
    {
      claim: `Only ${summary.statesReporting} of Nigeria's ${summary.totalStates - 1} first-level administrative units were represented, with WAHIS records occurring in ${summary.yearsWithReports} of ${yearsInSpan} years and ${summary.periodsReported} of ${summary.periodsPossible} possible half-year periods.`,
    },
    {
      claim: `${topZones.zones.join(" and ")} accounted for ${topZones.outbreaks} of ${topZones.totalOutbreaks} reported outbreaks (${topZones.percent}%).`,
    },
    {
      claim: `${topSubtype.subtype} accounted for ${topSubtype.percentOfOutbreaks}% of reported outbreak counts in the extract.`,
    },
    {
      claim:
        "Critical epidemiological fields — including host species, cases, deaths and vaccination — were unpopulated, limiting interpretation to reported event patterns rather than disease burden.",
    },
  ].map((f, i) => ({ ...f, meaning: brucellosisKeyFindingMeanings[i]?.meaning }));

  return (
    <>
      <Navbar activePath="/our-work" />
      <main>
        {/* A — Hero */}
        <Hero eyebrow={brucellosisHero.eyebrow} h1={brucellosisHero.h1} paragraph={brucellosisHero.paragraph} />

        <Section className="pt-0">
          <div className="flex flex-wrap gap-x-10 gap-y-5 border-y border-border py-8">
            {[
              { value: String(summary.recordCount), label: "WAHIS records" },
              { value: String(summary.totalOutbreaks), label: "Reported outbreaks" },
              { value: `${summary.statesReporting}/${summary.totalStates}`, label: "Administrative units" },
              { value: `${summary.periodsReported}/${summary.periodsPossible}`, label: "Reporting periods" },
              { value: String(summary.subtypeCount), label: "Brucella species/categories" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[26px] font-extrabold leading-none text-navy">{stat.value}</p>
                <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.05em] text-text-faint">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[720px] text-[17px] font-medium italic leading-relaxed text-text sm:text-[19px]">
            &ldquo;{brucellosisPositioningStatement}&rdquo;
          </p>
        </Section>

        {/* B — The intelligence question */}
        <Section background="neutral">
          <div className="grid grid-cols-[minmax(240px,1fr)_2fr] gap-14 max-md:grid-cols-1 max-md:gap-6">
            <h2 className="text-[clamp(26px,3.2vw,34px)] font-bold text-navy">{brucellosisQuestion.h2}</h2>
            <div className="space-y-5">
              {brucellosisQuestion.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Section>

        {/* Analytical objectives */}
        <Section>
          <Eyebrow>Analytical Objectives</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisObjectives.h2}
          </h2>
          <ol className="mt-8 grid max-w-[820px] grid-cols-1 gap-4">
            {brucellosisObjectives.items.map((item, i) => (
              <li key={item.slice(0, 24)} className="flex gap-4 text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
                <span className="mt-[2px] shrink-0 text-[13px] font-extrabold text-emerald-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Section>

        {/* C — Evidence base */}
        <Section background="neutral">
          <Eyebrow>Evidence Base</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisEvidenceBase.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            {brucellosisEvidenceBase.paragraph}
          </p>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 border-t border-border pt-8">
            {brucellosisEvidenceBase.facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">{fact.label}</p>
                <p className="mt-2 text-[15.5px] font-semibold text-navy">{fact.value}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Key findings */}
        <Section>
          <Eyebrow>Key Findings</Eyebrow>
          <h2 className="mt-3 max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            What this extract shows — and what it does not
          </h2>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {keyFindings.map((f, i) => (
              <Card key={f.claim.slice(0, 24)} hover="none">
                <span className="text-[13px] font-extrabold text-emerald-text">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[15px] font-semibold leading-snug text-navy">{f.claim}</p>
                {f.meaning && (
                  <p className="mt-3 text-[13px] leading-relaxed text-text-muted">{f.meaning}</p>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* D — National surveillance signal */}
        <Section background="neutral">
          <Eyebrow>National Surveillance Signal</Eyebrow>
          <h2 className="mt-3 max-w-[820px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisNationalSignal.h2}
          </h2>
          <p className="mt-4 max-w-[820px] text-[15.5px] leading-relaxed text-text-muted sm:text-[16.5px]">
            {brucellosisNationalSignal.body}
          </p>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
            <StatCard label="WAHIS records" value={String(summary.recordCount)} note={`${summary.periodStart}–${summary.periodEnd}`} />
            <StatCard label="Reported outbreaks" value={String(summary.totalOutbreaks)} note={`Summed across all ${summary.recordCount} records`} />
            <StatCard
              label="Administrative units"
              value={`${summary.statesReporting} / ${summary.totalStates}`}
              note="States with ≥1 WAHIS record"
            />
            <StatCard label="Reporting years" value={`${summary.yearsWithReports} / ${yearsInSpan}`} note="Years with ≥1 WAHIS record" />
            <StatCard
              label="Reporting periods"
              value={`${summary.periodsReported} / ${summary.periodsPossible}`}
              note="Half-years since 2008"
            />
            <StatCard label="Brucella species/categories" value={String(summary.subtypeCount)} note="abortus, melitensis, suis" />
          </div>
          <Card hover="none" className="mt-8 max-w-[760px] bg-white">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-emerald-text">What this means</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-text-muted">
              Only {summary.yearsWithReports} of the {yearsInSpan} years in the study period contain a WAHIS record,
              meaning the observed series reflects both reported disease events and the continuity of surveillance
              reporting itself.
            </p>
          </Card>
        </Section>

        {/* E — Temporal intelligence */}
        <Section>
          <Eyebrow>Temporal Intelligence</Eyebrow>
          <h2 className="mt-3 max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisTemporal.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            {brucellosisTemporal.body}
          </p>
          <Card hover="none" className="mt-8">
            <YearlyTrendChart data={yearlyTrend} />
          </Card>

          <div className="mt-12 grid grid-cols-[1fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <h3 className="text-[15px] font-bold text-navy">WAHIS reporting continuity</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                Every half-year period across the study span, flagged by whether a WAHIS record exists — a
                surveillance-coverage grid, not a disease-incidence grid.
              </p>
              <div className="mt-5">
                <ReportingContinuityMatrix cells={continuity} />
              </div>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-navy">Reporting metrics</h3>
              <table className="mt-5 w-full border-collapse text-left">
                <tbody>
                  {[
                    { label: "Reporting years", value: `${summary.yearsWithReports}/${yearsInSpan}` },
                    { label: "Reporting half-years", value: `${summary.periodsReported}/${summary.periodsPossible}` },
                    { label: "Jan–Jun outbreaks", value: String(semesterSplit.find((s) => s.semester === "H1")?.outbreaks ?? 0) },
                    { label: "Jul–Dec outbreaks", value: String(semesterSplit.find((s) => s.semester === "H2")?.outbreaks ?? 0) },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-b-0">
                      <td className="py-3 text-[13.5px] text-text-muted">{row.label}</td>
                      <td className="py-3 text-right text-[15px] font-bold text-navy">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-[13.5px] leading-relaxed text-text-muted">
                Reporting was intermittent across the study period; apparent year-to-year differences should not
                automatically be interpreted as changes in disease incidence.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-text-faint">{brucellosisTemporal.seasonalityCaveat}</p>
            </div>
          </div>

          <div className="mt-12 max-w-[720px]">
            <InsightCallout
              index="02"
              claim={`Only ${summary.periodsReported} of the ${summary.periodsPossible} possible half-year periods contained a WAHIS record.`}
              qualifier="Temporal gaps constrain year-to-year interpretation; a gap reflects a reporting gap, not an established absence of disease."
            />
          </div>
        </Section>

        {/* F — Spatial intelligence */}
        <Section background="neutral">
          <Eyebrow>Spatial Intelligence</Eyebrow>
          <h2 className="mt-3 max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisSpatial.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            {brucellosisSpatial.body}
          </p>
          <div className="mt-10 grid grid-cols-[1.2fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-8">
            <Card hover="none" className="bg-white">
              <NigeriaChoropleth stateSummary={stateSummary} />
            </Card>
            <div>
              <h3 className="text-[15px] font-bold text-navy">States ranked by reported outbreaks</h3>
              <div className="mt-5">
                <StateRankingTable rows={stateRanking} />
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="text-[15px] font-bold text-navy">Reported outbreaks by geopolitical zone</h3>
            <p className="mt-2 max-w-[700px] text-[13.5px] leading-relaxed text-text-muted">
              Zones are a standard public administrative grouping of Nigeria&apos;s states, applied here purely to
              roll up state-level totals — WAHIS does not report zone-level data directly.
            </p>
            <div className="mt-8 grid grid-cols-[1fr_1fr] gap-12 max-lg:grid-cols-1 max-lg:gap-8">
              <div className="max-w-[560px]">
                <HorizontalBarList
                  items={zoneSummary.map((z) => ({
                    key: z.zone,
                    label: z.zone,
                    sublabel: `${z.statesReporting}/${z.statesInZone} states reporting`,
                    value: z.outbreaks,
                    valueLabel: `${z.outbreaks} (${z.percentOfOutbreaks}%)`,
                  }))}
                />
              </div>
              <ZoneTable zones={zoneSummary} />
            </div>
          </div>

          <div className="mt-14 max-w-[720px]">
            <InsightCallout
              index="01"
              claim={`${topZones.percent}% of reported outbreaks were concentrated in ${topZones.zones.join(" and ")}.`}
              qualifier={brucellosisSpatial.concentrationQualifier}
            />
          </div>
        </Section>

        {/* G — Brucella species/category analysis */}
        <Section>
          <Eyebrow>Brucella Species/Category Analysis</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisSpecies.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            {brucellosisSpecies.body}
          </p>
          <Card hover="none" className="mt-8 max-w-[560px]">
            <HorizontalBarList
              items={subtypeSummary.map((s) => ({
                key: s.subtype,
                label: s.subtype,
                value: s.outbreaks,
                valueLabel: `${s.outbreaks} (${s.percentOfOutbreaks}%)`,
              }))}
            />
          </Card>
          <p className="mt-5 max-w-[700px] text-[13.5px] leading-relaxed text-text-faint">
            {brucellosisSpecies.clarification}
          </p>
        </Section>

        {/* H — Surveillance data quality */}
        <Section background="neutral">
          <Eyebrow>Surveillance Data Quality</Eyebrow>
          <h2 className="mt-3 max-w-[820px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisDataQuality.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            {brucellosisDataQuality.body}
          </p>

          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
            <StatCard label="Duplicate records" value={String(dataQuality.duplicateRecords)} note="On state × year × semester" />
            <StatCard label="Geographic coverage" value={`${dataQuality.geographicCoveragePercent}%`} note={`${dataQuality.statesReporting} of Nigeria's ${dataQuality.totalStates - 1} states and FCT`} />
            <StatCard label="Temporal coverage" value={`${dataQuality.temporalCoveragePercent}%`} note={`${dataQuality.yearsWithReports} of ${dataQuality.yearsInSpan} years`} />
            <StatCard label="Period coverage" value={`${dataQuality.periodCoveragePercent}%`} note={`${dataQuality.periodsReported} of ${dataQuality.periodsPossible} half-years`} />
          </div>

          <div className="mt-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">
              Observed WAHIS reporting coverage
            </p>
            <div className="mt-4">
              <CoverageBars
                items={[
                  { key: "geo", label: "Geographic coverage", fraction: `${dataQuality.statesReporting}/${dataQuality.totalStates}`, percent: dataQuality.geographicCoveragePercent },
                  { key: "temporal", label: "Temporal coverage", fraction: `${dataQuality.yearsWithReports}/${dataQuality.yearsInSpan}`, percent: dataQuality.temporalCoveragePercent },
                  { key: "period", label: "Period coverage", fraction: `${dataQuality.periodsReported}/${dataQuality.periodsPossible}`, percent: dataQuality.periodCoveragePercent },
                ]}
              />
            </div>
          </div>

          <Card hover="none" className="mt-10 bg-white">
            <DataCompletenessTable fields={dataQuality.fields} recordCount={dataQuality.recordCount} />
          </Card>

          <div className="mt-10 max-w-[820px] space-y-4 border-l-2 border-navy pl-6">
            <p className="text-[14.5px] leading-relaxed text-text">{brucellosisDataQuality.implication}</p>
            <p className="text-[16px] font-bold leading-snug text-navy">{brucellosisDataQuality.keySentence}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-[15px] font-bold text-navy">What can this dataset actually answer?</h3>
            <Card hover="none" className="mt-5 bg-white">
              <AnswerTable rows={brucellosisAnswerTable} />
            </Card>
          </div>

          <div className="mt-12 max-w-[720px]">
            <InsightCallout
              index="03"
              claim={`${notReportedFieldCount} of ${dataQuality.fields.length} WAHIS fields in this extract were unpopulated.`}
              qualifier="The dataset supports event surveillance — where, when, how many, which reported category — but not animal-level burden estimation."
            />
          </div>
        </Section>

        {/* Interpretation */}
        <Section>
          <Eyebrow>Interpretation</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            What the findings suggest for surveillance
          </h2>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {brucellosisInterpretation.map((section) => (
              <Card key={section.title} hover="none">
                <h3 className="text-[15.5px] font-bold text-navy">{section.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-text-muted">{section.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* I — One Health relevance */}
        <Section background="dark">
          <Eyebrow tone="dark">One Health Relevance</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-white">
            {brucellosisOneHealth.h2}
          </h2>
          <div className="mt-6 max-w-[820px] space-y-5">
            {brucellosisOneHealth.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15.5px] leading-relaxed text-white/70 sm:text-[16.5px]">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-[1fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
            <div className="border border-white/15 p-7 sm:p-9">
              <OneHealthArchitecture />
            </div>
            <div className="flex items-center">
              <p className="text-[17px] font-semibold leading-relaxed text-white sm:text-[19px]">
                {brucellosisOneHealth.bridgeQuestion}
              </p>
            </div>
          </div>
        </Section>

        {/* J — Jibriva analytical insight */}
        <Section>
          <Eyebrow>Jibriva&apos;s Analytical Approach</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisJibrivaInsight.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] font-semibold leading-relaxed text-navy sm:text-[17px]">
            {brucellosisJibrivaInsight.paragraph}
          </p>
          <div className="mt-10">
            <JibrivaWorkflow steps={brucellosisWorkflow} />
          </div>
        </Section>

        {/* K — From analysis to system design */}
        <Section background="neutral">
          <h2 className="max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisSystemDesign.h2}
          </h2>
          <div className="mt-6 max-w-[820px] space-y-4">
            {brucellosisSystemDesign.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15.5px] leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* Conclusion — bridges system design into OneHealth Hub */}
        <Section>
          <Eyebrow>Conclusion</Eyebrow>
          <h2 className="mt-3 max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisConclusion.h2}
          </h2>
          <div className="mt-6 max-w-[820px] space-y-4">
            {brucellosisConclusion.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15.5px] leading-relaxed text-text-muted sm:text-[16.5px]">
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* L — OneHealth Hub connection */}
        <Section>
          <Eyebrow>OneHealth Hub</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisOneHealthHub.h2}
          </h2>
          <div className="mt-6 max-w-[760px] space-y-4">
            {brucellosisOneHealthHub.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15.5px] leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="https://onehealth-hub.vercel.app/" variant="secondary">
              {brucellosisOneHealthHub.ctaLabel}
            </Button>
          </div>
        </Section>

        {/* Jibriva's approach — capability positioning */}
        <Section background="neutral">
          <Eyebrow>Jibriva&apos;s Approach</Eyebrow>
          <h2 className="mt-3 mb-10 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            Capability behind this analysis
          </h2>
          <GridSeamPanel items={brucellosisCapabilities} minWidth={220} />
        </Section>

        {/* Why this analysis matters */}
        <Section>
          <Eyebrow>Why This Analysis Matters</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisWhyItMatters.h2}
          </h2>
          <div className="mt-6 max-w-[760px] space-y-4">
            {brucellosisWhyItMatters.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[16px] font-medium leading-relaxed text-navy sm:text-[17px]">
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* M — Methodology */}
        <Section background="neutral">
          <Eyebrow>Methodology &amp; Source</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisMethodology.h2}
          </h2>
          <div className="mt-6 max-w-[820px] space-y-4">
            {brucellosisMethodology.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[14.5px] leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-[760px] text-[13px] italic leading-relaxed text-text-faint">
            {brucellosisManuscriptNote}
          </p>
        </Section>

        {/* N — Limitations */}
        <Section>
          <Eyebrow>Limitations</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            Read this analysis with these limits in mind
          </h2>
          <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-10 gap-y-4">
            {brucellosisLimitations.map((item) => (
              <li key={item.slice(0, 24)} className="flex gap-3 text-[14px] leading-relaxed text-text-muted">
                <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-navy" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/our-work" className="text-[14px] font-semibold text-emerald-text hover:text-navy">
              ← Back to Our Work
            </Link>
          </p>
        </Section>

        {/* O — Consultancy CTA */}
        <Section background="dark" contentClassName="flex flex-col items-center text-center">
          <h2 className="max-w-[720px] text-[clamp(28px,3.5vw,38px)] font-bold text-white">{brucellosisCta.h2}</h2>
          <p className="mt-5 max-w-[640px] text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
            {brucellosisCta.paragraph}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={brucellosisCta.primaryHref} tone="dark" variant="primary">
              {brucellosisCta.primaryLabel}
            </Button>
            <Button href={brucellosisCta.secondaryHref} tone="dark" variant="secondary">
              {brucellosisCta.secondaryLabel}
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
