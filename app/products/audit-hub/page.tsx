"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  BarChart2, ShieldCheck, CheckCircle2, 
  History, Eye, Search, Lock, Layers,
  Layout, ArrowRight, FileCheck, ShieldAlert
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AuditHubPage() {
  const auditLevels = [
    {
      title: "Decision Traceability",
      text: "Every system outcome is anchored in an immutable accountability chain, ensuring complete visibility and non-repudiation across all environments.",
      icon: History,
      accent: "text-indigo-600"
    },
    {
       title: "Institutional Alignment",
       text: "Performance standards designed for enterprise-critical operations, delivering consistent results under rigorous governance protocols.",
       icon: ShieldCheck,
       accent: "text-slate-900"
    },
    {
      title: "Regulatory Export Engine",
      text: "Instantly produce evidence bundles for global and regional formal audits, streamlining compliance preparedness and transparency.",
      icon: FileCheck,
      accent: "text-indigo-500"
    }
  ];

  const slaTiers = [
    { name: "Tier I — Mission Critical", reliability: "Governed Outcome", use: "Core Safety & Sovereignty" },
    { name: "Tier II — High-Throughput", reliability: "Calibrated Response", use: "Standardized Intelligence" },
    { name: "Tier III — Operational", reliability: "Consistent Delivery", use: "Secondary Analysis" }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen">
      {/* Background Subtle elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 pt-48 space-y-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase mb-4 py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">ACCOUNTABILITY LAYER</Badge>
          <SectionLabel>EXECUTIVE AUDIT HUB</SectionLabel>
          <h1 className="text-7xl md:text-9xl font-display leading-[0.9] tracking-tight mt-6 text-slate-950">
             Certainty <br />
             <span className="text-indigo-600 italic font-light">With Evidence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-sans leading-relaxed max-w-3xl mt-12">
             In high-stakes enterprise AI, trust is earned through verifiable 
             performance and permanent, multi-tier accountability. Receive proof 
             as a first-class result.
          </p>
          <div className="flex gap-6 pt-12">
             <Button size="lg" className="h-16 px-12 group font-display bg-indigo-600 hover:bg-indigo-700 text-white text-lg rounded-full shadow-xl shadow-indigo-200">
                <Link href="/contact" className="flex items-center">Preview Accountability Trail <ArrowRight size={20} className="ml-4 group-hover:translate-x-1 transition-transform" /></Link>
             </Button>
          </div>
        </motion.div>
      </section>

      {/* THREE CORE DASHBOARDS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {auditLevels.map((dash, i) => (
          <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] flex flex-col justify-between h-[450px] hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all shadow-sm group">
             <div className={`${dash.accent} bg-slate-50 p-6 rounded-3xl w-fit group-hover:bg-indigo-50 transition-colors`}>
                <dash.icon size={42} strokeWidth={1.5} />
             </div>
             <div className="space-y-4">
                <h3 className="text-2xl font-display text-slate-900">{dash.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-sans">{dash.text}</p>
             </div>
          </div>
        ))}
      </section>

      {/* PERFORMANCE GUARANTEE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-16">
         <div className="max-w-2xl space-y-6">
            <SectionLabel>OUTCOME ASSURANCE</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-slate-950 decoration-indigo-600/20 underline-offset-8 underline">The Governance Standard.</h2>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
               Reliability is measured by systemic certainty. No discretionary 
               adjustments—only verifiable performance tiers that align with 
               institutional requirements for transparency and safety.
            </p>
         </div>

         <div className="bg-slate-900 rounded-[3.5rem] border border-slate-800 overflow-hidden shadow-2xl p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
               {slaTiers.map((tier, i) => (
                 <div key={i} className="space-y-6 border-l border-white/10 pl-8 h-full flex flex-col justify-between first:border-l-0">
                    <div className="space-y-2">
                       <p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">{tier.name}</p>
                       <p className="text-3xl font-display text-white">{tier.reliability}</p>
                    </div>
                    <div className="space-y-2 pt-6">
                       <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Target Alignment</p>
                       <p className="text-lg text-indigo-100/80 font-sans italic leading-tight">"{tier.use}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* THE AUDIT EXPERIENCE MOCKUP */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
         <div className="bg-slate-950 rounded-[4rem] border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/40">
               <div className="flex gap-4">
                  <span className="text-indigo-500">●</span>
                  <span>Compliance Substrate (Unified Framework)</span>
                  <span>/ Node: GOVERNANCE_RESERVE_B</span>
               </div>
            </div>

            <div className="p-12 space-y-12 bg-slate-900/50">
               <div className="space-y-6">
                  <p className="text-indigo-400 font-display uppercase tracking-widest text-xs">Decision Traceability (Lineage Authenticated)</p>
                  <div className="space-y-4 text-[13px] font-mono leading-relaxed">
                     {[
                       { id: "RECORD-A2-XP", status: "VALIDATED", detail: "Decision anchored in immutable audit chain." },
                       { id: "RECORD-A2-HQ", status: "GOVERNANCE-LOCKED", detail: "Context mapping complete. Authority verified." },
                       { id: "RECORD-A2-ZR", status: "VALIDATED", detail: "Permanent evidence bundle generated for export." }
                     ].map((item, i) => (
                       <div key={i} className="flex flex-wrap gap-8 p-6 border-b border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-white/5 rounded-xl">
                          <span className="text-white/30">{item.id}</span>
                          <span className={item.status === "VALIDATED" ? "text-emerald-400" : "text-indigo-400"}>{item.status}</span>
                          <span className="text-indigo-100/60">{item.detail}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <Button className="w-full h-16 text-lg font-display bg-white text-slate-950 rounded-full hover:bg-slate-100 transition-all shadow-xl shadow-white/5">
                  Download Verified Compliance Proof (PDF)
               </Button>
            </div>
         </div>
      </section>

      {/* THE PROMISE */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center space-y-10">
         <SectionLabel>SYSTEM STABILITY</SectionLabel>
         <h2 className="text-4xl md:text-6xl font-display leading-tight text-slate-900 mb-6">Proof as a first-class result.</h2>
         <p className="text-xl text-slate-500 font-sans leading-relaxed mx-auto max-w-2xl">
            Receiving a result is only half the requirement. Being able to 
            permanently prove its integrity to institutional stakeholders is the 
            foundation of trust. ATRIYA delivers that proof automatically.
         </p>
      </section>
    </main>
  );
}
