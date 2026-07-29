import { Section } from "@/components/ui/Section";
import { SectionHeaderRow } from "@/components/ui/SectionHeaderRow";
import { InsightCard } from "@/components/cards/InsightCard";
import { insightsTeaser } from "@/content/home";
import { insights } from "@/content/insights";

export function InsightsTeaser() {
  const teaserInsights = insightsTeaser.slugs
    .map((slug) => insights.find((article) => article.slug === slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  return (
    <Section>
      <SectionHeaderRow
        eyebrow={insightsTeaser.eyebrow}
        h2={insightsTeaser.h2}
        linkLabel={insightsTeaser.linkLabel}
        linkHref="/insights"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {teaserInsights.map((article) => (
          <InsightCard key={article.slug} article={article} showTeaser={false} />
        ))}
      </div>
    </Section>
  );
}
