"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, CheckCircle2, TrendingUp, BarChart3, 
  ShieldCheck, Globe, Zap, Users, BookOpen,
  LineChart, Activity, Fingerprint, Lock
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
  const studies = [
    {
      id: "CS-001",
      title: "Sovereign Education Substrate",
      subject: "National Exam Board Pilot",
      desc: "Implementing the AcademicOS kernel for high-stakes grading and outcome prediction for 2M+ students.",
      impact: "98.4% Grading Accuracy",
      metric: "-45% Operational Latency",
      tags: ["EDUCATION", "NATION-STATE"]
    },
    {
      id: "CS-002",
      title: "Governed Financial Transactions",
      subject: "Institutional Risk Reduction",
      desc: "Using the FinanceOS substrate to enforce non-bypassable compliance on algorithmic trading flows.",
      impact: "0.0% Compliance Violation",
      metric: "$200M Risk-Lock Mitigation",
      tags: ["FINANCE", "RISK"]
    },
    {
      id: "CS-003",
      title: "Clinical Certainty in Healthcare",
      subject: "Cognitive Diagnosis Support",
      desc: "Deploying HealthOS engines to verify clinical reasoning chains against medical-standard axioms.",
      impact: "89 Specialized Engines",
      metric: "99.9% Provable Audit-Lock",
      tags: ["HEALTHCARE", "DIAGNOSTICS"]
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-5xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black italic">CASE STUDIES v3.0</Badge>
            <SectionLabel>THE EVIDENCE HUB</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sovereign <br />
            <span className="text-indigo-600 font-medium">Outcomes.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-3xl text-slate-500 font-sans leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Technical evidence of the ATRIYA substrate in multi-institutional high-stakes environments. 
            Moving from pilot benchmarks to sovereign production.
          </motion.p>
        </div>
      </section>

      {/* STUDIES GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {studies.map((study, i) => (
              <div key={i} className="group p-12 bg-slate-50 border border-slate-100 rounded-[5rem] hover:border-indigo-300 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-3xl flex flex-col justify-between min-h-[550px]">
                 <div className="space-y-12">
                    <div className="flex justify-between items-start italic">
                       <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-100 text-indigo-400 font-black">{study.id}</Badge>
                       <div className="flex gap-2">
                          {study.tags.map((tag, j) => (
                            <Badge key={j} className="bg-white text-slate-400 border border-slate-100 font-mono text-[9px] uppercase tracking-widest font-black leading-none py-1.5">{tag}</Badge>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-3xl font-display text-slate-950 font-medium group-hover:text-indigo-600 transition-colors uppercase leading-[0.9]">{study.title}</h3>
                       <p className="text-xl text-slate-500 font-sans font-light leading-relaxed italic">{study.desc}</p>
                    </div>
                 </div>
                 <div className="pt-12 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                       <div className="flex gap-4 items-center">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <p className="text-[10px] font-mono text-slate-950 uppercase tracking-widest font-black">{study.impact}</p>
                       </div>
                       <div className="flex gap-4 items-center">
                          <TrendingUp size={16} className="text-indigo-600" />
                          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black italic">{study.metric}</p>
                       </div>
                    </div>
                    <Button variant="ghost" className="text-indigo-600 font-display text-lg flex items-center gap-4 transition-all group-hover:gap-6 active:scale-95">
                       <BookOpen size={20} className="group-hover:translate-x-1 transition-transform" /> Full Technical Case
                    </Button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* FINAL ACTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16 mb-48">
         <h2 className="text-6xl md:text-[10rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center italic">Scale <br /><span className="text-indigo-600 font-medium not-italic">Integrity.</span></h2>
         <div className="flex justify-center pt-12">
            <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-3xl transition-all hover:bg-indigo-600 group">
               <Link href="/contact" className="flex items-center gap-6 italic">Initialize Solution Briefing <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" /></Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
