import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-text-primary text-bg-primary hover:bg-gold transition-all duration-300",
        secondary: "border border-border text-text-primary hover:bg-bg-secondary transition-colors",
        ghost: "hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-colors",
        outline: "border border-border bg-transparent hover:bg-bg-secondary text-text-primary transition-colors",
      },
      size: {
        default: "h-10 px-6 py-2 rounded-lg",
        sm: "h-8 px-4 py-1 text-xs rounded-lg",
        lg: "h-12 px-8 py-3 text-base rounded-lg",
        icon: "h-9 w-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
