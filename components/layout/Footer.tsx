import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Wordmark } from "@/components/ui/Wordmark";

const connectLinks = [
  { platform: "email" as const, href: `mailto:${siteConfig.contact.email}`, label: "Email" },
  { platform: "linkedin" as const, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { platform: "whatsapp" as const, href: siteConfig.contact.whatsapp, label: "WhatsApp", ariaLabel: "Chat on WhatsApp (opens in a new tab)" },
  { platform: "github" as const, href: siteConfig.social.github, label: "GitHub profile" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-deep print:hidden px-[clamp(20px,5vw,64px)] pt-14 pb-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(240px,2fr)_1fr_1fr] gap-10 max-md:grid-cols-1">
        <div>
          <Wordmark tone="dark" />
          <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-white/60">
            {siteConfig.message}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="label-heading mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white">Pages</h2>
          <ul className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[14px] text-white/60 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-heading mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white">Connect</h2>
          <ul className="flex flex-col gap-3">
            {connectLinks.map((link) => (
              <li key={link.platform}>
                <SocialIcon
                  platform={link.platform}
                  href={link.href}
                  label={link.label}
                  ariaLabel={"ariaLabel" in link ? link.ariaLabel : undefined}
                  className="text-[14px] text-white/60 hover:text-white"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/50">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <p>
          {siteConfig.legal.map((item, i) => (
            <span key={item.href}>
              {i > 0 && " · "}
              <Link href={item.href} className="hover:text-white/80">
                {item.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
