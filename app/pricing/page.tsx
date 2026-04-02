"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  CheckCircle2, ArrowRight, Zap, Globe, Lock, 
  ShieldCheck, Cpu, Code2, Layers, Database,
  Terminal, Activity, Workflow, DatabaseZap,
  Globe2, Server, Cloud, Boxes, Layout,
  Coins, BarChart3, LineChart, Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPage() {
  const tiers = [
    {
      id: "T-01",
      name: "Starter P-00",
      price: "$0",
      desc: "Community access to the core substrate for individual developers and small builders.",
      features: ["P-09 SDK Access", "100 Verifications / mo", "Public Trace Console", "Community Forum Support"],
      cta: "Get P-00 Key",
      popular: false
    },
    {
      id: "T-02",
      name: "Professional L2",
      price: "Custom",
      desc: "The standard for growing businesses. Access to specialized Solution Bundles (BS-01 to BS-07).",
      features: ["All T-01 Features", "Unlimited Verifications", "Solution Adapters (Academic/Finance)", "Priority API Throughput", "Institutional Branding"],
      cta: "Request Demo",
      popular: true
    },
    {
      id: "T-03",
      name: "Sovereign L3",
      price: "Institutional",
      desc: "For nation-states and high-stakes institutions requiring dedicated, air-gapped infrastructure.",
      features: ["All T-02 Features", "On-Prem / Sovereign Cloud", "Custom Constitutional Axioms", "ZK-Proof Audit Trails", "24/7 Dedicated Support", "Governance Track C Participation"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-5xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">MARKET v3.0</Badge>
            <SectionLabel>PRICING & TIERS</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Engagement <br />
            <span className="text-indigo-600 font-medium">Tracks.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-3xl text-slate-500 font-sans leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A multi-layer engagement model designed for sovereign growth — from self-serve 
            API access (P-00) to air-gapped institutional substrates.
          </motion.p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {tiers.map((tier, i) => (
             <div key={i} className={`p-12 border rounded-[4rem] flex flex-col justify-between min-h-[700px] transition-all group ${tier.popular ? 'bg-slate-950 text-white border-slate-950 shadow-4xl scale-105 z-20' : 'bg-slate-50 border-slate-100 hover:border-indigo-300 z-10'}`}>
                <div className="space-y-12">
                   <div className="flex justify-between items-center">
                      <Badge variant="outline" className={`font-mono text-[10px] tracking-widest font-black uppercase italic ${tier.popular ? 'border-indigo-500 text-indigo-400' : 'border-indigo-100 text-indigo-400'}`}>{tier.id}</Badge>
                      {tier.popular && <Badge className="bg-indigo-600 text-white border-0 font-mono text-[9px] uppercase tracking-widest font-black italic">MOST DEPLOYED</Badge>}
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-4xl font-display font-medium tracking-tight whitespace-nowrap">{tier.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-display font-light">{tier.price}</span>
                        {tier.price !== "Custom" && tier.price !== "Institutional" && <span className={`text-[10px] font-mono font-black uppercase tracking-widest ${tier.popular ? 'text-indigo-400' : 'text-slate-400'}`}>/ Month</span>}
                      </div>
                      <p className={`text-lg font-sans font-light leading-relaxed ${tier.popular ? 'text-indigo-100/60' : 'text-slate-500'}`}>{tier.desc}</p>
                   </div>
                   <div className="space-y-6 pt-12 border-t border-indigo-500/10">
                      {tier.features.map((feature, j) => (
                        <div key={j} className="flex gap-4 items-center group/item">
                           <CheckCircle2 size={20} className={tier.popular ? 'text-indigo-400 group-hover/item:text-white transition-colors' : 'text-indigo-600'} />
                           <p className={`text-sm font-sans font-light tracking-tight ${tier.popular ? 'text-white' : 'text-slate-950 font-medium'}`}>{feature}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <Button className={`h-20 w-full rounded-full font-display text-xl transition-all font-light ${tier.popular ? 'bg-indigo-600 text-white hover:bg-white hover:text-slate-950' : 'bg-slate-950 text-white hover:bg-indigo-600'}`}>
                  <Link href="/contact" className="italic">{tier.cta}</Link>
                </Button>
             </div>
           ))}
        </div>
      </section>

      {/* THE COMMERCIAL REGISTRY (MOCKUP OF P-XX) */}
      <section className="relative z-10 px-6 lg:px-12 py-32 bg-slate-950 rounded-[5rem] mx-4 lg:mx-8 overflow-hidden shadow-4xl mb-48">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_70%)]"></div>
         <div className="max-w-7xl mx-auto relative z-10 space-y-24">
            <div className="max-w-4xl space-y-8">
               <SectionLabel className="border-indigo-500 text-indigo-400 font-black">ADD-ON REGISTRY</SectionLabel>
               <h2 className="text-5xl md:text-9xl font-display text-white tracking-tight leading-none font-light italic">The Registry <br /><span className="text-indigo-400 font-medium not-italic">of Value.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ 
                { id: "P-19", name: "Orchestration Layer", price: "$299/mo", icon: Workflow },
                { id: "P-11", name: "Outcome Prediction", price: "$499/mo", icon: LineChart },
                { id: "P-10", name: "Cognitive Twin (SPRE)", price: "$999/mo", icon: Fingerprint },
                { id: "P-04", name: "Audit Trail (SHA-256)", price: "$199/mo", icon: DatabaseZap }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-indigo-500/30 transition-all space-y-8 group">
                   <div className="h-12 w-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <item.icon size={24} />
                   </div>
                   <div className="space-y-2">
                      <Badge variant="outline" className="text-[9px] font-mono text-indigo-400 font-black border-indigo-400/30 italic">{item.id}</Badge>
                      <h4 className="text-xl font-display text-white font-medium uppercase">{item.name}</h4>
                      <p className="text-xs font-mono text-indigo-400 font-black italic">{item.price}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* FINAL ACTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16">
         <h2 className="text-6xl md:text-[10rem] font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center italic">Initialize <br /><span className="text-indigo-600 font-medium not-italic">Selection.</span></h2>
         <div className="flex justify-center pt-12">
            <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-4xl font-display text-3xl transition-all hover:bg-indigo-600">
               <Link href="/contact" className="italic font-light">Acquire API Key</Link>
            </Button>
         </div>
      </section>
    </main>
  );
}
