"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Building2, ShieldCheck, GitBranch, FileCheck, 
  ArrowRight, CheckCircle2, Trash2, 
  UserCheck, XCircle, Info, Code2, 
  Terminal, Cpu, Box, History as HistoryIcon,
  Globe, Zap, Lock, Layers
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DevelopersSolution() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24">
      {/* Background Subtle elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-10">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-emerald-200 text-emerald-600 bg-emerald-50/50">ARCHITECT LAYER</Badge>
            <SectionLabel>GOVERNANCE AS INFRASTRUCTURE</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Protocol-Level <br />
            <span className="text-emerald-600 italic font-light">Integrity.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[800px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ATRIYA establishes a unified substrate for governed intelligence — 
            delivering a foundation where interaction logic and accountability 
            are built directly into the infrastructure.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl shadow-emerald-100 font-display">
               Request API Access
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               Explore SDK Protocols
            </Button>
          </motion.div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-10">
            <SectionLabel>THE ARCHITECTURAL RATIO</SectionLabel>
            <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">Focus on <br />Value.</h2>
            <p className="text-xl text-slate-600 font-sans leading-relaxed">
              Every high-stakes intelligence project requires the same foundational 
              governance — audit trails, interaction policies, and authority models. 
              Engineering these from scratch creates systemic friction and 
              inconsistency.
            </p>
          </div>
          
          <div className="space-y-8 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-sm mt-12 lg:mt-0">
            <h3 className="text-2xl font-display text-slate-900 italic">Engineering Debt:</h3>
            <ul className="space-y-8">
               {[
                 { title: "Manual Awareness", desc: "Building separate audit logs for every system interaction.", icon: HistoryIcon },
                 { title: "Fragmented Authority", desc: "Implementing multi-component coordination without centered policy enforcement.", icon: GitBranch },
                 { title: "Logic Opacity", desc: "Difficulty in verifying system decision trajectories for enterprise compliance.", icon: Info },
                 { title: "Integration Friction", desc: "Mapping disparate AI components to a unified security and privacy standard.", icon: Layers }
               ].map((item, i) => (
                 <li key={i} className="flex gap-6 group">
                   <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-emerald-600 transition-colors">
                     <item.icon className="text-emerald-600 group-hover:text-white transition-colors" size={24} />
                   </div>
                   <div className="space-y-1">
                     <p className="font-bold text-slate-900">{item.title}</p>
                     <p className="text-sm text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                   </div>
                 </li>
               ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE SUBSTRATE SOLUTION */}
      <section className="relative z-10 p-6 lg:p-12">
        <div className="bg-slate-950 rounded-[4.5rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-3xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#10b981_0%,transparent_70%)]"></div>
          <div className="max-w-5xl relative z-10 space-y-12">
            <SectionLabel className="border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase">The Protocol Substrate</SectionLabel>
            <h2 className="text-4xl md:text-[6.5rem] font-display leading-[1] text-white">Trust as Infrastructure.</h2>
            <div className="space-y-10 text-xl font-sans text-emerald-100/70 leading-relaxed">
              <p>
                ATRIYA establishes systemic governance as an infrastructure layer. 
                Move beyond configuration and establish definitive protocol 
                alignment across your entire intelligence architecture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white pt-8">
                 {[
                   { title: "Systemic Interaction Auditing", desc: "Automatic, substrate-level visibility for every system interaction." },
                   { title: "Deterministic Logic Protocols", desc: "System execution grounded in verifiable, repeatable logic trajectories." },
                   { title: "Institutional Authority Models", desc: "Protocol-enforced interaction policies across all system components." },
                   { title: "Sovereign Evidence Trails", desc: "Immutable interaction history for jurisdiction-specific compliance." }
                 ].map((item, i) => (
                   <div key={i} className="space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
                     <CheckCircle2 className="text-emerald-400" size={20} />
                     <h3 className="text-2xl font-display">{item.title}</h3>
                     <p className="text-sm text-emerald-100/50">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT PROTOCOL */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
        <div className="text-center space-y-6">
          <SectionLabel>DEPLOYMENT PROTOCOL</SectionLabel>
          <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">Establishing <span className="text-emerald-600">Integrity.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
           {[ 
             { step: "01", title: "Protocol Integration", desc: "Align your architecture with the ATRIYA interaction substrate through unified SDKs." },
             { step: "02", title: "Policy Mapping", desc: "Establish institutional governance and interaction rules within the protocol layer." },
             { step: "03", title: "Substrate Enforcement", desc: "Every system interaction is now governed, audited, and verifiable by design." }
           ].map((item, idx) => (
              <div key={idx} className="relative p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
                 <div className="absolute top-0 right-0 p-8 text-6xl font-display text-slate-50 group-hover:text-emerald-50 transition-colors">{item.step}</div>
                 <div className="space-y-6 relative z-10">
                    <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      <Code2 className="text-emerald-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="text-3xl font-display text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center items-center flex flex-col space-y-16">
          <h2 className="text-4xl md:text-8xl font-display text-slate-950 leading-tight italic">Governance. Simplified.</h2>
          <div className="flex flex-wrap justify-center gap-6 pt-12">
             <Button size="lg" className="h-16 px-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl shadow-emerald-100 font-display">
               Request SDK Access
             </Button>
             <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               Read Deployment Brief
             </Button>
          </div>
          <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest pt-12 font-bold">
             SUBSTRATE_STATUS: PRODUCTION_READY
          </p>
      </section>
    </main>
  );
}
