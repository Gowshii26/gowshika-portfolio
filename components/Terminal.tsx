"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { siteLinks } from "@/lib/site";

type Line = { type: "command" | "output"; text: string };

const intro: Line[] = [
  { type: "output", text: "GowshikaOS v1.0 · engineering portfolio shell" },
  { type: "output", text: "type 'help' or try 'sudo hire gowshika'" },
];

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>(intro);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "~" || event.key === "`") {
        const target = event.target as HTMLElement;
        if (["INPUT", "TEXTAREA"].includes(target.tagName)) return;
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  function output(command: string) {
    const cmd = command.trim().toLowerCase();
    if (cmd === "help")
  return "whoami\nprojects --list\nskills\ncontact\nsudo hire gowshika\nclear";
    if (cmd === "whoami") return "Gowshika M\nSoftware Engineer · Full-stack · Applied ML\nFinal-year B.Tech CSE · VIT Chennai · graduating June 2027";
    if (cmd === "projects --list") return projects.map((p) => `${p.index}  ${p.name}  [${p.focus.join(" / ")}]`).join("\n");
    if (cmd === "skills") return "SOFTWARE  TypeScript · Python · React · Next.js · Node.js · FastAPI · Flask\nDATA      SQL · PostgreSQL · Prisma · Supabase\nAI / ML   Scikit-learn · XGBoost · Isolation Forest · SHAP · OpenAI API";
    if (cmd === "contact") {
      const configured = [
        siteLinks.email ? `EMAIL     ${siteLinks.email.replace("mailto:", "")}` : "",
        siteLinks.github ? `GITHUB    ${siteLinks.github}` : "",
        siteLinks.linkedin ? `LINKEDIN  ${siteLinks.linkedin}` : "",
      ].filter(Boolean);
      return configured.length
        ? configured.join("\n")
        : "Campus placement season · targeting Bangalore / Hyderabad.\nVerified contact links are not configured yet.";
    }
    if (cmd === "sudo hire gowshika") return "permission granted ✓\nOpening recruiter mode...\nSignal: software engineering + full-stack + applied ML";
    
    if (!cmd) return "";
    return `command not found: ${command}`;
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (input.trim().toLowerCase() === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    const result = output(input);
    setLines((prev) => [...prev, { type: "command", text: `$ ${input}` }, ...(result ? [{ type: "output" as const, text: result }] : [])]);
    setInput("");
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="terminal-trigger focus-ring" aria-label="Open portfolio terminal">
        <span className="status-dot" /> ~/terminal <kbd>~</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Portfolio terminal">
          <div className="terminal-window scanline">
            <div className="terminal-titlebar">
              <div className="flex items-center gap-2"><span className="terminal-dot" /><span className="terminal-dot" /><span className="terminal-dot" /></div>
              <span>gowshika@portfolio:~</span>
              <button onClick={() => setOpen(false)} className="focus-ring rounded px-2 py-1 hover:bg-white/5" aria-label="Close terminal">ESC</button>
            </div>
            <div className="max-h-[65vh] min-h-[380px] overflow-y-auto p-5 font-mono text-sm leading-6 md:p-6">
              {lines.map((line, index) => (
                <pre key={`${line.text}-${index}`} className={`whitespace-pre-wrap ${line.type === "command" ? "text-[var(--lime)]" : "text-slate-300"}`}>{line.text}</pre>
              ))}
              <form onSubmit={submit} className="mt-2 flex gap-2">
                <span className="text-[var(--lime)]">$</span>
                <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} className="w-full bg-transparent text-white outline-none" aria-label="Terminal command" autoComplete="off" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
