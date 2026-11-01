import { siteConfig } from "@/config/site";
import type { CaseStudy } from "@/types/content";

/*
 * Sources: the OneHealth Hub repository README ("What is real, and what is
 * demonstrated"), Abi's CV of 31 Oct 2026, and the live prototype. Screenshots
 * were captured from the live app on 1 Nov 2026; the dashboard map and the
 * community-report list were deliberately not captured (map tiles currently
 * show a provider "API key required" notice; reports show reporter names).
 * Rendered by its own route (app/projects/onehealth-hub). Keep the
 * Implemented / Concept distinction and the limitations. USSD reporting is
 * implemented and tested in the Africa's Talking Sandbox only: never describe
 * it as concept-only, and never as a live production service with real users.
 */
const IMG = "/projects/onehealth-hub";

export const oneHealthHub: CaseStudy = {
  slug: "onehealth-hub",
  published: true,
  customPage: true,
  title: "OneHealth Hub",
  subtitle: "Connecting community signals to integrated surveillance.",
  classification: "One Health & Digital Surveillance",
  status: "Research prototype",
  highlights: {
    role: "Concept, reporting design and build",
    question: "How might a community observation move into an integrated surveillance picture, and back to that community?",
    approach: "A working prototype with community reporting, sector-tagged events and zone alerts",
    outcome: "Research prototype with a dashboard, field form and multilingual alerts",
    tools: "Next.js, Supabase, Leaflet, GIS mapping",
  },
  summary:
    "An independent prototype exploring how digital tools, geospatial information and community-level reporting could support integrated disease surveillance and One Health approaches in Nigeria and across Africa.",
  intro:
    "An independent research and innovation prototype exploring how community-based reporting, geospatial surveillance and multilingual risk communication could work together within an integrated One Health approach.",
  glance: [],
  cardImage: {
    src: `${IMG}/dashboard-alerts.png`,
    alt: "OneHealth Hub dashboard showing community health alerts in Hausa, Yoruba, Igbo and Pidgin",
    width: 1440,
    height: 900,
  },
  sections: [],
  links: [
    { label: "Open the live prototype", href: siteConfig.links.oneHealthHub },
    { label: "View source code", href: siteConfig.links.oneHealthHubRepo },
  ],
};

export const oneHealthStory = {
  tech: ["Next.js", "Supabase", "Leaflet", "GIS mapping"],
  challenge: {
    heading: "The public health challenge",
    text: "Human, animal and environmental health information is often collected through separate reporting channels. This can make it difficult to connect early signals across sectors and communicate emerging risks to the communities concerned.",
    question:
      "How might a community observation move from a basic reporting channel into an integrated surveillance picture, and how could relevant information return to that community?",
    distinction: [
      {
        term: "Community-reported signal",
        text: "A symptom or sign someone observed, such as abortion in livestock. It carries a sector and a location, and waits for field verification.",
      },
      {
        term: "Disease event",
        text: "A named diagnosis or hazard from a fixed vocabulary. A reported symptom is never counted as a confirmed diagnosis.",
      },
    ],
  },
  journey: [
    { name: "Community reporting", text: "A community observation enters through a field reporting pathway." },
    { name: "Integrated surveillance", text: "Reports and events are organised across human, animal and environmental sectors." },
    { name: "Situational awareness", text: "GIS mapping, filters and dashboard views support exploration of the records." },
    { name: "Risk communication", text: "Zone-specific messages can be prepared and communicated in relevant languages." },
  ],
  shots: [
    {
      src: `${IMG}/dashboard-alerts.png`,
      width: 1440,
      height: 900,
      title: "Surveillance dashboard",
      caption: "Dashboard with community health alerts and summary tiles.",
      alt: "Dashboard with seasonal community health alerts and summary tiles for outbreaks, severity, alerts and events",
    },
    {
      src: `${IMG}/welcome-language.png`,
      width: 1440,
      height: 900,
      title: "Choosing a language",
      caption: "Entry screen: five languages.",
      alt: "OneHealth Hub welcome screen asking the user to choose English, Hausa, Yoruba, Igbo or Pidgin",
    },
    {
      src: `${IMG}/field-form.png`,
      width: 1440,
      height: 900,
      title: "Field reporting",
      caption: "Field form, online or offline.",
      alt: "Field data collection form with disease, sector, severity, location, state, LGA, ward and coordinates fields",
    },
    {
      src: `${IMG}/rcce-alerts.png`,
      width: 1440,
      height: 900,
      title: "Risk communication",
      caption: "Alerts by geopolitical zone and language.",
      alt: "Risk communication screen listing sent seasonal alerts by zone and language, with compose and delivery history tabs",
    },
  ],
  implemented: [
    { name: "Surveillance dashboard and GIS map" },
    { name: "Sector and severity filters" },
    { name: "Online and offline field reporting, with browser-based queueing and synchronisation" },
    { name: "Risk communication and community engagement interface" },
    { name: "Language selection: English, Hausa, Yoruba, Igbo and Pidgin" },
    {
      name: "USSD reporting",
      note: "Implemented and tested using the Africa's Talking Sandbox. The workflow demonstrates how users can interact with the surveillance platform through USSD menus for reporting and accessing relevant information.",
      status: "Sandbox-tested; production short-code subscription and live deployment are not yet established.",
    },
  ] as { name: string; note?: string; status?: string }[],
  concept: [
    {
      name: "SORMAS interoperability",
      note: "Exports a SORMAS-shaped JSON file for manual import; no live connection.",
    },
  ],
  contribution:
    "I developed the project concept, defined the reporting pathway and record taxonomy, and built the prototype. The work allowed me to explore how integrated surveillance, community-based reporting, GIS and risk communication could be brought together in a practical public health tool.",
  limitations: {
    text: "OneHealth Hub is an independent research prototype, not a deployed surveillance system. It has not been validated in a live programme. USSD reporting has been tested only in the Africa's Talking Sandbox, with no production short code, and SORMAS interoperability is conceptual; neither is connected to live national systems.",
    future: [
      "Field verification and review by surveillance practitioners.",
      "A production USSD short code and agreed interoperability arrangements.",
    ],
  },
};
