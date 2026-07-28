import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Casos de éxito — Thinkerface",
  description:
    "El reto, la experiencia que diseñamos, el impacto que generó y lo que aprendimos en cada proyecto.",
};

// --- Contenido de placeholder tal cual el wireframe aprobado -------------
// Clientes ficticios (Aura Bank, Vitalis Salud, etc.) para probar el
// layout — reemplazar por casos reales en /data/cases.ts cuando existan
// (ver punto 4 del documento de traspaso). Los slugs ya apuntan a
// /casos/[slug], que es la próxima página a construir.

const filters = ["Todos", "Brand Storytelling", "Customer Experience", "UX/UI", "Service Design", "Investigación"];

const featured = {
  slug: "aura-bank",
  category: "Customer Experience · Banca",
  client: "Aura Bank",
  description:
    "Aura Bank necesitaba transformar una experiencia bancaria percibida como fría y transaccional en una relación cercana y memorable para sus clientes digitales.",
  impact: [
    { value: "+38%", label: "NPS" },
    { value: "-45%", label: "Tiempo de resolución" },
    { value: "+22%", label: "Retención" },
  ],
};

const cases = [
  {
    slug: "vitalis-salud",
    client: "Vitalis Salud",
    industry: "Salud",
    description: "Rediseñamos el recorrido de pacientes para reducir la ansiedad antes de cada cita.",
    impactValue: "+40%",
    impactLabel: "satisfacción de pacientes",
  },
  {
    slug: "nortem-retail",
    client: "Nortem Retail",
    industry: "Retail",
    description: "Conectamos la experiencia física y digital en más de 60 tiendas.",
    impactValue: "+18%",
    impactLabel: "ticket promedio",
  },
  {
    slug: "confia-seguros",
    client: "Confía Seguros",
    industry: "Seguros",
    description: "Simplificamos el proceso de reclamos más temido por los usuarios.",
    impactValue: "-55%",
    impactLabel: "tiempo de reclamo",
  },
  {
    slug: "andes-university",
    client: "Andes University",
    industry: "Educación",
    description: "Diseñamos la experiencia de bienvenida para nuevos estudiantes.",
    impactValue: "+30%",
    impactLabel: "engagement",
  },
  {
    slug: "lumina-tech",
    client: "Lúmina Tech",
    industry: "Tecnología",
    description: "Transformamos un producto B2B complejo en una experiencia intuitiva.",
    impactValue: "+25%",
    impactLabel: "adopción",
  },
];

export default function CasosPage() {
  return (
    <>
      <Header />

      {/* ===================== PAGE HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#EFEDFA] py-[88px] pb-16 text-center">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(143,134,217,.35),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[680px] px-8">
          <span className="mb-[18px] block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Nuestro trabajo
          </span>
          <h1 className="mb-4 text-[30px] font-extrabold leading-[1.2] tracking-tight text-navy sm:text-[38px] lg:text-[46px]">
            Casos de éxito
          </h1>
          <p className="mx-auto max-w-[540px] text-[17px] leading-relaxed text-navy-soft">
            El reto, la experiencia que diseñamos, el impacto que generó y lo que aprendimos en cada proyecto.
          </p>
        </div>
      </section>

      {/* ===================== FILTROS ===================== */}
      {/*
        Visual únicamente por ahora, igual que en el wireframe — "Todos"
        se ve activo pero no hay lógica de filtrado real todavía. Para
        que funcione de verdad este bloque necesita pasar a Client
        Component con estado (o leer/escribir un searchParam).
        top-[72px] es una aproximación a la altura del Header; ajustar
        si al integrar se ve un salto.
      */}
      <div className="sticky top-[72px] z-40 border-b border-border bg-white py-5">
        <div className="mx-auto flex max-w-container flex-wrap justify-center gap-2.5 px-8">
          {filters.map((filter, index) => (
            <span
              key={filter}
              className={
                index === 0
                  ? "rounded-pill bg-navy px-5 py-2 text-[13.5px] font-semibold text-white"
                  : "rounded-pill border border-border bg-graybg px-5 py-2 text-[13.5px] font-semibold text-navy-soft"
              }
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      {/* ===================== CASO DESTACADO + GRID ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8">
          <Link
            href={`/casos/${featured.slug}`}
            className="group mb-16 grid overflow-hidden rounded-[24px] border border-border bg-white transition-shadow duration-200 hover:shadow-[0_30px_60px_-30px_rgba(16,27,61,0.22)] lg:grid-cols-[1.1fr_1fr]"
          >
            <div className="relative min-h-[220px] bg-gradient-to-br from-lavender-deep to-navy-soft lg:min-h-[340px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.3),transparent_45%)]" />
              <span className="absolute left-6 top-6 z-10 rounded-pill bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy">
                Caso destacado
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-11">
              <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
                {featured.category}
              </span>
              <h3 className="mb-3.5 text-2xl font-extrabold text-navy">{featured.client}</h3>
              <p className="mb-6 text-[15.5px] leading-relaxed text-muted">{featured.description}</p>

              <div className="mb-7 flex flex-wrap gap-7">
                {featured.impact.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-extrabold text-navy">{item.value}</div>
                    <div className="mt-0.5 text-xs font-semibold text-muted">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Texto, no <Button href>: ya estamos dentro de un <Link> y anidar
                  anchors rompe el HTML. Mismo criterio para las cards del grid. */}
              <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy">
                Ver caso completo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <Card
                key={item.slug}
                href={`/casos/${item.slug}`}
                image={{ alt: `${item.client} — ${item.industry}` }}
                tag={item.industry}
                title={item.client}
                description={item.description}
                footer={
                  <>
                    <div className="mb-4 flex items-baseline gap-1.5">
                      <span className="text-[19px] font-extrabold text-lavender-deep">{item.impactValue}</span>
                      <span className="text-[12.5px] font-semibold text-muted">{item.impactLabel}</span>
                    </div>
                    <div className="flex justify-end">
                      <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-navy">
                        Ver caso
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-3.5 w-3.5">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="pb-24">
        <div className="mx-auto max-w-container px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(143,134,217,.35),transparent_70%)]" />
            <h2 className="relative z-10 mx-auto mb-4 max-w-[680px] text-[26px] font-extrabold leading-snug text-white sm:text-[32px] lg:text-[40px]">
              ¿Quieres ser el próximo <span className="text-lavender-2">caso de éxito?</span>
            </h2>
            <p className="relative z-10 mx-auto mb-9 max-w-[480px] text-[16.5px] text-white/70">
              Cuéntanos qué experiencia quieres crear y empecemos a diseñarla juntos.
            </p>
            <div className="relative z-10">
              <Button href="/contacto" variant="primary" onDark>
                Comenzar un proyecto
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
