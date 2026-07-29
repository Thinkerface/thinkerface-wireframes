import type { Config } from "tailwindcss";

// Extiende Tailwind apuntando a las variables CSS de app/globals.css,
// en vez de repetir los valores hex acá. Así CSS plano y clases de
// Tailwind quedan sincronizados desde una sola fuente de verdad.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
  DEFAULT: "var(--color-primary)",
  dark: "var(--color-primary-dark)",
},
accentYellow: "var(--color-yellow)",
accentRed: "var(--color-red)",
accentBlue: "var(--color-blue)",
        navy: {
          DEFAULT: "var(--navy)",
          light: "var(--navy-light)",
          soft: "var(--navy-soft)",
        },
        lavender: {
          1: "var(--lavender-1)",
          2: "var(--lavender-2)",
          deep: "var(--lavender-deep)",
        },
        graybg: "var(--gray-bg)",
        muted: "var(--text-gray)",
        border: "var(--border)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "var(--container)",
      },
      fontFamily: {
  sans: ["var(--font-body)", "system-ui", "sans-serif"],
  display: ["var(--font-display)", "system-ui", "sans-serif"],
  body: ["var(--font-body)", "system-ui", "sans-serif"],
},
      fontSize: {
        h1: ["60px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        h3: ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        h4: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        h5: ["20px", { lineHeight: "1.35", fontWeight: "600" }],
        h6: ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        body1: ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        body2: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        body3: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        quote: ["36px", { lineHeight: "1.35", fontWeight: "600" }],
        caption: ["18px", { lineHeight: "1.4", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};

export default config;
