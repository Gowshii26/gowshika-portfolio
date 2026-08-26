"use client";

import { useEffect, useState } from "react";

const modes = [
  {
    id: "software",
    label: "SOFTWARE",
    title: "Software Engineer",
    line: "APIs → data → product UI → deployment",
    nodes: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript"],
  },
  {
    id: "fullstack",
    label: "FULL-STACK",
    title: "Full-stack builder",
    line: "frontend ↔ backend ↔ databases ↔ integrations",
    nodes: ["React", "Node.js", "Prisma", "Supabase"],
  },
  {
    id: "ml",
    label: "APPLIED ML",
    title: "Applied ML engineer",
    line: "signals → models → explainability → usable systems",
    nodes: ["Scikit-learn", "XGBoost", "Isolation Forest", "SHAP"],
  },
];

export function HeroExperience() {
  const [active, setActive] = useState(0);
  const mode = modes[active];

  useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % modes.length), 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero-console scanline" aria-label="Interactive engineering profile">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3 font-mono text-[10px] tracking-[.14em] text-[var(--muted)] md:px-5">
        <span>PROFILE.RUNTIME</span>
        <span className="inline-flex items-center gap-2 text-[var(--lime)]"><span className="status-dot" /> AVAILABLE FOR PLACEMENTS</span>
      </div>

      <div className="p-5 md:p-7">
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Engineering focus">
          {modes.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setActive(index)}
              className={`focus-ring rounded-full border px-3 py-2 font-mono text-[10px] tracking-[.12em] transition ${index === active ? "border-[var(--cyan)] bg-[rgba(98,231,255,.08)] text-white" : "border-[var(--line)] text-[var(--muted)] hover:border-slate-500 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="min-h-[165px]" aria-live="polite">
          <div className="font-mono text-[11px] uppercase tracking-[.18em] text-[var(--cyan)]">CURRENT MODE</div>
          <div key={mode.id} className="mode-enter mt-2">
            <div className="text-2xl font-semibold tracking-tight md:text-4xl">{mode.title}</div>
            <div className="mt-3 font-mono text-xs leading-6 text-[var(--muted)]">{mode.line}</div>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {mode.nodes.map((node, index) => (
                <div key={node} className="system-node" style={{ animationDelay: `${index * 80}ms` }}>
                  <span className="node-led" />{node}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-[var(--line)] pt-4 font-mono text-[10px] text-slate-500">
          <span className="text-[var(--lime)]">$</span>
          <span className="typing-line">build systems that work beyond the demo_</span>
        </div>
      </div>
    </div>
  );
}
