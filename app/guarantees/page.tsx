import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Grid } from '@/components/sections/Grid';
import { Badge } from '@/components/ui/Badge';
import { ShieldAlert, Ban } from 'lucide-react';

export default function GuaranteesPage() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans">
      
      {/* SECTION 1 - OPENING */}
      <Hero className="border-b border-slate-50 py-32 bg-slate-950 text-white rounded-b-[4rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 space-y-12 max-w-4xl mx-auto text-center pt-8 pb-16">
          <Badge className="bg-indigo-500/20 text-indigo-300 font-mono text-[10px] tracking-widest uppercase py-1 px-4 border border-indigo-500/30">
            STRUCTURAL CERTAINTY
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1] tracking-tight font-light uppercase">
            Certainty <br/> is not claimed. <br />
            <span className="italic lowercase text-indigo-400 font-medium">It is enforced.</span> 
          </h1>

          <div className="space-y-8 pt-12 text-2xl font-light text-slate-400 leading-relaxed text-left border-l-[3px] border-indigo-500/30 pl-10 max-w-3xl mx-auto">
            <p>Most systems ask to be trusted.</p>
            <p className="space-y-2">
              <span className="block">They provide assurances:</span> 
              <span className="italic text-slate-300 block">“high accuracy”, “robust safety”, “continuous improvement”.</span>
            </p>
            
            <p className="text-white font-medium">These are probabilistic claims.</p>
            
            <div className="pt-4 space-y-2">
              <p>ATRIYA does not operate on claims.</p>
              <p className="text-indigo-300">It operates on enforced constraints.</p>
            </div>
            
            <p className="border-t border-white/10 pt-8 mt-8 text-xl font-mono uppercase tracking-widest text-slate-300 font-black leading-relaxed">
              Behavior is not expected to be correct.<br/>
              <span className="text-white">It is required to be admissible.</span>
            </p>
          </div>
        </div>
      </Hero>

      {/* SECTION 2 - GUARANTEE MODEL */}
      <Section className="py-32">
         <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight font-light leading-[1.1]">
              What A Guarantee Means <br />
              <span className="italic lowercase text-indigo-600 font-medium">In ATRIYA</span>
            </h2>
            
            <div className="text-2xl text-slate-500 font-light space-y-6 pt-8 max-w-2xl mx-auto">
               <p className="text-slate-900 font-medium text-3xl">A guarantee is not a promise.</p>
               <p className="text-indigo-600 italic">It is a structural condition.</p>
               
               <p className="pt-8 text-slate-600">If a guarantee exists, it is because the system <span className="text-slate-900 font-medium">prevents violation of that condition.</span></p>
               
               <div className="pt-4 text-slate-400 italic">
                  <p>Not by detection.</p>
                  <p>Not by correction.</p>
               </div>
               
               <p className="text-slate-900 font-medium pb-8 border-b border-slate-100">By making violation impossible within the system.</p>
               
               <div className="pt-8 font-mono text-[13px] tracking-widest uppercase text-indigo-600 font-black leading-relaxed">
                 A guarantee exists only if <br className="sm:hidden"/> it cannot be broken.
               </div>
            </div>
         </div>
      </Section>

      {/* SECTION 3 - THE 5 CORE GUARANTEES */}
      <Section className="bg-slate-50 border-y border-slate-100 rounded-[4rem] py-32 mb-24">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 bg-white shadow-sm font-black">CORE GUARANTEES</Badge>
            <h2 className="text-5xl md:text-6xl font-display text-slate-950 uppercase tracking-tight font-light">The Five Enforcements</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 pt-8">
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                 <span className="text-indigo-200 font-mono text-3xl font-black shrink-0">01</span>
                 <h3 className="text-2xl lg:text-3xl font-display text-slate-950 tracking-tight uppercase">No Partial Correctness</h3>
               </div>
               <div className="space-y-4 text-xl text-slate-500 font-light leading-relaxed">
                 <p>An action either satisfies all governing conditions, or it does not execute.</p>
                 <ul className="pl-4 space-y-2 text-slate-400 italic">
                   <li>There is no partial admission.</li>
                   <li>No degraded correctness.</li>
                   <li>No “acceptable error”.</li>
                 </ul>
                 <p className="text-slate-900 font-medium pt-2 not-italic">Correctness is not approximated. It is required.</p>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                 <span className="text-indigo-200 font-mono text-3xl font-black shrink-0">02</span>
                 <h3 className="text-2xl lg:text-3xl font-display text-slate-950 tracking-tight uppercase">No Silent Failure</h3>
               </div>
               <div className="space-y-4 text-xl text-slate-500 font-light leading-relaxed">
                 <p>Failure cannot produce output.</p>
                 <p>If execution cannot be validated, it does not occur.</p>
                 <ul className="pl-4 space-y-2 text-slate-400 italic pt-2">
                   <li>There is no hidden degradation.</li>
                   <li>No silent fallback.</li>
                   <li>No approximate result returned as final output.</li>
                 </ul>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                 <span className="text-indigo-200 font-mono text-3xl font-black shrink-0">03</span>
                 <h3 className="text-2xl lg:text-3xl font-display text-slate-950 tracking-tight uppercase">No Bypass Paths</h3>
               </div>
               <div className="space-y-4 text-xl text-slate-500 font-light leading-relaxed">
                 <p>There is no alternate route around system constraints.</p>
                 <ul className="pl-4 space-y-2 text-slate-400 italic">
                   <li>No override flags.</li>
                   <li>No emergency execution mode.</li>
                   <li>No configuration that weakens enforcement.</li>
                 </ul>
                 <p className="text-slate-900 font-medium pt-2 not-italic">All execution passes through the same governing process. Without exception.</p>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                 <span className="text-indigo-200 font-mono text-3xl font-black shrink-0">04</span>
                 <h3 className="text-2xl lg:text-3xl font-display text-slate-950 tracking-tight uppercase">Deterministic Outcomes</h3>
               </div>
               <div className="space-y-4 text-xl text-slate-500 font-light leading-relaxed">
                 <p>The same input under the same conditions produces the same result.</p>
                 <p>Outcomes are not influenced by randomness, sampling, or non-deterministic variation.</p>
                 <p className="text-slate-900 font-medium pt-2">The system resolves — it does not fluctuate.</p>
               </div>
            </div>

            <div className="space-y-6 lg:col-span-2 max-w-3xl mx-auto w-full lg:text-center mt-8">
               <div className="flex items-center lg:justify-center gap-4 border-b border-slate-200 pb-4">
                 <span className="text-indigo-200 font-mono text-3xl font-black shrink-0">05</span>
                 <h3 className="text-2xl lg:text-3xl font-display text-slate-950 tracking-tight uppercase">Complete Traceability</h3>
               </div>
               <div className="space-y-4 text-xl text-slate-500 font-light leading-relaxed">
                 <p>Every admitted action is recorded. Every decision is traceable.</p>
                 <p>Every outcome can be examined as a complete, finalized event.</p>
                 <p className="text-indigo-600 font-mono uppercase font-black tracking-widest text-[13px] pt-6 mt-6 border-t border-slate-200 lg:mx-auto max-w-sm">
                   Nothing executes without a record.
                 </p>
               </div>
            </div>

          </div>
        </div>
      </Section>

      {/* SECTION 4 - FAILURE MODEL */}
      <Section className="py-24 border-b border-slate-50">
        <div className="bg-slate-950 rounded-[4rem] text-white p-12 lg:p-24 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             
             <div className="space-y-8">
                <ShieldAlert className="w-16 h-16 text-rose-500/80 mb-8" />
                <h2 className="text-5xl md:text-6xl font-display uppercase font-light tracking-tight leading-[1]">
                  Failure <br/> <span className="italic lowercase text-rose-400 font-medium">Does Not Propagate</span>
                </h2>
                <div className="pt-10 border-t border-white/10">
                   <p className="font-mono text-[13px] uppercase tracking-widest text-rose-300 font-black leading-relaxed">
                     Failure is not handled.<br/>
                     <span className="text-white">It is prevented from becoming observable.</span>
                   </p>
                </div>
             </div>
             
             <div className="space-y-8 text-xl text-slate-400 font-light lg:border-l lg:border-white/10 lg:pl-16">
                <p>In most systems, failure is managed.</p>
                <p className="text-slate-500 italic">The system retries, approximates, returns partial output, and attempts recovery.</p>
                <p>This allows failure to propagate into visible results.</p>
                
                <p className="text-white font-medium text-2xl pt-4 border-l-2 border-indigo-500 pl-4 py-1.5 bg-white/5">ATRIYA does not allow this.</p>
                
                <p className="text-indigo-300 pt-2">Failure is contained at the point of evaluation.</p>
                <p>If correctness cannot be guaranteed, execution is stopped before it begins.</p>
                
                <div className="pt-8 border-t border-white/10 space-y-4">
                  <p>There is no degraded mode.</p>
                  <p>There is no fallback execution.</p>
                  
                  <div className="pt-6 font-mono uppercase bg-white/5 p-6 rounded-2xl border border-white/10 text-sm tracking-widest w-max max-w-full shadow-lg">
                    <p className="text-slate-500 font-black mb-4">There is only:</p>
                    <p className="text-emerald-400 font-black mb-3"><span className="text-slate-600 mr-2">→</span> admissible execution</p>
                    <p className="text-rose-400 font-black"><span className="text-slate-600 mr-2">→</span> no execution</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 & 6 - IMPOSSIBILITIES & VERIFICATION */}
      <Section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* SECTION 5 - IMPOSSIBILITIES */}
          <div className="space-y-8">
             <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 font-black shadow-sm">ABSOLUTE LIMITS</Badge>
             <h2 className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-950 font-light">
               Structural Impossibilities
             </h2>
             <p className="text-xl text-slate-500 font-light pb-4">The following conditions <span className="text-slate-900 font-medium">do not exist</span> within ATRIYA:</p>
             
             <ul className="space-y-4 text-lg text-slate-600 font-light border-l border-red-200 pl-6">
                <li className="flex items-center gap-4"><Ban className="w-5 h-5 text-red-500" /> execution without validation</li>
                <li className="flex items-center gap-4"><Ban className="w-5 h-5 text-red-500" /> unsafe actions reaching output</li>
                <li className="flex items-center gap-4"><Ban className="w-5 h-5 text-red-500" /> partial or degraded correctness</li>
                <li className="flex items-center gap-4"><Ban className="w-5 h-5 text-red-500" /> silent failure paths</li>
                <li className="flex items-center gap-4"><Ban className="w-5 h-5 text-red-500" /> bypassing of governing constraints</li>
                <li className="flex items-center gap-4"><Ban className="w-5 h-5 text-red-500" /> undefined system states</li>
             </ul>
             
             <div className="pt-8 border-t border-slate-100 text-indigo-600 font-mono text-[13px] uppercase tracking-widest font-black leading-relaxed">
               If a behavior would violate system guarantees, <br/>
               <span className="text-slate-900">it is outside the system’s executable space.</span>
             </div>
          </div>

          {/* SECTION 6 - HOW TRUST IS VERIFIED */}
          <div className="space-y-8">
             <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-slate-300 text-slate-500 font-black shadow-sm">EVIDENCE MODEL</Badge>
             <h2 className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-950 font-light">
               Trust Is Derived From Observability
             </h2>
             <div className="space-y-6 text-xl text-slate-500 font-light">
               <p>Trust in ATRIYA does not come from claims.</p>
               <p className="text-slate-900 pt-2 font-medium">It comes from:</p>
               <ul className="list-disc pl-6 space-y-2 text-slate-600">
                 <li>observable outcomes</li>
                 <li>traceable decisions</li>
                 <li>consistent execution behavior</li>
               </ul>
               <div className="pt-4 space-y-2 border-l-2 border-slate-100 pl-4 mt-2">
                 <p>Every admitted action leaves a record.</p>
                 <p>Every outcome is final.</p>
               </div>
               <p className="text-indigo-600 font-medium italic pt-4">The system can be examined, not just trusted.</p>
             </div>
             
             <div className="pt-8 border-t border-slate-100 text-slate-900 font-mono text-[13px] uppercase tracking-widest font-black leading-relaxed">
               You do not rely on what the system says.<br/>
               <span className="text-indigo-600">You observe what the system allows.</span>
             </div>
          </div>
          
        </div>
      </Section>

      {/* SECTION 7 - FINAL COMPRESSION */}
      <Section className="py-32 pb-48 border-t border-slate-200 bg-slate-50 rounded-t-[4rem]">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-center font-light leading-[1.1]">
               What is <span className="italic lowercase text-indigo-600 font-medium">Guaranteed.</span>
            </h2>
            
            <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-slate-200 shadow-sm space-y-8 max-w-3xl mx-auto">
               <p className="text-2xl text-slate-900 font-medium uppercase tracking-tight mb-8">ATRIYA guarantees that:</p>
               <ul className="space-y-6 text-xl text-slate-500 font-light font-sans list-none">
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>only admissible actions execute</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>invalid actions do not occur</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>failure does not produce output</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>outcomes are consistent and final</li>
                 <li className="flex items-center gap-6"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>every decision is observable</li>
               </ul>
            </div>
            
            <div className="pt-24 text-center leading-[1.15]">
               <p className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-400 font-light">
                 This is not a system that tries to be correct.
               </p>
               <p className="text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-950 pt-4 font-medium">
                 It is a system where incorrect execution <br/>
                 <span className="italic lowercase text-indigo-600">is not possible.</span>
               </p>
            </div>
         </div>
      </Section>

    </main>
  );
}
