"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Camera, Users, BarChart3 } from "lucide-react";

export function Concept() {
  const cards = [
    {
      title: "Registra tus noches",
      description: "Añade fotos duales, registra consumiciones, etiqueta amigos, valora el lugar y tu estado de ánimo.",
      icon: Camera,
      color: "from-ns-violet to-ns-fuchsia"
    },
    {
      title: "Compite con amigos",
      description: "Rankings semanales y mensuales, votaciones para el MVP de la noche y sistema de logros.",
      icon: Users,
      color: "from-ns-cyan to-blue-500"
    },
    {
      title: "Estadísticas y Recaps",
      description: "Descubre tus patrones con historias visuales y recaps mensuales estilo Spotify Wrapped.",
      icon: BarChart3,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="concept" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            ¿Qué es <span className="text-gradient">Festify</span>?
          </h2>
          <p className="text-lg text-ns-muted leading-relaxed">
            Festify convierte cada salida en una experiencia compartida. Es el diario de tus noches de fiesta, mezclado con la competitividad sana de un videojuego y el formato social de tus apps favoritas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlassCard hoverGlow className="h-full flex flex-col items-center text-center p-8 group relative overflow-hidden">
                {/* Top border gradient highlight */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${card.color} bg-opacity-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{card.title}</h3>
                <p className="text-ns-muted text-sm leading-relaxed">{card.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
