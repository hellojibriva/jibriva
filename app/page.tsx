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

export default function Home() {
  return (
    <>
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
