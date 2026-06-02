"use client";

import React, { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";
import { TABLES, RELATIONS_ERD } from "@/lib/docs/database-schema";
import { cn } from "@/lib/utils";

export function DatabaseDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [svgContent, setSvgContent] = useState<string>("");
  const [zoom, setZoom] = useState(1);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    async function renderDiagram() {
      try {
        // @ts-ignore
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            fontFamily: "Inter, sans-serif",
            primaryColor: "#13131A",
            primaryTextColor: "#fff",
            primaryBorderColor: "#7C3AED",
            lineColor: "#EC4899",
            secondaryColor: "#1a1a2e",
            tertiaryColor: "#0A0A0F"
          },
          er: {
            layoutDirection: "TB",
            minEntityWidth: 150,
            minEntityHeight: 75,
            entityPadding: 15,
            stroke: "#7C3AED",
            fill: "#13131A"
          }
        });

        // Generate the full ERD syntax
        let diagramDef = "erDiagram\\n";
        diagramDef += RELATIONS_ERD + "\\n";
        
        // Append all tables
        TABLES.forEach(table => {
          diagramDef += `  ${table.name} {\\n`;
          table.fields.forEach(field => {
            let constraintStr = field.constraints.length > 0 ? ` ${field.constraints[0]}` : "";
            diagramDef += `    ${field.type} ${field.name}${constraintStr}\\n`;
          });
          diagramDef += `  }\\n`;
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, diagramDef);
        
        if (isMounted) {
          // Post-process SVG for rounded corners (rx=8) and remove borders on internal rows
          let processedSvg = svg.replace(/<rect /g, '<rect rx="8" ');
          setSvgContent(processedSvg);
          setIsRendered(true);
        }
      } catch (err) {
        console.error("Failed to render Mermaid diagram:", err);
      }
    }

    renderDiagram();
    
    return () => { isMounted = false; };
  }, []);

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  const DiagramContent = () => (
    <div className="relative w-full h-full flex flex-col bg-[#0A0A0F] rounded-2xl border border-[rgba(255,255,255,0.05)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(19,19,26,0.5)]">
        <h3 className="font-display font-bold text-white text-lg tracking-tight">Diagrama entidad-relación completo</h3>
        <div className="flex items-center gap-2">
          <button onClick={handleZoomOut} className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg text-ns-muted transition-colors" aria-label="Alejar">
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-ns-muted min-w-[3ch] text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg text-ns-muted transition-colors" aria-label="Acercar">
            <ZoomIn className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-2" />
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)} 
            className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg text-white transition-colors flex items-center gap-2 text-sm font-medium"
            aria-label={isFullscreen ? "Salir de pantalla completa" : "Abrir en pantalla completa"}
          >
            {isFullscreen ? (
              <><Minimize2 className="w-4 h-4" /> Salir</>
            ) : (
              <><Maximize2 className="w-4 h-4" /> Pantalla completa</>
            )}
          </button>
        </div>
      </div>

      {/* SVG Container */}
      <div className="flex-1 overflow-auto relative custom-scrollbar bg-[#0A0A0F]">
        {!isRendered ? (
          <div className="absolute inset-0 flex items-center justify-center text-ns-muted">
            <div className="animate-pulse flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-ns-violet border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-medium uppercase tracking-widest">Renderizando modelo...</span>
            </div>
          </div>
        ) : (
          <div 
            className="min-w-full min-h-full flex items-center justify-center p-8 transition-transform duration-200 origin-center"
            style={{ transform: `scale(${zoom})` }}
            dangerouslySetInnerHTML={{ __html: svgContent }} 
          />
        )}
      </div>

      {/* Legend */}
      <div className="p-3 border-t border-[rgba(255,255,255,0.05)] bg-[rgba(19,19,26,0.8)] flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-ns-muted justify-center">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-violet-500" /> Identidad / Usuarios</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-600" /> Grupos y Social</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Contenido / Noches</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500" /> Gamificación</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500" /> Chat y Eventos</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400" /> Negocio / Planes</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="h-[600px] w-full" ref={containerRef}>
        <DiagramContent />
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0F] flex flex-col">
          <DiagramContent />
        </div>
      )}
    </>
  );
}
