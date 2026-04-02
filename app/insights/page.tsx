"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import {
   FileText, History, BarChart3, Search,
   Microscope, Terminal, Zap, ShieldCheck,
   Globe, Lock, ArrowRight, Download, BookOpen,
   MessageSquare, UserCircle, Settings2, Database,
   Activity, Fingerprint, Workflow, DatabaseZap,
   Globe2, Scale, Gavel, Cpu, Key, ScanEye, Layers,
   AlertTriangle, Scan, Box, SearchCode
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InsightsPage() {
   const resources = [
      { id: "P-02", type: "RESEARCH LOG", title: "Formal Verification of Cognitive Axioms", desc: "A deep-dive into the Lean 4 theorems that prove non-bypassability in the substrate logic engine.", date: "March 2026", icon: SearchCode },
      { id: "P-04", type: "TECHNICAL PAPER", title: "SHA-256 Merkle Provenance Chains", desc: "Defining the cryptographic integrity standard for institutional AI audits and immutable history.", date: "February 2026", icon: Lock },
      { id: "BS-07", type: "ECONOMIC BRIEF", title: "The Sovereign AI Royalty Engine", desc: "How the ATRIYA economic substrate manages value-exchange and multi-model pricing logic.", date: "January 2026", icon: Activity },
      { id: "T-03", type: "STRATEGY PAPER", title: "N4 Sovereign Deployment Guide", desc: "Architectural blueprints for deploying air-gapped substrates in high-stakes regulated sectors.", date: "December 2025", icon: Globe2 }
   ];

   return (
      <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         {/* HERO */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="max-w-5xl space-y-12">
               <div className="flex gap-4 items-center">
                  <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black italic">INSIGHTS & RESOURCES</Badge>
                  <SectionLabel>THE REGISTRY OF TRUTH</SectionLabel>
               </div>
               
               <motion.h1 
                  className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  Research <br />
                  <span className="text-indigo-600 font-medium">Provenance.</span>
               </motion.h1>

               <motion.p 
                  className="text-xl md:text-4xl text-slate-500 font-sans leading-tight font-light tracking-tight max-w-[8000px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
               >
                  The ATRIYA Lab publishes the formal proofs, technical specifications, and economic frameworks 
                  governing the global AI governance substrate.
               </motion.p>
            </div>
         </section>

         {/* RESOURCE GRID */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               {resources.map((res, i) => (
                 <div key={i} className="group p-12 bg-slate-50 border border-slate-100 rounded-[5rem] hover:border-indigo-300 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-3xl flex flex-col justify-between min-h-[500px]">
                    <div className="space-y-12">
                       <div className="flex justify-between items-start italic">
                          <div className="flex flex-col gap-1">
                             <p className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest leading-none">{res.id}</p>
                             <p className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">{res.type}</p>
                          </div>
                          <res.icon size={28} className="text-slate-300 group-hover:text-indigo-600 transition-colors duration-500" />
                       </div>
                       <div className="space-y-8">
                          <h3 className="text-3xl md:text-4xl font-display text-slate-950 tracking-tight font-medium uppercase">{res.title}</h3>
                          <p className="text-xl text-slate-500 font-sans font-light leading-relaxed italic">{res.desc}</p>
                       </div>
                    </div>
                    <div className="pt-12 border-t border-slate-200/50 flex justify-between items-center transition-all group-hover:border-indigo-400">
                       <span className="text-[10px] font-mono text-slate-400 font-black uppercase tracking-widest leading-none">Published {res.date}</span>
                       <Button variant="ghost" className="text-indigo-600 font-display text-lg flex items-center gap-4 transition-all group-hover:gap-6 active:scale-95">
                          <Download size={20} className="group-hover:translate-y-1 transition-transform" /> Access Briefing
                       </Button>
                    </div>
                 </div>
               ))}
            </div>
         </section>

         {/* FINAL ACTION */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-12 mb-48">
            <h2 className="text-6xl md:text-[10rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center uppercase">Join the <br /><span className="text-indigo-600 font-medium lowercase italic not-italic">Briefing.</span></h2>
            <div className="flex justify-center pt-12">
               <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-3xl transition-all hover:bg-indigo-600 group">
                  <Link href="/contact" className="flex items-center gap-6 italic">Subscribe to Substrate News <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" /></Link>
               </Button>
            </div>
         </section>
      </main>
   );
}
