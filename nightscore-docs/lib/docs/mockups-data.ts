export type BlockId =
  | "onboarding"
  | "navigation"
  | "feed"
  | "registro"
  | "grupos"
  | "ranking"
  | "mvp"
  | "perfil"
  | "logros"
  | "estadisticas"
  | "recap"
  | "eventos"
  | "notificaciones"
  | "ajustes";

export type MockupScreen = {
  id: string;
  code: string;
  name: string;
  description: string;
  technicalNote?: string;
  imagePath: string;
  block: BlockId;
  aspectRatio: "9/19.5" | "9/16";
  tags: string[];
  isKeyScreen: boolean;
};

export type MockupBlock = {
  id: BlockId;
  code: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  screens: MockupScreen[];
};

const screensOnboarding: MockupScreen[] = [
  {
    id: "ns-02a-onboarding", code: "NS-02a", name: "Onboarding Welcome",
    description: "Diapositiva introductoria explicando la propuesta de valor social.",
    imagePath: "/gallery/ns_02_welcome_onboarding_optimized.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["onboarding"], isKeyScreen: false
  },
  {
    id: "ns-03-age-verification", code: "NS-03", name: "Verificación de edad",
    description: "Pantalla obligatoria para confirmar que el usuario es mayor de edad antes del registro.",
    imagePath: "/gallery/ns_03_age_verification_optimized.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["auth", "onboarding"], isKeyScreen: false
  },
  {
    id: "ns-05-login", code: "NS-05", name: "Inicio de sesión",
    description: "Pantalla de login para usuarios existentes.",
    imagePath: "/gallery/ns_05_login_optimized.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["auth"], isKeyScreen: false
  },
  {
    id: "ns-06-profile-setup", code: "NS-06", name: "Configuración de perfil",
    description: "Paso inicial donde el usuario sube su foto y escoge un nombre de usuario.",
    imagePath: "/gallery/ns_06_profile_setup_optimized.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["profile", "onboarding"], isKeyScreen: false
  }
];

const screensFeed: MockupScreen[] = [
  {
    id: "ns-08-feed", code: "NS-08", name: "Feed principal",
    description: "El muro principal donde el usuario ve la actividad en tiempo real de sus amigos y grupos.",
    imagePath: "/gallery/ns_08_main_feed_optimized.png", block: "feed", aspectRatio: "9/19.5", tags: ["feed", "content", "social"], isKeyScreen: true
  },
  {
    id: "ns-09-post-detail", code: "NS-09", name: "Detalle de publicación",
    description: "Vista enfocada en una única publicación con los comentarios expandidos.",
    imagePath: "/gallery/ns_09_post_details_optimized.png", block: "feed", aspectRatio: "9/19.5", tags: ["feed", "content"], isKeyScreen: false
  }
];

const screensRegistro: MockupScreen[] = [
  {
    id: "ns-11-step-photos", code: "NS-11", name: "Cámara Festify",
    description: "Selección de fotos de la galería o cámara para adjuntar al registro de la noche.",
    imagePath: "/gallery/ns_11_c_mara_festify_profesionalizada.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "content"], isKeyScreen: true
  },
  {
    id: "ns-12-step-drinks", code: "NS-12", name: "Registro de Bebidas",
    description: "Aquí el usuario registra todo lo que tomó durante la noche, seleccionando tipo de bebida y cantidad con controles +/-.",
    imagePath: "/gallery/ns_12_registro_de_bebidas_optimized.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "gamification"], isKeyScreen: true
  },
  {
    id: "ns-13-step-details", code: "NS-13", name: "Detalles de la noche",
    description: "Se añaden detalles adicionales, locales visitados y se etiqueta a amigos.",
    imagePath: "/gallery/ns_13_detalles_de_la_noche_optimized.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "social"], isKeyScreen: false
  },
  {
    id: "ns-14-step-publish", code: "NS-14", name: "Resumen de publicación",
    description: "Pantalla de revisión final y botón de confirmación para publicar la noche.",
    imagePath: "/gallery/ns_14_resumen_de_publicaci_n_optimized.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "content"], isKeyScreen: false
  }
];

const screensGrupos: MockupScreen[] = [
  {
    id: "ns-15-group-list", code: "NS-15", name: "Lista de grupos",
    description: "Directorio de las escuadras o grupos a los que pertenece el usuario.",
    imagePath: "/gallery/ns_15_lista_de_grupos_optimized.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social"], isKeyScreen: false
  },
  {
    id: "ns-16-group-feed", code: "NS-16", name: "Feed del grupo",
    description: "Un feed filtrado que solo muestra la actividad de los miembros de este grupo específico.",
    imagePath: "/gallery/ns_16_dentro_de_un_grupo_optimized.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social", "feed"], isKeyScreen: true
  },
  {
    id: "ns-17-group-chat", code: "NS-17", name: "Chat de grupo",
    description: "Sala de chat en tiempo real para los miembros del grupo.",
    imagePath: "/gallery/ns_17_chat_de_grupo_optimized.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social", "chat"], isKeyScreen: true
  },
  {
    id: "ns-18-create-group", code: "NS-18", name: "Crear grupo",
    description: "Pantalla de configuración para fundar una nueva escuadra.",
    imagePath: "/gallery/ns_18_crear_grupo_optimized.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social"], isKeyScreen: false
  }
];

const screensRanking: MockupScreen[] = [
  {
    id: "ns-21-global-ranking", code: "NS-21", name: "Ranking global",
    description: "El top absoluto de usuarios en toda la plataforma según su Festify.",
    imagePath: "/gallery/ns_21_ranking_global_y_ciudad_optimized.png", block: "ranking", aspectRatio: "9/19.5", tags: ["gamification"], isKeyScreen: false
  }
];

const screensLogros: MockupScreen[] = [
  {
    id: "ns-27-achievements", code: "NS-27", name: "Mis logros",
    description: "Colección de insignias (badges) desbloqueadas por completar ciertos hitos fiesteros.",
    imagePath: "/gallery/ns_27_mis_logros_optimized.png", block: "logros", aspectRatio: "9/19.5", tags: ["gamification", "profile"], isKeyScreen: true
  },
  {
    id: "ns-27-achievement-detail", code: "NS-27b", name: "Detalle de logro",
    description: "Pantalla detallada de un logro específico.",
    imagePath: "/gallery/ns_27_detalle_de_logro_optimized.png", block: "logros", aspectRatio: "9/19.5", tags: ["gamification", "events"], isKeyScreen: false
  },
  {
    id: "ns-28-achievement-unlocked", code: "NS-28", name: "Notificación nuevo logro",
    description: "Pop-up o modal animado que interrumpe la navegación cuando se obtiene una nueva medalla.",
    imagePath: "/gallery/ns_28_notificaci_n_de_logro_optimized.png", block: "logros", aspectRatio: "9/19.5", tags: ["gamification", "events"], isKeyScreen: false
  }
];

const screensRecap: MockupScreen[] = [
  {
    id: "ns-30-recap", code: "NS-30", name: "Recap Cover",
    description: "Historia inicial del resumen tipo 'Spotify Wrapped' de las noches pasadas.",
    imagePath: "/gallery/ns_30_recap_cover_optimized.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "analytics", "gamification"], isKeyScreen: true
  },
  {
    id: "ns-31-recap", code: "NS-31", name: "Recap Consumo",
    description: "Segunda historia del Recap, enfocada en consumiciones totales.",
    imagePath: "/gallery/ns_31_consumption_recap_optimized.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "analytics"], isKeyScreen: false
  },
  {
    id: "ns-32-recap", code: "NS-32", name: "Recap Local del Mes",
    description: "Tercera historia del Recap revelando los locales más visitados.",
    imagePath: "/gallery/ns_32_venue_recap_optimized.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "social"], isKeyScreen: false
  },
  {
    id: "ns-33-recap", code: "NS-33", name: "Recap Resumen Final",
    description: "Cuarta historia destacando los trofeos y resumen final para Instagram.",
    imagePath: "/gallery/ns_33_final_recap_optimized.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "gamification"], isKeyScreen: false
  }
];

const screensAjustes: MockupScreen[] = [
  {
    id: "ns-34-settings", code: "NS-34", name: "Ajustes de Privacidad",
    description: "Configuración de notificaciones y privacidad de datos.",
    imagePath: "/gallery/ns_34_privacy_settings_optimized.png", block: "ajustes", aspectRatio: "9/19.5", tags: ["settings", "profile"], isKeyScreen: false
  },
  {
    id: "ns-35-help", code: "NS-35", name: "Ayuda y Soporte",
    description: "Pantalla de soporte técnico y preguntas frecuentes.",
    imagePath: "/gallery/ns_35_help_support_optimized.png", block: "ajustes", aspectRatio: "9/19.5", tags: ["settings", "support"], isKeyScreen: false
  }
];

export const MOCKUP_BLOCKS: MockupBlock[] = [
  {
    id: "onboarding",
    code: "BLOQUE 1",
    name: "Onboarding y Autenticación",
    description: "Flujos de entrada de usuario.",
    color: "#7C3AED",
    icon: "🌙",
    screens: screensOnboarding
  },
  {
    id: "feed",
    code: "BLOQUE 2",
    name: "Feed Principal",
    description: "Muro social y de actividad central.",
    color: "#EC4899",
    icon: "🏠",
    screens: screensFeed
  },
  {
    id: "registro",
    code: "BLOQUE 3",
    name: "Registro de Noche",
    description: "El flujo de creación de contenido paso a paso.",
    color: "#F59E0B",
    icon: "📸",
    screens: screensRegistro
  },
  {
    id: "grupos",
    code: "BLOQUE 4",
    name: "Grupos",
    description: "Gestión social y comunicación interna.",
    color: "#22C55E",
    icon: "👥",
    screens: screensGrupos
  },
  {
    id: "ranking",
    code: "BLOQUE 5",
    name: "Ranking",
    description: "Tablas de clasificación basadas en Festify.",
    color: "#F59E0B",
    icon: "🏆",
    screens: screensRanking
  },
  {
    id: "logros",
    code: "BLOQUE 6",
    name: "Logros y Badges",
    description: "Sistema de recompensas visuales.",
    color: "#EC4899",
    icon: "🎖",
    screens: screensLogros
  },
  {
    id: "recap",
    code: "BLOQUE 8",
    name: "Recap",
    description: "Resúmenes dinámicos en formato 'Story'.",
    color: "#7C3AED",
    icon: "✨",
    screens: screensRecap
  },
  {
    id: "ajustes",
    code: "BLOQUE 9",
    name: "Ajustes",
    description: "Parámetros globales de configuración.",
    color: "#94A3B8",
    icon: "⚙️",
    screens: screensAjustes
  }
];

export const MOCKUP_SCREENS: MockupScreen[] = MOCKUP_BLOCKS.flatMap(b => b.screens);
export const TOTAL_SCREENS = MOCKUP_SCREENS.length;
export const KEY_SCREENS = MOCKUP_SCREENS.filter(s => s.isKeyScreen);
