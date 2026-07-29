import { cn } from "@/utils/cn";

export type SocialPlatform =
  | "instagram"
  | "pinterest"
  | "github"
  | "linkedin"
  | "whatsapp";

interface IconProps {
  className?: string;
}

/*
  Hand-built monoline 17x17 marks — NOT licensed brand logos, per
  DESIGN_SYSTEM.md §8. stroke="currentColor" so they inherit surrounding
  text color.
*/

function InstagramMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <rect x="1" y="1" width="15" height="15" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8.5" cy="8.5" r="3.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12.1" cy="4.9" r="0.9" fill="currentColor" />
    </svg>
  );
}

function PinterestMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="7.3" stroke="currentColor" strokeWidth="1.4" />
      <text x="8.5" y="8.9" textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="700" fill="currentColor">
        P
      </text>
    </svg>
  );
}

function GitHubMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="7.3" stroke="currentColor" strokeWidth="1.4" />
      <text x="8.5" y="8.9" textAnchor="middle" dominantBaseline="central" fontSize="6.5" fontWeight="700" fill="currentColor">
        GH
      </text>
    </svg>
  );
}

function LinkedInMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="7.3" stroke="currentColor" strokeWidth="1.4" />
      <text x="8.5" y="8.9" textAnchor="middle" dominantBaseline="central" fontSize="7" fontWeight="700" fill="currentColor">
        in
      </text>
    </svg>
  );
}

function WhatsAppMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <path
        d="M8.6 1.8a6.6 6.6 0 0 0-5.7 9.9L1.8 15.2l3.6-1.1a6.6 6.6 0 1 0 3.2-12.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons: Record<SocialPlatform, (props: IconProps) => React.ReactElement> = {
  instagram: InstagramMark,
  pinterest: PinterestMark,
  github: GitHubMark,
  linkedin: LinkedInMark,
  whatsapp: WhatsAppMark,
};

interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
  label: string;
  className?: string;
}

export function SocialIcon({ platform, href, label, className }: SocialIconProps) {
  const Icon = icons[platform];
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(isExternal && /^https?:\/\//.test(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <Icon className="h-[17px] w-[17px] shrink-0" />
      <span>{label}</span>
    </a>
  );
}
