import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Grid } from '@/components/sections/Grid';
import { Badge } from '@/components/ui/Badge';
import { X } from 'lucide-react';
import { CategoryDeclaration, ThesisDivider, MasterAxiom, PerceptionShift, SystemNatureBadge } from '@/components/CreativeStamps';
import { Diagram_GovernedExecution, Diagram_ControlVsPossibility } from '@/components/SystemDiagrams';

export default function SystemPage() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans border-t-8 border-slate-950">
      
      {/* SECTION 1 - DEFINITION */}
      <Hero className="border-b border-slate-50 py-32">
        <div className="space-y-12 max-w-4xl">
          <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-200 text-slate-500 bg-slate-50 font-black">
            ONTOLOGY
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-950 tracking-tight font-light uppercase">
            A Constitutional <br />
            <span className="italic lowercase text-indigo-600 font-medium">Execution System.</span> 
          </h1>

          <div className="space-y-8 pt-8 text-2xl md:text-3xl font-light text-slate-600 leading-relaxed border-l-4 border-indigo-100 pl-8">
            <p>ATRIYA is not an AI model.</p>
            <p>It is not a platform built on top of models.</p>
            <p className="text-slate-950 font-medium">It is the execution substrate that determines whether an action is allowed to occur.</p>
            
            <p className="pt-4">All computation within ATRIYA is subject to governing constraints.</p>
            
            <div className="pt-4">
              <p className="text-indigo-600 italic">Execution is not assumed.</p>
              <p className="text-slate-950 font-medium tracking-tight">It is granted.</p>
            </div>
            
            <p className="border-t border-slate-100 pt-8 mt-8 text-lg font-mono uppercase tracking-widest text-slate-400 font-black leading-relaxed">
              An action does not happen because it was requested.<br/>
              <span className="text-slate-600">It happens only if it is admissible.</span>
            </p>
          </div>
        </div>
      </Hero>

      {/* CATEGORY DECLARATION STAMP */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-6 relative z-10">
        <CategoryDeclaration />
      </div>

      {/* SYSTEM NATURE BADGE */}
      <div className="flex justify-center py-8">
        <SystemNatureBadge />
      </div>

      {/* SECTION 2 - SYSTEM REFRAME */}
      <Section className="py-24 border-b border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-slate-50 p-12 lg:p-16 rounded-[3rem] border border-slate-100 space-y-8">
             <Badge className="bg-slate-200 text-slate-500 hover:bg-slate-200 border-none font-black tracking-widest text-[10px] uppercase">PERMISSIVE MODEL</Badge>
             <h2 className="text-3xl md:text-4xl font-display text-slate-900 tracking-tight uppercase font-light">
               How Systems <br/> Normally Work
             </h2>
             <div className="space-y-6 text-xl text-slate-500 font-light">
               <p className="text-slate-800 font-medium">Traditional systems follow a permissive model.</p>
               <p>They assume execution is allowed.</p>
               <p className="pt-4">Validation is applied after execution:</p>
               <ul className="list-disc pl-6 space-y-2 text-slate-600">
                 <li>outputs are filtered</li>
                 <li>errors are corrected</li>
                 <li>unsafe behavior is mitigated</li>
               </ul>
               <p className="pt-6 font-mono text-[13px] tracking-widest uppercase font-black border-t border-slate-200 mt-6 pt-6 text-slate-400">
                 Execution happens first.<br/>
                 <span className="text-slate-600">Control happens later.</span>
               </p>
             </div>
          </div>
          
          <div className="bg-slate-950 text-white p-12 lg:p-16 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
             <div className="relative z-10 space-y-8">
               <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 font-black tracking-widest text-[10px] uppercase italic">RESTRICTIVE MODEL</Badge>
               <h2 className="text-3xl md:text-4xl font-display tracking-tight uppercase font-light">
                 How <span className="italic lowercase text-indigo-400 font-medium">ATRIYA</span> Works
               </h2>
               <div className="space-y-6 text-xl text-slate-300 font-light">
                 <p className="text-white font-medium">ATRIYA follows a restrictive model.</p>
                 <p className="text-indigo-300 italic font-medium">Execution is not assumed.</p>
                 <p className="pt-4">Every action must satisfy governing conditions before it is allowed.</p>
                 <p>If the conditions are not satisfied, the action does not execute.</p>
                 <p className="pt-4 text-white">There is no intermediate state.</p>
                 <p className="pt-6 font-mono text-[13px] tracking-widest uppercase font-black text-indigo-400 border-t border-white/10 mt-6 pt-6">
                   Execution is not controlled.<br/>
                   <span className="text-white">It is conditionally permitted.</span>
                 </p>
               </div>
             </div>
          </div>
        </div>
      </Section>

      <ThesisDivider text="Execution is not requested. It is earned through constraint satisfaction." />

      {/* SECTION 3 - EXECUTION MODEL */}
      <Section className="py-32">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-5xl md:text-7xl font-display leading-[1.1] text-slate-950 tracking-tight font-light uppercase">
              Execution is a <br/>
              <span className="italic lowercase text-indigo-600 font-medium">Pre-Conditioned Event.</span>
            </h2>
            <div className="space-y-8 text-2xl text-slate-500 font-light max-w-2xl mx-auto">
              <p>In ATRIYA, execution is not a default state.</p>
              <p>It is the result of a successful evaluation.</p>
              
              <div className="bg-slate-50 p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 text-left my-16 shadow-inner">
                 <p className="text-slate-900 font-medium mb-8 text-2xl">Before any action occurs:</p>
                 <ul className="space-y-5 text-xl">
                   <li className="flex items-center gap-6"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>the system evaluates governing constraints</li>
                   <li className="flex items-center gap-6"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>determines admissibility</li>
                   <li className="flex items-center gap-6"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>issues a binary outcome</li>
                 </ul>
                 <div className="border-t border-slate-200 mt-10 pt-8 flex gap-6 font-mono text-sm uppercase font-black justify-start">
                    <span className="bg-green-100 text-green-700 border border-green-200 px-6 py-2.5 rounded-lg shadow-sm">→ Admitted</span>
                    <span className="bg-red-100 text-red-700 border border-red-200 px-6 py-2.5 rounded-lg shadow-sm">→ Refused</span>
                 </div>
              </div>
              
              <div className="border-l-4 border-indigo-200 pl-10 text-left space-y-4 italic text-slate-400">
                <p>There is no "partial execution".</p>
                <p>There is no "best effort".</p>
                <p className="pt-4 text-slate-900 font-medium not-italic">An action either satisfies all conditions, or it does not occur.</p>
              </div>
            </div>
        </div>
      </Section>

      {/* VISUAL DIAGRAM — EMBED */}
      <Section className="py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Diagram_GovernedExecution />
          <Diagram_ControlVsPossibility />
        </div>
      </Section>

      {/* SECTION 4 & 5 - AUTHORITY AND STATE */}
      <Section className="py-32 bg-slate-50 border-y border-slate-100 rounded-t-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
           {/* SECTION 4 */}
           <div className="space-y-8">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm">AUTHORITY</Badge>
              <h2 className="text-4xl md:text-5xl font-display text-slate-950 uppercase font-light tracking-tight">Execution is Bounded</h2>
              <div className="space-y-6 text-xl text-slate-500 font-light">
                 <p>Every action operates within defined boundaries.</p>
                 <p className="pt-2 text-slate-800">These boundaries determine:</p>
                 <ul className="list-disc pl-6 space-y-3 text-slate-600">
                   <li>what can be executed</li>
                   <li>under what conditions</li>
                   <li>within what scope</li>
                 </ul>
                 <p className="pt-4 text-slate-900">No action can exceed its allowed scope.</p>
                 <p className="text-slate-900">No process can expand its own authority.</p>
                 <p className="text-indigo-600 font-medium italic pt-2">Execution is always contained.</p>
                 
                 <div className="pt-8 border-t border-slate-200 mt-4 leading-relaxed font-mono uppercase font-black text-[13px] text-slate-400 tracking-widest">
                   Authority is not inferred.<br/>
                   <span className="text-indigo-600">It is enforced.</span>
                 </div>
              </div>
           </div>

           {/* SECTION 5 */}
           <div className="space-y-8">
              <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white font-black shadow-sm">STATE MODEL</Badge>
              <h2 className="text-4xl md:text-5xl font-display text-slate-950 uppercase font-light tracking-tight">No Undefined States</h2>
              <div className="space-y-6 text-xl text-slate-500 font-light">
                 <p>Systems often operate in uncertain states:<br/>
                 partial completion, degraded execution, inconsistent outcomes.</p>
                 
                 <p className="text-slate-900 font-medium text-2xl pt-4">ATRIYA does not allow this.</p>
                 
                 <p className="pt-2 text-slate-900">Every action results in one of two states:</p>
                 <ul className="list-disc pl-6 space-y-3 text-slate-600">
                   <li>executed within constraints</li>
                   <li>not executed</li>
                 </ul>
                 
                 <div className="pt-4 text-slate-400 space-y-2 italic">
                   <p>There is no degraded path.</p>
                   <p>No fallback behavior.</p>
                   <p>No silent continuation.</p>
                 </div>
                 
                 <div className="pt-8 border-t border-slate-200 mt-4 leading-relaxed font-mono uppercase font-black text-[13px] text-slate-400 tracking-widest">
                   The system does not approximate correctness.<br/>
                   <span className="text-indigo-600">It requires it.</span>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* SECTION 6 - ABSENCES */}
      <Section className="py-32 border-b border-slate-50">
        <div className="bg-slate-950 rounded-[4rem] p-12 lg:p-24 text-white shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="relative z-10 space-y-12 block">
            <h2 className="text-4xl md:text-6xl font-display uppercase font-light tracking-tight">
              Structural Absences
            </h2>
            <p className="text-2xl text-slate-400 font-light">ATRIYA <span className="text-white font-medium italic">does not</span> include:</p>
            
            <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 text-left">
               {[
                 "probabilistic execution paths",
                 "fallback mechanisms for invalid actions",
                 "override flags that bypass constraints",
                 "silent degradation modes",
                 "execution without validation"
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <span className="font-light text-lg text-slate-300">{item}</span>
                 </div>
               ))}
            </Grid>
            
            <div className="border-t border-white/10 pt-16 mt-16 text-center w-full">
               <p className="text-2xl lg:text-3xl font-display font-light uppercase tracking-widest text-indigo-300">
                 If a path would violate system constraints, <br/>
                 <span className="text-white font-medium">that path does not exist.</span>
               </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7 - FINAL COMPRESSION */}
      <Section className="py-32 pb-48">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-5xl md:text-7xl font-display uppercase font-light tracking-tight text-center">
              What ATRIYA <span className="italic lowercase text-indigo-600 font-medium">Is.</span>
            </h2>
            
            <div className="space-y-8 text-2xl text-slate-600 font-light border-l-4 border-indigo-200 pl-10 md:pl-16 bg-slate-50/50 rounded-r-[4rem] py-16 pr-10">
               <p className="text-slate-900 font-medium mb-6">ATRIYA is a system where:</p>
               <ul className="space-y-6 list-none text-slate-600 text-2xl">
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-200"></div>execution is conditional</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-200"></div>correctness is required</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-200"></div>failure does not propagate</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-200"></div>behavior is bounded before it occurs</li>
               </ul>
            </div>

            <PerceptionShift className="pt-8" />
            
            <div className="text-center pt-24 mt-24 border-t border-slate-100">
               <p className="text-3xl lg:text-4xl font-display uppercase leading-tight tracking-tight text-slate-400">
                 It is not a system that improves execution.
               </p>
               <p className="text-4xl lg:text-5xl font-display uppercase leading-[1.1] tracking-tight text-slate-950 pt-2 font-medium">
                 It is a system that determines <br/>
                 <span className="italic lowercase text-indigo-600">whether execution is possible.</span>
               </p>
            </div>
         </div>
      </Section>

    </main>
  );
}
