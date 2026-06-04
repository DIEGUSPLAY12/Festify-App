"use client";

import { useState, useEffect } from "react";
import { Search, LayoutGrid, LayoutList, Filter, X } from "lucide-react";
import { useMockupsStore, useMockupsPreferences } from "@/lib/store/mockupsStore";
import { MOCKUP_BLOCKS, MOCKUP_SCREENS, KEY_SCREENS } from "@/lib/docs/mockups-data";
import { cn } from "@/lib/utils";

export function MockupToolbar() {
  const { searchQuery, setSearchQuery, selectedTags, toggleTag, clearFilters, activeBlock, activeTab } = useMockupsStore();
  const { gridDensity, setGridDensity } = useMockupsPreferences();
  const [localSearch, setLocalSearch] = useState(searchQuery);

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
    <div className="flex flex-col gap-4 py-4 mb-6 border-b border-[rgba(255,255,255,0.05)]">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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

      {/* Scrollable Tag Chips */}
      {tagsList.length > 0 && (
        <div className="flex overflow-x-auto custom-scrollbar pb-2 pt-1 gap-2 items-center">
          <span className="text-sm font-semibold text-ns-muted shrink-0 mr-2 flex items-center gap-1">
            <Filter className="w-4 h-4" /> Etiquetas:
          </span>
          {tagsList.map(tag => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 border select-none",
                  isSelected 
                    ? "bg-ns-violet/20 text-white border-ns-violet" 
                    : "bg-[#13131A] text-ns-muted border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                )}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            );
          })}
          
          {(selectedTags.length > 0 || searchQuery !== '') && (
            <button 
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-red-400 hover:bg-red-400/10 transition-colors shrink-0 ml-2"
            >
              <X className="w-3 h-3" /> Limpiar filtros
            </button>
          )}
        </div>
      )}

    </div>
  );
}
