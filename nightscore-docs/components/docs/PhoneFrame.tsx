"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MockupScreen } from "@/lib/docs/mockups-data";

interface PhoneFrameProps {
  screen: MockupScreen;
  className?: string;
  priority?: boolean;
}

export function PhoneFrame({ screen, className, priority = false }: PhoneFrameProps) {
  const [hasError, setHasError] = useState(false);
  const isRecap = screen.aspectRatio === "9/16";

  return (
    <div
      className={cn(
        "relative mx-auto bg-[#1C1C1E] rounded-[38px] p-[12px] border-[3px] border-[#2C2C2E] shadow-xl shrink-0 overflow-hidden group/phone transition-colors duration-300",
        isRecap ? "aspect-[9/16]" : "aspect-[9/19.5]",
        className
      )}
    >
      {/* Botones físicos simulados */}
      {!isRecap && (
        <>
          <div className="absolute left-[-4px] top-[100px] w-[3px] h-[26px] bg-[#2C2C2E] rounded-l-md" />
          <div className="absolute left-[-4px] top-[140px] w-[3px] h-[50px] bg-[#2C2C2E] rounded-l-md" />
          <div className="absolute left-[-4px] top-[200px] w-[3px] h-[50px] bg-[#2C2C2E] rounded-l-md" />
          <div className="absolute right-[-4px] top-[160px] w-[3px] h-[70px] bg-[#2C2C2E] rounded-r-md" />
        </>
      )}

      {/* Pantalla interior */}
      <div className="relative w-full h-full bg-black rounded-[24px] overflow-hidden">
        
        {/* Dynamic Island (sólo para 9/19.5) */}
        {!isRecap && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-20 flex justify-center items-center">
            {/* Lente simulado */}
            <div className="absolute right-2 w-3 h-3 rounded-full bg-[#1A1A2E] border border-gray-800/50" />
          </div>
        )}

        {/* Imagen o Fallback */}
        {hasError ? (
          <div className="absolute inset-0 bg-[#0D0D1A] flex flex-col items-center justify-center p-4 text-center">
            <div className="w-full h-full absolute inset-0 skeleton-shimmer opacity-10" />
            <span className="font-mono text-ns-cyan text-sm font-bold mb-2 tracking-wider z-10">{screen.code}</span>
            <span className="font-display font-semibold text-white text-base leading-tight z-10">{screen.name}</span>
            <span className="text-xs text-ns-muted mt-4 font-medium z-10">Imagen pendiente</span>
          </div>
        ) : (
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/Festify-App" : ""}${screen.imagePath}`}
            alt={screen.name}
            fill
            className="object-cover transition-transform duration-500"
            priority={priority}
            onError={() => setHasError(true)}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            unoptimized={process.env.NODE_ENV === "development"} // Facilita dev local sin imagenes
          />
        )}

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[40px] h-[4px] bg-white/30 rounded-full z-20" />
      </div>
    </div>
  );
}
