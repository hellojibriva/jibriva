import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { siteConfig } from "@/config/site";
import { fieldNotes, getPost, posts } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";

// Only published notes have pages; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, ogType: "article" });
}

/** A Field Notes article: an editorial reading column with a short author note. */
export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <header className="surface-ivory relative isolate overflow-hidden px-[clamp(20px,5vw,64px)] pt-[clamp(32px,6vw,80px)] pb-[clamp(40px,6vw,72px)]">
        <HealthBackdrop animated={false} className="-z-10 opacity-50 [mask-image:linear-gradient(90deg,transparent_20%,black_80%)]" />
        <div className="relative mx-auto max-w-[760px]">
          <Link href="/blog" className="text-[14px] font-medium text-text-muted hover:text-navy">
            <span aria-hidden="true">←</span> {fieldNotes.name}
          </Link>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-text">
            {post.category}
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
            <span className="normal-case tracking-normal text-text-muted">{post.readingMinutes} min read</span>
            {post.date && (
              <>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
                <time className="normal-case tracking-normal text-text-muted">{post.date}</time>
              </>
            )}
          </p>
          <h1 className="mt-4 text-[clamp(32px,4.6vw,54px)] leading-[1.08] tracking-[-0.02em] text-navy">{post.title}</h1>
          <p className="mt-5 font-serif text-[clamp(19px,2vw,23px)] italic leading-snug text-text-muted">{post.subtitle}</p>
        </div>
      </header>

      <article className="px-[clamp(20px,5vw,64px)] pt-[clamp(40px,6vw,72px)] pb-[clamp(48px,7vw,96px)]">
        <div className="mx-auto max-w-[680px]">
          {post.body.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i} className="mt-12 mb-4 text-[clamp(23px,2.4vw,28px)] leading-snug text-navy">
                {block.text}
              </h2>
            ) : (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-serif text-[clamp(21px,2.2vw,25px)] leading-snug text-navy"
                    : "mt-5 text-[17.5px] leading-[1.75] text-text sm:text-[18px]"
                }
              >
                {block.text}
              </p>
            ),
          )}

          <p className="mt-10">
            <Link href="/about#journey" className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[15px] font-semibold text-navy hover:text-gold-text">
              Explore my career journey <span aria-hidden="true">→</span>
            </Link>
          </p>

          {/* Author note */}
          <aside className="mt-14 flex items-center gap-5 border-y border-border py-6">
            <div className="relative h-[72px] w-[60px] shrink-0 overflow-hidden border border-border bg-sand">
              <Image src="/team/abi-precious-jibrin.png" alt="" fill sizes="60px" className="object-cover object-top" />
            </div>
            <div>
              <p className="font-serif text-[18px] font-semibold text-navy">{siteConfig.name}</p>
              <p className="text-[14px] leading-snug text-text-muted">
                {siteConfig.title}. Programme implementation, MEAL and health information, with a growing interest in One Health.{" "}
                <Link href="/about" className="font-semibold text-navy underline decoration-gold underline-offset-2 hover:text-gold-text">
                  About me
                </Link>
              </p>
            </div>
          </aside>

          {/* Related notes: shown only once there are other published notes. */}
          {others.length > 0 && (
            <section aria-labelledby="more-notes" className="mt-12">
              <h2 id="more-notes" className="label-heading text-[12.5px] uppercase tracking-[0.1em] text-gold-text">
                More from {fieldNotes.name}
              </h2>
              <ul className="mt-4 space-y-3">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="font-serif text-[19px] font-semibold text-navy hover:text-gold-text">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <ClosingCta />
    </>
  );
}
