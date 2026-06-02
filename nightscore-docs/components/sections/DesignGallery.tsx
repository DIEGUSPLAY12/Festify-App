"use client";

import { useMockupsStore } from "@/lib/store/mockupsStore";
import { BlockSelector } from "@/components/docs/BlockSelector";
import { MockupToolbar } from "@/components/docs/MockupToolbar";
import { MockupGrid } from "@/components/docs/MockupGrid";
import { UserFlowView } from "@/components/docs/UserFlowView";
import { MockupModal } from "@/components/docs/MockupModal";
import { TOTAL_SCREENS, MOCKUP_BLOCKS } from "@/lib/docs/mockups-data";
import { Smartphone, LayoutTemplate, Layers, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function DesignGallery() {
  const { activeTab, setActiveTab } = useMockupsStore();

  return (
    <section id="gallery" className="py-24 relative bg-[#0A0A0F] min-h-screen">
      {/* Header de la sección */}
      <div className="container px-4 sm:px-6 mb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">Pantallas de la App</h2>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-ns-violet/20 text-ns-fuchsia border border-ns-violet/30 hidden sm:inline-block">
              {TOTAL_SCREENS} pantallas · iOS & Android
            </span>
          </div>
          <p className="text-lg text-ns-muted leading-relaxed mb-8">
            Explora el diseño completo de NightScore pantalla por pantalla. Haz clic en cualquier miniatura para verla en detalle.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13131A] border border-[rgba(255,255,255,0.05)] text-sm text-gray-300">
              <Layers className="w-4 h-4 text-ns-cyan" />
              {MOCKUP_BLOCKS.length} bloques funcionales
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13131A] border border-[rgba(255,255,255,0.05)] text-sm text-gray-300">
              <LayoutTemplate className="w-4 h-4 text-ns-fuchsia" />
              {TOTAL_SCREENS} pantallas diseñadas
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13131A] border border-[rgba(255,255,255,0.05)] text-sm text-gray-300">
              <Smartphone className="w-4 h-4 text-amber-500" />
              iPhone 14 Pro · Android Pixel 7
            </div>
          </div>
        </div>

        {/* Tab Toggle (Galería vs Flujo) */}
        <div className="flex bg-[#13131A] p-1 rounded-2xl w-fit border border-[rgba(255,255,255,0.05)]">
          <button
            onClick={() => setActiveTab('grid')}
            className={cn(
              "px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
              activeTab === 'grid' 
                ? "bg-ns-violet text-white shadow-lg" 
                : "text-ns-muted hover:text-white"
            )}
          >
            📱 Galería
          </button>
          <button
            onClick={() => setActiveTab('flow')}
            className={cn(
              "px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
              activeTab === 'flow' 
                ? "bg-ns-violet text-white shadow-lg" 
                : "text-ns-muted hover:text-white"
            )}
          >
            🔀 Flujo de usuario
          </button>
        </div>
      </div>

      {activeTab === 'grid' && (
        <BlockSelector />
      )}

      <div className="container px-4 sm:px-6">
        {activeTab === 'grid' && <MockupToolbar />}
        
        <div className="mb-20">
          {activeTab === 'grid' ? <MockupGrid /> : <UserFlowView />}
        </div>

        {/* Footer Técnico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-[rgba(255,255,255,0.05)]">
          <div className="bg-[#13131A] rounded-3xl p-6 lg:p-8 border border-[rgba(255,255,255,0.05)]">
            <h4 className="text-xl font-display font-bold text-white mb-6">Dispositivos de referencia</h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-[#1A1A2E] rounded-2xl">
                <p className="text-white font-bold mb-1">iOS</p>
                <p className="text-sm text-ns-muted">iPhone 14 Pro</p>
                <p className="text-xs text-ns-muted mt-2">390×844pt · iOS 17</p>
              </div>
              <div className="p-4 bg-[#1A1A2E] rounded-2xl">
                <p className="text-white font-bold mb-1">Android</p>
                <p className="text-sm text-ns-muted">Pixel 7</p>
                <p className="text-xs text-ns-muted mt-2">411×914pt · Android 14</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm text-amber-500/80 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
              <Info className="w-5 h-5 shrink-0" />
              <p>Todos los mockups en modo oscuro. Sin variante de modo claro en el diseño actual.</p>
            </div>
          </div>

          <div className="bg-[#13131A] rounded-3xl p-6 lg:p-8 border border-[rgba(255,255,255,0.05)]">
            <h4 className="text-xl font-display font-bold text-white mb-6">Nomenclatura de pantallas</h4>
            <p className="text-ns-muted mb-6 leading-relaxed">
              El sistema de nombres <strong>NS-XX</strong> facilita la comunicación técnica: "NS" por NightScore, seguido del número secuencial de la pantalla. Si existen subvariantes, se añade una letra alfabética (a, b, c).
            </p>
            <div className="bg-[#1A1A2E] rounded-2xl p-6 font-mono text-center flex items-center justify-center gap-2 text-2xl">
              <span className="text-ns-fuchsia">[NS]</span>
              <span className="text-gray-500">[-]</span>
              <span className="text-ns-cyan">[30]</span>
              <span className="text-amber-500">[b]</span>
            </div>
          </div>
        </div>
      </div>

      <MockupModal />
    </section>
  );
}
