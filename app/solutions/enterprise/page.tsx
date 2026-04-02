"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Building2, Users, FileCheck2, 
  ArrowRight, CheckCircle2,
  Globe2, Lightbulb, Clock, Info, UserCheck, Orbit,
  Activity, Zap, Shield, Laptop, BarChart3, Database
} from "lucide-react";
import Link from "next/link";

export default function EnterpriseSolutionPage() {
  const stats = [
    { label: "Efficiency Gain", value: "32% p/a" },
    { label: "SLA Tier", value: "T2" },
    { label: "Operational p95", value: "≤500ms" },
    { label: "Compliance Layer", value: "SOX / GDPR" }
  ];

  const features = [
    {
      title: "Operational Integrity",
      tagline: "SM-01 ADAPTATION",
      desc: "Our Multi-Step Evaluator evaluates project success and operational logic — ensuring that every workflow is structurally sound and logically consistent.",
      icon: FileCheck2
    },
    {
      title: "Employee Digital Twin",
      tagline: "L-03 ADAPTATION",
      desc: "A 7-dimensional workforce profile mapping capability, project history, behavioral trends, and satisfaction. Total human capital awareness.",
      icon: UserCheck
    },
    {
      title: "Outcome Prediction",
      tagline: "P-04 ADAPTATION",
      desc: "Predicting revenue, project success probabilities, and workflow efficiency using high-dimensional historical markers and interventional simulation.",
      icon: Activity
    },
    {
      title: "Performance Monitor",
      tagline: "M-01 ADAPTATION",
      desc: "Detecting employee burnout, operational stress indicators, and decision fatigue within high-velocity corporate cycles.",
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
                 <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 italic font-black">ENTERPRISEOS — OPERATIONAL SUBSTRATE</Badge>
                 <SectionLabel>THE 150-ENGINE SYSTEM</SectionLabel>
              </div>
              
              <motion.h1 
                className="text-7xl md:text-[11rem] font-display leading-[0.85] text-slate-950 italic tracking-tighter uppercase font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Inherent <br />
                <span className="text-indigo-600 font-bold not-italic lowercase tracking-tight">Performance.</span>
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <p className="text-2xl md:text-5xl text-slate-500 font-sans leading-tight font-light tracking-tight">
                   EnterpriseOS translates universal cognitive primitives into organizational certainty. Evaluating logic, predicting efficiency, and modeling success.
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
                <Button size="lg" className="h-24 px-16 bg-slate-950 hover:bg-indigo-600 text-white rounded-full shadow-2xl font-display text-2xl transition-all group shrink-0">
                  <Link href="/contact" className="flex items-center gap-6">Initialize Deployment <ArrowRight /></Link>
                </Button>
                <div className="flex items-center gap-4 px-8 border border-slate-100 rounded-full bg-slate-50/50 backdrop-blur-sm">
                   <Laptop size={20} className="text-slate-400" />
                   <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold font-sans">CRM / ERP / SAP INTEGRATION</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24 text-center">
         <h2 className="text-6xl md:text-[11rem] font-display italic leading-[0.8] tracking-tighter uppercase text-slate-950 font-light text-center">Efficiency as <br /><span className="text-indigo-600 font-bold not-italic">Infrastructure.</span></h2>
         <Button size="lg" className="h-24 px-20 bg-slate-950 text-white rounded-full shadow-2xl font-display text-2xl">
            <Link href="/contact">Acquire EnterpriseOS</Link>
         </Button>
      </section>
    </main>
  );
}
