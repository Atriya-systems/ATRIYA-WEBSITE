"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Activity, 
  Database, UserCheck, Scale, History,
  Lock, AlertTriangle, FileCheck, Layers,
  Cpu, Code2, Globe, BrainCircuit,
  MessageSquare, BarChart3, Zap, Globe2
} from "lucide-react";
import Link from "next/link";

export default function CognitiveOSPage() {
  const capabilities = [
    {
      title: "Decision Intelligence",
      icon: BrainCircuit,
      text: "High-fidelity evaluation of complex logic chains, ensuring every outcome is governed by rigorous systemic validation of intent and methodology."
    },
    {
      title: "Adaptive Systems",
      icon: Activity,
      text: "Dynamic recalibration of system behavior based on real-time interaction patterns, delivering personalized outcomes that evolve with user needs."
    },
    {
      title: "Contextual Awareness",
      icon: Database,
      text: "Grounded interaction mapping that ensures every response is anchored in verified knowledge substrates, providing precision and eliminating uncertainty."
    },
    {
      title: "Operational Governance",
      icon: ShieldCheck,
      text: "Built-in accountability layers that maintain system integrity across diverse environments, ensuring consistent performance regardless of application."
    },
    {
      title: "Outcome Certainty",
      icon: BarChart3,
      text: "Calibrated decision frameworks that prioritize reliability. The system operates with built-in safety, ensuring outcomes remain consistent and accurate."
    },
    {
      title: "Unified Intelligence",
      icon: Cpu,
      text: "A flexible intelligence layer that supports a wide range of use cases, allowing the system to adapt and scale without exposing internal complexity."
    },
    {
      title: "Governed Generation",
      icon: Zap,
      text: "Validation-first synthesis of information, producing high-fidelity outputs that meet strict enterprise standards for clarity and safety."
    },
    {
      title: "Adaptive Orchestration",
      icon: Layers,
      text: "Systemic coordination that routes every interaction through the optimal decision path, maintaining governance while maximizing efficiency."
    }
  ];

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-48 min-h-screen">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="max-w-4xl pt-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase mb-4 py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">SYSTEM LAYER</Badge>
          <SectionLabel>INTELLIGENCE FOUNDATION</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1] text-indigo-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Intelligence.<br />
          <span className="text-indigo-600">Built for Trust.</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-600 font-sans max-w-[900px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATRIYA is powered by a unified intelligence foundation that enables reasoning, 
          prediction, and decision-making across diverse environments. Instead of 
          building isolated solutions, we provide a core system that adapts 
          seamlessly—delivering consistent performance regardless of the application.
        </motion.p>
        
        <motion.div 
           className="mt-12"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="h-14 bg-indigo-600 hover:bg-indigo-700">
             <Link href="/contact">Request System Access →</Link>
          </Button>
        </motion.div>
      </section>

      {/* THE KEY INSIGHT */}
      <section className="bg-slate-50 p-12 lg:p-24 rounded-[3rem] border border-slate-200">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
               <SectionLabel>CORE PHILOSOPHY</SectionLabel>
               <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight text-slate-900">Governance. Built In.</h2>
            </div>
            <div className="text-xl text-slate-600 font-sans leading-relaxed space-y-8">
               <p>
                 ATRIYA is not a tool that reacts—it is a system that understands, 
                 evaluates, and delivers outcomes with built-in intelligence and 
                 accountability.
               </p>
               <p className="border-l-2 border-indigo-500 pl-8 italic text-indigo-950 font-medium">
                 Every interaction is handled through a unified process designed to 
                 ensure clarity, safety, and reliability—without exposing systemic 
                 complexity to the end user.
               </p>
               <p>
                 By decoupling the intelligence engine from the application domain, 
                 we ensure that the same foundational safeguards apply whether the 
                 system is managing education, healthcare, or financial governance.
               </p>
            </div>
         </div>
      </section>

      {/* CAPABILITY CATEGORIES */}
      <section className="space-y-16">
        <div className="max-w-3xl">
          <SectionLabel>SYSTEM CAPABILITIES</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight text-slate-900">
             Cross-Domain Adaptability.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {capabilities.map((c, idx) => (
             <div key={idx} className="p-10 bg-white border border-slate-200 rounded-2xl space-y-6 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group h-full flex flex-col">
                <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                   <c.icon className="text-slate-400 group-hover:text-indigo-600" size={24} />
                </div>
                <div className="space-y-4">
                   <h3 className="text-xl font-bold font-sans text-slate-900">{c.title}</h3>
                   <p className="text-sm text-slate-500 font-sans leading-relaxed">{c.text}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* SECTOR INSTANTIATION */}
      <section className="space-y-16">
        <div className="max-w-3xl">
          <SectionLabel>GLOBAL DEPLOYMENT</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight text-slate-900">
             One System.<br />
             Many Applications.
          </h2>
        </div>

        <div className="overflow-hidden border border-slate-200 rounded-3xl bg-white shadow-sm">
           <table className="w-full border-collapse font-sans text-left">
              <thead>
                 <tr className="bg-slate-50 text-left border-b border-slate-200">
                    <th className="p-8 font-mono text-[11px] uppercase tracking-widest text-slate-500">Domain</th>
                    <th className="p-8 font-mono text-[11px] uppercase tracking-widest text-slate-500">Adaptation Tier</th>
                    <th className="p-8 font-mono text-[11px] uppercase tracking-widest text-slate-500">Output Validation</th>
                    <th className="p-8 font-mono text-[11px] uppercase tracking-widest text-slate-500">Status</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {[ 
                   ["Education", "Academic Intelligence", "High-Fidelity", "OPERATIONAL"],
                   ["Healthcare", "Clinical Reasoning", "Multi-Stage", "DEPLOYING"],
                   ["Finance", "Risk Evaluation", "Grounded", "PILOT"],
                   ["Legal", "Regulatory Analysis", "Compliance-Locked", "PILOT"],
                   ["Enterprise", "Action Generation", "Governed", "PARTNER ACCESS"],
                   ["Public Sector", "Governance Oversight", "Sovereign-Ready", "ROADMAP"]
                 ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                       <td className="p-8 font-semibold text-slate-900">{row[0]}</td>
                       <td className="p-8 text-slate-600">{row[1]}</td>
                       <td className="p-8 text-slate-600">{row[2]}</td>
                       <td className="p-8">
                          <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${row[3] === 'OPERATIONAL' ? 'border-emerald-200 text-emerald-700 bg-emerald-50' : 'border-indigo-100 text-indigo-600 bg-indigo-50'}`}>{row[3]}</span>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>

      {/* BUILD ON FOUNDATION */}
      <section className="bg-indigo-950 rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
         {/* Subtle pattern */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#4f46e5_0%,transparent_70%)]"></div>
         
         <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-24 items-center relative z-10">
            <div className="space-y-10">
               <SectionLabel className="text-indigo-400">PARTNER PROGRAMME</SectionLabel>
               <h2 className="text-4xl md:text-6xl font-display leading-tight">Scale with the Intelligence Foundation.</h2>
               <p className="text-xl text-indigo-200/80 font-sans leading-relaxed">
                  Join the cohort of enterprise partners building on the ATRIYA foundation. 
                  Access our core intelligence primitives to deliver governed, 
                  accountable AI solutions without compromising on safety or speed.
               </p>
               <div className="flex pt-4">
                  <Button size="lg" className="h-16 px-12 bg-white text-indigo-950 hover:bg-indigo-50 border-none group shadow-xl shadow-indigo-900/20">
                    <Link href="/contact" className="flex items-center gap-3 font-bold">Request Partner Access <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 space-y-8">
               <h4 className="text-2xl font-display text-indigo-300">Foundation Benefits</h4>
               <ul className="space-y-6">
                  {[ 
                    "Unified intelligence frameworks for scaling.",
                    "Integrated outcome governance & accountability.",
                    "Domain-agnostic core with configurable adapters.",
                    "Standardized interaction protocols for trust.",
                    "Provenance-anchored decision lineage."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start group">
                       <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={18} />
                       <span className="text-base text-indigo-100/90 font-sans leading-relaxed">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
    </main>
  );
}
