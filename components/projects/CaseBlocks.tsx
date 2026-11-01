import { PathwayDiagram } from "@/components/sections/PathwayDiagram";
import {
  BulletList,
  Callout,
  ChangeTable,
  EvidenceFigure,
  JourneyTimeline,
  PairGrid,
  ScopeTable,
  StatGrid,
  ToolChips,
} from "@/components/projects/CaseStudyParts";
import type { CaseBlock } from "@/types/content";

/** Renders one case-study section's blocks in order. */
export function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `${b.type}-${i}`;
        switch (b.type) {
          case "p":
            return <p key={key}>{b.text}</p>;
          case "list":
            return <BulletList key={key} items={b.items} />;
          case "subhead":
            return (
              <h3 key={key} className="pt-3 text-[19px] leading-snug text-navy">
                {b.text}
              </h3>
            );
          case "steps":
            if (b.layout === "journey") return <JourneyTimeline key={key} steps={b.steps} />;
            return (
              <div key={key} className="pt-1">
                <PathwayDiagram steps={b.steps} caption={b.caption} />
              </div>
            );
          case "scope":
            return <ScopeTable key={key} rows={b.rows} />;
          case "figures":
            return (
              <div key={key} className="space-y-10 pt-2">
                {b.items.map((item) => (
                  <EvidenceFigure key={item.src} item={item} />
                ))}
              </div>
            );
          case "stats":
            return <StatGrid key={key} items={b.items} note={b.note} />;
          case "callout":
            return <Callout key={key} heading={b.heading} text={b.text} />;
          case "tools":
            return <ToolChips key={key} tools={b.items} />;
          case "changes":
            return <ChangeTable key={key} items={b.items} />;
          case "pairs":
            return <PairGrid key={key} items={b.items} />;
        }
      })}
    </>
  );
}
