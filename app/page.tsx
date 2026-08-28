import Link from "next/link";
import { FearScoreDemo } from "@/components/FearScoreDemo";
import { Terminal } from "@/components/Terminal";
import { Contact } from "@/components/Contact";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { HeroExperience } from "@/components/HeroExperience";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { EngineeringLoop } from "@/components/EngineeringLoop";
import { AmbientUI } from "@/components/AmbientUI";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <AmbientUI />
      <Terminal />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <nav className="sticky top-0 z-30 -mx-5 flex items-center justify-between border-b border-transparent bg-[rgba(9,11,15,.72)] px-5 py-4 font-mono text-[10px] backdrop-blur-xl md:-mx-8 md:px-8">
          <Link href="/" className="focus-ring flex items-center gap-3 font-bold tracking-[.08em]"><span className="logo-mark">GM</span><span className="hidden text-slate-500 sm:inline">ENGINEERING / 2026</span></Link>
          <div className="flex items-center gap-3 text-[var(--muted)] md:gap-6">
            <a className="focus-ring nav-link" href="#work">WORK</a>
            <a className="focus-ring nav-link" href="#metrics">DATA</a>
            <a className="focus-ring nav-link" href="#about">ABOUT</a>
            <a className="focus-ring nav-link" href="#contact">CONTACT</a>
          </div>
        </nav>

        <header className="grid gap-10 pb-12 pt-16 md:grid-cols-[1.08fr_.92fr] md:items-end md:pb-16 md:pt-24 lg:gap-16">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em]">
              <span className="text-[var(--lime)]">SOFTWARE ENGINEER</span>
              <span className="text-slate-700">/</span>
              <span className="text-[var(--cyan)]">FULL-STACK</span>
              <span className="text-slate-700">/</span>
              <span className="text-[var(--muted)]">APPLIED ML</span>
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[.88] tracking-[-.065em] md:text-8xl lg:text-[7.2rem]">
              Gowshika<br /><span className="outline-word">M.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              I build software systems across frontend, backend, data, and machine learning — with the engineering decisions visible, not hidden behind a stack list.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
              <a href="#work" className="focus-ring primary-cta">EXPLORE SYSTEMS ↓</a>
              
            </div>
          </div>
          <HeroExperience />
        </header>

        <section className="pb-8 md:pb-14">
          <div className="section-kicker"><span>LIVE INTERACTION</span><span>LEGACYLENS / ANCHOR PROJECT</span></div>
          <FearScoreDemo />
        </section>

        <section id="work" className="py-20 md:py-28">
          <div className="mb-10 grid gap-5 md:grid-cols-[100px_1fr]">
            <div className="font-mono text-xs text-slate-600">01 — 05</div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[.18em] text-[var(--lime)]">Selected engineering work</div>
              <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-.03em] md:text-5xl">Not project cards. Engineering systems you can inspect.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">Filter by signal, open a case study, and see the problem, constraints, architectural choices, changes, and verified results.</p>
            </div>
          </div>
          <ProjectExplorer projects={projects} />
        </section>

        <section id="metrics" className="py-20 md:py-28">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[.18em] text-[var(--lime)]">Systems in numbers</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em] md:text-5xl">Data, not decoration.</h2>
            </div>
            <p className="max-w-md font-mono text-[10px] leading-5 text-slate-600">Only metrics explicitly supplied in the project history are shown. No invented users, speedups, scale, or impact.</p>
          </div>
          <MetricsDashboard />
        </section>

        <section className="py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-start">
            <div>
              <div className="font-mono text-xs uppercase tracking-[.18em] text-[var(--lime)]">How I build</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Reasoning is part of the deliverable.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">The portfolio is structured around decisions and trade-offs because SDE work is more than choosing frameworks. Each case study makes the engineering path inspectable.</p>
              <EngineeringLoop />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28">
          <div className="about-grid">
            <div className="font-mono text-xs uppercase tracking-[.18em] text-[var(--lime)]">About / context</div>
            <div>
              <p className="text-2xl leading-snug tracking-tight md:text-4xl">Final-year B.Tech CSE student at VIT Chennai, based in Chennai, graduating June 2027.</p>
              <div className="mt-9 grid gap-7 text-sm leading-7 text-[var(--muted)] md:grid-cols-2">
                <div>
                  <div className="about-label">ENGINEERING</div>
                  <p className="mt-2">React, Next.js, Node.js, FastAPI, Flask, Python, TypeScript, SQL, PostgreSQL, Prisma, and Supabase.</p>
                </div>
                <div>
                  <div className="about-label">APPLIED ML</div>
                  <p className="mt-2">Scikit-learn, XGBoost, Isolation Forest, SHAP, OpenAI API, anomaly detection, and model-backed product workflows.</p>
                </div>
                <div>
                  <div className="about-label">EXPERIENCE</div>
                  <p className="mt-2">Android App Developer internship at Imarticus Learning, May–Aug 2025.</p>
                </div>
                <div>
                  <div className="about-label">TARGET</div>
                  <p className="mt-2">Campus placements across software engineering, full-stack, backend, and applied AI/ML roles in Bangalore and Hyderabad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <footer className="flex flex-col gap-3 border-t border-[var(--line)] py-8 font-mono text-[10px] text-slate-600 md:flex-row md:items-center md:justify-between">
          <span>GOWSHIKA M / SOFTWARE + INTELLIGENT SYSTEMS</span>
          <span>BUILT WITH NEXT.JS · TYPESCRIPT · TAILWIND CSS</span>
        </footer>
      </div>
    </main>
  );
}
