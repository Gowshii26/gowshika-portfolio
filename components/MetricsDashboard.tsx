"use client";

import { useState } from "react";

const metrics = [
  { value: "14", label: "LegacyLens REST endpoints", type: "SOFTWARE" },
  { value: "3", label: "LegacyLens PostgreSQL tables", type: "DATA" },
  { value: "0.8066", label: "HoneyShield AUPRC", type: "ML" },
  { value: "91.53%", label: "HoneyShield attack classification accuracy", type: "ML" },
];

export function MetricsDashboard() {
  const [active, setActive] = useState(0);

  return (
    <div className="metrics-console">
      <div className="grid lg:grid-cols-[1.25fr_.75fr]">
        <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
          {metrics.map((metric, index) => (
            <button
              type="button"
              key={metric.label}
              onClick={() => setActive(index)}
              className={`focus-ring metric-cell text-left ${active === index ? "metric-cell-active" : ""}`}
            >
              <div className="flex items-center justify-between gap-3 font-mono text-[9px] tracking-[.15em] text-slate-600">
                <span>{String(index + 1).padStart(2, "0")}</span><span>{metric.type}</span>
              </div>
              <div className="mt-7 text-4xl font-semibold tracking-tight md:text-5xl">{metric.value}</div>
              <div className="mt-4 max-w-[18rem] font-mono text-xs leading-5 text-[var(--muted)]">{metric.label}</div>
            </button>
          ))}
        </div>

        <div className="flex min-h-[260px] flex-col justify-between bg-[var(--panel)] p-6 md:p-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[.16em] text-[var(--cyan)]">SELECTED DATAPOINT</div>
            <div className="mt-5 text-6xl font-semibold tracking-[-.05em] md:text-7xl">{metrics[active].value}</div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">{metrics[active].label}</p>
          </div>
          <div className="mt-8">
            <div className="data-track"><span key={active} className="data-fill" /></div>
            <div className="mt-3 font-mono text-[9px] uppercase tracking-[.13em] text-slate-600">Verified project data only · click a datapoint</div>
          </div>
        </div>
      </div>
    </div>
  );
}
