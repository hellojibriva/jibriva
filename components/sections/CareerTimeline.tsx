import type { CareerRole } from "@/types/content";

interface CareerTimelineProps {
  roles: CareerRole[];
  /** Summary = title, programme, organisation and years only (homepage snapshot). */
  variant?: "full" | "summary";
}

export function CareerTimeline({ roles, variant = "full" }: CareerTimelineProps) {
  if (variant === "summary") {
    return (
      <div className="space-y-6">
        {roles.map((role) => (
          <div key={`${role.organisationShort}-${role.years}`} className="border-l-2 border-gold pl-5">
            <p className="text-[16px] font-bold leading-snug text-navy">{role.title}</p>
            <p className="mt-1 text-[14.5px] leading-snug text-text">{role.programme}</p>
            <p className="mt-0.5 text-[13.5px] text-text-muted">
              {role.organisationShort} · {role.years}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {roles.map((role) => (
        <article key={`${role.organisationShort}-${role.years}`} className="border-l-2 border-gold pl-6">
          <h3 className="text-[19px] font-bold leading-snug text-navy">{role.title}</h3>
          <p className="mt-1 text-[15.5px] font-semibold text-gold-text">{role.programme}</p>
          <p className="mt-1 text-[14.5px] text-text-muted">
            {role.organisation} · {role.period}
          </p>
          <ul className="mt-4 space-y-2.5">
            {role.responsibilities.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-3 text-[15px] leading-relaxed text-text-muted">
                <span aria-hidden="true" className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
