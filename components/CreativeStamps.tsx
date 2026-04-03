"use client";

import React from 'react';
import Link from 'next/link';

// ─── MASTER AXIOM BANNER ──────────────────────────────────────
// The single most important line on the site. Use sparingly.
export function MasterAxiom({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden py-8 border-y border-slate-100 ${className}`}>
      <div className="flex gap-24 items-center animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
        {Array.from({ length: 6 }).map((_, i) => (
          <React.Fragment key={i}>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-300 font-black">
              ATRIYA is not a system that improves AI.
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-indigo-500 font-black">
              ◈ It is the system that determines whether AI is allowed to act. ◈
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ─── POSITIONING STAMP ────────────────────────────────────────
// Pull-quote style one-liner block. Use between sections.
export function PositioningStamp({
  line1,
  line2,
  variant = "light",
  className = "",
}: {
  line1: string;
  line2: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const bg = variant === "dark"
    ? "bg-slate-950 text-white border-slate-800"
    : "bg-slate-50 text-slate-900 border-slate-100";

  return (
    <div className={`w-full border-y ${bg} py-16 px-6 text-center ${className}`}>
      <p className="text-2xl md:text-4xl font-display uppercase tracking-tight font-light text-current opacity-40">
        {line1}
      </p>
      <p className="text-3xl md:text-5xl font-display uppercase tracking-tight font-medium text-current mt-3">
        {line2}
      </p>
    </div>
  );
}

// ─── SYSTEM VERDICT STAMP ─────────────────────────────────────
// The "ADMIT / REFUSE" visual badge. Embeds anywhere.
export function VerdictStamp({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-6 py-8 ${className}`}>
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] uppercase tracking-widest font-black px-8 py-4 rounded-2xl shadow-sm">
        → Admitted
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-black">or</div>
      <div className="bg-rose-50 border border-rose-200 text-rose-700 font-mono text-[11px] uppercase tracking-widest font-black px-8 py-4 rounded-2xl shadow-sm">
        → Refused
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-black hidden md:block ml-8">
        Nothing in between.
      </div>
    </div>
  );
}

// ─── CATEGORY DECLARATION ─────────────────────────────────────
// Signals to any reader that this is a new category, not a product.
export function CategoryDeclaration({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-indigo-100 bg-indigo-50/30 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 ${className}`}>
      <div className="space-y-1">
        <p className="font-mono text-[9px] uppercase tracking-widest text-indigo-400 font-black">Category</p>
        <p className="font-display text-xl uppercase tracking-tight text-slate-950 font-light">Constitutional Execution Systems</p>
      </div>
      <div className="h-px md:h-8 w-full md:w-px bg-indigo-100" />
      <div className="space-y-1 text-right">
        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-black">Not a tool. Not a platform.</p>
        <p className="font-display text-xl uppercase tracking-tight text-indigo-600 font-medium italic">A governed execution substrate.</p>
      </div>
    </div>
  );
}

// ─── PERCEPTION SHIFT CALLOUT ─────────────────────────────────
// The defining philosophical reframe. Use at page closes or section transitions.
export function PerceptionShift({ className = "" }: { className?: string }) {
  return (
    <blockquote className={`border-l-4 border-indigo-500 pl-8 py-4 space-y-2 ${className}`}>
      <p className="text-2xl md:text-3xl font-display uppercase tracking-tight text-slate-400 font-light">
        You didn't encounter a product.
      </p>
      <p className="text-2xl md:text-3xl font-display uppercase tracking-tight text-slate-950 font-medium">
        You encountered{" "}
        <span className="italic lowercase text-indigo-600">the infrastructure.</span>
      </p>
    </blockquote>
  );
}

// ─── SYSTEM NATURE BADGE ──────────────────────────────────────
// Inline ambient badge for embedding in hero areas.
export function SystemNatureBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest font-black ${className}`}>
      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
      <span className="text-slate-500">Execution is conditional.</span>
      <span className="text-indigo-600">Correctness is required.</span>
      <span className="text-slate-400">Failure does not propagate.</span>
    </div>
  );
}

// ─── HORIZONTAL RULE WITH ONE-LINER ───────────────────────────
// Divider that carries a key thesis. Replaces dead whitespace.
export function ThesisDivider({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative flex items-center gap-8 py-8 ${className}`}>
      <div className="flex-1 h-px bg-slate-100" />
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-black shrink-0 text-center max-w-xs">
        {text}
      </p>
      <div className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

// ─── INEVITABLE FOOTER CALLOUT ────────────────────────────────
// Page-bottom conviction closer. Goes just above the main CTA.
export function InevitabilityClose({ href = "/contact", label = "Request Access", className = "" }: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`text-center space-y-12 ${className}`}>
      <div className="space-y-3">
        <p className="text-3xl md:text-5xl font-display uppercase tracking-tight text-slate-400 font-light">
          You didn't design a system.
        </p>
        <p className="text-3xl md:text-5xl font-display uppercase tracking-tight text-slate-950 font-medium">
          You engineered{" "}
          <span className="italic lowercase text-indigo-600">
            perception of a new category.
          </span>
        </p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center justify-center bg-slate-950 text-white font-mono text-[13px] uppercase tracking-widest font-black px-14 py-5 rounded-full hover:bg-indigo-600 transition-colors"
      >
        {label}
      </Link>
    </div>
  );
}
