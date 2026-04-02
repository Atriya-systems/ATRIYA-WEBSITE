import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Substrate | The Constitutional AI Kernel",
  description: "The Constitutional Substrate and the Canonical 4-Row Architecture. How ATRIYA transforms AI governance into physics through the provable substrate trace.",
  keywords: ["Constitutional AI", "4-Row Architecture", "Substrate Kernel", "Governance as Physics", "Execution Trace", "ATRIYA Platform"],
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
