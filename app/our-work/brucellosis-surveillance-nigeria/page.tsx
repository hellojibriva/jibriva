import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/brucellosis/StatCard";
import { YearlyTrendChart } from "@/components/brucellosis/YearlyTrendChart";
import { HorizontalBarList } from "@/components/brucellosis/HorizontalBarList";
import { NigeriaChoropleth } from "@/components/brucellosis/NigeriaChoropleth";
import { DataQualityTable } from "@/components/brucellosis/DataQualityTable";
import {
  brucellosisHero,
  brucellosisQuestion,
  brucellosisDataSection,
  brucellosisOneHealth,
  brucellosisInterpretation,
  brucellosisLimitations,
  brucellosisMethodology,
} from "@/content/brucellosis-case-study";
import {
  getSummaryMetrics,
  getYearlyTrend,
  getSemesterSplit,
  getStateSummary,
  getSubtypeSummary,
  getZoneSummary,
  getDataQuality,
} from "@/lib/brucellosis/analytics";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Nigeria Brucellosis Surveillance & GIS Analysis | Jibriva",
  description:
    "Analysis of brucellosis outbreak records reported for Nigeria through WAHIS, 2008–2023 — surveillance patterns, geographic distribution and data quality.",
  path: "/our-work/brucellosis-surveillance-nigeria",
  ogTitle: "Nigeria Brucellosis Surveillance & GIS Analysis — Jibriva",
});

export default function BrucellosisSurveillancePage() {
  const summary = getSummaryMetrics();
  const yearlyTrend = getYearlyTrend();
  const semesterSplit = getSemesterSplit();
  const stateSummary = getStateSummary();
  const subtypeSummary = getSubtypeSummary();
  const zoneSummary = getZoneSummary();
  const dataQuality = getDataQuality();

  return (
    <>
      <Navbar activePath="/our-work" />
      <main>
        <Hero eyebrow={brucellosisHero.eyebrow} h1={brucellosisHero.h1} paragraph={brucellosisHero.paragraph} />

        {/* The question */}
        <Section className="pt-0">
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

        {/* The data */}
        <Section background="neutral">
          <Eyebrow>The Data</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            {brucellosisDataSection.h2}
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            {brucellosisDataSection.paragraph}
          </p>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8 border-t border-border pt-8">
            {brucellosisDataSection.facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">{fact.label}</p>
                <p className="mt-2 text-[15.5px] font-semibold text-navy">{fact.value}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Surveillance dashboard: headline KPIs */}
        <Section>
          <Eyebrow>Surveillance Dashboard</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            What the WAHIS extract reports for Nigeria
          </h2>
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
            <StatCard label="Reported outbreaks" value={String(summary.totalOutbreaks)} note={`Summed across all ${summary.recordCount} records`} />
            <StatCard label="Reporting records" value={String(summary.recordCount)} note={`${summary.periodStart}–${summary.periodEnd}`} />
            <StatCard
              label="States represented"
              value={`${summary.statesReporting} / ${summary.totalStates}`}
              note="States with ≥1 WAHIS record"
            />
            <StatCard label="Reporting years" value={String(summary.yearsWithReports)} note={`Of ${summary.periodEnd - summary.periodStart + 1} years in span`} />
            <StatCard label="Brucella subtypes" value={String(summary.subtypeCount)} note="abortus, melitensis, suis" />
            <StatCard
              label="Half-year periods reported"
              value={`${summary.periodsReported} / ${summary.periodsPossible}`}
              note="Since 2008"
            />
          </div>
        </Section>

        {/* Temporal analysis */}
        <Section background="neutral">
          <Eyebrow>Temporal Analysis</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            Reported outbreaks by year, {summary.periodStart}–{summary.periodEnd}
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            Years with no bar had no WAHIS record for Nigeria in this extract — shown as gaps, not as zero
            disease activity.
          </p>
          <Card hover="none" className="mt-8">
            <YearlyTrendChart data={yearlyTrend} />
          </Card>
          <div className="mt-6 flex flex-wrap gap-8">
            {semesterSplit.map((s) => (
              <p key={s.semester} className="text-[14px] text-text-muted">
                <span className="font-bold text-navy">{s.outbreaks}</span> outbreaks reported in{" "}
                {s.label} periods
              </p>
            ))}
          </div>
        </Section>

        {/* Geographic analysis */}
        <Section>
          <Eyebrow>Geographic Analysis</Eyebrow>
          <h2 className="mt-3 max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            Reported brucellosis outbreaks by state, {summary.periodStart}–{summary.periodEnd}
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            The WAHIS extract records state names but no outbreak coordinates, so the map is shaded at
            state level only — it shows where outbreaks were reported, not precise outbreak locations.
            Grey states have no WAHIS outbreak records in this extract; that does not indicate they are
            free of disease.
          </p>
          <div className="mt-10 grid grid-cols-[1.3fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-8">
            <Card hover="none">
              <NigeriaChoropleth stateSummary={stateSummary} />
            </Card>
            <div>
              <h3 className="text-[15px] font-bold text-navy">States ranked by reported outbreaks</h3>
              <div className="mt-5">
                <HorizontalBarList
                  items={stateSummary.map((s) => ({
                    key: s.state,
                    label: s.state,
                    sublabel: s.zone,
                    value: s.outbreaks,
                  }))}
                />
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="text-[15px] font-bold text-navy">
              Reported outbreaks by geopolitical zone
            </h3>
            <p className="mt-2 max-w-[700px] text-[13.5px] leading-relaxed text-text-muted">
              Zones are a standard public administrative grouping of Nigeria&apos;s states, applied here for
              analysis — WAHIS does not report zone-level data directly.
            </p>
            <div className="mt-6 max-w-[560px]">
              <HorizontalBarList
                items={zoneSummary.map((z) => ({
                  key: z.zone,
                  label: z.zone,
                  sublabel: `${z.statesReporting}/${z.statesInZone} states reporting`,
                  value: z.outbreaks,
                }))}
              />
            </div>
          </div>
        </Section>

        {/* Subtype analysis */}
        <Section background="neutral">
          <Eyebrow>Subtype Analysis</Eyebrow>
          <h2 className="mt-3 max-w-[720px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            Brucella subtypes reported
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            The extract records the reported Brucella subtype but not the host animal species, so this
            reflects pathogen typing only — not a species/host breakdown.
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
        </Section>

        {/* Data quality */}
        <Section>
          <Eyebrow>Data Quality</Eyebrow>
          <h2 className="mt-3 max-w-[760px] text-[clamp(26px,3.2vw,34px)] font-bold text-navy">
            What the data contain — and what they don&apos;t
          </h2>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-relaxed text-text-muted">
            The table below reports field-by-field completeness across all {dataQuality.recordCount}{" "}
            Nigeria records in this WAHIS extract: which fields are populated, and which are not reported
            at all.
          </p>

          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
            <StatCard label="Duplicate records" value={String(dataQuality.duplicateRecords)} note="On state × year × semester" />
            <StatCard label="Geographic coverage" value={`${dataQuality.geographicCoveragePercent}%`} note={`${dataQuality.statesReporting} of Nigeria's ${dataQuality.totalStates - 1} states and FCT`} />
            <StatCard label="Temporal coverage" value={`${dataQuality.temporalCoveragePercent}%`} note={`${dataQuality.yearsWithReports} of ${dataQuality.yearsInSpan} years`} />
            <StatCard label="Period coverage" value={`${dataQuality.periodCoveragePercent}%`} note={`${dataQuality.periodsReported} of ${dataQuality.periodsPossible} half-years`} />
          </div>

          <Card hover="none" className="mt-10">
            <DataQualityTable dataQuality={dataQuality} />
          </Card>
        </Section>

        {/* One Health relevance */}
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

        {/* Limitations */}
        <Section background="neutral">
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
        </Section>

        {/* Methodology */}
        <Section>
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
          <p className="mt-8">
            <Link href="/our-work" className="text-[14px] font-semibold text-emerald-text hover:text-navy">
              ← Back to Our Work
            </Link>
          </p>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
