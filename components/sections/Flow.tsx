import React from 'react';

export function Flow({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {children}
    </div>
  );
}
