import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { termsOfService } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Jibriva",
  description: "Terms of service governing the use of the Jibriva website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar activePath="/terms" showCta={false} />
      <main className="px-[clamp(24px,5vw,64px)] py-[clamp(64px,9vw,100px)]">
        <article className="mx-auto max-w-[720px]">
          <h1 className="text-[clamp(32px,4vw,44px)] font-extrabold tracking-[-0.02em] text-navy">
            {termsOfService.title}
          </h1>
          <p className="mt-3 text-[14px] text-text-muted">
            Last updated: {termsOfService.lastUpdated}
          </p>
          <p className="mt-8 text-[16px] leading-relaxed text-text-muted">{termsOfService.intro}</p>

          {termsOfService.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="text-[20px] font-bold text-navy">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-3 text-[15.5px] leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>
      </main>
      <Footer variant="minimal" />
    </>
  );
}
