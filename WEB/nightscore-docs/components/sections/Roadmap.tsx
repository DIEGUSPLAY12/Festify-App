"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { roadmapData } from "@/lib/data/roadmap";
import { ChevronDown, CheckCircle2, Clock, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";

export function Roadmap() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "completed": return <CheckCircle2 className="w-5 h-5 text-ns-success" />;
      case "in-progress": return <Clock className="w-5 h-5 text-yellow-400" />;
      default: return <CircleDashed className="w-5 h-5 text-ns-cyan" />;
    }
  };

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Fases de Desarrollo</h2>
          <p className="text-ns-muted max-w-2xl mx-auto">Nuestra hoja de ruta para construir la mejor plataforma nocturna.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.1)] -translate-x-1/2 hidden md:block" />

          <div className="space-y-6">
            {roadmapData.map((phase, idx) => {
              const isExpanded = expandedIndex === idx;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative md:flex items-center justify-between group"
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ns-bg border border-[rgba(255,255,255,0.1)] items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    "md:w-[calc(50%-3rem)] transition-all",
                    idx % 2 !== 0 ? "md:ml-auto" : ""
                  )}>
                    <div 
                      className="glassmorphism rounded-2xl p-6 cursor-pointer border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="md:hidden">{getStatusIcon(phase.status)}</span>
                          <h3 className="text-xl font-display font-bold text-white">{phase.phase}</h3>
                        </div>
                        <ChevronDown className={cn("w-5 h-5 text-ns-muted transition-transform", isExpanded && "rotate-180")} />
                      </div>
                      <span className="text-xs font-mono text-ns-muted uppercase tracking-wider">{phase.duration}</span>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                              {phase.items.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-300">
                                  <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0", `bg-${phase.color}`)} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
