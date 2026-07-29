interface ValuePropCardProps {
  title: string;
  desc: string;
}

/** Top emerald accent rule + title + desc — used for Our Experience and Why Jibriva grids. */
export function ValuePropCard({ title, desc }: ValuePropCardProps) {
  return (
    <div className="border-t-2 border-emerald pt-5">
      <h3 className="text-[17px] font-bold text-navy">{title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-text-muted">{desc}</p>
    </div>
  );
}
