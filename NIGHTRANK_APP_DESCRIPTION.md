# NightRank - Especificación y Descripción de la Aplicación Móvil (Contexto para SDD)

Este documento contiene la descripción completa, arquitectura y especificación de producto de **NightRank**, diseñado específicamente para ser utilizado como contexto en metodologías de Spec Driven Development (SDD) para la generación de planes de implementación y tareas.

---

## 1. Visión General del Producto

**NightRank** ("Convierte tu salida en una leyenda") es una aplicación móvil social interactiva diseñada para registrar, compartir y rankear las noches de fiesta dentro de grupos de amigos privados. A diferencia de las redes sociales masivas, NightRank gamifica la vida nocturna enfocándose en círculos cerrados (escuadras), utilizando estadísticas, logros, votaciones para el "MVP" (Jugador Más Valioso) de la noche y resúmenes de actividad al estilo *Spotify Wrapped*.

**Objetivo Principal:** Crear un espacio seguro, privado y altamente gamificado para que los grupos de amigos inmortalicen sus noches de fiesta a través de un formato "Mobile-First".

---

## 2. Características Clave y Mecánicas Principales

- **Registro de Noches (Estilo BeReal / Dual Camera):** Uso de cámara dual para capturar perspectiva y selfie. Los usuarios añaden lugar, etiquetan amigos, valoran la noche (del 1 al 10) y definen su estado de ánimo.
- **Contador de Consumiciones:** Sistema interactivo y en tiempo real para llevar la cuenta de lo ingerido (cubatas, cervezas, cócteles, chupitos).
- **Sistema MVP (Jugador Más Valioso):** Al día siguiente de la salida, el grupo tiene una ventana de 24 horas para votar al protagonista de la noche (ej. el más divertido, el fotógrafo, el que más aguantó).
- **Rankings y Competición Interna:** Tablas de clasificación locales (dentro del grupo) para métricas como: mayor número de consumiciones, más salidas, rachas activas y puntuación global de NightRank.
- **Logros y Trofeos (Badges):** Gamificación mediante desbloqueo de medallas (ej. "Primer MVP", "Fiestero en Serie" por 10 noches, "Cervecero de élite").
- **Recaps (Formato Wrapped / Stories):** Resúmenes visuales mensuales y anuales con estadísticas destacadas ("Noche más épica", "Local más visitado"), listos para ser compartidos en otras redes sociales como Instagram.

---

## 3. Especificación de Módulos y Pantallas (UI/UX Flows)

La aplicación está dividida en 8 bloques funcionales principales:

### Bloque 1: Onboarding y Autenticación
- **Welcome / Introducción:** Explicación de la propuesta de valor social y gamificada.
- **Verificación de Edad:** Pantalla obligatoria confirmando la mayoría de edad (18+).
- **Login/Register:** Autenticación unificada.
- **Configuración de Perfil:** Subida de foto de perfil y selección de *username*.

### Bloque 2: Feed Principal
- **Feed Principal (Muro):** Visualización en tiempo real de la actividad y salidas de amigos y grupos.
- **Detalle de Publicación:** Vista expandida de una publicación específica con sección de comentarios.

### Bloque 3: Registro de Noche (Core Flow)
- **Cámara NightRank:** Captura nativa de fotos (dual/galería) para adjuntar a la salida.
- **Registro de Bebidas:** Controles interactivos (+/-) para añadir consumiciones de la noche por categorías.
- **Detalles de la Noche:** Inclusión de ubicación (locales), etiquetas a amigos y puntuación.
- **Resumen y Publicación:** Revisión final y confirmación de subida.

### Bloque 4: Grupos (Escuadras)
- **Lista de Grupos:** Directorio de todas las escuadras a las que pertenece el usuario.
- **Feed de Grupo:** Muro privado y filtrado solo con actividad de una escuadra en particular.
- **Chat de Grupo:** Mensajería en tiempo real exclusiva para los miembros.
- **Creación de Grupos:** Configuración para fundar e invitar miembros a un nuevo grupo.

### Bloque 5: Ranking
- **Ranking Global / Ciudad:** Tablas de liderazgo absolutas basadas en la puntuación NightRank de los usuarios. (Se puede filtrar por grupo interno).

### Bloque 6: Logros y Badges
- **Mis Logros (Vitrina):** Colección visual de todas las insignias obtenidas.
- **Detalle de Logro:** Especificaciones de cómo se consiguió una insignia en particular.
- **Notificación de Desbloqueo:** Pop-up o modal animado interrumpiendo la experiencia para celebrar el nuevo logro.

### Bloque 7: Recap (Resúmenes)
- Experiencia inmersiva en formato *Stories* verticales (9:16).
- **Cover:** Portada de la historia del resumen.
- **Recap Consumo:** Estadísticas de bebidas.
- **Recap Local del Mes:** Revelación del lugar más frecuentado.
- **Resumen Final:** Visualización de trofeos para exportar y compartir.

### Bloque 8: Ajustes
- **Privacidad y Datos:** Configuración de notificaciones y visibilidad.
- **Ayuda y Soporte:** Preguntas frecuentes y contacto.

---

## 4. Stack Tecnológico (Referencia Arquitectónica)

La aplicación está diseñada como una aplicación móvil nativa con su respectivo backend dedicado, utilizando las siguientes tecnologías:

**Frontend**
- **Mobile:** React Native + Expo + TypeScript
- **State:** Zustand + React Query
- **Navigation:** React Navigation
- **Styles:** NativeWind (Tailwind for RN). Estética "Dark Mode", *Glassmorphism* y gradientes neón.
- **Animations:** Reanimated + Lottie
- **Camera:** expo-camera (dual mode)

**Backend & Infraestructura (Stack Gratuito / MVP)**
- **Core API:** Supabase (BaaS) gestionará directamente la base de datos y la autenticación, reduciendo la necesidad de un backend tradicional de pago.
- **Base de Datos:** PostgreSQL alojado en Supabase (Free Tier).
- **Comunicaciones en Tiempo Real:** Supabase Realtime (WebSockets) para el chat y feed en vivo, sustituyendo a Socket.io y Redis.
- **Auth:** Supabase Auth (Soporta Email/Password y Login externo con Google).
- **Almacenamiento (Storage):** Supabase Storage para guardar las fotos y avatares de forma gratuita.

---

## 5. Notas para SDD (Spec Driven Development)

Al generar el plan de implementación basado en este documento, considerar:
1. **Fase 1 (Design System & Core UI):** Componentes base en React Native con NativeWind y animaciones Lottie/Reanimated.
2. **Fase 2 (Backend Supabase & Auth):** Configuración del proyecto en Supabase. Integración del SDK en Expo para gestionar Registro/Login.
3. **Fase 3 (Mecánica Core):** Flujo de "Registro de Noche", `expo-camera` para dual mode, e inserción directa en Supabase (PostgreSQL).
4. **Fase 4 (Social & Grupos):** Uso de Supabase Realtime para el chat de grupo y notificaciones en vivo, evitando servidores dedicados.
5. **Fase 5 (Gamificación & Optimizaciones):** Lógica de cálculo de MVP y Rankings (puede realizarse mediante Supabase Edge Functions o vistas SQL).
