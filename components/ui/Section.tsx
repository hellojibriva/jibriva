import type { ReactNode } from "react";
import { HealthBackdrop } from "@/components/ui/HealthBackdrop";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: ReactNode;
  /**
   * Surface: "white" = the page's warm paper (no band), "band" = ivory with
   * gold hairline edges, "sand" = deeper cream, "dark" = textured navy.
   */
  background?: "white" | "band" | "sand" | "dark";
  /** Decorative network backdrop: "static" or "animated". */
  backdrop?: "static" | "animated";
  className?: string;
  contentClassName?: string;
  /** Anchor id, e.g. for a case-study chapter. */
  id?: string;
}

export function Section({ children, background = "white", backdrop, className, contentClassName, id }: SectionProps) {
  const dark = background === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]",
        background === "band" && "surface-ivory",
        background === "sand" && "surface-sand",
        dark && "surface-navy bg-deep text-white",
        className,
      )}
    >
      {backdrop && (
        <HealthBackdrop
          tone={dark ? "dark" : "light"}
          animated={backdrop === "animated"}
          className={cn("-z-10", !dark && "opacity-70")}
        />
      )}
      <div className={cn("reveal relative mx-auto max-w-[1280px]", contentClassName)}>{children}</div>
    </section>
  );
}
