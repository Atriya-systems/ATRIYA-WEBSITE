"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Heart, Sparkles, Activity, ShieldCheck, 
  Wind, Zap, Info, ArrowRight, CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WellnessOSPage() {
  const capabilities = [
    {
      title: "Engagement Diagnostics",
      description: "Passive diagnostics that sense interaction patterns to ensure cognitive load remains balanced without infringing on user privacy.",
      stat: "Dynamic Response"
    },
    {
      title: "Sustainability Monitoring",
      description: "Real-time wellness markers mapping behavioral shifts to cognitive load and engagement status across the vertical.",
      stat: "High Fidelity"
    },
    {
      title: "Adaptive Pacing",
      description: "Context-aware adjustments including autonomous focus intervals and system pacting during detected high-effort periods.",
      stat: "Calibrated Trigger"
    },
    {
      title: "Resilience Protocols",
      description: "Built-in protocols that reframe system interaction before detailed evaluation, prioritizing the cognitive state of the user.",
      stat: "System-Wide"
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 overflow-hidden min-h-screen pt-24">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="flex gap-4 items-center mb-8">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-indigo-200 text-indigo-600 bg-indigo-50/50">PLATFORM LAYER</Badge>
            <SectionLabel>COGNITIVE WELLNESS</SectionLabel>
          </div>
          
          <motion.h1 
            className="text-6xl md:text-9xl font-display leading-[0.9] text-slate-950 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Wellness as <span className="text-indigo-600 italic font-light">Physics.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-sans max-w-[750px] leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The industry&apos;s first cognitive health substrate that treats 
            sustainability as a first-class feature. Governing interaction 
            dynamics to ensure high-performance execution remains 
            harmonious and responsible by design.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
              <Link href="/contact">Request Integration Brief</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
              <Link href="/compliance">View Sovereignty Protocol</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel className="text-indigo-400">CORE PHILOSOPHY</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-display text-white mt-8 mb-10 leading-tight">Systemic Integrity.</h2>
              <p className="text-indigo-100/70 text-xl leading-relaxed mb-12">
                Legacy systems optimize for retention and high-velocity 
                engagement loops. Our Wellness substrate optimizes for 
                <span className="text-white italic"> Cognitive Recovery.</span> 
              </p>
              <div className="space-y-8">
                {[
                  "Pioneering sustainability metrics as structural performance indicators.",
                  "Predictive burnout diagnostics via integrated interaction awareness.",
                  "Zero context leakage: Engagement signals remain isolated from core data functions.",
                  "Passive monitoring: No sensory surveillance, only interaction state diagnostics."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-indigo-500 transition-colors">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-indigo-100/80 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3.5rem] border border-white/10 relative group shadow-2xl">
              <div className="mb-8 flex justify-between items-center text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest">
                <span>GOVERNANCE_STATE_PROBE</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">OPERATIONAL</span>
              </div>
              <div className="space-y-6 font-mono text-xs">
                <div className="flex justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                   <span className="text-slate-400">INTERACTION_PATTERN</span>
                   <span className="text-indigo-300">CALIBRATED</span>
                </div>
                <div className="flex justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                   <span className="text-slate-400">RESOURCE_ALLOCATION</span>
                   <span className="text-emerald-400">OPTIMIZED</span>
                </div>
                <div className="flex justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                   <span className="text-slate-400">RECOVERY_PROTOCOL</span>
                   <span className="text-indigo-400 italic">ACTIVE_BASELINE</span>
                </div>
                <div className="p-8 bg-black/40 border border-white/5 rounded-2xl">
                  <div className="flex justify-between mb-4 uppercase tracking-widest text-slate-500 text-[10px]">
                    <span>SYSTEM_SUSTAINABILITY</span>
                    <span className="text-white">OPTIMAL_STATE</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[100%] transition-all duration-1000 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities */}
      <section className="relative z-10 py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <SectionLabel>PERFORMANCE PILLARS</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display text-slate-950">Structural Stability.</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Sustainability and high-stakes performance are two halves of the 
            same architecture. By embedding these systems into the core substrate, 
            we ensure institutional stability at scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 flex flex-col justify-between h-full">
              <div className="mb-8">
                <div className="text-indigo-600 font-mono text-[10px] mb-6 uppercase tracking-widest font-bold">SYSTEM_PILLAR</div>
                <h3 className="text-2xl font-bold font-sans text-slate-900 mb-4">{cap.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{cap.description}</p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-auto">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Target Outcome</div>
                <div className="text-xl font-bold text-slate-950 font-display">{cap.stat}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional View */}
      <section className="relative z-10 py-32 bg-indigo-50/50 overflow-hidden border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <SectionLabel>COHORT INTELLIGENCE</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display text-slate-950">Institutional Insights.</h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              For organizations, we provide anonymized, high-level indicators of 
              cohort wellbeing. Understand engagement trends and prevent attrition 
              via systemic calibration before it impacts collective outcomes.
            </p>
            
            <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl overflow-hidden border border-indigo-200 inline-block w-full max-w-2xl transform hover:scale-[1.01] transition-transform">
              <div className="bg-slate-900 p-8 flex items-center justify-between rounded-t-[3rem]">
                <span className="text-white font-display text-lg">System Wellbeing Console</span>
                <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded-full border border-emerald-500/20 uppercase tracking-widest">STABLE_STATE</span>
              </div>
              <div className="p-12 space-y-10">
                {[
                  { label: "Aggregate Recovery Index", value: "OPTIMAL", color: "bg-indigo-600" },
                  { label: "Cognitive Density Calibration", value: "BALANCED", color: "bg-indigo-400" },
                  { label: "Engagement Receptivity", value: "HIGH", color: "bg-emerald-500" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-600 font-sans tracking-tight">{stat.label}</span>
                      <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 tracking-wider text-[10px]">{stat.value}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                       <div className={`${stat.color} h-full w-full opacity-80`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment CTA */}
      <section className="relative z-10 py-32 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <SectionLabel>GOVERNANCE UPGRADE</SectionLabel>
          <h2 className="text-4xl md:text-7xl font-display text-slate-950">Scale Sustainably.</h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Enhance your deployment with specialized wellness diagnostics, 
            ensuring high-performance engagement remains structural and 
            responsible.
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-100 font-display">
              Request System Consultation
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-display">
               Compliance Standards
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
