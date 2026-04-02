"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  ArrowRight, BookOpen, FileText, 
  History, Newspaper, Zap, Scale,
  Layers, BrainCircuit
} from "lucide-react";
import Link from "next/link";

export default function ResourcesHub() {
  const sections = [
    {
      id: "blog",
      label: "LATEST FROM THE BLOG",
      title: "Thinking on AI governance.",
      content: "3 featured posts from our research and engineering teams on the constitutional substrate.",
      linkText: "Read the blog",
      href: "/blog"
    },
    {
      id: "case-studies",
      label: "CASE STUDIES",
      title: "Constitutional AI in practice.",
      content: "Deep dives into how ATRIYA-powered products like Education Platform perform in production.",
      linkText: "View case studies",
      href: "/case-studies"
    },
    {
      id: "whitepapers",
      label: "WHITEPAPERS",
      title: "Architecture & deep-tech.",
      content: "Detailed technical whitepapers on AI governance as execution physics. (Gated)",
      linkText: "Request whitepapers",
      href: "/contact"
    },
    {
      id: "changelog",
      label: "PLATFORM CHANGELOG",
      title: "Evolving the substrate.",
      content: "Release notes for ATRIYA core, architectural layers, and domain-specific adapters.",
      linkText: "View changelog",
      href: "/changelog"
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
          <SectionLabel>RESOURCES</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Writing on <br />
          <span className="text-gold">constitutional AI.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Architecture, governance, compliance, and the platform.
        </motion.p>
      </section>

      {/* HUB SECTIONS */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden shadow-2xl">
           {sections.map((section, idx) => (
             <div key={idx} className="bg-white p-12 lg:p-20 space-y-12 hover:bg-bg-secondary transition-colors group">
                <div className="space-y-6">
                   <SectionLabel>{section.label}</SectionLabel>
                   <h3 className="text-3xl md:text-5xl font-display">{section.title}</h3>
                   <p className="text-xl text-text-secondary font-sans leading-relaxed">{section.content}</p>
                </div>
                <div className="flex">
                   <Button variant="outline" className="h-14 px-8 border-border hover:border-gold hover:text-gold transition-colors">
                      <Link href={section.href} className="flex items-center gap-3">{section.linkText} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></Link>
                   </Button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* RECENT HIGHLIGHT */}
      <section className="bg-bg-tertiary rounded-[3rem] p-12 lg:p-24 border border-border flex flex-col lg:flex-row gap-24 items-center">
         <div className="space-y-10 lg:w-1/2">
            <Badge className="bg-gold text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase">FEATURED CASE STUDY</Badge>
            <h2 className="text-4xl md:text-6xl font-display">How Education Platform governs AI for education.</h2>
            <p className="text-xl text-text-secondary font-sans leading-relaxed italic">
               &quot;The same architecture that governs physics derivation in India&apos;s competitive exam 
               space is ready for healthcare and finance.&quot;
            </p>
            <Button size="lg" className="h-16 px-12">
               <Link href="/case-studies/Education Platform">Read the case study →</Link>
            </Button>
         </div>
         <div className="lg:w-1/2 h-full flex items-center justify-center">
             <div className="p-16 bg-white border border-border rounded-3xl shadow-xl rotate-3 scale-110">
                <History className="text-gold" size={120} />
             </div>
         </div>
      </section>
    </main>
  );
}
