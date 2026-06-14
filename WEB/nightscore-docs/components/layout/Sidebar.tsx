"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV = [
  {
    group: "Inicio",
    items: [
      { id: "hero",    label: "Presentación" },
      { id: "concept", label: "Concepto" },
    ],
  },
  {
    group: "Producto",
    items: [
      { id: "features",       label: "Funcionalidades" },
      { id: "design-system",  label: "Design System"  },
      { id: "gallery",        label: "Galería"         },
    ],
  },
  {
    group: "Técnico",
    items: [
      { id: "tech",         label: "Stack"          },
      { id: "architecture", label: "Arquitectura"   },
      { id: "model",        label: "Modelo de Datos"},
      { id: "api",          label: "Referencia API" },
    ],
  },
  {
    group: "Negocio",
    items: [
      { id: "pricing",  label: "Modelo de Negocio" },
      { id: "roadmap",  label: "Roadmap"            },
      { id: "privacy",  label: "Privacidad"         },
    ],
  },
];

const ALL_IDS = NAV.flatMap(g => g.items.map(i => i.id));

export function Sidebar() {
  const activeSection = useActiveSection(ALL_IDS);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:flex flex-col w-[220px] shrink-0 sticky top-0 h-screen glass-strong overflow-hidden">

      {/* ── Logo ── */}
      <button
        onClick={() => scrollTo("hero")}
        className="flex items-center gap-3 px-5 pt-6 pb-5 border-b border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.02)] transition-colors w-full text-left"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-ns-violet to-ns-fuchsia flex items-center justify-center text-white font-bold font-display text-sm shadow-[0_0_18px_rgba(124,58,237,0.45)] shrink-0">
          N
        </div>
        <div className="min-w-0">
          <div className="font-display font-bold text-sm text-white tracking-tight leading-tight">NightRank</div>
          <div className="text-[10px] text-ns-muted font-medium tracking-wide">Docs v1.0 · Beta</div>
        </div>
      </button>

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto py-4 hide-scrollbar">
        {NAV.map(group => (
          <div key={group.group} className="mb-5 px-3">
            {/* Group label */}
            <div className="section-number px-2 mb-1.5 select-none">{group.group}</div>

            {/* Items */}
            <div className="space-y-0.5">
              {group.items.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "w-full text-left px-3 py-[7px] rounded-[6px] text-[13px] font-medium transition-[background-color,color] duration-[150ms] relative overflow-hidden",
                      isActive
                        ? "text-white bg-[rgba(124,58,237,0.14)]"
                        : "text-ns-muted hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full bg-gradient-to-b from-ns-violet to-ns-fuchsia animate-scale-y-in" />
                    )}
                    <span className="relative z-10 pl-0.5">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ── Footer ── */}
      <div className="px-4 pb-5 pt-3 border-t border-[rgba(255,255,255,0.06)] space-y-2">
        <button
          onClick={() => {
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "k", metaKey: true })
            );
          }}
          className="flex items-center justify-between w-full px-3 py-2 rounded-[6px] text-xs text-ns-muted bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
        >
          <span className="font-medium">Buscar...</span>
          <kbd className="font-mono text-[10px] bg-[rgba(255,255,255,0.07)] px-1.5 py-0.5 rounded-[4px]">
            ⌘K
          </kbd>
        </button>

        {/* Build tag */}
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] text-[rgba(255,255,255,0.2)] font-mono">build 2026.06</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-ns-success bg-ns-success/10 px-2 py-0.5 rounded-full">
            <span className="w-1 h-1 rounded-full bg-ns-success" />
            online
          </span>
        </div>
      </div>
    </aside>
  );
}
