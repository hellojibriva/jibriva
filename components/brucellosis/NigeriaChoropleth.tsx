import { nigeriaStatePaths, NIGERIA_MAP_VIEWBOX } from "@/data/brucellosis/nigeria-states-paths";
import type { StateSummary } from "@/lib/brucellosis/analytics";

interface NigeriaChoroplethProps {
  stateSummary: StateSummary[];
}

const LEGEND_BUCKETS = [
  { label: "No WAHIS record", swatch: "#E2E8F0" },
  { label: "Low", swatch: "rgba(16,185,129,0.25)" },
  { label: "Moderate", swatch: "rgba(16,185,129,0.5)" },
  { label: "High", swatch: "rgba(16,185,129,0.75)" },
  { label: "Highest", swatch: "#10B981" },
];

function colorForCount(count: number, max: number): string {
  if (count === 0) return "#E2E8F0";
  const fraction = count / max;
  if (fraction <= 0.25) return "rgba(16,185,129,0.25)";
  if (fraction <= 0.5) return "rgba(16,185,129,0.5)";
  if (fraction <= 0.75) return "rgba(16,185,129,0.75)";
  return "#10B981";
}

/**
 * Nigeria ADM1 boundaries from geoBoundaries.org (CC BY 4.0), pre-projected
 * and simplified at build time by scripts/generate-nigeria-map-data.mjs —
 * see that file's header for full attribution. Shaded by WAHIS-reported
 * outbreak count per state; states with no WAHIS record are shown in neutral
 * grey, never implied to be disease-free.
 */
export function NigeriaChoropleth({ stateSummary }: NigeriaChoroplethProps) {
  const outbreaksByState = new Map(stateSummary.map((s) => [s.state, s.outbreaks]));
  const max = Math.max(...stateSummary.map((s) => s.outbreaks), 1);

  return (
    <div>
      <svg viewBox={NIGERIA_MAP_VIEWBOX} className="w-full" role="img" aria-label="Map of Nigeria shaded by number of WAHIS-reported brucellosis outbreaks per state, 2008 to 2023">
        {nigeriaStatePaths.map((state) => {
          const count = outbreaksByState.get(state.name) ?? 0;
          return (
            <path
              key={state.name}
              d={state.d}
              fill={colorForCount(count, max)}
              stroke="#ffffff"
              strokeWidth={0.75}
            >
              <title>{`${state.name}: ${count > 0 ? `${count} reported outbreaks` : "No WAHIS record in this extract"}`}</title>
            </path>
          );
        })}
      </svg>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4">
        {LEGEND_BUCKETS.map((bucket) => (
          <div key={bucket.label} className="flex items-center gap-2">
            <span
              className="inline-block h-[10px] w-[10px] border border-border"
              style={{ backgroundColor: bucket.swatch }}
            />
            <span className="text-[12px] text-text-muted">{bucket.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
