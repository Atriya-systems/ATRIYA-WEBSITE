"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of terms",
      body: "By accessing or using the ATRIYA platform, website, or products (including Education Platform), you agree to be bound by these terms. If you do not agree to these terms, you must not access or use our services."
    },
    {
      title: "2. Description of services",
      body: "ATRIYA Systems provides a constitutional AI execution platform and vertical solutions such as Education Platform. Our services are described as informational and for evaluation purposes on our website."
    },
    {
      title: "3. Account registration and responsibilities",
      body: "You must provide accurate and complete information during registration. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account."
    },
    {
      title: "4. Acceptable use policy",
      body: "You agree not to use our services for any purpose that is prohibited by these terms or by any applicable law, including the India Information Technology Act 2000 and the Digital Personal Data Protection Act 2023."
    },
    {
      title: "5. Intellectual property",
      body: "ATRIYA and its original content, features, and functionality are and will remain the exclusive property of ATRIYA Systems Private Limited. This includes all proprietary technologies and the constitutional governance substrate."
    },
    {
      title: "6. Subscription terms and billing",
      body: "[TO BE COMPLETED BY LEGAL COUNSEL] - For Education Platform users, subscription and billing terms are specified on our website. Payments are processed through governed providers and are non-refundable except as required by law."
    },
    {
      title: "7. Termination",
      body: "We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach the terms."
    },
    {
      title: "8. Disclaimer of warranties",
      body: "Your use of our services is at your sole risk. Our services are provided on an 'AS IS' and 'AS AVAILABLE' basis."
    },
    {
      title: "9. Limitation of liability",
      body: "In no event shall ATRIYA Systems Private Limited be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
    },
    {
      title: "10. Governing law",
      body: "These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Jurisdiction is Gurugram, Haryana, India."
    },
    {
      title: "11. Dispute resolution",
      body: "Any dispute arising from these terms will be resolved through arbitration in accordance with India's Arbitration and Conciliation Act. Venue: Gurugram."
    },
    {
      title: "12. Changes to terms",
      body: "We reserve the right to modify or replace these terms at any time. We will provide notice of any material changes through our website."
    }
  ];

  return (
    <main className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-24 min-h-screen font-sans">
      <SectionLabel>LEGAL</SectionLabel>
      <h1 className="text-4xl md:text-6xl font-display mt-8">Terms of Service</h1>
      <p className="text-sm font-mono text-text-tertiary mt-4 uppercase tracking-widest">Last updated: March 2026</p>
      
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
