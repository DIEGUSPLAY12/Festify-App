"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { NS_TYPOGRAPHY } from "@/lib/docs/design-tokens";

const SCALE_ROWS = [
  { id: "xs", name: "xs", usage: "Timestamps, captions", preview: "Hace 2 horas", ...NS_TYPOGRAPHY.scale["xs"], weight: "500" },
  { id: "sm", name: "sm", usage: "Body small, subtextos", preview: "Filtra por periodo", ...NS_TYPOGRAPHY.scale["sm"], weight: "400" },
  { id: "base", name: "base", usage: "Body principal", preview: "¿Qué tal estuvo la noche?", ...NS_TYPOGRAPHY.scale["base"], weight: "400" },
  { id: "lg", name: "lg", usage: "Subtítulos de sección", preview: "Feed principal", ...NS_TYPOGRAPHY.scale["lg"], weight: "600" },
  { id: "xl", name: "xl", usage: "Headings de pantalla", preview: "Mis grupos", ...NS_TYPOGRAPHY.scale["xl"], weight: "700" },
  { id: "2xl", name: "2xl", usage: "Headings principales", preview: "Ranking semanal", ...NS_TYPOGRAPHY.scale["2xl"], weight: "700" },
  { id: "3xl", name: "3xl", usage: "Display / Clash", preview: "MVP de la noche", ...NS_TYPOGRAPHY.scale["3xl"], weight: "800" },
  { id: "4xl", name: "4xl", usage: "Hero / Recaps / Números", preview: "12 🌙", ...NS_TYPOGRAPHY.scale["4xl"], weight: "800" },
];

export function TypeScale() {
  const [activeFont, setActiveFont] = useState<"clash" | "satoshi">("satoshi");

  return (
    <div className="bg-[#13131A] rounded-3xl border border-[rgba(255,255,255,0.08)] overflow-hidden">
      
      {/* Header with Toggle */}
      <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.05)] bg-[#1A1A2E]">
        <h4 className="text-white font-bold">Escala Tipográfica</h4>
        <div className="flex bg-black/40 p-1 rounded-xl border border-[rgba(255,255,255,0.05)]">
          <button
            onClick={() => setActiveFont("clash")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm transition-all",
              activeFont === "clash" ? "bg-ns-violet text-white shadow-md font-display font-bold" : "text-ns-muted hover:text-white font-display"
            )}
          >
            Clash Display
          </button>
          <button
            onClick={() => setActiveFont("satoshi")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm transition-all",
              activeFont === "satoshi" ? "bg-ns-violet text-white shadow-md font-sans font-bold" : "text-ns-muted hover:text-white font-sans"
            )}
          >
            Satoshi
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.05)] bg-black/20">
              <th className="px-6 py-4 text-xs font-semibold text-ns-muted uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-4 text-xs font-semibold text-ns-muted uppercase tracking-wider">Tamaño / Altura</th>
              <th className="px-6 py-4 text-xs font-semibold text-ns-muted uppercase tracking-wider">Peso</th>
              <th className="px-6 py-4 text-xs font-semibold text-ns-muted uppercase tracking-wider">Tracking</th>
              <th className="px-6 py-4 text-xs font-semibold text-ns-muted uppercase tracking-wider w-[40%]">Vista previa en vivo</th>
              <th className="px-6 py-4 text-xs font-semibold text-ns-muted uppercase tracking-wider">Uso</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
            {SCALE_ROWS.map((row) => (
              <tr key={row.name} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-ns-cyan font-bold">{row.name}</span>
                </td>
                <td className="px-6 py-4 font-mono text-sm text-gray-300">
                  {row.size} <span className="text-gray-600">/</span> {row.lineHeight}
                </td>
                <td className="px-6 py-4 font-mono text-sm text-gray-300">{row.weight}</td>
                <td className="px-6 py-4 font-mono text-sm text-gray-300">{row.tracking}</td>
                <td className="px-6 py-4 overflow-hidden">
                  <div 
                    className="text-white truncate"
                    style={{
                      fontFamily: activeFont === "clash" ? "var(--font-clash-display)" : "var(--font-satoshi)",
                      fontSize: row.size,
                      lineHeight: row.lineHeight,
                      letterSpacing: row.tracking,
                      fontWeight: row.weight,
                    }}
                  >
                    {row.preview}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-ns-muted">
                  {row.usage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
