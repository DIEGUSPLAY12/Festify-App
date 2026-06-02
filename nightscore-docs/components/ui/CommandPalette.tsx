"use client";

import * as React from "react";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { Search, X } from "lucide-react";
import { featuresData } from "@/lib/data/features";
import { apiEndpointsData } from "@/lib/data/api-endpoints";
import { techStackData } from "@/lib/data/tech-stack";

export function CommandPalette() {
  const { isOpen, setIsOpen } = useCommandPalette();
  const [query, setQuery] = React.useState("");

  if (!isOpen) return null;

  // Simple search logic
  const lowerQuery = query.toLowerCase();
  
  const results: { type: string; title: string; desc?: string; icon: string }[] = [];
  if (query.length > 1) {
    featuresData.forEach(f => {
      if (f.title.toLowerCase().includes(lowerQuery)) results.push({ type: "Feature", title: f.title, icon: "✨" });
    });
    apiEndpointsData.forEach(cat => {
      cat.endpoints.forEach(ep => {
        if (ep.path.toLowerCase().includes(lowerQuery) || ep.description.toLowerCase().includes(lowerQuery)) {
          results.push({ type: "API", title: `${ep.method} ${ep.path}`, desc: ep.description, icon: "🔌" });
        }
      });
    });
    Object.values(techStackData).flat().forEach(tech => {
      if (tech.name.toLowerCase().includes(lowerQuery)) results.push({ type: "Tech", title: tech.name, desc: tech.description, icon: "🛠️" });
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4 sm:px-0">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-xl bg-ns-card border border-[rgba(255,255,255,0.1)] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-3 border-b border-[rgba(255,255,255,0.05)]">
          <Search className="w-5 h-5 text-ns-muted mr-3" />
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-ns-muted text-lg"
            placeholder="Buscar en la documentación..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => setIsOpen(false)} className="text-ns-muted hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {query.length > 1 && (
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length > 0 ? (
              <div className="space-y-1">
                {results.map((r, i) => (
                  <button key={i} className="w-full flex items-center text-left px-3 py-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors group">
                    <span className="mr-3 text-lg">{r.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white group-hover:text-ns-cyan transition-colors">{r.title}</div>
                      {r.desc && <div className="text-xs text-ns-muted mt-0.5">{r.desc}</div>}
                    </div>
                    <span className="text-xs font-mono text-ns-muted bg-[rgba(255,255,255,0.05)] px-2 py-0.5 rounded">{r.type}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-ns-muted text-sm">
                No se encontraron resultados para &quot;{query}&quot;
              </div>
            )}
          </div>
        )}
        
        {query.length <= 1 && (
          <div className="px-4 py-3 text-xs text-ns-muted bg-[rgba(0,0,0,0.2)] border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
            <span>Usa las flechas para navegar</span>
            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-[rgba(255,255,255,0.1)] rounded font-sans">esc</kbd>
              <span>para cerrar</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
