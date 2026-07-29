import Image from "next/image";

// logo-mark.png's real intrinsic size is 440x500 (ratio 0.88) — not square.
// Deriving width from a single `size` (height) prop keeps every usage
// site-wide from accidentally squashing the mark into a square box.
const INTRINSIC_RATIO = 440 / 500;

interface LogoMarkProps {
  size: number;
  className?: string;
  priority?: boolean;
}

export function LogoMark({ size, className, priority }: LogoMarkProps) {
  const width = Math.round(size * INTRINSIC_RATIO);

  return (
    <Image
      src="/logos/logo-mark.png"
      alt="Jibriva"
      width={width}
      height={size}
      style={{ width, height: size }}
      className={className}
      priority={priority}
    />
  );
}
