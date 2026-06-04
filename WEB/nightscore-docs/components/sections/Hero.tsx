"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { ChevronDown, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-ns-violet/20 rounded-full blur-[120px] mix-blend-screen animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-ns-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-ns-cyan text-sm font-semibold tracking-wider mb-6">
              NightRank App & API Docs
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-6">
              Tu noche.<br />
              <span className="text-gradient animate-shimmer" style={{ backgroundSize: "200% auto" }}>
                Tu historia.
              </span><br />
              Tu score.
            </h1>
            <p className="text-lg md:text-xl text-ns-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              La plataforma social y competitiva que gamifica tus salidas nocturnas. Registra, compite y descubre quién es el MVP de la noche con tus amigos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <GradientButton variant="primary" className="w-full sm:w-auto">
                <Smartphone className="w-5 h-5" />
                Descargar la App
              </GradientButton>
              <GradientButton variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })}>
                Leer la Documentación
              </GradientButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 relative w-full max-w-sm mx-auto lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Mockup Phone */}
          <div className="relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-[8px] border-gray-900 bg-ns-bg shadow-[0_0_50px_rgba(124,58,237,0.3)] overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-1/2 mx-auto z-20" />
            
            {/* Phone Content Mockup */}
            <div className="absolute inset-0 bg-[rgba(19,19,26,1)] flex flex-col p-4 pt-10 relative">
              <div className="flex justify-between items-center mb-6">
                <div className="font-display font-bold text-lg">NightRank</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ns-violet to-ns-fuchsia flex items-center justify-center text-xs font-bold">JD</div>
              </div>
              
              <div className="glassmorphism rounded-xl p-4 mb-4 border border-ns-violet/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                <div className="text-xs text-ns-cyan font-bold uppercase mb-1">MVP de anoche</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-xl">👑</div>
                  <div>
                    <div className="font-bold">Carlos M.</div>
                    <div className="text-xs text-ns-muted">&quot;El más divertido&quot;</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-ns-bg" />
                    <div className="flex-1">
                      <div className="h-3 w-24 bg-[rgba(255,255,255,0.1)] rounded mb-2" />
                      <div className="h-2 w-16 bg-[rgba(255,255,255,0.05)] rounded" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-4 left-4 right-4 h-14 bg-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-2xl flex justify-around items-center px-2">
                <div className="w-6 h-6 rounded-full bg-white/20" />
                <div className="w-6 h-6 rounded-full bg-white/20" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ns-violet to-ns-fuchsia -translate-y-4 border-4 border-ns-bg" />
                <div className="w-6 h-6 rounded-full bg-white/20" />
                <div className="w-6 h-6 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ns-muted flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest mb-2">Scroll para descubrir</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
