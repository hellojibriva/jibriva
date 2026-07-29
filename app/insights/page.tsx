import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { InsightCard } from "@/components/cards/InsightCard";
import { insights } from "@/content/insights";

export default function InsightsPage() {
  return (
    <>
      <Navbar activePath="/insights" />
      <main>
        <Hero
          eyebrow="Insights"
          h1="Perspectives from our team."
          paragraph="New pieces are in development. Here's a preview of what's coming."
        />

        <Section className="pt-0">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {insights.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
