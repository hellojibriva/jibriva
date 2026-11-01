import { siteConfig } from "@/config/site";

/*
 * Plain-language policies for a personal website. The contact form does not
 * send data to a server: it opens the visitor's own email app with the message
 * pre-filled. Update "Information I Collect" if a form backend is added.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "November 2026",
  intro: `This is the personal website of ${siteConfig.name}. I respect the privacy of everyone who visits it. This policy explains what information is collected, how I use it, and the choices you have.`,
  sections: [
    {
      heading: "Information I Collect",
      body: [
        "The contact form on this site does not store or transmit your details itself. When you submit it, it opens your own email app with your message prepared, and I receive only what you choose to send by email: typically your name, email address, organisation and message.",
        "Like most websites, the hosting provider may automatically log standard technical information such as your IP address, browser type and the pages you visit, used to keep the site secure and working.",
      ],
    },
    {
      heading: "How I Use Information",
      body: [
        "I use the information you send me only to read and reply to your message and to keep a record of our correspondence. I do not sell, rent or share your information with third parties.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "I keep correspondence for as long as it is needed to respond to you and maintain a reasonable record, and you may ask me to delete it at any time.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "This site links to other websites, including LinkedIn, GitHub and the OneHealth Hub prototype. I am not responsible for their privacy practices, and I encourage you to review their own policies.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You can ask me at any time what information I hold about you, request a correction, or request that I delete it, by emailing me at the address below.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        'I may update this policy from time to time. The "Last updated" date at the top of this page shows the most recent revision.',
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about this policy can be sent to ${siteConfig.contact.email}.`],
    },
  ] satisfies LegalSection[],
};

export const termsOfService = {
  title: "Terms of Use",
  lastUpdated: "November 2026",
  intro: `These terms govern your use of this website (the "Site"), the personal website of ${siteConfig.name}. By using the Site, you agree to these terms.`,
  sections: [
    {
      heading: "Use of the Site",
      body: [
        "The Site provides information about my professional background, experience and work. You may not use it for any unlawful purpose or in any way that could damage or impair it.",
      ],
    },
    {
      heading: "Content",
      body: [
        "Unless otherwise stated, the text and images on the Site are my own and may not be copied or reused without my permission.",
      ],
    },
    {
      heading: "No Professional Advice",
      body: [
        "Content on the Site is general information and does not constitute professional, technical or programmatic advice for your specific circumstances.",
      ],
    },
    {
      heading: "OneHealth Hub",
      body: [
        "OneHealth Hub is a research prototype. It is not a production surveillance system and must not be relied on for real-world surveillance, alerting or public health decisions.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "The Site links to third-party websites. I am not responsible for their content or practices.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        'The Site and its content are provided "as is" without warranties of any kind. To the fullest extent permitted by law, I am not liable for any loss or damage arising from your use of the Site.',
      ],
    },
    {
      heading: "Governing Law",
      body: ["These terms are governed by the laws of the Federal Republic of Nigeria."],
    },
    {
      heading: "Changes",
      body: [
        'I may update these terms from time to time. The "Last updated" date at the top of this page shows the most recent revision.',
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms can be sent to ${siteConfig.contact.email}.`],
    },
  ] satisfies LegalSection[],
};
