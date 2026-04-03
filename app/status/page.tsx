"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ShieldCheck, Activity, CheckCircle2, 
  Globe, Lock, Zap, Cpu, Code2, 
  Database, Network, Terminal,
  ArrowRight, RefreshCw, BarChart3,
  Search, Info, AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function StatusPage() {
  const components = [
    { name: "N4 Substrate Kernel", status: "Operational", health: "99.99%", icon: ShieldCheck },
    { name: "P-19 Orchestration Layer", status: "Operational", health: "99.98%", icon: Network },
    { name: "P-04 Audit & Provenance", status: "Operational", health: "100.00%", icon: Database },
    { name: "Global Registry (P-01)", status: "Operational", health: "99.99%", icon: Globe },
    { name: "API V3 Gateway", status: "Operational", health: "99.95%", icon: Terminal }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-5xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-green-200 text-green-600 bg-green-50/50 font-black italic">GLOBAL HEALTH HEARTBEAT</Badge>
            <SectionLabel>SYSTEM STATUS</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Substrate <br />
            <span className="text-green-600 font-medium">Certainty.</span>
          </motion.h1>

          <motion.div 
            className="flex items-center gap-6 p-8 bg-green-50 border border-green-100 rounded-[3rem] w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
             <div className="h-4 w-4 bg-green rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
             <p className="text-2xl font-display text-green-950 font-medium italic">All Substrate Primitives are Normal.</p>
          </motion.div>
        </div>
      </section>

      {/* COMPONENTS GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-24 mb-48">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((comp, i) => (
              <div key={i} className="p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[3rem] md:rounded-[4rem] hover:border-indigo-300 transition-all flex flex-col justify-between min-h-[350px]">
                 <div className="space-y-12">
                    <div className="flex justify-between items-start">
                       <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all">
                          <comp.icon size={28} />
                       </div>
                       <div className="flex flex-col items-end gap-1 font-mono italic">
                          <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">{comp.status}</p>
                          <p className="text-[9px] text-slate-400 uppercase tracking-widest">{comp.health}</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-display text-slate-950 font-medium uppercase tracking-tight">{comp.name}</h3>
                    </div>
                 </div>
                 <div className="pt-8 border-t border-slate-200/50 flex justify-between items-center text-[10px] font-mono text-slate-400 font-black uppercase tracking-widest leading-none">
                    <span>99.9% Provable Uptime</span>
                    <BarChart3 size={16} />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* RECENT INCIDENTS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center space-y-12 mb-48 italic">
         <div className="p-16 border border-slate-100 rounded-[4rem] bg-slate-50/50 space-y-10">
            <Info size={32} className="mx-auto text-slate-300" />
            <p className="text-xl text-slate-400 font-sans font-light leading-relaxed">
               No recent incidents reported. Our governance substrate is engineered for physical fault-tolerance.
            </p>
         </div>
      </section>
    </main>
  );
}
