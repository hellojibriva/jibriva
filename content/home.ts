import type { ResourceItem, ValueProp } from "@/types/content";

export const hero = {
  eyebrow: "One Health · Research · Digital Solutions",
  h1: "One Health Solutions for Health, Research & Social Impact",
  paragraph:
    "Jibriva partners with NGOs, governments, universities, researchers and development organisations to design digital systems, strengthen monitoring and evaluation, build research capacity and improve programme performance across the One Health ecosystem.",
};

export const ourExperience = {
  eyebrow: "Our Experience",
  h2: "Experience Across the One Health Ecosystem",
  paragraph:
    "Jibriva's expertise is built through practical, hands-on work across One Health, public health, monitoring & evaluation, research, GIS and digital innovation. We work directly with programme teams, not from the outside looking in.",
  cards: [
    {
      title: "One Health",
      desc: "Designing and advising on programmes that span human, animal and environmental health.",
    },
    {
      title: "Public Health",
      desc: "Supporting programme teams working on prevention, surveillance and service delivery.",
    },
    {
      title: "Monitoring & Evaluation",
      desc: "Building frameworks and dashboards that programme teams actually use to make decisions.",
    },
    {
      title: "Research",
      desc: "Supporting studies and evidence reviews that hold up to scrutiny and inform real choices.",
    },
    {
      title: "GIS",
      desc: "Applying spatial analysis to planning, surveillance and resource allocation.",
    },
    {
      title: "Digital Innovation",
      desc: "Building tools that fit how teams already work, not the other way round.",
    },
  ] satisfies ValueProp[],
};

export const aboutSnapshot = {
  eyebrow: "About Jibriva",
  h2: "Health challenges don't stay in one lane.",
  paragraph:
    "The biggest health and development challenges cross the boundaries between people, animals and the environment — and most programmes aren't set up to see that clearly. Jibriva brings together expertise in One Health, public health, monitoring & evaluation, research, GIS and digital solutions to help organisations design stronger programmes and make better use of evidence, working as implementation partners rather than outside advisors.",
  linkLabel: "Learn about Jibriva →",
};

export const whoWeWorkWith = {
  eyebrow: "Who We Work With",
  h2: "Partners across the One Health ecosystem.",
  paragraph:
    "Jibriva is built to support the organisations doing this work day to day — from government agencies and development partners to universities, research institutions and healthcare providers.",
  list: [
    "Governments",
    "NGOs",
    "Development Partners",
    "Universities",
    "Research Institutions",
    "Public Health Programmes",
    "Animal Health Programmes",
    "Environmental Organisations",
    "Foundations",
    "Primary Healthcare",
    "International Development",
  ],
};

export const whatWeDo = {
  eyebrow: "What We Do",
  h2: "One Health first. Everything else supports it.",
  linkLabel: "Explore Our Services →",
  cards: [
    {
      title: "One Health Consulting",
      desc: "Programme design, strategy and surveillance systems built for multisector collaboration.",
    },
    {
      title: "Research & Evidence",
      desc: "Research design, evidence synthesis and reporting grounded in rigorous methods.",
    },
    {
      title: "Monitoring, Evaluation & Learning",
      desc: "Frameworks and dashboards that turn programme data into decisions teams can act on.",
    },
    {
      title: "Digital Solutions",
      desc: "Dashboards, GIS platforms and internal tools that support the programme — never replace it.",
    },
    {
      title: "Capacity Strengthening",
      desc: "Training that helps teams sustain their own M&E, reporting and digital systems.",
    },
  ] satisfies ValueProp[],
};

export const areasOfExpertise = {
  eyebrow: "Areas of Expertise",
  h2: "The disciplines behind every engagement.",
  grid: [
    "One Health",
    "Public Health",
    "Monitoring & Evaluation",
    "Research & Evidence Synthesis",
    "GIS & Spatial Analysis",
    "Programme Design",
    "Health Information Systems",
    "Capacity Strengthening",
    "Digital Solutions",
  ],
};

export const featuredProject = {
  badge: "Flagship Platform",
  eyebrow: "Featured Project",
  h2: "One Health Hub",
  paragraph:
    "One Health Hub is Jibriva's flagship digital platform supporting surveillance, GIS, research, dashboards and evidence-based decision-making across the human, animal and environmental health sectors.",
  exploreLabel: "Explore Platform",
  sourceLabel: "View Source Code",
  placeholderCaption: "product screenshot — One Health Hub",
};

export const ourWorkTeaser = {
  eyebrow: "Projects",
  h2: "Our project archive, taking shape.",
  linkLabel: "Explore Our Work →",
  slugs: ["one-health-hub", "monitoring-evaluation-dashboard", "gis-dashboard"],
};

export const resourcesPublications = {
  eyebrow: "Resources & Publications",
  h2: "Our growing library of knowledge products.",
  items: [
    {
      name: "Operationalising One Health at the Primary Healthcare Level",
      href: "/insights",
      linkLabel: "Read",
    },
    { name: "Understanding One Health Surveillance", href: "/insights", linkLabel: "Read" },
    { name: "Why GIS Matters in Disease Surveillance", href: "/insights", linkLabel: "Read" },
    { name: "Building Better Monitoring Systems", href: "/insights", linkLabel: "Read" },
    { name: "Improving Data Quality", href: "/insights", linkLabel: "Read" },
    {
      name: "One Health Hub Documentation",
      href: "https://onehealth-hub.vercel.app/",
      linkLabel: "Explore",
    },
    { name: "Research Publications (Coming Soon)", linkLabel: "Available Soon" },
    { name: "Toolkits (Coming Soon)", linkLabel: "Available Soon" },
  ] satisfies ResourceItem[],
};

export const insightsTeaser = {
  eyebrow: "Insights",
  h2: "Perspectives from our team.",
  linkLabel: "Read Our Insights →",
  slugs: [
    "operationalising-one-health-primary-healthcare",
    "designing-better-monitoring-systems",
    "role-of-gis-in-disease-surveillance",
  ],
};
