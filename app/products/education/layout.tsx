import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AcademicOS | The Sovereign Learning Substrate",
  description: "AcademicOS (EducationOS) is a specialized application layer built on universal cognitive logic. Leveraging proprietary engines for Kota-level student optimization at scale. Powered by sequential reasoning and cognitive twins.",
  keywords: ["AcademicOS", "Education AI", "JEE AI Prep", "NEET AI Prep", "Cognitive Twin", "Reasoning Engine", "ATRIYA Education"],
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
