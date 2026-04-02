import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission | The ATRIYA Constitutional Substrate",
  description: "The ATRIYA Intelligence Fabric doesn't build isolated tools. We build universal engines that specialize into sectors. HealthOS is the clinical adapter for the world's most sophisticated intelligence substrate.",
  keywords: ["ATRIYA Mission", "Substrate Kernel Foundation", "AI Safety", "Constitutional AI", "Substrate History", "Governance as Physics"],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
