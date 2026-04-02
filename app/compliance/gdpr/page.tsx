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
  Cpu, Code2, Globe, BrainCircuit, Eraser
} from "lucide-react";
import Link from "next/link";

export default function GDPRPage() {
  const requirements = [
    {
      article: "Article 17 — Right to Erasure",
      req: "The data subject shall have the right to obtain from the controller the erasure of personal data.",
      answer: "Erasure Certificate (PURGED) — proves that specific data has been irrevocably deleted and cannot be accessed. Mathematically final deletion.",
      property: "ATRIYA's deletion propagates across all components and generates a verifiable erasure certificate."
    },
    {
      article: "Article 22 — Automated Decision-Making",
      req: "The data subject shall have the right not to be subject to a decision based solely on automated processing.",
      answer: "Causal Lineage Proof — the complete record of what data was used, what process was followed, and what the AI decided.",
      property: "Answers Art.22's transparency requirement with a verifiable record. Deterministic Replay — any automated decision can be exactly reproduced for review."
    },
    {
      article: "Article 5 — Data Minimisation",
      req: "Personal data shall be adequate, relevant and limited to what is necessary.",
      answer: "Data scope attestation — every AI request includes a record of what data was accessed.",
      property: "Accesses outside the declared scope are refused at the constitutional substrate level before execution."
    }
  ];

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-48 min-h-screen">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] bg-[linear-gradient(to_right,#0A0E1A_1px,transparent_1px),linear-gradient(to_bottom,#0A0E1A_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="max-w-4xl pt-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Badge className="bg-blue-50 text-blue-800 border-blue-100 font-mono text-[10px] tracking-widest uppercase mb-4 py-1 px-4">GDPR COMPLIANCE · GLOBAL STANDARD</Badge>
          <SectionLabel>GLOBAL REGULATORY COMPLIANCE</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          GDPR compliance.<br />
          <span className="text-gold italic">Provable. Not described.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATRIYA addresses GDPR&apos;s core AI-related requirements — 
          right to erasure, automated decision-making transparency, 
          and data minimisation — at the structural level.
        </motion.p>
      </section>

      {/* GDPR REQUIREMENTS AND ANSWERS */}
      <section className="space-y-32">
        <div className="max-w-3xl">
          <SectionLabel>THE REQUIREMENTS</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">Enforcing Articles 17, 22, and 5.</h2>
        </div>

        <div className="space-y-32">
           {requirements.map((r, idx) => (
             <div key={idx} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-start border-t border-border pt-24 first:border-0 first:pt-0">
                <div className="space-y-6">
                   <h3 className="text-2xl font-bold font-display text-gold">{r.article}</h3>
                   <div className="p-6 bg-bg-secondary rounded-xl border border-border italic text-sm text-text-tertiary">
                      Requirement: &quot;{r.req}&quot;
                   </div>
                </div>
                <div className="space-y-12">
                   <div className="space-y-4">
                      <p className="text-sm font-mono text-text-tertiary uppercase tracking-widest font-bold font-sans">ATRIYA&apos;S ENFORCEMENT</p>
                      <p className="text-2xl md:text-3xl font-display italic text-text-primary leading-tight">{r.answer}</p>
                   </div>
                   <div className="p-10 bg-white border border-border rounded-xl shadow-sm space-y-4">
                      <p className="text-sm font-mono text-gold uppercase tracking-widest font-bold">Regulatory Result</p>
                      <p className="text-lg text-text-secondary font-sans leading-relaxed">{r.property}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* FINAL GDPR CTA */}
      <section className="bg-bg-tertiary rounded-[3rem] p-12 lg:p-24 border border-border text-center space-y-12">
          <SectionLabel>REQUEST DOCUMENTATION</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display">GDPR proof from the substrate.</h2>
          <Button size="lg" className="h-16 px-16 group">
             <Link href="/contact" className="flex items-center gap-3">Request GDPR Documentation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
      </section>
    </main>
  );
}
