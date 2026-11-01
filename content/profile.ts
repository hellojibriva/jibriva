import type { CareerRole } from "@/types/content";

/**
 * Career history, newest first. Source: Abi's CV of 31 Oct 2026, condensed.
 * PSHAN wording is deliberately general: no facility or indicator counts, and
 * no named stakeholder engagements, appear on the public site.
 */
export const career: CareerRole[] = [
  {
    title: "Project Officer",
    programme: "Adopt-A-Health-Facility Programme (ADHFP)",
    organisation: "Private Sector Health Alliance of Nigeria (PSHAN)",
    organisationShort: "PSHAN",
    period: "February 2026 – Present",
    years: "2026 – Present",
    responsibilities: [
      "I support programme monitoring, implementation follow-up and performance analysis across a network of revitalised primary healthcare facilities.",
      "I consolidate, clean, validate and analyse routine facility HMIS data, and follow up with facilities on missing, inconsistent or unusual values.",
      "I turn monthly indicator analysis into dashboards, programme reports and technical presentations for programme and stakeholder reviews.",
      "I coordinate with facility Officers-in-Charge and local government M&E structures, and supervise programme liaison officers.",
      "I developed an HMIS and data-quality training plan, and checklists for family planning and mortality/cause-of-death reporting, in response to recurring data-quality gaps.",
    ],
  },
  {
    title: "Programme Officer / PMTCT Workstream Lead",
    programme: "PEPFAR/USAID ASPIRE",
    organisation: "Solina Centre for International Development and Research (SCIDaR)",
    organisationShort: "SCIDaR",
    period: "January 2023 – February 2026",
    years: "2023 – 2026",
    responsibilities: [
      "I led the PMTCT workstream, coordinating activities, tracking implementation, and supporting alignment with national HIV guidelines, targets and standard operating procedures.",
      "I monitored HIV indicators for testing, PMTCT, retention, viral-load coverage and treatment outcomes, and contributed to weekly, monthly and quarterly programme reports.",
      "I conducted and supported data-quality assessments, reviewing facility records and reports to identify discrepancies.",
      "I identified persistent facility reporting barriers through a Google Forms assessment, analysed the feedback in Excel, and introduced weekly reporting, defined submission deadlines, routine register reviews and structured follow-up. These improved routines contributed to previously low-performing facilities moving from the red category on the NHLMIS dashboard into the top 10 performing facilities.",
      "I coordinated programme staff, facility focal persons and community mobilisers, and supported commodity monitoring and reporting through CRRF and NHLMIS.",
    ],
  },
  {
    title: "Data Entry Clerk",
    programme: "PEPFAR/USAID ACHIEVE",
    organisation: "Solina Centre for International Development and Research (SCIDaR)",
    organisationShort: "SCIDaR",
    period: "March 2021 – December 2022",
    years: "2021 – 2022",
    responsibilities: [
      "I entered and maintained patient and programme data in DHIS2 and related reporting workflows.",
      "I ran routine checks for missing or inconsistent information, and supported data validation, reconciliation and timely reporting.",
      "I worked with programme and facility teams to improve the completeness and accuracy of routine service-delivery data.",
    ],
  },
  {
    title: "Data Assistant / Independent Monitor",
    programme: "Polio Campaign Surveillance (NYSC)",
    organisation: "World Health Organization (WHO), Jigawa State",
    organisationShort: "WHO, Jigawa State",
    period: "November 2016 – October 2017",
    years: "2016 – 2017",
    responsibilities: [
      "I supported field surveillance, data collection and independent monitoring during polio vaccination campaigns, including in hard-to-reach communities.",
      "I contributed to campaign microplanning and data collation, and reported implementation gaps to the relevant stakeholders.",
      "I coordinated with state-level stakeholders and field teams on campaign monitoring and reporting.",
    ],
  },
];

