import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  hover?: "border" | "background" | "none";
  className?: string;
}

const hoverStyles: Record<NonNullable<CardProps["hover"]>, string> = {
  border: "hover:border-navy",
  background: "hover:bg-neutral",
  none: "",
};

export function Card({ children, hover = "border", className }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border p-7 transition-colors duration-150 ease-out sm:p-9",
        hoverStyles[hover],
        className,
      )}
    >
      {children}
    </div>
  );
}
