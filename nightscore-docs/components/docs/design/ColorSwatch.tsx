"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  name: string;
  value: string;
  usage: "Fondo" | "Acento" | "Texto" | "Borde" | "Sombra" | "Semántico";
  isGradient?: boolean;
}

export function ColorSwatch({ name, value, usage, isGradient }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col gap-3 group relative">
      <button 
        onClick={handleCopy}
        className="w-full h-20 rounded-xl border border-[rgba(255,255,255,0.05)] shadow-lg overflow-hidden relative cursor-copy transition-transform active:scale-95"
        style={{ background: value }}
        title={`Copiar ${value}`}
      >
        {/* Overlay hover feedback */}
        <div className={cn(
          "absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-200",
          copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}>
          {copied ? (
            <div className="flex flex-col items-center text-ns-success drop-shadow-md">
              <Check className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">¡Copiado!</span>
            </div>
          ) : (
            <span className="text-[10px] font-bold text-white uppercase tracking-wider drop-shadow-md">
              Copiar HEX
            </span>
          )}
        </div>
      </button>

      <div className="flex flex-col gap-1 px-1">
        <span className="font-mono text-xs text-ns-cyan font-bold">{name}</span>
        <span className="font-mono text-xs text-gray-400 break-all">{value}</span>
        
        <div className="mt-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-ns-muted border border-white/10">
            {usage}
          </span>
        </div>
      </div>
    </div>
  );
}
