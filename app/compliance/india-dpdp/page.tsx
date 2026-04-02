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

export default function DPDPActPage() {
  const requirements = [
    {
      section: "Section 12 — Right to Erasure",
      req: "A Data Principal shall have the right to erasure of personal data.",
      answer: "Erasure Certificate (PURGED) — proves that specific data has been irrevocably deleted and cannot be accessed by any component of the system.",
      property: "Not 'administrative erasure' (we followed a process), but 'structural erasure' (the data is provably and mathematically gone)."
    },
    {
      section: "Section 6 — Consent & Purpose",
      req: "Personal data shall be processed only for the purpose for which it was collected, with the consent of the Data Principal.",
      answer: "Consent scope attestation — every data access is evaluated against the declared consent scope at the constitutional substrate level.",
      property: "Purpose binding — data is bound to its declared purpose at the governance layer. Cross-purpose use triggers an immediate governance violation."
    },
    {
      section: "Data Fiduciary Obligations",
      req: "Data Fiduciaries must maintain accurate records and ensure processing is compliant.",
      answer: "Causal Lineage Proof — proves exactly what data was used to produce which AI output. The complete data lineage from input to decision.",
      property: "The audit chain provides the permanent, unchangeable record required for fiduciary compliance under India law."
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
          <Badge className="bg-orange-50 text-orange-600 border-orange-100 font-mono text-[10px] tracking-widest uppercase mb-4 py-1 px-4">INDIA DPDP ACT 2023 · IN FORCE</Badge>
          <SectionLabel>INDIAN REGULATORY COMPLIANCE</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          DPDP Act compliance.<br />
          <span className="text-gold italic">Built into execution.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATRIYA addresses Digital Personal Data Protection Act 2023 
          requirements at the structural level — including the right to erasure 
          with mathematical proof, not administrative claim.
        </motion.p>
      </section>

      {/* SECTION BY SECTION */}
      <section className="space-y-32">
        <div className="max-w-3xl">
          <SectionLabel>COMPLIANCE ARCHITECTURE</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">Enforcing the Digital Barkat.</h2>
        </div>

        <div className="space-y-48">
           {requirements.map((r, idx) => (
             <div key={idx} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-start">
                <div className="space-y-8 lg:sticky lg:top-24">
                   <h3 className="text-3xl font-display text-gold">{r.section}</h3>
                   <div className="p-8 bg-white border border-border italic text-sm text-text-tertiary rounded-xl">
                      Requirement: &quot;{r.req}&quot;
                   </div>
                </div>
                <div className="space-y-12">
                   <div className="space-y-4">
                      <p className="text-sm font-mono text-text-tertiary uppercase tracking-widest font-bold font-sans">ATRIYA&apos;S STRUCTURAL ANSWER</p>
                      <p className="text-2xl md:text-3xl font-display text-text-primary leading-tight">{r.answer}</p>
                   </div>
                   <div className="p-10 bg-bg-secondary rounded-2xl border border-border space-y-4">
                      <p className="text-sm font-mono text-gold uppercase tracking-widest font-bold">The Fundamental Difference</p>
                      <p className="text-lg text-text-secondary font-sans leading-relaxed">{r.property}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* WHAT GETS GENERATED */}
      <section className="bg-bg-tertiary rounded-[3rem] p-12 lg:p-24 border border-border overflow-hidden relative">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
               <SectionLabel>DPDP EVIDENCE BUNDLE</SectionLabel>
               <h2 className="text-4xl md:text-6xl font-display">Automated artifacts. <br /> Audit-ready.</h2>
               <p className="text-xl text-text-secondary font-sans leading-relaxed">
                  Every DPDP compliance proof is generated as a structural consequence 
                  of ATRIYA&apos;s constitutional pipeline.
               </p>
               <div className="flex pt-6">
                 <Button size="lg" className="h-14">
                    <Link href="/contact">Request DPDP Compliance Brief →</Link>
                 </Button>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[ 
                  { title: "Erasure Certificate (§12)", icon: Eraser },
                  { title: "Consent Scope Attestation (§6)", icon: UserCheck },
                  { title: "Causal Lineage Proof", icon: History },
                  { title: "Data Residency Proof", icon: MapPin },
                  { title: "Fiduciary Authority Record", icon: ShieldCheck },
                  { title: "Purpose Binding Verified", icon: CheckCircle2 }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl border border-border flex items-center gap-4">
                     <item.icon className="text-gold" size={20} />
                     <span className="text-sm font-bold font-sans">{item.title}</span>
                  </div>
                ))}
            </div>
         </div>
      </section>
    </main>
  );
}

function MapPin(props:any) {
  return <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
}
