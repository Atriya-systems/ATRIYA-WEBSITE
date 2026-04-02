"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ShieldCheck, Globe, Zap, Cpu, Code2, Layers, Database,
  ArrowRight, Box, Boxes, Network, Workflow, DatabaseZap,
  Lock, Activity, Fingerprint, Globe2, BarChart3, LineChart,
  Server, Layout, SearchCode, Gavel
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArchitecturePage() {
  const layers = [
    { id: "S-11", name: "Sovereign Substrate", desc: "The bare-metal governance kernel that anchors all executions in Merkle-provenance.", icon: ShieldCheck },
    { id: "L-08", name: "Certainty Layer", desc: "Enforces deterministic constitutional axioms across multi-model inference paths.", icon: DatabaseZap },
    { id: "E-04", name: "Lattice Orchestration", desc: "Dynamic intent routing and dynamic engine calibration for nation-state scale.", icon: Network },
    { id: "A-01", name: "Institutional API", desc: "The unified endpoint (P-09) for sovereign interaction and registry-visibility.", icon: Terminal }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans uppercase">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO - HIGH DENSITY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-12 space-y-12">
            <div className="flex gap-4 items-center">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">SYSTEM ARCHITECTURE v3.0</Badge>
              <SectionLabel>THE SOVEREIGN STACK</SectionLabel>
            </div>
            
            <motion.h1 
              className="text-6xl md:text-[9.5rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Logical <br />
              <span className="text-indigo-600 font-medium italic">Hardening.</span>
            </motion.h1>

            <motion.div 
               className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 items-end"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
            >
              <p className="text-xl md:text-3xl text-slate-500 font-sans leading-tight font-light tracking-tight max-w-lg border-l-4 border-indigo-100 pl-8 lowercase italic not-italic">
                 The ATRIYA Architecture is composed of 11 distinct stages of cryptographic verification. Moving from model inference into substrate commitment.
              </p>
              <div className="flex gap-4">
                 <Button className="h-20 px-12 bg-slate-950 text-white rounded-full font-display transition-all hover:bg-indigo-600 active:scale-95 text-lg font-light italic">
                    <Link href="/platform/trace">View Logic Trace</Link>
                 </Button>
                 <Badge className="h-20 px-10 border border-slate-100 rounded-full flex items-center justify-center font-display text-slate-400 uppercase tracking-widest text-xs font-black">Substrate v3.0.4.R</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE VISUAL - HIGH SUBSTANCE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 mb-48">
         <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-slate-500/20 rounded-[5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-[5rem] overflow-hidden border border-slate-100 shadow-4xl bg-white p-4">
               <img 
                 src="/system_lattice_structural.png" 
                 alt="System Lattice Structural" 
                 className="w-full h-full object-cover rounded-[4rem] group-hover:scale-[1.02] transition-transform duration-1000" 
               />
               <div className="absolute top-24 left-24 space-y-4">
                  <Badge className="bg-indigo-600 text-white border-0 font-mono text-[9px] uppercase tracking-widest font-black italic px-4 py-2">SYSTEM_LATTICE_01</Badge>
                  <p className="text-xs font-mono font-black text-slate-950 uppercase tracking-widest leading-none bg-white/80 p-2 rounded">0x41f8... Committed</p>
               </div>
            </div>
         </div>
      </section>

      {/* ARCHITECTURE STACK LEDGER - HIGH DENSITY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
         <div className="max-w-4xl space-y-8">
            <SectionLabel className="border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black italic">THE CERTAINTY STACK</SectionLabel>
            <h2 className="text-5xl md:text-[8rem] font-display text-slate-950 tracking-tight leading-[0.8] font-light">Logical <br /><span className="text-indigo-600 font-medium italic">Registry.</span></h2>
         </div>

         <div className="grid grid-cols-1 gap-4">
            {layers.map((layer, i) => (
              <div key={i} className="group p-12 bg-slate-50 border border-slate-100 rounded-[4rem] hover:border-indigo-600 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-4xl flex flex-col lg:flex-row justify-between items-center gap-12">
                 <div className="flex gap-12 items-center w-full lg:w-auto">
                    <div className="h-24 w-24 bg-white rounded-3xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                       <layer.icon size={42} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="space-y-4">
                       <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase border-indigo-100 text-indigo-500 font-black px-4">{layer.id}</Badge>
                       <h3 className="text-4xl font-display text-slate-950 tracking-tight font-medium uppercase leading-[0.9]">{layer.name}</h3>
                    </div>
                 </div>
                 <p className="text-xl text-slate-500 font-sans font-light leading-relaxed italic max-w-xl text-left w-full lg:w-auto lowercase not-italic first-letter:uppercase">
                    {layer.desc}
                 </p>
                 <div className="flex gap-8 items-center w-full lg:w-auto justify-end">
                    <div className="text-right space-y-2">
                       <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none italic">S-STAGE Verification</p>
                       <p className="text-lg font-display text-slate-950 font-medium italic">VERIFIED</p>
                    </div>
                    <ArrowRight size={24} className="text-indigo-200 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* SOVEREIGN TRACKS MATRIX - HIGH DENSITY */}
      <section className="relative z-10 px-6 lg:px-12 py-32 bg-slate-950 rounded-[5rem] mx-4 lg:mx-8 overflow-hidden shadow-4xl mb-48 text-white group">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_70%)] group-hover:opacity-20 transition-opacity duration-1000"></div>
         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 space-y-12">
               <SectionLabel className="border-indigo-500 text-indigo-400 font-black">ENGAGEMENT MATRICES</SectionLabel>
               <h2 className="text-5xl md:text-8xl font-display text-white tracking-tight leading-[0.9] font-light italic">Sovereign <br /><span className="text-indigo-400 font-medium not-italic">Reach.</span></h2>
               <p className="text-xl text-indigo-100/50 font-sans font-light leading-relaxed italic">
                  ATRIYA’s reach is determined by three engagement tracks, each providing a deeper layer of substrate integration for nation-state and institutional scale.
               </p>
               <div className="grid grid-cols-1 gap-6 pt-12">
                  {[ 
                    { id: "Track A", name: "API Sovereign", desc: "High-throughput constitutional API (P-09) for standard solutions." },
                    { id: "Track B", name: "Cognitive Lock", desc: "Private substrate deployment with custom constitutional axioms." },
                    { id: "Track C", name: "Hardened Core", desc: "Air-gapped, sovereign infrastructure for high-priority nation-state assets." }
                  ].map((track, i) => (
                    <div key={i} className="p-10 border border-white/10 rounded-[3rem] hover:bg-white/5 transition-all space-y-4">
                       <Badge variant="outline" className="text-[10px] font-mono text-indigo-400 font-black border-indigo-500/30 italic">{track.id}</Badge>
                       <h4 className="text-2xl font-display text-white font-medium uppercase">{track.name}</h4>
                       <p className="text-sm text-indigo-100/40 italic leading-relaxed">{track.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:col-span-7 bg-white/5 p-16 rounded-[4rem] border border-white/10 backdrop-blur-3xl space-y-12 h-full">
               <h4 className="text-sm font-mono font-black text-indigo-400 uppercase tracking-widest italic leading-none mb-12">Telemetry — Trace Cluster Cluster 0xBD</h4>
               <div className="grid grid-cols-4 gap-6">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="h-2 w-full bg-indigo-500/10 rounded-full overflow-hidden">
                       <motion.div 
                          className="h-full bg-indigo-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.random() * 100}%` }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                       />
                    </div>
                  ))}
               </div>
               <div className="grid grid-cols-2 gap-12 pt-12">
                  <div className="space-y-4">
                     <p className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest">SUBSTRATE LOAD</p>
                     <p className="text-5xl font-display font-light">4.18 TB/s</p>
                  </div>
                  <div className="space-y-4">
                     <p className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest">VERIFICATION RATE</p>
                     <p className="text-5xl font-display font-light">99.98%</p>
                  </div>
               </div>
               <div className="pt-12 border-t border-white/10 italic text-[10px] font-mono text-indigo-400/60 uppercase tracking-widest font-black text-center">
                  Live Global Interception Heartbeat
               </div>
            </div>
         </div>
      </section>

      {/* FINAL ACTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-24 mb-48 pb-48">
         <h2 className="text-6xl md:text-[11rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center uppercase">Initialize <br /><span className="text-indigo-600 font-medium not-italic italic">Integrity.</span></h2>
         <div className="flex justify-center pt-12">
            <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-4xl transition-all hover:bg-indigo-600 active:scale-95 italic">
               <Link href="/contact">Join the Substrate</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}

function Terminal(props: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}
