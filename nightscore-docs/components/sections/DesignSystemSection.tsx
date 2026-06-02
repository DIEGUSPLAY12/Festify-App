"use client";

import { Palette, Type, Ruler, Sparkle } from "lucide-react";
import { ColorPalette } from "../docs/design/ColorPalette";
import { TypeScale } from "../docs/design/TypeScale";
import { IconGrid } from "../docs/design/IconGrid";
import { NS_SHADOWS, NS_GLASSMORPHISM, NS_ANIMATIONS } from "@/lib/docs/design-tokens";

export function DesignSystemSection() {
  return (
    <section id="design-system" className="py-24 relative bg-[#0A0A0F] border-y border-[rgba(255,255,255,0.05)]">
      
      {/* HEADER */}
      <div className="container px-4 sm:px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-6">
          Design System
        </h2>
        <p className="text-lg text-ns-muted leading-relaxed max-w-3xl mb-8">
          Una guía de estilos limpia y directa con los tokens principales de Festify.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13131A] border border-[rgba(255,255,255,0.08)] text-sm text-gray-300">
            <Palette className="w-4 h-4 text-ns-fuchsia" /> Colores
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13131A] border border-[rgba(255,255,255,0.08)] text-sm text-gray-300">
            <Type className="w-4 h-4 text-ns-cyan" /> Tipografía
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13131A] border border-[rgba(255,255,255,0.08)] text-sm text-gray-300">
            <Sparkle className="w-4 h-4 text-ns-violet" /> Efectos
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 space-y-24">
        
        {/* COLORES */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[rgba(255,255,255,0.05)] pb-4">Paleta de Colores</h3>
          <ColorPalette />
        </div>

        {/* TIPOGRAFIA */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[rgba(255,255,255,0.05)] pb-4">Tipografía</h3>
          <TypeScale />
        </div>


        {/* SOMBRAS Y GLASSMORPHISM ESTÁTICO */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[rgba(255,255,255,0.05)] pb-4">Sombras y Glassmorphism</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.entries(NS_SHADOWS).map(([name, value]) => (
              <div key={name} className="flex flex-col gap-4 bg-[#13131A] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)]">
                <div 
                  className="w-full h-16 bg-[#1C1C2A] rounded-xl border border-[rgba(255,255,255,0.1)]"
                  style={{ boxShadow: value }}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="font-mono text-sm font-bold text-ns-cyan">{name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative p-8 rounded-3xl bg-[#050508] border border-[rgba(255,255,255,0.05)] overflow-hidden">
            <div className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, #7C3AED 0%, transparent 40%), radial-gradient(circle at 10% 90%, #EC4899 0%, transparent 40%)' }} />
            
            <div className="z-10 h-32 rounded-2xl p-6 flex flex-col justify-end shadow-xl" style={NS_GLASSMORPHISM.subtle as React.CSSProperties}>
              <span className="text-white font-bold">Glass Subtle</span>
            </div>
            <div className="z-10 h-32 rounded-2xl p-6 flex flex-col justify-end shadow-xl" style={NS_GLASSMORPHISM.standard as React.CSSProperties}>
              <span className="text-white font-bold">Glass Standard</span>
            </div>
            <div className="z-10 h-32 rounded-2xl p-6 flex flex-col justify-end shadow-xl" style={NS_GLASSMORPHISM.elevated as React.CSSProperties}>
              <span className="text-white font-bold">Glass Elevated</span>
            </div>
          </div>
        </div>

        {/* ANIMACIONES (Estático) */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[rgba(255,255,255,0.05)] pb-4">Animaciones Básicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(NS_ANIMATIONS.catalog).map(([name, data]) => (
              <div key={name} className="bg-[#13131A] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)]">
                <span className="font-mono text-ns-cyan font-bold block mb-2">{name}</span>
                <p className="text-sm text-gray-400 mb-4">{data.description}</p>
                <div className="flex gap-2 text-[10px] uppercase font-mono text-ns-muted">
                  <span className="bg-white/5 px-2 py-1 rounded">{data.duration}</span>
                  <span className="bg-white/5 px-2 py-1 rounded truncate">{data.easing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ICONOS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[rgba(255,255,255,0.05)] pb-4">Iconografía</h3>
          <IconGrid />
        </div>

      </div>
    </section>
  );
}
