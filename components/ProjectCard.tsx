import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group grid gap-5 border-t border-[var(--line)] py-8 transition md:grid-cols-[90px_1.3fr_1fr] md:gap-8 md:py-10"
    >
      <div className="font-mono text-xs text-[var(--muted)]">{project.index}</div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--lime)]">{project.label}</div>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight transition group-hover:translate-x-1 md:text-3xl">{project.name}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span key={item} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] text-slate-400">{item}</span>
          ))}
        </div>
        <div className="font-mono text-xs text-[var(--cyan)]">OPEN CASE STUDY ↗</div>
      </div>
    </Link>
  );
}
