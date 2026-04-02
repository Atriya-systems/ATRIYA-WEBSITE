"use client";

import * as React from "react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import {
   Search, Menu, X, ChevronRight, Book, 
   Code2, Terminal, Zap, ShieldCheck, 
   Database, Layers, Activity, Lock,
   Workflow, FileText, Cpu, FlaskConical,
   Fingerprint, Gavel, Scale, HistoryIcon,
   ArrowRight
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function DocsPage() {
   const [activeSection, setActiveSection] = useState("Introduction");

   const sections = [
      {
         title: "Getting Started",
         items: ["Introduction", "Quickstart", "API Authentication", "Environment Tiers"]
      },
      {
         title: "Core Primitives",
         items: ["P-04 Audit Logic", "P-03 Constitutional Axioms", "P-19 Orchestration", "P-10 Cognitive Twin"]
      },
      {
         title: "Institutional Tracks",
         items: ["Track B Execution", "Track C Sovereign", "Verification Proofs"]
      },
      {
         title: "SDK Reference",
         items: ["Node.js Reference", "Python Core", "Go Substrate"]
      }
   ];

   const contentMap: any = {
      "Introduction": {
         h1: "Technical Introduction",
         desc: "The ATRIYA Substrate is an execution environment that enforces constitutional axioms on every AI-driven intent. This documentation provides the technical primitives for builder integration.",
         p: "Unlike traditional 'guardrail' solutions that filter outputs, ATRIYA intercepts intents at the substrate level, ensuring non-bypassable governance before execution occurs."
      },
      "P-04 Audit Logic": {
         h1: "P-04 — SHA-256 Audit Trail",
         desc: "Every intent processed by the substrate generates a Merkle-anchored audit trail.",
         p: "The P-04 primitive cryptographically binds the metadata of the intent, the governing axiom, and the resulting execution into a single hash. This allows for permanent, third-party verification of system integrity."
      },
      "P-03 Constitutional Axioms": {
         h1: "P-03 — Axiom Engineering",
         desc: "Axioms are the deterministic rules that govern model behavior within the substrate.",
         p: "Constitutional Axioms are written in a structured declarative format. They represent the 'Physics' of the system—if an intent violates an axiom, it structurally cannot execute."
      }
   };

   const current = contentMap[activeSection] || contentMap["Introduction"];

   return (
      <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans flex">
         {/* SIDEBAR */}
         <aside className="w-80 border-r border-slate-100 h-screen sticky top-24 overflow-y-auto hidden lg:block bg-slate-50/50 backdrop-blur-xl">
            <div className="p-8 space-y-12">
               <div className="relative">
                  <Search size={14} className="absolute left-3 top-3 text-slate-400" />
                  <input 
                     type="text" 
                     placeholder="Search docs..." 
                     className="w-full bg-white border border-slate-200 rounded-lg pl-9 p-2 text-[11px] font-mono focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                  />
               </div>
               
               <div className="space-y-10">
                  {sections.map((section, i) => (
                    <div key={i} className="space-y-4">
                       <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest px-2 italic">{section.title}</h4>
                       <div className="space-y-1">
                          {section.items.map((item, j) => (
                            <button 
                               key={j} 
                               onClick={() => setActiveSection(item)}
                               className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${activeSection === item ? 'bg-indigo-600 text-white shadow-xl translate-x-1' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950'}`}
                            >
                               {item}
                               <ChevronRight size={12} className={`transition-opacity ${activeSection === item ? 'opacity-100' : 'opacity-0'}`} />
                            </button>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </aside>

         {/* CONTENT */}
         <div className="flex-1 overflow-y-auto h-screen p-8 lg:p-24 pb-48">
            <div className="max-w-4xl space-y-12">
               <div className="flex gap-4 items-center">
                  <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 font-black italic">DOCS v3.0</Badge>
                  <SectionLabel>{activeSection.toUpperCase()}</SectionLabel>
               </div>
               
               <motion.div 
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
               >
                  <h1 className="text-5xl md:text-8xl font-display leading-none text-slate-950 font-light tracking-tight">{current.h1}</h1>
                  <p className="text-2xl md:text-3xl text-slate-500 font-sans leading-relaxed font-light tracking-tight">
                     {current.desc}
                  </p>
                  
                  <div className="prose prose-slate prose-xl max-w-none font-sans font-light text-slate-600 space-y-8">
                     <p>{current.p}</p>
                     
                     <div className="bg-slate-950 rounded-[3rem] p-12 text-indigo-100 font-mono text-sm space-y-8 relative overflow-hidden group shadow-4xl mb-12">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><Code2 size={128} /></div>
                        <div className="flex justify-between items-center pb-6 border-b border-white/10 italic">
                           <span className="text-xs uppercase tracking-widest font-black opacity-50">Example Payload — {activeSection}</span>
                           <span className="text-[10px] bg-white/10 px-2 py-1 rounded">JSON</span>
                        </div>
<pre className="overflow-x-auto">
{`{
  "substrate_id": "SBI-DOM-001",
  "intent": {
    "action": "QUERY_RISK_LATTICE",
    "parameters": { "dim": "P-11", "target": "E-481" }
  },
  "governance": {
    "axiom_ref": "AXIOM_REDUCER_09",
    "verification_mode": "DETERMINISTIC"
  }
}`}
</pre>
                     </div>
                  </div>

                  <div className="space-y-8 pt-12 border-t border-slate-100">
                     <h4 className="text-sm font-mono font-black text-slate-400 uppercase tracking-widest italic">Related Primitives</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                           { id: "P-19", name: "Orchestration" },
                           { id: "P-04", name: "Audit Trail" }
                        ].map((rel, i) => (
                           <div key={i} className="flex gap-4 items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer group">
                              <Badge className="bg-indigo-100 text-indigo-600 border-0 font-mono text-[9px] font-black italic">{rel.id}</Badge>
                              <span className="text-sm font-sans font-medium text-slate-950 group-hover:text-indigo-600">{rel.name}</span>
                              <ArrowRight size={14} className="ml-auto text-indigo-200 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </main>
   );
}
