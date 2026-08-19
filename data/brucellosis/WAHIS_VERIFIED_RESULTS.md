# WAHIS Nigeria Brucellosis — Verified Results (Source of Truth)

*Definitive numerical reference for the Nigeria Brucellosis Surveillance & GIS
Analysis case study (`/our-work/brucellosis-surveillance-nigeria`). Every
figure below was independently recomputed from the raw CSV — not copied from
prior drafts — and cross-checked against the live values produced by
`lib/brucellosis/analytics.ts` operating on `data/brucellosis/wahis-records.ts`.
Use this file as the single reference for any future update to this case
study; if a number elsewhere in the project ever disagrees with this file,
this file and the underlying data recomputation are authoritative, not the
other file.*

---

## Dataset provenance

- **Source:** World Organisation for Animal Health (WOAH), World Animal
  Health Information System (WAHIS), Quantitative Data, Nigeria, Brucellosis.
- **Source file (latest verification pass):** `Quantitative data
  2026-08-18.csv` — a re-extraction of the same underlying WAHIS query.
- **Prior source file:** `Bruscella_WAHIS_Quantitative data 2026-08-10
  (1).csv`.
- **Reconciliation:** the 2026-08-18 re-extraction was compared row-for-row
  against the 24 records already encoded in `wahis-records.ts` (originally
  transcribed from the 2026-08-10 extraction). **Every one of the 24 records
  is byte-for-byte identical between the two extractions** — same year,
  semester, state, Disease value, and New outbreaks count in every row. No
  data values changed as a result of this verification pass.
- **Geographic scope:** Nigeria only. **World region:** Africa (constant).
  **Disease:** Brucellosis (constant label; the underlying `Disease` field
  itself varies per row — see "Brucella species/category" below).
- **Animal category:** "Both animal categories" (constant across all 24
  records).

---

## Core verified counts

| Concept | Value | Do not confuse with |
|---|---|---|
| **WAHIS quantitative records** | **24** | Not the same as outbreak count — one record can carry a `New outbreaks` value >1 |
| **Reported new outbreaks (sum of `New outbreaks` across all 24 records)** | **39** | Not 39 cases, not 39 infected animals — WAHIS does not report case-level or animal-level counts for this extract |
| **Administrative (state) units represented** | **15 of Nigeria's 37** (36 states + FCT) | Reporting coverage, not disease prevalence |
| **Years with ≥1 record** | **10 of 16** study years (2008–2023) | A year without a record means no WAHIS record was identified for that year — not that zero disease occurred |
| **Half-year reporting periods represented** | **16 of 32** possible periods | Reporting coverage, not a 16-event count |
| **Jan–Jun outbreaks** | **17** | Distribution by reporting semester — not established as "seasonality" by this analysis |
| **Jul–Dec outbreaks** | **22** | Same caveat |

---

## Brucella species/category (via the WAHIS `Disease` field)

**The dedicated `Serotype/Subtype/Genotype` WAHIS field is 0% populated (empty
in all 24 records).** The species/category breakdown below was derived from
the `Disease` field, whose values vary per record (e.g. "Brucella abortus
(Inf. with)", "Brucella melitensis (Inf. with)", "Brucella suis (Inf. with)")
— this field is **not** constant and is **not** the same thing as the empty
dedicated subtype field.

| Category | Outbreaks | Records | % of 39 outbreaks |
|---|---|---|---|
| *Brucella abortus* (Inf. with) | 33 | 19 | 84.6% |
| *Brucella melitensis* (Inf. with) | 4 | 3 | 10.3% |
| *Brucella suis* (Inf. with) | 2 | 2 | 5.1% |
| **Total** | **39** | **24** | **100.0%** |

---

## State-level outbreak totals (verified, 15 states)

| State | Outbreaks |
|---|---|
| Plateau | 8 |
| Kaduna | 5 |
| Adamawa | 4 |
| Kano | 4 |
| Niger | 3 |
| Benue | 2 |
| Ekiti | 2 |
| Kwara | 2 |
| Nasarawa | 2 |
| Zamfara | 2 |
| Enugu | 1 |
| Jigawa | 1 |
| Katsina | 1 |
| Ondo | 1 |
| Osun | 1 |
| **Total** | **39** |

---

## Geopolitical-zone outbreak totals — **DERIVED, not native to WAHIS**

WAHIS reports state (Administrative Division) only. The zone groupings below
are a standard, publicly known Nigerian administrative classification
(`data/brucellosis/zones.ts`), applied here purely to roll up the state-level
totals above — WAHIS does not supply or imply zone-level data.

| Zone | Outbreaks | Reporting states / states in zone |
|---|---|---|
| North Central | 17 | Plateau, Niger, Nasarawa, Kwara, Benue (5/7) |
| North West | 13 | Kaduna, Kano, Zamfara, Katsina, Jigawa (5/7) |
| North East | 4 | Adamawa (1/6) |
| South West | 4 | Ekiti, Osun, Ondo (3/6) |
| South East | 1 | Enugu (1/5) |
| South South | 0 | none (0/6) |
| **Total** | **39** | |

---

## Annual outbreak totals (verified)

| Year | Outbreaks | Note |
|---|---|---|
| 2008 | 9 | |
| 2009 | — | No WAHIS record was identified for this year |
| 2010 | 2 | |
| 2011 | — | No WAHIS record was identified for this year |
| 2012 | — | No WAHIS record was identified for this year |
| 2013 | 1 | |
| 2014 | — | No WAHIS record was identified for this year |
| 2015 | — | No WAHIS record was identified for this year |
| 2016 | — | No WAHIS record was identified for this year |
| 2017 | 2 | |
| 2018 | 5 | |
| 2019 | 6 | |
| 2020 | 4 | |
| 2021 | 2 | |
| 2022 | 4 | |
| 2023 | 4 | |
| **Total** | **39** | |

**Years without a record must never be described as "zero disease" or "zero
outbreaks occurred."** Use "no WAHIS record was identified," "no outbreak was
reported in the extracted WAHIS data," or equivalent, depending on context —
absence of a record reflects absence of a *reported* event, not a verified
absence of disease.

---

## Data-field completeness

| Field | Completeness | Note |
|---|---|---|
| Year | 100% | |
| Semester | 100% | |
| Administrative Division (state) | 100% | |
| Disease | 100% | Varies per record; the source of the Brucella species/category breakdown above |
| Animal Category | 100% | Constant: "Both animal categories" |
| New outbreaks | 100% | |
| **Serotype/Subtype/Genotype (dedicated WAHIS field)** | **0%** | **Unpopulated in every record.** Not the same field as `Disease`, and not the source of the species/category breakdown above |
| Species (host) | 0% | Not reported |
| Event_id | 0% | Not reported |
| Outbreak_id | 0% | Not reported |
| Susceptible | 0% | Not reported |
| Measuring units | 0% | Not reported |
| Cases | 0% | Not reported |
| Killed and disposed of | 0% | Not reported |
| Slaughtered | 0% | Not reported |
| Deaths | 0% | Not reported |
| Vaccinated | 0% | Not reported |

**Duplicate records** (checked on state × year × semester): **0**.

---

## Five concepts this file deliberately keeps distinct

Do not use these interchangeably anywhere in the case study:

1. **Record count (24)** — the number of rows in the WAHIS quantitative
   extract. Each row is one state × half-year combination with a reported
   `Disease` value.
2. **Outbreak count (39)** — the sum of the `New outbreaks` field across all
   24 records. **Not** a count of cases, animals, or infected herds — WAHIS
   provides no case- or animal-level counts in this extract.
3. **Reporting coverage** — how much of the possible state/year/period space
   has ≥1 record (15/37 states, 10/16 years, 16/32 half-year periods). A
   coverage measure, not a burden measure.
4. **Field completeness** — what fraction of the 24 records have a given
   WAHIS field populated (see table above). A data-quality measure, not an
   epidemiological one.
5. **True disease burden** — incidence, prevalence, attack rate, mortality,
   case-fatality, or vaccination coverage. **None of these can be computed
   from this extract.** The necessary denominators (animal populations,
   tested populations, case counts) are entirely absent. This analysis makes
   no claim about true disease burden and none should be inferred from it.

---

## Methodological cautions carried by this file

- **Absence of a WAHIS record must not be interpreted as absence of disease.**
  It may reflect a genuine reporting gap, a surveillance gap, a diagnostic
  gap, or a WAHIS submission gap — this extract cannot distinguish between
  these explanations.
- **Geographic concentration (e.g. Plateau, Kaduna, North Central, North
  West) describes reported outbreaks and reported outbreak distribution —
  not confirmed epidemiological hotspots.** True prevalence would require
  denominators and surveillance-intensity data this extract does not contain.
- **The Jan–Jun / Jul–Dec split (17 vs. 22) is a distribution by reporting
  semester.** It is not described as "seasonality" or a "seasonal pattern"
  unless a defensible seasonal analysis is separately established.
- **Geopolitical-zone totals are derived, not WAHIS-native**, and are
  labelled as such everywhere they appear.
- **This analysis is independent and does not represent an official position
  of WOAH or the Nigerian government.**

---

*Last verified: recomputed directly from `Quantitative data 2026-08-18.csv`
against the values already encoded in `wahis-records.ts` / produced by
`lib/brucellosis/analytics.ts`. All figures in this file matched the live
site's computed output at time of verification.*
