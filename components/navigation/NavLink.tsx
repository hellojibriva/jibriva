import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface NavLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
  className?: string;
}

/** Plain Server Component — active state is passed in, no client-side pathname hook needed. */
export function NavLink({ href, active, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[15px] font-medium hover:text-navy",
        active ? "text-navy" : "text-text",
        className,
      )}
    >
      {children}
    </Link>
  );
}
