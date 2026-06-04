# NightRank
**Convierte tu salida en una leyenda.**

NightRank es una aplicación social interactiva diseñada para registrar, compartir y rankear las noches de fiesta con tu grupo de amigos privados. Pensada para aquellos que quieren llevar un historial épico de sus salidas, NightRank gamifica la vida nocturna mediante estadísticas, logros, votaciones al "MVP" (Jugador Más Valioso) de la noche y resúmenes al estilo *Spotify Wrapped*.

## Idea de la Aplicación

El objetivo de NightRank es crear un espacio seguro y divertido para grupos de amigos donde puedan inmortalizar sus noches de fiesta. A diferencia de otras redes sociales masivas, NightRank se enfoca en **círculos privados**. 

### Funcionalidades Clave:

- **Registro de Noches (Estilo BeReal):** Cámara dual para capturar tu perspectiva y a ti mismo. Añade lugar, etiqueta amigos, valora la noche del 1 al 10 y define tu estado de ánimo.
- **Contador de Consumiciones:** Lleva la cuenta interactiva de lo que tomas durante la noche (cubatas, cervezas, cócteles, chupitos).
- **Sistema MVP:** Al día siguiente, el grupo tiene 24 horas para votar al protagonista de la noche (el más divertido, el mejor fotógrafo, el que más nivel demostró, etc.).
- **Rankings y Competición:** Tablas de clasificación dentro de tu grupo para ver quién tiene más consumiciones, más salidas, rachas activas y mejor puntuación global.
- **Logros y Trofeos:** Desbloquea medallas como "Primer MVP", "Fiestero en Serie" (10 noches), o "Cervecero de élite".
- **Recaps (Wrapped):** Resúmenes mensuales y anuales con formato de historias, mostrando estadísticas como "La noche más épica" o el "Local más visitado".

---

## Stack Tecnológico

NightRank está construida con las tecnologías más modernas del ecosistema de React para garantizar una experiencia rápida, fluida y con animaciones de primera calidad.

- **Framework:** [Next.js](https://nextjs.org/) para optimización de rendimiento y enrutamiento.
- **Librería UI:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para un tipado seguro y mejor experiencia de desarrollo.
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) combinado con `clsx` y `tailwind-merge`. El diseño destaca por el uso de *Glassmorphism*, gradientes vibrantes y estética nocturna (Dark Mode).
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) para micro-interacciones, transiciones fluidas de páginas y elementos dinámicos como el Podio y los logros.
- **Estado Global:** [Zustand](https://github.com/pmndrs/zustand) para una gestión de estado ligera y sin complicaciones.
- **Iconografía:** `lucide-react` y `@phosphor-icons/react` para iconos consistentes y modernos.

---

## Cómo se piensa realizar

La aplicación se desarrollará con un enfoque **Mobile-First**, dado que el contexto de uso principal (registrar fotos, sumar bebidas, votar) es durante la noche desde un smartphone.

### Arquitectura y Flujo de Desarrollo:

1. **Fundamentos y Diseño UI/UX:**
   - Implementación de un sistema de diseño basado en tonos oscuros (violetas, fucsias, cyanes) para emular la estética de vida nocturna (neón).
   - Desarrollo de componentes reutilizables y dinámicos (GlassCards, Badges, Botones interactivos).

2. **Desarrollo Frontend (Cliente):**
   - Implementación de flujos clave: Home/Feed del grupo, Pestaña de Registro (Cámara y Contadores), Tablas de Ranking y Perfil de Usuario con logros.
   - Uso intensivo de *Framer Motion* para dar una sensación *premium* a la interfaz.

3. **Gestión de Estado (Zustand):**
   - Control del estado local del usuario y almacenamiento de datos temporales (ej. consumiciones actuales de la noche).

4. **Integración Backend / Base de Datos (Fase Backend):**
   - La arquitectura inicial está preparada para consumir una API REST/GraphQL o un servicio BaaS (Backend as a Service). Se recomienda utilizar **Supabase** (PostgreSQL) o **Firebase** para gestionar:
     - Autenticación y Grupos (Invites, unirse mediante QR).
     - Base de datos en tiempo real para las votaciones de MVP y el Chat de grupo.
     - Almacenamiento (Storage) para las fotos.

5. **Despliegue y PWA:**
   - Conversión a *Progressive Web App (PWA)* para que los usuarios puedan instalarla en la pantalla de inicio del móvil y aprovechar funcionalidades nativas (como la cámara de forma más eficiente).
   - Despliegue en plataformas como Vercel o GitHub Pages.

---

## Desarrollo Local

Para correr este proyecto en tu máquina local:

```bash
# 1. Instala las dependencias
npm install
# o con yarn/pnpm/bun
yarn install

# 2. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para interactuar con la aplicación.
