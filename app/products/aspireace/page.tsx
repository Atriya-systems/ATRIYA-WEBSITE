import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "AspireACE | ATRIYA",
  description: "Your performance, governed. An outcome-enforcing system for students. Not practice. Not guesswork.",
};

export default function AspireACEPage() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans overflow-hidden">

      {/* HERO */}
      <Hero className="border-b border-slate-50 bg-slate-950 text-white relative overflow-hidden py-32 rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12 pb-16">
          <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-black tracking-widest text-[10px] uppercase">
            Governed Learning System
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1] tracking-tight font-light uppercase">
            Your Performance <br />
            <span className="italic lowercase text-indigo-400 font-medium">Governed.</span>
          </h1>

          <div className="space-y-3 pt-8 text-2xl text-slate-300 font-light leading-relaxed">
            <p className="text-xl text-slate-400 italic">Not practice. Not guesswork.</p>
            <p className="text-white font-medium text-2xl">Execution that improves your outcome.</p>
          </div>

          <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-indigo-500 text-white font-mono text-[13px] uppercase tracking-widest font-black px-12 py-5 rounded-full hover:bg-indigo-400 transition-colors shadow-2xl mt-8">
            Start Governed Learning <ArrowRight size={16} />
          </Link>

          <div className="pt-16 border-t border-white/10 text-center font-mono text-[11px] uppercase tracking-widest text-slate-500 font-black">
            Powered by ATRIYA Constitutional Execution System
          </div>
        </div>
      </Hero>

      {/* PROBLEM */}
      <Section className="py-24 border-b border-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 font-black shadow-sm">THE PROBLEM</Badge>
            <h2 className="text-4xl md:text-5xl font-display text-slate-950 uppercase tracking-tight font-light leading-[1.1]">
              Effort Does Not <br/>
              <span className="italic lowercase text-rose-500 font-medium">Guarantee Improvement.</span>
            </h2>
            <div className="text-xl text-slate-500 font-light space-y-4 border-l-4 border-rose-100 pl-6">
              <p className="text-slate-900 font-medium">Students today:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>practice without direction</li>
                <li>repeat mistakes</li>
                <li>receive inconsistent feedback</li>
                <li>cannot predict performance</li>
              </ul>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-100 p-12 rounded-[3rem] shadow-inner space-y-8">
            <p className="text-2xl italic font-light text-rose-800 font-display leading-tight">
              "I studied for weeks<br/>and still failed."
            </p>
            <p className="text-slate-500 font-light border-t border-rose-100 pt-6">
              The problem was not effort.<br/>
              The problem was direction.
            </p>
          </div>
        </div>
      </Section>

      {/* THE SHIFT */}
      <Section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm">THE SHIFT</Badge>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight font-light leading-[1.1]">
            AspireACE changes <br/>
            <span className="italic lowercase text-indigo-600 font-medium">how learning works.</span>
          </h2>

          <div className="space-y-8 text-xl text-slate-500 font-light max-w-2xl mx-auto pt-8 text-left border-l-4 border-indigo-200 pl-8 bg-white rounded-r-[3rem] py-8 pr-8 shadow-sm">
            <p className="text-indigo-600 font-medium text-2xl">Your actions are evaluated before they count.</p>
            <p>Incorrect patterns do not propagate.</p>
            <p className="text-slate-900 font-medium">Your learning path is constrained toward improvement.</p>
          </div>

          <div className="pt-16 border-t border-slate-200 mt-8 text-3xl font-display uppercase tracking-tight text-slate-950 font-light leading-[1.2]">
            You do not just study.<br/>
            <span className="text-indigo-600 italic font-medium lowercase text-4xl mt-2 block">
              You operate within a system that enforces progress.
            </span>
          </div>
        </div>
      </Section>

      {/* WHAT IT DOES */}
      <Section className="py-24 border-b border-slate-50">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm">SYSTEM CAPABILITIES</Badge>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight font-light">
              What AspireACE <span className="italic lowercase text-indigo-600 font-medium">does.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { cap: "Evaluates responses before acceptance", desc: "Your answer is validated against correctness conditions before it counts toward your progress." },
              { cap: "Adapts difficulty dynamically", desc: "The system modulates challenge based on your demonstrated capability, not arbitrary schedule." },
              { cap: "Predicts outcomes", desc: "Real-time performance projections so you know where you stand relative to your target, at all times." },
              { cap: "Prevents repeated mistakes", desc: "Incorrect patterns are identified, blocked from reinforcing, and replaced with governed remediation paths." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-display uppercase tracking-tight text-slate-950 font-light">{item.cap}</h3>
                    <p className="text-slate-500 font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* OUTCOME */}
      <Section className="py-24 bg-slate-950 text-white relative overflow-hidden rounded-t-[4rem]">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-16">
          <div className="text-center space-y-6">
            <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-black tracking-widest text-[10px] uppercase italic">GUARANTEED OUTCOMES</Badge>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight font-light leading-[1.1]">
              What you get is <br/>
              <span className="italic lowercase text-indigo-400 font-medium">structurally inevitable.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { out: "Consistent Improvement", icon: "📈" },
              { out: "Reduced Error Repetition", icon: "✋" },
              { out: "Measurable Progression", icon: "📐" },
              { out: "Predictable Performance", icon: "🎯" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-4">
                <span className="text-4xl block">{item.icon}</span>
                <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-200 font-black">{item.out}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-slate-950 font-mono text-[13px] uppercase tracking-widest font-black px-16 py-6 rounded-full hover:bg-slate-200 transition-colors shadow-2xl">
              Start Governed Learning <ArrowRight size={16} />
            </Link>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest font-black mt-6">
              Powered by ATRIYA execution substrate
            </p>
          </div>
        </div>
      </Section>

    </main>
  );
}
