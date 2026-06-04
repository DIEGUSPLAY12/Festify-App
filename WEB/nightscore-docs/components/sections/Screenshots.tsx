"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SplashMockup } from "@/components/mockups/SplashMockup";
import { MainFeedMockup } from "@/components/mockups/MainFeedMockup";
import { PostDetailMockup } from "@/components/mockups/PostDetailMockup";

export function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const screens = [
    { title: "Splash Screen", desc: "La entrada a tu noche", component: <SplashMockup /> },
    { title: "Feed Principal", desc: "El centro de la noche", component: <MainFeedMockup /> },
    { title: "Detalle de Publicación", desc: "Toda la info de la fiesta", component: <PostDetailMockup /> },
    { title: "Registro (Stepper)", desc: "Flujo fácil y rápido" },
    { title: "Ranking del Grupo", desc: "La competición en vivo" },
    { title: "Votación MVP", desc: "Las 24h siguientes" },
    { title: "Perfil Usuario", desc: "Tus estadísticas" },
    { title: "Recap Mensual", desc: "Formato historia" },
    { title: "Chat de Grupo", desc: "Organiza la próxima" }
  ];

  return (
    <section id="screens" className="py-24 relative overflow-hidden">
      <div className="container px-4 sm:px-6 mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Pantallas de la App</h2>
        <p className="text-ns-muted max-w-2xl">Un vistazo a la interfaz nativa diseñada con foco en la usabilidad nocturna.</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {screens.map((screen, i) => (
          <motion.div
            key={i}
            className="snap-center shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="group relative w-[260px] md:w-[280px]">
              {/* Phone Mockup Frame */}
              <div className="relative h-[560px] rounded-[2.5rem] border-[6px] border-gray-900 bg-[#13131A] shadow-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 rounded-b-2xl w-1/2 mx-auto z-20" />
                
                {/* Screen Content Mockup */}
                <div className="absolute inset-0 z-10 w-full h-full">
                  {screen.component ? (
                    screen.component
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#13131A] to-[#0A0A0F] pt-12 p-4 flex flex-col">
                      <div className="h-10 w-full bg-[rgba(255,255,255,0.05)] rounded-lg mb-4" />
                      <div className="flex-1 space-y-4">
                        <div className="h-40 w-full bg-[rgba(124,58,237,0.1)] rounded-xl border border-[rgba(124,58,237,0.2)]" />
                        <div className="h-20 w-full bg-[rgba(255,255,255,0.02)] rounded-xl" />
                        <div className="h-20 w-full bg-[rgba(255,255,255,0.02)] rounded-xl" />
                      </div>
                      <div className="h-12 mt-4 w-full bg-[rgba(255,255,255,0.05)] rounded-full" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h4 className="text-white font-semibold font-display text-lg">{screen.title}</h4>
                <p className="text-sm text-ns-muted">{screen.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
