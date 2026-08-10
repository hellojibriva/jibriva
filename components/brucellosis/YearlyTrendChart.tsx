import type { YearlyTrendPoint } from "@/lib/brucellosis/analytics";

interface YearlyTrendChartProps {
  data: YearlyTrendPoint[];
}

const WIDTH = 720;
const HEIGHT = 260;
const PAD_LEFT = 32;
const PAD_BOTTOM = 32;
const PAD_TOP = 16;
const PAD_RIGHT = 8;

/** Custom SVG bar chart — no charting library in this project's dependency
 *  tree, so this stays a small, purpose-built component. Zero-outbreak years
 *  render as a visible baseline tick (not omitted) so reporting gaps read as
 *  gaps, not as absence of the year. */
export function YearlyTrendChart({ data }: YearlyTrendChartProps) {
  const max = Math.max(...data.map((d) => d.outbreaks), 1);
  const plotWidth = WIDTH - PAD_LEFT - PAD_RIGHT;
  const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const barSlot = plotWidth / data.length;
  const barWidth = Math.min(barSlot * 0.55, 34);

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label="Reported brucellosis outbreaks by year, 2008 to 2023">
      {/* gridlines */}
      {[0, 0.5, 1].map((f) => {
        const y = PAD_TOP + plotHeight * (1 - f);
        return (
          <line
            key={f}
            x1={PAD_LEFT}
            x2={WIDTH - PAD_RIGHT}
            y1={y}
            y2={y}
            stroke="var(--color-border)"
            strokeWidth={1}
          />
        );
      })}
      <text x={PAD_LEFT - 8} y={PAD_TOP + 4} textAnchor="end" className="fill-text-faint text-[10px]">
        {max}
      </text>
      <text x={PAD_LEFT - 8} y={PAD_TOP + plotHeight + 4} textAnchor="end" className="fill-text-faint text-[10px]">
        0
      </text>

      {data.map((point, i) => {
        const barHeight = (point.outbreaks / max) * plotHeight;
        const x = PAD_LEFT + i * barSlot + (barSlot - barWidth) / 2;
        const y = PAD_TOP + plotHeight - Math.max(barHeight, point.outbreaks > 0 ? barHeight : 2);
        const isZero = point.outbreaks === 0;
        return (
          <g key={point.year}>
            <title>{`${point.year}: ${isZero ? "No WAHIS record in this extract" : `${point.outbreaks} reported outbreaks`}`}</title>
            <rect
              x={x}
              y={isZero ? PAD_TOP + plotHeight - 2 : y}
              width={barWidth}
              height={isZero ? 2 : barHeight}
              className={isZero ? "fill-border" : "fill-emerald"}
            />
            <text
              x={x + barWidth / 2}
              y={PAD_TOP + plotHeight + 18}
              textAnchor="middle"
              className="fill-text-faint text-[10px]"
            >
              {String(point.year).slice(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
