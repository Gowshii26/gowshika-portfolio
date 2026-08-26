import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { Terminal } from "@/components/Terminal";
import { AmbientUI } from "@/components/AmbientUI";
import { SystemMap } from "@/components/SystemMap";
import { projectLinks } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { id: "problem", number: "01", title: "Problem", body: [project.problem] },
    { id: "constraints", number: "02", title: "Constraints", body: project.constraints },
    { id: "decisions", number: "03", title: "Decisions / trade-offs", body: project.decisions },
    { id: "evolution", number: "04", title: "What broke / changed", body: project.evolution },
  ];

  const links = projectLinks[project.slug] ?? {};
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      <AmbientUI />
      <Terminal />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <nav className="sticky top-0 z-30 -mx-5 flex items-center justify-between bg-[rgba(7,9,13,.78)] px-5 py-4 font-mono text-[10px] backdrop-blur-xl md:-mx-8 md:px-8">
          <Link className="focus-ring nav-link text-[var(--muted)]" href="/#work">← SYSTEM INDEX</Link>
          <span className="text-slate-600">CASE STUDY / {project.index}</span>
        </nav>

        <header className="case-hero">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--lime)]">{project.label}</span>
            {project.focus.map((focus) => <span key={focus} className="micro-pill">{focus}</span>)}
          </div>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-.055em] md:text-7xl lg:text-8xl">{project.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">{project.summary}</p>

          <div className="mt-9 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="stack-chip">{item}</span>)}
              </div>
              {(links.github || links.live) && (
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px]">
                  {links.github && <a className="focus-ring secondary-cta" href={links.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}
                  {links.live && <a className="focus-ring primary-cta" href={links.live} target="_blank" rel="noreferrer">LIVE SYSTEM ↗</a>}
                </div>
              )}
            </div>
            <div className="font-mono text-[10px] leading-5 text-slate-600 md:text-right">
              <div>SYSTEM SIGNAL</div>
              <div className="text-[var(--cyan)]">{project.signal}</div>
            </div>
          </div>
        </header>

        <SystemMap slug={project.slug} />

        {project.metrics.length > 0 && (
          <section className="case-metrics">
            {project.metrics.map((metric, index) => (
              <div key={metric.label} className="case-metric">
                <div className="font-mono text-[9px] text-slate-600">0{index + 1} / VERIFIED</div>
                <div className="mt-5 text-5xl font-semibold tracking-[-.04em] md:text-6xl">{metric.value}</div>
                <div className="mt-3 font-mono text-[10px] leading-5 text-[var(--muted)]">{metric.label}</div>
              </div>
            ))}
          </section>
        )}

        <div className="case-body">
          <aside className="case-index">
            <div className="font-mono text-[9px] uppercase tracking-[.14em] text-slate-600">POSTMORTEM MAP</div>
            <a href="#system-map" className="focus-ring case-index-link"><span>00</span>System map</a>
            {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="focus-ring case-index-link"><span>{section.number}</span>{section.title}</a>)}
            {project.facts.length > 0 && <a href="#facts" className="focus-ring case-index-link"><span>05</span>Verified facts</a>}
          </aside>

          <div>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="case-section scroll-mt-24">
                <div className="case-section-number">{section.number}</div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[.15em] text-[var(--cyan)]">ENGINEERING NOTE</div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{section.title}</h2>
                </div>
                <div className="space-y-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                  {section.body.map((item) => (
                    <div key={item} className="case-note"><span className="note-marker">→</span><p>{item}</p></div>
                  ))}
                </div>
              </section>
            ))}

            {project.facts.length > 0 && (
              <section id="facts" className="case-section scroll-mt-24">
                <div className="case-section-number">05</div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[.15em] text-[var(--lime)]">SOURCE-LOCKED</div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Verified project facts</h2>
                </div>
                <div className="space-y-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                  {project.facts.map((item) => <div key={item} className="case-note"><span className="note-marker text-[var(--lime)]">✓</span><p>{item}</p></div>)}
                </div>
              </section>
            )}
          </div>
        </div>

        <div className="next-case">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[.14em] text-slate-600">NEXT SYSTEM</div>
            <div className="mt-2 text-2xl font-semibold">{nextProject.name}</div>
          </div>
          <Link href={`/projects/${nextProject.slug}`} className="focus-ring primary-cta">OPEN CASE STUDY →</Link>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 py-10 font-mono text-[9px] text-slate-600">
          <Link className="focus-ring text-[var(--cyan)]" href="/#work">← ALL PROJECTS</Link>
          <span>NO UNLISTED METRICS OR ACHIEVEMENTS ADDED</span>
        </footer>
      </div>
    </main>
  );
}
