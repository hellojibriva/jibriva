import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CaseBlocks } from "@/components/projects/CaseBlocks";
import { CaseStudySection, FactGrid } from "@/components/projects/CaseStudyParts";
import { DashboardGallery } from "@/components/projects/DashboardGallery";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { Section } from "@/components/ui/Section";
import { getPublishedProject, publishedProjects, templatedProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";
import { caseStudySchema } from "@/lib/schema";
import type { CaseSection } from "@/types/content";

// Only published projects have pages; any other slug is a 404.
export const dynamicParams = false;

// Projects with their own route (customPage) are excluded here.
export function generateStaticParams() {
  return templatedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  if (!project) notFound();

  // Project links become the final numbered section when present.
  const sections: (CaseSection & { linkSection?: boolean })[] = [...project.sections];
  if (project.links.length) sections.push({ id: "links", title: "Project links", blocks: [], linkSection: true });

  const index = publishedProjects.findIndex((p) => p.slug === project.slug);
  const next = publishedProjects[(index + 1) % publishedProjects.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema(project)) }}
      />

      {/* Header: a textured navy band; the project's own image beside the title; the facts panel overlaps its lower edge. */}
      <header className="surface-navy relative isolate overflow-hidden bg-deep px-[clamp(20px,5vw,64px)] pt-[clamp(28px,5vw,64px)] pb-[clamp(112px,12vw,160px)] text-white">
        <HealthBackdrop tone="dark" animated={false} className="-z-10 opacity-80" />
        <div className="relative mx-auto max-w-[1280px]">
          <Link href="/projects" className="text-[14px] font-medium text-white/70 hover:text-white">
            <span aria-hidden="true">←</span> All projects
          </Link>
          <div
            className={`mt-8 grid items-center gap-[clamp(32px,5vw,72px)] ${project.cardImage ? "grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] max-lg:grid-cols-1" : "grid-cols-1"}`}
          >
            <div className="max-w-[820px]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Eyebrow tone="dark">{project.classification}</Eyebrow>
                {project.status && (
                  <span className="border border-gold/60 px-2.5 py-0.5 text-[12px] font-medium text-gold">{project.status}</span>
                )}
              </div>
              <h1 className="mt-5 text-[clamp(38px,5.6vw,72px)] leading-[1.02] tracking-[-0.02em] text-white">
                {/* Word joiners keep a date range such as "(2008–2025)" on one line. */}
                {project.title.replace(/(\d{4})–(\d{4})/g, "$1⁠–⁠$2")}
              </h1>
              <p className="mt-4 font-serif text-[clamp(19px,2.2vw,25px)] italic leading-snug text-white/75">
                {project.subtitle}
              </p>
              <p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-white/80 sm:text-[18px]">{project.intro}</p>
            </div>
            {project.cardImage && (
              <div className="relative overflow-hidden border border-white/15 bg-ivory shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={project.cardImage.src}
                    alt={project.cardImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 520px"
                    className={
                      project.cardImage.width / project.cardImage.height < 1.4
                        ? "object-contain p-3"
                        : "object-cover object-top"
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Facts panel, raised over the header's lower edge. */}
      <div className="relative z-10 -mt-[clamp(64px,7vw,96px)] px-[clamp(20px,5vw,64px)]">
        <div className="mx-auto max-w-[1280px] shadow-[0_24px_48px_-28px_rgba(15,23,42,0.45)]">
          <FactGrid facts={project.glance} />
        </div>
      </div>

      {/* Genuine report pages, shown large before the written sections. */}
      {project.showcase && (
        <Section background="dark" className="mt-[clamp(56px,7vw,96px)]">
          <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-end gap-[clamp(20px,5vw,72px)] max-lg:grid-cols-1">
            <h2 className="text-[clamp(32px,4.4vw,56px)] leading-[1.04] tracking-[-0.02em] text-white">
              {project.showcase.heading}
            </h2>
            <p className="max-w-[600px] text-[17px] leading-relaxed text-white/75 sm:text-[18px]">{project.showcase.intro}</p>
          </div>
          <div className="mt-[clamp(32px,5vw,56px)]">
            <DashboardGallery items={project.showcase.items} />
          </div>
        </Section>
      )}

      {/* Body: sticky contents on desktop, collapsible contents on phones and tablets */}
      <div className="px-[clamp(20px,5vw,64px)] pt-[clamp(56px,7vw,96px)] pb-[clamp(64px,9vw,112px)]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[230px_minmax(0,780px)] gap-[clamp(40px,6vw,96px)] max-lg:grid-cols-1">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <details className="border border-border bg-ivory p-4 lg:hidden">
              <summary className="cursor-pointer text-[14px] font-semibold text-navy">On this page</summary>
              <TocList sections={sections} />
            </details>
            <div className="max-lg:hidden">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-text">On this page</p>
              <TocList sections={sections} />
            </div>
          </nav>

          <div className="space-y-[clamp(48px,6vw,72px)]">
            {sections.map((sec) => (
              <CaseStudySection key={sec.id} id={sec.id} title={sec.title}>
                {sec.linkSection ? (
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((l, li) => (
                      <Button key={l.href} href={l.href} variant={li === 0 ? "primary" : "secondary"}>
                        {l.label}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <CaseBlocks blocks={sec.blocks} />
                )}
              </CaseStudySection>
            ))}

            {next && next.slug !== project.slug && (
              <Link
                href={`/projects/${next.slug}`}
                className="group block border border-border bg-ivory p-6 transition-colors hover:border-gold"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-text">Next project</p>
                <p className="mt-2 font-serif text-[24px] font-semibold text-navy group-hover:text-gold-text">
                  {next.title} <span aria-hidden="true">→</span>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>

      <ClosingCta />
    </>
  );
}

function TocList({ sections }: { sections: { id: string; title: string }[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l border-border">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="-ml-px block border-l border-transparent py-1 pl-4 text-[14px] text-text-muted transition-colors hover:border-gold hover:text-navy"
          >
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
