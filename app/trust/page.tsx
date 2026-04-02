"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import {
   ShieldCheck, Lock, Eye, AlertCircle, FileCheck, 
   Globe, Scale, Gavel, CheckCircle2, Zap,
   Fingerprint, Database, Network, Key, Search
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TrustCenterPage() {
   const certifications = [
      { name: "SOC 2 Type II", status: "In-Compliance", date: "Q3 2026", desc: "Security, availability, and processing integrity of the substrate." },
      { name: "ISO 27001", status: "Certified", date: "Renewal 2027", desc: "Global standard for information security management systems." },
      { name: "GDPR / DPDP", status: "Conformant", date: "Continuous", desc: "Full data residency and right-to-erasure certificates." }
   ];

   const pillars = [
      { title: "Sovereign Execution", desc: "Custom-operated delivery tiers (T-03) ensure you retain complete sovereignty over your data and execution logic.", icon: Globe },
      { title: "Immutable Audit", desc: "Every decision produces a SHA-256 Merkle-anchored audit trail (P-04) that is verifiable by any third party.", icon: FileCheck },
      { title: "Constitutional Safety", desc: "Non-bypassable safety filters (P-03) ensure AI never operates outside institutional constitutional bounds.", icon: ShieldCheck }
   ];

   return (
      <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         {/* HERO */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="max-w-4xl space-y-12">
               <div className="flex gap-4 items-center">
                  <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">TRUST HUB v3.0</Badge>
                  <SectionLabel>SAFETY & COMPLIANCE</SectionLabel>
               </div>
               
               <motion.h1 
                  className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Certainty <br />
                  <span className="text-indigo-600 font-medium">as Default.</span>
               </motion.h1>

               <motion.p 
                  className="text-xl md:text-3xl text-slate-500 font-sans leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
               >
                  Trust in ATRIYA is not administrative — it is structural. We provide 
                  mathematically provable evidence for every system interaction.
               </motion.p>
            </div>
         </section>

         {/* COMPLIANCE MATRICES */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {certifications.map((cert, i) => (
                 <div key={i} className="p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem] space-y-10 group hover:border-indigo-200 transition-all">
                    <div className="flex justify-between items-center text-[10px] font-mono font-black uppercase tracking-widest italic">
                       <span className="text-indigo-600">{cert.status}</span>
                       <span className="text-slate-400">{cert.date}</span>
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-display text-slate-950 font-medium">{cert.name}</h3>
                       <p className="text-base text-slate-500 font-sans leading-relaxed font-light">{cert.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </section>

         {/* PILLARS OF PROVABILITY */}
         <section className="relative z-10 px-6 lg:px-12 py-32 bg-slate-950 rounded-[5rem] mx-4 lg:mx-8 overflow-hidden shadow-4xl mb-48 group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_60%)] group-hover:opacity-20 transition-opacity duration-1000"></div>
            <div className="max-w-7xl mx-auto relative z-10 space-y-24">
               <div className="space-y-8 text-center lg:text-left">
                  <SectionLabel className="border-indigo-500 text-indigo-400 font-black">PILLARS OF PROVABILITY</SectionLabel>
                  <h2 className="text-6xl md:text-[8rem] font-display text-white tracking-tight leading-none font-light">Structural <span className="text-indigo-400 font-medium">Bonds.</span></h2>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12">
                  {pillars.map((pillar, i) => (
                     <div key={i} className="space-y-10 border-l border-white/10 pl-12 group/card">
                        <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 group-hover/card:bg-indigo-600 group-hover/card:text-white transition-all">
                           <pillar.icon size={28} />
                        </div>
                        <div className="space-y-6">
                           <h4 className="text-3xl font-display text-white font-medium uppercase tracking-tight">{pillar.title}</h4>
                           <p className="text-lg text-indigo-100/40 leading-relaxed font-sans font-light italic">{pillar.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* REPORT DOWNLOADS */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="text-center space-y-12">
               <h2 className="text-6xl md:text-[10rem] font-display leading-[0.8] text-slate-950 tracking-tighter font-light uppercase">Safety. <br /><span className="text-indigo-600 font-medium lowercase italic not-italic">Signed.</span></h2>
               <div className="flex flex-wrap justify-center gap-6 pt-12">
                  {["Security Whitepaper", "Regulatory Audit (Q1)", "Axiom Registry"].map((doc, i) => (
                     <Button key={i} variant="outline" className="h-16 px-12 border-slate-200 text-slate-600 rounded-full font-display hover:text-indigo-600 transition-all flex items-center gap-4">
                        {doc} <Search size={16} />
                     </Button>
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
}
