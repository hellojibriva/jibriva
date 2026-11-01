/*
 * Field Notes. To publish a new note, add an object to `posts` (newest first);
 * the landing page, article route, sitemap and related-notes list pick it up.
 * `date` is optional and only set once a publication date is confirmed.
 */

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  readingMinutes: number;
  date?: string;
  /** Article body: paragraphs, with optional section headings. */
  body: ({ type: "p"; text: string } | { type: "h2"; text: string })[];
};

export const fieldNotes = {
  name: "Field Notes",
  description: "Reflections on public health systems, programme implementation, data, evidence and One Health.",
};

export const posts: Post[] = [
  {
    slug: "from-animal-science-to-public-health",
    title: "From Animal Science to Public Health: My Journey Through Programme Implementation, Data and One Health",
    subtitle: "Getting to know me, the experiences that shaped my work, and the connections I am still exploring.",
    description:
      "How a degree in Animal Science led to public health programme implementation, why data became the thread through my work, and where One Health fits in.",
    category: "Personal Journey · One Health",
    readingMinutes: 4,
    body: [
      { type: "p", text: "I studied Animal Science, but I didn't know exactly where that degree would take me." },
      {
        type: "p",
        text: "My academic background introduced me to animal health, disease, production systems and the relationship between animals and their environment. It gave me an early appreciation of how interconnected health and livelihoods can be. Over time, I began to see that these connections extended beyond animal health into much bigger questions about public health and communities.",
      },
      { type: "h2", text: "Into public health programmes" },
      { type: "p", text: "My professional journey eventually took me into public health programme implementation." },
      {
        type: "p",
        text: "Through my work with the World Health Organization and later with SCIDaR, I gained experience in health programme monitoring, HIV and PMTCT programming, facility reporting, data quality and supporting teams to deliver programme objectives. Today, at PSHAN, I work within the Adopt-A-Health-Facility Programme, supporting monitoring, evaluation, learning and programme performance across primary healthcare facilities.",
      },
      { type: "h2", text: "Data as a thread" },
      { type: "p", text: "Along the way, data became an increasingly important part of my work." },
      {
        type: "p",
        text: "I became interested not just in collecting and reporting numbers, but in understanding what they mean, where gaps exist and how they can inform better decisions. From facility reporting and data-quality improvement to dashboards, analysis and independent research, I have come to appreciate that data is only as useful as the systems that produce it and the decisions it helps people make.",
      },
      {
        type: "p",
        text: "This has shaped how I approach programme implementation. A report should do more than satisfy a reporting requirement. It should help us understand whether activities are happening, where implementation is struggling and what needs to improve.",
      },
      { type: "h2", text: "Back to One Health" },
      { type: "p", text: "Yet my interest in Animal Science never really disappeared." },
      {
        type: "p",
        text: "In fact, it has become part of how I think about public health. The connections between human, animal and environmental health are particularly important in a country like Nigeria, where diseases that cross species boundaries can go undetected or unreported when surveillance systems operate in isolation.",
      },
      {
        type: "p",
        text: "This is one of the reasons I have become increasingly interested in One Health, zoonotic disease surveillance and the relationship between primary healthcare and early disease detection.",
      },
      {
        type: "p",
        text: "My independent work, including an analysis of Nigeria's brucellosis reporting records and the development of OneHealth Hub, reflects my growing interest in these questions. They are also opportunities to bring together my interests in epidemiology, data, technology and public health systems.",
      },
      { type: "h2", text: "Still learning" },
      {
        type: "p",
        text: "I am still learning, researching and finding ways to connect my experience in programme implementation and data with my longer-term interest in epidemiology and disease surveillance.",
      },
      {
        type: "p",
        text: "If there is one thread connecting the different stages of my journey, it is a desire to make information and systems work better for health — from improving the quality of routine programme data to exploring how surveillance can help identify public health threats earlier.",
      },
      { type: "p", text: "I didn't start out with a perfectly mapped career path. But looking back, the pieces are beginning to make sense." },
      { type: "p", text: "And I'm looking forward to where they lead next." },
      { type: "p", text: "Welcome. I'm glad you're here." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
