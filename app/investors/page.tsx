import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Badge } from '@/components/ui/Badge';
import { TrendingUp, Shield, Globe, Layers, Lock, BarChart3 } from 'lucide-react';

export const metadata = {
  title: "Investor Overview | ATRIYA",
  description: "Constitutional Execution Systems — category, moat, and scale. ATRIYA is the execution layer for intelligent systems.",
};

export default function InvestorsPage() {
  return (
    <main className="relative bg-slate-950 text-white selection:bg-indigo-500/30 min-h-screen pt-24 font-sans">
      
      {/* BG GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HERO */}
      <Hero className="border-b border-white/10 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-black tracking-widest text-[10px] uppercase">
            INVESTOR OVERVIEW
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1] tracking-tight font-light uppercase">
            The Execution Layer <br />
            <span className="italic lowercase text-indigo-400 font-medium">for Intelligent Systems.</span>
          </h1>

          <p className="text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            ATRIYA is not a system that improves AI. <br />
            <span className="text-white font-medium">It is the system that determines whether AI is allowed to act.</span>
          </p>

          <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto">
            <p className="font-mono text-[13px] uppercase tracking-widest text-slate-500 font-black">
              Category: Constitutional Execution Systems
            </p>
          </div>
        </div>
      </Hero>

      {/* SECTION 1: CATEGORY */}
      <Section className="py-24 border-b border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-white/5 text-slate-300 border-white/10 font-black tracking-widest text-[10px] uppercase">01 — CATEGORY</Badge>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight font-light leading-[1.1]">
              A New Category <br/>
              <span className="text-indigo-400 italic font-medium lowercase">Not a new product.</span>
            </h2>
            <div className="space-y-6 text-xl text-slate-400 font-light">
              <p>ATRIYA defines <span className="text-white font-medium">Constitutional Execution Systems</span> — a category that did not exist before.</p>
              <p className="border-l-2 border-indigo-500/40 pl-6 space-y-2">
                <span className="block text-slate-500 line-through decoration-rose-500/50">AI tools</span>
                <span className="block text-slate-500 line-through decoration-rose-500/50">SaaS platforms</span>
                <span className="block text-white font-medium mt-3 no-underline">Systems that govern execution itself</span>
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] space-y-6">
            <Layers className="w-10 h-10 text-indigo-400" />
            <h3 className="text-2xl font-display uppercase tracking-tight font-light">What this means for markets</h3>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Category creation commands outsized returns. Every critical domain deploying AI becomes a market for governed execution.
            </p>
            <div className="pt-6 border-t border-white/10 font-mono text-[12px] uppercase tracking-widest text-indigo-300 font-black leading-relaxed">
              One system.<br/>Every domain that requires correctness.
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: PROBLEM */}
      <Section className="py-24 border-b border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="bg-white/5 text-slate-300 border-white/10 font-black tracking-widest text-[10px] uppercase">02 — MARKET PROBLEM</Badge>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight font-light">
              AI Systems Today <br/>
              <span className="text-rose-400 italic font-medium lowercase">Cannot Be Trusted.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Probabilistic", desc: "Outputs depend on probability, not guaranteed correctness." },
              { label: "Unsafe at Scale", desc: "Errors multiply as deployment scales." },
              { label: "Non-Deterministic", desc: "Same input can produce different outputs." },
              { label: "Non-Auditable", desc: "Decisions cannot be traced or proven." },
            ].map((item, i) => (
              <div key={i} className="bg-rose-950/20 border border-rose-500/20 p-8 rounded-[2rem] space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-rose-400 font-black">{item.label}</p>
                <p className="text-sm text-slate-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center py-8">
            <p className="text-2xl font-display uppercase tracking-tight text-slate-400 font-light">
              Cannot be trusted in critical domains.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 3: SOLUTION */}
      <Section className="py-24 border-b border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-black tracking-widest text-[10px] uppercase italic">03 — SOLUTION</Badge>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight font-light">
              ATRIYA: Structural <br/>
              <span className="text-indigo-400 italic font-medium lowercase">Correctness Enforcement.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Pre-Execution Validation", desc: "Every action is evaluated before it occurs.", icon: Shield },
              { label: "Unsafe Execution Eliminated", desc: "Invalid actions are refused before they produce output.", icon: Lock },
              { label: "Guaranteed Traceability", desc: "Every admitted action is permanently recorded.", icon: BarChart3 },
              { label: "Deterministic Outcomes", desc: "Same conditions always produce the same result.", icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="bg-indigo-950/30 border border-indigo-500/20 p-8 rounded-[2rem] space-y-4">
                <item.icon className="w-8 h-8 text-indigo-400" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-300 font-black">{item.label}</p>
                <p className="text-sm text-slate-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 4: MOAT */}
      <Section className="py-24 border-b border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="bg-white/5 text-slate-300 border-white/10 font-black tracking-widest text-[10px] uppercase">04 — COMPETITIVE MOAT</Badge>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight font-light">
              The Moat Is <br/>
              <span className="text-indigo-400 italic font-medium lowercase">Structural.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-400 font-black border-b border-white/10 pb-4">Structural</p>
              <ul className="space-y-4 text-slate-300 text-lg font-light">
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-1">→</span>Execution gating (non-bypassable)</li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-1">→</span>Deterministic model</li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-1">→</span>Refusal-first architecture</li>
              </ul>
            </div>

            <div className="bg-indigo-950/30 border border-indigo-500/30 p-10 rounded-[3rem] space-y-6 shadow-2xl">
              <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-300 font-black border-b border-indigo-500/20 pb-4">Conceptual</p>
              <ul className="space-y-4 text-slate-200 text-lg font-light">
                <li className="flex gap-3 items-start"><span className="text-indigo-400 font-bold mt-1">→</span>Governance as substrate</li>
                <li className="flex gap-3 items-start"><span className="text-indigo-400 font-bold mt-1">→</span>Not a layer on top — the layer itself</li>
                <li className="flex gap-3 items-start"><span className="text-indigo-400 font-bold mt-1">→</span>Cannot be replicated without rebuilding from the substrate</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-400 font-black border-b border-white/10 pb-4">Practical</p>
              <ul className="space-y-4 text-slate-300 text-lg font-light">
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-1">→</span>Applies across all domains</li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-1">→</span>No specialization required per vertical</li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-1">→</span>Execution model is universal</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: EXPANSION MODEL */}
      <Section className="py-24 border-b border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="bg-white/5 text-slate-300 border-white/10 font-black tracking-widest text-[10px] uppercase">05 — EXPANSION MODEL</Badge>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight font-light">
              One System. <br/>
              <span className="text-indigo-400 italic font-medium lowercase">Multiple Markets.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-center">
              {[
                { label: "Core System", sub: "Constitutional Execution Engine" },
                { label: "Bundles", sub: "Domain-specific access configurations" },
                { label: "Products", sub: "Vertically packaged interfaces" },
                { label: "Verticals", sub: "Education · Finance · Healthcare · Enterprise · Government" },
              ].map((node, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-2xl min-w-[160px]">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white font-black">{node.label}</p>
                    <p className="text-[10px] text-slate-500 font-light mt-1">{node.sub}</p>
                  </div>
                  {i < 3 && (
                    <div className="text-slate-500 font-mono text-xl md:mx-4 rotate-90 md:rotate-0">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: MARKET */}
      <Section className="py-24 border-b border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge className="bg-white/5 text-slate-300 border-white/10 font-black tracking-widest text-[10px] uppercase">06 — ADDRESSABLE MARKET</Badge>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight font-light">
              Every Domain <br/>
              <span className="text-indigo-400 italic font-medium lowercase">Requiring Correctness.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Education", icon: "📐" },
              { label: "Finance", icon: "📊" },
              { label: "Healthcare", icon: "🏥" },
              { label: "Enterprise AI", icon: "🏛" },
              { label: "Government", icon: "⚖️" },
            ].map((market, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors p-8 rounded-3xl flex flex-col items-center text-center gap-4">
                <span className="text-3xl">{market.icon}</span>
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-300 font-black">{market.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-slate-400 font-light">
              The execution layer for any system where incorrect execution carries cost.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 7: END STATE */}
      <Section className="py-32 pb-48 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-black tracking-widest text-[10px] uppercase italic">07 — END STATE</Badge>

          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight font-light leading-[1.1]">
              ATRIYA becomes <br/>
              <span className="italic lowercase text-indigo-400 font-medium">the execution layer.</span>
            </h2>
            <p className="text-2xl text-slate-400 font-light">for every intelligent system that must be correct.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 lg:p-20 rounded-[4rem] space-y-10 shadow-2xl backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-display uppercase tracking-tight font-light text-white leading-[1.15]">
              You didn't see a product.<br/>
              <span className="italic lowercase text-indigo-400 font-medium">You encountered the infrastructure.</span>
            </p>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              ATRIYA is not a system that improves AI. It is the system that determines whether AI is allowed to act.
            </p>
          </div>

          <div className="pt-8">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-slate-950 font-mono text-[13px] uppercase tracking-widest font-black px-16 py-6 rounded-full hover:bg-slate-200 transition-colors shadow-2xl">
              Request Investor Access
            </Link>
          </div>
        </div>
      </Section>

    </main>
  );
}
