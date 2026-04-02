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
import { Logo } from "@/components/ui/Logo";

export default function TeamPage() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-48 min-h-screen">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] bg-[linear-gradient(to_right,#1E2436_1px,transparent_1px),linear-gradient(to_bottom,#1E2436_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="max-w-4xl pt-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <SectionLabel>THE TEAM</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-display mt-8 leading-[0.9]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Small. Focused.<br />
          <span className="text-gold">Building substrate.</span>
        </motion.h1>

        <motion.p 
          className="mt-12 text-xl md:text-2xl text-text-secondary font-sans max-w-[700px] leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Not a marketing layer. A foundation layer.
        </motion.p>
      </section>

      {/* FOUNDER CARD */}
      <section id="founder" className="pt-24 border-t border-border">
         <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-24 items-start">
            <div className="aspect-[3/4] bg-bg-secondary border border-border rounded-2xl flex items-center justify-center p-24 overflow-hidden relative group">
               <Logo size="xl" className="text-gold opacity-10 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-display">The Founder</h2>
                  <p className="text-sm font-mono uppercase tracking-[0.2em] text-gold font-bold">Founder & CEO, ATRIYA Systems</p>
                  <p className="text-text-tertiary text-sm font-mono tracking-widest">Gurugram, Haryana, India</p>
               </div>
               
               <div className="space-y-8 text-xl md:text-2xl text-text-secondary font-sans leading-relaxed pt-8 border-t border-border/50">
                  <p>
                    &quot;Our founder is building the constitutional execution substrate for AI.&quot;
                  </p>
                  <p>
                    &quot;ATRIYA is his thesis that AI governance cannot be added on top — 
                    it must be the substrate beneath.&quot;
                  </p>
                  <p className="text-sm lg:text-lg italic opacity-70">
                    [Background details — complete Bio placeholder for The Founder].
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* TEAM SECTION & HIRING */}
      <section className="bg-bg-tertiary p-12 lg:p-24 rounded-[3rem] border border-border text-center space-y-12">
          <SectionLabel>JOIN US</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display">We are hiring.</h2>
          <p className="text-xl text-text-secondary font-sans font-medium max-w-2xl mx-auto">
             If you want to work on constitutional AI infrastructure, 
             we want to talk. We are looking for engineers, product builders, 
             and go-to-market leads who think about infrastructure from first principles.
          </p>
          <div className="pt-8">
            <Button size="lg" className="h-16 px-16 group">
              <Link href="/about/careers" className="flex items-center gap-3">See open roles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
      </section>
    </main>
  );
}
