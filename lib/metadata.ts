import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/** Builds a per-route Metadata object with canonical, OG and Twitter Card fields. */
export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const ogImage = `${siteConfig.domain}/og-image.png`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [ogImage],
    },
  };
}
