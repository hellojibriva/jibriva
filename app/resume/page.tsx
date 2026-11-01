import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/config/site";
import { education, languages, professionalDevelopment, technicalSkills } from "@/content/about";
import { professionalCapabilities, researchInterests, RESUME_PDF, resumeSummary } from "@/content/capabilities";
import { career } from "@/content/profile";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "Resume of Abi Precious Jibrin, Public Health Programme & Systems Specialist: experience, capabilities, education and professional development, with a downloadable PDF.",
  path: "/resume",
});

const h2 = "label-heading text-[12.5px] uppercase text-gold-text";

/*
 * A one-page-style web resume built only from approved site content. The same
 * page, printed, produces the downloadable PDF, so the two never disagree.
 * Site chrome and the download button are hidden in print.
 */
export default function ResumePage() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pt-[clamp(36px,6vw,80px)] pb-[clamp(64px,9vw,112px)] print:p-0">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Eyebrow>Resume</Eyebrow>
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-[14px] font-semibold text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>

        <article className="mt-6 border border-border bg-ivory p-[clamp(24px,5vw,64px)] shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)] print:mt-0 print:border-0 print:bg-transparent print:p-0 print:shadow-none">
          {/* Header */}
          <header className="border-b border-gold/60 pb-6">
            <h1 className="text-[clamp(34px,5vw,52px)] leading-none tracking-[-0.02em] text-navy print:text-[34px]">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold-text">{siteConfig.title}</p>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[14px] text-text-muted">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-navy">
                {siteConfig.contact.email}
              </a>
              <span>jibriva.com</span>
              <span>linkedin.com/in/abijibrin</span>
            </p>
          </header>

          <p className="mt-6 text-[15.5px] leading-relaxed text-text print:text-[12.5px]">{resumeSummary}</p>

          {/* Experience */}
          <section className="mt-8">
            <h2 className={h2}>Experience</h2>
            <div className="mt-4 space-y-6">
              {career.map((role) => (
                <div key={`${role.organisationShort}-${role.years}`} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[19px] leading-snug text-navy print:text-[15px]">
                      {role.title} <span className="font-sans text-[14px] font-normal text-text-muted">· {role.programme}</span>
                    </h3>
                    <p className="text-[13px] font-semibold text-gold-text">{role.period}</p>
                  </div>
                  <p className="text-[14px] text-text-muted">{role.organisation}</p>
                  <ul className="mt-2 space-y-1.5">
                    {role.responsibilities.map((item) => (
                      <li key={item.slice(0, 40)} className="flex gap-2.5 text-[14.5px] leading-relaxed text-text print:text-[11.5px]">
                        <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-gold print:mt-[6px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 grid grid-cols-2 gap-8 max-sm:grid-cols-1 print:grid-cols-2">
            <section className="break-inside-avoid">
              <h2 className={h2}>Professional Capabilities</h2>
              <ul className="mt-3 space-y-1.5 text-[14.5px] text-text print:text-[11.5px]">
                {professionalCapabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <h2 className={`${h2} mt-6`}>Areas of Research Interest</h2>
              <ul className="mt-3 space-y-1.5 text-[14.5px] text-text print:text-[11.5px]">
                {researchInterests.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
            <section className="break-inside-avoid">
              <h2 className={h2}>Education</h2>
              <p className="mt-3 text-[15px] font-semibold text-navy print:text-[12px]">{education.qualification}</p>
              <p className="text-[14px] text-text-muted print:text-[11.5px]">
                {education.institution}, {education.year}
              </p>
              <h2 className={`${h2} mt-6`}>Professional Development</h2>
              <ul className="mt-3 space-y-1.5 text-[14.5px] text-text print:text-[11.5px]">
                {professionalDevelopment.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <h2 className={`${h2} mt-6`}>Languages</h2>
              <p className="mt-3 text-[14.5px] text-text print:text-[11.5px]">
                {languages.map((l) => `${l.language} (${l.level})`).join(" · ")}
              </p>
            </section>
          </div>

          <section className="mt-8 break-inside-avoid">
            <h2 className={h2}>Technical Skills</h2>
            <dl className="mt-3 space-y-1.5">
              {technicalSkills.map((g) => (
                <div key={g.category} className="grid grid-cols-[210px_1fr] gap-4 text-[14px] max-sm:grid-cols-1 max-sm:gap-0 print:grid-cols-[170px_1fr] print:text-[11.5px]">
                  <dt className="font-semibold text-navy">{g.category}</dt>
                  <dd className="text-text-muted">{g.tools.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </div>
    </section>
  );
}
