import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { notFound } from "@/content/not-found";

export const metadata: Metadata = {
  title: { absolute: `Page not found · ${siteConfig.name}` },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center bg-deep px-6 py-[clamp(80px,14vw,160px)] text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-gold">{notFound.eyebrow}</p>
      <h1 className="mt-4 text-[clamp(32px,5vw,48px)] font-extrabold tracking-[-0.02em] text-white">
        {notFound.h1}
      </h1>
      <p className="mt-4 max-w-[420px] text-[16px] leading-relaxed text-white/60">{notFound.body}</p>
      <Button href="/" tone="dark" className="mt-8">
        {notFound.buttonLabel}
      </Button>
    </section>
  );
}
