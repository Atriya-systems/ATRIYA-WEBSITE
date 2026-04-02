"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  Zap, ShieldCheck, Scale, History as HistoryIcon, Activity, 
  Layers, FileCheck, ArrowRight, AlertTriangle,
  Lock, Cpu, Globe, CheckCircle2, Info,
  Search, BookOpen, Quote, Fingerprint
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SystemNarrativePage() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO: THE NARRATIVE SHIFT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">SYSTEM NARRATIVE</Badge>
            <SectionLabel>THE EVOLUTION OF TRUST</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 font-display italic tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Enterprise AI, <br />
            <span className="text-indigo-600 font-light lowercase tracking-tighter">Without guesswork.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-3xl text-slate-500 font-sans leading-relaxed max-w-3xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Traditional AI governance is a choice. We believe it should be a 
            foundation. When safety is optional, it is non-existent.
          </motion.p>
        </div>
      </section>

      {/* COMPARISON: CONFIG VS FOUNDATION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
           <SectionLabel>GOVERNANCE AS POLICY</SectionLabel>
           <div className="p-12 md:p-16 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-12 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                 <AlertTriangle className="text-slate-900" size={240} strokeWidth={1} />
              </div>
              <div className="space-y-6 relative z-10">
                 <h3 className="text-3xl font-display uppercase tracking-widest text-slate-400">Configured Safety</h3>
                 <p className="text-xl text-slate-500 font-sans leading-relaxed italic">
                    Safety is reactive. It depends on filters, prompt engineering, 
                    and manual oversight. It is a patch on top of execution.
                 </p>
              </div>
              <div className="space-y-8 relative z-10 font-bold border-t border-slate-200 pt-10">
                 {["Bypassable Execution Paths", "Delayed Compliance Cycles", "Post-hoc Failure Analysis", "Operational Unpredictability"].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center text-slate-400 font-mono">
                       <span className="text-[10px] uppercase tracking-[0.3em]">{item}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-10">
           <SectionLabel>GOVERNANCE AS PHYSICS</SectionLabel>
           <div className="p-12 md:p-16 bg-slate-950 rounded-[4rem] border border-indigo-500/20 space-y-12 relative overflow-hidden group h-full shadow-2xl shadow-indigo-900/10">
              <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                 <ShieldCheck className="text-indigo-400" size={240} strokeWidth={1} />
              </div>
               <div className="space-y-6 relative z-10">
                  <h3 className="text-3xl font-display uppercase tracking-widest text-indigo-400 font-bold">Substrate-Level</h3>
                  <p className="text-xl text-white font-sans leading-relaxed italic font-light decoration-indigo-500/30 underline-offset-[12px] underline capitalize">
                     Governance is built-in. Execution is structurally 
                     impossible without satisfying systemic invariants.
                  </p>
               </div>
               <div className="space-y-8 relative z-10 border-t border-white/10 pt-10">
                  {["Structural Integrity", "Systemic Certainty", "Non-Bypassable Protocols", "Automated Structural Evidence"].map((item, i) => (
                     <div key={i} className="flex gap-4 items-center text-indigo-100/90 font-bold">
                        <CheckCircle2 className="text-indigo-400 shrink-0" size={18} />
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">{item}</span>
                     </div>
                  ))}
               </div>
           </div>
        </div>
      </section>

      {/* MID-PAGE QUOTE */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center space-y-12">
         <Quote className="text-indigo-100 mx-auto" size={80} />
         <h2 className="text-4xl md:text-6xl font-display text-slate-950 italic leading-[1.2]">
            &quot;We don&apos;t build safety features. We build the <span className="text-indigo-600 underline underline-offset-[12px]">foundation for intelligence</span> that makes everything else certain.&quot;
         </h2>
         <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-px bg-slate-200"></div>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">The ATRIYA Protocol</p>
            <div className="w-12 h-px bg-slate-200"></div>
         </div>
      </section>

      {/* CORE CAPABILITIES: THE EVOLUTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 grid grid-cols-1 lg:grid-cols-3 gap-12">
         {[ 
           { title: "Verifiable Governance", icon: Fingerprint, desc: "Move from policy claims to technical evidence, generated structurally for every interaction." },
           { title: "Sovereign Substrate", icon: Globe, desc: "Deploy intelligence foundations that adapt to jurisdictional and sector-specific boundaries." },
           { title: "Integrity Verification", icon: FileCheck, desc: "Ensure that every outcome is aligned with institutional standards by systemic necessity." }
         ].map((cap, i) => (
           <div key={i} className="space-y-8 p-12 bg-white border border-slate-100 rounded-[3rem] hover:border-indigo-300 transition-all shadow-sm group">
              <cap.icon size={40} strokeWidth={1.5} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <h4 className="text-3xl font-display italic text-slate-900">{cap.title}</h4>
              <p className="text-lg text-slate-500 font-sans leading-relaxed font-light">{cap.desc}</p>
           </div>
         ))}
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 pb-48 flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-left border-t border-slate-100">
         <div className="flex items-center gap-8">
            <div className="p-4 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-100">
               <Layers className="text-white" size={32} />
            </div>
            <div className="space-y-1">
               <span className="text-xl font-display tracking-widest uppercase text-slate-900 block">System Integrity Foundation</span>
               <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold font-sans">The era of provable trust.</span>
            </div>
         </div>
         <Link href="/platform/architecture" className="group flex items-center gap-8 text-4xl lg:text-6xl font-display text-slate-950 hover:text-indigo-600 transition-colors uppercase tracking-tighter">
            Analyze the Ecosystem <ArrowRight size={48} strokeWidth={1} className="group-hover:translate-x-4 transition-transform text-indigo-600" />
         </Link>
      </section>
    </main>
  );
}
