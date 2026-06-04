"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/PricingCard";

export function Pricing() {
  const tiers = [
    {
      name: "Free",
      description: "Ideal para usuarios casuales y grupos pequeños.",
      price: "Gratis",
      borderClass: "border-[rgba(255,255,255,0.1)]",
      features: [
        "Todas las funcionalidades principales",
        "Hasta 2 grupos activos",
        "Fotos: historial de 3 meses",
        "Recaps básicos mensuales",
        "Sin publicidad intrusiva"
      ]
    },
    {
      name: "Premium",
      description: "La experiencia completa para los más fiesteros.",
      price: "€4.99",
      badge: "✨ Más popular",
      highlighted: true,
      borderClass: "border-transparent", // Handled by inline styles in PricingCard
      features: [
        "Grupos ilimitados",
        "Almacenamiento extendido de fotos",
        "Recaps avanzados con más visualizaciones",
        "Badge exclusivo de usuario premium",
        "Personalización avanzada del perfil",
        "Estadísticas avanzadas + exportación",
        "Prioridad en rankings globales"
      ]
    },
    {
      name: "Grupo Pro",
      description: "Para peñas, hermandades y grupos grandes.",
      price: "€14.99",
      borderClass: "border-ns-cyan/50",
      features: [
        "Para grupos de 10+ personas",
        "Moderación avanzada para admins",
        "Historial ilimitado del grupo",
        "Torneos y competiciones personalizadas",
        "Soporte prioritario"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Modelo de Negocio</h2>
          <p className="text-ns-muted max-w-2xl mx-auto">Elige el plan que mejor se adapte a tu estilo de noche.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
