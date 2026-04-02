"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, 
  Lock, Globe, Search, Info, Scale, PlayCircle, Cpu,
  Database, Zap, Activity, Layers, MessageSquare, LineChart,
  Fingerprint, FileCheck, History as HistoryIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function InstitutionsPage() {
  const features = [
    {
      title: 'Resource Optimization',
      description: 'Strategic mapping of institutional resources to outcome requirements, ensuring systemic efficiency across the organization.',
      icon: Cpu
    },
    {
      title: 'Insight Mapping',
      description: 'Definitive visibility into institutional performance trajectories, providing the evidence required for strategic decision-making.',
      icon: LineChart
    },
    {
      title: 'Structural Identity',
      description: 'Full white-label deployment models that align system execution with your institution\'s unique governance standards.',
      icon: Globe
    },
    {
      title: 'Engagement Integrity',
      description: 'Systemic reporting and interaction awareness protocols designed for high-stakes institutional accountability.',
      icon: MessageSquare
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl space-y-10">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">INSTITUTIONAL LAYER</Badge>
            <SectionLabel>OUTCOME CERTAINTY</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Trust as <br />
            <span className="text-indigo-600 italic font-light">Structure.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[800px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ATRIYA provides institutions with a unified accountability substrate 
            over all intelligence interactions — delivering a foundation for trust 
            where outcomes are as verifiable as the intent.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
               Request Institutional Briefing
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               View Strategy Models
            </Button>
          </motion.div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="p-10 bg-white border border-slate-200 rounded-[3rem] group hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <feature.icon size={28} />
            </div>
            <h3 className="text-2xl font-display mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-sans">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* TRANSFORMATION CASE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-3xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_70%)]"></div>
          <div className="max-w-4xl relative z-10 space-y-12">
            <SectionLabel className="border-indigo-500/30 text-indigo-400 font-bold tracking-widest">STRATEGIC TRANSFORMATION</SectionLabel>
            <h2 className="text-4xl md:text-7xl font-display leading-[1.1]">Integrity as <br />Infrastructure.</h2>
            <div className="space-y-12 text-xl md:text-2xl font-sans text-indigo-100/70 leading-relaxed italic">
              <p>
                &quot;By establishing a unified accountability substrate, we reduced 
                administrative friction across the entire organization. Our engagement 
                integrity reached peak performance in a single operational cycle.&quot;
              </p>
              <div className="flex items-center gap-6 not-italic">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 flex flex-shrink-0 items-center justify-center font-bold text-indigo-500 font-display text-2xl shadow-xl">IE</div>
                <div>
                  <div className="font-bold text-xl text-white">Director of Institutional Growth</div>
                  <div className="text-indigo-400 text-sm font-mono uppercase tracking-widest font-bold">Institutional Deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR SCALE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <SectionLabel>INSTITUTIONAL RELIABILITY</SectionLabel>
            <h2 className="text-4xl md:text-7xl font-display text-slate-950 leading-tight">Built for <br />Certainty.</h2>
            <p className="text-xl text-slate-600 font-sans leading-relaxed">
              Behind the institutional interface lies a robust substrate for 
              governance, ensuring that every interaction satisfies foundational 
              integrity standards with absolute reliability.
            </p>
            <ul className="space-y-6 pt-6">
              {[
                { title: "Strategic Resource Mapping", icon: Cpu },
                { title: "Institutional Oversight Protocols", icon: ShieldCheck },
                { title: "Verifiable Interaction History", icon: HistoryIcon }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-sm font-mono uppercase tracking-[0.2em] text-indigo-600 font-bold">
                   <item.icon className="text-indigo-400" size={16} /> {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-xl space-y-10">
             <div className="flex justify-between items-center text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-widest">
               <span>STRATEGIC_DEPLOYMENT</span>
               <span className="flex items-center gap-2 italic">
                 <span className="w-2 h-2 rounded-full bg-indigo-500" />
                 ACTIVE
               </span>
             </div>
             <div className="space-y-6">
               <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <div className="font-display font-bold text-slate-900 text-3xl mb-2 italic">Trust as Logic.</div>
                  <div className="text-sm text-slate-500 font-sans leading-relaxed">System-level accountability delivered at institutional scale.</div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                 <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 text-center">
                    <Fingerprint className="mx-auto text-indigo-600 mb-4" size={32} />
                    <div className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest">Identity</div>
                 </div>
                 <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 text-center">
                    <FileCheck className="mx-auto text-emerald-600 mb-4" size={32} />
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Evidence</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-24 pb-48">
        <h2 className="text-4xl md:text-6xl font-display text-slate-950 text-center mb-16 italic">Systemic vs. <span className="text-indigo-600">Administrative.</span></h2>
        <div className="overflow-hidden border border-slate-100 rounded-[3.5rem] shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900 text-white font-mono uppercase tracking-widest text-[10px] font-bold">
              <tr>
                <th className="p-10 border-b border-white/10 rounded-tl-[3.5rem]">Pillar</th>
                <th className="p-10 border-b border-white/10 opacity-50">Traditional Models</th>
                <th className="p-10 border-b border-white/10 text-indigo-400 rounded-tr-[3.5rem]">Institutional Substrate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-sans text-sm">
              {[
                 ["Efficiency", "Administrative Friction", "Strategic Optimization"],
                 ["Visibility", "Reactive Reporting", "Proactive Insight Mapping"],
                 ["Integrity", "Probabilistic Logs", "Verification Certificates"],
                 ["Certainty", "Configuration-Dependent", "Substrate-Enforced"]
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-10 font-bold text-slate-900 italic font-display text-xl">{row[0]}</td>
                  <td className="p-10 text-slate-400">{row[1]}</td>
                  <td className="p-10 text-indigo-600 font-bold bg-indigo-50/20 group-hover:bg-indigo-50/50 transition-colors">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 p-6 lg:p-12">
        <div className="bg-indigo-600 rounded-[4.5rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-3xl text-center items-center flex flex-col space-y-12">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_70%)]"></div>
          <div className="max-w-3xl relative z-10 space-y-10 mx-auto">
            <h2 className="text-4xl md:text-8xl font-display leading-[1.1] tracking-tight italic">Intelligence as Legacy.</h2>
            <p className="text-xl text-indigo-100/70 font-sans leading-relaxed max-w-2xl">
              Establish a foundation for institutional excellence. Deploy the substrate 
              designed for high-stakes intelligence.
            </p>
          </div>
          <Button size="lg" className="h-16 px-16 bg-white text-indigo-600 hover:bg-slate-50 rounded-full font-display shadow-2xl shadow-indigo-950 relative z-10">
             <Link href="/contact">Talk to Deployment Strategists</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
