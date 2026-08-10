interface HorizontalBarItem {
  key: string;
  label: string;
  sublabel?: string;
  value: number;
  valueLabel?: string;
}

interface HorizontalBarListProps {
  items: HorizontalBarItem[];
}

export function HorizontalBarList({ items }: HorizontalBarListProps) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.key}>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[14px] font-semibold text-navy">
              {item.label}
              {item.sublabel && <span className="ml-2 font-normal text-text-faint">{item.sublabel}</span>}
            </span>
            <span className="shrink-0 text-[13px] font-semibold text-text-muted">
              {item.valueLabel ?? item.value}
            </span>
          </div>
          <div className="mt-1.5 h-[8px] w-full bg-neutral">
            <div
              className="h-full bg-emerald"
              style={{ width: `${Math.max((item.value / max) * 100, item.value > 0 ? 2 : 0)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
