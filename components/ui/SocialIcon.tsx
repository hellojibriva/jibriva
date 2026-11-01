import { cn } from "@/utils/cn";

export type SocialPlatform = "email" | "github" | "linkedin" | "website" | "whatsapp";

interface IconProps {
  className?: string;
}

/*
  Hand-built monoline 17x17 marks — NOT licensed brand logos.
  stroke="currentColor" so they inherit surrounding text color.
*/

function EmailMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <rect x="1.2" y="3" width="14.6" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.8 4l6.7 5.3L15.2 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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

function WebsiteMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="7.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.4 8.5h14.2M8.5 1.2c2 2.1 2 12.5 0 14.6M8.5 1.2c-2 2.1-2 12.5 0 14.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

// WhatsApp's speech bubble with a handset, drawn to the same 17px monoline grid.
function WhatsAppMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" className={className} fill="none" aria-hidden="true">
      <path
        d="M8.5 1.3a7.2 7.2 0 0 0-6.2 10.8L1.3 15.7l3.7-1a7.2 7.2 0 1 0 3.5-13.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.3 4.9c.2 0 .4 0 .5.4l.6 1.4c.1.2 0 .4-.1.5l-.4.5c-.1.1-.1.3 0 .4.6 1 1.4 1.8 2.4 2.3.1.1.3.1.4 0l.5-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.3.2.5-.1.8-.8 1.4-1.6 1.4-2.6-.3-4.9-2.6-5.2-5.2 0-.8.6-1.5 1.4-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

const icons: Record<SocialPlatform, (props: IconProps) => React.ReactElement> = {
  email: EmailMark,
  github: GitHubMark,
  linkedin: LinkedInMark,
  website: WebsiteMark,
  whatsapp: WhatsAppMark,
};

interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
  label: string;
  /** Accessible name when the visible label alone isn't descriptive enough. */
  ariaLabel?: string;
  className?: string;
}

export function SocialIcon({ platform, href, label, ariaLabel, className }: SocialIconProps) {
  const Icon = icons[platform];
  const opensNewTab = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={ariaLabel}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <Icon className="h-[17px] w-[17px] shrink-0" />
      <span>{label}</span>
    </a>
  );
}
