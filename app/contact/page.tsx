import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactHero, waysToWork } from "@/content/contact";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Abi Precious Jibrin about professional opportunities, technical support or research and One Health collaboration.",
  path: "/contact",
});

const directLinks = [
  { platform: "email" as const, href: `mailto:${siteConfig.contact.email}`, label: siteConfig.contact.email, kind: "Email" },
  { platform: "website" as const, href: siteConfig.domain, label: "jibriva.com", kind: "Website" },
  { platform: "linkedin" as const, href: siteConfig.social.linkedin, label: "linkedin.com/in/abijibrin", kind: "LinkedIn" },
  { platform: "whatsapp" as const, href: siteConfig.contact.whatsapp, label: siteConfig.contact.whatsappDisplay, kind: "WhatsApp" },
  { platform: "github" as const, href: siteConfig.social.github, label: "github.com/hellojibriva", kind: "GitHub" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactHero.eyebrow} h1={contactHero.h1} paragraph={contactHero.intro} />

      <Section className="pt-0">
        <div className="grid grid-cols-[1.5fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          <ContactForm />

          <aside className="h-fit border border-border bg-ivory p-7">
            <h2 className="label-heading text-[14px] font-bold uppercase tracking-[0.06em] text-navy">Reach me directly</h2>
            <ul className="mt-5 flex flex-col gap-5">
              {directLinks.map((link) => (
                <li key={link.platform}>
                  <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-text">{link.kind}</p>
                  <SocialIcon
                    platform={link.platform}
                    href={link.href}
                    label={link.label}
                    className="break-all text-[15px] text-text hover:text-navy"
                  />
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-5 text-[13.5px] leading-relaxed text-text-muted">
              The email link and the form both open your own email app with a message to me; nothing is sent until you
              press send there.
            </p>
          </aside>
        </div>
      </Section>

      {/* Ways to work together (moved here from the retired Professional Support page). */}
      <Section background="band">
        <h2 className="text-[clamp(28px,3.4vw,40px)] leading-[1.08] text-navy">{waysToWork.h2}</h2>
        <div className="mt-8 grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {waysToWork.items.map((item) => (
            <div key={item.title} className="border-t-2 border-gold pt-5">
              <h3 className="text-[19px] text-navy">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
