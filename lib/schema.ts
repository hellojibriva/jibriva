import { siteConfig } from "@/config/site";

/** Organization + ProfessionalService @graph — rendered once, on the Home page. */
export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: `${siteConfig.domain}/`,
        logo: `${siteConfig.domain}/icons/favicon.png`,
        description:
          "Jibriva is a One Health consultancy helping NGOs, governments and development partners strengthen programmes through research, monitoring & evaluation, digital systems and capacity strengthening.",
        email: siteConfig.contact.email,
        sameAs: [
          "https://www.instagram.com/jibrivastudio",
          "https://www.pinterest.com/Jibriva/",
          siteConfig.social.github,
          siteConfig.social.linkedin,
        ],
      },
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        image: `${siteConfig.domain}/og-image.png`,
        url: `${siteConfig.domain}/`,
        email: siteConfig.contact.email,
        address: { "@type": "PostalAddress", addressCountry: "NG" },
        areaServed: "Worldwide",
        description:
          "One Health consulting, research & evidence, monitoring, evaluation & learning, digital solutions and capacity strengthening for NGOs, governments and research institutions.",
      },
    ],
  };
}

/** Person schema for the founder, rendered on the About page. */
export function founderPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abi Precious Jibrin",
    jobTitle: "Founder & Principal Consultant",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${siteConfig.domain}/`,
    },
    url: `${siteConfig.domain}/about`,
  };
}
