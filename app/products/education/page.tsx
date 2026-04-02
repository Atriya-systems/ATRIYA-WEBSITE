"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, ShieldCheck, Globe, Zap, Cpu, Code2, 
  Layers, Database, Activity, Globe2, ArrowUpRight, 
  CheckCircle2, Network, Workflow, DatabaseZap, 
  Layout, Boxes, BarChart3, LineChart, Server,
  Microscope, Users, BookOpen, GraduationCap,
  History, Fingerprint, Lock, Command, Terminal
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EducationHubPage() {
  const stacks = [
    { id: "BS-01", name: "Institutional Registry", desc: "The foundational map of all 89 cognitive engines for national exam boards.", icon: Layout },
    { id: "P-04", name: "Grading Provenance", desc: "SHA-256 Merkle-anchored history for every student outcome and assessment.", icon: DatabaseZap },
    { id: "P-19", name: "Curriculum Orchestration", desc: "Dynamic intent routing across multi-subject sovereign pedagogies.", icon: Workflow }
  ];

  const engines = Array.from({ length: 128 }, (_, i) => ({
    id: `ENG-${100 + i}`,
    status: Math.random() > 0.05 ? 'online' : 'maintenance',
    load: Math.floor(Math.random() * 100)
  }));

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      {/* HERO - BALANCED LAYOUT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex gap-4 items-center italic">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">PRODUCT CLUSTER A-09</Badge>
              <SectionLabel>ACADEMICOS | SOVEREIGN LEARNING</SectionLabel>
            </div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-display leading-[1.1] text-slate-950 tracking-tight font-light uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Certainty <br />
              <span className="text-indigo-600 font-medium italic lowercase not-italic">in Learning.</span>
            </motion.h1>

            <motion.div 
               className="space-y-12 pt-8"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-slate-500 font-sans leading-relaxed font-light tracking-tight max-w-xl border-l-4 border-indigo-100 pl-8 lowercase italic not-italic first-letter:uppercase">
                 AcademicOS is a sovereign substrate for national-scale education. 128 engine cores working in unison to provide provable grading and institutional integrity.
              </p>
              <div className="flex gap-6">
                 <Button size="lg" className="h-20 px-12 bg-slate-950 text-white rounded-full shadow-4xl transition-all hover:bg-indigo-600 active:scale-95 text-lg font-light italic">
                    <Link href="/contact" className="lowercase italic not-italic">Acquire Briefing →</Link>
                 </Button>
                 <Link href="/pricing" className="h-20 px-10 border border-slate-100 rounded-full flex items-center justify-center font-display text-slate-400 uppercase tracking-widest text-[10px] font-black">Market Hub</Link>
              </div>
            </motion.div>
          </div>

          {/* ADDED HERO IMAGE TO FILL WHITE SPACE */}
          <div className="lg:col-span-5 relative">
             <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-indigo-500/20 rounded-[4rem] blur-xl opacity-50"></div>
             <div className="relative rounded-[5rem] overflow-hidden border border-slate-100 shadow-4xl bg-white p-4">
               <img 
                 src="/academic_microscope_edu.png" 
                 alt="Academic Microscope Visualization" 
                 className="w-full h-full object-cover rounded-[4rem] group-hover:scale-[1.02] transition-transform duration-1000" 
               />
                <div className="absolute top-10 left-10">
                   <Badge className="bg-indigo-600 text-white border-0 font-mono text-[9px] uppercase tracking-widest font-black italic px-4 py-2">CORE_REGISTRY_v3</Badge>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* COMPACT ENGINE LATTICE - REPLACED LARGE SPACE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 bg-slate-50/50 rounded-[5rem] mb-24 border border-slate-50">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-8">
               <SectionLabel className="border-indigo-200 text-indigo-600 font-black py-1 px-4 italic uppercase">THE 128-ENGINE LATTICE</SectionLabel>
               <h2 className="text-4xl md:text-7xl font-display text-slate-950 tracking-tight leading-[0.9] font-light italic">Cognitive <br /><span className="text-indigo-600 font-medium not-italic uppercase">Mass.</span></h2>
               <div className="pt-8 grid grid-cols-2 gap-8 border-l border-indigo-100 pl-8 h-full">
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest leading-none">Substrate Load</p>
                    <p className="text-3xl font-display font-light text-slate-950">98.4 T/S</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest leading-none">Cert Rate</p>
                    <p className="text-3xl font-display font-light text-slate-950">100.0%</p>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-8 p-12 bg-white rounded-[4rem] border border-slate-100 shadow-4xl relative group overflow-hidden">
               <div className="grid grid-cols-8 sm:grid-cols-16 gap-2.5 relative z-10">
                  {engines.map((e, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, scale: 0.5 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: i * 0.002 }}
                       className={`h-4.5 w-4.5 rounded-sm flex items-center justify-center transition-all cursor-crosshair group/pip ${e.status === 'online' ? 'bg-indigo-500/10 hover:bg-indigo-600 shadow-sm border border-indigo-200/20' : 'bg-red-400'}`}
                    />
                  ))}
               </div>
               <div className="mt-12 flex justify-between items-center border-t border-slate-100 pt-8 italic">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black leading-none">Live Interception Loop: 0.04ms</p>
                  <Badge className="bg-green/10 text-green-600 border border-green-200 font-mono text-[9px] font-black italic px-4 py-1">OPERATIONAL</Badge>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL ACTION - REFINED SCALE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16 mb-48 pb-48">
         <h2 className="text-6xl md:text-9xl font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center uppercase">Certainty <br /><span className="text-indigo-600 font-medium lowercase italic not-italic">Engineered.</span></h2>
         <div className="flex justify-center pt-12">
            <Button size="lg" className="h-28 px-32 bg-slate-950 text-white rounded-full shadow-4xl font-display text-4xl transition-all hover:bg-indigo-600 active:scale-95 italic">
               <Link href="/contact" className="lowercase italic not-italic">Acquire Sovereign Access</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
