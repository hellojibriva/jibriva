import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceCategoryCard } from "@/components/cards/ServiceCategoryCard";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar activePath="/services" />
      <main>
        <Hero
          eyebrow="Services"
          h1="One Health expertise, applied end to end."
          paragraph="From strategy and research through digital delivery and capacity strengthening — technology supports our work, it doesn't define it."
        />
        <Section className="pt-0">
          {services.map((category) => (
            <ServiceCategoryCard key={category.name} category={category} />
          ))}
        </Section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
