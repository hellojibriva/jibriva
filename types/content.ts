export interface ServiceItem {
  name: string;
  value: string;
}

export interface ServiceCategory {
  name: string;
  desc: string;
  items: ServiceItem[];
}

export interface Project {
  slug: string;
  tag: string;
  name: string;
  overview: string;
  problem: string;
  tech: string[];
  status: "Live" | "In Development" | "Coming Soon";
  href?: string;
}

export interface InsightArticle {
  slug: string;
  topic: string;
  title: string;
  teaser: string;
  coverImage?: string;
  author?: string;
  date?: string;
  readingTime?: string;
  categories?: string[];
  tags?: string[];
  body?: string; // MDX, once articles are published
}

export interface ValueProp {
  title: string;
  desc: string;
}

export interface TimelineStep {
  name: string;
  desc: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  desc: string;
}

export interface ThoughtLeadershipItem {
  type: string;
  title: string;
  status: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string | null;
}

export interface Sector {
  name: string;
}

export interface Tool {
  name: string;
}

export interface ResourceItem {
  name: string;
  href?: string;
  linkLabel?: string;
}

// Not currently used — the brand deliberately avoids invented quotes/clients.
// Add only once real, attributable testimonials exist.
export interface Testimonial {
  quote: string;
  name: string;
  org: string;
  role?: string;
}

// Not currently used — FAQ column entries are "Coming Soon" placeholders today.
export interface FAQ {
  question: string;
  answer: string;
}
