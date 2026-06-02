"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: {
    name: string;
    description: string;
    price: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
    borderClass: string;
  };
}

export function PricingCard({ tier, className, ...props }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 glassmorphism rounded-3xl transition-all duration-300",
        tier.highlighted ? "scale-105 z-10 shadow-[0_0_40px_rgba(124,58,237,0.2)]" : "hover:scale-105",
        className
      )}
      style={{
        borderImage: tier.highlighted ? "linear-gradient(to right, #7C3AED, #EC4899) 1" : undefined,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: tier.highlighted ? "transparent" : "rgba(255,255,255,0.1)"
      }}
      {...props}
    >
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-ns-violet to-ns-fuchsia text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {tier.badge}
          </span>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-ns-muted text-sm">{tier.description}</p>
      </div>

      <div className="mb-8 flex items-baseline text-white">
        <span className="text-5xl font-display font-extrabold tracking-tight">{tier.price}</span>
        {tier.price !== "Gratis" && <span className="text-ns-muted ml-1 font-medium">/mes</span>}
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-ns-cyan shrink-0 mr-3" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300",
          tier.highlighted 
            ? "bg-gradient-to-r from-ns-violet to-ns-fuchsia text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]" 
            : "bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]"
        )}
      >
        Empezar ahora
      </button>
    </div>
  );
}
