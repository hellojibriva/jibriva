import { Card } from "@/components/ui/Card";

interface StatCardProps {
  label: string;
  value: string;
  note?: string;
}

export function StatCard({ label, value, note }: StatCardProps) {
  return (
    <Card hover="none" className="sm:p-7">
      <p className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-emerald-text">{label}</p>
      <p className="mt-3 text-[32px] font-extrabold leading-none text-navy">{value}</p>
      {note && <p className="mt-3 text-[13px] leading-relaxed text-text-muted">{note}</p>}
    </Card>
  );
}
