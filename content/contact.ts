export const contactHero = {
  eyebrow: "Contact",
  h1: "Get in touch",
  intro:
    "Whether it's a professional opportunity, technical support or a research collaboration, I'd be glad to hear from you.",
};

export const enquiryTypes = [
  "Professional opportunity",
  "Technical support",
  "Research / One Health collaboration",
  "Other",
] as const;

export const contactForm = {
  fields: {
    name: { label: "Name", placeholder: "Your full name" },
    organization: { label: "Organisation", placeholder: "Optional" },
    email: { label: "Email", placeholder: "you@example.org" },
    enquiryType: { label: "Type of enquiry" },
    subject: { label: "Subject", placeholder: "What is this about?" },
    description: {
      label: "Message",
      placeholder: "Tell me a little about the role, programme or idea.",
    },
  },
  submitLabel: "Send message",
  success: {
    heading: "Your email app should now be open.",
    body: "Your message has been prepared in a new email. Please press send there to reach me. If nothing opened, you can email me directly at",
  },
};

export const waysToWork = {
  h2: "Ways to work together",
  items: [
    {
      title: "A role on your team",
      desc: "Programme, MEAL or health information positions.",
    },
    {
      title: "Short-term support",
      desc: "A performance review, a data-quality check or a piece of analysis.",
    },
    {
      title: "Research collaboration",
      desc: "Surveillance, epidemiological analysis or One Health work.",
    },
  ],
};
