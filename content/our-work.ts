import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "brucellosis-surveillance-nigeria",
    tag: "Surveillance & GIS",
    name: "Nigeria Brucellosis Surveillance & GIS Analysis",
    status: "Live",
    overview:
      "A WAHIS-sourced surveillance analysis auditing data quality and mapping reported brucellosis outbreaks across Nigeria, 2008–2023.",
    problem:
      "Raw surveillance extracts are often used for dashboards before anyone checks what the data actually contain.",
    tech: ["WAHIS", "GIS", "Data Quality", "M&E"],
    href: "/our-work/brucellosis-surveillance-nigeria",
  },
  {
    slug: "one-health-hub",
    tag: "One Health",
    name: "One Health Hub",
    status: "Live",
    overview:
      "A digital platform supporting surveillance, GIS, research and evidence-based decision-making across the human, animal and environmental health sectors.",
    problem:
      "One Health data is usually scattered across sectors that rarely share systems, slowing detection and response.",
    tech: ["DHIS2", "GIS", "React", "Dashboards"],
    href: "https://onehealth-hub.vercel.app/",
  },
  {
    slug: "gis-dashboard",
    tag: "GIS",
    name: "GIS Dashboard",
    status: "Live",
    overview:
      "Spatial tools that support planning, surveillance and geographic analysis. State-level choropleth maps of reported Rabies, HPAI, and Trypanosomosis outbreaks across Nigeria (WAHIS, 2006–2025), distinguishing genuine reporting gaps from confirmed zero-outbreak states.",
    problem:
      "Programme teams often plan and target interventions without a clear view of where need is highest — and in animal-health surveillance specifically, reporting gaps can be mistaken for disease absence, obscuring where investment is actually needed.",
    tech: ["QGIS", "ArcGIS", "Dashboards", "WAHIS", "One Health"],
    href: "https://github.com/hellojibriva/Nigeria-zoonotic-disease-mapping",
    ctaLabel: "Read more",
  },
  {
    slug: "monitoring-evaluation-dashboard",
    tag: "Monitoring & Evaluation",
    name: "Monitoring & Evaluation Dashboard",
    status: "Live",
    overview:
      "Interactive dashboards that help organisations monitor programme performance and communicate results — demonstrated live with a Lassa fever surveillance M&E dashboard built for Nigeria.",
    problem: "M&E data often sits in spreadsheets that are hard to read and slower to act on.",
    tech: ["React", "TypeScript", "Recharts"],
    href: "https://hellojibriva.github.io/lassa-me-dashboard/",
    ctaLabel: "View Live Dashboard →",
    openInNewTab: false,
  },
  {
    slug: "research-evidence-platform",
    tag: "Research & Evidence",
    name: "Research Evidence Platform",
    status: "In Development",
    overview:
      "A platform for organising and surfacing research evidence for programme decision-making.",
    problem: "Evidence generated across projects is rarely consolidated in one accessible place.",
    tech: ["Python", "SQL"],
  },
];
