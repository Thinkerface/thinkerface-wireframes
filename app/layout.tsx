import type { Metadata } from "next";
import "./globals.css";

// Nota: las tipografías de marca (Space Grotesk / Hanken Grotesk) ya se
// cargan vía @import en globals.css. Las fuentes Geist del boilerplate
// de create-next-app no se usaban en ningún componente (body/h1-h4 ya
// fuerzan var(--font-body) / var(--font-display) directamente) — se
// sacan para no descargar fuentes de más.

export const metadata: Metadata = {
  title: "Thinkerface — Todo comienza con una decisión",
  description:
    "Consultora estratégica especializada en diseñar experiencias de cliente. Conectamos THINK, INTERFACE y EXPERIENCE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
