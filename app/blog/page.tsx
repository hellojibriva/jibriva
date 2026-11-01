import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Section } from "@/components/ui/Section";
import { fieldNotes, posts } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: fieldNotes.name,
  description: fieldNotes.description,
  path: "/blog",
});

/** Field Notes landing page: every published note, newest first. */
export default function FieldNotesPage() {
  return (
    <>
      <PageHero eyebrow="Field Notes" h1={fieldNotes.name} paragraph={fieldNotes.description} />
      <Section className="pt-0">
        <ul className="space-y-[clamp(24px,3vw,40px)]">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[auto_minmax(0,1fr)] gap-x-[clamp(20px,4vw,56px)] gap-y-3 rounded-[12px] border border-border bg-ivory p-[clamp(24px,4vw,48px)] shadow-[0_24px_50px_-38px_rgba(15,23,42,0.5)] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold/70 focus-visible:border-gold motion-reduce:transform-none max-sm:grid-cols-1"
              >
                <span aria-hidden="true" className="font-serif text-[clamp(40px,5vw,64px)] leading-none text-gold/50">
                  {String(posts.length - i).padStart(2, "0")}
                </span>
                <span>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-text">
                    {post.category}
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
                    <span className="normal-case tracking-normal text-text-muted">{post.readingMinutes} min read</span>
                  </span>
                  <span className="mt-3 block font-serif text-[clamp(24px,2.8vw,36px)] font-semibold leading-[1.15] text-navy group-hover:text-gold-text">
                    {post.title}
                  </span>
                  <span className="mt-3 block max-w-[720px] text-[16.5px] leading-relaxed text-text-muted">{post.description}</span>
                  <span className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-1 text-[14.5px] font-semibold text-navy">
                    Read article
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      →
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <ClosingCta />
    </>
  );
}
