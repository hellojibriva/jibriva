import type { LegalSection } from "@/content/legal";

interface LegalArticleProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalArticle({ title, lastUpdated, intro, sections }: LegalArticleProps) {
  return (
    <article className="mx-auto max-w-[720px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,9vw,100px)] box-content">
      <h1 className="text-[clamp(32px,4vw,44px)] font-extrabold tracking-[-0.02em] text-navy">{title}</h1>
      <p className="mt-3 text-[14px] text-text-muted">Last updated: {lastUpdated}</p>
      <p className="mt-8 text-[16px] leading-relaxed text-text-muted">{intro}</p>

      {sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-[20px] font-bold text-navy">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-3 text-[15.5px] leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
