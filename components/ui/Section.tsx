import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: ReactNode;
  background?: "white" | "neutral" | "dark";
  className?: string;
  contentClassName?: string;
}

export function Section({
  children,
  background = "white",
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-[clamp(24px,5vw,64px)] py-[clamp(56px,8vw,96px)]",
        background === "neutral" && "bg-neutral",
        background === "dark" && "bg-navy text-white",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-[1280px]", contentClassName)}>{children}</div>
    </section>
  );
}
