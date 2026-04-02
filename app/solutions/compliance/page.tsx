"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  ShieldCheck, FileCheck, History, RefreshCw, 
  ArrowRight, Share2, Lock, Scale, Globe
} from "lucide-react";
import Link from "next/link";

export default function ComplianceSolution() {
  const proofs = [
    { icon: FileCheck, title: "Governance Evidence", text: "Definitive proof of system decision-making, anchored in the underlying governance protocols." },
    { icon: History, title: "Platform Integrity Log", text: "A permanent, verifiable record of interaction history, ensuring complete transparency and auditability." },
    { icon: RefreshCw, title: "Deterministic Review", text: "Structural certainty that allows for precise re-evaluation of system outputs under regulatory scrutiny." },
    { icon: ShieldCheck, title: "Sovereignty Proof", text: "Verifiable evidence that system execution and data residency remain within declared jurisdictional boundaries." },
    { icon: Share2, title: "Interaction Lineage", text: "Strategic mapping of the decision-making process, providing audit-ready visibility into system logic." },
    { icon: Lock, title: "Safety Defaults", text: "Structural commitment to system default states whenever governance thresholds are not definitively cleared." }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-10">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">SOLUTION LAYER</Badge>
            <SectionLabel>PLATFORM COMPLIANCE</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
             Integrity as <br />
             <span className="text-indigo-600 italic font-light">Physics.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[800px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
             ATRIYA addresses global regulatory requirements from the substrate up. 
             Not through external policies, but through structural execution logic 
             and verifiable proofs generated at the point of interaction.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
               Request Compliance Brief
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               Explore Certifications
            </Button>
          </motion.div>
        </div>
      </section>

      {/* REGULATORY ALIGNMENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-20">
        <div className="max-w-3xl space-y-6">
          <SectionLabel>REGULATORY ALIGNMENT</SectionLabel>
          <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">
             Substrate-Level <br />Governance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[ 
             { title: "Global AI Frameworks", text: "Transparency and risk management addressed at the architecture level, ensuring systemic alignment with emerging standards.", icon: Scale },
             { title: "National Data Sovereignty", text: "Deterministic residency and erasure verification built into the structural foundations of the system.", icon: Globe },
             { title: "Decision Transparency", text: "Automated decision-making visibility and reasoning proofs generated as execution metadata.", icon: Lock },
             { title: "Institutional Oversight", text: "Platform-level auditability ready for high-stakes examination and regulatory review.", icon: ShieldCheck }
           ].map((reg, idx) => (
             <div key={idx} className="p-12 bg-white border border-slate-200 rounded-[3rem] space-y-8 hover:border-indigo-300 transition-all shadow-sm hover:shadow-indigo-500/5 group">
                <div className="bg-slate-50 h-14 w-14 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                   <reg.icon className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={28} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-display text-slate-900 group-hover:text-indigo-600 transition-colors">{reg.title}</h3>
                  <p className="text-lg text-slate-500 font-sans leading-relaxed">{reg.text}</p>
                </div>
             </div>
           ))}
        </div>

        {/* REGULATORY ANALYSIS MAPPING */}
        <div className="mt-20 overflow-x-auto no-scrollbar border border-slate-100 rounded-[3rem] shadow-xl bg-white p-2">
           <table className="w-full text-left font-sans text-xs">
              <thead className="bg-slate-900 text-white font-mono uppercase tracking-widest rounded-t-[2.5rem]">
                 <tr>
                    <th className="p-10 border-b border-white/10 rounded-tl-[2.5rem]">Framework</th>
                    <th className="p-10 border-b border-white/10">Verifiable Evidence</th>
                    <th className="p-10 border-b border-white/10">Legacy Gap</th>
                    <th className="p-10 border-b border-white/10 text-indigo-400 rounded-tr-[2.5rem]">ATRIYA Provision</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {[ 
                    ["High-Risk Governance", "Deterministic Logic Evidence", "Static Checklists / Post-hoc Logs", "Structural Reasoning Proofs"],
                    ["Data Sovereignty", "Cryptographic Residency Certificates", "Administrative Configuration Only", "Structural Residency Verification"],
                    ["Explainable Logic", "Causal Integrity Mapping", "Probabilistic Interpretations", "Deterministic Decision Trails"],
                    ["Institutional Audit", "Immutable Transparency Bundles", "Limited Access Logs", "System-Wide Integrity Proofs"]
                 ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                       <td className="p-10 font-bold text-slate-900 border-r border-slate-100">{row[0]}</td>
                       <td className="p-10 text-slate-600 border-r border-slate-100">{row[1]}</td>
                       <td className="p-10 text-slate-400 border-r border-slate-100 italic">{row[2]}</td>
                       <td className="p-10 text-indigo-600 font-bold bg-indigo-50/20 group-hover:bg-indigo-50/50 transition-colors">{row[3]}</td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>

      {/* SYSTEM PROOFS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-20">
        <div className="max-w-3xl space-y-6">
          <SectionLabel>EVIDENCE MODELS</SectionLabel>
          <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">
             Proofs, not <br />Assertions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proofs.map((proof, idx) => (
             <div key={idx} className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-8 hover:bg-white hover:border-indigo-200 transition-all shadow-sm">
                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                   <proof.icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-sans text-slate-900">{proof.title}</h3>
                <p className="text-base text-slate-500 font-sans leading-relaxed">{proof.text}</p>
             </div>
          ))}
        </div>
        <div className="text-center pt-12">
           <Button variant="ghost" className="text-indigo-600 font-display">View Technical Specifications <ArrowRight className="ml-2" size={16} /></Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 p-6 lg:p-12">
        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#4f46e5_0%,transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center justify-between relative z-10">
            <div className="space-y-8 max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-display leading-tight">Structure the Law.</h2>
              <p className="text-xl text-indigo-100/70 font-sans leading-relaxed">
                Talk to our compliance engineering team about your specific 
                regulatory requirements and institutional governance models.
              </p>
            </div>
            <Button size="lg" className="h-16 px-12 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-display shadow-2xl shadow-black">
              Get Strategic Briefing
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
