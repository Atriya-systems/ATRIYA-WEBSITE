"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, ShieldCheck, Globe, Zap, 
  Cpu, Code2, Layers, Database, Activity,
  Globe2, Lock, ArrowUpRight, CheckCircle2,
  Network, Workflow, Fingerprint, DatabaseZap,
  Layout, Boxes, BarChart3, LineChart, Server,
  Command, Boxes as BoxesIcon, Terminal, 
  SearchCode, Gavel, ScanEye, Code2 as CodeIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const platforms = [
    { id: "P-01", name: "Registry Overview", desc: "The foundational map of all 21 institutional products.", icon: Layout },
    { id: "P-04", name: "Audit & Provenance", desc: "SHA-256 Merkle-anchored history for every decision.", icon: DatabaseZap },
    { id: "P-19", name: "Orchestration", desc: "Dynamic intent routing across multi-model environments.", icon: Workflow }
  ];

  const systems = Array.from({ length: 128 }, (_, i) => ({
    id: `E-${100 + i}`,
    status: Math.random() > 0.1 ? 'online' : 'maintenance'
  }));

  const metadata = ["P-04_COMMIT", "N4_KERNEL_ACTIVE", "S11_SOVEREIGN", "TR_0x41F", "P-19_ORCH"];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      {/* GLOBAL BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      {/* FLOATING METADATA NOISE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {metadata.map((text, i) => (
          <div key={i} className="absolute text-[8px] font-mono text-slate-200 rotate-90" style={{ top: `${i * 20}%`, left: `${i % 2 === 0 ? '2%' : '97%'}` }}>
             {text}
          </div>
        ))}
      </div>

      {/* HERO SECTION - REBALANCED DENSITY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex gap-4 items-center italic">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">VERSION 3.0.0-PROD</Badge>
              <SectionLabel>THE CONSTITUTIONAL SUBSTRATE</SectionLabel>
            </div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-display leading-[1.1] text-slate-950 tracking-tight font-light uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Governance <br /> 
              as <span className="text-indigo-600 font-medium italic lowercase not-italic">Physics.</span> 
            </motion.h1>

            <motion.div 
               className="space-y-12 pt-8"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-slate-500 font-sans leading-relaxed font-light tracking-tight max-w-xl border-l-4 border-indigo-100 pl-8 lowercase italic not-italic first-letter:uppercase">
                 ATRIYA introduces the first non-bypassable AI governance kernel. Moving safety from policy configuration into structural necessity at nation-state scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="h-16 sm:h-20 px-8 sm:px-16 w-full sm:w-auto bg-slate-950 text-white rounded-full shadow-4xl transition-all hover:bg-indigo-600 active:scale-95 text-lg sm:text-xl font-light italic">
                    <Link href="/platform/trace" className="w-full flex justify-center">Initialize Trace</Link>
                 </Button>
                 <Link href="/about" className="h-16 sm:h-20 px-10 w-full sm:w-auto border border-slate-100 rounded-full flex items-center justify-center font-display text-slate-400 uppercase tracking-widest text-[10px] font-black hover:text-indigo-600 transition-colors">Corporate Hub →</Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
             <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-indigo-500/20 rounded-[4rem] blur-xl opacity-50"></div>
             <div className="relative rounded-[4rem] overflow-hidden border border-slate-100 shadow-4xl bg-white p-2">
                <img 
                  src="/substrate_structural_map_v3.png" 
                  alt="Substrate Structural Map" 
                  className="w-full h-full object-cover rounded-[3.5rem] opacity-90 group-hover:opacity-100 transition-opacity" 
                />
                <div className="absolute top-10 left-10">
                   <Badge className="bg-indigo-600 text-white border-0 font-mono text-[9px] uppercase tracking-widest font-black italic px-4 py-2">CORE_REGISTRY_v3</Badge>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SYSTEM HEALTH MATRIX - COMPACT DENSITY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 bg-slate-50/50 rounded-[5rem] mb-24 border border-slate-50 mt-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-8">
               <SectionLabel className="border-green-200 text-green-600 bg-green-50/50 font-black py-1 px-4 italic uppercase">GLOBAL LIVE HEARTBEAT</SectionLabel>
               <h2 className="text-4xl md:text-7xl font-display text-slate-950 tracking-tight leading-[0.9] font-light italic">Engine <br /><span className="text-green-600 font-medium italic uppercase">Lattice.</span></h2>
               <div className="pt-8 grid grid-cols-2 gap-8 border-l border-green-100 pl-8 h-full">
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">Substrate Load</p>
                    <p className="text-3xl font-display font-light text-slate-950">98.4 T/S</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">Consistency</p>
                    <p className="text-3xl font-display font-light text-slate-950">99.98%</p>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-8 p-12 bg-white rounded-[4rem] border border-slate-100 shadow-4xl relative group overflow-hidden">
               <div className="grid grid-cols-8 sm:grid-cols-16 gap-2.5 relative z-10">
                  {systems.map((s, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, scale: 0.5 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: i * 0.002 }}
                       className={`h-4.5 w-4.5 rounded-sm flex items-center justify-center transition-all cursor-crosshair group/pip ${s.status === 'online' ? 'bg-green/30 hover:bg-green shadow-sm' : 'bg-red-400'}`}
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
            <Button size="lg" className="h-20 md:h-28 px-8 md:px-48 w-full md:w-auto bg-slate-950 text-white rounded-full shadow-4xl font-display text-2xl md:text-4xl transition-all hover:bg-indigo-600 active:scale-95 italic">
               <Link href="/contact" className="lowercase italic not-italic text-center w-full">Acquire Sovereign Access</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
