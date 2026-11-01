import { cn } from "@/utils/cn";

export type BadgeTone = "flagship" | "live" | "in-development" | "coming-soon";

interface BadgeProps {
  label: string;
  tone: BadgeTone;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  flagship: "bg-ivory text-gold-text border border-gold",
  live: "bg-navy text-cream",
  "in-development": "bg-ivory text-navy border border-border",
  "coming-soon": "bg-ivory text-gold-text border border-dashed border-gold",
};

export function Badge({ label, tone, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap rounded-[2px] px-[10px] py-[4px] text-[11.5px] font-bold",
        toneStyles[tone],
        className,
      )}
    >
      {label}
    </span>
  );
}

export function statusToTone(
  status: "Live" | "In Development" | "Coming Soon",
): BadgeTone {
  if (status === "Live") return "live";
  if (status === "In Development") return "in-development";
  return "coming-soon";
}
