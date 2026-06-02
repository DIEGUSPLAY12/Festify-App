"use client";

import { motion } from "framer-motion";

export function Architecture() {
  return (
    <section id="architecture" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Arquitectura</h2>
          <p className="text-ns-muted max-w-2xl mx-auto">Diseñada para baja latencia en tiempo real y alta escalabilidad.</p>
        </div>

        <div className="max-w-5xl mx-auto glassmorphism rounded-3xl p-8 md:p-12 border-[rgba(6,182,212,0.3)] shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden">
          {/* Decorative background for architecture diagram */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Client Layer */}
            <div className="flex flex-col gap-6 w-full md:w-1/4">
              <div className="text-center text-xs font-bold text-ns-muted uppercase tracking-widest mb-2">Capa Cliente</div>
              
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-center hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                <div className="font-semibold text-white mb-1">App Móvil</div>
                <div className="text-xs text-ns-cyan">React Native + Expo</div>
              </div>
              
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-center hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                <div className="font-semibold text-white mb-1">PWA / Web</div>
                <div className="text-xs text-ns-fuchsia">Next.js 14</div>
              </div>
            </div>

            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:flex w-16 items-center justify-center relative h-full">
              <svg width="60" height="200" className="absolute top-1/2 -translate-y-1/2">
                <motion.path 
                  d="M0,50 L60,100 M0,150 L60,100" 
                  stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Gateway / LB Layer */}
            <div className="flex flex-col gap-4 w-full md:w-1/4 items-center">
              <div className="text-center text-xs font-bold text-ns-muted uppercase tracking-widest mb-2">API Gateway</div>
              
              <div className="w-full bg-[rgba(124,58,237,0.1)] border border-ns-violet rounded-xl p-6 text-center relative shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-ns-violet/50 animate-pulse" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-ns-violet/50 animate-pulse" />
                <div className="font-bold text-white mb-1">Load Balancer</div>
                <div className="text-xs text-gray-300">Cloudflare Proxy</div>
              </div>
            </div>

            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:flex w-16 items-center justify-center relative h-full">
              <svg width="60" height="100" className="absolute top-1/2 -translate-y-1/2">
                <motion.path 
                  d="M0,50 L60,50" 
                  stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Backend & Data Layer */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              <div className="text-center text-xs font-bold text-ns-muted uppercase tracking-widest mb-2">Servicios Core</div>
              
              <div className="bg-[rgba(6,182,212,0.1)] border border-ns-cyan rounded-xl p-5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-ns-cyan/20 blur-2xl group-hover:bg-ns-cyan/40 transition-colors" />
                <div className="font-bold text-white mb-2 relative z-10">NestJS Backend</div>
                <div className="grid grid-cols-2 gap-2 relative z-10">
                  <span className="text-[10px] bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded text-gray-300 text-center">REST API</span>
                  <span className="text-[10px] bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded text-gray-300 text-center">WebSockets</span>
                  <span className="text-[10px] bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded text-gray-300 text-center">Auth (JWT)</span>
                  <span className="text-[10px] bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded text-gray-300 text-center">Workers</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1 bg-[rgba(236,72,153,0.1)] border border-ns-fuchsia rounded-xl p-4 text-center">
                  <div className="font-semibold text-white text-sm mb-1">PostgreSQL</div>
                  <div className="text-[10px] text-gray-400">Prisma ORM</div>
                </div>
                <div className="flex-1 bg-[rgba(234,179,8,0.1)] border border-yellow-500 rounded-xl p-4 text-center">
                  <div className="font-semibold text-white text-sm mb-1">Redis</div>
                  <div className="text-[10px] text-gray-400">Cache / PubSub</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
