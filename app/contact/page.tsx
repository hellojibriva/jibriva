import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactHero } from "@/content/contact";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <>
      <Navbar activePath="/contact" showCta={false} />
      <main>
        <Hero eyebrow={contactHero.eyebrow} h1={contactHero.h1} paragraph={contactHero.intro} />

        <Section className="pt-0">
          <div className="grid grid-cols-[1.4fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-8">
            <ContactForm />

            <div className="space-y-6">
              <div className="border border-border p-7">
                <h2 className="text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
                  Direct Contact
                </h2>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-4 block text-[15px] text-text hover:text-navy"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="mt-2 text-[15px] text-text-muted">{siteConfig.location}</p>
                <Button href={siteConfig.contact.whatsapp} variant="secondary" className="mt-5">
                  Chat on WhatsApp
                </Button>
              </div>

              <div className="border border-border p-7">
                <h2 className="text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
                  Follow
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  <SocialIcon
                    platform="github"
                    href={siteConfig.social.github}
                    label="GitHub"
                    className="text-[14.5px] text-text hover:text-navy"
                  />
                  <SocialIcon
                    platform="linkedin"
                    href={siteConfig.social.linkedin}
                    label="LinkedIn"
                    className="text-[14.5px] text-text hover:text-navy"
                  />
                  <SocialIcon
                    platform="instagram"
                    href={siteConfig.social.instagram}
                    label="@jibriva"
                    className="text-[14.5px] text-text hover:text-navy"
                  />
                  <SocialIcon
                    platform="pinterest"
                    href={siteConfig.social.pinterest}
                    label="@jibriva"
                    className="text-[14.5px] text-text hover:text-navy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
