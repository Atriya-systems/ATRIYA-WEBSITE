import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Flow } from '@/components/sections/Flow';
import { Badge } from '@/components/ui/Badge';
import { FileSignature, RefreshCw } from 'lucide-react';
import { ThesisDivider, MasterAxiom, VerdictStamp } from '@/components/CreativeStamps';
import { Diagram_FailureModel } from '@/components/SystemDiagrams';

export default function ExecutionPage() {
  return (
    <main className="relative bg-slate-50 text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans">
      
      {/* SECTION 1 - ENTRY PRINCIPLE */}
      <Hero className="border-b border-slate-200 py-16 md:py-32 bg-white pb-32 md:pb-48 px-6">
        <div className="space-y-10 max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-200 text-slate-500 bg-slate-50 font-black">
            ENTRY PRINCIPLE
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display leading-[1.1] text-slate-950 tracking-tight font-light uppercase">
            Execution does not begin <br className="hidden sm:block" />
            <span className="italic lowercase text-indigo-600 font-medium">by default.</span> 
          </h1>

          <div className="space-y-8 pt-8 md:pt-12 text-xl md:text-3xl font-light text-slate-600 leading-relaxed text-left border-l-[3px] border-indigo-200 pl-6 md:pl-10 max-w-3xl mx-auto italic md:not-italic">
            <p className="text-indigo-600 font-medium">In ATRIYA, execution is not automatic.</p>
            <p>A request entering the system does not immediately produce an outcome.</p>
            
            <p className="text-slate-900 font-medium">Before anything happens, the system determines whether execution is allowed.</p>
            
            <div className="pt-4 text-lg md:text-xl space-y-3 text-slate-500 italic">
              <p>This evaluation occurs before any state is changed.</p>
              <p>Before any output is generated.</p>
              <p>Before any action is taken.</p>
            </div>
            
            <p className="border-t border-slate-100 pt-8 mt-8 text-lg font-mono uppercase tracking-widest text-slate-300 font-black not-italic leading-relaxed">
              <span className="text-slate-900">Execution begins only after</span> <br className="hidden sm:block" />
              <span className="text-indigo-600">it is permitted.</span>
            </p>
          </div>
        </div>
      </Hero>

      {/* SECTION 2 - GOVERNED EXECUTION FLOW */}
      <Section className="py-0 relative z-10 -mt-12 md:-mt-24 px-4 sm:px-6">
         <div className="max-w-5xl mx-auto bg-slate-950 text-white rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
               <div className="md:w-1/3 space-y-6">
                 <Badge className="bg-white/10 text-slate-300 hover:bg-white/10 border-white/20 font-black tracking-widest text-[10px] uppercase">THE EXECUTION SEQUENCE</Badge>
                 <h2 className="text-4xl lg:text-5xl font-display uppercase tracking-tight font-light">
                   Governed <span className="italic lowercase text-indigo-400 font-medium">Flow</span>
                 </h2>
                 <p className="font-mono text-sm uppercase tracking-widest text-slate-400 font-black pt-4 border-t border-white/10 mt-8 leading-relaxed">
                   This sequence cannot be skipped.<br/><br/>
                   <span className="text-white">Every action follows this path.</span><br/>
                   <span className="text-indigo-400 font-medium">Every time.</span>
                 </p>
               </div>
               
               <div className="md:w-2/3 border-l border-white/10 pl-10 lg:pl-16 w-full">
                 <Flow className="gap-8">
                   <div className="flex gap-6 items-center">
                     <span className="text-indigo-400 font-mono text-sm bg-white/5 border border-white/10 px-3 py-1 rounded shadow-sm">01</span>
                     <p className="font-light text-slate-200 text-xl tracking-tight">Intent enters the system</p>
                   </div>
                   <div className="flex gap-6 items-center">
                     <span className="text-indigo-400 font-mono text-sm bg-white/5 border border-white/10 px-3 py-1 rounded shadow-sm">02</span>
                     <p className="font-light text-slate-200 text-xl tracking-tight">The system evaluates governing constraints</p>
                   </div>
                   <div className="flex gap-6 items-start">
                     <span className="text-indigo-400 font-mono text-sm bg-white/5 border border-white/10 px-3 py-1 rounded shadow-sm mt-1">03</span>
                     <div className="space-y-4 w-full">
                       <p className="font-light text-slate-200 text-xl tracking-tight">A binary decision is made:</p>
                       <div className="flex gap-4 font-mono text-[11px] uppercase font-black tracking-widest">
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded">→ Admitted</span>
                          <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-4 py-2 rounded">→ Refused</span>
                       </div>
                     </div>
                   </div>
                   <div className="flex gap-6 items-center">
                     <span className="text-indigo-400 font-mono text-sm bg-white/5 border border-white/10 px-3 py-1 rounded shadow-sm">04</span>
                     <div className="space-y-1">
                       <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-black pb-1">If Admitted:</p>
                       <p className="font-light text-slate-200 text-xl tracking-tight">Execution proceeds within defined bounds</p>
                     </div>
                   </div>
                   <div className="flex gap-6 items-center">
                     <span className="text-indigo-400 font-mono text-sm bg-white/5 border border-white/10 px-3 py-1 rounded shadow-sm">05</span>
                     <p className="font-light text-slate-200 text-xl tracking-tight">Output is sealed and recorded</p>
                   </div>
                 </Flow>
               </div>
            </div>
         </div>
      </Section>

      {/* SECTION 3 - BINARY DECISION MODEL */}
      <Section className="py-16 md:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm mx-auto flex w-max">DECISION MODEL</Badge>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display leading-[1.1] text-slate-950 tracking-tight font-light uppercase text-center">
              No Gradients. <br className="hidden sm:block" />
              <span className="italic lowercase text-indigo-600 font-medium">Only Decisions.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 text-left">
               <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                 <p className="text-slate-800 font-medium text-xl">Most systems operate on degrees of confidence.</p>
                 <div className="space-y-2 text-slate-500 text-lg">
                    <p>They generate outputs with probabilities.</p>
                    <p>They approximate correctness.</p>
                 </div>
                 <p className="text-indigo-600 font-medium pt-4 text-xl">ATRIYA does not operate this way.</p>
               </div>
               
               <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 lg:-mt-8 shadow-indigo-100/30">
                 <p className="text-slate-900 font-medium text-xl border-b border-slate-100 pb-6 uppercase tracking-tight">Every decision is binary:</p>
                 <ul className="space-y-8 text-slate-600 leading-relaxed font-light text-lg">
                   <li className="flex gap-4 items-start">
                     <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                     <p>The action satisfies all governing conditions <br/><span className="font-medium text-slate-900 block mt-2 text-sm uppercase tracking-wider font-mono">→ it is admitted</span></p>
                   </li>
                   <li className="flex gap-4 items-start">
                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                     <p>The action does not satisfy them <br/><span className="font-medium text-slate-900 block mt-2 text-sm uppercase tracking-wider font-mono">→ it is refused</span></p>
                   </li>
                 </ul>
               </div>
            </div>
            
            <div className="pt-16 text-center text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-400">
              There is no <span className="text-slate-900 font-medium line-through decoration-slate-300 decoration-2">almost correct</span>. <br/>
              There is no <span className="text-slate-900 font-medium line-through decoration-slate-300 decoration-2">good enough</span>.
            </div>
        </div>

        <VerdictStamp className="max-w-4xl mx-auto mt-12" />

      </Section>

      {/* SECTION 4 & 5 - BOUNDARY AND FAILURE */}
      <Section className="py-16 md:py-24 bg-white border-y border-slate-100 rounded-t-[2rem] md:rounded-t-[4rem] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
           {/* SECTION 4 - BOUNDED */}
           <div className="space-y-6 md:space-y-8">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-slate-50 font-black shadow-sm">BOUNDED EXECUTION</Badge>
              <h2 className="text-3xl md:text-5xl font-display text-slate-950 uppercase font-light tracking-tight">Execution is Constrained</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-slate-500 font-light">
                 <p>When execution is admitted, it does not run freely.</p>
                 <p className="text-slate-900 font-medium text-xl md:text-2xl py-2">It operates within defined limits.</p>
                 <p className="pt-2 text-slate-600">These limits ensure:</p>
                 <ul className="list-disc pl-6 space-y-3 text-slate-500">
                   <li>scope is controlled</li>
                   <li>behavior cannot expand beyond its allowed range</li>
                   <li>actions remain within governed boundaries</li>
                 </ul>
                 
                 <div className="pt-8 border-t border-slate-100 mt-4 leading-relaxed font-mono uppercase font-black text-[13px] text-slate-400 tracking-widest">
                   Execution is not just allowed.<br/>
                   <span className="text-indigo-600">It is contained.</span>
                 </div>
              </div>
           </div>

           {/* SECTION 5 - FAILURE MODEL */}
           <div className="space-y-8">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-slate-50 font-black shadow-sm">FAILURE MODEL</Badge>
              <h2 className="text-3xl md:text-5xl font-display text-slate-950 uppercase font-light tracking-tight">Failure Does Not Produce Output</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-slate-500 font-light">
                 <p>In traditional systems, failure often results in degraded output. The system may guess, fallback, approximate, or return incomplete results.</p>
                 
                 <p className="text-slate-900 font-medium border-l-2 border-indigo-500 pl-4 py-1.5 ml-0 md:ml-4 bg-slate-50">ATRIYA does not allow this.</p>
                 
                 <p className="pt-2 text-slate-600">If an action cannot be validated:</p>
                 <ul className="list-disc pl-6 space-y-3 text-slate-500">
                   <li>it is not executed</li>
                   <li>no output is produced</li>
                 </ul>
                 
                 <div className="pt-8 space-y-2">
                   <p className="text-slate-900 font-medium text-xl md:text-2xl uppercase tracking-tight">Failure results in refusal.</p>
                   <p className="text-slate-400 italic">Not approximation.</p>
                 </div>
                 
                 <div className="pt-4 border-t border-slate-100 mt-4 leading-relaxed font-mono uppercase font-black text-[11px] md:text-[13px] text-slate-500 tracking-widest">
                   Refusal is not an error.<br className="hidden sm:block" />
                   <span className="text-indigo-600 font-medium">It is a valid and final system outcome.</span>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      <MasterAxiom />

      {/* SECTION 6 & 7 - OUTPUT AND DETERMINISM */}
      <Section className="py-16 md:py-24 bg-slate-950 text-white rounded-[2rem] md:rounded-[4rem] my-12 md:my-24 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-4 sm:px-0">
           {/* SECTION 6 */}
           <div className="space-y-6 md:space-y-8">
              <FileSignature className="w-10 h-10 md:w-12 md:h-12 text-indigo-400/50 mb-6 shrink-0" />
              <h2 className="text-3xl md:text-5xl font-display text-white uppercase font-light tracking-tight">Output is Final</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-slate-400 font-light">
                 <p>When execution is admitted and completed, the result is sealed.</p>
                 <p className="text-slate-300 font-medium pt-2">This means:</p>
                 <ul className="list-disc pl-6 space-y-3 text-slate-400">
                   <li>it cannot be altered after completion</li>
                   <li>it is recorded as the definitive outcome</li>
                   <li>it represents a fully governed execution</li>
                 </ul>
                 
                 <div className="pt-8 border-t border-white/10 mt-4 leading-relaxed font-mono uppercase font-black text-[11px] md:text-[13px] text-indigo-400 tracking-widest">
                   Nothing leaves the system <br className="hidden sm:block" /> without being finalized.
                 </div>
              </div>
           </div>

           {/* SECTION 7 */}
           <div className="space-y-6 md:space-y-8">
              <RefreshCw className="w-10 h-10 md:w-12 md:h-12 text-indigo-400/50 mb-6 shrink-0" />
              <h2 className="text-3xl md:text-5xl font-display text-white uppercase font-light tracking-tight">Consistent Outcomes</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-slate-400 font-light">
                 <p>Given the same input and conditions, the system produces the same outcome.</p>
                 
                 <p className="text-white font-medium py-2">Execution is not influenced by randomness.</p>
                 
                 <p>Outcomes are:</p>
                 <ul className="list-disc pl-6 text-slate-300 space-y-3">
                   <li>consistent</li>
                   <li>traceable</li>
                   <li>reproducible</li>
                 </ul>
                 
                 <div className="pt-10 border-t border-white/10 mt-4 leading-relaxed font-mono uppercase font-black text-[11px] md:text-[13px] text-slate-500 tracking-widest">
                   The system does not vary.<br className="hidden sm:block" />
                   <span className="text-indigo-400 font-medium">It resolves.</span>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* FAILURE MODEL DIAGRAM */}
      <Section className="py-16 border-b border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto">
          <Diagram_FailureModel />
        </div>
      </Section>

      <ThesisDivider text="Refusal is the correct system response. Not fallback. Not degradation." />

      {/* SECTION 8 - FINAL COMPRESSION */}
      <Section className="py-16 md:py-32 pb-32 md:pb-48 text-center max-w-4xl mx-auto px-6">
         <div className="space-y-12 md:space-y-16">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display uppercase font-light tracking-tight leading-[1.1]">
              What Execution Means <br className="hidden sm:block" /><span className="italic lowercase text-indigo-600 font-medium">In ATRIYA.</span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-2xl text-slate-600 font-light bg-white border border-slate-100 p-8 sm:p-12 lg:p-16 rounded-[2rem] md:rounded-[4rem] shadow-sm text-left relative overflow-hidden">
               <div className="w-2 absolute inset-y-0 left-0 bg-indigo-100"></div>
               <p className="text-slate-900 font-medium text-2xl md:text-3xl pb-2 leading-tight">Execution is not a process that always occurs.</p>
               <p className="text-indigo-600 italic">It is an event that happens only when permitted.</p>
               
               <div className="pt-8 mt-8 border-t border-slate-100">
                 <p className="text-slate-900 font-medium mb-6 uppercase tracking-tight text-lg md:text-xl">Every action:</p>
                 <ul className="space-y-5 list-none pl-2 text-slate-500 text-lg md:text-xl font-light">
                   <li className="flex items-center gap-4 sm:gap-6"><div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>is evaluated before it begins</li>
                   <li className="flex items-center gap-4 sm:gap-6"><div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>is either admitted or refused</li>
                   <li className="flex items-center gap-4 sm:gap-6"><div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>runs within strict boundaries</li>
                   <li className="flex items-center gap-4 sm:gap-6"><div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>produces a final, recorded outcome</li>
                 </ul>
               </div>
            </div>
            
            <div className="pt-16 md:pt-24 uppercase font-display text-2xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-slate-400 border-t border-slate-100 max-w-3xl mx-auto">
               <p>Nothing executes unless it is allowed.</p>
               <p className="text-slate-950 font-medium pt-3 text-3xl sm:text-inherit">Nothing proceeds if it is uncertain.</p>
            </div>
         </div>
      </Section>

    </main>
  );
}
