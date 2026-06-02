export const apiEndpointsData = [
  {
    category: "Auth",
    endpoints: [
      { method: "POST", path: "/auth/register", description: "Crear una nueva cuenta de usuario", authRequired: false },
      { method: "POST", path: "/auth/login", description: "Iniciar sesión con email y contraseña", authRequired: false },
      { method: "POST", path: "/auth/refresh", description: "Refrescar el token JWT", authRequired: false },
      { method: "POST", path: "/auth/logout", description: "Cerrar sesión y revocar tokens", authRequired: true },
      { method: "GET", path: "/auth/google", description: "Iniciar sesión con Google OAuth2", authRequired: false },
      { method: "GET", path: "/auth/apple", description: "Iniciar sesión con Apple", authRequired: false }
    ]
  },
  {
    category: "Users",
    endpoints: [
      { method: "GET", path: "/users/me", description: "Obtener perfil del usuario autenticado", authRequired: true },
      { method: "PATCH", path: "/users/me", description: "Actualizar perfil del usuario", authRequired: true },
      { method: "GET", path: "/users/:id", description: "Obtener perfil público de un usuario", authRequired: true },
      { method: "GET", path: "/users/:id/stats", description: "Obtener estadísticas públicas de un usuario", authRequired: true },
      { method: "POST", path: "/users/:id/follow", description: "Enviar solicitud de amistad/seguir", authRequired: true },
      { method: "DELETE", path: "/users/:id/follow", description: "Dejar de seguir o eliminar amigo", authRequired: true }
    ]
  },
  {
    category: "Groups",
    endpoints: [
      { method: "POST", path: "/groups", description: "Crear un nuevo grupo privado", authRequired: true },
      { method: "GET", path: "/groups/:id", description: "Obtener detalles del grupo", authRequired: true },
      { method: "PATCH", path: "/groups/:id", description: "Actualizar ajustes del grupo (solo admins)", authRequired: true },
      { method: "DELETE", path: "/groups/:id", description: "Eliminar grupo (solo admins)", authRequired: true },
      { method: "POST", path: "/groups/:id/invite", description: "Generar enlace de invitación", authRequired: true },
      { method: "POST", path: "/groups/:id/join", description: "Unirse a un grupo vía enlace/código", authRequired: true },
      { method: "GET", path: "/groups/:id/rankings", description: "Obtener tabla de clasificaciones del grupo", authRequired: true },
      { method: "GET", path: "/groups/:id/feed", description: "Obtener el feed de publicaciones del grupo", authRequired: true }
    ]
  },
  {
    category: "Night Posts",
    endpoints: [
      { method: "POST", path: "/posts", description: "Crear un nuevo registro de noche", authRequired: true },
      { method: "GET", path: "/posts/:id", description: "Obtener detalles de una publicación", authRequired: true },
      { method: "DELETE", path: "/posts/:id", description: "Eliminar una publicación propia", authRequired: true },
      { method: "POST", path: "/posts/:id/reactions", description: "Añadir o quitar una reacción", authRequired: true },
      { method: "POST", path: "/posts/:id/comments", description: "Comentar en una publicación", authRequired: true },
      { method: "GET", path: "/posts/:id/stats", description: "Obtener estadísticas de la publicación", authRequired: true }
    ]
  },
  {
    category: "MVP",
    endpoints: [
      { method: "POST", path: "/mvp/nominate", description: "Votar a un usuario para MVP de una noche", authRequired: true },
      { method: "GET", path: "/mvp/:postId/results", description: "Ver resultados de MVP (tras 24h)", authRequired: true },
      { method: "GET", path: "/mvp/:groupId/history", description: "Historial de MVPs del grupo", authRequired: true }
    ]
  },
  {
    category: "Stats & Recaps",
    endpoints: [
      { method: "GET", path: "/stats/personal", description: "Estadísticas globales del usuario", authRequired: true },
      { method: "GET", path: "/stats/group/:id", description: "Estadísticas globales del grupo", authRequired: true },
      { method: "GET", path: "/recaps/monthly/:userId", description: "Obtener el Wrapped mensual", authRequired: true },
      { method: "GET", path: "/recaps/annual/:userId", description: "Obtener el Wrapped anual", authRequired: true }
    ]
  }
];
