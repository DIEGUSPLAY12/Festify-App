"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Camera, Users, BarChart3 } from "lucide-react";

const cards = [
  {
    num: "01",
    icon: Camera,
    title: "Registra tus noches",
    description:
      "Añade fotos duales, registra consumiciones, etiqueta amigos, valora el lugar y tu estado de ánimo.",
    accent: "from-ns-violet to-ns-fuchsia",
    glow: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    num: "02",
    icon: Users,
    title: "Compite con amigos",
    description:
      "Rankings semanales y mensuales, votaciones para el MVP de la noche y sistema de logros.",
    accent: "from-ns-cyan to-blue-500",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.18)",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Estadísticas y Recaps",
    description:
      "Descubre tus patrones con historias visuales y recaps mensuales estilo Spotify Wrapped.",
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.18)",
  },
];

export function Concept() {
  return (
    <section id="concept" className="py-28 relative overflow-hidden">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)] pointer-events-none" />

      <div className="container relative z-10 px-8 sm:px-12">

        {/* ── Section header ── */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-number mb-3">
            ── ¿Qué es NightRank?
          </div>
          <h2
            className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Una experiencia{" "}
            <span className="text-gradient">compartida</span>{" "}
            para cada salida.
          </h2>
          <p className="text-ns-muted leading-relaxed text-[15px] max-w-xl">
            NightRank es el diario de tus noches de fiesta mezclado con la
            competitividad sana de un videojuego y el formato social de tus
            apps favoritas.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={cn(
                    "card-accent-top group relative flex flex-col p-7 rounded-[10px] h-full",
                    "bg-[rgba(19,19,26,0.6)] border border-[rgba(255,255,255,0.07)]",
                    "backdrop-filter backdrop-blur-md",
                    "transition-[transform,box-shadow,border-color] duration-[180ms]",
                    "hover:-translate-y-[2px]"
                  )}
                  style={{
                    boxShadow: `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px ${card.glow}, 0 2px 8px rgba(0,0,0,0.12)`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = card.border;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  {/* Ghost number */}
                  <div
                    className="absolute top-5 right-5 font-display font-extrabold leading-none select-none pointer-events-none transition-opacity duration-300 opacity-[0.06] group-hover:opacity-[0.1]"
                    style={{ fontSize: "72px", color: "#ffffff" }}
                    aria-hidden
                  >
                    {card.num}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${card.accent} bg-opacity-10 transition-transform duration-300 group-hover:scale-105`}
                    style={{ boxShadow: `0 6px 18px ${card.glow}` }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[15px] font-semibold text-white leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-ns-muted leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
