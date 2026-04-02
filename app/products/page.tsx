"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import {
   ShieldCheck, ArrowRight, CheckCircle2,
   Globe, Lock, Layout, Zap, Cpu, Code2, Globe2,
   Database, Activity, Scale, Fingerprint, FileCheck,
   History as HistoryIcon, Network, HardDrive, 
   Settings2, Layers3, Orbit, Workflow, DatabaseZap,
   Shield, Terminal, Gavel, BarChart3, Users, Box, Layers,
   Microscope, ScanEye, Zap as Flash, BoxSelect, Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsPage() {
   const bundles = [
      { id: "BS-01", name: "Decision Intelligence", products: ["P-10 Entity Intelligence", "P-11 Prediction & Risk", "P-12 Causal Intelligence"], icon: BarChart3, buyer: "I need to make smarter decisions and understand why." },
      { id: "BS-02", name: "AI Evaluation & Content", products: ["P-14 Evaluation & Scoring", "P-15 Adaptive Assessment", "P-17 Content Generation"], icon: FileCheck, buyer: "I need AI that creates and evaluates content reliably." },
      { id: "BS-03", name: "Knowledge & Personalisation", products: ["P-16 Knowledge Intelligence", "P-10 Entity Intelligence", "P-13 Personalisation"], icon: Users, buyer: "I need AI that knows my proprietary data and adapts to each person." },
      { id: "BS-04", name: "AI Automation", products: ["P-18 Planning & Optimisation", "P-19 AI Orchestration", "P-20 Multi-Modal Processing"], icon: Workflow, buyer: "I need to automate multi-step AI workflows across systems." },
      { id: "BS-05", name: "Governed AI", products: ["P-01 AI Governance Platform", "P-04 Provenance & Audit", "P-03 AI Safety & Refusal"], icon: ShieldCheck, buyer: "I need to prove AI is operating correctly to regulators." },
      { id: "BS-06", name: "AI Agent Operations", products: ["P-05 Agent & Artifact Gov", "P-01 AI Governance Platform", "P-07 Multi-Track Planning"], icon: Orbit, buyer: "I need to run multiple AI agents safely with authority boundaries." },
      { id: "BS-07", name: "AI Economic", products: ["P-21 AI Capability Marketplace", "P-22 Royalty & Revenue", "P-23 Constitutional Smart Contracts"], icon: Zap, buyer: "I need to monetise AI capabilities and distribute revenue fairly." }
   ];

   const layerA = [
      { id: "P-01", name: "AI Governance Platform", desc: "The core constitutional substrate. Every task passes through the N1→N11 pipeline: intent → admissibility → arbitration → audit. Fail-closed by default." },
      { id: "P-02", name: "Sovereignty & Compliance", desc: "Protocol-level enforcement of jurisdictional and data residency rules. Sovereignty is structural; data cannot cross declared boundaries." },
      { id: "P-03", name: "AI Safety & Refusal", desc: "Fail-closed safety gate. Three-state gate: Accept / Repair / Abstain. No probabilistic pass-through or bypass possible." },
      { id: "P-04", name: "Provenance & Audit", desc: "Immutable decision lineage with deterministic replay. Compliance exports for GDPR, DPDP, HIPAA, and EU AI Act." },
      { id: "P-05", name: "Agent & Artifact Gov", desc: "Authority boundaries for autonomous agents. Agents registered with sealed authority classes; prompts and models are governed artifacts." },
      { id: "P-08", name: "Public Trust Attestation", desc: "ZK attestation of compliance without raw data exposure. Enables third-party regulators to verify independently." },
      { id: "P-09", name: "ATRIYA SDK", desc: "Developer harness with local simulation and constitutional lints. Mirrors production constitutional behaviour exactly." }
   ];

   const layerB = [
      { id: "P-10", name: "Entity Intelligence", desc: "Persistent 7-dimension models of any person, organisation, or system. Captures behavior, knowledge state, and cognitive style across interaction history." },
      { id: "P-11", name: "Prediction & Risk", desc: "Outcome forecasting with confidence intervals and feature importance. Risk scoring, anomaly detection, and intervention impact estimation." },
      { id: "P-12", name: "Causal Intelligence", desc: "Identify what actually caused an outcome — not correlation. Run intervention simulations and counterfactual scenarios on any dataset." },
      { id: "P-13", name: "Personalisation Engine", desc: "Learn preferences, detect communication style, and adapt every response automatically. Built on the Entity Intelligence layer." },
      { id: "P-14", name: "Evaluation & Scoring", desc: "Evaluate any multi-step process with partial credit at every step. Recognises alternative valid methods; provides actionable feedback." },
      { id: "P-15", name: "Adaptive Assessment", desc: "Tests that adjust in real time using Item Response Theory. Convergence to ability estimates after every interaction." },
      { id: "P-16", name: "Knowledge Intelligence", desc: "Retrieve, validate, and synthesise from any sources via knowledge graphs. Surfaces gaps explicitly; zero-hallucination architecture." },
      { id: "P-17", name: "Content Generation", desc: "Original content across any format quality-scored with difficulty calibration. Questions, summaries, and analogies on any topic." },
      { id: "P-18", name: "Planning & Optimisation", desc: "Generate action plans satisfying multiple hard constraints. Optimise for time, cost, or risk across multi-dependency problems." },
      { id: "P-19", name: "AI Orchestration", desc: "Coordinate multi-model execution and unified engine routing. arbitrate between sequential pipelines or parallel multi-model runs." },
      { id: "P-20", name: "Multi-Modal Processing", desc: "Unified parsing of text, images, and data. Cross-modal fusion into structural representations for governed execution." }
   ];

   const layerD = [
      { id: "P-21", name: "Capability Marketplace", desc: "Discover, list, and exchange AI capabilities constitutionally. Credits are the atomic unit; reputations and fair listing built-in." },
      { id: "P-22", name: "Royalty & Revenue", desc: "Automatic royalty distribution to creators on every use. Atomic settlement — credit deduction and royalty distribution complete together." },
      { id: "P-23", name: "Constitutional Smart Contracts", desc: "Irreversible contracts between AI participants. Non-retroactive: no rule change affects completed transactions. Binding dispute resolution." }
   ];

   return (
      <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         {/* HERO */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="max-w-5xl space-y-12">
               <div className="flex gap-4 items-center">
                  <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 italic font-black">CATALOGUE v3.0</Badge>
                  <SectionLabel>THE FULL PRODUCT STACK</SectionLabel>
               </div>
               
               <motion.h1 
                  className="text-7xl md:text-[11rem] font-display leading-[0.85] text-slate-950 italic tracking-tighter uppercase font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  The Product <br />
                  <span className="text-indigo-600 font-bold not-italic lowercase tracking-tight">Lattice.</span>
               </motion.h1>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <p className="text-2xl md:text-5xl text-slate-500 font-sans leading-tight font-light tracking-tight italic">
                    21 Core Products organized into 3 layers and 7 market bundles. A complete universe of governed intelligence.
                 </p>
                 <Button size="lg" className="h-20 px-12 bg-indigo-600 text-white rounded-full font-display text-xl transition-all shadow-3xl">
                    <Link href="/contact" className="italic font-light">Initialize Substrate Access</Link>
                 </Button>
               </div>
            </div>
         </section>

         {/* LAYER 2 — MARKET BUNDLES */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="space-y-8">
               <SectionLabel className="border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black italic">LAYER 2 — MARKET SUITES</SectionLabel>
               <h2 className="text-5xl md:text-[8rem] font-display text-slate-950 italic tracking-tighter uppercase leading-none italic font-light">The Solution <br /><span className="text-slate-400 font-bold not-italic lowercase tracking-tight italic">Matrix.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {bundles.map((bundle, i) => (
                 <div key={i} className="p-12 bg-slate-50 border border-slate-100 rounded-[4rem] hover:border-indigo-200 transition-all duration-700 shadow-sm hover:shadow-3xl group min-h-[500px] flex flex-col justify-between">
                    <div className="space-y-12">
                       <div className="flex justify-between items-start">
                          <div className="h-20 w-20 bg-white rounded-3xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                             <bundle.icon size={36} strokeWidth={1} />
                          </div>
                          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-100 text-indigo-400 italic font-black">{bundle.id}</Badge>
                       </div>
                       <div className="space-y-6">
                          <h3 className="text-4xl font-display italic text-slate-950 uppercase tracking-tight leading-none italic">{bundle.name}</h3>
                          <p className="text-sm font-mono text-slate-400 uppercase tracking-[0.15em] font-black italic">{bundle.buyer}</p>
                          <div className="flex flex-wrap gap-2 pt-4">
                             {bundle.products.map((p, j) => (
                                <Badge key={j} className="h-8 px-4 bg-white border-slate-100 text-slate-400 font-mono text-[9px] uppercase tracking-widest font-black italic">{p}</Badge>
                             ))}
                          </div>
                       </div>
                    </div>
                    <Link href={`/platform/architecture`} className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-black italic">View Bundle Narrative →</Link>
                 </div>
               ))}
            </div>
         </section>

         {/* LAYER A — CONSTITUTIONAL SUBSTRATE */}
         <section id="LayerA" className="relative z-10 px-6 lg:px-12 py-32 bg-slate-950 rounded-[6rem] mx-6 lg:mx-12 overflow-hidden shadow-4xl mb-48">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_60%)]"></div>
            <div className="max-w-7xl mx-auto relative z-10 space-y-24 px-12">
               <div className="space-y-8">
                  <SectionLabel className="border-indigo-500 text-indigo-400 font-black tracking-widest uppercase italic">LAYER A — CONSTITUTIONAL SUBSTRATE</SectionLabel>
                  <h2 className="text-7xl md:text-[8rem] font-display text-white italic leading-none tracking-tighter uppercase no-italic italic font-light">The Control <br /><span className="text-indigo-400 font-bold not-italic lowercase tracking-tight italic">Substrate.</span></h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {layerA.map((p, i) => (
                    <div key={i} className="p-12 bg-white/5 rounded-[4rem] border border-white/10 hover:border-indigo-500/30 transition-all group min-h-[350px] flex flex-col justify-between">
                       <div className="space-y-8">
                          <div className="flex justify-between items-start">
                             <p className="text-[10px] font-mono text-indigo-500 font-black italic">{p.id}</p>
                             <Shield size={20} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
                          </div>
                          <div className="space-y-4">
                             <h4 className="text-3xl font-display italic text-white uppercase tracking-tighter leading-none italic">{p.name}</h4>
                             <p className="text-lg text-white/40 font-sans leading-relaxed font-light italic">{p.desc}</p>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </section>

         {/* LAYER B — COGNITIVE PRIMITIVES */}
         <section id="LayerB" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="space-y-8">
               <SectionLabel className="border-slate-200 text-slate-500 bg-slate-50 font-black italic">LAYER B — COGNITIVE PRIMITIVES</SectionLabel>
               <h2 className="text-5xl md:text-[8rem] font-display text-slate-950 italic tracking-tighter uppercase leading-none no-italic italic font-light">Intelligence <br /><span className="text-indigo-600 font-bold not-italic tracking-tight lowercase">Primes.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {layerB.map((p, i) => (
                  <div key={i} className="p-12 bg-white border border-slate-100 rounded-[4rem] hover:border-indigo-300 transition-all group min-h-[400px] flex flex-col justify-between shadow-sm hover:shadow-4xl">
                     <div className="space-y-8">
                        <div className="flex justify-between items-start">
                           <p className="text-[10px] font-mono text-slate-400 italic">{p.id}</p>
                           <Cpu size={24} className="text-slate-200 group-hover:text-indigo-600 transition-colors" />
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-3xl font-display italic text-slate-950 uppercase tracking-tighter leading-none italic">{p.name}</h4>
                           <p className="text-lg text-slate-500 font-sans leading-relaxed font-light italic">{p.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* LAYER D — ECONOMIC ENGINES */}
         <section id="LayerD" className="relative z-10 px-6 lg:px-12 py-32 bg-slate-100 rounded-[6rem] mx-6 lg:mx-12 overflow-hidden shadow-xl mb-48">
            <div className="max-w-7xl mx-auto relative z-10 space-y-24 px-12">
               <div className="space-y-8 text-center">
                  <SectionLabel className="mx-auto border-indigo-300 text-indigo-600 font-black italic">LAYER D — ECONOMIC ENGINES</SectionLabel>
                  <h2 className="text-7xl md:text-[8rem] font-display text-slate-950 italic leading-none tracking-tighter uppercase no-italic italic font-light">Economic <br /><span className="text-indigo-600 font-bold not-italic lowercase tracking-tight italic">Substrate.</span></h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {layerD.map((p, i) => (
                     <div key={i} className="p-12 bg-white rounded-[4rem] border border-slate-100 hover:border-indigo-500 transition-all group min-h-[350px] flex flex-col justify-between shadow-sm">
                        <div className="space-y-8">
                           <div className="flex justify-between items-start">
                              <p className="text-[10px] font-mono text-indigo-600 font-black italic">{p.id}</p>
                              <Flash size={24} className="text-slate-200 group-hover:text-indigo-600 transition-colors" />
                           </div>
                           <div className="space-y-4">
                              <h4 className="text-3xl font-display italic text-slate-950 uppercase tracking-tighter leading-none italic">{p.name}</h4>
                              <p className="text-lg text-slate-500 font-sans leading-relaxed font-light italic">{p.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* FINAL ACTION */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16">
            <h2 className="text-7xl md:text-[14rem] font-display leading-[0.8] text-slate-950 italic tracking-tighter uppercase font-light text-center italic">Initialize <br /><span className="text-indigo-600 font-bold not-italic">Integrity.</span></h2>
            <div className="flex justify-center gap-6 pt-12">
               <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-2xl font-display text-3xl transition-all hover:scale-105 active:scale-95 group">
                  <Link href="/contact" className="italic font-light flex items-center gap-6">Download Full v3.0 Specs <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" /></Link>
               </Button>
            </div>
         </section>
      </main>
   );
}
