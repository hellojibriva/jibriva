import { cn } from "@/utils/cn";

interface EyebrowProps {
  children: string;
  /** "dark" = on a navy section, where the full-brightness brand gold
   *  already passes AA; "light" (default) uses the darker AA-safe variant. */
  tone?: "light" | "dark";
  className?: string;
}

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[13px] font-semibold uppercase tracking-[0.1em]",
        tone === "dark" ? "text-gold" : "text-gold-text",
        className,
      )}
    >
      {children}
    </p>
  );
}
