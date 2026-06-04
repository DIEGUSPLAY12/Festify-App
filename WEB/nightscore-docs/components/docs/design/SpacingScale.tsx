"use client";

import { NS_SPACING } from "@/lib/docs/design-tokens";

export function SpacingScale() {
  const spacings = Object.entries(NS_SPACING).map(([name, value]) => ({
    name: `ns-${name}`,
    value,
    pixels: parseInt(value),
    usage: getSpacingUsage(name)
  }));

  // Ordenar por tamaño en px
  spacings.sort((a, b) => a.pixels - b.pixels);

  return (
    <div className="bg-[#13131A] rounded-3xl border border-[rgba(255,255,255,0.08)] p-6 lg:p-10">
      <div className="space-y-6">
        {spacings.map((s) => (
          <div key={s.name} className="flex flex-col md:flex-row md:items-center gap-4 group">
            
            {/* Metadata (left) */}
            <div className="flex flex-col md:w-48 shrink-0">
              <span className="font-mono text-sm text-ns-cyan font-bold">{s.name}</span>
              <span className="font-mono text-xs text-ns-muted">{s.value}</span>
            </div>
            
            {/* Visual Bar */}
            <div className="w-full max-w-sm md:w-[200px] shrink-0 bg-white/[0.03] rounded flex items-center h-12 overflow-hidden border border-[rgba(255,255,255,0.02)]">
              <div 
                className="h-full bg-ns-gradient-primary rounded-r transition-all duration-300"
                style={{ width: s.pixels }}
              />
            </div>
            
            {/* Usage */}
            <div className="text-sm text-gray-300 md:ml-4">
              {s.usage}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

function getSpacingUsage(token: string) {
  const usageMap: Record<string, string> = {
    "space-1": "Separación mínima entre elementos inline",
    "space-2": "Gap interno de componentes pequeños",
    "space-3": "Gap entre tarjetas compactas",
    "space-4": "Padding interno estándar de componentes",
    "space-5": "Padding horizontal de pantalla (mobile)",
    "space-6": "Gap entre secciones de componente",
    "space-8": "Separación entre bloques dentro de sección",
    "space-10": "Margen entre secciones principales",
    "space-12": "Separación grande entre bloques",
    "space-16": "Padding de sección completa",
    "space-20": "Separación entre secciones de página"
  };
  return usageMap[token] || "";
}
