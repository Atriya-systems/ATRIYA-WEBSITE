"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ShieldCheck, ArrowRight, CheckCircle2, 
  Lock, Globe, Search, Info, Scale, PlayCircle, Cpu,
  Database, Zap, Activity, Layers, Fingerprint, FileCheck,
  History as HistoryIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  const capabilities = [
    {
      title: "Context Awareness",
      sub: "Understanding Every Input",
      text: "ATRIYA interprets every interaction within its full context. It considers intent, environment, and conditions to ensure that outcomes are not delivered in isolation, but with complete awareness.",
      icon: Database,
      accent: "text-indigo-600"
    },
    {
      title: "Adaptive Intelligence",
      sub: "Dynamic Decision-Making",
      text: "The system continuously adapts how it handles each request, choosing the most effective trajectory while maintaining consistency, efficiency, and structural accuracy.",
      icon: Zap,
      accent: "text-emerald-500"
    },
    {
      title: "Built-in Safety",
      sub: "Always-On Validation",
      text: "Every outcome is continuously evaluated against integrated safeguards. These mechanisms operate seamlessly in the background, ensuring that results remain reliable and responsible.",
      icon: ShieldCheck,
      accent: "text-rose-600"
    },
    {
      title: "Trusted Outcomes",
      sub: "Reliable by Design",
      text: "Outputs are delivered with built-in accountability, ensuring that outcomes remain consistent, verifiable, and dependable across different scenarios.",
      icon: CheckCircle2,
      accent: "text-blue-500"
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24">
      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-10">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">PLATFORM SUBSTRATE</Badge>
            <SectionLabel>THE OPERATIONAL INTELLIGENCE</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Governance. <br />
            <span className="text-indigo-600 italic font-light">Built In.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[800px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ATRIYA is not a tool that reacts — it is a system that understands, 
            evaluates, and delivers outcomes with built-in intelligence and 
            accountability. Every interaction is handled through a unified 
            substrate designed for clarity and safety.
          </motion.p>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((cap, i) => (
          <div key={i} className="p-12 bg-white border border-slate-200 rounded-[3rem] space-y-10 hover:border-indigo-300 transition-all shadow-sm hover:shadow-indigo-500/5 group">
             <div className={`h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors ${cap.accent}`}>
                <cap.icon size={32} strokeWidth={1.5} />
             </div>
             <div className="space-y-6">
                <div className="space-y-2">
                   <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">{cap.sub}</p>
                   <h3 className="text-4xl font-display text-slate-900 group-hover:text-indigo-600 transition-colors">{cap.title}</h3>
                </div>
                <p className="text-lg text-slate-500 leading-relaxed font-sans">{cap.text}</p>
             </div>
          </div>
        ))}
      </section>

      {/* THE INTELLIGENCE FOUNDATION */}
      <section className="relative z-10 p-6 lg:p-12">
        <div className="bg-slate-950 rounded-[4.5rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-3xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
            <div className="space-y-12">
               <SectionLabel className="border-indigo-500/30 text-indigo-400 font-bold uppercase tracking-widest">The Intelligence Foundation</SectionLabel>
               <h2 className="text-4xl md:text-7xl font-display leading-[1.1]">Designed for Scale. <br /><span className="text-indigo-400 italic">Built for Trust.</span></h2>
               <p className="text-xl text-indigo-100/70 font-sans leading-relaxed">
                  ATRIYA is powered by a unified intelligence foundation that 
                  enables reasoning and decision-making across diverse 
                  environments. Instead of building isolated solutions, ATRIYA 
                  provides a core system that adapts seamlessly — delivering 
                  consistent performance regardless of the application.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  {[
                    "Intent Verification", "Environmental Awareness", "Integrated Safety", 
                    "Continuous Evaluation", "Accountability Records", "Policy Alignment",
                    "Domain Adaptability"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400/80 font-bold">
                       <CheckCircle2 className="text-indigo-500" size={14} /> {item}
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-8">
               <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 space-y-8 backdrop-blur-xl group">
                  <div className="h-14 w-14 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-all">
                    <Fingerprint className="text-indigo-400 group-hover:text-white" size={28} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">CORE_SUBSTRATE</p>
                    <h3 className="text-3xl font-display">Safety in Every Decision.</h3>
                    <p className="text-lg text-white/50 leading-relaxed font-sans italic">
                       &quot;We don&apos;t add safety after decisions are made. We build 
                       systems where safety is part of the decision itself.&quot;
                    </p>
                  </div>
               </div>
               <Button size="lg" className="h-16 px-12 group font-display bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full shadow-2xl shadow-indigo-950">
                  <Link href="/contact" className="flex items-center gap-4">
                     Schedule a Solution Audit <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-DOMAIN ADAPTABILITY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24 text-center">
         <div className="max-w-3xl mx-auto space-y-10">
            <SectionLabel>CROSS-DOMAIN ADAPTABILITY</SectionLabel>
            <h2 className="text-4xl md:text-8xl font-display leading-[0.9] text-slate-950 italic">One System. <br /><span className="text-indigo-600">Many Applications.</span></h2>
            <p className="text-xl text-slate-500 font-sans leading-relaxed">
              ATRIYA is designed to move across boundaries. The same foundational 
              intelligence that secures financial interactions provides the logic 
              for healthcare and public sector governance — ensuring that every 
              outcome remains consistent, safe, and verifiable.
            </p>
         </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-24 pb-48 text-center space-y-12">
         <h2 className="text-4xl md:text-7xl font-display leading-tight text-slate-950">Trusted by <br /><span className="text-indigo-600 italic underline decoration-indigo-200 underline-offset-8">Design.</span> Not by Claim.</h2>
         <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button size="lg" className="h-20 px-16 text-xl font-display bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl">
               <Link href="/contact">Request Exploration</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-20 px-16 text-xl font-display border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full">
               <Link href="/pricing">View Service Tiers</Link>
            </Button>
         </div>
         <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest pt-12 font-bold font-sans">
            DEPLOYMENT: ATRIYA PLATFORM SUBSTRATE v1.0
         </p>
      </section>
    </main>
  );
}
