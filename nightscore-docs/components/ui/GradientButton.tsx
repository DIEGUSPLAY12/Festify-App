import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ns-violet focus:ring-offset-2 focus:ring-offset-ns-bg overflow-hidden";
    
    const variants = {
      primary: "bg-gradient-to-r from-ns-violet to-ns-fuchsia text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]",
      ghost: "text-ns-text hover:text-white bg-transparent hover:bg-[rgba(255,255,255,0.05)]",
      outline: "border border-[rgba(255,255,255,0.1)] text-ns-text hover:border-[rgba(124,58,237,0.5)] hover:text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] bg-transparent",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
