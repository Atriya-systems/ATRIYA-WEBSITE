"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Building2, Globe, Hash, ShieldCheck, 
  ArrowRight, CheckCircle2, History, Scale,
  UserCheck, Activity, Globe2, Code2,
  Zap, Layers, BarChart3, MessageSquare,
  Newspaper, Users, FileText
} from "lucide-react";
import Link from "next/link";

export default function PressPage() {
  const facts = [
    { label: "Company", value: "ATRIYA Systems Private Limited" },
    { label: "Founded", value: "2024" },
    { label: "Headquarters", value: "Gurugram, Haryana, India" },
    { label: "Category", value: "Constitutional AI execution platform" },
    { label: "Stage", value: "Pre-Series A" },
    { label: "Live product", value: "Education Vertical" },
    { label: "IP", value: "Proprietary AI Governance Substrate" },
    { label: "Founder", value: "Founded by Leadership" }
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
          <SectionLabel>PRESS & MEDIA</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Building the substrate<br />
          <span className="text-gold">beneath AI.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ATRIYA Systems is building the constitutional execution 
          substrate beneath AI. For press inquiries, founder interviews, 
          and media resources.
        </motion.p>
      </section>

      {/* COMPANY FACTS */}
      <section className="space-y-16">
        <div className="max-w-3xl">
          <SectionLabel>COMPANY FACTS</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">
             At a glance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
           {facts.map((fact, idx) => (
             <div key={idx} className="bg-white p-12 space-y-4 hover:bg-bg-secondary transition-colors">
                <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-[0.2em]">{fact.label}</span>
                <p className="text-xl font-bold font-sans">{fact.value}</p>
             </div>
           ))}
        </div>
      </section>

      {/* COMPANY DESCRIPTION */}
      <section className="bg-white rounded-2xl p-12 lg:p-24 border border-border shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-8">
              <SectionLabel>DESCRIPTION</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">For press use.</h2>
           </div>
           <div className="text-xl text-text-secondary font-sans leading-relaxed space-y-8">
              <p>
                &quot;ATRIYA Systems is building the constitutional AI execution platform — 
                the governance layer beneath AI. Unlike AI safety wrappers or 
                compliance configuration tools, ATRIYA encodes governance into 
                the execution physics of the platform itself: every AI action 
                must pass through a constitutional evaluation pipeline before 
                reaching users, data, or systems. The company&apos;s first vertical, 
                Education Platform, is live and serving students preparing for India&apos;s 
                competitive entrance exams. ATRIYA is headquartered in 
                Gurugram, India.&quot;
              </p>
           </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="space-y-16">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <SectionLabel>CONTACT</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-display mt-6 leading-tight">Press inquiries.</h2>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed font-sans text-center max-w-2xl mx-auto italic">
                For press inquiries, interview requests, and media resources.
            </p>
            <div className="text-center pt-8">
               <Button size="lg" className="h-16 px-16 text-lg">
                 <Link href="/contact">Contact Press Team →</Link>
               </Button>
            </div>
            <p className="text-center text-text-tertiary text-sm italic pt-12">Note: &quot;Press kit including logo assets and founder photography available on request.&quot;</p>
        </div>
      </section>

      {/* FINAL PRESS CTA */}
      <section className="bg-bg-tertiary rounded-3xl p-12 lg:p-24 border border-border flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-display text-text-primary italic">Governance is infrastructure.</h2>
          <p className="text-xl text-text-secondary font-sans font-medium">Small. Focused. Building infrastructure that matters.</p>
        </div>
        <Button size="lg" className="h-14">
          <Link href="/about">About the company →</Link>
        </Button>
      </section>
    </main>
  );
}
