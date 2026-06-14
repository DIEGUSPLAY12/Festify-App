import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean;
}

export function GlassCard({ className, hoverGlow = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glassmorphism rounded-[10px] p-6 transition-[transform,box-shadow,border-color] duration-[180ms]",
        hoverGlow && "hover:-translate-y-[2px] hover:shadow-[0_4px_20px_rgba(124,58,237,0.25),_0_2px_8px_rgba(0,0,0,0.12)] hover:border-[rgba(124,58,237,0.4)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
