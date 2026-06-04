import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-[rgba(124,58,237,0.15)] text-ns-violet border border-[rgba(124,58,237,0.3)]",
    success: "bg-[rgba(34,197,94,0.15)] text-ns-success border border-[rgba(34,197,94,0.3)]",
    warning: "bg-[rgba(234,179,8,0.15)] text-yellow-400 border border-[rgba(234,179,8,0.3)]",
    error: "bg-[rgba(239,68,68,0.15)] text-ns-error border border-[rgba(239,68,68,0.3)]",
    outline: "bg-transparent text-ns-muted border border-[rgba(255,255,255,0.1)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ns-violet focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
