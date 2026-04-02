import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        live: "border-border bg-bg-primary text-text-primary tracking-widest px-3 py-1",
        partners: "border-border bg-bg-primary text-text-secondary tracking-widest px-3",
        platform: "border-border bg-bg-primary text-text-tertiary tracking-widest px-3",
        muted: "border-border bg-bg-tertiary text-text-tertiary tracking-widest px-3",
        outline: "border-border text-text-tertiary tracking-widest",
      },
    },
    defaultVariants: {
      variant: "platform",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
