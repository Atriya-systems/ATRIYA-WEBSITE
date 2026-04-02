"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Who we are",
      body: "ATRIYA Systems Private Limited, a company incorporated in India, with its registered office in Gurugram, Haryana, India."
    },
    {
      title: "2. What data we collect",
      body: "We collect website analytics, contact form submissions, and customer account data for Education Platform users. This includes name, email, role, fund/organisation information, and payment-related data necessary for service provision."
    },
    {
      title: "3. How we use data",
      body: "We use data for operating and improving our service, processing transactions, communicating with you, and ensuring the constitutional governance of AI calls through our infrastructure."
    },
    {
      title: "4. Legal basis for processing",
      body: "We process data based on consent, legitimate interest, and contractual necessity — particularly for the provision of governed AI services."
    },
    {
      title: "5. Data sharing",
      body: "We do not sell data. We only share limited data with essential infrastructure providers as required for our platform's operation."
    },
    {
      title: "6. Data retention",
      body: "We specify retention periods per data type, adhering to both the Digital Personal Data Protection Act 2023 and other jurisdictional requirements."
    },
    {
      title: "7. Your rights",
      body: "You have rights to access, correction, erasure, and portability — referencing both GDPR and the India DPDP Act 2023. Our platform provides structural proofs for erasure events."
    },
    {
      title: "8. Cookies",
      body: "We use analytics cookies only with your explicit consent through our cookie consent mechanism."
    },
    {
      title: "9. Data transfers",
      body: "Data is transferred and processed within sovereign boundaries as configured by our customers' deployment models."
    },
    {
      title: "10. Contact and complaints",
      body: "Questions or complaints regarding data processing can be addressed to our Data Protection Officer at privacy@atriya.systems."
    }
  ];

  return (
    <main className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-24 min-h-screen font-sans">
      <SectionLabel>LEGAL</SectionLabel>
      <h1 className="text-4xl md:text-6xl font-display mt-8">Privacy Policy</h1>
      <p className="text-sm font-mono text-text-tertiary mt-4 uppercase tracking-widest">Effective Date: [TO BE COMPLETED BY LEGAL] · Last Updated: March 2026</p>
      
      <div className="mt-24 space-y-16">
        <p className="text-text-tertiary italic p-6 border border-border bg-bg-secondary rounded-lg text-sm">
           NOTE: This is a template structure. All legal pages must be reviewed and approved by qualified 
           legal counsel before publication. Placeholder text [TO BE COMPLETED BY LEGAL] in any section 
           that requires specific legal drafting.
        </p>

        {sections.map((section, idx) => (
           <section key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold font-display">{section.title}</h2>
              <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">{section.body}</p>
           </section>
        ))}
      </div>
    </main>
  );
}
