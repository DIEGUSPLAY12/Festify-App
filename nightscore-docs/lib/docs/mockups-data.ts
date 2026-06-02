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
    id: "ns-01-splash", code: "NS-01", name: "Splash Screen",
    description: "Pantalla de carga inicial con el imagotipo de NightScore.",
    imagePath: "/gallery/ns_01_splash_screen.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["branding", "onboarding"], isKeyScreen: true
  },
  {
    id: "ns-02a-onboarding", code: "NS-02a", name: "Onboarding Slide 1",
    description: "Primera diapositiva introductoria explicando la propuesta de valor social.",
    imagePath: "/gallery/ns_02_welcome_onboarding.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["onboarding"], isKeyScreen: false
  },
  {
    id: "ns-02b-onboarding", code: "NS-02b", name: "Onboarding Slide 2",
    description: "Segunda diapositiva enfocada en el componente competitivo de la app.",
    imagePath: "/mockups/ns-02b-onboarding.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["onboarding"], isKeyScreen: false
  },
  {
    id: "ns-02c-onboarding", code: "NS-02c", name: "Onboarding Slide 3",
    description: "Tercera diapositiva mostrando la dinámica de los recaps semanales.",
    imagePath: "/mockups/ns-02c-onboarding.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["onboarding"], isKeyScreen: false
  },
  {
    id: "ns-03-age-verification", code: "NS-03", name: "Verificación de edad",
    description: "Pantalla obligatoria para confirmar que el usuario es mayor de edad antes del registro.",
    technicalNote: "Debe incluir un check de fecha de nacimiento o botón modal restrictivo. Requerimiento legal.",
    imagePath: "/gallery/ns_03_verificaci_n_de_edad.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["auth", "onboarding"], isKeyScreen: false
  },
  {
    id: "ns-04-register", code: "NS-04", name: "Registro de cuenta",
    description: "Formulario de registro con opciones de inicio de sesión social (Google, Apple).",
    imagePath: "/gallery/ns_04_registro_de_cuenta.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["auth", "registration"], isKeyScreen: true
  },
  {
    id: "ns-05-login", code: "NS-05", name: "Inicio de sesión",
    description: "Pantalla de login para usuarios existentes.",
    imagePath: "/gallery/ns_05_inicio_de_sesi_n.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["auth"], isKeyScreen: false
  },
  {
    id: "ns-06-profile-setup", code: "NS-06", name: "Configuración de perfil",
    description: "Paso inicial donde el usuario sube su foto y escoge un nombre de usuario.",
    imagePath: "/gallery/ns_06_configuraci_n_de_perfil.png", block: "onboarding", aspectRatio: "9/19.5", tags: ["profile", "onboarding"], isKeyScreen: false
  }
];

const screensNavigation: MockupScreen[] = [
  {
    id: "ns-07-bottom-nav", code: "NS-07", name: "Bottom Navigation Bar",
    description: "La barra de navegación principal persistente de la aplicación.",
    imagePath: "/gallery/ns_07_barra_de_navegaci_n_festify.png", block: "navigation", aspectRatio: "9/19.5", tags: ["navigation"], isKeyScreen: true
  }
];

const screensFeed: MockupScreen[] = [
  {
    id: "ns-08-feed", code: "NS-08", name: "Feed principal",
    description: "El muro principal donde el usuario ve la actividad en tiempo real de sus amigos y grupos.",
    technicalNote: "Virtualizado y paginado desde el servidor. Componentes interactivos para reacciones.",
    imagePath: "/gallery/ns_08_feed_principal.png", block: "feed", aspectRatio: "9/19.5", tags: ["feed", "content", "social"], isKeyScreen: true
  },
  {
    id: "ns-09-post-detail", code: "NS-09", name: "Detalle de publicación",
    description: "Vista enfocada en una única publicación con los comentarios expandidos.",
    imagePath: "/gallery/ns_09_detalle_de_publicaci_n.png", block: "feed", aspectRatio: "9/19.5", tags: ["feed", "content"], isKeyScreen: false
  }
];

const screensRegistro: MockupScreen[] = [
  {
    id: "ns-10-stepper", code: "NS-10", name: "Vista general del stepper",
    description: "Pantalla que introduce el flujo de 4 pasos para registrar la actividad de una noche.",
    imagePath: "/mockups/ns-10-stepper.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "content"], isKeyScreen: false
  },
  {
    id: "ns-11-step-photos", code: "NS-11", name: "Paso 1 Fotos",
    description: "Selección de fotos de la galería o cámara para adjuntar al registro de la noche.",
    imagePath: "/gallery/ns_11_captura_de_fotos.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "content"], isKeyScreen: true
  },
  {
    id: "ns-12-step-drinks", code: "NS-12", name: "Paso 2 Bebidas",
    description: "Aquí el usuario registra todo lo que tomó durante la noche, seleccionando tipo de bebida y cantidad con controles +/-.",
    technicalNote: "Stepper de 4 pasos con estado en Zustand. Las fotos se suben a R2 al finalizar el paso 4, no en tiempo real.",
    imagePath: "/gallery/ns_12_registro_de_bebidas.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "gamification"], isKeyScreen: true
  },
  {
    id: "ns-13-step-details", code: "NS-13", name: "Paso 3 Detalles",
    description: "Se añaden detalles adicionales, locales visitados y se etiqueta a amigos.",
    imagePath: "/gallery/ns_13_detalles_de_la_noche.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "social"], isKeyScreen: false
  },
  {
    id: "ns-14-step-publish", code: "NS-14", name: "Paso 4 Publicar",
    description: "Pantalla de revisión final y botón de confirmación para publicar la noche.",
    imagePath: "/gallery/ns_14_resumen_de_publicaci_n.png", block: "registro", aspectRatio: "9/19.5", tags: ["registration", "content"], isKeyScreen: false
  }
];

const screensGrupos: MockupScreen[] = [
  {
    id: "ns-15-group-list", code: "NS-15", name: "Lista de grupos",
    description: "Directorio de las escuadras o grupos a los que pertenece el usuario.",
    imagePath: "/gallery/ns_15_lista_de_grupos.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social"], isKeyScreen: false
  },
  {
    id: "ns-16-group-feed", code: "NS-16", name: "Feed del grupo",
    description: "Un feed filtrado que solo muestra la actividad de los miembros de este grupo específico.",
    imagePath: "/gallery/ns_16_dentro_de_un_grupo_feed.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social", "feed"], isKeyScreen: true
  },
  {
    id: "ns-17-group-chat", code: "NS-17", name: "Chat de grupo",
    description: "Sala de chat en tiempo real para los miembros del grupo.",
    imagePath: "/gallery/ns_17_chat_de_grupo.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social", "chat"], isKeyScreen: true
  },
  {
    id: "ns-18-create-group", code: "NS-18", name: "Crear grupo",
    description: "Pantalla de configuración para fundar una nueva escuadra.",
    imagePath: "/gallery/ns_18_crear_grupo.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social"], isKeyScreen: false
  },
  {
    id: "ns-19-invite-members", code: "NS-19", name: "Invitar miembros",
    description: "Interfaz para buscar y añadir amigos a un grupo existente mediante un enlace o invitación directa.",
    imagePath: "/gallery/ns_18_crear_grupo.png", block: "grupos", aspectRatio: "9/19.5", tags: ["social"], isKeyScreen: false
  }
];

const screensRanking: MockupScreen[] = [
  {
    id: "ns-20-group-ranking", code: "NS-20", name: "Ranking del grupo",
    description: "Tabla de clasificación interna del grupo, comparando la puntuación NightScore de sus miembros.",
    technicalNote: "Sincronizado vía Redis para evitar cargas pesadas en la BBDD relacional al ordenar scores.",
    imagePath: "/gallery/ns_20_ranking_de_grupo.png", block: "ranking", aspectRatio: "9/19.5", tags: ["gamification", "social"], isKeyScreen: true
  },
  {
    id: "ns-21-global-ranking", code: "NS-21", name: "Ranking global",
    description: "El top absoluto de usuarios en toda la plataforma según su NightScore.",
    imagePath: "/gallery/ns_21_ranking_global_y_ciudad.png", block: "ranking", aspectRatio: "9/19.5", tags: ["gamification"], isKeyScreen: false
  }
];

const screensMvp: MockupScreen[] = [
  {
    id: "ns-22-mvp-vote", code: "NS-22", name: "Votación MVP",
    description: "Pantalla efímera que aparece al final de la noche para que el grupo vote quién fue el 'Most Valuable Player'.",
    imagePath: "/mockups/ns-22-mvp-vote.png", block: "mvp", aspectRatio: "9/19.5", tags: ["gamification", "mvp", "social"], isKeyScreen: true
  },
  {
    id: "ns-23-mvp-result", code: "NS-23", name: "Resultado del MVP",
    description: "La coronación final con los resultados de las votaciones de la escuadra.",
    imagePath: "/mockups/ns-23-mvp-result.png", block: "mvp", aspectRatio: "9/19.5", tags: ["gamification", "mvp"], isKeyScreen: true
  }
];

const screensPerfil: MockupScreen[] = [
  {
    id: "ns-24-my-profile", code: "NS-24", name: "Perfil propio",
    description: "Dashboard personal del usuario, su foto, NightScore total, e historial de noches.",
    imagePath: "/mockups/ns-24-my-profile.png", block: "perfil", aspectRatio: "9/19.5", tags: ["profile"], isKeyScreen: true
  },
  {
    id: "ns-25-other-profile", code: "NS-25", name: "Perfil de otro usuario",
    description: "Vista pública del perfil de un amigo o usuario externo, con botón para añadir amigo.",
    imagePath: "/mockups/ns-25-other-profile.png", block: "perfil", aspectRatio: "9/19.5", tags: ["profile", "social"], isKeyScreen: false
  },
  {
    id: "ns-26-edit-profile", code: "NS-26", name: "Editar perfil",
    description: "Formulario para cambiar foto, biografía y detalles personales.",
    imagePath: "/mockups/ns-26-edit-profile.png", block: "perfil", aspectRatio: "9/19.5", tags: ["profile"], isKeyScreen: false
  }
];

const screensLogros: MockupScreen[] = [
  {
    id: "ns-27-achievements", code: "NS-27", name: "Mis logros",
    description: "Colección de insignias (badges) desbloqueadas por completar ciertos hitos fiesteros.",
    imagePath: "/gallery/ns_27_mis_logros.png", block: "logros", aspectRatio: "9/19.5", tags: ["gamification", "profile"], isKeyScreen: true
  },
  {
    id: "ns-28-achievement-unlocked", code: "NS-28", name: "Notificación nuevo logro",
    description: "Pop-up o modal animado que interrumpe la navegación cuando se obtiene una nueva medalla.",
    imagePath: "/gallery/ns_28_notificaci_n_de_logro.png", block: "logros", aspectRatio: "9/19.5", tags: ["gamification", "events"], isKeyScreen: false
  }
];

const screensEstadisticas: MockupScreen[] = [
  {
    id: "ns-29-stats", code: "NS-29", name: "Mis estadísticas",
    description: "Análisis gráfico y desglosado de los consumos, tipos de fiesta y horarios históricos del usuario.",
    imagePath: "/gallery/ns_29_estad_sticas_personales.png", block: "estadisticas", aspectRatio: "9/19.5", tags: ["analytics", "profile"], isKeyScreen: true
  }
];

const screensRecap: MockupScreen[] = [
  {
    id: "ns-30a-recap", code: "NS-30a", name: "Recap Slide 1",
    description: "Historia inicial del resumen tipo 'Spotify Wrapped' de las noches pasadas.",
    imagePath: "/gallery/ns_30_recap_portada.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "analytics", "gamification"], isKeyScreen: true
  },
  {
    id: "ns-30b-recap", code: "NS-30b", name: "Recap Slide 2",
    description: "Segunda historia del Recap, enfocada en consumiciones totales.",
    imagePath: "/gallery/ns_31_recap_consumo.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "analytics"], isKeyScreen: false
  },
  {
    id: "ns-30c-recap", code: "NS-30c", name: "Recap Slide 3",
    description: "Tercera historia del Recap revelando los compañeros de fiesta más frecuentes.",
    imagePath: "/gallery/ns_32_recap_local_del_mes.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "social"], isKeyScreen: false
  },
  {
    id: "ns-30d-recap", code: "NS-30d", name: "Recap Slide 4",
    description: "Cuarta historia destacando los trofeos MVP obtenidos.",
    imagePath: "/gallery/ns_33_recap_resumen_final.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "gamification"], isKeyScreen: false
  },
  {
    id: "ns-30e-recap", code: "NS-30e", name: "Recap Slide 5",
    description: "Quinta historia del Recap con la progresión del ranking personal.",
    imagePath: "/mockups/ns-30e-recap.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "analytics"], isKeyScreen: false
  },
  {
    id: "ns-30f-recap", code: "NS-30f", name: "Recap Slide 6",
    description: "Pantalla final del Recap con un resumen compartible para Instagram Stories.",
    imagePath: "/mockups/ns-30f-recap.png", block: "recap", aspectRatio: "9/16", tags: ["recap", "social", "gamification"], isKeyScreen: true
  }
];

const screensEventos: MockupScreen[] = [
  {
    id: "ns-31-events", code: "NS-31", name: "Lista de eventos",
    description: "Explorador de fiestas y eventos próximos sugeridos por la app o creados por grupos.",
    imagePath: "/mockups/ns-31-events.png", block: "eventos", aspectRatio: "9/19.5", tags: ["events", "social"], isKeyScreen: true
  },
  {
    id: "ns-32-event-detail", code: "NS-32", name: "Detalle de evento",
    description: "Toda la información del evento, ubicación, line-up y asistentes confirmados.",
    imagePath: "/mockups/ns-32-event-detail.png", block: "eventos", aspectRatio: "9/19.5", tags: ["events", "social"], isKeyScreen: false
  }
];

const screensNotificaciones: MockupScreen[] = [
  {
    id: "ns-33-notifications", code: "NS-33", name: "Centro de notificaciones",
    description: "Inbox central donde llegan likes, comentarios, invitaciones a grupos y nuevos seguidores.",
    imagePath: "/mockups/ns-33-notifications.png", block: "notificaciones", aspectRatio: "9/19.5", tags: ["social"], isKeyScreen: true
  }
];

const screensAjustes: MockupScreen[] = [
  {
    id: "ns-34-settings", code: "NS-34", name: "Ajustes",
    description: "Configuración global de cuenta, notificaciones, privacidad de datos y soporte técnico.",
    imagePath: "/gallery/ns_34_ajustes_de_privacidad.png", block: "ajustes", aspectRatio: "9/19.5", tags: ["settings", "profile"], isKeyScreen: false
  }
];

export const MOCKUP_BLOCKS: MockupBlock[] = [
  {
    id: "onboarding",
    code: "BLOQUE 1",
    name: "Onboarding y Autenticación",
    description: "Flujos de entrada de usuario, explicación de propuesta de valor y procesos de registro seguro y configuración de perfil base.",
    color: "#7C3AED",
    icon: "🌙",
    screens: screensOnboarding
  },
  {
    id: "navigation",
    code: "BLOQUE 2",
    name: "Navegación Principal",
    description: "Estructura base de la app y acceso a las áreas principales mediante la barra inferior.",
    color: "#06B6D4",
    icon: "🧭",
    screens: screensNavigation
  },
  {
    id: "feed",
    code: "BLOQUE 3",
    name: "Feed Principal",
    description: "Muro social y de actividad central donde los usuarios interactúan con las noches publicadas.",
    color: "#EC4899",
    icon: "🏠",
    screens: screensFeed
  },
  {
    id: "registro",
    code: "BLOQUE 4",
    name: "Registro de Noche",
    description: "El flujo de creación de contenido paso a paso para reportar la actividad y subir el score de la noche.",
    color: "#F59E0B",
    icon: "📸",
    screens: screensRegistro
  },
  {
    id: "grupos",
    code: "BLOQUE 5",
    name: "Grupos",
    description: "Gestión social y comunicación interna de escuadras y grupos de usuarios privados.",
    color: "#22C55E",
    icon: "👥",
    screens: screensGrupos
  },
  {
    id: "ranking",
    code: "BLOQUE 6",
    name: "Ranking",
    description: "Tablas de clasificación basadas en NightScore para estimular la competencia amigable.",
    color: "#F59E0B",
    icon: "🏆",
    screens: screensRanking
  },
  {
    id: "mvp",
    code: "BLOQUE 7",
    name: "Sistema MVP",
    description: "Micro-interacción efímera post-noche para elegir al integrante más destacado del grupo.",
    color: "#EAB308",
    icon: "👑",
    screens: screensMvp
  },
  {
    id: "perfil",
    code: "BLOQUE 8",
    name: "Perfil",
    description: "Punto central de la identidad personal del usuario, sus métricas acumuladas y ajustes.",
    color: "#8B5CF6",
    icon: "👤",
    screens: screensPerfil
  },
  {
    id: "logros",
    code: "BLOQUE 9",
    name: "Logros y Badges",
    description: "Sistema de recompensas visuales por hitos especiales que incentiva el engagment a largo plazo.",
    color: "#EC4899",
    icon: "🎖",
    screens: screensLogros
  },
  {
    id: "estadisticas",
    code: "BLOQUE 10",
    name: "Estadísticas",
    description: "Visualización de datos de consumo y hábitos de fiesta agregados y personales.",
    color: "#06B6D4",
    icon: "📊",
    screens: screensEstadisticas
  },
  {
    id: "recap",
    code: "BLOQUE 11",
    name: "Recap",
    description: "Resúmenes semanales dinámicos en formato 'Story' para revisión y compartición en redes externas.",
    color: "#7C3AED",
    icon: "✨",
    screens: screensRecap
  },
  {
    id: "eventos",
    code: "BLOQUE 12",
    name: "Eventos",
    description: "Tablón de planificación y descubrimiento de actividades sociales futuras.",
    color: "#22C55E",
    icon: "📅",
    screens: screensEventos
  },
  {
    id: "notificaciones",
    code: "BLOQUE 13",
    name: "Notificaciones",
    description: "Bandeja de entrada de interacciones y avisos relevantes de la plataforma.",
    color: "#F97316",
    icon: "🔔",
    screens: screensNotificaciones
  },
  {
    id: "ajustes",
    code: "BLOQUE 14",
    name: "Ajustes",
    description: "Parámetros globales de configuración, preferencias técnicas de la aplicación y ayuda.",
    color: "#94A3B8",
    icon: "⚙️",
    screens: screensAjustes
  }
];

export const MOCKUP_SCREENS: MockupScreen[] = MOCKUP_BLOCKS.flatMap(b => b.screens);
export const TOTAL_SCREENS = MOCKUP_SCREENS.length;
export const KEY_SCREENS = MOCKUP_SCREENS.filter(s => s.isKeyScreen);

