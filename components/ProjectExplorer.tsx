"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";

const filters = ["ALL", "SOFTWARE", "FULL-STACK", "AI / ML"] as const;
type Filter = (typeof filters)[number];

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("ALL");
  const visible = filter === "ALL" ? projects : projects.filter((project) => project.focus.includes(filter));

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Project filters">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`focus-ring rounded-full border px-3 py-2 font-mono text-[10px] tracking-[.12em] transition ${filter === item ? "border-[var(--lime)] bg-[rgba(185,255,102,.07)] text-white" : "border-[var(--line)] text-[var(--muted)] hover:border-slate-500 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {visible.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="project-panel focus-ring group">
            <div className="project-number">{project.index}</div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[.17em] text-[var(--lime)]">{project.label}</span>
                {project.focus.slice(0, 2).map((focus) => <span key={focus} className="micro-pill">{focus}</span>)}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">{project.name}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">{project.summary}</p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.stack.slice(0, 6).map((item) => <span className="stack-chip" key={item}>{item}</span>)}
              </div>
            </div>

            <div className="project-side">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[.15em] text-slate-600">SYSTEM SIGNAL</div>
                <div className="mt-2 font-mono text-xs leading-5 text-[var(--muted)]">{project.signal}</div>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
