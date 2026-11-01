import { cn } from "@/utils/cn";

/*
 * Decorative backdrop drawn from disease-surveillance graphics: an epidemic
 * curve (weekly bars, a smoothed trend line and a dashed alert threshold)
 * along the foot, and a hexagonal tile map — the kind used for state-level
 * choropleths — in the upper right. Purely visual (aria-hidden). Colours come
 * from CSS variables (.hb-light / .hb-dark in globals.css) so both themes
 * work. The only motion is the trend line drawing in once, and it is off for
 * reduced-motion visitors.
 */

const W = 1300;
const BASE = 640;

// Two reporting waves, with a fixed jitter so the curve looks like data.
const BARS = Array.from({ length: 44 }, (_, i) => {
  const wave = 22 + 118 * Math.exp(-(((i - 12) / 5) ** 2)) + 84 * Math.exp(-(((i - 31) / 6) ** 2));
  return { x: 36 + i * 28, smooth: wave, h: wave + (((i * 37) % 11) - 5) * 3 };
});
const TREND = BARS.map((b, i) => `${i ? "L" : "M"}${b.x + 9} ${BASE - b.smooth}`).join(" ");

// Tile map: "." empty, "o" outline only, "1"–"3" filled at rising intensity.
const TILES = [
  "...oo1o...",
  "..o12oo1..",
  ".oo1223oo.",
  ".o12o12o1o",
  "oo1oo1oo2o",
  ".o2o1oo1o.",
  "..oo1o1o..",
  "...o2oo...",
  "....oo....",
];
const R = 15;
const HEX_W = Math.sqrt(3) * R;
const hex = (cx: number, cy: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 180) * (60 * k - 30);
    return `${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

interface HealthBackdropProps {
  tone?: "light" | "dark";
  /** Draw the trend line in on load (hero / one featured section) or render static. */
  animated?: boolean;
  className?: string;
}

export function HealthBackdrop({ tone = "light", animated = true, className }: HealthBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", tone === "dark" ? "hb-dark" : "hb-light", className)}
    >
      <svg viewBox={`0 0 ${W} 660`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {/* Tile map */}
        <g strokeWidth="1">
          {TILES.flatMap((row, r) =>
            [...row].map((cell, c) => {
              if (cell === ".") return null;
              const cx = 960 + c * HEX_W + (r % 2 ? HEX_W / 2 : 0);
              const cy = 64 + r * R * 1.5;
              return (
                <polygon
                  key={`${r}-${c}`}
                  points={hex(cx, cy)}
                  fill={cell === "o" ? "none" : `var(--hb-fill-${cell})`}
                  stroke="var(--hb-line)"
                />
              );
            }),
          )}
        </g>

        {/* Epidemic curve */}
        <line x1="20" x2={W - 20} y1={BASE} y2={BASE} stroke="var(--hb-line)" />
        <g fill="var(--hb-bar)">
          {BARS.map((b) => (
            <rect key={b.x} x={b.x} y={BASE - b.h} width="18" height={b.h} />
          ))}
        </g>
        <line x1="20" x2={W - 20} y1={BASE - 112} y2={BASE - 112} stroke="var(--hb-line)" strokeDasharray="4 6" />
        <path
          d={TREND}
          fill="none"
          stroke="var(--hb-trend)"
          strokeWidth="1.5"
          pathLength={1}
          className={animated ? "hb-trend-draw" : undefined}
        />
      </svg>
    </div>
  );
}
