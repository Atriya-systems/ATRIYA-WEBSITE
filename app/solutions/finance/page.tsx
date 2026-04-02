"use client";

import * as React from "react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  BarChart3, TrendingUp, ShieldCheck, 
  ArrowRight, CheckCircle2, Landmark,
  Wallet, PieChart, Clock, Info, UserCheck, Orbit,
  Scale, Activity, Zap
} from "lucide-react";
import Link from "next/link";

export default function FinanceSolutionPage() {
  const stats = [
    { label: "Default Risk Accuracy", value: "97.4%" },
    { label: "SLA Tier", value: "T1" },
    { label: "Transaction p95", value: "≤200ms" },
    { label: "Compliance Layer", value: "MiFID II / Basel III" }
  ];

  const features = [
    {
      title: "Analytical Integrity",
      tagline: "S-11 ADAPTATION",
      desc: "Our Multi-Step Evaluator assesses investment analysis methodology and valuation logic — ensuring that every recommendation is structurally sound and verifiable.",
      icon: Scale
    },
    {
      title: "Customer Digital Twin",
      tagline: "L-03 ADAPTATION",
      desc: "A 7-dimensional customer profile: risk preference, temporal goals, behavioral patterns, and financial context. Mapping the complete trajectory of the investor.",
      icon: UserCheck
    },
    {
      title: "Risk Forecasting",
      tagline: "P-04 ADAPTATION",
      desc: "Predicting default risk, fraud probability, and portfolio success using 150 cognitive primitives and interventional do-calculus.",
      icon: Activity
    },
    {
      title: "Decision Hygiene",
      tagline: "M-01 ADAPTATION",
      desc: "Detecting trader stress, decision fatigue, and behavioral anomalies within high-stakes environments before they impact outcomes.",
      icon: Zap
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO — "LEVERAGING FINANCEOS DEPTH" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 border-b border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-12 space-y-12">
              <div className="flex flex-wrap gap-4 items-center">
                 <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 italic font-black">FINANCEOS — TRANSACTIONAL SUBSTRATE</Badge>
                 <SectionLabel>THE 150-ENGINE SYSTEM</SectionLabel>
              </div>
              
              <motion.h1 
                className="text-7xl md:text-[11rem] font-display leading-[0.85] text-slate-950 italic tracking-tighter uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Provable <br />
                <span className="text-indigo-600 font-light lowercase not-italic tracking-tight">Returns.</span>
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <motion.p 
                   className="text-2xl md:text-5xl text-slate-500 font-sans leading-tight font-light tracking-tight"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                 >
                   FinanceOS translates universal cognitive primitives into transactional certainty. Assessing process, predicting risk, and modeling portfolios.
                 </motion.p>
                 
                 <div className="flex flex-wrap gap-12">
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
                <Button size="lg" className="h-24 px-16 bg-slate-950 hover:bg-amber-600 text-white rounded-full shadow-2xl font-display text-2xl transition-all group shrink-0">
                  <Link href="/contact" className="flex items-center gap-6">Initialize Deployment <ArrowRight className="group-hover:translate-x-2 transition-transform" /></Link>
                </Button>
                <div className="flex items-center gap-4 px-8 border border-slate-100 rounded-full bg-slate-50/50 backdrop-blur-sm">
                   <div className="h-10 w-10 flex items-center justify-center text-amber-500">
                      <ShieldCheck size={24} />
                   </div>
                   <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold font-sans">SOX / MiFID II / AML CONFORMANT</p>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* CORE CAPABILITIES — "FINANCEOS DEPTH" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
         <div className="max-w-4xl space-y-10">
            <SectionLabel>TRANSACTIONAL ADAPTATION</SectionLabel>
            <h2 className="text-5xl md:text-8xl font-display italic text-slate-950 leading-[0.9] tracking-tighter uppercase font-light">
               Risk-Native <br /><span className="text-indigo-600 font-bold not-italic">Intelligence.</span>
            </h2>
            <p className="text-2xl text-slate-500 font-sans leading-relaxed font-light">
               The ATRIYA Intelligence Fabric doesn&apos;t build isolated tools. FinanceOS is the 
               transactional adapter for the world&apos;s first governable intelligence substrate — established to move risk from probabilistic policy into physical invariant.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, i) => (
              <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:border-amber-200 transition-all duration-700 shadow-sm hover:shadow-3xl hover:shadow-amber-500/5 group flex flex-col justify-between min-h-[450px]">
                 <div className="space-y-10">
                    <div className="flex justify-between items-start">
                       <div className="h-20 w-20 bg-slate-50 rounded-3xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                          <feature.icon size={40} strokeWidth={1} />
                       </div>
                       <Badge variant="outline" className="font-mono text-[10px] tracking-widest font-bold group-hover:border-amber-200 group-hover:text-amber-600 transition-colors uppercase italic leading-none">{feature.tagline}</Badge>
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-4xl font-display italic text-slate-950 uppercase tracking-tight leading-none">{feature.title}</h3>
                       <p className="text-lg text-slate-500 font-sans font-light leading-relaxed">{feature.desc}</p>
                    </div>
                 </div>
                 <div className="pt-10 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black italic">Structural Integrity Verified</span>
                    <ArrowRight className="text-amber-600" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* THE 7-DIMENSIONAL CUSTOMER TWIN */}
      <section className="relative z-10 py-32 bg-slate-950 rounded-[6rem] mx-4 lg:mx-12 my-24 overflow-hidden shadow-3xl shadow-amber-950/20">
         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,#d97706_0%,transparent_60%)]"></div>
         <div className="max-w-7xl mx-auto px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10 items-center">
            <div className="lg:col-span-5 space-y-12">
               <SectionLabel className="border-amber-500/30 text-amber-400 uppercase tracking-widest font-black">L-03: CUSTOMER TWIN</SectionLabel>
               <h2 className="text-5xl md:text-[10rem] font-display leading-[0.8] text-white italic tracking-tighter uppercase no-italic font-light">Investor <br /><span className="text-amber-400 font-bold not-italic lowercase tracking-tight">Twins.</span></h2>
               <p className="text-2xl text-amber-100/60 font-sans leading-tight font-light">
                  Mapping the complete financial state of the customer across 7 dimensions: Risk Preference, Goals, Temporal Dynamics, Behavioral Trends, and Regulatory Context.
               </p>
               <div className="flex flex-wrap gap-4 pt-4 font-sans">
                  {["Risk Preference", "Temporal Goals", "Behavioral Trends", "Liquidity Patterns", "Regulatory Context", "Social Mobility", "Universal Knowledge"].map((dim, i) => (
                    <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
                       {dim}
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-7 bg-white/5 p-16 rounded-[4.5rem] border border-white/10 backdrop-blur-3xl shadow-3xl group">
               <div className="space-y-12">
                  <div className="flex justify-between items-center text-[10px] font-mono text-amber-400 uppercase tracking-[0.4em] font-black italic">
                     <span>FINANCIAL_PULSE — 200ms</span>
                     <span className="flex items-center gap-2 animate-pulse"><div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(217,119,6,1)]" /> VERIFYING</span>
                  </div>
                  <div className="space-y-8">
                     <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-1">
                           <p className="text-xs text-white/20 uppercase font-mono italic">Audit Provenance</p>
                           <p className="text-5xl font-display text-white italic leading-none uppercase">SHA-256 SIGNED</p>
                        </div>
                        <div className="text-emerald-400 font-display italic text-2xl uppercase">IMMUTABLE</div>
                     </div>
                     <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-1">
                           <p className="text-xs text-white/20 uppercase font-mono italic">Valuation Logic</p>
                           <p className="text-5xl font-display text-white italic leading-none uppercase">CONFORMANT</p>
                        </div>
                        <div className="text-amber-400 font-display italic text-2xl uppercase">p95 &lt; 200ms</div>
                     </div>
                  </div>
                  <div className="p-8 bg-amber-500/10 rounded-3xl border border-amber-500/20">
                     <p className="text-sm text-amber-100/60 leading-relaxed font-sans italic">
                        &quot;Engine S-11 verified investment analyst methodology for bond yield projection. Governance gate passed.&quot;
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA STATEMENT — "Acquire FinanceOS" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 mb-48 text-center space-y-16">
         <SectionLabel>STRATEGIC PARTNERSHIP</SectionLabel>
         <h2 className="text-6xl md:text-[11rem] font-display italic leading-[0.8] tracking-tighter uppercase text-slate-950 font-light">Certainty as <br /><span className="text-indigo-600 font-bold not-italic">Substrate.</span></h2>
         <p className="text-2xl text-slate-500 font-sans max-w-3xl mx-auto font-light leading-snug">
            Establish provable returns and total accountability at the substrate level. 
            FinanceOS is the intelligence foundation for the high-stakes economy.
         </p>
         <div className="flex justify-center pt-8">
            <Button size="lg" className="h-24 px-20 bg-amber-600 hover:bg-slate-950 text-white rounded-full shadow-2xl font-display text-2xl transition-all shadow-amber-200">
               <Link href="/contact">Acquire the Substrate</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
