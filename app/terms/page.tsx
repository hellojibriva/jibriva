import type { Metadata } from "next";
import { LegalArticle } from "@/components/sections/LegalArticle";
import { termsOfService } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing the use of this website.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalArticle {...termsOfService} />;
}
