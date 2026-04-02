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
  Cpu, Code2, Globe, BrainCircuit, Landmark
} from "lucide-react";
import Link from "next/link";

export default function RBIGuidelinesPage() {
  const examinernotes = [
    {
      q: "Show me the decision audit trail for this customer.",
      ans: "ATRIYA&apos;s Decision Provenance Bundle contains the complete record of what data was used, what rules were applied, what the AI decided, and who approved it. Generated automatically."
    },
    {
      q: "Prove this model&apos;s decision was not influenced by excluded data.",
      ans: "Data scope attestation records exactly what data was accessed during every AI execution. Access to excluded data would be a governance violation, recorded in the constitutional pipeline."
    },
    {
      q: "Show me your human oversight mechanism.",
      ans: "Human Override Records — every instance of a human overriding an AI decision is permanently recorded. Authority hierarchy — humans hold higher authority classes than AI systems."
    }
  ];

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-48 min-h-screen">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] bg-[linear-gradient(to_right,#0A0E1A_1px,transparent_1px),linear-gradient(to_bottom,#0A0E1A_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="max-w-4xl pt-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Badge className="bg-amber-50 text-amber-900 border-amber-100 font-mono text-[10px] tracking-widest uppercase mb-4 py-1 px-4">RBI AI GUIDELINES · GOVERNANCE READY</Badge>
          <SectionLabel>RBI FINANCIAL REGULATORY COMPLIANCE</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          RBI AI examination.<br />
          <span className="text-gold italic">Ready. Not prepared.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATRIYA addresses RBI&apos;s requirements for AI in regulated 
          financial services — including decision auditability and model risk 
          management — with structural proofs, not examination documentation.
        </motion.p>
      </section>

      {/* RBI EXAMINER QUESTIONS */}
      <section className="space-y-16">
        <div className="max-w-3xl">
          <SectionLabel>EXAMINATION READINESS</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">What RBI examiners <br /> actually ask.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-border">
           {examinernotes.map((item, idx) => (
             <div key={idx} className="space-y-8">
                <div className="p-8 bg-bg-secondary italic text-lg text-text-primary rounded-xl border border-border">
                  &quot;{item.q}&quot;
                </div>
                <div className="space-y-4 px-6 border-l-2 border-gold">
                   <p className="text-sm font-mono text-gold uppercase tracking-widest font-bold font-sans">THE ATRIYA ANSWER</p>
                   <p className="text-lg text-text-secondary font-sans leading-relaxed">{item.ans}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* MODEL RISK MANAGEMENT */}
      <section className="bg-white p-12 lg:p-24 rounded-[3rem] border border-border shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-center">
         <div className="space-y-8 lg:text-right">
            <SectionLabel>RISK COMPLIANCE</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display">Model Risk Management.</h2>
         </div>
         <div className="text-xl text-text-secondary font-sans leading-relaxed space-y-8">
            <p className="border-l-2 border-text-tertiary pl-6">
              ATRIYA provides the governance infrastructure that model risk 
              management requires — audit trails, replay capability, 
              authority records — as structural outputs of execution, 
              not as manually assembled documentation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
               {[ 
                 "Decision Provenance Bundle",
                 "Deterministic Replay Certificate",
                 "Data scope attestation",
                 "Human Override Records",
                 "Authority delegation records",
                 "Audit Chain integrity hash"
               ].map((proof, idx) => (
                 <div key={idx} className="flex gap-4 items-center">
                    <FileCheck className="text-gold" size={18} />
                    <span className="text-sm font-bold font-sans">{proof}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL RBI COMPLIANCE CTA */}
      <section className="max-w-4xl mx-auto text-center space-y-12 pb-24">
          <SectionLabel>RBI COMPLIANCE BRIEF</SectionLabel>
          <h2 className="text-4xl md:text-7xl font-display leading-[0.9]">Audit-ready. <br /> <span className="text-gold italic">By design.</span></h2>
          <div className="pt-8">
            <Button size="lg" className="h-16 px-16 group">
              <Link href="/contact" className="flex items-center gap-3">Request RBI Compliance Brief <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
      </section>
    </main>
  );
}

