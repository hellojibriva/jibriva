import { cn } from "@/utils/cn";

export type BadgeTone = "flagship" | "live" | "in-development" | "coming-soon";

interface BadgeProps {
  label: string;
  tone: BadgeTone;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  flagship: "bg-emerald/10 text-emerald-text",
  live: "bg-status-live-bg text-navy",
  "in-development": "bg-status-neutral-bg text-navy",
  "coming-soon": "bg-status-neutral-bg text-status-neutral-text",
};

export function Badge({ label, tone, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[2px] px-[10px] py-[4px] text-[11.5px] font-bold",
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
