import type { DataQuality } from "@/lib/brucellosis/analytics";

interface DataQualityTableProps {
  dataQuality: DataQuality;
}

export function DataQualityTable({ dataQuality }: DataQualityTableProps) {
  const populated = dataQuality.fields.filter((f) => f.availability === "populated");
  const missing = dataQuality.fields.filter((f) => f.availability === "not-reported");

  return (
    <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
      <div>
        <h3 className="text-[15px] font-bold text-navy">Reported in this WAHIS extract</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {populated.map((field) => (
            <li key={field.field} className="flex items-start gap-3">
              <span className="mt-[5px] inline-block h-[8px] w-[8px] shrink-0 rounded-full bg-emerald" />
              <span className="text-[13.5px] leading-relaxed text-text">
                <span className="font-semibold text-navy">{field.field}</span> — {field.note}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[15px] font-bold text-navy">Not reported in this WAHIS extract</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {missing.map((field) => (
            <li key={field.field} className="flex items-start gap-3">
              <span className="mt-[5px] inline-block h-[8px] w-[8px] shrink-0 border border-text-faint" />
              <span className="text-[13.5px] leading-relaxed text-text-muted">
                <span className="font-semibold text-text">{field.field}</span> — {field.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
