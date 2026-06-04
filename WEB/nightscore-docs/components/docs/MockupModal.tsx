"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Code, AlertTriangle } from "lucide-react";
import { useMockupsStore } from "@/lib/store/mockupsStore";
import { MOCKUP_BLOCKS, MOCKUP_SCREENS } from "@/lib/docs/mockups-data";
import { PhoneFrame } from "./PhoneFrame";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function MockupModal() {
  const { openedScreenId, setOpenedScreen, setActiveBlock, setActiveTab } = useMockupsStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const screen = MOCKUP_SCREENS.find(s => s.id === openedScreenId);
  const block = screen ? MOCKUP_BLOCKS.find(b => b.id === screen.block) : null;
  const blockScreens = block?.screens || [];
  const currentIndex = blockScreens.findIndex(s => s.id === openedScreenId);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < blockScreens.length - 1;

  const handlePrev = () => { if (hasPrev) setOpenedScreen(blockScreens[currentIndex - 1].id); };
  const handleNext = () => { if (hasNext) setOpenedScreen(blockScreens[currentIndex + 1].id); };
  const handleClose = () => setOpenedScreen(null);

  // Focus trap y body scroll lock
  useEffect(() => {
    if (openedScreenId) {
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [openedScreenId]);

  // Teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openedScreenId) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openedScreenId, hasPrev, hasNext]); // eslint-disable-line

  if (!screen || !block) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-0 lg:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle de ${screen.name}`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          onClick={handleClose} 
        />

        {/* Modal Contenedor */}
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full h-full lg:h-auto lg:max-h-[90vh] lg:max-w-7xl bg-[#0A0A0F] lg:rounded-[32px] lg:border border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden flex flex-col lg:flex-row focus:outline-none"
        >
          {/* Columna Izquierda: Visualizador (60%) */}
          <div className="relative w-full lg:w-[60%] h-[60vh] lg:h-[85vh] bg-[#080808] flex flex-col items-center justify-center p-4 lg:p-12 shrink-0 border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.05)]">
            
            {/* Nav Móvil Inferior */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 lg:hidden z-40">
              <button 
                onClick={handlePrev} disabled={!hasPrev} 
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center disabled:opacity-30 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext} disabled={!hasNext} 
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center disabled:opacity-30 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Desktop Lateral */}
            <button 
              onClick={handlePrev} disabled={!hasPrev} 
              aria-label="Pantalla anterior"
              className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md items-center justify-center disabled:opacity-20 transition-all text-white z-40"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={handleNext} disabled={!hasNext} 
              aria-label="Pantalla siguiente"
              className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md items-center justify-center disabled:opacity-20 transition-all text-white z-40"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Phone Frame Grande */}
            <div className="h-full w-full flex items-start justify-center overflow-y-auto custom-scrollbar pt-12 pb-32">
              <PhoneFrame screen={screen} priority className="w-[85%] sm:w-[320px] lg:w-[360px] h-auto" />
            </div>

            {/* Contador y Dots */}
            <div className="hidden lg:flex absolute bottom-8 left-0 right-0 flex-col items-center gap-3">
              <span className="text-ns-muted font-mono text-sm">{currentIndex + 1} / {blockScreens.length}</span>
              <div className="flex items-center gap-2">
                {blockScreens.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setOpenedScreen(s.id)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      idx === currentIndex ? "w-6" : "hover:bg-white/50 bg-white/20"
                    )}
                    style={idx === currentIndex ? { backgroundColor: block.color } : {}}
                    aria-label={`Ir a ${s.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Info (40%) */}
          <div className="w-full lg:w-[40%] h-full flex flex-col bg-[#13131A]">
            {/* Header / Cerrar */}
            <div className="flex items-center justify-between p-6 pb-2">
              <div 
                className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border"
                style={{ backgroundColor: `${block.color}15`, color: block.color, borderColor: `${block.color}30` }}
              >
                <span>{block.icon}</span>
                <span>{block.code} · {block.name}</span>
              </div>
              
              <button 
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-ns-muted hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-2">
              
              <div className="font-mono text-ns-muted text-sm mb-2">{screen.code}</div>
              <h2 className="text-3xl font-display font-black text-white leading-tight mb-4">
                {screen.name}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {screen.description}
              </p>

              {screen.technicalNote && (
                <div className="mb-6 bg-[#1A1A2E] border-l-4 border-ns-cyan rounded-r-xl p-4 flex gap-3">
                  <Code className="w-5 h-5 text-ns-cyan shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 font-medium">
                    <span className="text-ns-cyan block font-bold mb-1">Nota Técnica</span>
                    {screen.technicalNote}
                  </p>
                </div>
              )}

              {screen.isKeyScreen && (
                <div className="mb-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-amber-500 font-bold text-sm">⭐ Pantalla clave del producto</h4>
                    <p className="text-sm text-amber-500/80 mt-1">Esta vista representa un hito principal en el flujo del usuario o la experiencia central de la aplicación.</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {screen.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-ns-muted capitalize">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full h-px bg-[rgba(255,255,255,0.05)] mb-8" />

              {/* Otras pantallas */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-white mb-4">Otras pantallas de este bloque</h4>
                <div className="flex overflow-x-auto pb-4 gap-3 custom-scrollbar snap-x">
                  {blockScreens.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setOpenedScreen(s.id)}
                      className={cn(
                        "relative shrink-0 snap-start w-20 h-36 rounded-xl overflow-hidden transition-all",
                        s.id === screen.id ? "ring-2 ring-offset-2 ring-offset-[#13131A]" : "opacity-50 hover:opacity-100"
                      )}
                      style={s.id === screen.id ? { '--tw-ring-color': block.color } as React.CSSProperties : {}}
                    >
                      <Image
                        src={`${process.env.NODE_ENV === "production" ? "/Festify-App" : ""}${s.imagePath}`}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer fijo Info */}
            <div className="p-6 bg-[#0A0A0F] border-t border-[rgba(255,255,255,0.05)]">
              <button
                onClick={() => {
                  handleClose();
                  setActiveTab('grid');
                  setActiveBlock(block.id);
                }}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors"
              >
                Ver todas las pantallas del bloque
              </button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
