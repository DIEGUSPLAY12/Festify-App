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

  return (
    <div
      className={cn(
        "relative mx-auto bg-[#0D0D1A] rounded-[38px] shadow-xl shrink-0 group/phone transition-colors duration-300 w-full h-auto overflow-hidden",
        className
      )}
    >
      {hasError ? (
        <div className="w-full min-h-[500px] bg-[#0D0D1A] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-full h-full absolute inset-0 skeleton-shimmer opacity-10" />
          <span className="font-mono text-ns-cyan text-sm font-bold mb-2 tracking-wider z-10">{screen.code}</span>
          <span className="font-display font-semibold text-white text-base leading-tight z-10">{screen.name}</span>
          <span className="text-xs text-ns-muted mt-4 font-medium z-10">Imagen pendiente</span>
        </div>
      ) : (
        <Image
          src={`${process.env.NODE_ENV === "production" ? "/Festify-App" : ""}${screen.imagePath}`}
          alt={screen.name}
          width={1080}
          height={2400}
          className="w-full h-auto block object-cover transition-transform duration-500"
          style={{ width: "100%", height: "auto" }}
          priority={priority}
          onError={() => setHasError(true)}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          unoptimized={process.env.NODE_ENV === "development"} // Facilita dev local sin imagenes
        />
      )}
    </div>
  );
}
