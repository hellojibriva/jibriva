import { cn } from "@/utils/cn";

interface PillProps {
  label: string;
  className?: string;
}

export function Pill({ label, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-block border border-border bg-neutral px-[10px] py-[4px] text-[13px] text-text",
        className,
      )}
    >
      {label}
    </span>
  );
}
