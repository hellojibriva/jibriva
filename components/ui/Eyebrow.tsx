import { cn } from "@/utils/cn";

interface EyebrowProps {
  children: string;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[13px] font-semibold uppercase tracking-[0.1em] text-emerald",
        className,
      )}
    >
      {children}
    </p>
  );
}
