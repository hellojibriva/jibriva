export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

interface JibrivaWorkflowProps {
  steps: WorkflowStep[];
}

export function JibrivaWorkflow({ steps }: JibrivaWorkflowProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8">
      {steps.map((s) => (
        <div key={s.step} className="border-t-2 border-emerald pt-5">
          <p className="text-[12px] font-bold tracking-[0.06em] text-text-faint">{s.step}</p>
          <h3 className="mt-1 text-[15.5px] font-bold text-navy">{s.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-text-muted">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
