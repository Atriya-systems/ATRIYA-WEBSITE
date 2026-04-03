"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';

function DiagramArrow() {
  return (
    <div className="flex justify-center py-1">
      <ArrowDown className="w-5 h-5 text-slate-300" strokeWidth={1.5} />
    </div>
  );
}

function DiagramNode({
  label,
  variant = "default",
  sub,
}: {
  label: string;
  variant?: "default" | "decision" | "admit" | "refuse" | "layer";
  sub?: string;
}) {
  const base = "px-6 py-4 rounded-2xl border font-mono text-[11px] uppercase tracking-widest font-black text-center transition-all";
  const variants = {
    default: "bg-slate-50 border-slate-200 text-slate-600",
    decision: "bg-slate-950 border-slate-800 text-white text-sm py-6",
    admit: "bg-emerald-50 border-emerald-200 text-emerald-700",
    refuse: "bg-rose-50 border-rose-200 text-rose-700",
    layer: "bg-indigo-50 border-indigo-200 text-indigo-700",
  };

  return (
    <div className={`${base} ${variants[variant]}`}>
      <span>{label}</span>
      {sub && <div className="text-[9px] opacity-50 mt-1 normal-case font-normal font-sans">{sub}</div>}
    </div>
  );
}

/* -------------------------------------------
   DIAGRAM 1: GOVERNED EXECUTION
------------------------------------------- */
export function Diagram_GovernedExecution({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-sm flex flex-col ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-500 font-black mb-10 text-center">
        Governed Execution
      </p>

      <div className="flex flex-col gap-1 max-w-xs mx-auto w-full">
        <DiagramNode label="Intent" />
        <DiagramArrow />
        <DiagramNode label="Constraint Evaluation" />
        <DiagramArrow />

        {/* Decision gateway */}
        <div className="bg-slate-950 rounded-2xl border border-slate-700 px-6 py-6 text-center shadow-xl">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">Decision Gateway</p>
          <div className="flex gap-3 justify-center mt-3">
            <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-lg">
              Admit
            </span>
            <span className="bg-rose-500/20 border border-rose-500/30 text-rose-300 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-lg">
              Refuse
            </span>
          </div>
        </div>

        <DiagramArrow />
        <DiagramNode label="Bounded Execution" />
        <DiagramArrow />
        <DiagramNode label="Sealed Output" />
      </div>

      <p className="text-center text-xs text-slate-400 font-light italic mt-10 pt-6 border-t border-slate-50">
        Execution does not begin until it is permitted.
      </p>
    </div>
  );
}

/* -------------------------------------------
   DIAGRAM 2: CONTROL VS POSSIBILITY
------------------------------------------- */
export function Diagram_ControlVsPossibility({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-sm flex flex-col ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-500 font-black mb-10 text-center">
        Control vs Possibility
      </p>

      <div className="grid grid-cols-1 gap-8">
        {/* Traditional */}
        <div className="space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-black text-center">Traditional Systems</p>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <div className="bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Execution</div>
            <ArrowDown className="w-4 h-4 text-slate-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Validation</div>
            <ArrowDown className="w-4 h-4 text-slate-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-rose-50 border border-rose-100 text-rose-500 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Correction</div>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* ATRIYA */}
        <div className="space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-indigo-500 font-black text-center">ATRIYA</p>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Validation</div>
            <ArrowDown className="w-4 h-4 text-indigo-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Execution (if permitted)</div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 font-light italic mt-10 pt-6 border-t border-slate-50">
        ATRIYA does not control behavior. It defines what behavior is possible.
      </p>
    </div>
  );
}

/* -------------------------------------------
   DIAGRAM 3: FAILURE MODEL
------------------------------------------- */
export function Diagram_FailureModel({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-sm flex flex-col ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-500 font-black mb-10 text-center">
        Failure Handling
      </p>

      <div className="grid grid-cols-1 gap-8">
        {/* Traditional */}
        <div className="space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-black text-center">Traditional</p>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <div className="bg-rose-50 border border-rose-100 text-rose-600 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Failure</div>
            <ArrowDown className="w-4 h-4 text-slate-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-amber-50 border border-amber-100 text-amber-600 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Degraded Output</div>
            <ArrowDown className="w-4 h-4 text-slate-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">User sees result</div>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* ATRIYA */}
        <div className="space-y-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-indigo-500 font-black text-center">ATRIYA</p>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <div className="bg-rose-50 border border-rose-100 text-rose-600 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Failure</div>
            <ArrowDown className="w-4 h-4 text-slate-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-slate-950 border border-slate-800 text-white font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">Refusal</div>
            <ArrowDown className="w-4 h-4 text-slate-300 rotate-[-90deg]" strokeWidth={1.5} />
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] uppercase tracking-widest font-black px-4 py-3 rounded-xl">No Execution</div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 font-light italic mt-10 pt-6 border-t border-slate-50">
        Failure does not propagate.
      </p>
    </div>
  );
}

/* -------------------------------------------
   DIAGRAM 4: SYSTEM LAYERS
------------------------------------------- */
export function Diagram_SystemLayers({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-sm flex flex-col ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-500 font-black mb-10 text-center">
        System Architecture
      </p>

      <div className="flex flex-col gap-1 max-w-xs mx-auto w-full">
        <div className="bg-indigo-950 border border-indigo-900 text-indigo-100 font-mono text-[11px] uppercase tracking-widest font-black px-6 py-5 rounded-2xl text-center shadow-xl">
          Governance Layer
          <div className="text-indigo-400 font-sans normal-case font-light text-[10px] mt-1">Execution rules &amp; constraints</div>
        </div>
        <DiagramArrow />
        <div className="bg-indigo-800 border border-indigo-700 text-indigo-100 font-mono text-[11px] uppercase tracking-widest font-black px-6 py-5 rounded-2xl text-center shadow-lg">
          Intelligence Layer
          <div className="text-indigo-300 font-sans normal-case font-light text-[10px] mt-1">Evaluated behavior &amp; decisions</div>
        </div>
        <DiagramArrow />
        <div className="bg-indigo-600 border border-indigo-500 text-white font-mono text-[11px] uppercase tracking-widest font-black px-6 py-5 rounded-2xl text-center shadow-md">
          Economic Layer
          <div className="text-indigo-100 font-sans normal-case font-light text-[10px] mt-1">Value exchange &amp; traceability</div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 font-light italic mt-10 pt-6 border-t border-slate-50">
        Capabilities are layered. Execution is unified.
      </p>
    </div>
  );
}

/* -------------------------------------------
   ALL DIAGRAMS LAYOUT — full 2×2 grid
------------------------------------------- */
export function SystemDiagramsGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      <Diagram_GovernedExecution />
      <Diagram_ControlVsPossibility />
      <Diagram_FailureModel />
      <Diagram_SystemLayers />
    </div>
  );
}
