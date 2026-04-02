"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Code2, ShieldCheck, History, Scale, 
  Terminal, FileText, Zap, Laptop,
  Cpu, Lock, Search, Database, Globe
} from "lucide-react";
import Link from "next/link";

export default function ATRIYASDK() {
  const capabilities = [
    {
      title: "Governed AI Calls",
      body: "Wrap your AI calls in the constitutional pipeline with a single SDK call. Every request evaluated, admitted or refused, with the outcome permanently recorded.",
      icon: Code2
    },
    {
      title: "Automatic Audit Trail",
      body: "Every request through the SDK is logged to an immutable audit chain. No manual logging required. No inconsistency between projects.",
      icon: History
    },
    {
      title: "Deterministic Decisions",
      body: "Same inputs, same state, same output. Always. Reproduce any decision on demand. Answer the 'why' question with a replay, not a model explanation.",
      icon: Scale
    },
    {
      title: "Authority Model",
      body: "Define authority classes for the actors in your system. The SDK enforces them. Your agents stay in their lanes without bespoke access control code.",
      icon: ShieldCheck
    },
    {
      title: "Structured Refusal Records",
      body: "When a request is refused, you get a structured refusal record — reason code, rule reference, timestamp. Not an exception. A governed outcome.",
      icon: Lock
    },
    {
      title: "Enterprise-Ready by Default",
      body: "When your enterprise customer's security team asks about AI governance, you point to ATRIYA. The compliance documentation is generated from your audit chain — automatically.",
      icon: FileText
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
          <Badge variant="platform" className="mb-8 border-amber-500/50 text-amber-500">DEVELOPER PREVIEW</Badge>
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
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="h-14">
            <Link href="/contact">Join Developer Beta →</Link>
          </Button>
          <Button variant="ghost" size="lg" className="h-14 relative opacity-50 cursor-not-allowed group">
            <Link href="#" className="pointer-events-none">View Documentation</Link>
            <span className="absolute bottom-[-30px] left-1/2 translate-x-[-50%] bg-gold text-black text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
          </Button>
        </motion.div>
      </section>

      {/* THE PROBLEM FOR DEVELOPERS */}
      <section className="bg-bg-tertiary p-12 lg:p-24 rounded-3xl border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <div className="space-y-8">
                <SectionLabel>THE PROBLEM</SectionLabel>
                <h2 className="text-4xl md:text-6xl font-display leading-tight">
                  You&apos;ve built the AI. Now someone asks you to explain it.
                </h2>
             </div>
             <div className="text-xl text-text-secondary leading-relaxed font-sans space-y-8">
                <p>
                  "Every AI team eventually faces the same moment: a product manager, 
                  a legal counsel, an enterprise customer's security team, or a regulator 
                  asks 'what did your AI decide, and why?' And the honest answer is: 
                  'I don't know. The model produced a probability.'
                </p>
                <p className="text-text-primary px-8 border-l-2 border-gold italic">
                  Building governance infrastructure from scratch — audit trails, 
                  authority models, deterministic replay — is expensive, inconsistent 
                  across projects, and not your competitive advantage.
                </p>
             </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
             <div key={idx} className="p-10 bg-white border border-border rounded-xl space-y-8 hover:border-gold/30 transition-all shadow-sm">
                <div className="h-12 w-12 bg-bg-secondary rounded flex items-center justify-center">
                   <cap.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-sans">{cap.title}</h3>
                <p className="text-lg text-text-secondary font-sans leading-relaxed">{cap.body}</p>
             </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES AND INTEGRATION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
         <div className="space-y-12">
            <SectionLabel>TECHNICAL DETAILS</SectionLabel>
            <div className="space-y-8">
               <div className="grid grid-cols-[120px_1fr] gap-12 items-baseline">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">Languages</span>
                  <p className="text-xl font-bold font-sans flex gap-4">
                     <span>Go (primary)</span>
                     <span className="text-text-tertiary">·</span>
                     <span>Python</span>
                     <span className="text-text-tertiary">·</span>
                     <span>TypeScript</span>
                  </p>
               </div>
               <div className="grid grid-cols-[120px_1fr] gap-12 items-baseline">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">Transport</span>
                  <p className="text-xl font-bold font-sans flex gap-4">
                     <span>gRPC (primary)</span>
                     <span className="text-text-tertiary">·</span>
                     <span>REST fallback</span>
                  </p>
               </div>
               <div className="grid grid-cols-[120px_1fr] gap-12 items-baseline">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">Environment</span>
                  <p className="text-xl font-bold font-sans">
                     Local dev tools + ATRIYA Cloud
                  </p>
               </div>
               <div className="grid grid-cols-[120px_1fr] gap-12 items-baseline">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">Pricing</span>
                  <p className="text-xl font-bold font-sans text-gold">
                      Included in ATRIYA Cloud consumption. Free tier available.
                  </p>
               </div>
            </div>
         </div>
         <div className="p-12 bg-bg-tertiary border border-border rounded-2xl font-mono text-sm leading-relaxed overflow-hidden">
            <p className="text-text-tertiary mb-8">// GETTING STARTED (PREVIEW)</p>
            <div className="space-y-6">
               <div className="flex gap-6">
                  <span className="text-gold">1.</span>
                  <span>Sign up for ATRIYA Cloud</span>
               </div>
               <div className="flex gap-6">
                  <span className="text-gold">2.</span>
                  <span className="text-blue-500">go get github.com/Atriya-systems/atriya-sdk</span>
               </div>
               <div className="flex gap-6">
                  <span className="text-gold">3.</span>
                  <span className="text-text-secondary">Wrap your AI calls in the constitutional pipeline:</span>
               </div>
               <div className="pl-12 text-xs opacity-60">
                 <pre>
{`atriya.Execute(ctx, "intent_id", func() {
  // Your AI execution logic
})`}
                 </pre>
               </div>
               <div className="flex gap-6">
                  <span className="text-gold">4.</span>
                  <span className="text-green">Your application is governed</span>
               </div>
            </div>
            <p className="mt-12 text-xs text-text-tertiary italic">"Full SDK documentation launching with developer beta."</p>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-bg-tertiary rounded-3xl p-12 lg:p-24 border border-border flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-display">Governance is infrastructure.</h2>
          <p className="text-xl text-text-secondary font-sans font-medium">Join the developer beta and build your application on the constitutional substrate.</p>
        </div>
        <Button size="lg" className="h-14">
          <Link href="/contact">Join Developer Beta →</Link>
        </Button>
      </section>
    </main>
  );
}
