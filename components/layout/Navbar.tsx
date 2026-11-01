"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape (links close it on click).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 print:hidden border-b border-border bg-cream/95 backdrop-blur-[8px]">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1408px] items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] py-4"
      >
        <Wordmark />

        <div className="hidden items-center gap-[clamp(14px,1.8vw,28px)] xl:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap text-[15px] font-medium hover:text-navy",
                isActive(item.href) ? "text-navy" : "text-text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          {pathname !== "/contact" && (
            <Button href="/contact" size="sm">
              Get in touch
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-[14px] w-[22px]">
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-full bg-navy transition-transform duration-200",
                  open ? "top-[6px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] h-[2px] w-full bg-navy transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-full bg-navy transition-transform duration-200",
                  open ? "top-[6px] -rotate-45" : "top-[12px]",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-ivory px-5 pb-6 xl:hidden">
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href} className="border-b border-border">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-4 text-[16px] font-medium",
                    isActive(item.href) ? "text-navy" : "text-text",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-5 w-full" onClick={() => setOpen(false)}>
            Get in touch
          </Button>
        </div>
      )}
    </header>
  );
}
