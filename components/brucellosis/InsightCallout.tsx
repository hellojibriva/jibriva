interface InsightCalloutProps {
  index: string;
  claim: string;
  qualifier: string;
}

/** Restrained analytical callout: a bolded finding immediately qualified by
 *  what it does not establish. Used sparingly, directly after the chart or
 *  table the claim is drawn from. */
export function InsightCallout({ index, claim, qualifier }: InsightCalloutProps) {
  return (
    <div className="border-l-2 border-emerald pl-6">
      <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-emerald-text">Insight {index}</p>
      <p className="mt-2 text-[18px] font-bold leading-snug text-navy sm:text-[20px]">{claim}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-text-muted">{qualifier}</p>
    </div>
  );
}
