import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...siteConfig.nav.map((item) => item.href),
    "/expertise",
    ...siteConfig.footer.legal.map((item) => item.href),
  ];

  return routes.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
  }));
}
