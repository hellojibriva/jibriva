import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Per-page titles in SEO_GUIDE.md are already fully composed (mixed separators:
// "|", "—", or none) — deliberately NOT using a title template that would
// double-suffix them. Each route sets its own complete title via buildMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "Jibriva | One Health Consulting, Research & Digital Solutions",
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}
