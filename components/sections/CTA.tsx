import React from 'react';

export function CTA({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-32 text-center space-y-12 md:space-y-16 mb-24 md:mb-48 pb-24 md:pb-48 ${className}`}>
      {children}
    </section>
  );
}
