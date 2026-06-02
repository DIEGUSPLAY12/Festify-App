"use client";

import { useState, useEffect } from "react";
import { Search, LayoutGrid, LayoutList, Filter } from "lucide-react";
import { useMockupsStore, useMockupsPreferences } from "@/lib/store/mockupsStore";
import { MOCKUP_BLOCKS, MOCKUP_SCREENS, KEY_SCREENS } from "@/lib/docs/mockups-data";
import { cn } from "@/lib/utils";

export function MockupToolbar() {
  const { searchQuery, setSearchQuery, selectedTags, toggleTag, activeBlock, activeTab } = useMockupsStore();
  const { gridDensity, setGridDensity } = useMockupsPreferences();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [showTagFilter, setShowTagFilter] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 200);
    return () => clearTimeout(timer);
  }, [localSearch, setSearchQuery]);

  // Sync external clear
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  // Determinar tags disponibles para el bloque activo
  let availableTags = new Set<string>();
  let currentScreens = activeBlock === "keyscreens" 
    ? KEY_SCREENS 
    : MOCKUP_BLOCKS.find(b => b.id === activeBlock)?.screens || [];

  currentScreens.forEach(s => s.tags.forEach(t => availableTags.add(t)));
  const tagsList = Array.from(availableTags).sort();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 mb-6 border-b border-[rgba(255,255,255,0.05)]">
      
      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-muted" />
        <input
          type="text"
          placeholder="Buscar pantalla..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full bg-[#13131A] border border-[rgba(255,255,255,0.1)] rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-ns-muted focus:outline-none focus:border-ns-violet focus:ring-1 focus:ring-ns-violet transition-all"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Filtro de tags */}
        <div className="relative">
          <button
            onClick={() => setShowTagFilter(!showTagFilter)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-xl border transition-colors text-sm font-medium",
              selectedTags.length > 0 || showTagFilter
                ? "bg-ns-violet/20 border-ns-violet text-white"
                : "bg-[#13131A] border-[rgba(255,255,255,0.1)] text-ns-muted hover:text-white"
            )}
          >
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filtrar</span>
            {selectedTags.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-ns-violet text-white flex items-center justify-center text-[10px] font-bold">
                {selectedTags.length}
              </span>
            )}
          </button>

          {showTagFilter && (
            <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-[#1A1A2E] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl z-50">
              <h4 className="text-xs font-bold uppercase text-ns-muted mb-3 px-1">Filtrar por Tags</h4>
              <div className="flex flex-col max-h-60 overflow-y-auto custom-scrollbar gap-1">
                {tagsList.length > 0 ? tagsList.map(tag => (
                  <label key={tag} className="flex items-center gap-3 px-2 py-1.5 hover:bg-white/5 rounded-lg cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="rounded border-white/20 bg-black/20 text-ns-violet focus:ring-ns-violet"
                    />
                    <span className="text-sm text-gray-300 capitalize">{tag}</span>
                  </label>
                )) : (
                  <p className="text-sm text-ns-muted text-center py-2">No hay tags en este bloque</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Toggle Densidad (solo en grid) */}
        {activeTab === 'grid' && (
          <div className="flex items-center bg-[#13131A] p-1 rounded-xl border border-[rgba(255,255,255,0.1)]">
            <button
              onClick={() => setGridDensity('spacious')}
              className={cn(
                "p-1.5 rounded-lg transition-colors",
                gridDensity === 'spacious' ? "bg-[rgba(255,255,255,0.1)] text-white" : "text-ns-muted hover:text-white"
              )}
              title="Vista espaciada"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridDensity('compact')}
              className={cn(
                "p-1.5 rounded-lg transition-colors",
                gridDensity === 'compact' ? "bg-[rgba(255,255,255,0.1)] text-white" : "text-ns-muted hover:text-white"
              )}
              title="Vista compacta"
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
