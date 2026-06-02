export const featuresData = [
  {
    id: "registro",
    title: "Registro de Noches",
    description: "Registra cada detalle de tu noche de forma rápida y social.",
    steps: [
      {
        title: "Añadir fotos",
        description: "Cámara dual (estilo BeReal) para capturar tu perspectiva y a ti mismo al mismo tiempo."
      },
      {
        title: "Registrar consumiciones",
        description: "Contadores interactivos por tipo: cubata, cerveza, cóctel, chupito, copa de vino, shot."
      },
      {
        title: "Añadir detalles",
        description: "Lugar, etiquetar amigos, valoración de la noche (1-10) y estado de ánimo con un emoji."
      },
      {
        title: "Resumen y publicar",
        description: "Revisa todo antes de compartirlo en el feed de tu grupo privado."
      }
    ]
  },
  {
    id: "grupos",
    title: "Grupos y Social",
    description: "Comparte tus experiencias solo con los que importan.",
    features: [
      "Grupos privados con enlaces de invitación, QR o búsqueda de usuario",
      "Pertenencia a múltiples grupos (ej. Amigos de la Uni, Compañeros de trabajo)",
      "Feed interactivo con reacciones personalizadas y comentarios",
      "Chat de grupo integrado (estilo WhatsApp, cifrado de extremo a extremo)"
    ]
  },
  {
    id: "rankings",
    title: "Rankings y Competición",
    description: "Descubre quién es el rey de la noche.",
    categories: [
      { id: "drinks", label: "🍺 Más consumiciones", filters: ["noche", "semana", "mes", "total"] },
      { id: "outings", label: "🎉 Más salidas", filters: ["mes", "total"] },
      { id: "mvp", label: "👑 Más MVPs", filters: ["mes", "año"] },
      { id: "streak", label: "🔥 Racha activa", filters: ["actual"] },
      { id: "score", label: "⭐ Puntuación total", filters: ["global"] }
    ]
  },
  {
    id: "mvp",
    title: "Sistema MVP",
    description: "Vota al protagonista de la noche en las siguientes 24 horas.",
    categories: [
      "El más activo de la noche",
      "El más divertido",
      "El que más nivel demostró",
      "El protagonista de la noche",
      "El mejor fotógrafo",
      "El primero en llegar y el último en irse"
    ],
    tiebreaker: "En caso de empate, la persona con más consumiciones se lleva el doble MVP badge."
  },
  {
    id: "recaps",
    title: "Recaps (Wrapped)",
    description: "Tus estadísticas mensuales y anuales, formato historia.",
    statsIncluded: [
      "MVP del mes/año",
      "Quién acumuló más MVPs en el grupo",
      "Más consumiciones totales",
      "Local más visitado",
      "La noche más épica (mayor valoración promedio)",
      "Bebida más consumida (individual y grupal)",
      "Ranking completo del grupo"
    ]
  }
];
