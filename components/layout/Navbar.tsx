import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavLink } from "@/components/navigation/NavLink";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  activePath: string;
  /** Contact's Navbar omits the CTA button — Contact IS the destination it points to. */
  showCta?: boolean;
}

export function Navbar({ activePath, showCta = true }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border bg-white/92 px-[clamp(24px,5vw,64px)] py-4 backdrop-blur-[8px]">
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image src="/logos/logo-mark.png" alt="Jibriva" width={28} height={28} priority />
        <span className="text-lg font-bold text-navy">Jibriva</span>
      </Link>

      <div className="flex flex-wrap items-center gap-x-[clamp(10px,1.6vw,22px)] gap-y-3">
        {siteConfig.nav.map((item) => (
          <NavLink key={item.href} href={item.href} active={activePath === item.href}>
            {item.label}
          </NavLink>
        ))}

        {showCta && (
          <Button href="/contact" variant="primary" size="sm">
            Partner With Jibriva
          </Button>
        )}
      </div>
    </nav>
  );
}
