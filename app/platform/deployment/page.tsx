"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Cloud, Building2, Globe, Code2, 
  ArrowRight, ShieldCheck, Activity, 
  Database, UserCheck, Scale, History,
  Lock, AlertTriangle, FileCheck, Layers,
  Cpu, BrainCircuit, Check, X, Fingerprint
} from "lucide-react";
import Link from "next/link";

export default function DeploymentPage() {
  const models = [
    {
      title: "Standard Deployment",
      badge: "ELASTIC",
      icon: Cloud,
      for: "Teams evaluating ATRIYA and high-growth initiatives",
      infra: "Fully managed, multi-tenant substrate. Logical structural isolation.",
      performance: "Elastic scale with consumption-based interaction logic.",
      residency: "Configurable by jurisdictional requirements.",
      onboarding: "Instant alignment via unified integration layer.",
      bestFor: "Teams that need to evaluate structural integrity without infrastructure friction.",
      accent: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Dedicated Deployment",
      badge: "ENTERPRISE",
      icon: Building2,
      for: "High-stakes enterprises with dedicated residency needs",
      infra: "Single-tenant, dedicated substrate infrastructure.",
      performance: "Guaranteed interaction throughput and priority execution.",
      residency: "Dedicated jurisdictional cluster; isolation by design.",
      onboarding: "Guided onboarding with solution integrity architects.",
      bestFor: "Enterprises requiring uncompromising data isolation and performance certainty.",
      accent: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Sovereign Deployment",
      badge: "REGULATED & GOVERNMENT",
      icon: Globe,
      for: "Defense, national security, and highly-regulated sectors",
      infra: "Customer-operated deployment. Complete structural sovereignty.",
      performance: "Total execution control within sovereign boundaries.",
      residency: "Absolute — interaction logic never leaves the perimeter.",
      onboarding: "Strategic deployment team with full architectural handover.",
      bestFor: "Organizations where operational sovereignty is a non-negotiable requirement.",
      accent: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Integration Layer",
      badge: "ARCHITECTS",
      icon: Code2,
      for: "System architects building on the ATRIYA substrate",
      infra: "Unified integration layer — established at the application layer.",
      performance: "Direct substrate access for governed interaction execution.",
      residency: "Inherited from the primary deployment model.",
      onboarding: "Direct alignment through the ATRIYA SDK protocols.",
      bestFor: "Engineers building system components requiring built-in accountability.",
      accent: "text-blue-500",
      bg: "bg-blue-50"
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-10">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">PLATFORM DEPLOYMENT</Badge>
            <SectionLabel>SYSTEMIC SOVEREIGNTY</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Deploy by <br />
            <span className="text-indigo-600 italic font-light font-display lowercase tracking-tighter">Requirement.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[800px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ATRIYA provides four clear deployment pathways. Each delivers the 
            same substrate for integrity — the model you choose determines 
            where governance executes, not how it functions.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
               Request Deployment Brief
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               Talk to Architects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* DEPLOYMENT MODELS GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {models.map((m, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-[3rem] p-12 lg:p-16 hover:border-indigo-300 transition-all shadow-sm hover:shadow-indigo-500/5 group flex flex-col justify-between space-y-12">
                 <div className="space-y-12">
                    <div className="flex justify-between items-start">
                       <div className={`h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors ${m.accent}`}>
                          <m.icon size={32} strokeWidth={1.5} />
                       </div>
                       <Badge variant="outline" className="font-mono text-[10px] tracking-widest text-slate-400 border-slate-200">{m.badge}</Badge>
                    </div>
                    
                    <div className="space-y-4">
                       <h3 className="text-4xl font-display text-slate-900 group-hover:text-indigo-600 transition-colors">{m.title}</h3>
                       <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{m.for}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-100 pt-10">
                       <div className="space-y-8">
                          <div className="space-y-2">
                             <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Substrate</p>
                             <p className="text-sm text-slate-600 font-sans leading-relaxed">{m.infra}</p>
                          </div>
                          <div className="space-y-2">
                             <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Jurisdiction</p>
                             <p className="text-sm text-slate-600 font-sans leading-relaxed">{m.residency}</p>
                          </div>
                       </div>
                       <div className="space-y-8">
                          <div className="space-y-2">
                             <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Performance</p>
                             <p className="text-sm text-slate-600 font-sans leading-relaxed">{m.performance}</p>
                          </div>
                          <div className="space-y-2">
                             <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Alignment</p>
                             <p className="text-sm text-slate-600 font-sans leading-relaxed">{m.onboarding}</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className={`p-8 ${m.bg} rounded-[2rem] border border-transparent group-hover:border-indigo-100 transition-all`}>
                    <p className="text-sm font-sans font-medium text-slate-700 italic flex items-start gap-4">
                       <Fingerprint className="text-slate-400 shrink-0" size={18} />
                       &quot;{m.bestFor}&quot;
                    </p>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
         <div className="text-center space-y-6">
            <SectionLabel>COMPARISON MATRIX</SectionLabel>
            <h2 className="text-4xl md:text-7xl font-display text-slate-950 italic">Deployment <span className="text-indigo-600">Integrity.</span></h2>
         </div>

         <div className="overflow-hidden border border-slate-200 rounded-[3.5rem] shadow-sm bg-white">
            <table className="w-full text-left border-collapse font-sans">
               <thead className="bg-slate-50 border-b border-slate-200">
                  <tr className="uppercase tracking-widest font-mono text-[10px] text-slate-400">
                     <th className="p-8 font-bold">Requirement</th>
                     <th className="p-8 font-bold">Standard</th>
                     <th className="p-8 font-bold">Dedicated</th>
                     <th className="p-8 font-bold text-indigo-600">Sovereign</th>
                     <th className="p-8 font-bold">Integration</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 font-sans text-sm">
                  {[ 
                    ["Substrate Isolation", "Logical", "Dedicated", "Absolute", "Unified"],
                    ["Execution Locality", "Managed Cloud", "Managed Cloud", "Customer-Operated", "Application-Layer"],
                    ["Air-Gapped Ready", "—", "—", "✓", "—"],
                    ["Integrity Verification", "✓", "✓", "✓", "✓"],
                    ["Sovereign Control", "—", "Partial", "Full", "—"],
                    ["Strategic Support", "Self-Serve", "High", "Critical", "Tech-Only"]
                  ].map((row, idx) => (
                     <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-8 font-bold text-slate-900 italic font-display text-lg">{row[0]}</td>
                        <td className="p-8 text-slate-500">{row[1]}</td>
                        <td className="p-8 text-slate-500">{row[2]}</td>
                        <td className="p-8 text-indigo-600 font-bold bg-indigo-50/30">{row[3]}</td>
                        <td className="p-8 text-slate-500">{row[4]}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* DEPLOYMENT PATHWAY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="bg-slate-950 rounded-[4.5rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-3xl text-center space-y-24">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_70%)]"></div>
           <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <SectionLabel className="border-indigo-500/30 text-indigo-400 font-bold uppercase tracking-widest">DEPLOYMENT PATHWAY</SectionLabel>
              <h2 className="text-4xl md:text-8xl font-display leading-[1.1]">Start Local. <br /><span className="text-indigo-400 italic">Scale Global.</span></h2>
              <p className="text-xl text-indigo-100/70 font-sans leading-relaxed">
                 Migration between models preserves your structural evidence. Your 
                 governed interaction history moves with you as your requirements 
                 evolve.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[ 
                { step: "01", title: "Proof of Concept", desc: "Evaluate the substrate. Run the POC. Establish the baseline integrity." },
                { step: "02", title: "High-Visibility Scale", desc: "Move to a dedicated substrate for performance and higher visibility." },
                { step: "03", title: "Structural Sovereignty", desc: "Deploy to customer-operated environments for absolute control." }
              ].map((s, idx) => (
                 <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-8 hover:border-indigo-500/30 transition-all text-left group">
                    <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-display font-bold group-hover:scale-110 transition-transform">{s.step}</div>
                    <div className="space-y-4">
                       <h4 className="text-2xl font-display italic tracking-tight">{s.title}</h4>
                       <p className="text-sm text-indigo-100/50 leading-relaxed font-sans">{s.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA STATEMENT */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 pb-48 text-center space-y-16">
          <SectionLabel>IDENTIFY THE RIGHT PATH</SectionLabel>
          <h2 className="text-4xl md:text-8xl font-display leading-tight text-slate-950 italic">Governance. <br /><span className="text-indigo-600 underline underline-offset-[20px] decoration-indigo-100">Simplified.</span></h2>
          <p className="text-xl text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
             Our team will help you identify the right deployment model for your 
             infrastructure, compliance requirements, and operational scale.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-12">
             <Button size="lg" className="h-20 px-16 text-xl font-display bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl">
                <Link href="/contact">Talk to Our Team</Link>
             </Button>
          </div>
      </section>
    </main>
  );
}
