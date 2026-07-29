import type { ServiceCategory } from "@/types/content";

/*
 * DRAFTED — review before launch.
 *
 * CONTENT_GUIDE.md gives each category's name, description and the list of
 * sub-item names verbatim, but defers each sub-item's one-sentence value
 * copy to `services.dc.html`'s source, which is not included in the
 * JIBRIVA-HANDOFF package. Per the client's direction, the `value` string
 * on every ServiceItem below has been drafted to match the established
 * outcome-first, technology-second tone (see BRAND_GUIDE.md §5) and should
 * be reviewed against the client's real source copy before public launch.
 * Category names, descriptions and item names ARE verbatim from
 * CONTENT_GUIDE.md and are not part of this flag.
 */
export const services: ServiceCategory[] = [
  {
    name: "One Health Consulting",
    desc: "We help organisations design programmes, build strategy and strengthen surveillance across human, animal and environmental health — and coordinate the sectors that rarely work together by default.",
    items: [
      {
        name: "One Health programme design",
        value:
          "We design programmes that treat human, animal and environmental health as one connected system from the start, not three add-ons stitched together later.",
      },
      {
        name: "One Health strategy",
        value:
          "We help organisations build a strategy that names how sectors will actually coordinate, not just a vision statement that sits on a shelf.",
      },
      {
        name: "Multisector coordination",
        value:
          "We facilitate the working relationships between ministries, agencies and partners that most cross-sector plans assume will happen on their own.",
      },
      {
        name: "Surveillance systems",
        value:
          "We design surveillance systems that catch signals early by connecting data across sectors instead of waiting for it to cross a desk.",
      },
      {
        name: "Policy support",
        value:
          "We help translate evidence into policy positions and briefs that decision-makers can act on with confidence.",
      },
      {
        name: "Technical advisory",
        value:
          "We provide hands-on technical guidance through the decisions that shape whether a programme actually works in the field.",
      },
      {
        name: "Operational support",
        value:
          "We stay engaged through day-to-day delivery, not just at the planning stage, so problems get solved as they come up.",
      },
    ],
  },
  {
    name: "Research & Evidence",
    desc: "We help organisations design studies, conduct reviews, extract and synthesise evidence, and produce reporting that decision-makers can actually use.",
    items: [
      {
        name: "Research design",
        value:
          "We design studies built to answer the specific question a programme needs answered, not a generic template.",
      },
      {
        name: "Scoping reviews",
        value:
          "We map what evidence already exists on a topic so programmes don't duplicate work or miss what's already known.",
      },
      {
        name: "Systematic reviews",
        value:
          "We conduct rigorous, reproducible reviews that hold up to scrutiny from donors, journals and technical reviewers.",
      },
      {
        name: "Literature reviews",
        value:
          "We synthesise existing research into a clear picture of what's known, what's contested and what's missing.",
      },
      {
        name: "Data extraction",
        value:
          "We pull structured data out of studies, reports and records so it's usable for analysis rather than locked in PDFs.",
      },
      {
        name: "Evidence synthesis",
        value:
          "We bring findings from multiple sources together into a single, decision-ready picture.",
      },
      {
        name: "Research reporting",
        value:
          "We write research reports that a technical reviewer and a programme manager can both actually use.",
      },
      {
        name: "Scientific writing",
        value:
          "We write and edit manuscripts, protocols and technical documents to the standard required for publication.",
      },
      {
        name: "Publication support",
        value:
          "We support teams through the process of preparing and submitting research for peer-reviewed publication.",
      },
    ],
  },
  {
    name: "Monitoring, Evaluation & Learning",
    desc: "We help organisations develop indicators, design M&E systems, strengthen data quality, create dashboards, improve programme learning and produce donor reports.",
    items: [
      {
        name: "Theory of Change",
        value:
          "We build a Theory of Change that makes a programme's assumptions explicit, so it can be tested rather than just believed.",
      },
      {
        name: "Logframes",
        value:
          "We develop logframes that connect activities to outcomes in a way that actually guides implementation, not just donor reporting.",
      },
      {
        name: "Results frameworks",
        value:
          "We design results frameworks that give programme teams a shared, measurable definition of success.",
      },
      {
        name: "Indicator development",
        value:
          "We define indicators that are realistic to collect and genuinely useful for tracking progress.",
      },
      {
        name: "Data Quality Assessments",
        value:
          "We assess whether the data a programme relies on is accurate enough to make decisions on, and fix it where it isn't.",
      },
      {
        name: "Routine monitoring",
        value:
          "We set up monitoring routines that keep programme data current without overloading field teams.",
      },
      {
        name: "Dashboard design",
        value:
          "We design dashboards that programme teams actually open and use, not ones built to impress in a demo.",
      },
      {
        name: "Donor reporting",
        value:
          "We prepare donor reports that meet compliance requirements while still telling an honest story about progress.",
      },
      {
        name: "Learning systems",
        value:
          "We build the routines that turn monitoring data into lessons a programme actually acts on.",
      },
      {
        name: "Knowledge management",
        value:
          "We help organisations capture and organise institutional knowledge so it survives staff turnover.",
      },
      {
        name: "DHIS2 support",
        value:
          "We configure and support DHIS2 instances so health information systems produce data that's actually usable.",
      },
    ],
  },
  {
    name: "Digital Solutions",
    desc: "We help organisations build websites, dashboards, mapping tools and internal systems that support programme delivery — a capability we offer, not our identity.",
    items: [
      {
        name: "NGO websites",
        value:
          "We build websites that communicate an organisation's work clearly and hold up to donor and partner scrutiny.",
      },
      {
        name: "Interactive dashboards",
        value:
          "We build dashboards that let programme teams explore their own data instead of waiting for a static report.",
      },
      {
        name: "Data visualization",
        value:
          "We turn dense datasets into visuals that make patterns and outliers immediately clear.",
      },
      {
        name: "GIS-enabled platforms",
        value:
          "We build mapping tools that support planning, surveillance and resource allocation with real spatial data.",
      },
      {
        name: "Internal tools",
        value:
          "We build internal tools that fit how a team already works, so adoption doesn't require a change-management effort.",
      },
      {
        name: "Workflow automation",
        value:
          "We automate the repetitive parts of data collection and reporting so staff time goes to analysis, not data entry.",
      },
      {
        name: "AI-assisted productivity tools",
        value:
          "We build lightweight AI-assisted tools that speed up specific, well-defined tasks — never as a replacement for programme judgment.",
      },
    ],
  },
  {
    name: "Capacity Strengthening",
    desc: "We help organisations build the in-house skills to run their own M&E, reporting and digital systems — so capability stays with the team long after we leave.",
    items: [
      {
        name: "M&E training",
        value:
          "We train programme staff to design, run and interpret their own M&E systems, not just fill in templates.",
      },
      {
        name: "DHIS2 training",
        value:
          "We train health information staff to configure, maintain and troubleshoot DHIS2 themselves.",
      },
      {
        name: "KoboToolbox",
        value:
          "We train field teams to build and manage their own KoboToolbox data collection forms.",
      },
      {
        name: "ODK",
        value:
          "We train teams to design, deploy and maintain ODK-based data collection in the field.",
      },
      {
        name: "Power BI",
        value: "We train staff to build and maintain their own Power BI reports and dashboards.",
      },
      {
        name: "Excel for M&E",
        value:
          "We train M&E staff to manage, clean and analyse programme data confidently in Excel.",
      },
      {
        name: "Data quality",
        value:
          "We train teams to spot and correct data quality issues before they undermine decisions.",
      },
      {
        name: "Research methods",
        value:
          "We train staff in the research methods they need to design and run their own studies.",
      },
      {
        name: "Scientific writing",
        value:
          "We train staff to write research findings clearly enough to publish or present with confidence.",
      },
      {
        name: "One Health orientation",
        value:
          "We orient teams to a One Health way of working, so cross-sector collaboration becomes a habit, not a one-off.",
      },
      {
        name: "Data entry training for health facilities",
        value:
          "We train frontline health facility staff to enter and manage routine data accurately at the point of collection.",
      },
    ],
  },
];
