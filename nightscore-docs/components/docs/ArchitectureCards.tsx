"use client";

import { motion } from "framer-motion";
import { Database, Zap, Cloud } from "lucide-react";

export function ArchitectureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glassmorphism rounded-2xl p-6 border-t-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
          <Database className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-3">PostgreSQL (Base Principal)</h3>
        <p className="text-ns-muted text-sm leading-relaxed">
          Almacena todas las entidades del negocio: usuarios, grupos, publicaciones, consumiciones, votaciones y logros. Prisma ORM gestiona las migraciones y el tipado.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glassmorphism rounded-2xl p-6 border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6">
          <Zap className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-3">Redis (Caché y Tiempo Real)</h3>
        <p className="text-ns-muted text-sm leading-relaxed">
          Gestiona sesiones y JWT refresh tokens, caché de rankings (group_rankings se cachea aquí para respuesta inmediata), colas Bull para generación de recaps y notificaciones masivas, y Pub/Sub para el chat en tiempo real.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glassmorphism rounded-2xl p-6 border-t-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
          <Cloud className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-3">Cloudflare R2 + CDN (Archivos)</h3>
        <p className="text-ns-muted text-sm leading-relaxed">
          Almacenamiento de fotos y vídeos de las noches (post_photos.url apunta aquí). Sharp procesa y comprime las imágenes antes de subir. Cloudflare CDN garantiza entrega rápida globalmente.
        </p>
      </motion.div>
    </div>
  );
}
