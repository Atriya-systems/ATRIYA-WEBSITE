"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Lock, ShieldCheck, UserCheck, History as HistoryIcon, 
  MapPin, Eraser, AlertTriangle, FileCheck,
  ShieldAlert, Fingerprint, Info, ArrowRight,
  Database, Zap, Scale
} from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
  const principles = [
    {
      title: "Fail-Closed Execution",
      icon: AlertTriangle,
      body: "When systemic integrity cannot be fully verified, the substrate defaults to refusal. This ensures that no interaction occurs outside of governed boundaries. The system does not possess a 'run without governance' mode."
    },
    {
      title: "Structural Authority",
      icon: Fingerprint,
      body: "Every system component operates within a defined authority class. Enforcement is embedded in the substrate itself, preventing unauthorized logic escalation and ensuring interaction integrity by design."
    },
    {
      title: "Substrate-Level Enforcement",
      icon: ShieldAlert,
      body: "Safety properties are not layered on; they emerge from the constitutional substrate. This eliminates the vulnerability of configuration-based security and ensures behavior remains constant."
    },
    {
      title: "Immutable Evidence Chain",
      icon: HistoryIcon,
      body: "Every system event produces a definitive record of integrity. This evidence is structurally bound to the interaction, ensuring that every outcome is verifiable and tamper-evident for audit cycles."
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans text-slate-900">
      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-10">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">SYSTEM SECURITY</Badge>
            <SectionLabel>CONSTITUTIONAL INTEGRITY</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Security is <br />
            <span className="text-indigo-600 italic font-light font-display lowercase tracking-tighter">Enforced.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[800px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ATRIYA&apos;s security model is not a set of features applied to 
            an insecure core. Security properties emerge from the 
            structural architecture itself.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
               Request Security Briefing
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               CISO Review Details
            </Button>
          </motion.div>
        </div>
      </section>

      {/* HOW SECURITY WORKS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-24">
        <div className="max-w-4xl space-y-8">
           <SectionLabel>SYSTEM PROPERTIES</SectionLabel>
           <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight italic">Structural <span className="text-indigo-600">Properties.</span></h2>
           <p className="text-xl text-slate-500 font-sans leading-relaxed">
             Fixing systemic vulnerabilities requires an architecture where 
             accountability is embedded in every execution cycle.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {principles.map((p, idx) => (
              <div key={idx} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group flex flex-col justify-between space-y-8">
                 <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <p.icon className="text-indigo-600 group-hover:text-white transition-colors" size={24} />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-3xl font-display text-slate-900 italic tracking-tight">{p.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed font-sans">{p.body}</p>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ACCESS CONTROL MODEL */}
      <section className="relative z-10 p-6 lg:p-12 mb-32">
        <div className="bg-slate-950 rounded-[4.5rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-3xl">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_70%)]"></div>
           <div className="max-w-4xl relative z-10 space-y-12">
              <SectionLabel className="border-indigo-500/30 text-indigo-400 font-bold uppercase tracking-widest">ENFORCEMENT MODEL</SectionLabel>
              <h2 className="text-4xl md:text-7xl font-display leading-[1.1]">Authority over <br /><span className="text-indigo-400 italic">Access Control.</span></h2>
              
              <div className="space-y-8 text-xl text-indigo-100/70 font-sans leading-relaxed">
                 <p>
                   Traditional security relies on access control lists — who can 
                   access what resource. These are fragile and depend on 
                   application-layer enforcement that can be bypassed.
                 </p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-3xl">
                    <p className="italic text-white font-display text-2xl leading-relaxed">
                      &quot;ATRIYA class-based authority defines what interactions an actor 
                      can structurally perform. Enforcement is execution physics, 
                      rendering systemic bypasses impossible by design.&quot;
                    </p>
                 </div>
                 <p>
                   An interaction is evaluated for authority at the substrate level, 
                   before it captures or processes data. If authority is not 
                   confirmed, the logic path is blocked at the system foundation.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* DATA SOVEREIGNTY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
         <div className="max-w-3xl space-y-8">
            <SectionLabel>DATA SOVEREIGNTY</SectionLabel>
            <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">Interaction <span className="text-indigo-600">Perimeters.</span></h2>
            <p className="text-xl text-slate-500 font-sans leading-relaxed italic">
               ATRIYA&apos;s sovereign routing model enforces data residency through 
               execution logic. Routing is structural; data cannot cross 
               defined boundaries because the execution path does not 
               possess cross-boundary connectivity.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: "Public Cloud", text: "Multi-tenant substrate with logical isolation. Jurisdictional residency configurable by region." },
              { title: "Managed Infrastructure", text: "Dedicated substrate for high-governance enterprises. Isolation enforced per deployment." },
              { title: "Sovereign Perimeter", text: "Customer-operated within air-gapped or restricted networks. Absolute operational sovereignty." }
            ].map((opt, idx) => (
              <div key={idx} className="p-10 bg-white border border-slate-200 rounded-[3rem] space-y-6 shadow-sm hover:border-indigo-300 transition-all">
                 <Database className="text-indigo-600" size={32} />
                 <h4 className="text-2xl font-display italic tracking-tight text-slate-900">{opt.title}</h4>
                 <p className="text-sm text-slate-500 font-sans leading-relaxed">{opt.text}</p>
              </div>
            ))}
         </div>
      </section>

      {/* DELETION AND ERASURE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
         <div className="bg-indigo-50 rounded-[4.5rem] p-12 lg:p-24 border border-indigo-100 grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12 items-center">
            <div className="space-y-8">
               <SectionLabel>DELETION & ERASURE</SectionLabel>
               <h2 className="text-4xl md:text-6xl font-display text-slate-900">Verifiable <span className="text-indigo-600 italic">Erasure.</span></h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-4">
                     <p className="text-[10px] font-mono uppercase text-indigo-600 font-bold tracking-[0.2em]">Immediate Propagation</p>
                     <p className="text-sm text-slate-600 leading-relaxed font-sans italic">&quot;Deletion is propagated across all system references, ensuring finality and alignment with global privacy standards.&quot;</p>
                  </div>
                  <div className="space-y-4">
                     <p className="text-[10px] font-mono uppercase text-indigo-600 font-bold tracking-[0.2em]">Structural Evidence</p>
                     <p className="text-base text-slate-900 font-bold font-sans">Every erasure provides a verifiable certificate of deletion, ready for institutional audit.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-col gap-6 justify-center">
               <div className="p-8 bg-white rounded-3xl border border-indigo-100 flex items-center gap-6 shadow-sm grayscale hover:grayscale-0 transition-all group">
                  <Fingerprint className="text-indigo-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">Global Privacy Compliant</p>
               </div>
               <div className="p-8 bg-white rounded-3xl border border-indigo-100 flex items-center gap-6 shadow-sm grayscale hover:grayscale-0 transition-all group">
                  <Lock className="text-indigo-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">Audit Ready Architecture</p>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL SECURITY CTA */}
      <section className="relative z-10 max-w-4xl mx-auto text-center space-y-16 pb-48">
          <SectionLabel>CISO & SECURITY REVIEWS</SectionLabel>
          <h2 className="text-4xl md:text-8xl font-display italic text-slate-950">Ready for <br /><span className="text-indigo-600 underline underline-offset-[20px] decoration-indigo-200 uppercase tracking-tighter">Examination.</span></h2>
          <p className="text-xl text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
             Our security architects are available for direct engagement with 
             your core security team to review the ATRIA structural model.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-12">
             <Button size="lg" className="h-20 px-16 text-xl font-display bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl">
                <Link href="/contact">Request Security Brief</Link>
             </Button>
          </div>
      </section>
    </main>
  );
}
