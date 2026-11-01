import type { NavItem } from "@/types/content";

export const siteConfig = {
  name: "Abi Precious Jibrin",
  title: "Public Health Programme & Systems Specialist",
  message: "Strengthening public health programmes through implementation, evidence and better systems.",
  description:
    "Abi Precious Jibrin is a Public Health Programme & Systems Specialist working in programme implementation, MEAL, health information systems and data quality, and research, with a developing specialisation in One Health and integrated disease surveillance.",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jibriva.com",
  contact: {
    email: "jibrinabi@gmail.com",
    whatsapp: "https://wa.me/2348139583245",
    whatsappDisplay: "+234 813 958 3245",
  },
  social: {
    linkedin: "https://linkedin.com/in/abijibrin",
    github: "https://github.com/hellojibriva",
  },
  links: {
    oneHealthHub: "https://onehealth-hub.vercel.app/",
    oneHealthHubRepo: "https://github.com/hellojibriva/onehealth-hub",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavItem[],
} as const;
