import type { ZoneSummary } from "@/lib/brucellosis/analytics";

interface ZoneTableProps {
  zones: ZoneSummary[];
}

export function ZoneTable({ zones }: ZoneTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-left">
        <caption className="sr-only">Reported brucellosis outbreaks by Nigerian geopolitical zone, 2008 to 2023</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="py-3 pr-3 text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Zone</th>
            <th scope="col" className="py-3 pr-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">States reporting</th>
            <th scope="col" className="py-3 pr-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Outbreaks</th>
            <th scope="col" className="py-3 text-right text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">Share of 39</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((z) => (
            <tr key={z.zone} className="border-b border-border last:border-b-0">
              <td className="py-2.5 pr-3 text-[13.5px] font-semibold text-navy">{z.zone}</td>
              <td className="py-2.5 pr-3 text-right text-[13px] text-text-muted">
                {z.statesReporting}/{z.statesInZone}
              </td>
              <td className="py-2.5 pr-3 text-right text-[13.5px] font-semibold text-navy">{z.outbreaks}</td>
              <td className="py-2.5 text-right text-[13.5px] text-text-muted">{z.percentOfOutbreaks}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
