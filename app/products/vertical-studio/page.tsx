"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Terminal, ShieldCheck, Zap, Layers, 
  Search, CheckCircle2, ArrowRight, Settings2,
  FileCode, PlayCircle, Lock
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VerticalStudioPage() {
  const capabilities = [
    {
      title: "Governance Building Blocks",
      text: "Eliminate architectural debt. Access a wide array of pre-governed intelligence primitives proven in mission-critical environments.",
      icon: Layers,
      accent: "text-indigo-600"
    },
    {
       title: "Domain Configuration Layers",
       text: "Deploy specialized intelligence at scale. Leverage proven structural components while maintaining sector-specific logic.",
       icon: Zap,
       accent: "text-amber-500"
    },
    {
      title: "Immutable Finalization",
      text: "Once satisfied, finalize your intelligence layer with systemic certainty. Every result produced is recorded on an immutable governance trail.",
      icon: Lock,
      accent: "text-emerald-500"
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24">
      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex gap-4 items-center mb-8">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">BUILDER ENVIRONMENT</Badge>
            <SectionLabel>VERTICAL STUDIO</SectionLabel>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 mb-10">
            Design Intelligence.<br />
            <span className="text-indigo-600 italic font-light">With Absolute Certainty.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-[750px] leading-relaxed mb-12">
            Eliminate the bottleneck of manual governance development. 
            Vertical Studio allows you to leverage structural building blocks 
            to deliver specialized, high-fidelity solutions with systemic integrity.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
               Request Beta Access <ArrowRight size={20} className="ml-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               Explore the Substrate
            </Button>
          </div>
        </motion.div>
      </section>

      {/* THREE CORE WORKFLOWS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {capabilities.map((cap, i) => (
          <div key={i} className="p-12 bg-white border border-slate-200 rounded-[3rem] flex flex-col justify-between h-[450px] hover:border-indigo-300 transition-all shadow-sm hover:shadow-indigo-500/5 group">
             <div className={`${cap.accent} bg-slate-50 h-16 w-16 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors`}>
                <cap.icon size={32} strokeWidth={1.5} />
             </div>
             <div className="space-y-6">
                <h3 className="text-3xl font-display text-slate-900">{cap.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed font-sans">{cap.text}</p>
             </div>
          </div>
        ))}
      </section>

      {/* COMPONENT WORKBENCH */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-20">
        <div className="max-w-3xl space-y-6">
           <SectionLabel>THE WORKBENCH</SectionLabel>
           <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">Governance <br />Building Blocks.</h2>
           <p className="text-xl text-slate-600 font-sans leading-relaxed">
              Don&apos;t build safety from scratch. Harness the complete system 
              substrate via individually integrated blocks designed for 
              real-time execution.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { name: "Pre-Execution Verification", performance: "Real-Time", sub: "Safety Layer" },
             { name: "Post-Execution Audit", performance: "Synchronous", sub: "Integrity Layer" },
             { name: "Dynamic Intervention", performance: "Immediate", sub: "Control Layer" },
             { name: "Identity Governance", performance: "Real-Time", sub: "Security Layer" },
             { name: "Contextual Awareness", performance: "Real-Time", sub: "Decision Layer" },
             { name: "Jurisdictional Logic", performance: "Synchronous", sub: "Compliance Layer" },
             { name: "State Persistence", performance: "Real-Time", sub: "Audit Layer" },
             { name: "Strategic Arbitration", performance: "Immediate", sub: "Reasoning Layer" }
           ].map((block, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-indigo-300 transition-all group shadow-sm">
                 <p className="text-[10px] font-mono text-slate-400 mb-2 group-hover:text-indigo-600 uppercase tracking-widest font-bold">SYSTEM_BLOCK</p>
                 <h4 className="text-base font-sans font-bold mb-6 text-slate-900">{block.name}</h4>
                 <div className="flex justify-between items-center text-[10px] font-mono mb-4">
                    <span className="text-slate-400 uppercase">Response:</span>
                    <span className="text-indigo-600 font-bold">{block.performance}</span>
                 </div>
                 <div className="pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    {block.sub}
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* INTEGRATED SYSTEMS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 bg-slate-50 rounded-[4rem] border border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_bottom_left,#4f46e5_0%,transparent_50%)]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
          <div className="space-y-10">
            <SectionLabel>INTEGRATED SYSTEMS</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-950">Universal Logic.<br/><span className="text-indigo-600 italic font-light">Domain Expertise.</span></h2>
            <p className="text-xl text-slate-600 leading-relaxed font-sans">
              ATRIYA separates core logic from domain-specific vocabulary, 
              ensuring that the same systemic integrity is applied 
              across diverse industries without reconfiguration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                { detail: "Context Logic", desc: "Maps universal intelligence to domain-specific terminology." },
                { detail: "Audit Framework", desc: "Immutable trail for verifying interaction honesty." },
                { detail: "State Substrate", desc: "Tracks cognitive trajectory and interaction history." },
                { detail: "Verification Engine", desc: "Real-time assessment of complex situational inputs." }
              ].map((p, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center shrink-0 font-display text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all text-xs">VS</div>
                  <div className="space-y-1">
                    <p className="font-bold text-sm text-slate-900">{p.detail}</p>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-2 rounded-[3.5rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
            <div className="bg-slate-900 min-h-[500px] p-12 text-white flex flex-col justify-between rounded-[3.2rem]">
              <div className="space-y-6">
                <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest font-bold">Workflow: System Calibration</p>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6 font-mono text-xs">
                  <div className="flex justify-between items-center text-emerald-400">
                    <span>INITIALIZED</span>
                    <span>READY_STATE</span>
                  </div>
                  <div className="flex justify-between items-center text-indigo-400">
                    <span>DOM_ADAPTER_DEPLOYED</span>
                    <span>ACTIVE</span>
                  </div>
                  <div className="pt-6 border-t border-white/10 space-y-4 text-slate-400">
                    <div className="flex justify-between"><span>RAW_INPUT</span><span>GOVERNED_REASONING</span></div>
                    <div className="flex justify-between"><span>SITUATIONAL_DATA</span><span>VERIFIABLE_OUTCOME</span></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-display text-2xl leading-tight">"Consistent Reasoning.<br/>Configurable Mission."</p>
                <Link href="/platform" className="text-indigo-400 text-xs font-mono uppercase border-b border-indigo-400/30 pb-1 hover:text-indigo-300 transition-colors inline-block">Explore the Vision &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="bg-indigo-600 p-12 lg:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-200 mt-12">
          <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
             <Zap size={300} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
             <div className="space-y-10">
                <SectionLabel className="border-white/20 text-white">STRATEGIC ADVANTAGE</SectionLabel>
                <h2 className="text-4xl md:text-[5.5rem] font-display leading-[0.9]">Speed vs. <br />Certainty.</h2>
                <p className="text-xl font-sans leading-relaxed text-indigo-100/80">
                   Eliminate the traditional trade-off between deployment velocity 
                   and enterprise compliance. We provide the structural building 
                   blocks; you define the interaction experience.
                </p>
             </div>
             <div className="flex flex-col justify-center gap-12 lg:pl-12">
                 <div className="pb-8 border-b border-white/10">
                    <p className="text-4xl font-display mb-2 text-white">Accelerated</p>
                    <p className="text-sm font-mono uppercase tracking-widest text-indigo-200/60">Governance Deployment</p>
                 </div>
                 <div className="pb-8 border-b border-white/10">
                    <p className="text-4xl font-display mb-2 text-white">Sustainable</p>
                    <p className="text-sm font-mono uppercase tracking-widest text-indigo-200/60">Institutional Integrity</p>
                 </div>
                 <Button size="lg" className="h-16 px-12 bg-white text-indigo-600 hover:bg-slate-50 border-none rounded-full font-display">
                    View Integration Guide
                 </Button>
              </div>
          </div>
        </div>
      </section>

      {/* STUDIO EXPERIENCE PREVIEW */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="bg-slate-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-3xl">
           <div className="p-10 border-b border-white/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/40">
              <div className="flex gap-4 items-center">
                 <span className="text-indigo-500 animate-pulse">●</span>
                 <span>Vertical Studio</span>
                 <span className="opacity-40">/</span>
                 <span className="text-white">Active Deployment Sandbox</span>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 border-r border-white/10 space-y-12 bg-white/[0.01]">
                 <div className="space-y-8">
                    <p className="text-indigo-400 font-display uppercase tracking-widest text-xs">Structural Configuration</p>
                    <div className="space-y-4">
                       {[
                         { block: "Validation Substrate", focus: "INTERACTION_INTEGRITY" },
                         { block: "Outcome Analyzer", focus: "DETERMINISTIC_REASONING" },
                         { block: "State Awareness Interface", focus: "COGNITIVE_TRAJECTORY" },
                         { block: "Sustainability Layer", focus: "ENGAGEMENT_HEALTH" }
                       ].map((policy, i) => (
                         <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-indigo-500/50 transition-all cursor-crosshair">
                            <span className="text-white/70 font-mono text-xs">{policy.block}</span>
                            <ArrowRight size={14} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
                            <span className="text-indigo-400 font-display uppercase tracking-widest text-[9px] bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">{policy.focus}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                 <Button className="w-full h-16 text-lg font-display bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:scale-[1.02] transition-all shadow-xl shadow-indigo-950">
                    Finalize Integration
                 </Button>
              </div>

              <div className="p-12 space-y-12 bg-black/40 relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#4f46e5_0%,transparent_70%)] blur-3xl translate-y-1/2" />
                 </div>
                 <div className="space-y-8 relative z-10 text-center">
                    <p className="text-indigo-400 font-display uppercase tracking-widest text-xs">Simulated Environment</p>
                    <div className="p-12 bg-black border border-indigo-500/20 rounded-[2.5rem] min-h-[350px] flex flex-col justify-center items-center space-y-8 shadow-inner">
                       <div className="relative">
                          <PlayCircle size={64} className="text-indigo-500/30 animate-pulse" />
                          <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                       </div>
                       <div className="space-y-4">
                          <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Awaiting Simulation Loop...</p>
                          <p className="text-white text-2xl font-display uppercase tracking-tighter italic">Validating Systemic Trust.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FINAL PROMISE */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center space-y-10">
         <SectionLabel>THE OUTCOME</SectionLabel>
         <h2 className="text-4xl md:text-7xl font-display leading-tight text-slate-950 mb-6">Build fast. <br /><span className="text-indigo-600 italic">Never break safety.</span></h2>
         <p className="text-xl text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            The traditional bottleneck in enterprise intelligence is the gap 
            between structural governance and executive speed. Vertical Studio 
            eliminates that gap, allowing you to build specialized solutions 
            on a foundation of immutable auditability.
         </p>
         <div className="pt-8">
           <Button variant="ghost" className="text-indigo-600 font-display"><Link href="/platform">Full Platform Architecture &rarr;</Link></Button>
         </div>
      </section>
    </main>
  );
}
