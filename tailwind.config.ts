import type { Config } from "tailwindcss";

// Extiende Tailwind apuntando a las variables CSS de app/globals.css,
// en vez de repetir los valores hex acá. Así CSS plano y clases de
// Tailwind quedan sincronizados desde una sola fuente de verdad.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
