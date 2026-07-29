import type { ResourceItem } from "@/types/content";
import { Card } from "@/components/ui/Card";

interface ResourceCardProps {
  resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const isExternal = resource.href?.startsWith("http");

  return (
    <Card>
      <p className="text-[15px] font-bold leading-snug text-navy">{resource.name}</p>
      {resource.href ? (
        <a
          href={resource.href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-3 inline-block text-[13.5px] font-semibold text-emerald-text hover:text-navy"
        >
          {resource.linkLabel} →
        </a>
      ) : (
        <span className="mt-3 inline-block text-[13.5px] font-semibold text-text-muted">
          {resource.linkLabel}
        </span>
      )}
    </Card>
  );
}
