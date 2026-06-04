"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Database, Layers, Settings, Zap } from "lucide-react";
import { DATABASE_STATS, TABLES } from "@/lib/docs/database-schema";
import { DomainCards } from "@/components/docs/DomainCards";
import { TableExplorer } from "@/components/docs/TableExplorer";
import { TableDetail } from "@/components/docs/TableDetail";
import { ArchitectureCards } from "@/components/docs/ArchitectureCards";
import { cn } from "@/lib/utils";

export function DataModel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  
  const [activeTableId, setActiveTableId] = useState(tableParam || "users");

  useEffect(() => {
    if (tableParam && TABLES.find(t => t.id === tableParam)) {
      setActiveTableId(tableParam);
    }
  }, [tableParam]);

  const handleSelectTable = (id: string) => {
    setActiveTableId(id);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("table", id);
    router.push(`?${newParams.toString()}#table-explorer`, { scroll: false });
  };

  const activeTable = TABLES.find(t => t.id === activeTableId) || TABLES[0];

  return (
    <section id="model" className="py-24 relative bg-[#050508] min-h-screen">
      <div className="container px-4 sm:px-6">
        
        {/* PARTE 1: Introducción y Stats */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">Modelo de Datos</h2>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-ns-violet/20 text-ns-fuchsia border border-ns-violet/30">
              {DATABASE_STATS.totalTables} tablas · PostgreSQL
            </span>
          </div>
          <p className="text-lg text-ns-muted leading-relaxed max-w-3xl mb-12">
            NightRank utiliza un modelo de datos relacional altamente optimizado y escalable. Diseñado para soportar alta concurrencia durante las noches de fiesta, se apoya en PostgreSQL como fuente de verdad y en Redis como capa de caché ultrarrápida para los rankings y recaps en tiempo real.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Tablas Totales", value: DATABASE_STATS.totalTables, icon: Database },
              { label: "Dominios Funcionales", value: DATABASE_STATS.domains, icon: Layers },
              { label: "Base de Datos", value: DATABASE_STATS.database, icon: Settings },
              { label: "Caché y Rankings", value: DATABASE_STATS.cache, icon: Zap }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glassmorphism p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] text-center flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <stat.icon className="w-8 h-8 text-ns-cyan mb-4" />
                <div className="text-3xl font-display font-black text-gradient bg-gradient-to-br from-ns-violet to-ns-fuchsia mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-ns-muted uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 2: Diagrama ERD removido */}

        {/* PARTE 3: Dominios Funcionales */}
        <div className="mb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Dominios Funcionales</h2>
            <p className="text-ns-muted">El modelo está dividido lógicamente en 6 áreas de responsabilidad para mantener el bajo acoplamiento.</p>
          </div>
          <DomainCards />
        </div>

        {/* PARTE 4: Detalle de Tablas */}
        <div id="table-explorer" className="mb-24 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Explorador de Tablas</h2>
            <p className="text-ns-muted">Consulta el detalle de cada tabla, sus relaciones y el esquema de Prisma.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row h-[800px] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden bg-[#0A0A0F] shadow-2xl">
            <div className="w-full lg:w-80 shrink-0 h-[300px] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.05)]">
              <TableExplorer activeTableId={activeTableId} onSelectTable={handleSelectTable} />
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar h-full bg-[#050508]">
              <TableDetail table={activeTable} />
            </div>
          </div>
        </div>

        {/* PARTE 5: Arquitectura de Datos */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Ecosistema de Datos</h2>
            <p className="text-ns-muted">Tecnologías clave que soportan el almacenamiento y entrega de información.</p>
          </div>
          <ArchitectureCards />
        </div>

      </div>
    </section>
  );
}
