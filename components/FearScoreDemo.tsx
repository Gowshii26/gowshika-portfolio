"use client";

import { FormEvent, useMemo, useState } from "react";

type DemoResult = {
  score: number;
  band: "LOW" | "MEDIUM" | "HIGH";
};

const samples = [
  { label: "React legacy app", url: "https://github.com/example/react-legacy-app" },
  { label: "Old Flask project", url: "https://github.com/example/flask-monolith" },
  { label: "Java Spring project", url: "https://github.com/example/spring-maintenance" },
];

const stages = ["repository", "structure", "risk signals", "fear score"];

function hashScore(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  return 28 + (hash % 65);
}

function band(score: number): DemoResult["band"] {
  if (score >= 70) return "HIGH";
  if (score >= 45) return "MEDIUM";
  return "LOW";
}

export function FearScoreDemo() {
  const [url, setUrl] = useState(samples[0].url);
  const [result, setResult] = useState<DemoResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(-1);

  const valid = useMemo(() => /^https?:\/\/(www\.)?github\.com\/.+\/.+/.test(url.trim()), [url]);

  function analyze(event?: FormEvent) {
    event?.preventDefault();
    if (!valid || loading) return;
    setResult(null);
    setLoading(true);
    setStage(0);

    stages.forEach((_, index) => {
      window.setTimeout(() => setStage(index), 230 * index);
    });

    window.setTimeout(() => {
      const score = hashScore(url.trim());
      setResult({ score, band: band(score) });
      setLoading(false);
      setStage(stages.length - 1);
    }, 980);
  }

  return (
    <div className="fear-shell scanline" aria-labelledby="fear-score-title">
      <div className="fear-header">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[.17em] text-[var(--cyan)]">LEGACYLENS / FEAR SCORE</div>
          <h2 id="fear-score-title" className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-4xl">Give the recruiter something to run, not just something to read.</h2>
        </div>
        <span className="demo-badge">SIMULATED PORTFOLIO DEMO</span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.25fr_.75fr]">
        <div className="p-5 md:p-7">
          <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">Paste a public GitHub repository URL. The interaction demonstrates the LegacyLens Fear Score product concept; it does not claim to run the production analysis engine.</p>

          <form onSubmit={analyze} className="mt-6 flex flex-col gap-3 md:flex-row">
            <label htmlFor="repo-url" className="sr-only">GitHub repository URL</label>
            <div className="repo-input-wrap">
              <span className="font-mono text-xs text-[var(--lime)]">git:</span>
              <input
                id="repo-url"
                value={url}
                onChange={(e) => { setUrl(e.target.value); setResult(null); }}
                className="focus-ring min-w-0 flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-slate-700 md:text-sm"
                placeholder="https://github.com/owner/repository"
                inputMode="url"
              />
            </div>
            <button type="submit" disabled={!valid || loading} className="focus-ring primary-cta justify-center disabled:cursor-not-allowed disabled:opacity-40">
              {loading ? "SCANNING…" : "ANALYZE →"}
            </button>
          </form>

          {!valid && url.length > 3 && <div className="mt-2 font-mono text-[10px] text-[var(--red)]">Enter a public GitHub repository URL.</div>}

          <div className="mt-4 flex flex-wrap gap-2">
            {samples.map((sample) => (
              <button key={sample.label} type="button" onClick={() => { setUrl(sample.url); setResult(null); setStage(-1); }} className="sample-chip focus-ring">{sample.label}</button>
            ))}
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-4" aria-live="polite">
            {stages.map((item, index) => (
              <div key={item} className={`scan-stage ${stage >= index ? "scan-stage-active" : ""}`}>
                <span className="font-mono text-[9px]">0{index + 1}</span>
                <span className="font-mono text-[9px] uppercase tracking-[.11em]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fear-output">
          {!result && !loading && (
            <div className="output-idle">
              <div className="radar-ring"><span /></div>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[.15em] text-slate-600">AWAITING REPOSITORY</div>
            </div>
          )}

          {loading && (
            <div className="output-idle">
              <div className="radar-ring radar-active"><span /></div>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[.15em] text-[var(--cyan)]">READING {stages[Math.max(0, stage)]}</div>
            </div>
          )}

          {result && (
            <div className="w-full">
              <div className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-600">DEMO FEAR SCORE</div>
              <div className="mt-2 flex items-end gap-2"><span className="text-7xl font-semibold tracking-[-.07em] tabular-nums">{result.score}</span><span className="pb-2 font-mono text-xs text-slate-500">/ 100</span></div>
              <div className={`risk-band risk-${result.band.toLowerCase()}`}>{result.band} RISK</div>
              <div className="mt-6 score-track"><span style={{ width: `${result.score}%` }} /></div>
              <p className="mt-5 font-mono text-[10px] leading-5 text-slate-500">Deterministic demo output for portfolio interaction only. Wire this component to the real LegacyLens API when available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
