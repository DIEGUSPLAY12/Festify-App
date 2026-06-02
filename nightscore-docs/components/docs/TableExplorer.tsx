"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { DOMAINS, TABLES } from "@/lib/docs/database-schema";
import { cn } from "@/lib/utils";

interface TableExplorerProps {
  activeTableId: string;
  onSelectTable: (id: string) => void;
}

export function TableExplorer({ activeTableId, onSelectTable }: TableExplorerProps) {
  const [search, setSearch] = useState("");

  const filteredDomains = useMemo(() => {
    if (!search.trim()) return DOMAINS;
    
    const query = search.toLowerCase();
    
    return DOMAINS.map(domain => {
      const filteredTables = domain.tables.filter(tableId => {
        const table = TABLES.find(t => t.id === tableId);
        return table?.name.toLowerCase().includes(query) || tableId.includes(query);
      });
      return { ...domain, tables: filteredTables };
    }).filter(domain => domain.tables.length > 0);
  }, [search]);

  return (
    <div className="w-full h-full flex flex-col bg-[#0A0A0F] border-r border-[rgba(255,255,255,0.05)]">
      <div className="p-4 border-b border-[rgba(255,255,255,0.05)]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-muted" />
          <input
            type="text"
            placeholder="Buscar tabla..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#13131A] border border-[rgba(255,255,255,0.1)] rounded-lg py-2 pl-9 pr-4 text-sm text-white placeholder:text-ns-muted focus:outline-none focus:border-ns-violet transition-colors"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
        {filteredDomains.map(domain => (
          <div key={domain.id} className="mb-6">
            <div className={cn("px-3 mb-2 text-xs font-bold uppercase tracking-wider", domain.textColor)}>
              {domain.name}
            </div>
            <div className="space-y-1">
              {domain.tables.map(tableId => {
                const table = TABLES.find(t => t.id === tableId);
                const isActive = activeTableId === tableId;
                if (!table) return null;
                
                return (
                  <button
                    key={tableId}
                    onClick={() => onSelectTable(tableId)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-sm font-mono transition-all",
                      isActive 
                        ? "bg-gradient-to-r from-[rgba(124,58,237,0.15)] to-transparent text-white border-l-2 border-ns-fuchsia" 
                        : "text-ns-muted hover:text-white hover:bg-[rgba(255,255,255,0.05)] border-l-2 border-transparent"
                    )}
                  >
                    {table.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {filteredDomains.length === 0 && (
          <div className="text-center p-4 text-sm text-ns-muted">
            No se encontraron tablas
          </div>
        )}
      </div>
    </div>
  );
}
