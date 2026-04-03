import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Grid } from '@/components/sections/Grid';
import { Badge } from '@/components/ui/Badge';
import { Shield, SearchCheck, Layers, Workflow, Bot, Coins } from 'lucide-react';

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Regulated AI Systems",
      icon: Shield,
      problem: "AI is deployed in environments where correctness must be provable. Errors are not just costly. They are non-compliant.",
      response: "ATRIYA enforces validation before execution. Actions that cannot meet required conditions are not allowed. Every decision is recorded and traceable.",
      outcome: ["no non-compliant execution", "complete auditability", "provable correctness"],
      compression: "AI that can be audited, not just monitored."
    },
    {
      title: "Decision Systems",
      icon: SearchCheck,
      problem: "Organizations rely on predictions and decisions that affect outcomes. Incorrect decisions lead to financial or operational loss.",
      response: "ATRIYA evaluates whether a decision meets required conditions. Only decisions that satisfy constraints are executed. Uncertain decisions are refused.",
      outcome: ["fewer incorrect decisions", "elimination of uncertain execution", "consistent decision behavior"],
      compression: "Decisions are resolved, not guessed."
    },
    {
      title: "AI Content & Output Systems",
      icon: Layers,
      problem: "AI-generated content can be inconsistent, incorrect, or unsafe. Quality cannot be guaranteed.",
      response: "ATRIYA validates outputs before they are released. Invalid or low-confidence outputs do not execute. Only admissible outputs are produced.",
      outcome: ["no low-quality output", "no unsafe content", "consistent generation standards"],
      compression: "Content that is allowed to exist, not just generated."
    },
    {
      title: "Automation & Workflows",
      icon: Workflow,
      problem: "Automated systems execute multi-step processes. Failures propagate across steps, causing cascading errors.",
      response: "Each step is validated before execution. Invalid steps do not execute. The system prevents propagation of failure.",
      outcome: ["no cascading errors", "stable workflows", "predictable execution"],
      compression: "Automation without propagation of failure."
    },
    {
      title: "Agent Systems",
      icon: Bot,
      problem: "Autonomous agents can act beyond intended scope. They may perform actions that were not explicitly permitted.",
      response: "All actions are constrained within defined boundaries. Agents cannot exceed their allowed scope. Invalid actions are refused before execution.",
      outcome: ["controlled agent behavior", "no unintended actions", "bounded execution"],
      compression: "Agents that cannot overreach."
    },
    {
      title: "AI Economics / Marketplaces",
      icon: Coins,
      problem: "AI capabilities are exchanged between participants. Transactions require fairness, correctness, and traceability.",
      response: "ATRIYA enforces governed transactions. Execution must satisfy defined conditions. All exchanges are recorded and final.",
      outcome: ["fair transactions", "traceable exchanges", "no inconsistent outcomes"],
      compression: "Value exchange that cannot be manipulated."
    }
  ];

  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans">
      
      {/* SECTION 1 - OPENING */}
      <Hero className="border-b border-slate-50 py-32 bg-slate-950 text-white rounded-b-[4rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 space-y-12 max-w-4xl mx-auto text-center pt-8 pb-16">
          <Badge className="bg-white/10 text-slate-300 font-mono text-[10px] tracking-widest uppercase py-1 px-4 border border-white/20">
            APPLICABILITY
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1] tracking-tight font-light uppercase">
            Applications of <br />
            <span className="italic lowercase text-indigo-400 font-medium">Governed Execution.</span> 
          </h1>

          <div className="space-y-8 pt-12 text-2xl font-light text-slate-400 leading-relaxed text-left border-l-[3px] border-indigo-500/30 pl-10 max-w-3xl mx-auto">
            <p className="text-white font-medium tracking-tight">ATRIYA is not built for a single use case.</p>
            <p>It is a system that applies wherever execution must be correct.</p>
            
            <p className="pt-4 text-slate-300">Use cases are not features of the system.</p>
            <p className="text-indigo-300">They are contexts where governed execution is required.</p>
            
            <p className="border-t border-white/10 pt-8 mt-8 text-[15px] font-mono uppercase tracking-widest text-white font-black leading-relaxed">
              Different problems.<br/>
              <span className="text-indigo-400">Same execution model.</span>
            </p>
          </div>
        </div>
      </Hero>

      {/* SECTION 2 - UNIVERSAL PATTERN */}
      <Section className="py-24">
         <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight font-light leading-[1.1]">
              How ATRIYA applies <br/>
              <span className="italic lowercase text-indigo-600 font-medium">to any problem.</span>
            </h2>
            
            <div className="text-2xl text-slate-500 font-light space-y-6 pt-8 max-w-3xl mx-auto">
               <p className="text-slate-900 font-medium pb-8 border-b border-slate-100">Every application follows the same structure:</p>
               
               <div className="text-left py-8 space-y-6 lg:pl-16">
                 <div className="flex gap-6 items-center">
                   <span className="text-indigo-200 font-mono text-2xl font-black w-8 shrink-0">01</span>
                   <p className="text-slate-600">A decision or action is required</p>
                 </div>
                 <div className="flex gap-6 items-center">
                   <span className="text-indigo-300 font-mono text-2xl font-black w-8 shrink-0">02</span>
                   <p className="text-slate-600">Incorrect execution carries risk</p>
                 </div>
                 <div className="flex gap-6 items-center">
                   <span className="text-indigo-400 font-mono text-2xl font-black w-8 shrink-0">03</span>
                   <p className="text-slate-900 font-medium">The system evaluates admissibility</p>
                 </div>
                 <div className="flex gap-6 items-center">
                   <span className="text-indigo-500 font-mono text-2xl font-black w-8 shrink-0">04</span>
                   <p className="text-slate-900 font-medium">Only valid execution is allowed</p>
                 </div>
                 <div className="flex gap-6 items-center">
                   <span className="text-indigo-600 font-mono text-2xl font-black w-8 shrink-0">05</span>
                   <p className="text-slate-900 font-medium">Outcomes are final and traceable</p>
                 </div>
               </div>
               
               <div className="pt-12 border-t border-slate-100 text-center font-mono text-[13px] uppercase tracking-widest text-slate-400 font-black">
                 The domain changes.<br/>
                 <span className="text-indigo-600">The execution model does not.</span>
               </div>
            </div>
         </div>
      </Section>

      {/* SECTION 3 - CORE USE CASES */}
      <Section className="bg-slate-50 border-y border-slate-100 rounded-[4rem] py-32 mb-24">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
             <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white shadow-sm font-black">CONTEXTS</Badge>
             <h2 className="text-5xl md:text-6xl font-display text-slate-950 uppercase tracking-tight font-light">Core Use Cases</h2>
          </div>
          
          <div className="space-y-16 lg:space-y-32">
             {useCases.map((uc, i) => (
                <div key={i} className="bg-white p-8 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100%] transition-transform group-hover:scale-110 -z-0"></div>
                   
                   <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                      
                      {/* HEADER */}
                      <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-16">
                         <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-8">
                            <uc.icon className="w-6 h-6 text-indigo-600" />
                         </div>
                         <h3 className="text-3xl font-display text-slate-950 uppercase tracking-tight leading-[1.1]">{uc.title}</h3>
                         <div className="pt-6 font-mono text-[10px] uppercase font-black text-indigo-500 tracking-widest leading-relaxed">
                            {uc.compression}
                         </div>
                      </div>

                      {/* CONTENT */}
                      <div className="lg:col-span-7 space-y-12">
                         
                         <div className="space-y-4">
                            <p className="font-mono text-[10px] uppercase font-black tracking-widest text-slate-400">Problem</p>
                            <p className="text-xl text-slate-600 font-light leading-relaxed">{uc.problem}</p>
                         </div>

                         <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <p className="font-mono text-[10px] uppercase font-black tracking-widest text-indigo-500 border-b border-indigo-100 pb-3 mb-4">System Response</p>
                            <p className="text-xl text-slate-900 font-medium leading-relaxed">{uc.response}</p>
                         </div>

                         <div className="space-y-4">
                            <p className="font-mono text-[10px] uppercase font-black tracking-widest text-slate-400">Inevitability / Outcome</p>
                            <ul className="text-lg text-slate-600 font-light pl-6 list-none space-y-2">
                               {uc.outcome.map((o, j) => (
                                  <li key={j} className="flex gap-4 items-center">
                                     <div className="w-1.5 h-1.5 bg-indigo-500 rounded-sm"></div>
                                     {o}
                                  </li>
                               ))}
                            </ul>
                         </div>

                      </div>

                   </div>
                </div>
             ))}
          </div>
        </div>
      </Section>

      {/* SECTION 4 - CROSS-CASE INSIGHT */}
      <Section className="py-24 border-b border-slate-50">
        <div className="bg-slate-950 rounded-[4rem] text-white p-16 lg:p-24 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="relative z-10 space-y-12">
             <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-black tracking-widest text-[10px] uppercase italic">CROSS-CASE INSIGHT</Badge>
             
             <h2 className="text-4xl md:text-6xl font-display uppercase font-light tracking-tight leading-[1.1]">
               The Same System <br/>
               <span className="italic lowercase text-indigo-400 font-medium">Across All Cases.</span>
             </h2>

             <div className="space-y-6 text-xl text-slate-400 font-light pt-8 max-w-2xl mx-auto">
               <p>Each use case appears different.</p>
               <p>But the underlying requirement is the same:</p>
               <p className="text-white font-medium py-4 text-3xl">Execution must be correct.</p>
               <p>ATRIYA does not specialize per domain.</p>
               <p className="text-slate-300">It applies the same governed execution model everywhere.</p>
             </div>

             <div className="pt-16 border-t border-white/10 mt-16 pb-4">
                <p className="font-mono text-[14px] uppercase tracking-widest text-slate-400 font-black leading-relaxed">
                  Different problems.<br/>
                  <span className="text-indigo-400">Same constraint system.</span>
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 - CLOSING */}
      <Section className="py-32 pb-48 bg-slate-50">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-center font-light leading-[1.1]">
               Where Execution <br/><span className="italic lowercase text-indigo-600 font-medium">Must Be Correct.</span>
            </h2>
            
            <div className="space-y-8 text-2xl text-slate-600 font-light max-w-2xl mx-auto border-l-4 border-indigo-200 pl-16 py-8 bg-white border border-slate-100 rounded-r-[3rem] shadow-sm">
               <p className="text-slate-900 font-medium text-3xl mb-8">ATRIYA applies wherever:</p>
               <ul className="space-y-4 text-slate-600 font-light font-sans list-none">
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>incorrect execution carries cost</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>outcomes must be reliable</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>behavior must be bounded</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>decisions must be provable</li>
               </ul>
            </div>
            
            <div className="pt-24 mt-16 text-center leading-[1.2] border-t border-slate-200 max-w-2xl mx-auto">
               <p className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-400 font-light">
                 If execution must be correct,
               </p>
               <p className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-950 pt-4 font-medium">
                 it must be <br/>
                 <span className="italic lowercase text-indigo-600">governed.</span>
               </p>
            </div>
         </div>
      </Section>

    </main>
  );
}
