export type Project = {
  slug: string;
  index: string;
  name: string;
  label: string;
  summary: string;
  stack: string[];
  problem: string;
  constraints: string[];
  decisions: string[];
  evolution: string[];
  metrics: { value: string; label: string }[];
  facts: string[];
  focus: ("SOFTWARE" | "FULL-STACK" | "AI / ML")[];
  signal: string;
};

export const projects: Project[] = [
  {
    slug: "legacylens-ai",
    index: "01",
    name: "LegacyLens AI",
    label: "ANCHOR PROJECT",
    summary: "Full-stack code-risk intelligence platform built around a dedicated Fear Score engine.",
    stack: ["FastAPI", "PostgreSQL", "React", "TypeScript"],
    problem: "Assess code/repository risk through a dedicated Fear Score engine inside a full-stack code-risk intelligence platform.",
    constraints: [
      "The supplied project history does not specify additional implementation constraints.",
      "Portfolio content intentionally avoids inventing unlisted model, scale, or business-impact claims.",
    ],
    decisions: [
      "Expose the product as a full-stack system rather than a static ML demo.",
      "Use a Fear Score as the primary risk-oriented interaction and product concept.",
    ],
    evolution: ["No failure or migration detail was supplied for this project."],
    metrics: [
      { value: "14", label: "REST endpoints" },
      { value: "3", label: "PostgreSQL tables" },
    ],
    facts: ["Co-built with teammate Barani."],
    focus: ["SOFTWARE", "FULL-STACK", "AI / ML"],
    signal: "API design + persistence + product interaction",
  },
  {
    slug: "devconnect-ai",
    index: "02",
    name: "DevConnect AI",
    label: "FULL-STACK PRODUCT",
    summary: "Agentic hiring platform spanning auth, dashboards, code execution, AI workflows, data migration, and deployment.",
    stack: ["Next.js", "Prisma", "OpenAI API", "Judge0", "Vercel", "Render", "Supabase", "PostgreSQL"],
    problem: "Create an AI-enabled hiring product connecting developer evaluation workflows with recruiter tooling.",
    constraints: ["Support separate recruiter and developer experiences.", "Integrate coding evaluation and AI-assisted interview workflows."],
    decisions: [
      "Evolve the initial LinkedIn/LeetCode hybrid concept into a broader agentic hiring platform.",
      "Integrate Judge0 for code execution and OpenAI API for AI-generated interview kits.",
    ],
    evolution: ["Migrated to Supabase/PostgreSQL during development."],
    metrics: [],
    facts: [
      "Features include role-based authentication, recruiter and developer dashboards, plagiarism detection, and AI-generated interview kits.",
      "Deployed on Vercel/Render.",
    ],
    focus: ["SOFTWARE", "FULL-STACK", "AI / ML"],
    signal: "auth + integrations + database migration + deployment",
  },
  {
    slug: "honeyshield-ai",
    index: "03",
    name: "HoneyShield AI",
    label: "HACKATHON FINALIST",
    summary: "Explainable behavioral anomaly detection system combining multiple modelling approaches with a usable dashboard.",
    stack: ["Isolation Forest", "GRU autoencoder", "XGBoost", "SHAP", "Streamlit"],
    problem: "Build an explainable behavioral anomaly detection system for the Honeywell Campus Connect hackathon.",
    constraints: ["Solo submission.", "Hackathon setting required a complete technical submission, not just a model."],
    decisions: [
      "Combine Isolation Forest, a GRU autoencoder, and XGBoost rather than presenting a single-model pipeline.",
      "Use SHAP for explainability and Streamlit for the dashboard layer.",
    ],
    evolution: ["No specific failed experiment was supplied in the project history."],
    metrics: [
      { value: "0.8066", label: "AUPRC" },
      { value: "91.53%", label: "attack classification accuracy" },
    ],
    facts: [
      "Honeywell Campus Connect hackathon finalist.",
      "Produced README, system design document, technical report, charts, and architecture diagram.",
    ],
    focus: ["AI / ML", "SOFTWARE"],
    signal: "hybrid modelling + explainability + end-to-end technical delivery",
  },
  {
    slug: "mask-vault",
    index: "04",
    name: "Mask-Vault",
    label: "FINAL-YEAR PROJECT · IN PROGRESS",
    summary: "Privacy-first document system using local OCR, NLP, and Document AI for purpose-aware redaction and secure sharing.",
    stack: ["OCR", "NLP", "Document AI", "Open-weight models", "Flower/FedNLP", "LayoutLM research"],
    problem: "Use OCR, NLP, and Document AI for purpose-aware PII redaction and secure document sharing.",
    constraints: [
      "No external APIs for the privacy-critical AI pipeline.",
      "All components run locally using open-weight models.",
      "Privacy-by-design is a system requirement rather than a presentation claim.",
    ],
    decisions: [
      "Keep the core document-processing pipeline local instead of sending sensitive document contents to external AI services.",
      "Ground the design in research across PII redaction, differential privacy, federated learning, and document layout understanding.",
    ],
    evolution: ["Project is currently in progress."],
    metrics: [],
    facts: ["Research references include Flower/FedNLP and the LayoutLM series."],
    focus: ["SOFTWARE", "AI / ML"],
    signal: "privacy architecture + local inference + research-grounded design",
  },
  {
    slug: "cricket-player-performance-predictor",
    index: "05",
    name: "Cricket Player Performance Predictor",
    label: "ML + WEB PROJECT",
    summary: "Machine-learning cricket performance predictor built around a self-created IPL dataset and a web interface.",
    stack: ["React", "Flask", "Scikit-learn", "Random Forest"],
    problem: "Build a player-performance predictor using a self-built IPL dataset.",
    constraints: ["Dataset was self-built from IPL data."],
    decisions: ["Use Random Forest with a React frontend and Flask backend."],
    evolution: ["No failure, migration, or benchmark detail was supplied in the project history."],
    metrics: [],
    facts: [],
    focus: ["FULL-STACK", "AI / ML"],
    signal: "dataset creation + model integration + frontend/backend delivery",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
