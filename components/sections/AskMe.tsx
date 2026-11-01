/**
 * "Ask me about my work": questions as native disclosure widgets, so they open
 * and close with mouse, touch, Enter or Space and need no script. The first
 * question starts open so visitors see the pattern straight away.
 */
export function AskMe({ items }: { items: { q: string; a: string[] }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0} className="group">
          <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left transition-colors hover:text-gold-text [&::-webkit-details-marker]:hidden">
            <span aria-hidden="true" className="font-serif text-[15px] text-gold-text">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-serif text-[clamp(18px,1.8vw,22px)] font-semibold leading-snug text-navy group-hover:text-gold-text">
              {item.q}
            </span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-[18px] leading-none text-gold-text transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <div className="space-y-3 pb-6 pl-[38px] max-sm:pl-0">
            {item.a.map((p) => (
              <p key={p.slice(0, 40)} className="max-w-[760px] text-[16px] leading-relaxed text-text">
                {p}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
