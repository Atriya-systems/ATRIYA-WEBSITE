"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { 
  ShieldCheck, FileCheck, Scale, 
  Lock, ArrowRight, CheckCircle2,
  AlertCircle, Download, ExternalLink,
  Search, Cpu, GraduationCap, Building2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CompliancePage() {
  const frameworks = [
    {
      name: "DPDP Act 2023",
      jurisdiction: "India",
      status: "Ready",
      detail: "Full automation of Data Fiduciary obligations, consent chain tracking, and right-to-erasure workflows.",
      features: ["Consent Chain Provenance", "Grievance Redressal APIs", "Jurisdiction Routing", "Erasure Propagation Proof"]
    },
    {
      name: "EU AI Act",
      jurisdiction: "European Union",
      status: "Ready",
      detail: "Automated high-risk classification, conformity assessment evidence, and mandatory transparency logging.",
      features: ["Risk Classification Gates", "Conformity Evidence Bundles", "Incident Monitoring", "Post-Market Surveillance"]
    },
    {
      name: "RBI AI Guidelines",
      jurisdiction: "Indian BFSI",
      status: "Ready",
      detail: "Specific governance for credit decisions, algorithmic audits, and financial model risk management.",
      features: ["Credit Provenance Logs", "Model Risk Invariants", "SEBI Algorithmic Audit", "Bias Detection Proof"]
    }
  ];

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32 min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="max-w-4xl pt-12 space-y-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <SectionLabel>COMPLIANCE & RISK</SectionLabel>
        </motion.div>
        <motion.h1 className="text-6xl md:text-8xl font-display leading-[1.1] tracking-tight">
          Regulator-Ready <br />
          <span className="text-gold italic font-light">By Design.</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl font-sans mt-8">
           ATRIYA automates the evidence collection process for the world&apos;s 
           most stringent AI regulations. Turn compliance from a bottleneck 
           into an architectural property.
        </p>
      </section>

      {/* FRAMEWORKS GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {frameworks.map((fw, i) => (
          <div key={i} className="p-10 bg-white border border-border rounded-[3.5rem] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-700">
             <div className="space-y-8">
                <div className="flex justify-between items-start">
                   <div className="h-14 w-14 bg-bg-secondary rounded-2xl flex items-center justify-center text-gold">
                      <Scale size={28} />
                   </div>
                   <div className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                      {fw.status}
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest leading-none">{fw.jurisdiction}</p>
                   <h3 className="text-3xl font-display">{fw.name}</h3>
                </div>
                <p className="text-sm text-text-secondary font-sans leading-relaxed">
                   {fw.detail}
                </p>
                <div className="space-y-4 pt-4 border-t border-border">
                   {fw.features.map((f, j) => (
                      <div key={j} className="flex gap-3 items-center">
                         <CheckCircle2 className="text-gold" size={14} />
                         <span className="text-xs text-text-secondary font-sans uppercase tracking-widest">{f}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="pt-12">
                <Button variant="outline" className="w-full h-14 rounded-full font-display border-border hover:border-gold group">
                   Read Implementation Guide <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
             </div>
          </div>
        ))}
      </section>

      {/* COMPLIANCE AS EVIDENCE */}
      <section className="bg-[#0A0E1A] p-12 lg:p-24 rounded-[5rem] overflow-hidden relative shadow-2xl">
         <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <FileCheck size={200} className="text-gold" />
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-12 text-white">
               <SectionLabel className="border-white/20 text-white/50">EVIDENCE QUALITY</SectionLabel>
               <h2 className="text-4xl md:text-[5.5rem] font-display leading-[1.1]">Evidence, <br />Not Reports.</h2>
               <p className="text-lg text-white/50 font-sans leading-relaxed">
                  Calculated compliance is fragile. ATRIYA provides **Industrial Evidence**. 
                  Every decision is backed by a provenance chain that regulators can audit 
                  down to the execution node.
               </p>
               <div className="space-y-6">
                  {[
                    "Provable Decision Lineage",
                    "ZK-Attested Compliance Certificates",
                    "Tamper-Evident Audit Trails",
                    "Deterministic Safety Proofs"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center text-xs font-mono uppercase tracking-[0.3em] text-gold">
                       <CheckCircle2 size={16} /> {item}
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex flex-col justify-center">
               <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 space-y-10">
                  <div className="flex gap-6 items-start">
                     <AlertCircle size={32} className="text-gold shrink-0" />
                     <div className="space-y-2">
                        <p className="text-lg font-display text-white italic">"How can you prove this decision was safe?"</p>
                        <p className="text-xs text-white/40 font-mono uppercase tracking-widest">— Regulator Discovery Query</p>
                     </div>
                  </div>
                  <div className="p-8 bg-gold text-bg-primary rounded-3xl space-y-4">
                     <p className="text-sm font-sans font-bold leading-relaxed">
                        ATRIYA answers this query in &lt;4 hours using the Evidence Bundle 
                        Aggregation engine. Compare this to the industry standard of 2-4 weeks 
                        of manual forensics.
                     </p>
                     <Button className="w-full h-14 rounded-full bg-bg-primary text-white border-none hover:bg-black transition-all font-display mt-4">
                        Download Evidence Whitepaper
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-24 space-y-10">
         <h2 className="text-3xl md:text-5xl font-display text-balance">Ready to automate your regulatory standing?</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="h-16 px-12 bg-black text-white hover:bg-gold transition-all rounded-full font-display">
               Request Compliance Audit
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 rounded-full font-display border-border hover:border-gold">
               Speak with a DPO Specialist
            </Button>
         </div>
      </section>
    </main>
  );
}
