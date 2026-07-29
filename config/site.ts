import type { FooterLink, NavItem } from "@/types/content";

export const siteConfig = {
  name: "Jibriva",
  tagline: "One Health · Research · Digital Solutions",
  description:
    "Jibriva is a Nigerian One Health consultancy helping NGOs, governments, universities and development partners strengthen health programmes through research, monitoring & evaluation, GIS, digital solutions and capacity strengthening.",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jibriva.com",
  location: "Nigeria",
  contact: {
    email: "hello.jibriva@gmail.com",
    whatsapp: "https://wa.me/2348139583245",
  },
  social: {
    github: "https://github.com/hellojibriva",
    linkedin: "https://linkedin.com/in/abijibrin",
    instagram: "https://www.instagram.com/jibrivastudio?igsh=aWg4emZ1ZnJib3Zi",
    pinterest: "https://www.pinterest.com/Jibriva/",
    // Instagram & Pinterest are always DISPLAYED as "@jibriva" regardless of the raw URL.
  },
  links: {
    oneHealthHub: "https://onehealth-hub.vercel.app/",
    oneHealthHubRepo: "https://github.com/hellojibriva/onehealth-hub",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/our-work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  footer: {
    explore: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Our Work", href: "/our-work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
    services: [
      "One Health Strategy",
      "Research & Evidence",
      "Monitoring & Evaluation",
      "Surveillance Systems",
      "Data Intelligence",
      "Capacity Strengthening",
    ], // all link to /services today (no sub-anchors yet)
    resources: [
      { label: "Insights", href: "/insights" },
      { label: "Sectors & Tools", href: "/expertise" },
      { label: "Case Studies", href: "/our-work" },
      { label: "Publications (Coming Soon)", href: null },
      { label: "FAQ (Coming Soon)", href: null },
    ] satisfies FooterLink[],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ] satisfies NavItem[],
  },
} as const;
