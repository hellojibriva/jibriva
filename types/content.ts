export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineStep {
  name: string;
  desc: string;
}

/** One employment entry. Source: Abi's CV of 31 Oct 2026 (confirmed authoritative). */
export interface CareerRole {
  title: string;
  programme: string;
  organisation: string;
  /** Short organisation name for compact lists, e.g. "PSHAN". */
  organisationShort: string;
  period: string;
  /** Years only, for the homepage snapshot, e.g. "2023 – 2026". */
  years: string;
  responsibilities: string[];
  /** One-line programme context, from the CV. */
  context?: string;
  /** Systems and tools named for this role in the CV. */
  tools?: string[];
  /** One achievement stated in the CV for this role, if any. */
  highlight?: string;
  /** Headline figures for the role, with a note on what they describe. */
  metrics?: { items: { value: string; label: string }[]; note: string };
}

export interface SkillCategory {
  category: string;
  tools: string[];
}

export interface CapabilityRow {
  capability: string;
  status: "Implemented" | "Concept";
  note: string;
}

export interface EvidenceItem {
  /** Path under /public, e.g. "/projects/onehealth-hub/map.png". */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

/** Content blocks a case-study section can contain, rendered in order. */
export type CaseBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subhead"; text: string }
  | { type: "steps"; steps: TimelineStep[]; caption?: string; layout?: "cards" | "journey" }
  | { type: "scope"; rows: CapabilityRow[] }
  | { type: "figures"; items: EvidenceItem[] }
  | { type: "stats"; items: { value: string; label: string }[]; note?: string }
  | { type: "callout"; heading?: string; text: string[] }
  | { type: "tools"; items: string[] }
  | { type: "changes"; items: { change: string; assessment: string }[] }
  | { type: "pairs"; items: { title: string; text: string }[] };

export interface CaseSection {
  id: string;
  title: string;
  blocks: CaseBlock[];
}

/**
 * One project case study. Each page renders its numbered sections in order;
 * nothing is shown as a placeholder. A project with `published: false` gets
 * no page, no sitemap entry and no links.
 */
export interface CaseStudy {
  slug: string;
  published: boolean;
  title: string;
  subtitle: string;
  /** Short category label, e.g. "Independent Research and Innovation". */
  classification: string;
  status: string;
  /** One or two sentences for project cards. */
  summary: string;
  intro: string;
  glance: { label: string; value: string }[];
  /** Real image for the project card; falls back to `cardSteps` as a diagram. */
  cardImage?: { src: string; alt: string; width: number; height: number };
  cardSteps?: TimelineStep[];
  sections: CaseSection[];
  links: { label: string; href: string }[];
  /** At-a-glance summary shown on the Projects page. */
  highlights?: { role: string; question: string; approach: string; outcome: string; tools: string };
  /** Rendered by its own route instead of the shared case-study template. */
  customPage?: boolean;
  /** Full-width gallery of genuine report pages, shown before the sections. */
  showcase?: {
    heading: string;
    intro: string;
    items: { src: string; alt: string; width: number; height: number; title: string }[];
  };
}
