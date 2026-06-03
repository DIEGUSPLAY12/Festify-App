"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "concept", label: "Concepto" },
  { id: "features", label: "Funcionalidades" },
  { id: "design-system", label: "Design System" },
  { id: "gallery", label: "Galería de Diseños" },
  { id: "tech", label: "Stack Tecnológico" },
  { id: "api", label: "Referencia API" },
  { id: "pricing", label: "Modelo de Negocio" }
];

const SECTION_IDS = SECTIONS.map(s => s.id);

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[rgba(10,10,15,0.8)] backdrop-blur-md border-b border-[rgba(255,255,255,0.05)] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
          <div className="w-6 h-6 rounded bg-gradient-to-br from-ns-violet to-ns-fuchsia flex items-center justify-center text-white font-bold font-display text-xs">
            N
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">NightRank</span>
        </div>
        <button onClick={() => setIsOpen(true)} className="p-2 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ns-bg animate-in fade-in slide-in-from-right-8 duration-300">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="font-display font-bold text-lg text-white tracking-tight">Menú</span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={cn(
                  "block w-full text-left px-4 py-4 rounded-xl text-lg font-medium transition-colors",
                  activeSection === section.id 
                    ? "bg-[rgba(124,58,237,0.1)] text-white" 
                    : "text-ns-muted hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
