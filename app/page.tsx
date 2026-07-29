import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import RotatingWord from "@/components/ui/RotatingWord";

export const metadata: Metadata = {
  title: "Thinkerface — Diseñamos experiencias que las personas viven, recuerdan y comparten",
  description:
    "Transformamos el Brand Storytelling en experiencias que conectan personas, emociones y negocios.",
};

// --- Contenido de placeholder tal cual el wireframe aprobado. -------------
// Vive acá porque hoy solo se usa en Home; si Servicios o Casos llegan a
// necesitar los mismos datos, esto se mueve a /data (ver punto 4 del
// documento de traspaso).

const beliefPills = [
  {
    label: "Mayor conexión emocional",
    icon: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    ),
  },
  {
    label: "Más diferenciación",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18" />
      </>
    ),
  },
  {
    label: "Más recordación",
    icon: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),
  },
  {
    label: "Más lealtad",
    icon: <path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11z" />,
  },
  {
    label: "Más recomendaciones",
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="6" r="2.5" />
        <circle cx="17" cy="18" r="2.5" />
        <circle cx="8" cy="16" r="3" />
        <path d="M10.5 9.5 15 6.5M10.5 14.5 15 17.5" />
      </>
    ),
  },
];

const services = [
  {
    title: "Brand Storytelling",
    description: "Construimos la narrativa estratégica que da sentido a la marca.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M4 19V5a2 2 0 0 1 2-2h10l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </svg>
    ),
  },
  {
    title: "Customer Experience Design",
    description: "Diseñamos relaciones memorables entre personas y marcas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    description: "Creamos productos digitales fáciles de entender, usar y recomendar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
  {
    title: "Service Design",
    description: "Diseñamos servicios completos, conectando todos los puntos de contacto.",
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
    description: "Escuchamos a las personas antes de diseñar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Estrategia de Contenidos",
    description: "Diseñamos contenidos que acompañan cada momento del recorrido.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
        <path d="M12 3v18M4 8h16M4 16h16" />
      </svg>
    ),
  },
];

const expertiseTags = ["UX/UI", "Customer Experience", "Service Design", "Plataformas Digitales", "Investigación"];

/**
 * Card local para las 3 etapas de metodología (THINK / INTERFACE /
 * EXPERIENCE). No vive en /components porque, a diferencia de Header,
 * Footer, Button y Card, todavía se usa en un solo lugar. Si Metodología
 * o Servicios necesitan la misma pieza, se extrae después.
 */
function MethodCard({ step, title, items }: { step: string; title: string; items: string[] }) {
  return (
    <div className="rounded-card border border-white/15 bg-white/[0.06] p-8">
      <span className="mb-3.5 block text-xs font-extrabold tracking-[0.14em] text-lavender-2">{step}</span>
      <h3 className="mb-3.5 text-h5 text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="relative pl-4 text-[14.5px] leading-[1.9] text-white/70">
            <span className="absolute left-0 top-[11px] h-[5px] w-[5px] rounded-full bg-lavender-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#FFF3FA] pb-[110px] pt-24">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,77,193,.35),transparent_70%)]" />

        <div className="relative z-10 mx-auto grid max-w-container gap-16 px-8 lg:px-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="mb-[18px] block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Brand storytelling · customer experience
            </span>
            <h1 className="mb-[22px] text-h1 text-navy">
              Diseñamos experiencias que las personas <RotatingWord />.
            </h1>
            <p className="mb-3.5 max-w-[520px] text-lg leading-relaxed text-navy-soft">
              Transformamos el Brand Storytelling en experiencias que conectan personas, emociones y negocios.
            </p>
            <p className="max-w-[520px] text-lg leading-relaxed text-navy-soft">
              Porque hoy las marcas ya no se diferencian únicamente por lo que dicen. Se diferencian por lo que hacen sentir.
            </p>
            <div className="mt-[34px] flex flex-wrap items-center gap-7">
              <Button href="/contacto" variant="primary">
                Hablemos
              </Button>
              <Button href="#metodologia" variant="text">
                Ver metodología
              </Button>
            </div>
          </div>

          <div className="relative h-[280px] lg:h-[420px]">
            {/* Antes era un blob orgánico de gradiente sin significado. Este
                diagrama de nodos conectados es el lenguaje gráfico real del
                manual (página "Brand System" · Linked Decision / Decision
                Flow): cada punto es una decisión, la línea es el camino que
                las conecta — literalmente Think → Interface → Experience. */}
            <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-gradient-to-br from-lavender-deep to-navy-soft shadow-[0_30px_60px_-20px_rgba(16,27,61,0.35)]">
              <svg viewBox="0 0 400 420" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
                <path
                  d="M60 350 C 110 270, 90 190, 175 155 S 300 125, 330 55"
                  stroke="#fff"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                  strokeDasharray="1 12"
                  strokeLinecap="round"
                />
                <path
                  d="M60 350 C 110 270, 90 190, 175 155 S 300 125, 330 55"
                  stroke="#fff"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="350" r="20" fill="#fff" fillOpacity="0.18" />
                <circle cx="60" cy="350" r="8" fill="#fff" />
                <circle cx="175" cy="155" r="20" fill="#fff" fillOpacity="0.18" />
                <circle cx="175" cy="155" r="8" fill="#fff" />
                <circle cx="330" cy="55" r="20" fill="#fff" fillOpacity="0.18" />
                <circle cx="330" cy="55" r="8" fill="#fff" />
              </svg>
              <span className="absolute left-[9%] bottom-[10%] text-[11px] font-bold uppercase tracking-[0.1em] text-white/80">
                Think
              </span>
              <span className="absolute left-[40%] top-[32%] text-[11px] font-bold uppercase tracking-[0.1em] text-white/80">
                Interface
              </span>
              <span className="absolute right-[7%] top-[6%] text-[11px] font-bold uppercase tracking-[0.1em] text-white/80">
                Experience
              </span>
            </div>
            <div className="absolute left-[4%] top-[10%] flex items-center gap-2.5 rounded-2xl bg-white px-[18px] py-3.5 text-[13px] font-semibold text-navy shadow-[0_20px_40px_-14px_rgba(16,27,61,0.25)] sm:left-[-6%]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-lavender-deep" />
              Think → Interface → Experience
            </div>
            <div className="absolute bottom-[10%] right-[4%] flex items-center gap-2.5 rounded-2xl bg-white px-[18px] py-3.5 text-[13px] font-semibold text-navy shadow-[0_20px_40px_-14px_rgba(16,27,61,0.25)] sm:right-[-8%]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-lavender-deep" />
              +23 años de experiencia
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 2 · CREENCIA ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="mx-auto mb-11 max-w-[760px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Por qué importa
            </span>
            <h2 className="mb-[18px] text-h2 text-navy">
              Hoy las marcas ya no compiten por productos. Compiten por experiencias.
            </h2>
            <p className="text-[17px] leading-relaxed text-muted">
              Los productos se parecen. Los precios se parecen. La tecnología se parece.
            </p>
            <p className="text-[17px] leading-relaxed text-muted">
              La verdadera diferencia está en cómo una marca acompaña, resuelve y conecta con las personas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {beliefPills.map((pill) => (
              <div key={pill.label} className="rounded-card border border-border bg-graybg px-4 py-[22px] text-center">
                <div className="mx-auto mb-3 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-lavender-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] text-navy-soft">
                    {pill.icon}
                  </svg>
                </div>
                <span className="text-[13.5px] font-semibold leading-snug text-navy">{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 3 · QUOTE ===================== */}
      <section className="bg-graybg py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="mb-5 text-h2 text-navy">
              Las personas no comparten publicidad. Comparten sus experiencias.
            </h2>
            <p className="mx-auto max-w-[560px] text-[17px] leading-relaxed text-muted">
              Las personas recuerdan cómo una marca las hizo sentir. Por eso creemos que una historia de marca no
              termina cuando se comunica. Comienza cuando alguien la vive.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 4 · SOMOS THINKERFACE ===================== */}
      <section className="py-24">
        <div className="mx-auto grid max-w-container gap-14 px-8 lg:px-20 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
          <div className="relative order-first h-[280px] overflow-hidden rounded-[24px] lg:order-none lg:h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/thinkerface-team/800/640"
              alt="Equipo de Thinkerface"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-deep/40 to-navy/30" />
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
            </div>
          </div>
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Quiénes somos
            </span>
            <h2 className="mb-[18px] text-h2 text-navy">
              Somos Thinkerface
            </h2>
            <p className="mb-5 text-body3 text-muted">
              Somos una consultora estratégica especializada en diseñar experiencias de cliente. Ayudamos a
              convertir las historias de marca en experiencias reales que las personas puedan vivir, sentir y
              compartir.
            </p>
            <p className="mb-7 text-body3 text-muted">
              Unimos estrategia, diseño, investigación y tecnología para construir relaciones más humanas entre las
              marcas y las personas.
            </p>
            <Button href="/somos" variant="secondary">
              Conoce más de nosotros
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 5-6 · METODOLOGÍA ===================== */}
      <section id="metodologia" className="bg-gradient-to-br from-navy to-navy-light py-24 text-white">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="mx-auto mb-14 max-w-[680px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-lavender-2">
              Nuestra metodología
            </span>
            <h2 className="mb-4 text-h2 text-navy">
              Todo comienza con una decisión.
            </h2>
            <p className="text-[17px] leading-relaxed text-white/65">THINK → INTERFACE → EXPERIENCE</p>
          </div>

          <div className="mb-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
            <MethodCard
              step="01 · THINK"
              title="Pensamos la marca"
              items={["Propósito", "Narrativa", "Posicionamiento", "Promesa"]}
            />
            <span className="hidden items-center justify-center text-2xl text-lavender-2 lg:flex">→</span>
            <MethodCard
              step="02 · INTERFACE"
              title="Diseñamos cada interacción"
              items={["Sitios web", "Apps", "Servicios", "Canales y conversaciones"]}
            />
            <span className="hidden items-center justify-center text-2xl text-lavender-2 lg:flex">→</span>
            <MethodCard
              step="03 · EXPERIENCE"
              title="Creamos experiencias memorables"
              items={[
                "Una buena experiencia se convierte en conversación",
                "Y una conversación hace crecer una marca",
              ]}
            />
          </div>

          <div className="mb-11 flex flex-wrap items-center justify-center gap-3.5">
            <span className="rounded-pill border border-white/15 bg-white/10 px-[22px] py-2.5 text-[13.5px] font-semibold text-white/85">
              Storytelling
            </span>
            <span className="text-base text-lavender-2">→</span>
            <span className="rounded-pill border border-white/15 bg-white/10 px-[22px] py-2.5 text-[13.5px] font-semibold text-white/85">
              Experiencia
            </span>
            <span className="text-base text-lavender-2">→</span>
            <span className="rounded-pill border border-white/15 bg-white/10 px-[22px] py-2.5 text-[13.5px] font-semibold text-white/85">
              Conversación
            </span>
          </div>

          <div className="text-center">
            <Button href="/metodologia" variant="primary" onDark>
              Conoce nuestra metodología
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 7 · SERVICIOS ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="mx-auto mb-14 max-w-[680px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Qué hacemos
            </span>
            <h2 className="text-h2 text-navy">
              Nuestros servicios
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/servicios" variant="secondary">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 8 · 23 AÑOS ===================== */}
      <section className="bg-graybg py-24">
        <div className="mx-auto grid max-w-container gap-14 px-8 lg:px-20 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
          <div>
            <div className="text-[48px] font-extrabold leading-none text-navy sm:text-[56px] lg:text-[72px]">
              23<span className="text-lavender-deep">+</span>
            </div>
            <p className="mt-3 max-w-[280px] text-base leading-relaxed text-muted">
              Años diseñando experiencias. Desde 2003 ayudamos a organizaciones de América Latina a construir
              relaciones más humanas entre las personas y sus marcas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {expertiseTags.map((tag) => (
              <span key={tag} className="rounded-pill border-[1.5px] border-navy px-[22px] py-2.5 text-sm font-semibold text-navy">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 9 + CTA FINAL ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="mx-auto mb-2 max-w-[680px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Lo que nos mueve
            </span>
            <h2 className="mb-4 text-h2 text-navy">
              Diseñamos experiencias que conectan
            </h2>
            <p className="text-[17px] leading-relaxed text-muted">
              Porque cada punto de contacto es una oportunidad para construir una relación.
            </p>
          </div>

          <div className="my-9 flex flex-wrap items-center justify-center gap-3.5">
            <span className="text-xl font-extrabold text-navy sm:text-2xl lg:text-[30px]">Emociones</span>
            <span className="text-xl font-normal text-lavender-deep sm:text-2xl lg:text-[30px]">·</span>
            <span className="text-xl font-extrabold text-navy sm:text-2xl lg:text-[30px]">Personas</span>
            <span className="text-xl font-normal text-lavender-deep sm:text-2xl lg:text-[30px]">·</span>
            <span className="text-xl font-extrabold text-navy sm:text-2xl lg:text-[30px]">Negocios</span>
            <span className="text-xl font-normal text-lavender-deep sm:text-2xl lg:text-[30px]">·</span>
            <span className="text-xl font-extrabold text-navy sm:text-2xl lg:text-[30px]">Historias</span>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,77,193,.35),transparent_70%)]" />
            <h2 className="relative z-10 mx-auto mb-4 max-w-[680px] text-h2 text-white">
              La mejor historia de una marca no es la que cuenta.{" "}
              <span className="text-lavender-2">Es la que las personas deciden vivir.</span>
            </h2>
            <p className="relative z-10 mx-auto mb-9 max-w-[480px] text-[16.5px] text-white/70">
              Hablemos sobre la próxima experiencia que tu marca puede crear.
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
