"use client";

import { NS_COLORS } from "@/lib/docs/design-tokens";
import { ColorSwatch } from "./ColorSwatch";

export function ColorPalette() {
  return (
    <div className="flex flex-col gap-12">
      
      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white" />
          Fondos
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ColorSwatch name="ns-bg-primary" value={NS_COLORS["bg-primary"]} usage="Fondo" />
          <ColorSwatch name="ns-bg-card" value={NS_COLORS["bg-card"]} usage="Fondo" />
          <ColorSwatch name="ns-bg-elevated" value={NS_COLORS["bg-elevated"]} usage="Fondo" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ns-fuchsia" />
          Acentos
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ColorSwatch name="ns-accent-violet" value={NS_COLORS["accent-violet"]} usage="Acento" />
          <ColorSwatch name="ns-accent-fuchsia" value={NS_COLORS["accent-fuchsia"]} usage="Acento" />
          <ColorSwatch name="ns-accent-cyan" value={NS_COLORS["accent-cyan"]} usage="Acento" />
          <ColorSwatch name="ns-gradient-primary" value={NS_COLORS["gradient-primary"]} usage="Acento" isGradient />
          <ColorSwatch name="ns-gradient-secondary" value={NS_COLORS["gradient-secondary"]} usage="Acento" isGradient />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-400" />
          Texto
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ColorSwatch name="ns-text-primary" value={NS_COLORS["text-primary"]} usage="Texto" />
          <ColorSwatch name="ns-text-secondary" value={NS_COLORS["text-secondary"]} usage="Texto" />
          <ColorSwatch name="ns-text-disabled" value={NS_COLORS["text-disabled"]} usage="Texto" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ns-success" />
          Semánticos
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSwatch name="ns-success" value={NS_COLORS.success} usage="Semántico" />
          <ColorSwatch name="ns-error" value={NS_COLORS.error} usage="Semántico" />
          <ColorSwatch name="ns-warning" value={NS_COLORS.warning} usage="Semántico" />
          <ColorSwatch name="ns-info" value={NS_COLORS.info} usage="Semántico" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.2)]" />
          Bordes
        </h4>
        <div className="bg-[#0A0A0F] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <div className="w-full h-12 flex items-center justify-center">
              <div className="w-full border-t" style={{ borderColor: NS_COLORS["border-subtle"] }} />
            </div>
            <span className="font-mono text-xs text-ns-cyan font-bold">ns-border-subtle</span>
            <span className="font-mono text-xs text-gray-400">{NS_COLORS["border-subtle"]}</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full h-12 flex items-center justify-center">
              <div className="w-full border-t" style={{ borderColor: NS_COLORS["border-default"] }} />
            </div>
            <span className="font-mono text-xs text-ns-cyan font-bold">ns-border-default</span>
            <span className="font-mono text-xs text-gray-400">{NS_COLORS["border-default"]}</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full h-12 flex items-center justify-center">
              <div className="w-full border-t" style={{ borderColor: NS_COLORS["border-strong"] }} />
            </div>
            <span className="font-mono text-xs text-ns-cyan font-bold">ns-border-strong</span>
            <span className="font-mono text-xs text-gray-400">{NS_COLORS["border-strong"]}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black/60" />
          Overlays y Glass Backgrounds
        </h4>
        <div className="relative p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fondo genérico para que se vea el cristal */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, #7C3AED 0%, transparent 50%), radial-gradient(circle at 80% 20%, #EC4899 0%, transparent 40%)' }} />
          
          <div className="flex flex-col gap-3 z-10">
            <div className="w-full h-24 rounded-xl shadow-lg border border-[rgba(255,255,255,0.1)]" style={{ background: NS_COLORS["overlay-dark"] }} />
            <span className="font-mono text-xs text-ns-cyan font-bold">ns-overlay-dark</span>
            <span className="font-mono text-xs text-gray-300">{NS_COLORS["overlay-dark"]}</span>
          </div>
          <div className="flex flex-col gap-3 z-10">
            <div className="w-full h-24 rounded-xl shadow-lg border border-[rgba(255,255,255,0.1)]" style={{ background: NS_COLORS["overlay-darker"] }} />
            <span className="font-mono text-xs text-ns-cyan font-bold">ns-overlay-darker</span>
            <span className="font-mono text-xs text-gray-300">{NS_COLORS["overlay-darker"]}</span>
          </div>
          <div className="flex flex-col gap-3 z-10">
            <div className="w-full h-24 rounded-xl shadow-lg border border-[rgba(255,255,255,0.2)] backdrop-blur-md" style={{ background: NS_COLORS["glass-bg"] }} />
            <span className="font-mono text-xs text-ns-cyan font-bold">ns-glass-bg</span>
            <span className="font-mono text-xs text-gray-300">{NS_COLORS["glass-bg"]}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
