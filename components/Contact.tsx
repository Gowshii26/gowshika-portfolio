import { siteLinks } from "@/lib/site";

const links = [
  { label: "EMAIL", href: siteLinks.email },
  { label: "LINKEDIN", href: siteLinks.linkedin },
  { label: "GITHUB", href: siteLinks.github },
];

export function Contact() {
  const configured = links.filter((item) => item.href);

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="contact-panel">
        <div>
          <div className="font-mono text-xs uppercase tracking-[.18em] text-[var(--lime)]">Contact / next move</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Open to software engineering, full-stack, backend, and applied AI/ML roles.</h2>
        </div>
        <div className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
          <p>Currently in campus placement season, targeting Bangalore and Hyderabad roles.</p>
          {configured.length > 0 ? (
            <div className="mt-6 grid gap-2 sm:grid-cols-3 font-mono text-[10px]">
              {configured.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"} className="focus-ring secondary-cta justify-between">
                  {item.label} <b>↗</b>
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-5 rounded-xl border border-[var(--line)] bg-black/20 p-4 font-mono text-xs leading-6">
              Verified contact links are not configured yet. Add them once in <span className="text-[var(--cyan)]">lib/site.ts</span>; this panel will automatically become clickable.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
