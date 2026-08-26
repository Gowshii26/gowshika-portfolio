const steps = ["PROBLEM", "CONSTRAINTS", "ARCHITECTURE", "BUILD", "MEASURE", "ITERATE"];

export function EngineeringLoop() {
  return (
    <div className="engineering-loop" aria-label="Engineering approach">
      {steps.map((step, index) => (
        <div className="loop-step" key={step}>
          <span className="font-mono text-[9px] text-slate-600">0{index + 1}</span>
          <span className="font-mono text-[10px] tracking-[.12em]">{step}</span>
          {index < steps.length - 1 && <span className="loop-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}
