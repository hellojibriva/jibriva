import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { Section } from "@/components/ui/Section";
import { featuredProject } from "@/content/home";
import { brucellosis } from "@/content/projects/brucellosis";
import { oneHealthHub, oneHealthStory } from "@/content/projects/onehealth-hub";

/**
 * Homepage "Selected Projects": each project as an explorable preview of its
 * real screens (OneHealth Hub screenshots; the Power BI report's six pages).
 */
export function FeaturedProject() {
  const ussd = oneHealthStory.implemented.find((f) => f.status);
  const built = oneHealthStory.implemented.filter((f) => !f.status).slice(0, 3);

  return (
    <Section>
      <span aria-hidden="true" className="section-marker mb-5" />
      <h2 className="max-w-[760px] text-[clamp(34px,4.6vw,60px)] leading-[1.02] tracking-[-0.02em] text-navy">
        {featuredProject.h2}
      </h2>

      <div className="mt-[clamp(40px,6vw,80px)] space-y-[clamp(64px,9vw,128px)]">
        <ProjectExplorer
          index={0}
          kicker={oneHealthHub.classification}
          title={oneHealthHub.title}
          summary={oneHealthHub.summary}
          href={`/projects/${oneHealthHub.slug}`}
          views={oneHealthStory.shots.map((s) => ({ label: s.title, src: s.src, alt: s.alt, width: s.width, height: s.height }))}
          aside={
            <dl className="divide-y divide-border border-y border-border text-[14px]">
              <div className="grid grid-cols-[120px_1fr] gap-3 py-2.5">
                <dt className="font-semibold text-navy">Built</dt>
                <dd className="text-text">{built.map((f) => f.name).join(" · ")}</dd>
              </div>
              {ussd && (
                <div className="grid grid-cols-[120px_1fr] gap-3 py-2.5">
                  <dt className="font-semibold text-navy">Sandbox-tested</dt>
                  <dd className="text-text">{ussd.name}, in the Africa&apos;s Talking Sandbox; no production short code</dd>
                </div>
              )}
              {oneHealthStory.concept.map((c) => (
                <div key={c.name} className="grid grid-cols-[120px_1fr] gap-3 py-2.5">
                  <dt className="font-semibold text-navy">Concept only</dt>
                  <dd className="text-text">{c.name}: {c.note}</dd>
                </div>
              ))}
            </dl>
          }
        />

        <ProjectExplorer
          index={1}
          flip
          kicker={brucellosis.classification}
          title={brucellosis.title}
          summary={brucellosis.summary}
          href={`/projects/${brucellosis.slug}`}
          views={(brucellosis.showcase?.items ?? []).map((v) => ({ label: v.title, src: v.src, alt: v.alt, width: v.width, height: v.height }))}
          aside={
            <div className="space-y-4">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-border bg-border text-[13.5px]">
                {[
                  ["Data", "WOAH-WAHIS, Nigeria"],
                  ["Period", "2008–2025"],
                  ["Methods", "Temporal, geographic, species and host analysis"],
                  ["Delivered", "Validated Power BI report"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-ivory p-3">
                    <dt className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-gold-text">{k}</dt>
                    <dd className="mt-1 text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="border-l-2 border-gold pl-3 text-[13.5px] leading-relaxed text-text-muted">
                Reported records reflect surveillance reporting and visibility, not population incidence or prevalence.
              </p>
            </div>
          }
        />
      </div>
    </Section>
  );
}
