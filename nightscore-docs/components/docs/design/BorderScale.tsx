"use client";

import { NS_COLORS } from "@/lib/docs/design-tokens";

export function BorderScale() {
  const borders = [
    { name: "ns-border-subtle", value: NS_COLORS["border-subtle"], usage: "Tarjetas en reposo, separadores internos" },
    { name: "ns-border-default", value: NS_COLORS["border-default"], usage: "Elementos interactivos base" },
    { name: "ns-border-strong", value: NS_COLORS["border-strong"], usage: "Elementos con foco o activos" },
  ];

  return (
    <div className="bg-[#0A0A0F] p-8 lg:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8 border border-[rgba(255,255,255,0.05)]">
      {borders.map((b) => (
        <div key={b.name} className="flex flex-col gap-6">
          <div 
            className="w-full h-32 rounded-2xl bg-[#13131A] flex items-center justify-center border"
            style={{ borderColor: b.value }}
          >
            <span className="font-mono text-xs text-ns-muted">Tarjeta de ejemplo</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold text-ns-cyan">{b.name}</span>
            <span className="font-mono text-xs text-gray-400">{b.value}</span>
            <span className="text-xs text-ns-muted mt-2">{b.usage}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
