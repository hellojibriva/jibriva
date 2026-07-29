import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { featuredProject } from "@/content/home";

export function FeaturedProject() {
  return (
    <Section>
      <div className="grid grid-cols-[minmax(280px,1fr)_1.4fr] gap-14 max-lg:grid-cols-1 max-lg:gap-8">
        <div>
          <Badge label={featuredProject.badge} tone="flagship" />
          <Eyebrow className="mt-4">{featuredProject.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-[clamp(28px,3.5vw,38px)] font-bold text-navy">
            {featuredProject.h2}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
            {featuredProject.paragraph}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href={siteConfig.links.oneHealthHub}>{featuredProject.exploreLabel}</Button>
            <Button href={siteConfig.links.oneHealthHubRepo} variant="secondary">
              {featuredProject.sourceLabel}
            </Button>
          </div>
        </div>

        {/* Placeholder panel — reserved 16/10 aspect ratio so a real screenshot can
            drop in later via next/image with zero layout shift. */}
        <div
          className="flex aspect-[16/10] items-center justify-center border border-border bg-[repeating-linear-gradient(135deg,theme(colors.neutral),theme(colors.neutral)_10px,white_10px,white_20px)]"
        >
          <div className="flex flex-col items-center gap-3 bg-white/90 px-6 py-5">
            <Image
              src="/logos/logo-mark.png"
              alt="Jibriva"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="font-mono text-[12px] text-text-faint">
              {featuredProject.placeholderCaption}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
