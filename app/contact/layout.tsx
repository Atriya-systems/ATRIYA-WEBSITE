import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ATRIYA Systems",
  description: "Enterprise partnerships, investor inquiries, developer access, and press. ATRIYA Systems, Gurugram, India. Response within 2 business days.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
