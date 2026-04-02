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
  Cpu, Code2, Globe, BrainCircuit
} from "lucide-react";
import Link from "next/link";

export default function EUAIActPage() {
  const requirements = [
    {
      article: "Article 13 — Transparency",
      req: "High-risk AI systems shall be designed and developed in such a way to ensure that their operation is sufficiently transparent.",
      answer: "Deterministic Replay Certificate — any decision made by a governed AI system can be exactly reproduced. Not approximated. Reproduced. The replay IS the transparency proof.",
      property: "Immutable Audit Chain — every state transition during AI execution is permanently recorded in a hash-linked chain. Presentable to any regulator."
    },
    {
      article: "Article 14 — Human Oversight",
      req: "High-risk AI systems shall be designed and developed in such a way... that they can be effectively overseen by natural persons.",
      answer: "Human Override Record — every instance of a human overriding an AI decision is permanently recorded: who, when, what was overridden, and why. Generated automatically.",
      property: "Authority hierarchy — humans hold higher authority classes than AI systems by default. The constitutional substrate enforces this."
    },
    {
      article: "Article 9 — Risk Management",
      req: "A risk management system shall be established, implemented, documented, and maintained.",
      answer: "Fail-Closed Proof — proves the system defaulted to REFUSED when governance constraints could not be met, rather than operating in a degraded permissive state.",
      property: "The constitutional pipeline IS the risk management system — not a document describing one."
    },
    {
      article: "Article 17 — Quality Management",
      req: "Providers of high-risk AI systems shall put a quality management system in place.",
      answer: "The constitutional execution pipeline is the quality management system. Every output evaluated before release. Every evaluation permanently recorded.",
      property: "Quality is enforced, not documented. The platform prevents the release of un-governed artifacts."
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
          <Badge className="bg-blue-50 text-blue-500 border-blue-100 font-mono text-[10px] tracking-widest uppercase mb-4 py-1 px-4">EU AI ACT · EFFECTIVE 2024</Badge>
          <SectionLabel>REGULATORY COMPLIANCE</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          EU AI Act compliance.<br />
          <span className="text-gold italic">Structural. Not documented.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATRIYA addresses EU AI Act requirements for high-risk AI systems 
          at the architecture level — not through policy documentation 
          that describes what you intend to do.
        </motion.p>
      </section>

      {/* REQUIREMENTS AND ANSWERS */}
      <section className="space-y-32">
        <div className="max-w-3xl">
          <SectionLabel>THE REQUIREMENTS</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">ATRIYA&apos;s architectural answers.</h2>
        </div>

        <div className="space-y-32">
           {requirements.map((r, idx) => (
             <div key={idx} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-start">
                <div className="space-y-6 lg:sticky lg:top-24">
                   <h3 className="text-2xl font-bold font-display text-gold">{r.article}</h3>
                   <div className="p-6 bg-bg-secondary rounded-xl border border-border italic text-sm text-text-tertiary">
                      Requirement: &quot;{r.req}&quot;
                   </div>
                </div>
                <div className="space-y-12">
                   <div className="space-y-4">
                      <p className="text-sm font-mono text-text-tertiary uppercase tracking-widest font-bold font-sans">The Core Answer</p>
                      <p className="text-2xl md:text-3xl font-display italic text-text-primary leading-snug">{r.answer}</p>
                   </div>
                   <div className="p-10 bg-white border border-border rounded-xl shadow-sm space-y-4">
                      <p className="text-sm font-mono text-gold uppercase tracking-widest font-bold">Enforcement Mechanism</p>
                      <p className="text-lg text-text-secondary font-sans leading-relaxed">{r.property}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ARCHITECTURE PROOF GENERATION */}
      <section className="bg-bg-tertiary rounded-[3rem] p-12 lg:p-24 border border-border">
         <div className="text-center space-y-16">
            <div className="space-y-4">
               <SectionLabel>EVIDENCE GENERATION</SectionLabel>
               <h2 className="text-4xl md:text-6xl font-display">Structural Proofs.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
               {[ 
                 { title: "Deterministic Replay Certificate", art: "Article 13" },
                 { title: "Immutable Audit Chain", art: "Article 13" },
                 { title: "Human Override Records", art: "Article 14" },
                 { title: "Fail-Closed Proof", art: "Article 9" },
                 { title: "Refusal Certificates", art: "Article 9" },
                 { title: "Quality Verification Audit", art: "Article 17" }
               ].map((proof, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-xl border border-border flex flex-col justify-between h-full">
                    <p className="text-[10px] font-mono text-gold mb-4 uppercase tracking-widest font-bold">{proof.art}</p>
                    <h4 className="text-lg font-bold font-sans">{proof.title}</h4>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL COMPLIANCE CTA */}
      <section className="max-w-4xl mx-auto text-center space-y-12 pb-24">
          <SectionLabel>READY FOR THE ACT</SectionLabel>
          <h2 className="text-4xl md:text-7xl font-display leading-[0.9]">Structural compliance. <br /> <span className="text-gold italic">Guaranteed.</span></h2>
          <p className="text-xl text-text-secondary font-sans font-medium px-4">
             Get the technical brief on how ATRIYA satisfies EU AI Act 
             requirements for high-risk systems at the code level.
          </p>
          <div className="pt-8">
            <Button size="lg" className="h-16 px-16 group">
              <Link href="/contact" className="flex items-center gap-3">Request EU AI Act Package <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
      </section>
    </main>
  );
}
