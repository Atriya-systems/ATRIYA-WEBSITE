"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import {
   ShieldCheck, ArrowRight, CheckCircle2,
   Globe, Lock, Layout, Zap, Cpu, Code2, Globe2,
   Database, Activity, Scale, Fingerprint, FileCheck,
   History as HistoryIcon, Network, HardDrive, 
   Settings2, Layers3, Orbit, Workflow, DatabaseZap,
   Shield, Terminal, Gavel, AlertTriangle, ScanEye,
   Layers, BarChart3, Users, Microscope, Zap as Flash
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
   const failureModes = [
      { id: "FM1", title: "The Bypass Problem", desc: "Most AI governance is implemented as a 'configuration' or 'policy' within a model. This is optional and easily bypassed. ATRIYA makes governance 'physics' — a structural invariant." },
      { id: "FM2", title: "The Proof Problem", desc: "Traditional logging records that a check occurred, but cannot prove accuracy. ATRIYA produces signed provenance chains (P-04) that serve as structural evidence." },
      { id: "FM3", title: "The Verification Problem", desc: "Probabilistic testing misses edge cases. ATRIYA uses formal verification and Lean 4 theorems to prove safety across all interaction trajectories by mathematical necessity." },
      { id: "FM4", title: "The Authority Problem", desc: "AI agents cannot self-govern. ATRIYA enforces authority (P-05) external to intelligence, ensuring agents never exceed their sealed institutional boundaries." },
      { id: "FM5", title: "The Memory Problem", desc: "Deletion is not erasure. ATRIYA produces cryptographic certificates of data purgation (P-08), satisfying the 'Right to be Forgotten' in regulated sectors." },
      { id: "FM6", title: "The Determinism Problem", desc: "AI behavior is non-deterministic, making audits impossible. ATRIYA enables exact deterministic replay: reconstruct any reasoning chain from a verifiable hash." },
      { id: "FM7", title: "The Accumulation Problem", desc: "Ecosystems lack unified oversight. ATRIYA governs the interaction lattice itself, managing how capabilities are transacted constitutionally." }
   ];

   const laws = [
      { title: "Authority External to Intelligence", desc: "No AI system governs itself. Authority originates from the Substrate Layer, never from the probabilistic engine (The Model)." },
      { title: "Decision Over Answer", desc: "Governance of the process is the primary object. A governed, audit-locked error is superior to an ungoverned success." },
      { title: "Models Replaceable, Substrate Fixed", desc: "Models iterate monthly; the Substrate is the chassis that remains constant. We protect the chassis for behavioral stability." },
      { title: "Prevention Over Correction", desc: "Block illegal states at the gate. A violation that has occurred is permanent; true governance exists only in prevention." }
   ];

   return (
      <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         {/* HERO */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="max-w-5xl space-y-12">
               <div className="flex gap-4 items-center">
                  <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">MISSION v3.0</Badge>
                  <SectionLabel>THE CONSTITUTIONAL SUBSTRATE</SectionLabel>
               </div>
               
               <motion.h1 
                  className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  Intelligence <br />
                  <span className="text-indigo-600 font-medium">Bonded.</span>
               </motion.h1>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end font-sans">
                 <p className="text-xl md:text-4xl text-slate-500 font-sans leading-relaxed font-light tracking-tight">
                    ATRIYA is the first AI governance layer built as a physical substrate. Moving safety from policy configuration into structural necessity.
                 </p>
                 <div className="flex gap-4">
                    <Button size="lg" className="h-20 px-12 bg-slate-950 text-white rounded-full font-display transition-all hover:bg-indigo-600">
                       <Link href="/platform/trace">Verify the Trace</Link>
                    </Button>
                    <Link href="/products" className="h-20 px-12 border border-slate-100 rounded-full flex items-center justify-center font-display text-slate-400 uppercase tracking-widest text-xs hover:text-indigo-600 transition-colors font-black">Market Hub →</Link>
                 </div>
               </div>
            </div>
         </section>

         {/* FAILURE MODES */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="max-w-4xl space-y-8">
               <SectionLabel className="border-red-200 text-red-500 bg-red-50/50 font-black uppercase">THE SEVEN FAILURE MODES</SectionLabel>
               <h2 className="text-5xl md:text-8xl font-display text-slate-950 tracking-tight leading-none font-light italic">The Integrity <br /><span className="text-red-500 font-medium not-italic">Gap.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {failureModes.map((fm, i) => (
                 <div key={i} className="p-10 bg-slate-50 border border-slate-100 rounded-[4rem] hover:border-red-200 transition-all group flex flex-col justify-between min-h-[450px]">
                    <div className="space-y-10">
                       <div className="flex justify-between items-center">
                          <Badge className="bg-red-50 border-red-100 text-red-400 font-mono text-[9px] font-black italic">{fm.id}</Badge>
                          <AlertTriangle size={24} className="text-red-200 group-hover:text-red-500 transition-colors" />
                       </div>
                       <div className="space-y-6">
                          <h3 className="text-2xl font-display text-slate-950 font-medium uppercase tracking-tight">{fm.title}</h3>
                          <p className="text-lg text-slate-500 font-sans font-light leading-relaxed">{fm.desc}</p>
                       </div>
                    </div>
                    <Button variant="ghost" className="text-red-400 font-mono text-[10px] uppercase tracking-widest font-black italic p-0 justify-start">Technical Analysis →</Button>
                 </div>
               ))}
            </div>
         </section>

         {/* AXIOMS */}
         <section className="relative z-10 py-32 bg-indigo-600 rounded-[6rem] mx-4 lg:mx-8 overflow-hidden shadow-4xl mb-48 text-white group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,#fff_0%,transparent_60%)] group-hover:opacity-20 transition-opacity"></div>
            <div className="max-w-7xl mx-auto px-12 relative z-10 space-y-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                  <div className="lg:col-span-12 space-y-16">
                     <SectionLabel className="border-indigo-400 text-white font-black tracking-widest uppercase">THE FOUNDING LAWS</SectionLabel>
                     <h2 className="text-6xl md:text-[9rem] font-display leading-[0.8] tracking-tight font-light italic">Substrate <br /><span className="text-indigo-200 font-medium not-italic">Axioms.</span></h2>
                  </div>
                  <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans font-light">
                     {laws.map((law, i) => (
                       <div key={i} className="p-10 bg-white/10 rounded-[3rem] border border-white/20 hover:bg-white/20 transition-all space-y-8">
                          <h4 className="text-2xl font-display text-white font-medium uppercase tracking-tight">{law.title}</h4>
                          <p className="text-base text-indigo-100/50 leading-relaxed italic">{law.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* FINAL ACTION */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 pb-48 text-center space-y-24">
            <h2 className="text-6xl md:text-[11rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center italic uppercase">Initialize <br /><span className="text-indigo-600 font-medium not-italic">Integrity.</span></h2>
            <div className="flex justify-center pt-12">
               <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-3xl transition-all hover:bg-indigo-600">
                  <Link href="/contact" className="italic font-light">Join the Substrate</Link>
               </Button>
            </div>
         </section>
      </main>
   );
}
