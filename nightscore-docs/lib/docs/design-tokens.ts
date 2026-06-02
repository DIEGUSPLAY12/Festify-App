export const NS_COLORS = {
  // Fondos
  "bg-primary": "#0A0A0F",
  "bg-card": "#13131A",
  "bg-elevated": "#1C1C2A",
  
  // Acentos
  "accent-violet": "#7C3AED",
  "accent-fuchsia": "#EC4899",
  "accent-cyan": "#06B6D4",
  
  // Degradados
  "gradient-primary": "linear-gradient(135deg, #7C3AED, #EC4899)",
  "gradient-secondary": "linear-gradient(135deg, #06B6D4, #7C3AED)",
  
  // Texto
  "text-primary": "#F8FAFC",
  "text-secondary": "#94A3B8",
  "text-disabled": "#475569",
  
  // Semánticos
  success: "#22C55E",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#06B6D4",
  
  // Bordes
  "border-subtle": "rgba(255,255,255,0.08)",
  "border-default": "rgba(255,255,255,0.12)",
  "border-strong": "rgba(255,255,255,0.20)",
  
  // Overlays & Glass Backgrounds
  "overlay-dark": "rgba(0,0,0,0.60)",
  "overlay-darker": "rgba(0,0,0,0.80)",
  "glass-bg": "rgba(19,19,26,0.80)",
};

export const NS_TYPOGRAPHY = {
  families: {
    display: "Clash Display, sans-serif",
    ui: "Satoshi, sans-serif",
    mono: "Geist Mono, monospace",
  },
  scale: {
    xs: { size: "12px", lineHeight: "1.4", tracking: "0.04em" },
    sm: { size: "14px", lineHeight: "1.5", tracking: "0.01em" },
    base: { size: "16px", lineHeight: "1.6", tracking: "0em" },
    lg: { size: "20px", lineHeight: "1.4", tracking: "-0.01em" },
    xl: { size: "24px", lineHeight: "1.3", tracking: "-0.02em" },
    "2xl": { size: "32px", lineHeight: "1.2", tracking: "-0.03em" },
    "3xl": { size: "40px", lineHeight: "1.1", tracking: "-0.04em" },
    "4xl": { size: "56px", lineHeight: "1.0", tracking: "-0.05em" },
  },
  weights: {
    clash: [700, 800],
    satoshi: [400, 500, 600, 700],
    geist: [400, 500],
  }
};

export const NS_SPACING = {
  "space-1": "4px",
  "space-2": "8px",
  "space-3": "12px",
  "space-4": "16px",
  "space-5": "20px",
  "space-6": "24px",
  "space-8": "32px",
  "space-10": "40px",
  "space-12": "48px",
  "space-16": "64px",
  "space-20": "80px",
};

export const NS_RADIUS = {
  "radius-sm": "8px",
  "radius-md": "12px",
  "radius-lg": "16px",
  "radius-xl": "20px",
  "radius-2xl": "24px",
  "radius-full": "9999px",
};

export const NS_SHADOWS = {
  "shadow-violet": "0 8px 32px rgba(124,58,237,0.35)",
  "shadow-fuchsia": "0 8px 32px rgba(236,72,153,0.35)",
  "shadow-cyan": "0 8px 32px rgba(6,182,212,0.35)",
  "shadow-card": "0 4px 24px rgba(0,0,0,0.40)",
  
  // Sombras compuestas
  "card-hover": "0 8px 40px rgba(0,0,0,0.60)",
  "violet-glow": "0 0 0 1px rgba(124,58,237,0.4), 0 8px 32px rgba(124,58,237,0.35)",
  "fuchsia-glow": "0 0 0 1px rgba(236,72,153,0.4), 0 8px 32px rgba(236,72,153,0.35)",
  "cyan-glow": "0 0 0 1px rgba(6,182,212,0.4), 0 8px 32px rgba(6,182,212,0.35)",
  "inset-subtle": "inset 0 1px 0 rgba(255,255,255,0.06)",
  "button-pressed": "inset 0 2px 8px rgba(0,0,0,0.30)",
};

export const NS_ANIMATIONS = {
  "duration-fast": { value: "150ms", description: "hover states, focus rings" },
  "duration-base": { value: "250ms", description: "transiciones de componentes" },
  "duration-slow": { value: "400ms", description: "modales, panels, page transitions" },
  "duration-slower": { value: "600ms", description: "animaciones de entrada en sección" },
  
  "ease-default": { value: "cubic-bezier(0.4, 0, 0.2, 1)", description: "ease in-out" },
  "ease-spring": { value: "cubic-bezier(0.34, 1.56, 0.64, 1)", description: "spring/bounce" },
  "ease-out": { value: "cubic-bezier(0, 0, 0.2, 1)", description: "elementos saliendo" },

  catalog: {
    shimmer: {
      duration: "2s infinite",
      easing: "linear",
      description: "skeleton loading",
      usedIn: "placeholders de carga de imágenes y contenido"
    },
    float: {
      duration: "3s infinite",
      easing: "ease-in-out",
      description: "translateY -6px → 0px → -6px",
      usedIn: "elementos decorativos del hero, orbes de fondo"
    },
    "glow-pulse": {
      duration: "2s infinite",
      easing: "ease-in-out",
      description: "opacidad de sombra 0.3 → 0.7 → 0.3",
      usedIn: "botón CTA principal, indicador de grabación activa"
    },
    "fade-up": {
      duration: "600ms",
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      description: "opacity 0 + translateY 16px → opacity 1 + translateY 0",
      usedIn: "entrada de secciones en scroll, notificaciones toast, modales"
    },
    "slide-in": {
      duration: "400ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      description: "translateX -20px + opacity 0 → translateX 0 + opacity 1",
      usedIn: "sidebar móvil, panel de detalle de tabla"
    },
    "spring-scale": {
      duration: "250ms",
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      description: "escala al 102% u 98%",
      usedIn: "thumbnails de mockup, cards de logros, botones de reacción"
    },
    stagger: {
      duration: "80ms delay",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      description: "elementos entran uno tras otro con delay",
      usedIn: "grid de badges, lista de grupos, rankings"
    }
  }
};

export const NS_GLASSMORPHISM = {
  standard: {
    background: "rgba(19,19,26,0.80)",
    backdropFilter: "blur(16px) saturate(1.5)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.06)",
  },
  elevated: {
    background: "rgba(28,28,42,0.92)",
    backdropFilter: "blur(24px) saturate(1.8)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.1)",
  },
  subtle: {
    background: "rgba(19,19,26,0.40)",
    backdropFilter: "blur(8px) saturate(1.2)",
    border: "1px solid rgba(255,255,255,0.04)",
    borderRadius: "16px",
    boxShadow: "none",
  }
};

export const CSS_VARIABLES = `:root {
  /* Colores - Fondos */
  --ns-bg-primary: #0A0A0F;
  --ns-bg-card: #13131A;
  --ns-bg-elevated: #1C1C2A;
  
  /* Colores - Acentos */
  --ns-accent-violet: #7C3AED;
  --ns-accent-fuchsia: #EC4899;
  --ns-accent-cyan: #06B6D4;
  --ns-gradient-primary: linear-gradient(135deg, #7C3AED, #EC4899);
  --ns-gradient-secondary: linear-gradient(135deg, #06B6D4, #7C3AED);
  
  /* Colores - Texto */
  --ns-text-primary: #F8FAFC;
  --ns-text-secondary: #94A3B8;
  --ns-text-disabled: #475569;
  
  /* Colores - Semánticos */
  --ns-success: #22C55E;
  --ns-error: #EF4444;
  --ns-warning: #F59E0B;
  --ns-info: #06B6D4;
  
  /* Colores - Bordes & Overlays */
  --ns-border-subtle: rgba(255,255,255,0.08);
  --ns-border-default: rgba(255,255,255,0.12);
  --ns-border-strong: rgba(255,255,255,0.20);
  --ns-overlay-dark: rgba(0,0,0,0.60);
  --ns-overlay-darker: rgba(0,0,0,0.80);
  --ns-glass-bg: rgba(19,19,26,0.80);
  
  /* Sombras Base */
  --ns-shadow-violet: 0 8px 32px rgba(124,58,237,0.35);
  --ns-shadow-fuchsia: 0 8px 32px rgba(236,72,153,0.35);
  --ns-shadow-cyan: 0 8px 32px rgba(6,182,212,0.35);
  --ns-shadow-card: 0 4px 24px rgba(0,0,0,0.40);
  
  /* Tipografía - Escala (Tamaño / Altura de línea) */
  --ns-text-xs: 12px;
  --ns-text-sm: 14px;
  --ns-text-base: 16px;
  --ns-text-lg: 20px;
  --ns-text-xl: 24px;
  --ns-text-2xl: 32px;
  --ns-text-3xl: 40px;
  --ns-text-4xl: 56px;

  /* Espaciado */
  --ns-space-1: 4px;
  --ns-space-2: 8px;
  --ns-space-3: 12px;
  --ns-space-4: 16px;
  --ns-space-5: 20px;
  --ns-space-6: 24px;
  --ns-space-8: 32px;
  --ns-space-10: 40px;
  --ns-space-12: 48px;
  --ns-space-16: 64px;
  --ns-space-20: 80px;

  /* Border Radius */
  --ns-radius-sm: 8px;
  --ns-radius-md: 12px;
  --ns-radius-lg: 16px;
  --ns-radius-xl: 20px;
  --ns-radius-2xl: 24px;
  --ns-radius-full: 9999px;

  /* Animaciones y Transiciones */
  --ns-duration-fast: 150ms;
  --ns-duration-base: 250ms;
  --ns-duration-slow: 400ms;
  --ns-duration-slower: 600ms;
  --ns-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ns-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ns-ease-out: cubic-bezier(0, 0, 0.2, 1);
}`;

export const TAILWIND_EXTEND = {
  colors: {
    ns: {
      bg: {
        primary: "#0A0A0F",
        card: "#13131A",
        elevated: "#1C1C2A",
      },
      accent: {
        violet: "#7C3AED",
        fuchsia: "#EC4899",
        cyan: "#06B6D4",
      },
      text: {
        primary: "#F8FAFC",
        secondary: "#94A3B8",
        disabled: "#475569",
      },
      success: "#22C55E",
      error: "#EF4444",
      warning: "#F59E0B",
      info: "#06B6D4",
      border: {
        subtle: "rgba(255,255,255,0.08)",
        DEFAULT: "rgba(255,255,255,0.12)",
        strong: "rgba(255,255,255,0.20)",
      },
      overlay: {
        dark: "rgba(0,0,0,0.60)",
        darker: "rgba(0,0,0,0.80)",
      }
    }
  },
  backgroundImage: {
    "ns-gradient-primary": "linear-gradient(135deg, #7C3AED, #EC4899)",
    "ns-gradient-secondary": "linear-gradient(135deg, #06B6D4, #7C3AED)",
  },
  fontFamily: {
    display: ["var(--font-clash-display)", "sans-serif"],
    ui: ["var(--font-satoshi)", "sans-serif"],
    mono: ["var(--font-geist-mono)", "monospace"],
  },
  fontSize: {
    "ns-xs": ["12px", { lineHeight: "1.4", letterSpacing: "0.04em" }],
    "ns-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
    "ns-base": ["16px", { lineHeight: "1.6", letterSpacing: "0em" }],
    "ns-lg": ["20px", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
    "ns-xl": ["24px", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
    "ns-2xl": ["32px", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
    "ns-3xl": ["40px", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
    "ns-4xl": ["56px", { lineHeight: "1.0", letterSpacing: "-0.05em" }],
  },
  spacing: {
    "ns-1": "4px",
    "ns-2": "8px",
    "ns-3": "12px",
    "ns-4": "16px",
    "ns-5": "20px",
    "ns-6": "24px",
    "ns-8": "32px",
    "ns-10": "40px",
    "ns-12": "48px",
    "ns-16": "64px",
    "ns-20": "80px",
  },
  borderRadius: {
    "ns-sm": "8px",
    "ns-md": "12px",
    "ns-lg": "16px",
    "ns-xl": "20px",
    "ns-2xl": "24px",
  },
  boxShadow: {
    "ns-card": "0 4px 24px rgba(0,0,0,0.40)",
    "ns-card-hover": "0 8px 40px rgba(0,0,0,0.60)",
    "ns-violet": "0 8px 32px rgba(124,58,237,0.35)",
    "ns-fuchsia": "0 8px 32px rgba(236,72,153,0.35)",
    "ns-cyan": "0 8px 32px rgba(6,182,212,0.35)",
    "ns-glow-violet": "0 0 0 1px rgba(124,58,237,0.4), 0 8px 32px rgba(124,58,237,0.35)",
    "ns-glow-fuchsia": "0 0 0 1px rgba(236,72,153,0.4), 0 8px 32px rgba(236,72,153,0.35)",
    "ns-glow-cyan": "0 0 0 1px rgba(6,182,212,0.4), 0 8px 32px rgba(6,182,212,0.35)",
    "ns-inset-subtle": "inset 0 1px 0 rgba(255,255,255,0.06)",
    "ns-button-pressed": "inset 0 2px 8px rgba(0,0,0,0.30)",
  },
  transitionDuration: {
    "ns-fast": "150ms",
    "ns-base": "250ms",
    "ns-slow": "400ms",
    "ns-slower": "600ms",
  },
  transitionTimingFunction: {
    "ns-default": "cubic-bezier(0.4, 0, 0.2, 1)",
    "ns-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
    "ns-out": "cubic-bezier(0, 0, 0.2, 1)",
  }
};
