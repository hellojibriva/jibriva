# Jibriva

The marketing website for **Jibriva**, a Nigerian One Health consultancy. Built with Next.js (App Router), TypeScript and Tailwind CSS, from the specification in [`JIBRIVA-HANDOFF/`](../handoff/Jibriva%20website%20build%20complete%20(1)/JIBRIVA-HANDOFF/JIBRIVA_MASTER_SPECIFICATION.md).

## Project overview

- 9 marketing routes (Home, About, Services, Expertise, Our Work, Insights, Contact, Privacy, Terms) plus a custom 404
- Every page is a React Server Component; the contact form is the site's only Client Component
- All copy lives in typed `content/*.ts` files, not hardcoded in components — see [Content management](#content-management) below
- Design tokens (colors, spacing, type scale) are frozen per `JIBRIVA-HANDOFF/DESIGN_SYSTEM.md` and ported into Tailwind's `@theme` config in `app/globals.css`

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.ts`) |
| Fonts | `next/font/google` — Inter, weights 400–800 |
| Forms | React Hook Form + Zod (contact form validation) |
| Images | `next/image` throughout |
| Hosting | Vercel (zero-config Next.js preset) |

## Folder structure

```
app/                  Routes — one folder per URL segment, each with a page.tsx
  layout.tsx           Root <html>, font loading, global metadata
  sitemap.ts            /sitemap.xml, generated from config/site.ts
  robots.ts              /robots.txt
  not-found.tsx           Custom 404 (no Navbar/Footer)
components/
  layout/               Navbar, Footer
  navigation/           NavLink
  sections/             Page sections (Hero, OurApproach, FounderSection, FinalCta, ...)
  cards/                 Repeated card patterns (ProjectCard, InsightCard, ...)
  ui/                     Primitives (Button, Badge, Card, Section, Pill, ...)
  forms/                  ContactForm (the one "use client" component)
content/                One typed module per content area — see below
config/site.ts          Nav links, footer link groups, contact info, social URLs
hooks/useContactForm.ts React Hook Form + Zod wiring for the contact form
lib/
  metadata.ts            buildMetadata() — shared per-route SEO metadata builder
  schema.ts               JSON-LD builders (Organization, ProfessionalService, Person)
types/content.ts         Shared TypeScript interfaces for all content shapes
utils/cn.ts               Tiny classname-join helper
public/
  logos/, icons/          Brand assets
  team/                   Team photos (e.g. founder portrait)
  og-image.png             Shared Open Graph image
```

## Installation

Requires Node.js 18.18+ and npm.

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Every page except `/contact` is a Server Component, so most edits hot-reload instantly.

## Build and deployment

```bash
npm run build   # production build — must complete with zero TypeScript/ESLint errors
npm run start   # serve the production build locally
npm run lint    # ESLint only
```

**Vercel** is the target host:

1. Import the GitHub repo into Vercel — the Next.js preset is auto-detected, no custom build command needed.
2. Set `NEXT_PUBLIC_SITE_URL` (see below) to the production domain before the first deploy, so canonical/OG URLs and the sitemap don't leak a preview URL.
3. Attach the custom domain (`jibriva.com`) once DNS is ready.

## Environment variables

The site has **zero required environment variables** — it builds and every page (including the contact form's success state) renders correctly with nothing set. These are optional, for follow-up work:

```bash
NEXT_PUBLIC_SITE_URL=https://jibriva.com   # canonical/OG domain; defaults to https://jibriva.com

# Contact form has no submission backend yet — pick exactly ONE when wiring one:
FORMSPREE_FORM_ID=
RESEND_API_KEY=
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=

# Optional, only if analytics is added later:
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

Set these in Vercel under Project → Settings → Environment Variables, scoped per environment.

## Content management

**Every piece of visible copy and every image reference lives in `content/`, `config/site.ts`, or `public/` — never hardcoded inside a component.** Editing the site almost never requires touching a `.tsx` file.

| To change... | Edit... |
|---|---|
| Nav links, footer link groups, contact email/WhatsApp, social URLs | `config/site.ts` |
| Home page copy (hero, all section headers/cards) | `content/home.ts` |
| About page copy (mission/vision/values, pull quote, approach intro) | `content/about.ts` |
| Founder bio, expertise, journey, philosophy | `content/founder.ts` |
| Services categories and sub-items | `content/services.ts` |
| Sectors and Platforms & Tools (Expertise page) | `content/expertise.ts` |
| Our Approach timeline steps (both Home and About variants) | `content/timeline.ts` |
| "Why Organisations Choose Jibriva" list | `content/why-jibriva.ts` |
| Final CTA band copy | `content/cta.ts` |
| Contact form labels/placeholders/success copy | `content/contact.ts` |
| Privacy Policy / Terms of Service body | `content/legal.ts` |
| 404 page copy | `content/not-found.ts` |

### Adding a project (Our Work page)

Add an entry to the `projects` array in `content/our-work.ts`:

```ts
{
  slug: "your-project-slug",
  tag: "Category Tag",
  name: "Project Name",
  status: "Live" | "In Development" | "Coming Soon",
  overview: "One paragraph describing the platform.",
  problem: "The problem this project addresses.",
  tech: ["Tech", "Stack", "Items"],
  href: "https://...", // omit entirely if not Live — the "Explore Platform →"
                        // link only renders when href is set
}
```

To also feature it in the homepage teaser, add its `slug` to `ourWorkTeaser.slugs` in `content/home.ts` (max 3 shown).

**Do not fabricate outcomes or claims for non-Live projects** — this is a deliberate brand rule (see `BRAND_GUIDE.md`), not a technical constraint.

### Adding an insight

Add an entry to the `insights` array in `content/insights.ts`:

```ts
{
  slug: "your-article-slug",
  topic: "Topic Tag",
  title: "Article Title",
  teaser: "One-sentence teaser.",
}
```

To feature it on the homepage teaser, add its `slug` to `insightsTeaser.slugs` in `content/home.ts` (max 3 shown). The `InsightArticle` type in `types/content.ts` also has optional `coverImage`, `author`, `date`, `readingTime`, `categories`, `tags` and `body` fields, scaffolded for a future `/insights/[slug]` MDX-driven detail page — not built yet, since no articles have real body content today.

### Adding a service

Add a category to `content/services.ts` (`ServiceCategory[]`), or a sub-item to an existing category's `items` array:

```ts
{ name: "Sub-item name", value: "One-sentence, outcome-first description of what this does for the client." }
```

> **Note:** the sub-item copy in `content/services.ts` and the full Privacy/Terms body text in `content/legal.ts` were **drafted** during this rebuild — the original source files (`services.dc.html`, `privacy.dc.html`, `terms.dc.html`) that CONTENT_GUIDE.md defers to were not included in the handoff package. Every drafted string is flagged with a `// DRAFTED — review before launch` comment at the top of both files. Run `grep -rn "DRAFTED" content/` to find everything that still needs the client's real source copy before public launch.

### Replacing images

All images live under `public/` and are referenced by path from `content/` or directly in components via `next/image`:

- **Logo / favicon / OG image**: replace the files in `public/logos/`, `public/icons/`, `public/og-image.png` directly (keep the same filenames, or update the references in `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `app/not-found.tsx`, and `lib/schema.ts`).
- **Founder portrait**: replace `public/team/abi-precious-jibrin.png` directly (same filename = zero code changes). It renders at a fixed 4:5 aspect ratio in `components/sections/FounderSection.tsx`.
- **One Health Hub product screenshot**: `components/sections/FeaturedProject.tsx` currently renders the documented placeholder treatment (striped panel + logo + caption) at a reserved 16:10 aspect ratio. Replacing it with a real screenshot means swapping that placeholder `<div>` for a `next/image` inside the same aspect-ratio container — the only image slot on the site that still needs a small code change rather than a file swap, because no real screenshot exists yet.

## Known gaps before public launch

1. **Drafted copy** — see the Content management note above. Grep for `DRAFTED` in `content/`.
2. **Contact form has no submission backend** — it validates and shows a "Message received." success state, but nothing is sent anywhere yet. Wire one of Formspree/Resend/EmailJS (see Environment variables above).
3. **Featured Project screenshot** — still the placeholder panel; swap in a real One Health Hub screenshot when available.
4. **Our Approach's 6-column timeline** (`components/sections/OurApproach.tsx`, home variant) is a fixed 6-column grid that does not reflow below its content width, by design per `DESIGN_SYSTEM.md` §4.5 — flagged there as a known limitation pending design sign-off, not a bug.
