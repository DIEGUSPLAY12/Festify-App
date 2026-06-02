"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { MockupScreen, MOCKUP_BLOCKS } from "@/lib/docs/mockups-data";
import { PhoneFrame } from "./PhoneFrame";
import { useMockupsStore } from "@/lib/store/mockupsStore";

interface MockupThumbnailProps {
  screen: MockupScreen;
}

export function MockupThumbnail({ screen }: MockupThumbnailProps) {
  const setOpenedScreen = useMockupsStore(state => state.setOpenedScreen);
  const blockData = MOCKUP_BLOCKS.find(b => b.id === screen.block);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 group cursor-pointer"
      onClick={() => setOpenedScreen(screen.id)}
      role="button"
      tabIndex={0}
      aria-label={`Ver pantalla ${screen.code}: ${screen.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpenedScreen(screen.id);
        }
      }}
    >
      <div className="relative rounded-[38px] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.04]">
        {/* Sombra de hover */}
        <div 
          className="absolute inset-0 rounded-[38px] opacity-0 group-hover:opacity-40 blur-[24px] transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: blockData?.color || '#7C3AED' }}
        />
        
        <PhoneFrame 
          screen={screen} 
          className="relative group-hover:border-opacity-50 transition-colors duration-300" 
        />
        
        {/* Overlay hover lupa */}
        <div className="absolute inset-0 z-30 rounded-[38px] bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
            <Search className="w-6 h-6 text-white" />
          </div>
          <span className="font-sans font-semibold text-white text-sm">Ver detalle</span>
        </div>
      </div>

      <div className="flex flex-col px-1">
        <span className="text-xs font-mono text-ns-muted mb-1">{screen.code}</span>
        <h4 className="font-sans font-semibold text-white text-sm sm:text-base leading-snug truncate" title={screen.name}>
          {screen.name}
        </h4>
        
        {screen.isKeyScreen && (
          <span className="mt-2 inline-flex self-start px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30 uppercase tracking-wider">
            ⭐ Clave
          </span>
        )}
      </div>
    </motion.div>
  );
}
