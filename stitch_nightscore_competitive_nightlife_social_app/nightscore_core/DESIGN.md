---
name: NightScore Core
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb0cd'
  on-tertiary: '#640039'
  tertiary-container: '#bf2076'
  on-tertiary-container: '#ffdde7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-hero:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  caption-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-padding-h: 20px
  card-gap: 12px
  section-margin: 32px
  inline-sm: 8px
  inline-md: 16px
---

## Brand & Style
Este sistema de diseño personifica la intersección entre el lujo nocturno y la competitividad de alto rendimiento. La narrativa visual se aleja del diseño social convencional para adoptar una estética de **club premium fusionada con una aplicación de fitness de élite**. 

El estilo predominante es una mezcla de **Minimalismo Oscuro y Glassmorphism**, utilizando capas translúcidas y desenfoques de fondo para crear profundidad sin sacrificar la claridad. La interfaz debe sentirse vibrante pero exclusiva, evocando la energía de una pista de baile y la precisión de un tablero de puntuación deportivo. Cada interacción debe reforzar la sensación de estatus y gamificación.

## Colors
La paleta está anclada en un negro azulado profundo que proporciona el lienzo perfecto para acentos de neón. 

- **Acento Primario:** Un gradiente dinámico de Violeta (#7C3AED) a Fucsia (#EC4899) utilizado para acciones críticas, estados de "vencedor" y elementos de marca de alto impacto.
- **Acento Secundario:** Cian Neón (#06B6D4) para datos técnicos, métricas de rendimiento y elementos de navegación secundaria.
- **Superficies:** Los contenedores utilizan un fondo sólido (#13131A) con una ligera transparencia y bordes de baja opacidad (8% blanco) para simular vidrio ahumado.

## Typography
La tipografía se divide en tres roles estratégicos para equilibrar el impacto visual y la legibilidad:

1.  **Sora (Headlines/Rankings):** Su estructura geométrica y audaz se utiliza para nombres de clubes, posiciones en el ranking y títulos de sección. Transmite una sensación de modernidad y poder.
2.  **Hanken Grotesk (UI/Body):** Una fuente contemporánea y limpia que asegura que la navegación y la lectura de feeds sean fluidas. Se priorizan los pesos *Medium* y *SemiBold* para mantener la jerarquía en fondos oscuros.
3.  **Geist Mono (Technical Data):** Utilizada exclusivamente para estadísticas, coordenadas, marcas de tiempo y métricas de "score", reforzando el aspecto técnico y de rendimiento de la plataforma.

## Layout & Spacing
El sistema utiliza un modelo de rejilla fluida optimizado para dispositivos móviles, tomando como referencia el iPhone 14 Pro.

- **Márgenes Laterales:** Se establece un padding horizontal fijo de **20px** para todo el contenido principal, asegurando una zona segura visual espaciosa.
- **Ritmo Vertical:** Los elementos dentro de las tarjetas utilizan un espaciado basado en incrementos de 4px, mientras que la separación entre tarjetas de contenido es estrictamente de **12px**.
- **Jerarquía de Espacios:** Las secciones principales se dividen por márgenes de 32px para permitir que el diseño "respire" entre la densidad de datos y gráficos.

## Elevation & Depth
La profundidad no se comunica mediante sombras tradicionales, sino a través de **capas tonales y efectos de transparencia**.

- **Capas de Vidrio:** Las tarjetas utilizan un desenfoque de fondo (*backdrop-blur*) de 20px y una opacidad de relleno del 60% sobre el fondo `#13131A`.
- **Bordes de Luz:** En lugar de sombras externas pesadas, los elementos elevados utilizan un borde interno (stroke) de 1px con color blanco al 8% de opacidad.
- **Brillo de Acento:** Los elementos de mayor jerarquía (como el botón central de navegación o botones primarios) emiten un resplandor difuso (*glow*) utilizando el color violeta primario con un radio de desenfoque de 24px y baja opacidad.

## Shapes
El lenguaje de formas es generoso y suave, contrastando con la naturaleza técnica de la tipografía mono y los colores neón.

- **Tarjetas (Cards):** Utilizan un radio de curvatura de **20px**, creando una apariencia moderna y orgánica.
- **Botones y Inputs:** Se estandarizan en **14px** para ofrecer una superficie táctil amigable que se diferencia visualmente de los contenedores de contenido.
- **Avatares:** Siempre circulares. Los usuarios premium o "Top Scorers" deben llevar un borde de gradiente de 2px para denotar estatus.

## Components
- **Buttons:** El botón primario utiliza el gradiente Violeta-Fucsia con texto en blanco. Debe incluir un *drop-shadow* de color violeta neón para simular iluminación. Los botones secundarios son de estilo "ghost" con el borde cian neón.
- **Cards:** Efecto de vidrio ahumado con bordes definidos. El contenido dentro de la tarjeta debe respetar los 16px de padding interno.
- **Icons:** Uso de iconografía lineal (2px de peso). Los iconos activos deben adoptar el color cian neón o el gradiente primario.
- **Navigation:** Una barra de 5 pestañas con fondo translúcido. El botón central (+) es el elemento de acción principal: circular, elevado, con fondo de gradiente y un icono de 24px.
- **Inputs:** Campos de texto con fondo `#13131A` sólido y bordes que se iluminan en cian cuando están en estado *focus*.
- **Chips/Badges:** Etiquetas pequeñas para categorías de música o tipos de evento, con bordes redondeados (pill-shaped) y fondos de baja opacidad del color de acento correspondiente.