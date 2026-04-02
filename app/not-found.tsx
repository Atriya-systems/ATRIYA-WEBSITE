"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-6 text-center space-y-12 relative overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] bg-[linear-gradient(to_right,#1E2436_1px,transparent_1px),linear-gradient(to_bottom,#1E2436_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 space-y-4">
        <AlertTriangle className="text-gold mx-auto mb-8 animate-pulse" size={48} />
        <h1 className="text-5xl md:text-7xl font-display text-text-primary leading-tight">This page doesn&apos;t exist.</h1>
        <p className="text-xl text-text-secondary font-sans max-w-xl mx-auto">
          If you were looking for something specific, let us know.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6">
        <Button size="lg" className="h-16 px-12">
          <Link href="/">Go Home →</Link>
        </Button>
        <Button variant="secondary" size="lg" className="h-16 px-12">
          <Link href="/contact">Contact Us →</Link>
        </Button>
      </div>
    </div>
  );
}
