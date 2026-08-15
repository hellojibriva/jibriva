import Link from "next/link";
import type { Project } from "@/types/content";
import { Badge, statusToTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

interface ProjectCardProps {
  project: Project;
  variant?: "full" | "lightweight";
}

export function ProjectCard({ project, variant = "full" }: ProjectCardProps) {
  if (variant === "lightweight") {
    return (
      <Card>
        <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-emerald-text">
          {project.tag}
        </p>
        <h3 className="mt-3 text-[17px] font-bold text-navy">{project.name}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-text-muted">{project.overview}</p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-emerald-text">
          {project.tag}
        </p>
        <Badge label={project.status} tone={statusToTone(project.status)} />
      </div>

      <h3 className="mt-4 text-[19px] font-bold text-navy">{project.name}</h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-text-muted">{project.overview}</p>

      <p className="mt-4 text-[13.5px] leading-relaxed text-text-muted">
        <span className="font-semibold text-navy">Problem addressed: </span>
        {project.problem}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Pill key={tech} label={tech} />
        ))}
      </div>

      {project.href &&
        (project.href.startsWith("/") ? (
          <Link
            href={project.href}
            className="mt-5 inline-block text-[14px] font-semibold text-emerald-text hover:text-navy"
          >
            Read Case Study →
          </Link>
        ) : (
          <a
            href={project.href}
            {...(project.openInNewTab === false
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="mt-5 inline-block text-[14px] font-semibold text-emerald-text hover:text-navy"
          >
            {project.ctaLabel ?? "Explore Platform →"}
          </a>
        ))}
    </Card>
  );
}
