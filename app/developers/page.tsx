"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import {
   Terminal, Code2, Cpu, Globe, Lock, Shield, 
   Zap, ArrowRight, BookOpen, Layers,
   Database, Network, Command, Boxes
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DevelopersPage() {
   const sdks = [
      { name: "Node.js SDK", lang: "JavaScript / TypeScript", version: "v0.9.4", icon: Terminal },
      { name: "Python Core", lang: "Python 3.9+", version: "v1.2.0", icon: Code2 },
      { name: "Go Substrate", lang: "Go 1.21+", version: "v0.4.1", icon: Boxes }
   ];

   const endpoints = [
      { method: "POST", path: "/v3/governance/intercept", desc: "Intercept and verify an intent bundle against constitutional axioms." },
      { method: "GET", path: "/v3/provenance/trace/{hash}", desc: "Retrieve the Merkle-anchored audit trail for a specific decision." },
      { method: "POST", path: "/v3/entities/model", desc: "Query the 7-dimensional cognitive state of a registered entity." }
   ];

   return (
      <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         {/* HERO */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-12 space-y-12">
                  <div className="flex gap-4 items-center">
                     <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">DEVELOPER HUB v3.0</Badge>
                     <SectionLabel>BUILD ON THE SUBSTRATE</SectionLabel>
                  </div>
                  
                  <motion.h1 
                     className="text-6xl md:text-8xl font-display leading-[1.1] text-slate-950 tracking-tight font-light"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                   >
                     Engineered for <br />
                     <span className="text-indigo-600 font-medium">Builders.</span>
                  </motion.h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <p className="text-xl md:text-2xl text-slate-500 font-sans leading-relaxed font-light max-w-2xl">
                       Integrate ATRIYA’s non-bypassable governance kernel into any agentic workflow. P-09 SDK provides the deterministic harness for provable intelligence.
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <Button size="lg" className="h-16 px-12 bg-slate-950 text-white rounded-full font-display transition-all hover:bg-indigo-600">
                          <Link href="#" className="flex items-center gap-4">Read Documentation <BookOpen size={18} /></Link>
                       </Button>
                       <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 rounded-full font-display flex items-center gap-4">
                          <Terminal size={18} /> View on Repository
                       </Button>
                    </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SDK CLUSTER */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24">
            <div className="space-y-8">
               <SectionLabel className="border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">P-09 — SYSTEM SDKS</SectionLabel>
               <h2 className="text-5xl md:text-7xl font-display text-slate-950 tracking-tight leading-none font-light">Language <span className="text-slate-400 font-medium">Matrices.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {sdks.map((sdk, i) => (
                 <div key={i} className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] hover:border-indigo-300 transition-all group flex flex-col justify-between min-h-[350px]">
                    <div className="space-y-12">
                       <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                          <sdk.icon size={28} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-3xl font-display text-slate-950 font-medium">{sdk.name}</h3>
                          <div className="flex flex-col gap-2">
                             <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black leading-none">{sdk.lang}</p>
                             <p className="text-[10px] font-mono text-indigo-400 font-black italic">{sdk.version}</p>
                          </div>
                       </div>
                    </div>
                    <Link href="#" className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-black hover:gap-4 flex items-center gap-2 transition-all">Install Library →</Link>
                 </div>
               ))}
            </div>
         </section>

         {/* API EXPLORER (MOCKUP) */}
         <section className="relative z-10 px-6 lg:px-12 py-32 bg-slate-950 rounded-[5rem] mx-4 lg:mx-8 overflow-hidden shadow-4xl mb-48">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_60%)]"></div>
            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
               <div className="lg:col-span-5 space-y-12">
                  <SectionLabel className="border-indigo-500 text-indigo-400 font-black">CORE API V3</SectionLabel>
                  <h2 className="text-5xl md:text-8xl font-display text-white tracking-tight leading-none font-light italic">The Governance <br /><span className="text-indigo-400 font-medium not-italic">REST Layer.</span></h2>
                  <p className="text-xl text-indigo-100/60 font-sans leading-relaxed font-light">
                     Every product within the catalogue is accessible via a unified JSON-RPC or REST interface. Constitutional rules are enforced at the gateway.
                  </p>
                  <div className="space-y-8 pt-8">
                     {endpoints.map((ep, i) => (
                        <div key={i} className="flex gap-6 items-start border-l border-white/10 pl-8 group">
                           <div className="text-xs font-mono text-indigo-400 font-black py-1 px-3 bg-indigo-500/10 rounded">{ep.method}</div>
                           <div className="space-y-2">
                              <p className="text-sm font-mono text-white tracking-tight">{ep.path}</p>
                              <p className="text-xs text-indigo-100/40 leading-relaxed font-light">{ep.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:col-span-7 bg-white/5 rounded-[4rem] border border-white/10 p-12 backdrop-blur-3xl">
                  <div className="flex gap-2 mb-8">
                     {[1,2,3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-white/20" />)}
                  </div>
                  <pre className="text-indigo-200 font-mono text-xs overflow-x-auto leading-loose">
{`const atriya = require('@Atriya-systems/core');

const client = new atriya.Client({
  subscription: 'T3-SOVEREIGN',
  axiom_registry: ['DATA_RESIDENCY', 'DECISION_CLEANSE']
});

// Intercept and Verify
const result = await client.verify({
  prompt: "Synthesize bond yield counterfactuals",
  metadata: { entity_id: 'E-4819', tier: 'P-11' }
});

console.log(result.signature); 
// 0x9f1a2... [COMMIT_APPROVED]`}
                  </pre>
               </div>
            </div>
         </section>

         {/* FINAL ACTION */}
         <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center space-y-16">
            <h2 className="text-6xl md:text-9xl font-display leading-[0.8] text-slate-950 tracking-tight font-light text-center">Start <br /><span className="text-indigo-600 font-medium">Interacting.</span></h2>
            <div className="flex justify-center gap-6 pt-12">
               <Button size="lg" className="h-28 px-24 bg-slate-950 text-white rounded-full shadow-2xl font-display text-3xl transition-all hover:scale-105">
                  <Link href="/contact" className="italic font-light">Acquire API Key</Link>
               </Button>
            </div>
         </section>
      </main>
   );
}
