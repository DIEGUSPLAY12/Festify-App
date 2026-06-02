"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/lib/data/tech-stack";
import { GlassCard } from "@/components/ui/GlassCard";

export function TechStack() {
  const categories = [
    { id: "frontend", title: "Mobile (Frontend)", data: techStackData.frontend, color: "from-blue-500 to-cyan-500" },
    { id: "web", title: "Web (PWA & Docs)", data: techStackData.web, color: "from-ns-violet to-ns-fuchsia" },
    { id: "backend", title: "Backend & API", data: techStackData.backend, color: "from-emerald-400 to-green-500" },
    { id: "database", title: "Base de Datos & Storage", data: [...techStackData.database, ...techStackData.infrastructure], color: "from-orange-400 to-red-500" },
  ];

  return (
    <section id="tech" className="py-24 relative bg-[rgba(0,0,0,0.2)] border-y border-[rgba(255,255,255,0.05)]">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Stack Tecnológico</h2>
          <p className="text-ns-muted max-w-2xl mx-auto">Tecnologías modernas para garantizar un rendimiento óptimo a escala.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.data.map((tech, i) => (
                    <div 
                      key={i}
                      className="group relative px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.1)] transition-colors cursor-default"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm text-gray-200">{tech.name}</span>
                        <span className="text-xs text-ns-muted">{tech.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
