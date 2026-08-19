import type { ReportingContinuityCell } from "@/lib/brucellosis/analytics";

interface ReportingContinuityMatrixProps {
  cells: ReportingContinuityCell[];
}

/** Year × half-year grid of WAHIS reporting continuity — deliberately labelled
 *  as reporting coverage, never as an incidence/burden grid. A filled cell
 *  means a WAHIS record existed for that period, not that it was disease-free
 *  or disease-positive beyond the reported outbreak count. */
export function ReportingContinuityMatrix({ cells }: ReportingContinuityMatrixProps) {
  const years = Array.from(new Set(cells.map((c) => c.year))).sort((a, b) => a - b);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-left">
        <caption className="sr-only">
          WAHIS reporting continuity by year and half-year period, 2008 to 2023
        </caption>
        <thead>
          <tr>
            <th scope="col" className="pb-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">
              Year
            </th>
            <th scope="col" className="pb-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">
              Jan–Jun
            </th>
            <th scope="col" className="pb-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">
              Jul–Dec
            </th>
          </tr>
        </thead>
        <tbody>
          {years.map((year) => {
            const h1 = cells.find((c) => c.year === year && c.semester === "H1");
            const h2 = cells.find((c) => c.year === year && c.semester === "H2");
            return (
              <tr key={year} className="border-t border-border">
                <td className="py-2.5 text-[13.5px] font-semibold text-navy">{year}</td>
                {[h1, h2].map((cell, i) => (
                  <td key={i} className="py-2.5 pr-4">
                    {cell?.reported ? (
                      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-navy">
                        <span className="inline-block h-[10px] w-[10px] shrink-0 rounded-[2px] bg-emerald" aria-hidden="true" />
                        {cell.outbreaks} reported
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[13px] text-text-faint">
                        <span className="inline-block h-[10px] w-[10px] shrink-0 rounded-[2px] border border-border" aria-hidden="true" />
                        No WAHIS record
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
