export interface AnswerRow {
  question: string;
  supported: boolean;
  why: string;
}

interface AnswerTableProps {
  rows: AnswerRow[];
}

/** "What can this dataset actually answer?" table — supported vs. not, with
 *  the field-level reason. Distinguished by an icon + text label, not colour
 *  alone. */
export function AnswerTable({ rows }: AnswerTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">What the WAHIS brucellosis extract can and cannot answer</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Analytical question</th>
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Supported?</th>
            <th scope="col" className="py-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Evidence / limitation</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.question} className="border-b border-border last:border-b-0">
              <td className="py-3 pr-3 text-[13.5px] font-medium text-navy">{row.question}</td>
              <td className="py-3 pr-3">
                <span
                  className={`inline-flex items-center gap-1.5 text-[12.5px] font-bold uppercase tracking-[0.04em] ${
                    row.supported ? "text-emerald-text" : "text-text-faint"
                  }`}
                >
                  <span aria-hidden="true">{row.supported ? "✓" : "✕"}</span>
                  {row.supported ? "Yes" : "No"}
                </span>
              </td>
              <td className="py-3 text-[13px] leading-relaxed text-text-muted">{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
