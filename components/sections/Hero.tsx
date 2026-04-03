import React from 'react';

export function Hero({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
