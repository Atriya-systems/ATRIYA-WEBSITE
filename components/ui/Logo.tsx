"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "icon-only" | "full" | "text-only";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { h: 24, w: 24, text: "text-lg" },
    md: { h: 32, w: 32, text: "text-xl" },
    lg: { h: 48, w: 48, text: "text-2xl" },
    xl: { h: 80, w: 80, text: "text-4xl" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3 group select-none", className)}>
      {(variant === "full" || variant === "icon-only") && (
        <div 
          className="relative flex items-center justify-center shrink-0" 
          style={{ height: currentSize.h, width: currentSize.w }}
        >
          {/* STYLIZED 'A' ICON (Inspired by the provided image) */}
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-current transition-colors duration-500"
          >
            <path 
              d="M50 15L15 85H28L50 38L72 85H85L50 15Z" 
              fill="currentColor" 
              className="opacity-90"
            />
            {/* The gap element from the logo image */}
            <path 
              d="M20 78L28 85H15L20 78Z" 
              fill="var(--bg-primary)" 
            />
            <path 
              d="M75 78L72 85H85L75 78Z" 
              fill="var(--bg-primary)" 
            />
            {/* The stylized split diagonal and crossbar gaps */}
            <rect x="42" y="55" width="16" height="4" fill="var(--bg-primary)" transform="rotate(-60 42 55)" />
            <rect x="58" y="55" width="16" height="4" fill="var(--bg-primary)" transform="rotate(60 58 55)" />
          </svg>
        </div>
      )}

      {(variant === "full" || variant === "text-only") && (
        <span 
          className={cn(
            "font-sans font-medium tracking-[0.3em] uppercase text-current transition-colors duration-500",
            currentSize.text
          )}
        >
          {/* Styling 'A' like triangles as in the logo image */}
          <span className="relative">
            A
            <div className="absolute bottom-[0.45em] left-1 right-1 h-[2px] bg-bg-primary" />
          </span>
          TRIY
          <span className="relative">
             A
             <div className="absolute bottom-[0.45em] left-1 right-1 h-[2px] bg-bg-primary" />
          </span>
        </span>
      )}
    </div>
  );
}

// SIMPLIFIED LOGO - TEXT ONLY VERSION WITH SPECIFIC FONT WEIGHT
export function LogoText({ className }: { className?: string }) {
   return (
    <div className={cn("flex items-center gap-2", className)}>
        <span className="font-sans font-medium tracking-[0.4em] uppercase text-current flex items-center">
            {/* The 'A' with no cross-bar look */}
            <span className="inline-block relative px-px">
                <svg width="0.8em" height="0.8em" viewBox="0 0 100 100" className="inline-block align-middle fill-current">
                   <path d="M50 10 L10 90 H90 L50 10" />
                   <path d="M30 90 L50 40 L70 90 Z" fill="white" className="dark:fill-black" style={{ fill: 'var(--color-bg-primary)'}} />
                </svg>
            </span>
            <span className="ml-[-0.1em]">TRIY</span>
            <span className="inline-block relative px-px">
                <svg width="0.8em" height="0.8em" viewBox="0 0 100 100" className="inline-block align-middle fill-current">
                   <path d="M50 10 L10 90 H90 L50 10" />
                   <path d="M30 90 L50 40 L70 90 Z" fill="white" className="dark:fill-black" style={{ fill: 'var(--color-bg-primary)'}} />
                </svg>
            </span>
        </span>
    </div>
   );
}
