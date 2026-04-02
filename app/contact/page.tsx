"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, Globe, Lock, ShieldCheck, 
  Cpu, Code2, Zap, Layout, Mail, 
  Phone, Globe2, MapPin, Send, MessageSquare, Gavel
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const engagementModes = [
    { id: "M-01", name: "P-00 Key Request", desc: "For individual developers and small builders looking to integrate the substrate P-09 SDK.", icon: Code2 },
    { id: "M-02", name: "Institutional Briefing", desc: "For nation-states and regulated entities requiring Track C Sovereign deployment.", icon: ShieldCheck },
    { id: "M-03", name: "Partner Integration", desc: "For engine-builders and model-providers looking to register into the P-19 lattice.", icon: Zap }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24 font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 border-b border-slate-50">
        <div className="max-w-5xl space-y-12">
          <div className="flex gap-4 items-center">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50 font-black">INTERACT WITH THE SUBSTRATE</Badge>
            <SectionLabel>CONTACT ATRIYA</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 tracking-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Acquire <br />
            <span className="text-indigo-600 font-medium">the Kernel.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-4xl text-slate-500 font-sans leading-tight font-light tracking-tight max-w-[8000px] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Engagement with the ATRIYA platform is governed by institutional tiering. Select your engagement track to initialize communication.
          </motion.p>
        </div>
      </section>

      {/* FORM AND INFO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-24 mb-48">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* ENGAGEMENT MODES */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
               {engagementModes.map((mode, i) => (
                 <div key={i} className="p-12 bg-slate-50 border border-slate-100 rounded-[5rem] hover:border-indigo-300 hover:bg-white transition-all shadow-sm flex flex-col justify-between min-h-[400px]">
                    <div className="space-y-12">
                       <div className="flex justify-between items-center">
                          <mode.icon size={32} className="text-indigo-600" />
                          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-100 text-indigo-400 font-black italic">{mode.id}</Badge>
                       </div>
                       <div className="space-y-6">
                          <h3 className="text-4xl font-display text-slate-950 font-medium uppercase leading-[0.9]">{mode.name}</h3>
                          <p className="text-lg text-slate-500 font-sans font-light leading-relaxed">{mode.desc}</p>
                       </div>
                    </div>
                    <Button variant="ghost" className="text-indigo-600 font-display text-xl transition-all group-hover:gap-6 flex items-center justify-start gap-4 p-0 font-light hover:bg-transparent">
                       Initialize Track <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </div>
               ))}
            </div>

            {/* CONTACT DETAILS */}
            <div className="lg:col-span-12 py-32 border-t border-slate-100">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[ 
                    { label: "Institutional Email", value: "briefing@atriya.systems", icon: Mail },
                    { label: "Technical Support", value: "substrate.help@atriya.systems", icon: MessageSquare },
                    { label: "Global Reach", value: "Bangalore / Singapore / London", icon: MapPin },
                    { label: "Regulatory Hub", value: "ATRIYA Systems India", icon: Gavel }
                  ].map((info, i) => (
                    <div key={i} className="space-y-4 border-l border-slate-100 pl-8 group hover:border-indigo-600 transition-all">
                       <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">{info.label}</h4>
                       <p className="text-sm font-sans font-medium text-slate-950 group-hover:text-indigo-600">{info.value}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
