interface ArchitectureLayer {
  title: string;
  desc: string;
  observed: boolean;
}

const LAYERS: ArchitectureLayer[] = [
  { title: "Animal health", desc: "WAHIS / veterinary surveillance", observed: true },
  { title: "Human health", desc: "Clinical and laboratory surveillance", observed: false },
  { title: "Community intelligence", desc: "Farmers, livestock handlers, unusual-event reporting", observed: false },
  { title: "Food & environmental signals", desc: "Dairy, food safety, environmental monitoring", observed: false },
  { title: "Integrated One Health intelligence", desc: "Cross-sector synthesis", observed: false },
  { title: "Decision support & response", desc: "Coordinated action", observed: false },
];

/** Conceptual layer diagram — NOT a claim about what this WAHIS analysis
 *  currently integrates. Only the first layer ("Animal health") reflects data
 *  actually present in this dataset; the rest illustrate where a fuller One
 *  Health architecture would need to connect. */
export function OneHealthArchitecture() {
  return (
    <div>
      <ol className="flex flex-col">
        {LAYERS.map((layer, i) => (
          <li key={layer.title} className="relative pl-9">
            {i < LAYERS.length - 1 && (
              <span
                className="absolute left-[7px] top-[22px] h-[calc(100%-8px)] w-px bg-border"
                aria-hidden="true"
              />
            )}
            <span
              className={`absolute left-0 top-[6px] h-[15px] w-[15px] rounded-full border-2 ${
                layer.observed ? "border-emerald bg-emerald" : "border-border bg-white"
              }`}
              aria-hidden="true"
            />
            <div className={i < LAYERS.length - 1 ? "pb-7" : ""}>
              <p className="text-[15px] font-bold text-navy">
                {layer.title}
                {layer.observed && (
                  <span className="ml-2 text-[11px] font-bold uppercase tracking-[0.06em] text-emerald-text">
                    Observed in this dataset
                  </span>
                )}
              </p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-text-muted">{layer.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-text-faint">
        Illustrative One Health surveillance architecture — not a claim about data currently integrated
      </p>
    </div>
  );
}
