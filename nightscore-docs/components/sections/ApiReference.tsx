"use client";

import { useState } from "react";
import { apiEndpointsData } from "@/lib/data/api-endpoints";
import { Search, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ApiReference() {
  const [search, setSearch] = useState("");

  const filteredData = apiEndpointsData.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(ep => 
      ep.path.toLowerCase().includes(search.toLowerCase()) || 
      ep.description.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0);

  const getMethodColor = (method: string) => {
    switch(method) {
      case "GET": return "success";
      case "POST": return "warning";
      case "PATCH": return "default";
      case "DELETE": return "error";
      default: return "outline";
    }
  };

  return (
    <section id="api" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Referencia API</h2>
            <p className="text-ns-muted max-w-xl">Endpoints principales documentados para la integración entre la app móvil y el backend.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-muted" />
            <input
              type="text"
              placeholder="Buscar endpoint..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-ns-violet transition-colors"
            />
          </div>
        </div>

        <div className="space-y-8">
          {filteredData.length > 0 ? (
            filteredData.map((category, idx) => (
              <div key={idx} className="glassmorphism rounded-2xl border border-[rgba(255,255,255,0.05)] overflow-hidden">
                <div className="bg-[rgba(255,255,255,0.02)] px-6 py-4 border-b border-[rgba(255,255,255,0.05)]">
                  <h3 className="font-display font-bold text-lg text-white">{category.category}</h3>
                </div>
                <div className="divide-y divide-[rgba(255,255,255,0.05)]">
                  {category.endpoints.map((ep, i) => (
                    <div key={i} className="px-6 py-4 flex flex-col lg:flex-row lg:items-center gap-4 hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                      <div className="flex items-center gap-4 lg:w-1/3">
                        <Badge variant={getMethodColor(ep.method) as "default" | "success" | "warning" | "error" | "outline"} className="w-16 justify-center">{ep.method}</Badge>
                        <span className="font-mono text-sm text-gray-200">{ep.path}</span>
                      </div>
                      <div className="flex-1 text-sm text-ns-muted">
                        {ep.description}
                      </div>
                      {ep.authRequired && (
                        <div className="flex items-center text-xs text-ns-muted bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded">
                          <Lock className="w-3 h-3 mr-1" /> Auth
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 glassmorphism rounded-2xl text-ns-muted">
              No se encontraron endpoints que coincidan con &quot;{search}&quot;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
