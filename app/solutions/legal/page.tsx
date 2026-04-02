"use client";

import * as React from "react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Gavel, Scale, ShieldCheck, 
  ArrowRight, CheckCircle2,
  FileText, Briefcase, Clock, Info, UserCheck, Orbit,
  Activity, Zap, Lock
} from "lucide-react";
import Link from "next/link";

export default function LegalSolutionPage() {
  const stats = [
    { label: "Argument Verification", value: "95.8%" },
    { label: "SLA Tier", value: "T2" },
    { label: "Reasoning p95", value: "≤800ms" },
    { label: "Privilege Substrate", value: "Encrypted+" }
  ];

  const features = [
    {
      title: "Argument Integrity",
      tagline: "SM-01 ADAPTATION",
      desc: "Our Multi-Step Evaluator evaluates legal argument construction and case reasoning quality — ensuring that every filing is structurally sound and logically consistent.",
      icon: Gavel
    },
    {
      title: "Client Digital Twin",
      tagline: "L-03 ADAPTATION",
      desc: "A 7-dimensional client profile mapping case history, communication preferences, and long-term objectives. Total interaction awareness.",
      icon: UserCheck
    },
    {
      title: "Outcome Prediction",
      tagline: "P-04 ADAPTATION",
      desc: "Predicting case outcomes, settlement likelihood, and judicial patterns using high-dimensional historical precedent and interventional simulation.",
      icon: Scale
    },
    {
      title: "Performance Monitor",
      tagline: "M-01 ADAPTATION",
      desc: "Detecting lawyer burnout, client stress indicators, and decision fatigue within high-stakes litigation cycles.",
      icon: Zap
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 border-b border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-12 space-y-12">
              <div className="flex flex-wrap gap-4 items-center">
                 <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 italic font-black">LEGALOS — JUDICIAL SUBSTRATE</Badge>
                 <SectionLabel>THE 150-ENGINE SYSTEM</SectionLabel>
              </div>
              
              <motion.h1 
                className="text-7xl md:text-[11rem] font-display leading-[0.85] text-slate-950 italic tracking-tighter uppercase font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Inherent <br />
                <span className="text-indigo-600 font-bold not-italic lowercase tracking-tight">Justice.</span>
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <p className="text-2xl md:text-5xl text-slate-500 font-sans leading-tight font-light tracking-tight">
                   LegalOS translates universal cognitive primitives into judicial certainty. Evaluating construction, predicting outcomes, and modeling precedent.
                 </p>
                 <div className="flex flex-wrap gap-12">
                    {stats.map((s, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-3xl font-display italic text-slate-950">{s.value}</p>
                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black leading-none">{s.label}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-12">
                <Button size="lg" className="h-24 px-16 bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-2xl font-display text-2xl transition-all group shrink-0">
                  <Link href="/contact" className="flex items-center gap-6">Initialize Deployment <ArrowRight /></Link>
                </Button>
                <div className="flex items-center gap-4 px-8 border border-slate-100 rounded-full bg-slate-50/50 backdrop-blur-sm">
                   <Lock size={20} className="text-slate-400" />
                   <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">SOVEREIGN CASE PROTECTION</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:border-indigo-200 transition-all duration-700 shadow-sm hover:shadow-3xl flex flex-col justify-between min-h-[450px]">
                 <div className="space-y-10">
                    <div className="h-20 w-20 bg-slate-50 rounded-3xl flex items-center justify-center group-hover:bg-indigo-600">
                       <feature.icon size={40} strokeWidth={1} className="text-slate-400" />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-4xl font-display italic text-slate-950 uppercase tracking-tight leading-none">{feature.title}</h3>
                       <p className="text-lg text-slate-500 font-sans font-light leading-relaxed">{feature.desc}</p>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <section className="relative z-10 py-32 mb-48 text-center space-y-16">
         <h2 className="text-6xl md:text-[11rem] font-display italic leading-[0.8] tracking-tighter uppercase text-slate-950 font-light">Physics over <br /><span className="text-indigo-600 font-bold not-italic">Precedent.</span></h2>
         <Button size="lg" className="h-24 px-20 bg-slate-950 text-white rounded-full shadow-2xl font-display text-2xl">
            <Link href="/contact">Acquire LegalOS</Link>
         </Button>
      </section>
    </main>
  );
}
