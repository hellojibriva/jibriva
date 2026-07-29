import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface FooterProps {
  variant?: "full" | "minimal";
}

const connectLinks = [
  { platform: "github" as const, href: siteConfig.social.github, label: "GitHub" },
  { platform: "linkedin" as const, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { platform: "instagram" as const, href: siteConfig.social.instagram, label: "@jibriva" },
  { platform: "pinterest" as const, href: siteConfig.social.pinterest, label: "@jibriva" },
  { platform: "whatsapp" as const, href: siteConfig.contact.whatsapp, label: "Chat on WhatsApp" },
];

export function Footer({ variant = "full" }: FooterProps) {
  if (variant === "minimal") {
    return (
      <footer className="border-t border-white/10 bg-navy px-[clamp(24px,5vw,64px)] py-8">
        <p className="text-center text-[13px] text-white/40">
          Copyright &copy; 2026 Jibriva.
        </p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-navy px-[clamp(24px,5vw,64px)] pt-16 pb-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-[6px] bg-neutral p-[6px]">
              <Image src="/logos/logo-mark.png" alt="Jibriva" width={22} height={22} />
            </span>
            <span className="text-base font-bold text-white">Jibriva</span>
          </Link>
          <p className="mb-2 text-[13px] font-semibold text-white/60">{siteConfig.tagline}</p>
          <p className="text-[13.5px] leading-relaxed text-white/50">
            Helping organizations design stronger programmes through evidence, technology and
            collaboration.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            {siteConfig.footer.explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[13.5px] text-white/60 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {siteConfig.footer.services.map((label) => (
              <li key={label}>
                <Link href="/services" className="text-[13.5px] text-white/60 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Resources
          </h3>
          <ul className="flex flex-col gap-3">
            {siteConfig.footer.resources.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} className="text-[13.5px] text-white/60 hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[13.5px] text-white/35">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Connect
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[13.5px] text-white/60 hover:text-white"
              >
                Email
              </a>
            </li>
            {connectLinks.map((link) => (
              <li key={link.platform}>
                <SocialIcon
                  platform={link.platform}
                  href={link.href}
                  label={link.label}
                  className="text-[13.5px] text-white/60 hover:text-white"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
        <p className="text-[13px] text-white/40">Copyright &copy; 2026 Jibriva.</p>
        <p className="text-[13px] text-white/40">
          {siteConfig.footer.legal.map((item, i) => (
            <span key={item.href}>
              {i > 0 && " · "}
              <Link href={item.href} className="hover:text-white/70">
                {item.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
