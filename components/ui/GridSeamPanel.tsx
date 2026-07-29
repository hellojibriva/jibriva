import { cn } from "@/utils/cn";

interface GridSeamItem {
  title: string;
  desc?: string;
}

interface GridSeamPanelProps {
  items: GridSeamItem[];
  minWidth?: number;
  className?: string;
}

/**
 * Outer container background:#E2E8F0 + children background:#fff, gap:1px —
 * produces hairline dividers without per-cell borders. DESIGN_SYSTEM.md §4.2.
 */
export function GridSeamPanel({ items, minWidth = 220, className }: GridSeamPanelProps) {
  return (
    <div
      className={cn("grid gap-px border border-border bg-border", className)}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))` }}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-white p-6 transition-colors duration-150 ease-out hover:bg-neutral"
        >
          <p className="text-[15.5px] font-bold text-navy">{item.title}</p>
          {item.desc && <p className="mt-2 text-[13.5px] leading-relaxed text-text-muted">{item.desc}</p>}
        </div>
      ))}
    </div>
  );
}
