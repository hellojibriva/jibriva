import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";
import { closingCta } from "@/content/home";

export function ClosingCta() {
  return (
    <Section
      background="dark"
      backdrop="static"
      contentClassName="flex flex-col items-center text-center"
    >
      <h2 className="max-w-[760px] text-[clamp(26px,3.4vw,36px)] font-bold text-white">{closingCta.h2}</h2>
      <p className="mt-5 max-w-[600px] text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
        {closingCta.paragraph}
      </p>
      <Button href="/contact" tone="dark" className="mt-8">
        {closingCta.primaryLabel}
      </Button>
      <ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[14.5px]">
        <li>
          <SocialIcon platform="email" href={`mailto:${siteConfig.contact.email}`} label="Email" className="text-white/70 hover:text-gold" />
        </li>
        <li>
          <SocialIcon platform="linkedin" href={siteConfig.social.linkedin} label="LinkedIn" className="text-white/70 hover:text-gold" />
        </li>
        <li>
          <SocialIcon
            platform="whatsapp"
            href={siteConfig.contact.whatsapp}
            label="WhatsApp"
            ariaLabel="Chat on WhatsApp (opens in a new tab)"
            className="text-white/70 hover:text-gold"
          />
        </li>
      </ul>
    </Section>
  );
}
