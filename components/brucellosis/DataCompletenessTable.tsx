import type { FieldAvailability } from "@/lib/brucellosis/analytics";

interface DataCompletenessTableProps {
  fields: FieldAvailability[];
  recordCount: number;
}

export function DataCompletenessTable({ fields, recordCount }: DataCompletenessTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">WAHIS field-level completeness across all {recordCount} Nigeria brucellosis records</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Field</th>
            <th scope="col" className="py-3 pr-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Populated</th>
            <th scope="col" className="py-3 pr-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Completeness</th>
            <th scope="col" className="py-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Interpretation</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f) => {
            const isPopulated = f.availability === "populated";
            const count = isPopulated ? recordCount : 0;
            return (
              <tr key={f.field} className="border-b border-border last:border-b-0 align-top">
                <td className="py-3 pr-3 text-[13.5px] font-semibold text-navy">{f.field}</td>
                <td className="py-3 pr-3 text-right text-[13px] text-text-muted">
                  {count}/{recordCount}
                </td>
                <td className="py-3 pr-3 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[13px] font-bold ${
                      isPopulated ? "text-emerald-text" : "text-text-faint"
                    }`}
                  >
                    <span
                      className={`inline-block h-[9px] w-[9px] shrink-0 rounded-[2px] ${
                        isPopulated ? "bg-emerald" : "border border-border"
                      }`}
                      aria-hidden="true"
                    />
                    {isPopulated ? "100%" : "0%"}
                  </span>
                </td>
                <td className="py-3 text-[13px] leading-relaxed text-text-muted">{f.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
