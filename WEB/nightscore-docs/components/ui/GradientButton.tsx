import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full px-6 py-3 min-h-[40px] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ns-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ns-bg overflow-hidden transition-[transform,box-shadow,border-color,background-color] duration-[150ms]";

    const variants = {
      primary: "bg-gradient-to-r from-ns-violet to-ns-fuchsia text-white hover:-translate-y-px hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] active:translate-y-0 active:shadow-none",
      ghost: "text-ns-text hover:text-white bg-transparent hover:-translate-y-px hover:bg-[rgba(255,255,255,0.05)] active:translate-y-0",
      outline: "border border-[rgba(255,255,255,0.1)] text-ns-text hover:border-[rgba(124,58,237,0.5)] hover:text-white hover:-translate-y-px hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] active:translate-y-0 active:shadow-none bg-transparent",
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
