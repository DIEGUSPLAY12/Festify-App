"use client";

import * as React from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "concept", label: "Concepto" },
  { id: "features", label: "Funcionalidades" },
  { id: "design-system", label: "Design System" },
  { id: "gallery", label: "Galería de Diseños" },
  { id: "tech", label: "Stack Tecnológico" },
  { id: "architecture", label: "Arquitectura" },
  { id: "model", label: "Modelo de Datos" },
  { id: "api", label: "Referencia API" },
  { id: "pricing", label: "Modelo de Negocio" },
  { id: "roadmap", label: "Roadmap" },
  { id: "privacy", label: "Privacidad" },
];

const SECTION_IDS = SECTIONS.map(s => s.id);

export function Sidebar() {
  const activeSection = useActiveSection(SECTION_IDS);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0 px-6 py-12 sticky top-0 h-screen overflow-y-auto border-r border-[rgba(255,255,255,0.05)] hide-scrollbar">
      <div className="flex items-center gap-3 mb-10 cursor-pointer" onClick={() => scrollTo("hero")}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ns-violet to-ns-fuchsia flex items-center justify-center text-white font-bold font-display">
          N
        </div>
        <span className="font-display font-bold text-xl text-white tracking-tight">NightRank</span>
      </div>

      <nav className="space-y-1">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={cn(
              "block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden",
              activeSection === section.id 
                ? "text-white bg-[rgba(124,58,237,0.1)]" 
                : "text-ns-muted hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
            )}
          >
            {activeSection === section.id && (
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-ns-violet to-ns-fuchsia" />
            )}
            <span className={cn("relative z-10", activeSection === section.id && "text-gradient")}>
              {section.label}
            </span>
          </button>
        ))}
      </nav>
      
      <div className="mt-10 px-4">
        <div className="text-xs text-ns-muted uppercase tracking-wider font-semibold mb-3">Atajos</div>
        <button 
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
            document.dispatchEvent(event);
          }}
          className="flex items-center justify-between w-full text-left px-4 py-2 rounded-lg text-sm text-ns-muted bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <span>Buscar...</span>
          <kbd className="font-mono text-[10px] bg-[rgba(255,255,255,0.1)] px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      </div>
    </aside>
  );
}
