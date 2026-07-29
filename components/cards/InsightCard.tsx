import type { InsightArticle } from "@/types/content";
import { Card } from "@/components/ui/Card";

interface InsightCardProps {
  article: InsightArticle;
  /** Home teaser (topic+title only) omits the teaser sentence. */
  showTeaser?: boolean;
}

export function InsightCard({ article, showTeaser = true }: InsightCardProps) {
  return (
    <Card>
      <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-emerald">
        {article.topic}
      </p>
      <h3 className="mt-3 text-[17px] font-bold leading-snug text-navy">{article.title}</h3>
      {showTeaser && (
        <p className="mt-3 text-[13.5px] leading-relaxed text-text-muted">{article.teaser}</p>
      )}
    </Card>
  );
}
