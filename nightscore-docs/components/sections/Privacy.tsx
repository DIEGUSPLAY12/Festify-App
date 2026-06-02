"use client";

import { motion } from "framer-motion";
import { Shield, EyeOff, Trash2, Key, Lock, Download } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function Privacy() {
  const features = [
    { icon: EyeOff, text: "Control granular de visibilidad por publicación" },
    { icon: Trash2, text: "Eliminación de publicaciones en cualquier momento" },
    { icon: Shield, text: "Modo invisible (sin estado activo)" },
    { icon: Download, text: "Exportación de datos personales (RGPD)" },
    { icon: Trash2, text: "Eliminación total de cuenta bajo petición" },
    { icon: Key, text: "Autenticación 2FA opcional" },
    { icon: Lock, text: "Cifrado E2E en el chat" }
  ];

  return (
    <section id="privacy" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <GlassCard className="max-w-4xl mx-auto border-[rgba(34,197,94,0.3)] shadow-[0_0_30px_rgba(34,197,94,0.1)] relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-ns-success/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-ns-success" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Privacidad y Seguridad</h2>
              </div>
              <p className="text-ns-muted mb-6">
                Festify cumple íntegramente con el RGPD. Tu información personal y los detalles de tus salidas son privados por defecto. Tú decides qué compartes y con quién.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <feature.icon className="w-4 h-4 text-ns-success shrink-0" />
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
