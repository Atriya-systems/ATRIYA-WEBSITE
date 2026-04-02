"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function SecurityPolicy() {
  const sections = [
    {
      title: "1. Our security commitment",
      body: "ATRIYA is built on the principle that security cannot be an add-on; it must be the substrate. Our entire architecture is designed to enforce constitutional governance over every AI action."
    },
    {
      title: "2. Infrastructure security",
      body: "We utilise enterprise-grade cloud providers with robust physical and network security. All data is encrypted at rest and in transit using industry-standard cryptographic protocols."
    },
    {
      title: "3. Access control",
      body: "ATRIYA uses a constitutional authority model for system and data access. This is structurally enforced at the substrate level, moving beyond traditional ACL-based security that can be easily bypassed."
    },
    {
      title: "4. Audit and logging",
      body: "The platform maintains a hash-linked, immutable audit chain for all governed AI calls. Every decision, evaluation, and execution event is recorded and verifiable."
    },
    {
      title: "5. Vulnerability disclosure",
      body: "We welcome responsible disclosure of potential security vulnerabilities. Please report any issues to security@atriya.systems for timely assessment and remediation."
    },
    {
      title: "6. Penetration testing",
      body: "We conduct regular, independent penetration testing across our constitutional pipeline and audit infrastructure. Detailed reports are available to enterprise customers under NDA."
    },
    {
      title: "7. Incident response",
      body: "We maintain a robust incident response policy with a commitment to notify affected customers within established regulatory timeframes."
    },
    {
      title: "8. Contact",
      body: "For all security-related enquiries, please contact our security team at security@atriya.systems."
    }
  ];

  return (
    <main className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-24 min-h-screen font-sans">
      <SectionLabel>LEGAL</SectionLabel>
      <h1 className="text-4xl md:text-6xl font-display mt-8">Security Policy</h1>
      <p className="text-sm font-mono text-text-tertiary mt-4 uppercase tracking-widest">Public-facing security documentation</p>
      
      <div className="mt-24 space-y-16">
        <p className="text-text-tertiary italic p-6 border border-border bg-bg-secondary rounded-lg text-sm">
           This page is public-safe — designed for enterprise security 
           questionnaires. Keep technical enough to be credible, 
           without revealing architecture specifics.
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
