"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuresData } from "@/lib/data/features";
import { achievementsData } from "@/lib/data/achievements";
import { GlassCard } from "@/components/ui/GlassCard";
import { Podium } from "@/components/ui/Podium";
import { AchievementBadge } from "@/components/ui/AchievementBadge";
import { cn } from "@/lib/utils";
import { Camera, Users, Trophy, Star, Award, BarChart } from "lucide-react";

const icons = [Camera, Users, Trophy, Star, Award, BarChart];

export function Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Funcionalidades Principales</h2>
          <p className="text-ns-muted max-w-2xl mx-auto">Todo lo que necesitas para convertir tu salida en una leyenda.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            {featuresData.map((feature, idx) => {
              const Icon = icons[idx];
              const isActive = activeTab === idx;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "flex-shrink-0 lg:flex-shrink w-auto lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left relative overflow-hidden",
                    isActive 
                      ? "bg-[rgba(124,58,237,0.15)] text-white border border-ns-violet/30" 
                      : "bg-transparent text-ns-muted hover:bg-[rgba(255,255,255,0.05)] hover:text-white border border-transparent"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator" 
                      className="absolute inset-0 bg-gradient-to-r from-ns-violet/10 to-transparent" 
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={cn("relative z-10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0", isActive ? "bg-gradient-to-br from-ns-violet to-ns-fuchsia text-white" : "bg-[rgba(255,255,255,0.05)]")}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="relative z-10 font-semibold whitespace-nowrap">{feature.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col p-8 lg:p-10">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{featuresData[activeTab].title}</h3>
                  <p className="text-ns-muted mb-8">{featuresData[activeTab].description}</p>
                  
                  <div className="flex-1 relative">
                    {activeTab === 0 && (
                      <div className="space-y-6">
                        {featuresData[0].steps?.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-ns-cyan/20 text-ns-cyan flex items-center justify-center font-bold text-sm shrink-0">
                                {i + 1}
                              </div>
                              {i < (featuresData[0].steps?.length || 0) - 1 && <div className="w-px h-full bg-[rgba(255,255,255,0.1)] my-2" />}
                            </div>
                            <div className="pb-4">
                              <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                              <p className="text-sm text-ns-muted">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 1 && (
                      <ul className="space-y-4">
                        {featuresData[1].features?.map((item, i) => (
                          <li key={i} className="flex items-start bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                            <Users className="w-5 h-5 text-ns-violet shrink-0 mr-3 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {activeTab === 2 && (
                      <div className="flex flex-col h-full">
                        <div className="flex flex-wrap gap-2 mb-8">
                          {featuresData[2].categories?.map((cat, i) => (
                            <button key={i} className={cn("px-3 py-1.5 rounded-full text-xs font-semibold transition-colors", i === 0 ? "bg-ns-violet text-white" : "bg-[rgba(255,255,255,0.05)] text-ns-muted hover:bg-[rgba(255,255,255,0.1)]")}>
                              {(cat as any).label}
                            </button>
                          ))}
                        </div>
                        <div className="mt-auto">
                          <Podium />
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {featuresData[3].categories?.map((cat, i) => (
                          <div key={i} className="glassmorphism rounded-xl p-4 flex items-center justify-center text-center text-sm font-semibold text-white border-ns-violet/20 hover:border-ns-fuchsia/50 transition-colors">
                            {cat as string}
                          </div>
                        ))}
                        <div className="col-span-1 sm:col-span-2 mt-4 text-center text-xs text-ns-cyan bg-[rgba(6,182,212,0.1)] p-3 rounded-lg">
                          {featuresData[3].tiebreaker}
                        </div>
                      </div>
                    )}

                    {activeTab === 4 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {achievementsData.slice(0, 8).map((achievement) => (
                          <AchievementBadge key={achievement.id} achievement={achievement} />
                        ))}
                      </div>
                    )}

                    {activeTab === 5 && (
                      <div className="flex flex-col md:flex-row gap-6 h-full items-center">
                        <div className="flex-1 space-y-3 w-full">
                          {featuresData[5].statsIncluded?.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-ns-fuchsia shrink-0" />
                              <span>{stat}</span>
                            </div>
                          ))}
                        </div>
                        <div className="w-48 h-80 rounded-2xl bg-gradient-to-b from-[rgba(124,58,237,0.2)] to-[rgba(19,19,26,1)] border border-[rgba(255,255,255,0.1)] flex flex-col p-4 shadow-[0_0_30px_rgba(236,72,153,0.15)] shrink-0">
                          <div className="text-[10px] text-ns-muted uppercase tracking-widest mb-4 relative z-10">NightRank Wrapped</div>
                          <div className="text-3xl font-display font-bold text-white leading-tight mb-auto">Fuiste el<br/><span className="text-gradient">MVP</span><br/>del mes</div>
                          <button className="w-full py-2 bg-white/10 rounded-lg text-xs font-semibold hover:bg-white/20 transition-colors">Compartir</button>
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
