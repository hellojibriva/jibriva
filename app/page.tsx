import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OurExperience } from "@/components/sections/OurExperience";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { AreasOfExpertise } from "@/components/sections/AreasOfExpertise";
import { OurApproach } from "@/components/sections/OurApproach";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { OurWorkTeaser } from "@/components/sections/OurWorkTeaser";
import { ResourcesPublications } from "@/components/sections/ResourcesPublications";
import { WhyJibriva } from "@/components/sections/WhyJibriva";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { FinalCta } from "@/components/sections/FinalCta";
import { hero } from "@/content/home";
import { homeApproachSteps } from "@/content/timeline";
import { buildMetadata } from "@/lib/metadata";
import { organizationGraph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Jibriva | One Health Consulting, Research & Digital Solutions",
  description:
    "Jibriva is a Nigerian One Health consultancy helping NGOs, governments, researchers and development partners strengthen programmes through research, monitoring & evaluation, digital systems and capacity strengthening.",
  path: "/",
  ogDescription:
    "Helping NGOs, governments, researchers and development partners strengthen programmes across the One Health ecosystem.",
  keywords: [
    "One Health Nigeria",
    "Monitoring and Evaluation",
    "Research Consultancy",
    "NGO Consultant",
    "Digital Health",
    "Public Health",
    "Programme Evaluation",
    "Dashboard Development",
    "Research Support",
    "Data Visualization",
    "Health Information Systems",
    "Development Consulting",
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph()) }}
      />
      <Navbar activePath="/" />
      <main>
        <Hero
          variant="home"
          eyebrow={hero.eyebrow}
          h1={hero.h1}
          paragraph={hero.paragraph}
          buttons={[
            { label: "Partner With Jibriva", href: "/contact", variant: "primary" },
            { label: "View Services", href: "/services", variant: "secondary" },
          ]}
        />
        <OurExperience />
        <AboutSnapshot />
        <WhoWeWorkWith />
        <ServicesTeaser />
        <AreasOfExpertise />
        <OurApproach
          variant="home"
          eyebrow="Our Approach"
          h2="A disciplined path from evidence to impact."
          steps={homeApproachSteps}
        />
        <FeaturedProject />
        <OurWorkTeaser />
        <ResourcesPublications />
        <WhyJibriva />
        <InsightsTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
