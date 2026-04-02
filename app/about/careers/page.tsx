"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, Users, Briefcase, Globe, 
  ShieldCheck, Cpu, Code2, Zap, Layout,
  Boxes, Server, Database, Microscope,
  SearchCode, Gavel, Scale, HistoryIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersPage() {
  const roles = [
    {
      id: "R-481",
      title: "Formal Verification Engineer",
      dept: "SUBSTRATE KERNEL",
      desc: "Develop Lean 4 theorems and mathematical proofs for our non-bypassable logic engine.",
      tags: ["LEAN 4", "COGNITIVE PROOFS"]
    },
    {
      id: "R-902",
      title: "Cognitive Modeler",
      dept: "SPRE DYNAMICS",
      desc: "Architect the 7-dimensional cognitive state-space for institutional learning substrates.",
      tags: ["AI DYNAMICS", "STATE MODELING"]
    },
    {
      id: "R-331",
      title: "Substrate Architect",
      dept: "SYSTEM REACH",
      desc: "Engineer the orchestration layer for multi-model sovereign execution environments.",
      tags: ["RUST", "ZK-SNARKS"]
    },
    {
      id: "R-112",
      title: "Institutional Alignment Lead",
      dept: "GOVERNANCE",
      desc: "Translate sovereign regulatory frameworks into deterministic constitutional axioms.",
      tags: ["LAW", "AI GOVERNANCE"]
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-5xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black italic">JOIN THE SUBSTRATE</Badge>
            <SectionLabel>CAREERS AT ATRIYA</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Engineer <br />
            <span className="text-indigo-600 font-medium">Certainty.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-4xl text-slate-500 font-sans leading-tight font-light tracking-tight max-w-[8000px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We are building the sovereign governance layer for the agentic age. Join an elite technical team dedicated to moving safety from policy into physics.
          </motion.p>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-24 mb-48">
         <div className="space-y-8">
            <SectionLabel>THE OPEN REGISTRY</SectionLabel>
            <h2 className="text-5xl md:text-8xl font-display text-slate-950 tracking-tight font-light italic">Build the <span className="text-indigo-600 font-medium not-italic">Infrastructure of Truth.</span></h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {roles.map((role, i) => (
              <div key={i} className="group p-12 bg-slate-50 border border-slate-100 rounded-[5rem] hover:border-indigo-300 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-3xl flex flex-col justify-between min-h-[450px]">
                 <div className="space-y-12">
                    <div className="flex justify-between items-start italic">
                       <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">{role.id} — {role.dept}</p>
                       <div className="flex gap-2">
                          {role.tags.map((tag, j) => (
                            <Badge key={j} className="bg-white text-indigo-400 border border-indigo-100 font-mono text-[9px] uppercase tracking-widest font-black leading-none py-1.5">{tag}</Badge>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-4xl font-display text-slate-950 tracking-tight font-medium uppercase leading-[0.9]">{role.title}</h3>
                       <p className="text-xl text-slate-500 font-sans font-light leading-relaxed italic">{role.desc}</p>
                    </div>
                 </div>
                 <div className="pt-12 border-t border-slate-200/50 flex justify-between items-center transition-all group-hover:border-indigo-400">
                    <span className="text-[10px] font-mono text-slate-400 font-black uppercase tracking-widest leading-none">Global Deployment</span>
                    <Button variant="ghost" className="text-indigo-600 font-display text-lg flex items-center gap-4 transition-all group-hover:gap-6 active:scale-95 italic">
                       View Role Briefing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* FINAL ACTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16 mb-48">
         <h2 className="text-6xl md:text-[10rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center italic">Initialize <br /><span className="text-indigo-600 font-medium not-italic">Belonging.</span></h2>
         <div className="flex justify-center pt-12">
            <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-4xl transition-all hover:bg-indigo-600 group">
               <Link href="/contact" className="flex items-center gap-6 italic">Speculative Application <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" /></Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
