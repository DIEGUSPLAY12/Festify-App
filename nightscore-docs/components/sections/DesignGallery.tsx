"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Onboarding y Autenticación",
    description: "Flujos de registro rápidos y optimizados para el contexto nocturno.",
    images: [
      "ns_01_splash_screen.png",
      "ns_02_welcome_onboarding.png",
      "ns_04_registro_de_cuenta.png",
    ]
  },
  {
    title: "Experiencia Principal (Noche)",
    description: "El feed central donde ves la actividad, detalles de las fiestas y capturas instantáneas.",
    images: [
      "ns_08_feed_principal.png",
      "ns_09_detalle_de_publicaci_n.png",
      "ns_11_captura_de_fotos.png",
      "ns_12_registro_de_bebidas.png",
    ]
  },
  {
    title: "Grupos y Social",
    description: "Espacios de interacción privada, feeds internos de cada grupo y chats en tiempo real.",
    images: [
      "ns_15_lista_de_grupos.png",
      "ns_16_dentro_de_un_grupo_feed.png",
      "ns_17_chat_de_grupo.png",
    ]
  },
  {
    title: "Competitividad y Logros",
    description: "Rankings para medir tu nivel fiestero y un catálogo de logros para desbloquear.",
    images: [
      "ns_20_ranking_de_grupo.png",
      "ns_21_ranking_global_y_ciudad.png",
      "ns_27_mis_logros.png",
    ]
  },
  {
    title: "NightScore Recap",
    description: "Resúmenes visuales estilo historia para rememorar la mejor noche y estadísticas del mes.",
    images: [
      "ns_30_recap_portada.png",
      "ns_31_recap_consumo.png",
      "ns_32_recap_local_del_mes.png",
    ]
  },
  {
    title: "Perfil y Configuración",
    description: "Panel central para controlar las métricas de tu cuenta y su privacidad.",
    images: [
      "ns_29_estad_sticas_personales.png",
      "ns_34_ajustes_de_privacidad.png",
    ]
  }
];

// Helper to format names nicely
const formatName = (filename: string) => {
  return filename
    .replace('.png', '')
    .replace(/^ns_\d+_/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
};

export function DesignGallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[rgba(19,19,26,0.3)]">
      <div className="container px-4 sm:px-6 mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Galería de Diseños</h2>
        <p className="text-ns-muted max-w-2xl">Un vistazo seleccionado a las vistas más relevantes de la plataforma, organizadas por flujo de usuario y funcionalidad.</p>
      </div>

      <div className="container px-4 sm:px-6 space-y-20">
        {groups.map((group, gIdx) => (
          <div key={group.title} className="space-y-8">
            <div className="border-b border-[rgba(255,255,255,0.1)] pb-4">
              <h3 className="text-2xl font-display font-semibold text-white mb-2">{group.title}</h3>
              <p className="text-ns-muted">{group.description}</p>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {group.images.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: (i % 10) * 0.1 }}
                  className="break-inside-avoid relative group rounded-[2.5rem] overflow-hidden border-[6px] border-[#1f1f25] bg-[#13131A] shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all"
                >
                  <div className="absolute top-0 inset-x-0 h-5 bg-[#1f1f25] rounded-b-xl w-1/2 mx-auto z-20" />
                  
                  <div className="relative w-full pt-6 bg-gradient-to-b from-[#13131A] to-[#0A0A0F]">
                    <img
                      src={`/gallery/${img}`}
                      alt={formatName(img)}
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm text-center">{formatName(img)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
