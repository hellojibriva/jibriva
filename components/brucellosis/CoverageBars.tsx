interface CoverageItem {
  key: string;
  label: string;
  fraction: string;
  percent: number;
}

interface CoverageBarsProps {
  items: CoverageItem[];
}

/** Observed WAHIS reporting-coverage indicators — deliberately not labelled
 *  "coverage" alone, to avoid implying surveillance sensitivity. */
export function CoverageBars({ items }: CoverageBarsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
      {items.map((item) => (
        <div key={item.key}>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[13.5px] font-semibold text-navy">{item.label}</span>
            <span className="text-[13px] font-semibold text-text-muted">{item.fraction}</span>
          </div>
          <div className="mt-2 h-[8px] w-full bg-neutral">
            <div className="h-full bg-emerald" style={{ width: `${Math.max(item.percent, 2)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
