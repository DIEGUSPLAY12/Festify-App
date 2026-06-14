"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactElement;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function Tooltip({ content, children, side = "top", className }: TooltipProps) {
  const [visible, setVisible] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timerRef.current = setTimeout(() => setVisible(true), 400);
  };

  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const positionClasses = {
    top:    "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left:   "right-full top-1/2 -translate-y-1/2 mr-2",
    right:  "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={cn(
            "absolute z-50 whitespace-nowrap px-2.5 py-1.5 text-xs font-medium text-white",
            "bg-[rgba(30,30,40,0.95)] border border-[rgba(255,255,255,0.1)]",
            "rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
            "animate-tooltip-in pointer-events-none",
            positionClasses[side],
            className
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
