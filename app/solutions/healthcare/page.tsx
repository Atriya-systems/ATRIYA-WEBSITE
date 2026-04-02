"use client";

import * as React from "react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Heart, Activity, Stethoscope, ShieldCheck, 
  ArrowRight, CheckCircle2, FlaskConical,
  Dna, ClipboardList, Clock, Info, UserCheck, Orbit
} from "lucide-react";
import Link from "next/link";

export default function HealthcareSolutionPage() {
  const stats = [
    { label: "Predictive Accuracy", value: "96.2%" },
    { label: "SLA (Platform Critical)", value: "T1" },
    { label: "Reasoning p95", value: "≤500ms" },
    { label: "Privacy Substrate", value: "HIPAA+" }
  ];

  const features = [
    {
      title: "Diagnostic Reasoning",
      tagline: "S-11 ADAPTATION",
      desc: "Our Multi-Step Evaluator evaluates diagnostic reasoning quality and treatment plan logic — not just final outcomes. Ensuring clinical integrity at the substrate level.",
      icon: Stethoscope
    },
    {
      title: "Patient Digital Twin",
      tagline: "L-03 ADAPTATION",
      desc: "A 7-dimensional patient model: health status, treatment response, lifestyle, and genetics. Constantly updating through the SPRE engine loop.",
      icon: UserCheck
    },
    {
      title: "Progression Forecasting",
      tagline: "PS-11 ADAPTATION",
      desc: "Predict disease progression, readmission risk, and treatment response using high-dimensional historical markers and interventional do-calculus.",
      icon: Activity
    },
    {
      title: "Recovery Monitoring",
      tagline: "M-01 ADAPTATION",
      desc: "Autonomous wellness monitoring, treatment adherence tracking, and early recovery detection from behavioral and clinical signals.",
      icon: Heart
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* HERO — "LEVERAGING HEALTHOS DEPTH" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 border-b border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-12 space-y-12">
              <div className="flex flex-wrap gap-4 items-center">
                 <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 italic font-black">HEALTHOS — CLINICAL SUBSTRATE</Badge>
                 <SectionLabel>THE 150-ENGINE SYSTEM</SectionLabel>
              </div>
              
              <motion.h1 
                className="text-7xl md:text-[11rem] font-display leading-[0.85] text-slate-950 italic tracking-tighter uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Clinical <br />
                <span className="text-indigo-600 font-light lowercase not-italic tracking-tight">Integrity.</span>
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <motion.p 
                   className="text-2xl md:text-5xl text-slate-500 font-sans leading-tight font-light tracking-tight"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                 >
                   HealthOS translates universal cognitive primitives into clinical certainty. Evaluating reasoning, predicting response, and modeling outcomes.
                 </motion.p>
                 
                 <div className="flex flex-wrap gap-12 pb-4">
                    {stats.map((s, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-3xl font-display italic text-slate-950">{s.value}</p>
                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black leading-none">{s.label}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-6 pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button size="lg" className="h-24 px-16 bg-slate-950 hover:bg-rose-600 text-white rounded-full shadow-2xl font-display text-2xl transition-all group shrink-0">
                  <Link href="/contact" className="flex items-center gap-6">Initialize Deployment <ArrowRight className="group-hover:translate-x-2 transition-transform" /></Link>
                </Button>
                <div className="flex items-center gap-4 px-8 border border-slate-100 rounded-full bg-slate-50/50 backdrop-blur-sm">
                   <div className="h-10 w-10 flex items-center justify-center text-rose-500">
                      <ShieldCheck size={24} />
                   </div>
                   <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">HIPAA / GDPR / DPDP-2023 CONFORMANT</p>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* CORE CAPABILITIES — "HEALTHOS DEPTH" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
         <div className="max-w-4xl space-y-8">
            <SectionLabel>CLINICAL ADAPTATION</SectionLabel>
            <h2 className="text-5xl md:text-8xl font-display italic text-slate-950 leading-[0.9] tracking-tighter uppercase font-light">
               Engineered for <br /><span className="text-indigo-600 font-bold not-italic">Certainty.</span>
            </h2>
            <p className="text-2xl text-slate-500 font-sans leading-relaxed font-light">
               The ATRIYA Intelligence Fabric doesn&apos;t build isolated tools. We build universal engines that specialize into sectors. HealthOS is the clinical adapter for the world&apos;s most sophisticated intelligence substrate.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, i) => (
              <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:border-rose-200 transition-all duration-700 shadow-sm hover:shadow-3xl hover:shadow-rose-500/5 group flex flex-col justify-between min-h-[450px]">
                 <div className="space-y-10">
                    <div className="flex justify-between items-start">
                       <div className="h-20 w-20 bg-slate-50 rounded-3xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                          <feature.icon size={40} strokeWidth={1} />
                       </div>
                       <Badge variant="outline" className="font-mono text-[10px] tracking-widest font-bold group-hover:border-rose-200 group-hover:text-rose-600 transition-colors uppercase italic leading-none">{feature.tagline}</Badge>
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-4xl font-display italic text-slate-950 uppercase tracking-tight leading-none">{feature.title}</h3>
                       <p className="text-lg text-slate-500 font-sans font-light leading-relaxed">{feature.desc}</p>
                    </div>
                 </div>
                 <div className="pt-10 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black italic">Structural Integrity Verified</span>
                    <ArrowRight className="text-rose-600" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* THE 7-DIMENSIONAL PATIENT TWIN */}
      <section className="relative z-10 py-32 bg-slate-950 rounded-[6rem] mx-4 lg:mx-12 my-24 overflow-hidden shadow-3xl shadow-rose-950/20">
         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,#be123c_0%,transparent_60%)]"></div>
         <div className="max-w-7xl mx-auto px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10 items-center">
            <div className="lg:col-span-5 space-y-12">
               <SectionLabel className="border-rose-500/30 text-rose-400 uppercase tracking-widest font-black">L-03: PATIENT TWIN</SectionLabel>
               <h2 className="text-5xl md:text-[10rem] font-display leading-[0.8] text-white italic tracking-tighter uppercase no-italic">Digital <br /><span className="text-rose-400 font-light not-italic lowercase tracking-tight">Twins.</span></h2>
               <p className="text-2xl text-rose-100/60 font-sans leading-tight font-light">
                  A persistent modeling substrate that tracks disease progression, treatment response, lifestyle variables, and genomic markers in a 7-dimensional evidence ledger.
               </p>
               <div className="flex flex-wrap gap-4 pt-4">
                  {["Genomics", "Lifestyle", "Treatment Response", "Biological State", "Temporal Progression", "Behavioral Adherence", "Social Determinants"].map((dim, i) => (
                    <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
                       {dim}
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-7 bg-white/5 p-16 rounded-[4.5rem] border border-white/10 backdrop-blur-3xl shadow-3xl group">
               <div className="space-y-12">
                  <div className="flex justify-between items-center text-[10px] font-mono text-rose-400 uppercase tracking-[0.4em] font-black italic">
                     <span>CLINICAL_PULSE — 200ms</span>
                     <span className="flex items-center gap-2 animate-pulse"><div className="h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(190,18,60,1)]" /> TRACING</span>
                  </div>
                  <div className="space-y-8">
                     <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-1">
                           <p className="text-xs text-white/20 uppercase font-mono italic">Diagnostic Reasoning</p>
                           <p className="text-5xl font-display text-white italic leading-none uppercase">CONFORMANT</p>
                        </div>
                        <div className="text-emerald-400 font-display italic text-2xl uppercase">VERIFIED</div>
                     </div>
                     <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-1">
                           <p className="text-xs text-white/20 uppercase font-mono italic">Treatment Optimization</p>
                           <p className="text-5xl font-display text-white italic leading-none uppercase">CALIBRATING</p>
                        </div>
                        <div className="text-rose-400 font-display italic text-2xl uppercase">T1 — CRITICAL</div>
                     </div>
                  </div>
                  <div className="p-8 bg-rose-500/10 rounded-3xl border border-rose-500/20">
                     <p className="text-sm text-rose-100/60 leading-relaxed font-sans italic">
                        &quot;Engine S-11 detected reasoning divergence in treatment plan selection. Escalating to MD Review (HITL Queue).&quot;
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA STATEMENT — "Acquire HealthOS" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 mb-48 text-center space-y-16">
         <SectionLabel>STRATEGIC PARTNERSHIP</SectionLabel>
         <h2 className="text-6xl md:text-[11rem] font-display italic leading-[0.8] tracking-tighter uppercase text-slate-950">Physics over <br />Policy.</h2>
         <p className="text-2xl text-slate-500 font-sans max-w-3xl mx-auto font-light leading-snug">
            Establish clinical certainty at the substrate level. HealthOS is the 
            intelligence foundation for the era of provable medicine.
         </p>
         <div className="flex justify-center pt-8">
            <Button size="lg" className="h-24 px-20 bg-rose-600 hover:bg-slate-950 text-white rounded-full shadow-2xl font-display text-2xl transition-all shadow-rose-200">
               <Link href="/contact">Book Strategy Briefing</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
