"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  FileX, ShieldOff, GitBranch, ShieldCheck, 
  Layers, History, UserCheck, RefreshCw, 
  Eye, Activity, Database, Server, Info, ArrowRight,
  DatabaseIcon, ShieldAlert, Cpu, CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIArtifactStudio() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-48 min-h-screen">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section id="hero" className="max-w-4xl pt-12 relative z-10">
        <div className="flex gap-4 items-center mb-8">
          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">PLATFORM LAYER</Badge>
          <SectionLabel>ENTERPRISE GOVERNANCE</SectionLabel>
        </div>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Governed.<br />
          <span className="text-indigo-600">By Design.</span>
        </motion.h1>

        <motion.p 
          className="mt-12 text-xl md:text-2xl text-slate-600 font-sans max-w-[750px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AI Artifact Studio governs every system entity, model, and workflow 
          your organization deploys — from initial registration through 
          every decision it makes in production.
        </motion.p>
        
        <motion.div 
          className="mt-16 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100">
            <Link href="/contact" className="flex items-center">Request System Access <ArrowRight size={20} className="ml-4" /></Link>
          </Button>
          <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full">
             <Link href="/platform/architecture">System Architecture</Link>
          </Button>
        </motion.div>
      </section>

      {/* SECTION: PROBLEM - ENTITY CHAOS */}
      <section id="problem" className="relative z-10">
        <SectionLabel>THE REQUIREMENT</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display mt-6 max-w-3xl leading-tight text-slate-950">
          Intelligence requires accountability.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {[ 
            { icon: History, title: "Traceability Gaps", text: "Without centralized lineage, identifying which version of an intelligence entity influenced a specific outcome is impossible. We provide permanent, non-repudiable audit trails." },
            { icon: ShieldOff, title: "Decision Uncertainty", text: "Regulated environments require proof of decision methodology. Our system generates evidence as a structural output, not a secondary report." },
            { icon: GitBranch, title: "Authority Conflicts", text: "Independent systems often operate without a shared hierarchy. We enforce systemic authority classes to ensure every interaction is governed and authorized." },
            { icon: ShieldAlert, title: "Compliance Fragmentation", text: "Scaling AI without built-in compliance leads to operational risk. We integrate global regulatory alignment directly into the deployment pipeline." }
          ].map((card, idx) => (
            <div key={idx} className="p-12 bg-white rounded-[2.5rem] border border-slate-200 group hover:border-indigo-300 transition-all flex flex-col gap-6 shadow-sm hover:shadow-indigo-500/5">
               <div className="h-14 w-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                  <card.icon className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={28} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-sans text-slate-900">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-sans">{card.text}</p>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-slate-50 p-12 lg:p-20 rounded-[3rem] border border-slate-200">
           <blockquote className="text-3xl md:text-4xl font-display italic leading-tight text-indigo-950 text-center max-w-4xl mx-auto">
             &quot;Accountability is not an add-on. It is the foundation of enterprise-grade intelligence.&quot;
           </blockquote>
        </div>
      </section>

      {/* SECTION: WHAT IT GOVERNS */}
      <section id="governs" className="text-center space-y-16 relative z-10">
        <SectionLabel>GOVERNANCE SCOPE</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display text-slate-950">Unified Entity Architecture.</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
           {["Cognitive Primitives", "Intelligence Models", "Decision Entities", "Operational Workflows", "System Interfaces", "Verification Loops", "Calibrated Simulators"].map((cat, idx) => (
             <span key={idx} className="px-8 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-default shadow-sm">
               {cat}
             </span>
           ))}
        </div>
      </section>

      {/* SECTION: FIVE CORE CAPABILITIES */}
      <section id="capabilities" className="space-y-24 relative z-10">
         <SectionLabel>ACCOUNTABILITY LAYERS</SectionLabel>
         <h2 className="text-4xl md:text-6xl font-display max-w-4xl text-slate-950">Structural Governance.</h2>
         
          <div className="space-y-6">
            {[ 
              { id: "01", title: "Lifecycle Integrity", text: "From instantiation to retirement, every system entity is governed by a permanent, non-bypassable workflow that ensures structural integrity and authorized transitions." },
              { id: "02", title: "Immutable Audit Chains", text: "Every interaction is recorded prominently within a secured lineage, providing verifiable evidence for institutional oversight and regulatory transparency." },
              { id: "03", title: "Authority Class Enforcement", text: "Every decision entity operates within a defined authority tier. Interaction paths are structurally enforced, preventing unauthorized privilege escalation." },
              { id: "04", title: "Outcome Reconstruction", text: "Any decision made by a governed entity can be reconstructed with complete fidelity, ensuring transparency into the methodology and conditions of the action." },
              { id: "05", title: "Intervention Traceability", text: "Manual adjustments to system decisions are recorded as distinct governance events, maintaining a complete record of oversight and systemic accountability." }
            ].map((cap, idx) => (
              <div key={idx} className="group p-10 bg-white border border-slate-200 hover:border-indigo-200 hover:bg-slate-50/50 transition-all rounded-[2rem] shadow-sm flex flex-col md:flex-row gap-12 items-center">
                 <span className="text-4xl font-mono text-slate-200 group-hover:text-indigo-600/20 transition-colors pointer-events-none">{cap.id}</span>
                 <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold font-sans text-slate-900 group-hover:text-indigo-600 transition-colors">{cap.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed font-sans">{cap.text}</p>
                 </div>
              </div>
            ))}
          </div>
      </section>

      {/* SECTION: ENTITY HIERARCHY */}
      <section id="hierarchy" className="bg-slate-900 p-12 lg:p-24 rounded-[3.5rem] border border-slate-800 space-y-16 shadow-2xl relative overflow-hidden">
         {/* Subtle pattern */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_60%)]"></div>
         
         <div className="relative z-10">
           <SectionLabel className="text-indigo-400">AUTHORITY TIERS</SectionLabel>
           <h2 className="text-4xl md:text-6xl font-display max-w-4xl text-white mt-6 leading-tight">Systemic Authority Hierarchy.</h2>
           
           <div className="space-y-8 mt-12">
              <p className="text-xl text-indigo-100/70 leading-relaxed font-sans max-w-4xl">
                 Governing autonomous entities requires a shared understanding of 
                 capability and authority. We define strict authority tiers that 
                 govern how entities interact, share context, and execute actions 
                 across the enterprise.
              </p>
              
              <div className="mt-16 overflow-hidden border border-white/10 rounded-[2rem] bg-black/20 backdrop-blur-sm">
                 <table className="w-full text-left font-sans text-sm">
                    <thead className="bg-white/5 text-indigo-300 font-mono uppercase tracking-widest text-[10px]">
                       <tr>
                          <th className="p-8">Tier</th>
                          <th className="p-8">Category</th>
                          <th className="p-8">Operational Bound</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {[ 
                         ["TIER 0", "Observational", "Contextual visibility only; restricted execution."],
                         ["TIER I", "Advisory", "Advisory synthesis; zero-action commitment."],
                         ["TIER II", "Assisted Action", "Bounded execution within pre-authorized constraints."],
                         ["TIER III", "Operational Control", "Governed execution of systemic workflows."],
                         ["TIER IV", "Systemic Oversight", "Authorization, auditing, and threshold management."]
                       ].map((row, idx) => (
                         <tr key={idx} className="group hover:bg-white/5 transition-colors">
                            <td className="p-8 font-mono text-indigo-400 font-bold">{row[0]}</td>
                            <td className="p-8 font-bold text-lg text-white">{row[1]}</td>
                            <td className="p-8 text-indigo-100/60 text-base">{row[2]}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
         </div>
      </section>

      {/* SECTION: ACCESS TIERS */}
      <section id="access" className="space-y-16 relative z-10">
         <SectionLabel>DEPLOYMENT MODELS</SectionLabel>
         <h2 className="text-4xl md:text-6xl font-display text-slate-950">Enterprise Access Tiers.</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
            {[ 
              { tier: "STARTER", desc: "For teams establishing foundational AI visibility and baseline accountability.", features: ["Traceability Visibility", "Essential Entity Registry", "Unified Interaction Log", "Governance Baseline"] },
              { tier: "PROFESSIONAL", desc: "Active governance enforcement with real-time systemic intervention capabilities.", features: ["Active Enforcement", "Universal Entity Catalog", "Lifecycle Management", "Real-time Auditing"], featured: true },
              { tier: "ENTERPRISE", desc: "Full-scale regulatory alignment and auditable proof cycles for institutional oversight.", features: ["Global Registry Alignment", "Automated Compliance Proofs", "Extended Lineage Retention", "Cross-Domain Governance"] },
              { tier: "SOVEREIGN", desc: "On-premises and air-gapped options for organizations requiring absolute jurisdictional control.", features: ["On-Premises Deployment", "Sovereign Boundaries", "Custom Accountability SLAs", "Priority Engineering Bridge"] }
            ].map((plan, idx) => (
              <div key={idx} className={`p-10 bg-white border rounded-[2.5rem] flex flex-col justify-between transition-all relative ${plan.featured ? "border-indigo-200 shadow-xl shadow-indigo-500/5 scale-[1.02] z-10 ring-1 ring-indigo-50" : "border-slate-200 hover:border-indigo-200 shadow-sm"}`}>
                 <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-indigo-600 font-bold tracking-[0.2em]">{plan.tier}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans min-h-[60px]">{plan.desc}</p>
                    <ul className="space-y-4 pt-8 border-t border-slate-100">
                       {plan.features.map((f, i) => (
                         <li key={i} className="flex gap-3 items-start group">
                            <CheckCircle2 className="text-indigo-500 grow-0 shrink-0 mt-0.5" size={14} />
                            <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors font-sans">{f}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="pt-12">
                    <Button variant={plan.featured ? "primary" : "outline"} className={`w-full h-14 rounded-full ${plan.featured ? "bg-indigo-600 hover:bg-indigo-700" : "border-slate-200 text-slate-600"}`}>Request Onboarding</Button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta" className="max-w-4xl mx-auto text-center space-y-12 pb-24 relative z-10">
         <SectionLabel>GET STARTED</SectionLabel>
         <h2 className="text-4xl md:text-7xl font-display text-slate-950">Scale with Certainty.</h2>
         <p className="text-slate-500 font-sans text-xl leading-relaxed">
            Join the cohort of enterprise partners defining the future of 
            governed intelligence. Begin your transition to built-in accountability.
         </p>
         <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100">
               <Link href="/contact" className="flex items-center">Request a Consultation <ArrowRight size={20} className="ml-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 rounded-full hover:bg-slate-50">
               System Documentation
            </Button>
         </div>
      </section>
    </main>
  );
}
