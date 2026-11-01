import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publishedProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only published case studies are listed; unpublished projects never appear.
  const routes = [
    ...siteConfig.nav.map((item) => item.href),
    ...publishedProjects.map((p) => `/projects/${p.slug}`),
    ...siteConfig.legal.map((item) => item.href),
  ];

  return routes.map((path) => ({
    url: `${siteConfig.domain}${path === "/" ? "" : path}`,
    lastModified: new Date(),
  }));
}
