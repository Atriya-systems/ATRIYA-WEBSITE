"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { 
  ShieldCheck, Lock, Orbit, Activity, Shield, 
  Terminal, FileCheck, CheckCircle2, AlertCircle,
  Zap, Cpu, Network, Database, Fingerprint, Search,
  Gavel, Scale, History, Key, Settings2, Globe, ScanEye,
  Activity as Analytics, Zap as Flash, Box, Hexagon,
  Microscope, Layers, PlayCircle, RefreshCw, XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  { id: "S1", name: "Input Parsed", icon: Terminal, role: "Jurisdiction & Scope Establishment", desc: "Identity extraction and jurisdictional binding from constitutional configuration." },
  { id: "S2", name: "Intent Validated", icon: Fingerprint, role: "Canonical Intent Sealing", desc: "Cryptographic fingerprinting of the intent object to prevent mid-execution manipulation." },
  { id: "S3", name: "Protocol Wrapped", icon: Box, role: "Multi-Protocol Activation", desc: "Initialization of provenance chains and activation of governance protocols." },
  { id: "S4", name: "Invariant Pre-Check", icon: FileCheck, role: "Validation Gate Analysis", desc: "Fail-closed verification of constitutional bounds; issuance of admission token." },
  { id: "S5", name: "Cognitive Verdict", icon: Gavel, role: "Deterministic Causal Reasoning", desc: "Hard-binary ADMIT/REFUSE verdict produced by the cognitive arbiter engine." },
  { id: "S6", name: "Task Planned", icon: Layers, role: "Constitutional Goal Injection", desc: "Goal assembly within the admitted envelope; isolation of agent authority." },
  { id: "S7", name: "Engines Executed", icon: Cpu, role: "Intelligence Execution Fabric", desc: "Domain-specific intelligence engines executing within the admitted constitutional scope." },
  { id: "S8", name: "State Sealed", icon: ShieldCheck, role: "Outcome Binding Created", desc: "Cryptographic binding of the execution result to the authorising decision." },
  { id: "S9", name: "Invariant Post-Check", icon: Scale, role: "Token-Cross Verification", desc: "Final verification of the admission token; bypass detection and seal audit." },
  { id: "S10", name: "Audit Committed", icon: Database, role: "Provable Provenance", desc: "Append-only commit to the provenance chain; seal of the execution trace." },
  { id: "S11", name: "Delivered", icon: Globe, role: "Constitutional Release", desc: "Secure delivery of the output to the caller; request state permanently closed." }
];

export default function TracePage() {
  const [currentStage, setCurrentStage] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "completed" | "refused">("idle");
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const runSimulation = async () => {
    setIsRunning(true);
    setStatus("running");
    setLogs([]);
    setCurrentStage(-1);

    for (let i = 0; i < STAGES.length; i++) {
      setCurrentStage(i);
      const stage = STAGES[i];
      
      // Artificial delay to simulate technical depth
      const delay = stage.id === "N5" || stage.id === "N4" ? 1500 : 600;
      
      addLog({
        stage: stage.id,
        event: "PROVING",
        detail: `Validating ${stage.name} constraints...`,
        timestamp: new Date().toISOString(),
        type: "info"
      });

      await new Promise(r => setTimeout(r, delay));

      addLog({
        stage: stage.id,
        event: "COMMITTED",
        detail: stage.desc,
        hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        type: "success"
      });

      if (i === 10) setStatus("completed");
    }
    setIsRunning(false);
  };

  const addLog = (log: any) => {
    setLogs(prev => [...prev, log]);
  };

  return (
    <main className="relative bg-slate-950 text-white selection:bg-indigo-500 overflow-hidden min-h-screen pt-24 font-sans selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
           <div className="space-y-10 max-w-3xl">
              <div className="flex gap-4 items-center">
                 <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 font-mono text-[10px] uppercase tracking-widest font-black italic">TRACE_v1.0</Badge>
                 <SectionLabel className="text-white border-white/20 uppercase">SIGNATURE TRACE SIMULATION</SectionLabel>
              </div>
              <h1 className="text-7xl md:text-[8rem] font-display leading-none italic uppercase tracking-tighter italic">Provable <br /><span className="text-indigo-500 font-bold not-italic lowercase tracking-tight italic">Logic.</span></h1>
              <p className="text-xl text-slate-400 font-sans font-light leading-relaxed max-w-2xl">
                Experience the constitutional execution trace. This simulation demonstrates the structural invariants, causal reasoning, and provable provenance that power every ATRIYA decision.
              </p>
           </div>
           
           <Button 
             onClick={runSimulation}
             disabled={isRunning}
             className="h-20 md:h-24 px-8 md:px-16 w-full md:w-auto bg-white text-slate-950 hover:bg-indigo-500 hover:text-white rounded-full font-display text-lg md:text-2xl transition-all shadow-3xl disabled:opacity-50"
           >
              {isRunning ? <RefreshCw className="animate-spin" /> : <PlayCircle />}
              <span className="ml-2 md:ml-4">{isRunning ? "EXECUTING..." : "START TRACE"}</span>
           </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-12">
             <div className="flex flex-nowrap overflow-x-auto pb-12 gap-6 no-scrollbar">
                {STAGES.map((stage, i) => (
                  <motion.div 
                    key={stage.id}
                    initial={false}
                    animate={{ 
                      opacity: currentStage === i ? 1 : 0.4,
                      scale: currentStage === i ? 1.05 : 1,
                    }}
                    className={`min-w-[280px] p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between h-[300px] ${currentStage === i ? 'bg-indigo-600 border-indigo-400 shadow-3xl ring-4 ring-indigo-500/20' : 'bg-slate-900 border-slate-800'}`}
                  >
                     <div className="space-y-6">
                        <div className="flex justify-between items-center">
                           <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${currentStage === i ? 'bg-white text-indigo-600' : 'bg-slate-800 text-slate-400'}`}>
                              <stage.icon size={28} />
                           </div>
                           <span className="font-mono text-[10px] font-black opacity-30 tracking-widest">{stage.id}</span>
                        </div>
                        <div>
                           <h4 className="text-2xl font-display italic uppercase tracking-tighter leading-none italic">{stage.name}</h4>
                           <p className={`text-[9px] uppercase tracking-widest font-bold mt-2 ${currentStage === i ? 'text-indigo-200' : 'text-slate-500'}`}>{stage.role}</p>
                        </div>
                     </div>
                     
                     <div className="flex justify-start">
                        {currentStage > i ? (
                          <CheckCircle2 className="text-indigo-300" size={24} />
                        ) : currentStage === i ? (
                          <Activity className="animate-pulse text-white" size={24} />
                        ) : (
                          <div className="h-6 w-6 rounded-full border border-slate-800" />
                        )}
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Console / Logs */}
          <div className="lg:col-span-12 bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-4xl flex flex-col h-[600px]">
             <div className="bg-slate-800/50 px-10 py-6 border-b border-slate-700 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-black italic">PROVENANCE_ENGINE_v1.0 // STATUS: {status.toUpperCase()}</div>
             </div>
             
             <div className="flex-1 overflow-y-auto p-12 space-y-8 font-mono no-scrollbar">
                <AnimatePresence>
                  {logs.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-6">
                       <ScanEye size={80} strokeWidth={0.5} />
                       <p className="text-sm uppercase tracking-widest font-black italic">System idling. No execution in progress.</p>
                    </div>
                  )}
                  {logs.map((log, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                       <div className="flex gap-6 items-start">
                          <span className="text-slate-500 shrink-0 text-xs italic">[{log.stage}]</span>
                          <span className={`shrink-0 text-xs font-black px-2 py-0.5 rounded ${log.event === 'COMMITTED' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                             {log.event}
                          </span>
                          <span className="text-sm text-slate-300 leading-relaxed max-w-4xl">{log.detail}</span>
                       </div>
                       {log.hash && (
                         <div className="ml-24 group">
                            <p className="text-[9px] text-indigo-400/30 flex items-center gap-4 transition-colors group-hover:text-indigo-400">
                               <Shield size={10} /> SIGNATURE: {log.hash}
                            </p>
                         </div>
                       )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={logEndRef} />
             </div>

             <div className="bg-slate-800/20 px-10 py-6 border-t border-slate-800 flex justify-between items-center">
                <p className="text-[10px] text-slate-500 font-mono italic">TRACE COMMIT: 0x{Math.random().toString(16).substring(2, 10).toUpperCase()}</p>
                <p className="text-[10px] text-slate-500 font-mono italic">CRYPTOGRAPHIC_SIGNATURE_ACTIVE</p>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL STATE CALLOUT */}
      <AnimatePresence>
        {status === 'completed' && (
          <motion.section 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 inset-x-0 bg-emerald-600 p-12 text-center z-50 shadow-4xl flex flex-col items-center gap-8 border-t border-emerald-400"
          >
             <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-2xl">
                <CheckCircle2 size={64} />
             </div>
             <div className="space-y-4">
                <h2 className="text-5xl font-display italic uppercase tracking-tighter leading-none italic text-white">Execution Released.</h2>
                <p className="text-xl text-emerald-100 font-sans font-light uppercase tracking-widest italic">Constitutional trace complete. Signature is permanent.</p>
             </div>
             <Button variant="outline" className="h-16 px-12 border-white text-white hover:bg-white hover:text-emerald-600 rounded-full font-display text-xl transition-all" onClick={() => setStatus('idle')}>
                Close Trace View
             </Button>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
