import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { siteConfig } from "@/config/site";
import { defaultTitle } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { THEME_SCRIPT } from "@/components/layout/ThemeToggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Headings only (see globals.css). Variable font, so weights are not listed.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

// Each route sets its own complete title via buildMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: defaultTitle,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme is set by THEME_SCRIPT before paint, so the attribute differs from the server render by design.
    <html lang="en-GB" className={`${inter.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only z-[100] bg-navy px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
