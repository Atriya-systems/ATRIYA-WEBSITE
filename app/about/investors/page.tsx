"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Activity, 
  Database, UserCheck, Scale, History,
  Lock, AlertTriangle, FileCheck, Layers,
  Cpu, Code2, Globe, BrainCircuit, Landmark
} from "lucide-react";
import Link from "next/link";

export default function InvestorsPage() {
  const [isGated, setIsGated] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate gate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real app, this would redirect or unlock content
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 min-h-screen text-center flex flex-col justify-center items-center space-y-12">
          <SectionLabel>ACCESS REQUESTED</SectionLabel>
          <div className="h-24 w-24 bg-gold rounded-full flex items-center justify-center mb-8">
             <ShieldCheck className="text-white" size={48} />
          </div>
          <h2 className="text-4xl md:text-7xl font-display">We&apos;ll be in touch.</h2>
          <p className="text-xl text-text-secondary font-sans max-w-2xl mx-auto leading-relaxed italic">
            Thank you for your interest in ATRIYA Systems. <br />
            Our team will review your request and get back to you within 24 hours.
          </p>
          <div className="pt-8">
            <Button size="lg" className="h-16 px-16 group" onClick={() => setIsSubmitted(false)}>
              Back to Overview →
            </Button>
          </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 min-h-screen">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] bg-[linear-gradient(to_right,#0A0E1A_1px,transparent_1px),linear-gradient(to_bottom,#0A0E1A_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <AnimatePresence mode="wait">
        {isGated ? ( 
          <motion.section 
            key="gate"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-xl mx-auto space-y-16 pt-24"
          >
             <div className="text-center space-y-6">
                <SectionLabel>INVESTOR RELATIONS</SectionLabel>
                <h2 className="text-4xl md:text-6xl font-display leading-[0.9]">Request Access.</h2>
                <p className="text-text-tertiary font-sans text-lg italic underline decoration-gold/30 underline-offset-4">Investor materials are confidential and gated.</p>
             </div>

             <form className="space-y-8 bg-white p-12 rounded-3xl border border-border shadow-2xl relative" onSubmit={handleGateSubmit}>
                <div className="space-y-2">
                   <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest font-bold">Name</label>
                   <input required type="text" placeholder="Full Name" className="w-full bg-bg-secondary border border-border rounded-xl px-6 h-14 font-sans focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest font-bold">Fund / Organisation</label>
                   <input required type="text" placeholder="e.g. Sequoia Capital" className="w-full bg-bg-secondary border border-border rounded-xl px-6 h-14 font-sans focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest font-bold">Work Email</label>
                   <input required type="email" placeholder="name@fund.com" className="w-full bg-bg-secondary border border-border rounded-xl px-6 h-14 font-sans focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest font-bold">Role</label>
                   <input required type="text" placeholder="e.g. Principal / General Partner" className="w-full bg-bg-secondary border border-border rounded-xl px-6 h-14 font-sans focus:outline-none focus:border-gold transition-colors" />
                </div>
                
                <div className="pt-8">
                   <Button size="lg" className="w-full h-16 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Requesting Access...' : 'Request Access →'}
                   </Button>
                </div>
                
                <p className="text-center text-[10px] text-text-tertiary font-mono uppercase tracking-[0.2em] pt-8">
                   This page contains CONFIDENTIAL information for qualified investors.
                </p>
             </form>
             
             {/* TEMPORARY BYPASS FOR DEMO (UNGUARDED CONTENT BELOW IN FILE) */}
             <div className="text-center">
                 <button onClick={() => setIsGated(false)} className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest hover:text-gold transition-colors underline underline-offset-4 decoration-gold/20">
                    Bypass gate for demo review →
                 </button>
             </div>
          </motion.section>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-48"
          >
             {/* HERO */}
             <section className="max-w-4xl pt-12">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                 <Badge className="bg-red-50 text-red-600 border-red-100 font-mono text-[10px] tracking-widest uppercase mb-4 py-1 px-4">CONFIDENTIAL · FOR QUALIFIED INVESTORS</Badge>
                 <SectionLabel>INVESTOR OVERVIEW</SectionLabel>
               </motion.div>
               
               <motion.h1 
                 className="text-6xl md:text-9xl font-display mt-8 leading-[0.9]"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
               >
                 ATRIYA Systems<br />
                 <span className="text-gold italic underline decoration-gold/20 underline-offset-8">Thesis Overview.</span>
               </motion.h1>
             </section>

             {/* THE OPPORTUNITY */}
             <section className="space-y-16">
                <SectionLabel>THE OPPORTUNITY</SectionLabel>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 text-2xl md:text-3xl font-display leading-[1.3] text-text-secondary italic">
                   <div className="space-y-12">
                      <p>
                        &quot;Every organisation deploying AI faces a governance problem 
                        that existing tools do not solve. AI safety wrappers are removable. 
                        Policy engines are configurable. Monitoring tools observe but 
                        do not enforce.&quot;
                      </p>
                      <p className="text-text-primary underline decoration-gold underline-offset-8 font-sans not-italic font-bold">
                        The solution is structural execution physics.
                      </p>
                   </div>
                   <div className="space-y-12">
                      <p>
                        &quot;ATRIYA is the layer that every AI action must pass 
                        through before it reaches the world. Built from first principles, 
                        protected by proprietary architectural innovations, and proven in production 
                        through the Education Platform.&quot;
                      </p>
                      <p>
                        &quot;One constitutional substrate. The same platform architecture that 
                        governs a student&apos;s study recommendation governs a bank&apos;s credit decision. 
                        The substrate is universal.&quot;
                      </p>
                   </div>
                </div>
             </section>

             {/* TRACTION */}
             <section className="space-y-16">
                <SectionLabel>TRACTION & PROOF</SectionLabel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[ 
                     { title: "Live Product: Education Platform", text: "India's first constitutionally governed exam preparation platform. Live in production with students. JEE, NEET, CUET preparation." },
                     { title: "Design Partners: Active", text: "Enterprise AI governance design partners across healthcare, finance, and enterprise sectors." },
                     { title: "IP: Global Substrate", text: "Four filing waves covering constitutional governance enforcement, multi-step reasoning evaluation, and cryptographic provenance." }
                   ].map((item, idx) => (
                     <div key={idx} className="p-12 bg-white border border-border rounded-2xl space-y-6 shadow-sm group hover:border-gold/30 transition-all">
                        <h3 className="text-2xl font-bold font-sans">{item.title}</h3>
                        <p className="text-lg text-text-secondary font-sans leading-relaxed">{item.text}</p>
                     </div>
                   ))}
                </div>
             </section>

             {/* THE ASK */}
             <section className="bg-bg-tertiary rounded-[4rem] p-12 lg:p-24 border border-border text-center space-y-12">
                <SectionLabel>THE REQUIREMENT</SectionLabel>
                <h2 className="text-4xl md:text-7xl font-display italic">&quot;ATRIYA is in conversations with institutional investors aligned with deep-tech and constitutional AI.&quot;</h2>
                <div className="pt-12 text-center">
                   <Button size="lg" className="h-16 px-16 group">
                      <Link href="/contact" className="flex items-center gap-3">Request Deck & Data Room <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
                   </Button>
                   <p className="text-sm font-mono text-text-tertiary uppercase tracking-widest mt-8 font-bold">Full materials available under NDA</p>
                </div>
             </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
