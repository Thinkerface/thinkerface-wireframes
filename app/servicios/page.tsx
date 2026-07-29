import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Servicios — Thinkerface",
  description: "Cada servicio explicado desde la experiencia, no desde la disciplina.",
};

// --- Contenido de placeholder tal cual el wireframe aprobado -------------

const services = [
  {
    title: "Brand Storytelling",
    negate: "No escribimos historias.",
    affirm: "Diseñamos experiencias que las personas quieran contar.",
    includes: ["Narrativa de marca", "Voz y tono", "Mensajes clave"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M4 19V5a2 2 0 0 1 2-2h10l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </svg>
    ),
  },
  {
    title: "Customer Experience Design",
    negate: "No diseñamos recorridos.",
    affirm: "Diseñamos relaciones.",
    includes: ["Journey mapping", "Puntos de contacto", "Momentos de verdad"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    negate: "No diseñamos pantallas.",
    affirm: "Diseñamos decisiones.",
    includes: ["Research", "Prototipado", "Design system"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
  {
    title: "Service Design",
    negate: undefined,
    affirm: "Conectamos cada interacción para construir una experiencia coherente.",
    includes: ["Blueprint de servicio", "Procesos internos", "Equipos y roles"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M7.6 7.6 10.4 16M16.4 7.6 13.6 16M8.2 6h7.6" />
      </svg>
    ),
  },
  {
    title: "User Research",
    negate: undefined,
    affirm: "Escuchamos a las personas antes de diseñar.",
    includes: ["Entrevistas", "Testing con usuarios", "Insights"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Estrategia de Contenidos",
    negate: undefined,
    affirm: "Transformamos cada canal en una oportunidad para conectar.",
    includes: ["Calendario editorial", "Canales digitales", "Storytelling continuo"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M12 3v18M4 8h16M4 16h16" />
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />

      {/* ===================== PAGE HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#FFF3FA] py-[88px] text-center">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,77,193,.35),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[680px] px-8">
          <span className="mb-[18px] block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Qué hacemos
          </span>
          <h1 className="mb-4 text-h1 text-navy">
            Nuestros servicios
          </h1>
          <p className="mx-auto max-w-[540px] text-body2 text-navy-soft">
            Cada servicio explicado desde <strong className="text-navy">la experiencia</strong>, no desde la
            disciplina.
          </p>
        </div>
      </section>

      {/* ===================== GRID DE SERVICIOS ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                contrast={{ negate: service.negate, affirm: service.affirm }}
                icon={service.icon}
                footer={
                  <>
                    <hr className="mb-[18px] border-border" />
                    <span className="mb-3 block text-[11.5px] font-bold uppercase tracking-[0.08em] text-muted">
                      Incluye
                    </span>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {service.includes.map((item) => (
                        <span
                          key={item}
                          className="rounded-pill border border-border bg-graybg px-3 py-1.5 text-[13px] font-semibold text-navy-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <Button href="/casos" variant="text">
                        Ver caso relacionado
                      </Button>
                    </div>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BANDA METODOLOGÍA ===================== */}
      <section className="bg-graybg py-24 text-center">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Cómo se activan
          </span>
          <h2 className="mb-[30px] text-h2 text-navy">
            Todos nuestros servicios viven dentro de una misma metodología
          </h2>
          <div className="mb-7 flex flex-wrap items-center justify-center gap-3.5">
            <span className="rounded-pill border-[1.5px] border-navy bg-white px-[26px] py-3 text-sm font-bold text-navy">
              THINK
            </span>
            <span className="text-lg font-bold text-lavender-deep">→</span>
            <span className="rounded-pill border-[1.5px] border-navy bg-white px-[26px] py-3 text-sm font-bold text-navy">
              INTERFACE
            </span>
            <span className="text-lg font-bold text-lavender-deep">→</span>
            <span className="rounded-pill border-[1.5px] border-navy bg-white px-[26px] py-3 text-sm font-bold text-navy">
              EXPERIENCE
            </span>
          </div>
          <Button href="/metodologia" variant="text" className="justify-center">
            Ver cómo funciona
          </Button>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,77,193,.35),transparent_70%)]" />
            <h2 className="relative z-10 mx-auto mb-4 max-w-[680px] text-h2 text-white">
              ¿Aún no sabes qué servicio necesitas?{" "}
              <span className="text-lavender-2">Empecemos por conversarlo.</span>
            </h2>
            <p className="relative z-10 mx-auto mb-9 max-w-[480px] text-[16.5px] text-white/70">
              Cuéntanos qué experiencia quieres crear y te ayudamos a encontrar el punto de partida correcto.
            </p>
            <div className="relative z-10">
              <Button href="/contacto" variant="primary" onDark>
                Hablemos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
