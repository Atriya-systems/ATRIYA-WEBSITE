import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Grid } from '@/components/sections/Grid';
import { Badge } from '@/components/ui/Badge';
import { ShieldOff } from 'lucide-react';

export default function CompanyPage() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans">
      
      {/* SECTION 1 - OPENING */}
      <Hero className="border-b border-slate-50 py-32 bg-slate-950 text-white rounded-b-[4rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 space-y-12 max-w-4xl mx-auto text-center pt-8 pb-16">
          <Badge className="bg-indigo-500/20 text-indigo-300 font-mono text-[10px] tracking-widest uppercase py-1 px-4 border border-indigo-500/30">
            ORIGIN
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1] tracking-tight font-light uppercase">
            Systems Should Not <br />
            <span className="italic lowercase text-rose-400 font-medium">Fail Silently.</span> 
          </h1>

          <div className="space-y-8 pt-12 text-2xl font-light text-slate-400 leading-relaxed text-left border-l-[3px] border-rose-500/30 pl-10 max-w-3xl mx-auto">
            <p>Modern intelligent systems are powerful.</p>
            <p className="text-slate-300 italic">They can generate, predict, automate, and decide.</p>
            
            <p className="text-white font-medium tracking-tight pt-4">But they share a fundamental flaw:</p>
            
            <div className="pt-2 text-rose-300 font-medium">
              <p>They are allowed to execute even when they are incorrect.</p>
            </div>
            
            <p className="border-t border-white/10 pt-8 mt-8 text-[15px] font-mono uppercase tracking-widest text-slate-400 font-black leading-relaxed">
              Failure is not prevented.<br/>
              <span className="text-white">It is managed after it occurs.</span>
            </p>
          </div>
        </div>
      </Hero>

      {/* SECTION 2 - FAILURE OF CURRENT SYSTEMS */}
      <Section className="py-24 border-b border-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <ShieldOff className="w-12 h-12 text-rose-500 mb-6" />
              <h2 className="text-4xl md:text-5xl font-display text-slate-950 uppercase font-light tracking-tight">The Problem <br/> Is Structural</h2>
              <div className="space-y-6 text-xl text-slate-500 font-light pt-4 border-t border-slate-100">
                 <p className="text-slate-900 font-medium">Today’s systems operate on probability.</p>
                 <p className="pt-2 text-sm text-slate-400 font-mono uppercase tracking-widest font-black">They:</p>
                 <ul className="list-disc pl-6 space-y-2 text-slate-600">
                   <li>approximate correctness</li>
                   <li>produce outputs with uncertainty</li>
                   <li>rely on post-execution validation</li>
                 </ul>
                 
                 <div className="pt-8 border-t border-slate-100 mt-4 leading-relaxed font-mono uppercase font-black text-[13px] text-slate-400 tracking-widest">
                   The issue is not performance.<br/>
                   <span className="text-rose-500 font-medium">It is permission.</span>
                 </div>
              </div>
           </div>
           
           <div className="bg-slate-50 p-12 lg:p-16 rounded-[3rem] border border-slate-100 space-y-8 shadow-inner">
               <p className="text-[11px] text-rose-500 font-mono uppercase tracking-widest font-black">This Leads To:</p>
               <ul className="space-y-6 text-xl text-slate-600 font-light font-sans list-none">
                 <li className="flex items-center gap-6"><div className="w-2 h-2 rounded-sm bg-rose-500 shrink-0"></div>incorrect outputs being visible</li>
                 <li className="flex items-center gap-6"><div className="w-2 h-2 rounded-sm bg-rose-500 shrink-0"></div>unsafe actions being possible</li>
                 <li className="flex items-center gap-6"><div className="w-2 h-2 rounded-sm bg-rose-500 shrink-0"></div>inconsistent behavior across runs</li>
               </ul>
               <div className="pt-8 text-slate-900 italic font-medium text-2xl border-t border-slate-200 mt-8">
                 Systems are allowed to act <br/> even when they should not.
               </div>
           </div>
        </div>
      </Section>

      {/* SECTION 3 - THE SHIFT */}
      <Section className="py-24 bg-slate-50 border-b border-slate-100">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-display uppercase tracking-tight font-light leading-[1.1]">
              Execution Must Be <br/> <span className="italic lowercase text-indigo-600 font-medium">Conditional.</span>
            </h2>
            <div className="text-2xl text-slate-500 font-light space-y-8 max-w-2xl mx-auto pt-8">
               <p>Instead of improving outputs after execution,</p>
               <p className="text-slate-900 font-medium">systems must determine:</p>
               <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm text-center font-mono uppercase text-sm tracking-widest text-indigo-600 font-black my-8">
                 → whether execution should happen at all
               </div>
               
               <div className="pt-8 text-left border-l-4 border-indigo-200 pl-8 space-y-2 mt-8">
                 <p className="text-slate-500">Correctness should not be optimized.</p>
                 <p className="text-slate-900 font-medium">It should be required.</p>
               </div>
               
               <div className="pt-16 text-center text-3xl font-display uppercase tracking-tight text-slate-900 border-t border-slate-200 mt-12 py-4">
                 The system must decide <br className="md:hidden"/> before it acts.
               </div>
            </div>
         </div>
      </Section>

      {/* SECTION 4 - WHY ATRIYA WAS BUILT */}
      <Section className="py-24">
         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm">PURPOSE</Badge>
                <h2 className="text-4xl md:text-5xl font-display text-slate-950 uppercase tracking-tight font-light leading-[1.1]">
                  From Control <br/> To Governance
                </h2>
                <div className="space-y-6 text-xl text-slate-500 font-light">
                   <p className="text-slate-900 font-medium">ATRIYA was built to change how execution works.</p>
                   <p className="italic text-slate-400">Not by improving models. Not by adding safeguards.</p>
                   <p className="pt-2 text-indigo-600 font-medium">But by redefining execution itself.</p>
                   
                   <div className="pt-8 border-t border-slate-100 font-mono text-[13px] uppercase tracking-widest font-black leading-relaxed mt-4">
                     Actions are not controlled.<br/>
                     <span className="text-indigo-600">They are permitted.</span>
                   </div>
                </div>
             </div>
             
             <div className="bg-slate-950 p-12 lg:p-16 rounded-[4rem] border border-slate-800 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="relative z-10 space-y-6">
                   <p className="font-mono text-[11px] text-slate-500 uppercase font-black tracking-widest mb-8 border-b border-white/10 pb-4">In ATRIYA</p>
                   <ul className="text-xl text-slate-300 font-light space-y-4 list-none pl-4 border-l border-white/10">
                     <li className="flex gap-4 items-center"><div className="w-1.5 h-1.5 bg-indigo-500"></div> execution is not assumed</li>
                     <li className="flex gap-4 items-center"><div className="w-1.5 h-1.5 bg-indigo-500"></div> correctness is not optional</li>
                     <li className="flex gap-4 items-center"><div className="w-1.5 h-1.5 bg-indigo-500"></div> behavior is not flexible</li>
                   </ul>
                </div>
             </div>
         </div>
      </Section>

      {/* SECTION 5 - WHAT WE BELIEVE */}
      <Section className="py-32 bg-slate-50 border-y border-slate-100 rounded-[4rem] mb-24">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-6">
             <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm">AXIOMS</Badge>
             <h2 className="text-5xl md:text-6xl font-display text-slate-950 uppercase tracking-tight font-light">Core Principles</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24">
             {[
               { num: "01", title: "Execution must be governed", desc: "Systems should not act unless conditions are satisfied." },
               { num: "02", title: "Failure must not propagate", desc: "Incorrect execution should not produce output." },
               { num: "03", title: "Behavior must be bounded", desc: "No system should exceed its defined scope." },
               { num: "04", title: "Outcomes must be final", desc: "Execution results should be consistent and traceable." }
             ].map((axiom, i) => (
                <div key={i} className="space-y-4 bg-white p-8 md:p-12 border border-slate-100 rounded-3xl shadow-sm">
                   <div className="flex gap-4 items-center border-b border-slate-100 pb-4 mb-4">
                     <span className="font-mono text-2xl font-black text-indigo-200">{axiom.num}</span>
                     <h3 className="text-2xl lg:text-3xl font-display uppercase tracking-tight text-slate-950">{axiom.title}</h3>
                   </div>
                   <p className="text-xl text-slate-500 font-light">{axiom.desc}</p>
                </div>
             ))}
             
             {/* 5th Axiom spanning full width or centered */}
             <div className="space-y-4 bg-slate-950 text-white p-8 md:p-12 border border-slate-800 rounded-3xl shadow-2xl lg:col-span-2 max-w-3xl mx-auto w-full">
                 <div className="flex gap-4 items-center border-b border-white/10 pb-4 mb-4">
                   <span className="font-mono text-2xl font-black text-indigo-500/50">05</span>
                   <h3 className="text-2xl lg:text-3xl font-display uppercase tracking-tight text-white">Correctness must be required</h3>
                 </div>
                 <div className="text-xl text-slate-300 font-light space-y-2 mt-4">
                   <p>Systems should not approximate correctness.</p>
                   <p className="text-indigo-300 font-medium pt-2">They should enforce it.</p>
                 </div>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6 - WHAT WE ARE BUILDING */}
      <Section className="py-24">
         <div className="max-w-4xl mx-auto text-center space-y-16">
            <h2 className="text-5xl md:text-6xl font-display uppercase tracking-tight font-light leading-[1.1]">
              A New Execution <br/> <span className="italic lowercase text-indigo-600 font-medium">Paradigm.</span>
            </h2>
            
            <div className="text-2xl text-slate-500 font-light space-y-8 max-w-2xl mx-auto">
               <p className="text-slate-900 font-medium">ATRIYA is not a product.</p>
               <p>It is a shift in how intelligent systems operate.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 text-left">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                     <p className="font-mono text-[10px] uppercase font-black tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-4">From</p>
                     <ul className="space-y-4 text-lg text-slate-500 font-light list-none pl-0">
                       <li className="flex items-center gap-3"><span className="text-slate-400">→</span> probabilistic execution</li>
                       <li className="flex items-center gap-3"><span className="text-slate-400">→</span> post-hoc validation</li>
                       <li className="flex items-center gap-3"><span className="text-slate-400">→</span> flexible behavior</li>
                     </ul>
                  </div>
                  <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100">
                     <p className="font-mono text-[10px] uppercase font-black tracking-widest text-indigo-500 mb-6 border-b border-indigo-100 pb-4">To</p>
                     <ul className="space-y-4 text-lg text-slate-900 font-medium list-none pl-0">
                       <li className="flex items-center gap-3"><span className="text-indigo-500">→</span> governed execution</li>
                       <li className="flex items-center gap-3"><span className="text-indigo-500">→</span> pre-condition validation</li>
                       <li className="flex items-center gap-3"><span className="text-indigo-500">→</span> bounded behavior</li>
                     </ul>
                  </div>
               </div>
               
               <div className="pt-16 border-t border-slate-100 space-y-4 mt-8">
                 <p className="font-mono text-[13px] uppercase tracking-widest text-slate-400 font-black">
                   This is not an incremental improvement.<br/>
                   <span className="text-indigo-600 mt-2 block">It is a structural change.</span>
                 </p>
               </div>
            </div>
         </div>
      </Section>

      {/* SECTION 7 - CLOSING */}
      <Section className="py-32 pb-48 bg-slate-950 text-white relative overflow-hidden rounded-t-[4rem]">
         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-center font-light leading-[1.1]">
               Why This <br/><span className="italic lowercase text-indigo-400 font-medium">Matters.</span>
            </h2>
            
            <div className="space-y-8 text-2xl text-slate-300 font-light max-w-2xl mx-auto border-l-4 border-indigo-500/50 pl-12 py-4">
               <p className="text-white font-medium mb-2">As intelligent systems expand into critical domains,</p>
               <p className="text-rose-300 italic text-xl">the cost of incorrect execution increases.</p>
               
               <div className="pt-8 space-y-4">
                 <p className="text-[11px] font-mono uppercase font-black tracking-widest text-slate-500">Systems cannot rely on:</p>
                 <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg text-slate-400 font-mono tracking-widest font-black uppercase list-none pl-0">
                   <li className="line-through decoration-rose-500/50 decoration-2">monitoring</li>
                   <li className="line-through decoration-rose-500/50 decoration-2">correction</li>
                   <li className="line-through decoration-rose-500/50 decoration-2">mitigation</li>
                 </ul>
               </div>
               
               <p className="text-white font-medium pt-8 mt-8 border-t border-white/10 text-3xl">
                 They must ensure correctness before acting.
               </p>
            </div>
            
            <div className="pt-32 text-center leading-[1.2]">
               <p className="text-xl lg:text-2xl font-display uppercase tracking-widest text-slate-400 font-black mb-8 border-t border-white/10 max-w-md mx-auto pt-8">
                 Future Axiom
               </p>
               <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
                 <p className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-white font-medium leading-[1.15]">
                   As systems become more capable,<br className="hidden md:block"/>
                   <span className="italic lowercase text-indigo-400">execution must become more constrained.</span>
                 </p>
               </div>
               
               <div className="mt-24 text-3xl md:text-4xl font-display uppercase font-light text-slate-400 leading-relaxed">
                 ATRIYA exists to make incorrect execution <br/>
                 <span className="text-white font-medium underline decoration-rose-500 underline-offset-8 mt-4 inline-block tracking-tight text-4xl">impossible.</span>
               </div>
            </div>
         </div>
      </Section>

    </main>
  );
}
