"use client";

import * as React from "react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ChevronRight, CheckCircle2, AlertCircle, 
  Database, ShieldCheck, Cpu, Code2, 
  Activity, ArrowRight, Layers, Lock,
  FileCheck, Scale, Zap, Globe, Fingerprint,
  History as HistoryIcon
} from "lucide-react";
import Link from "next/link";

export default function PlatformOverview() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">THE SUBSTRATE</Badge>
            <SectionLabel>PLATFORM OVERVIEW</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Provable AI <br />
            <span className="text-indigo-600 font-medium">Governance.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-3xl text-slate-500 font-sans max-w-[800px] leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ATRIYA establishes a unified substrate for governed intelligence Interaction — 
            moving governance from policy configuration into structural reality. 
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-20 px-16 bg-indigo-600 hover:bg-slate-950 text-white rounded-full shadow-2xl font-display text-xl transition-all">
               <Link href="/platform/how-it-works" className="flex items-center gap-4">How it works <ArrowRight size={20} /></Link>
            </Button>
            <Button variant="outline" size="lg" className="h-20 px-16 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display text-xl transition-all">
               Initialize Audit Trace
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE: Decision Lattice */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="relative aspect-[16/6] w-full rounded-[4rem] overflow-hidden shadow-4xl group border border-slate-100">
           <img 
             src="/decision_lattice_v4.png" 
             alt="ATRIYA Decision Lattice"
             className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
           <div className="absolute bottom-8 left-12">
             <Badge className="bg-indigo-600 text-white border-0 font-mono text-[9px] uppercase tracking-widest font-black italic">GEOMETRIC_INTEGRITY_P19</Badge>
           </div>
        </div>
      </section>

      {/* THE MISSION: PHYSICS OVER POLICY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
           <div className="space-y-12">
              <SectionLabel>THE MISSION</SectionLabel>
              <h2 className="text-5xl md:text-8xl font-display leading-[1] text-slate-950 tracking-tight font-light grayscale hover:grayscale-0 transition-all duration-700">
                Compliance <br />
                <span className="text-indigo-600 font-medium">as Physics.</span>
              </h2>
           </div>
           <div className="space-y-10">
              <p className="text-2xl text-slate-500 font-sans leading-relaxed font-light">
                Most AI governance today is a configuration — an instruction that 
                can be modified or bypassed. ATRIYA is a substrate — an 
                execution environment where governance is a property of the system itself.
              </p>
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] leading-relaxed font-black">
                  &quot;If an action does not satisfy systemic invariants, it structurally 
                  cannot execute. No override. No bypass.&quot;
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* THE ANTIDOTE - "Institutional Pivot" */}
      <section className="relative z-10 p-6 lg:p-12">
        <div className="bg-slate-950 rounded-[5rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-4xl group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_70%)] group-hover:opacity-20 transition-opacity duration-1000"></div>
          <div className="max-w-7xl mx-auto relative z-10 space-y-24">
            <div className="max-w-4xl space-y-8">
               <SectionLabel className="border-indigo-500/30 text-indigo-400 font-black uppercase">THE ANTIDOTE</SectionLabel>
               <h2 className="text-5xl md:text-9xl font-display leading-[0.9] tracking-tight font-light italic text-center md:text-left">Governance <br /><span className="text-indigo-400 font-medium not-italic">as Layer. Not Feature.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[ 
                { confusion: "an AI model", mechanism: "generates probabilistic outputs.", distinction: "ATRIYA evaluates outputs against deterministic invariants." },
                { confusion: "a guardrail", mechanism: "filters outputs after generation.", distinction: "ATRIYA intercepts and verifies before execution." },
                { confusion: "monitoring", mechanism: "observes problems after they occur.", distinction: "ATRIYA prevents violations at the substrate level." },
                { confusion: "a checklist", mechanism: "documents administrative intent.", distinction: "ATRIYA produces cryptographic proof as a consequence of action." }
              ].map((card, idx) => (
                <div key={idx} className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-indigo-500/30 transition-all space-y-8 group/card">
                   <div className="h-12 w-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover/card:bg-indigo-600 group-hover/card:text-white transition-all">
                      <Lock size={24} />
                   </div>
                   <div className="space-y-6">
                      <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] italic font-mono leading-none">ATRIYA is not {card.confusion}</p>
                      <p className="text-white/40 text-lg leading-relaxed font-sans font-light">{card.confusion.charAt(0).toUpperCase() + card.confusion.slice(1)} {card.mechanism}</p>
                      <p className="text-white font-display text-2xl font-light tracking-tight group-hover/card:text-indigo-400 transition-colors uppercase">{card.distinction}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL ACTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16">
         <h2 className="text-6xl md:text-9xl font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center italic">Initialize <br /><span className="text-indigo-600 font-medium not-italic">Integrity.</span></h2>
         <div className="flex justify-center gap-6 pt-12">
            <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-3xl transition-all hover:bg-indigo-600 group active:scale-95">
               <Link href="/contact" className="flex items-center gap-6 italic">Request Briefing <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" /></Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
