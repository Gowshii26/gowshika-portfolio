"use client";

import { useMemo, useState } from "react";

type Node = {
  id: string;
  eyebrow: string;
  title: string;
  detail: string;
};

type MapSpec = {
  note: string;
  nodes: Node[];
};

const maps: Record<string, MapSpec> = {
  "legacylens-ai": {
    note: "Portfolio-level system map built only from supplied LegacyLens facts.",
    nodes: [
      {
        id: "ui",
        eyebrow: "EXPERIENCE",
        title: "React + TypeScript",
        detail:
          "Frontend layer for the full-stack code-risk intelligence product.",
      },
      {
        id: "api",
        eyebrow: "APPLICATION",
        title: "FastAPI",
        detail: "Backend surface with 14 REST endpoints.",
      },
      {
        id: "fear",
        eyebrow: "PRODUCT LOGIC",
        title: "Fear Score engine",
        detail:
          "The core risk-oriented product interaction supplied for LegacyLens AI.",
      },
      {
        id: "data",
        eyebrow: "PERSISTENCE",
        title: "PostgreSQL",
        detail: "Persistence layer with 3 supplied PostgreSQL tables.",
      },
    ],
  },

  creatorops: {
    note:
      "Production system map covering CreatorOps application, cloud backend, AI, publishing, analytics, and deployment.",
    nodes: [
      {
        id: "app",
        eyebrow: "EXPERIENCE",
        title: "Next.js + TypeScript",
        detail:
          "Full-stack application serving Admin, Manager, Creator, and Client experiences.",
      },
      {
        id: "workflow",
        eyebrow: "PRODUCT LOGIC",
        title: "Approval workflow",
        detail:
          "Content moves through draft, internal review, client review, approval, scheduling, and publication.",
      },
      {
        id: "supabase",
        eyebrow: "CLOUD BACKEND",
        title: "Supabase",
        detail:
          "Provides authentication, PostgreSQL persistence, private media storage, and Row Level Security.",
      },
      {
        id: "gemini",
        eyebrow: "AI",
        title: "Gemini API",
        detail:
          "Supports caption, hashtag, visual-concept, and structured creative generation.",
      },
      {
        id: "instagram",
        eyebrow: "EXTERNAL API",
        title: "Instagram API",
        detail:
          "Publishes approved image posts and Reels to a real Instagram Business account.",
      },
      {
        id: "insights",
        eyebrow: "ANALYTICS",
        title: "Instagram Insights",
        detail:
          "Retrieves live engagement data back into the CreatorOps analytics dashboard.",
      },
      {
        id: "deploy",
        eyebrow: "DELIVERY",
        title: "GitHub → Vercel",
        detail:
          "Production deployment is delivered from version-controlled source and is also installable as a PWA.",
      },
    ],
  },

  "devconnect-ai": {
    note:
      "Product map reflects the supplied stack, features, migration, integrations, and deployment facts.",
    nodes: [
      {
        id: "next",
        eyebrow: "EXPERIENCE",
        title: "Next.js",
        detail:
          "Application layer for recruiter and developer experiences.",
      },
      {
        id: "product",
        eyebrow: "PRODUCT",
        title: "Role-based workflows",
        detail:
          "Role-based auth plus recruiter and developer dashboards.",
      },
      {
        id: "judge",
        eyebrow: "INTEGRATION",
        title: "Judge0",
        detail: "Integration supplied for code execution.",
      },
      {
        id: "openai",
        eyebrow: "INTEGRATION",
        title: "OpenAI API",
        detail: "Used for AI-generated interview kits.",
      },
      {
        id: "prisma",
        eyebrow: "DATA ACCESS",
        title: "Prisma",
        detail: "Data access layer in the supplied stack.",
      },
      {
        id: "db",
        eyebrow: "DATA",
        title: "Supabase / PostgreSQL",
        detail:
          "Target data platform after the supplied development migration.",
      },
      {
        id: "deploy",
        eyebrow: "DELIVERY",
        title: "Vercel / Render",
        detail: "Supplied deployment targets for the platform.",
      },
    ],
  },

  "honeyshield-ai": {
    note:
      "Model map uses only the supplied HoneyShield stack and delivery facts.",
    nodes: [
      {
        id: "dash",
        eyebrow: "EXPERIENCE",
        title: "Streamlit",
        detail:
          "Dashboard layer delivered with the hackathon submission.",
      },
      {
        id: "if",
        eyebrow: "DETECTION",
        title: "Isolation Forest",
        detail:
          "One of the supplied anomaly-detection approaches.",
      },
      {
        id: "gru",
        eyebrow: "DETECTION",
        title: "GRU autoencoder",
        detail:
          "Sequence-oriented autoencoder included in the supplied stack.",
      },
      {
        id: "xgb",
        eyebrow: "CLASSIFICATION",
        title: "XGBoost",
        detail: "Classification component in the supplied stack.",
      },
      {
        id: "shap",
        eyebrow: "EXPLAINABILITY",
        title: "SHAP",
        detail: "Explainability layer used in the system.",
      },
    ],
  },

  "mask-vault": {
    note:
      "Privacy boundary is explicit: the supplied project requires local, open-weight processing with no external APIs.",
    nodes: [
      {
        id: "doc",
        eyebrow: "INPUT",
        title: "Document",
        detail:
          "Document enters the privacy-critical local processing boundary.",
      },
      {
        id: "ocr",
        eyebrow: "UNDERSTANDING",
        title: "OCR + NLP + Document AI",
        detail:
          "Supplied techniques for extracting and understanding document content.",
      },
      {
        id: "redact",
        eyebrow: "PRIVACY LOGIC",
        title: "Purpose-aware PII redaction",
        detail:
          "Core purpose-aware privacy behavior described for the project.",
      },
      {
        id: "share",
        eyebrow: "OUTPUT",
        title: "Secure sharing",
        detail: "Secure sharing is part of the supplied platform goal.",
      },
      {
        id: "local",
        eyebrow: "BOUNDARY",
        title: "Local open-weight models",
        detail:
          "No external APIs for the privacy-critical AI pipeline.",
      },
    ],
  },

  "cricket-player-performance-predictor": {
    note:
      "Compact map of the supplied web + ML stack and self-built data source.",
    nodes: [
      {
        id: "react",
        eyebrow: "EXPERIENCE",
        title: "React",
        detail: "Frontend layer for the predictor.",
      },
      {
        id: "flask",
        eyebrow: "APPLICATION",
        title: "Flask",
        detail:
          "Backend layer connecting the web experience and model.",
      },
      {
        id: "rf",
        eyebrow: "MODEL",
        title: "Random Forest",
        detail: "Supplied machine-learning model.",
      },
      {
        id: "ipl",
        eyebrow: "DATA",
        title: "Self-built IPL dataset",
        detail:
          "The project is built on a self-created IPL dataset.",
      },
    ],
  },
};

export function SystemMap({ slug }: { slug: string }) {
  const spec = maps[slug];

  const [selectedId, setSelectedId] = useState(
    spec?.nodes[0]?.id ?? "",
  );

  const selected = useMemo(
    () =>
      spec?.nodes.find((node) => node.id === selectedId) ??
      spec?.nodes[0],
    [selectedId, spec],
  );

  if (!spec || !selected) return null;

  return (
    <section
      id="system-map"
      className="system-map-shell scroll-mt-24"
      aria-label="Interactive project system map"
    >
      <div className="system-map-head">
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[.16em] text-[var(--cyan)]">
            INTERACTIVE SYSTEM MAP
          </div>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Inspect the architecture signal.
          </h2>
        </div>

        <p className="max-w-xl font-mono text-[9px] leading-5 text-slate-600">
          {spec.note}
        </p>
      </div>

      <div className="system-map-grid">
        <div className="architecture-canvas">
          <div className="architecture-rail" aria-hidden="true" />

          {spec.nodes.map((node, index) => (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedId(node.id)}
              className={`focus-ring architecture-node ${
                selected.id === node.id
                  ? "architecture-node-active"
                  : ""
              }`}
              aria-pressed={selected.id === node.id}
            >
              <span className="architecture-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 text-left">
                <span className="block font-mono text-[8px] uppercase tracking-[.14em] text-slate-600">
                  {node.eyebrow}
                </span>

                <span className="mt-1 block text-sm font-semibold text-slate-200">
                  {node.title}
                </span>
              </span>

              <span
                className="architecture-ping"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        <div
          className="architecture-inspector"
          aria-live="polite"
        >
          <div className="font-mono text-[9px] uppercase tracking-[.15em] text-[var(--lime)]">
            NODE INSPECTOR
          </div>

          <div className="mt-6 font-mono text-[10px] text-slate-600">
            {selected.eyebrow}
          </div>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {selected.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            {selected.detail}
          </p>

          <div className="mt-7 flex items-center gap-3 font-mono text-[9px] text-slate-600">
            <span className="status-dot" />
            CLICK ANOTHER NODE TO TRACE THE SYSTEM
          </div>
        </div>
      </div>
    </section>
  );
}