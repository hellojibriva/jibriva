import type { Metadata } from "next";
import { LegalArticle } from "@/components/sections/LegalArticle";
import { privacyPolicy } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How information sent through this website is collected, used and protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalArticle {...privacyPolicy} />;
}
