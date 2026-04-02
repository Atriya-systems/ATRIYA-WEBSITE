import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance | Structural AI Governance",
  description: "EU AI Act, India DPDP Act, GDPR, RBI AI Guidelines \u2014 compliance proofs generated as a structural output of every governed AI decision. Not configured. Not documented. Structural.",
};

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
