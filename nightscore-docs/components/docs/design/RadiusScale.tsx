"use client";

import { NS_RADIUS } from "@/lib/docs/design-tokens";

export function RadiusScale() {
  const radii = [
    { name: "ns-radius-sm", value: NS_RADIUS["radius-sm"], usage: "Elementos pequeños: badges, inputs, tooltips" },
    { name: "ns-radius-md", value: NS_RADIUS["radius-md"], usage: "Botones, chips, pills de tags" },
    { name: "ns-radius-lg", value: NS_RADIUS["radius-lg"], usage: "Tarjetas compactas, modales pequeños" },
    { name: "ns-radius-xl", value: NS_RADIUS["radius-xl"], usage: "Tarjetas principales, panels" },
    { name: "ns-radius-2xl", value: NS_RADIUS["radius-2xl"], usage: "Marcos de teléfono interior" },
    { name: "ns-radius-full", value: NS_RADIUS["radius-full"], usage: "Pills, avatares, badges circulares" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {radii.map((r) => (
        <div key={r.name} className="flex flex-col gap-4 group">
          <div 
            className="w-16 h-16 bg-ns-gradient-primary shadow-lg mx-auto md:mx-0 transition-transform group-hover:scale-105"
            style={{ borderRadius: r.value }}
          />
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-ns-cyan">{r.name}</span>
            <span className="font-mono text-xs text-gray-400">{r.value}</span>
            <span className="text-xs text-ns-muted mt-2 leading-relaxed">{r.usage}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
