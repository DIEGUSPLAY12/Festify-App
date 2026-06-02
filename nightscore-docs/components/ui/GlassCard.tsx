import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean;
}

export function GlassCard({ className, hoverGlow = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glassmorphism rounded-2xl p-6 transition-all duration-300",
        hoverGlow && "hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-[rgba(124,58,237,0.4)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
