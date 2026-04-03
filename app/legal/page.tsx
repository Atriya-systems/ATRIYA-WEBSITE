import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';

export default function LegalPage() {
  return (
    <main className="relative bg-white text-slate-900 selection:bg-indigo-100 min-h-screen pt-24 font-sans">
      <Hero className="py-24 border-b border-slate-100 bg-slate-50 rounded-b-[4rem]">
        <div className="max-w-4xl mx-auto text-center space-y-12 pb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight font-light uppercase text-slate-950">
            Legal <span className="italic lowercase text-slate-500 font-medium">Framework.</span>
          </h1>

          <div className="space-y-6 pt-12 text-xl font-light text-slate-500 leading-relaxed max-w-2xl mx-auto">
            <p className="text-slate-900 font-medium text-2xl border-b border-slate-200 pb-4 mb-4">ATRIYA operates within defined legal and regulatory frameworks.</p>
            <p className="pt-4 text-[11px] font-mono uppercase tracking-widest font-black text-slate-400">This section outlines:</p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-left w-max mx-auto border-l border-slate-200 ml-[50%] -translate-x-1/2">
               <li>usage conditions</li>
               <li>data handling practices</li>
               <li>user responsibilities</li>
            </ul>
          </div>
        </div>
      </Hero>

      <Section className="py-32 max-w-4xl mx-auto space-y-24 mb-32">
         <div className="space-y-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-display uppercase tracking-tight text-slate-900 border-b border-slate-100 pb-4">Terms of Use</h2>
            <div className="text-xl text-slate-600 font-light space-y-4 leading-relaxed">
               <p>Access to the ATRIYA execution environment is subject to strictly enforced terms governing admissible usage and computational boundaries. Unauthorized attempts to bypass constraints or force unvalidated execution are strictly prohibited.</p>
            </div>
         </div>
         
         <div className="space-y-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-display uppercase tracking-tight text-slate-900 border-b border-slate-100 pb-4">Privacy Policy</h2>
            <div className="text-xl text-slate-600 font-light space-y-4 leading-relaxed">
               <p>We govern data with the same strictness as execution. Information submitted for evaluation relies on explicit user intent, and is never utilized outside the bounds of defined processing and execution directives.</p>
            </div>
         </div>

         <div className="space-y-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-display uppercase tracking-tight text-slate-900 border-b border-slate-100 pb-4">Data Handling</h2>
            <div className="text-xl text-slate-600 font-light space-y-4 leading-relaxed">
               <p>All recorded validation requests and outcomes are tightly sealed to ensure auditability and consistent deterministic recreation, complying with sovereign deployment logic as established by client governance conditions.</p>
            </div>
         </div>
      </Section>
    </main>
  );
}
