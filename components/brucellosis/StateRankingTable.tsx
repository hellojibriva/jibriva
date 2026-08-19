import type { StateRankingRow } from "@/lib/brucellosis/analytics";

interface StateRankingTableProps {
  rows: StateRankingRow[];
}

export function StateRankingTable({ rows }: StateRankingTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <caption className="sr-only">Nigerian states ranked by reported brucellosis outbreaks, 2008 to 2023</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Rank</th>
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">State</th>
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Zone</th>
            <th scope="col" className="py-3 pr-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Outbreaks</th>
            <th scope="col" className="py-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Share of 39</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.state} className="border-b border-border last:border-b-0">
              <td className="py-2.5 pr-3 text-[13.5px] text-text-muted">{row.rank}</td>
              <td className="py-2.5 pr-3 text-[13.5px] font-semibold text-navy">{row.state}</td>
              <td className="py-2.5 pr-3 text-[13px] text-text-muted">{row.zone ?? "—"}</td>
              <td className="py-2.5 pr-3 text-right text-[13.5px] font-semibold text-navy">{row.outbreaks}</td>
              <td className="py-2.5 text-right text-[13.5px] text-text-muted">{row.percentOfOutbreaks}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
