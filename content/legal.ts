/*
 * DRAFTED — review before launch.
 *
 * CONTENT_GUIDE.md specifies the section headers for both Privacy and Terms
 * verbatim but defers full body text to `privacy.dc.html` / `terms.dc.html`
 * sources not included in the JIBRIVA-HANDOFF package. The intro paragraph
 * and "Information We Collect" / "Use of the Site" opening paragraphs below
 * are transcribed from the approved page-screenshots (assets/page-screenshots
 * /privacy.png and /terms.png) and are real, client-approved copy. Every
 * other paragraph is standard consultancy-site legal boilerplate drafted to
 * match that voice and the confirmed section headers — review before launch.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "July 2026",
  intro:
    'Jibriva ("we", "us", "our") respects the privacy of everyone who visits jibriva.com. This policy explains what information we collect, how we use it, and the choices you have.',
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "When you submit our contact form, we collect the information you provide directly: your name, organization, email address, subject and project description. We do not require account creation and do not collect payment information through this site.",
        "Like most websites, our hosting and analytics infrastructure may automatically log standard technical information such as your IP address, browser type and pages visited, used only to keep the site secure and understand how it's used.",
      ],
    },
    {
      heading: "How We Use Information",
      body: [
        "We use the information you submit to respond to your inquiry, follow up on potential engagements, and keep a record of our correspondence. We do not sell, rent or trade your information to third parties, and we do not use it for purposes beyond responding to your inquiry unless you separately agree to that use.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "We retain contact form submissions for as long as needed to respond to your inquiry and maintain a reasonable business record, after which they are deleted or anonymised. You may request earlier deletion at any time by contacting us.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "Our site links to third-party platforms, including social media profiles and the One Health Hub platform. We aren't responsible for the privacy practices of those third-party sites, and we encourage you to review their own policies.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You can ask us at any time what information we hold about you, request a correction, or request that we delete it. To do so, email us at the address below.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        'We may update this policy from time to time to reflect changes in our practices. The "Last updated" date at the top of this page reflects the most recent revision.',
      ],
    },
    {
      heading: "Contact",
      body: ["Questions about this policy can be sent to hello.jibriva@gmail.com."],
    },
  ] satisfies LegalSection[],
};

export const termsOfService = {
  title: "Terms of Service",
  lastUpdated: "July 2026",
  intro:
    'These terms govern your use of jibriva.com (the "Site"), operated by Jibriva. By accessing the Site, you agree to these terms.',
  sections: [
    {
      heading: "Use of the Site",
      body: [
        "The Site and its content are provided for general informational purposes about Jibriva's services and capabilities. You may not use the Site for any unlawful purpose or in any way that could damage or impair its functionality.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "All content on the Site — including text, graphics, logos and the Jibriva name and marks — is the property of Jibriva unless otherwise stated, and may not be copied, reproduced or reused without our written permission.",
      ],
    },
    {
      heading: "No Professional Advice",
      body: [
        "Content on the Site is provided for general informational purposes only and does not constitute professional, technical or programmatic advice for your specific circumstances. Engage Jibriva directly for advice tailored to your organisation's needs.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "The Site may link to third-party websites and platforms, including One Health Hub and our social media profiles. We aren't responsible for the content or practices of any third-party site.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        'The Site and its content are provided "as is" without warranties of any kind. To the fullest extent permitted by law, Jibriva is not liable for any loss or damage arising from your use of the Site.',
      ],
    },
    {
      heading: "Governing Law",
      body: [
        "These terms are governed by the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.",
      ],
    },
    {
      heading: "Changes",
      body: [
        'We may update these terms from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the revised terms.',
      ],
    },
    {
      heading: "Contact",
      body: ["Questions about these terms can be sent to hello.jibriva@gmail.com."],
    },
  ] satisfies LegalSection[],
};
