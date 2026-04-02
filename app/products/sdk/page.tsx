"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Code2, Terminal, ShieldCheck, History, 
  RefreshCw, Scale, Box, CheckCircle2,
  ArrowRight, Globe, Zap, Cpu
} from "lucide-react";
import Link from "next/link";

export default function ATRIYASDKPage() {
  const capabilities = [
    {
      title: "Governed AI Calls",
      text: "Wrap your AI calls in the constitutional pipeline with a single SDK call. Every request evaluated, admitted or refused, with the outcome permanently recorded."
    },
    {
      title: "Automatic Audit Trail",
      text: "Every request through the SDK is logged to an immutable audit chain. No manual logging required. No inconsistency between projects."
    },
    {
      title: "Deterministic Decisions",
      text: "Same inputs, same state, same output. Always. Reproduce any decision on demand. Answer the 'why' question with a replay, not a model explanation."
    },
    {
      title: "Authority Model",
      text: "Define authority classes for the actors in your system. The SDK enforces them. Your agents stay in their lanes without bespoke access control code."
    },
    {
      title: "Structured Refusal Records",
      text: "When a request is refused, you get a structured refusal record — reason code, rule reference, timestamp. Not an exception. A governed outcome."
    },
    {
      title: "Enterprise-Ready by Default",
      text: "When your enterprise customer's security team asks about AI governance, you point to ATRIYA. The compliance documentation is generated from your audit chain."
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
          <Badge className="bg-amber/10 text-amber border-amber/20 font-mono text-[10px] tracking-widest uppercase mb-4 py-1 px-4">DEVELOPER PREVIEW</Badge>
          <SectionLabel>DEVELOPER PLATFORM</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Build on governed<br />
          <span className="text-gold">infrastructure.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The ATRIYA SDK gives you constitutional AI governance without 
          building it yourself. Every AI call through your application 
          governed, audited, and deterministic — by default.
        </motion.p>
        
        <motion.div 
           className="mt-12 flex flex-wrap gap-6"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="h-14">
             <Link href="/contact">Join Developer Beta →</Link>
          </Button>
          <Button variant="ghost" size="lg" className="h-14 disabled opacity-50 cursor-not-allowed">
             View Documentation (Soon)
          </Button>
        </motion.div>
      </section>

      {/* THE PROBLEM FOR DEVELOPERS */}
      <section className="bg-white p-12 lg:p-24 rounded-[3rem] border border-border shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
         <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display leading-tight">You&apos;ve built the AI. <br /> Now someone asks you to explain it.</h2>
         </div>
         <div className="text-xl text-text-secondary font-sans leading-relaxed space-y-8">
            <p>
              &quot;Every AI team eventually faces the same moment: a product manager, 
              a legal counsel, or a regulator asks &apos;what did your AI decide, and why?&apos; 
              And the honest answer is: &apos;I don&apos;t know. The model produced a probability.&apos;
            </p>
            <p className="border-l-2 border-amber pl-8 italic text-text-primary">
              Building governance infrastructure from scratch — audit trails, 
              authority models, deterministic replay — is expensive, inconsistent 
              across projects, and not your competitive advantage.&quot;
            </p>
         </div>
      </section>

      {/* WHAT THE SDK PROVIDES */}
      <section className="space-y-16">
        <div className="max-w-3xl">
          <SectionLabel>WHAT YOU GET</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">
             Governance as infrastructure. Not as your problem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
           {capabilities.map((c, idx) => (
             <div key={idx} className="p-10 bg-bg-secondary border border-border rounded-xl space-y-4 hover:border-gold/30 transition-all">
                <h3 className="text-xl font-bold font-sans">{c.title}</h3>
                <p className="text-sm text-text-secondary font-sans leading-relaxed">{c.text}</p>
             </div>
           ))}
        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
         <div className="space-y-12">
            <SectionLabel>TECHNICAL DETAILS</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <p className="text-[10px] font-mono text-gold uppercase tracking-[0.2em] font-bold">Languages</p>
                  <p className="text-lg font-sans text-text-primary">Go (Primary) · Python · TypeScript</p>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-mono text-gold uppercase tracking-[0.2em] font-bold">Transport</p>
                  <p className="text-lg font-sans text-text-primary">gRPC (Primary) · REST fallback</p>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-mono text-gold uppercase tracking-[0.2em] font-bold">Environment</p>
                  <p className="text-lg font-sans text-text-primary">Local dev tools + ATRIYA Cloud</p>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-mono text-gold uppercase tracking-[0.2em] font-bold">Pricing</p>
                  <p className="text-lg font-sans text-text-primary">Included in ATRIYA Cloud. Free tier available.</p>
               </div>
            </div>
         </div>
         <div className="bg-white p-12 lg:p-16 rounded-3xl border border-border shadow-2xl relative overflow-hidden group">
            <Terminal size={160} className="absolute right-[-40px] top-[-40px] text-gold opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" />
            <SectionLabel>GETTING STARTED</SectionLabel>
            <div className="pt-8 space-y-8">
               {[ 
                 "1. Sign up for ATRIYA Cloud",
                 "2. Install SDK: go get github.com/Atriya-systems/atriya-sdk",
                 "3. Wrap your AI calls in the constitutional pipeline",
                 "4. Your application is governed"
               ].map((step, idx) => (
                  <div key={idx} className="font-mono text-sm border-b border-border/50 pb-4 last:border-0">{step}</div>
               ))}
               <p className="text-xs text-text-tertiary italic pt-4">&quot;Full SDK documentation launching with developer beta.&quot;</p>
            </div>
         </div>
      </section>

      {/* FINAL SDK CTA */}
      <section className="text-center space-y-12 pb-24">
          <h2 className="text-4xl md:text-7xl font-display leading-[0.9]">Start building <br /> <span className="text-gold italic">truthfully.</span></h2>
          <div className="pt-8">
            <Button size="lg" className="h-16 px-16 group">
              <Link href="/contact" className="flex items-center gap-3">Join Developer Beta <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
      </section>
    </main>
  );
}
