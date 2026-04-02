import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Artifact Studio | Constitutional AI Governance for Enterprise",
  description: "Govern every prompt, model, agent, and workflow your organisation deploys. Constitutional lifecycle governance, immutable audit trails, authority hierarchy enforcement. OBSERVE to SOVEREIGN.",
};

export default function AIArtifactStudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
