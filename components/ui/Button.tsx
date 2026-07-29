import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonTone = "light" | "dark";
type ButtonSize = "sm" | "md";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  className?: string;
}

type ButtonProps =
  | (BaseProps & { href: string; type?: never; disabled?: never; onClick?: never })
  | (BaseProps & {
      href?: never;
      type: "submit" | "button";
      disabled?: boolean;
      onClick?: () => void;
    });

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] font-semibold transition-colors duration-150 ease-out disabled:opacity-60 disabled:cursor-not-allowed";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-[18px] py-[10px] text-[13.5px]",
  md: "px-8 py-4 text-[15px]",
};

const variantStyles: Record<ButtonTone, Record<ButtonVariant, string>> = {
  light: {
    primary: "bg-navy text-white hover:bg-emerald hover:text-navy",
    secondary:
      "bg-transparent text-navy border border-input-border hover:border-navy",
  },
  dark: {
    primary: "bg-emerald text-navy hover:bg-white",
    secondary:
      "bg-transparent text-white border border-white/30 hover:border-white/60",
  },
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", tone = "light", size = "md", className } = props;

  const classes = cn(base, sizeStyles[size], variantStyles[tone][variant], className);

  if (props.type) {
    return (
      <button type={props.type} disabled={props.disabled} onClick={props.onClick} className={classes}>
        {children}
      </button>
    );
  }

  const isExternal = /^https?:\/\//.test(props.href);

  if (isExternal) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={props.href} className={classes}>
      {children}
    </Link>
  );
}
