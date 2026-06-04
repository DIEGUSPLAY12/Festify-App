"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMockupsStore, useMockupsPreferences } from "@/lib/store/mockupsStore";
import { MOCKUP_BLOCKS, KEY_SCREENS } from "@/lib/docs/mockups-data";
import { MockupThumbnail } from "./MockupThumbnail";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";

export function MockupGrid() {
  const { activeBlock, searchQuery, selectedTags } = useMockupsStore();
  const { gridDensity } = useMockupsPreferences();

  // Obtener las pantallas base
  let screens = activeBlock === "keyscreens" 
    ? KEY_SCREENS 
    : MOCKUP_BLOCKS.find(b => b.id === activeBlock)?.screens || [];

  // Aplicar filtros
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    screens = screens.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.code.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (selectedTags.length > 0) {
    screens = screens.filter(s => selectedTags.every(tag => s.tags.includes(tag)));
  }

  return (
    <div id="mockups-grid" className="min-h-[500px]">
      <AnimatePresence mode="wait">
        {screens.length > 0 ? (
          <motion.div
            key="grid"
            className={cn(
              "grid grid-cols-2 md:grid-cols-3",
              gridDensity === 'spacious' ? "lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8" : "lg:grid-cols-5 xl:grid-cols-6 gap-4"
            )}
            layout
          >
            {screens.map((screen, idx) => (
              <MockupThumbnail key={screen.id} screen={screen} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#13131A] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6">
              <ImageOff className="w-8 h-8 text-ns-muted" />
            </div>
            <h3 className="text-xl font-display font-semibold text-white mb-2">No encontramos pantallas</h3>
            <p className="text-ns-muted">Intenta ajustar tu búsqueda o limpiar los filtros seleccionados.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
