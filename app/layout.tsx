import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { AnnouncementBanner, Navbar, Footer, CookieConsent } from "@/components/Navbar";

const newsreader = Newsreader({ 
  subsets: ["latin"], 
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#4F46E5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: "%s | ATRIYA Systems",
    default: "ATRIYA | The Constitutional Substrate for Provable AI Execution",
  },
  description: "ATRIYA is the world's first governed execution substrate. Built on verifiable invariants and a universal intelligence fabric. Governance as Physics for the Multi-Agent Enterprise.",
  keywords: ["AI Governance", "Constitutional AI", "Executive Substrate", "Provable AI", "Cognitive Substrate", "Decision Kernel", "Audit Fabric", "Enterprise AI Safety"],
  authors: [{ name: "ATRIYA Systems" }],
  openGraph: {
    title: "ATRIYA | Constitutional AI Execution Platform",
    description: "The execution substrate for the multi-agent enterprise. Governance as physics, not policy.",
    url: "https://atriya.systems",
    siteName: "ATRIYA",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${jakarta.variable} ${jetbrains.variable} ${outfit.variable} antialiased bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900`}>
        <AnnouncementBanner />
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
