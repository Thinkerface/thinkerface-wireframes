import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Somos Thinkerface — Diseñamos relaciones, no solo interfaces",
  description:
    "Somos una consultora estratégica especializada en diseñar experiencias de cliente. Conoce nuestra historia, nuestro manifiesto y nuestros principios.",
};

// --- Contenido de placeholder tal cual el wireframe aprobado -------------

const manifestoLines = [
  { plain: "No creemos en marcas que hablan. ", strong: "Creemos en marcas que se viven." },
  { plain: "No diseñamos mensajes. ", strong: "Diseñamos momentos." },
  {
    plain: "No buscamos ser recordados por lo que decimos. ",
    strong: "Buscamos ser recordados por lo que hacemos sentir.",
  },
  { plain: "Una marca no es una promesa repetida. ", strong: "Es una experiencia sostenida en el tiempo." },
];

const beliefs: { negate?: string; affirm: string }[] = [
  {
    negate: "Las personas no construyen relaciones con logos.",
    affirm: "Construyen relaciones con experiencias.",
  },
  { negate: "Las mejores historias no se cuentan.", affirm: "Se viven." },
  { affirm: "Cada interacción importa." },
  { negate: "No diseñamos para personas.", affirm: "Diseñamos con personas." },
];

const principles = [
  {
    title: "Colaborativos",
    description: "Diseñamos junto a nuestros clientes, no para ellos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15 14.5c2.8.3 5 2.2 5 5.5" />
      </svg>
    ),
  },
  {
    title: "Conectados",
    description: "Unimos estrategia, diseño e investigación en un mismo proceso.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.2 8.2 15.8 15.8" />
      </svg>
    ),
  },
  {
    title: "Transformadores",
    description: "Buscamos el cambio real, no solo la entrega de un proyecto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    title: "Activos",
    description: "Nos involucramos en cada etapa, sin esperar instrucciones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2" />
      </svg>
    ),
  },
];

/**
 * Card local para el patrón "no X. Y." (negación + afirmación). Aparece
 * acá y volverá a aparecer en Servicios con el mismo estilo — es
 * candidata a moverse a components/ui/ContrastCard.tsx cuando lleguemos
 * a esa página, para no mantener dos copias del mismo patrón.
 */
function ContrastCard({ negate, affirm }: { negate?: string; affirm: string }) {
  return (
    <div className="rounded-r-card border-l-4 border-lavender-deep bg-graybg px-8 py-[30px]">
      {negate && (
        <span className="mb-2.5 block text-[15px] text-muted line-through decoration-lavender-deep">{negate}</span>
      )}
      <span className={`block font-extrabold leading-snug text-navy ${negate ? "text-[21px]" : "text-[19px]"}`}>
        {affirm}
      </span>
    </div>
  );
}

export default function SomosPage() {
  return (
    <>
      <Header />

      {/* ===================== PAGE HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#EFEDFA] py-[88px]">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(143,134,217,.35),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[760px] px-8">
          <span className="mb-[18px] block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Quiénes somos
          </span>
          <h1 className="mb-5 text-[30px] font-extrabold leading-[1.2] tracking-tight text-navy sm:text-[38px] lg:text-[46px]">
            Somos una consultora creada para diseñar las experiencias que definen el futuro de las marcas.
          </h1>
          <p className="max-w-[600px] text-lg font-bold leading-relaxed text-navy">No diseñamos únicamente interfaces.</p>
          <p className="max-w-[600px] text-lg leading-relaxed text-navy-soft">Diseñamos relaciones.</p>
        </div>
      </section>

      {/* ===================== NUESTRA HISTORIA ===================== */}
      <section className="py-24">
        <div className="mx-auto grid max-w-container gap-14 px-8 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
          <div className="relative order-first h-[280px] overflow-hidden rounded-[24px] bg-gradient-to-br from-navy-soft to-navy lg:order-none lg:h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.35),transparent_45%)]" />
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" />
                <path d="M12 12 3 7M12 12v10M12 12l9-5" />
              </svg>
            </div>
          </div>
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Nuestra historia
            </span>
            <h2 className="mb-[18px] text-[26px] font-extrabold leading-snug text-navy sm:text-[30px] lg:text-[34px]">
              El origen de THINK + INTERFACE
            </h2>
            <p className="mb-[18px] text-[16.5px] leading-relaxed text-muted">
              Thinkerface nace en 2003 de la unión de dos formas de pensar: THINK, la disciplina de entender
              profundamente una marca — su propósito, su negocio, su narrativa — e INTERFACE, la disciplina de
              diseñar cada punto en el que esa marca se encuentra con una persona.
            </p>
            <p className="text-[16.5px] leading-relaxed text-muted">
              Durante más de 20 años hemos evolucionado junto con la forma en que las personas viven las marcas: de
              las interfaces digitales a las experiencias completas. Hoy seguimos creyendo lo mismo que el primer
              día: pensar profundo y diseñar con cuidado es la única forma de construir relaciones que duran.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== NUESTRO MANIFIESTO ===================== */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-24 text-center text-white">
        <div className="mx-auto max-w-container px-8">
          <span className="mb-7 block text-xs font-bold uppercase tracking-[0.12em] text-lavender-2">
            Nuestro manifiesto
          </span>
          <div className="mx-auto max-w-[820px]">
            {manifestoLines.map((line) => (
              <p key={line.strong} className="mb-5 text-xl font-bold leading-[1.55] text-white/40 sm:text-2xl lg:text-[30px]">
                {line.plain}
                <strong className="font-extrabold text-white">{line.strong}</strong>
              </p>
            ))}
            <p className="mt-9 text-xl font-bold leading-[1.55] text-lavender-2 sm:text-2xl lg:text-[30px]">
              Esto es lo que creemos. Esto es Thinkerface.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== EN QUÉ CREEMOS ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8">
          <div className="mx-auto mb-14 max-w-[680px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              En qué creemos
            </span>
            <h2 className="text-[26px] font-extrabold text-navy sm:text-[32px] lg:text-[36px]">
              Los principios detrás de cada decisión
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <ContrastCard key={belief.affirm} negate={belief.negate} affirm={belief.affirm} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NUESTROS PRINCIPIOS ===================== */}
      <section className="bg-graybg py-24">
        <div className="mx-auto max-w-container px-8">
          <div className="mx-auto mb-14 max-w-[680px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Cómo trabajamos
            </span>
            <h2 className="text-[26px] font-extrabold text-navy sm:text-[32px] lg:text-[36px]">
              Nuestros principios
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <Card
                key={principle.title}
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
                centered
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(143,134,217,.35),transparent_70%)]" />
            <h2 className="relative z-10 mx-auto mb-4 max-w-[680px] text-[26px] font-extrabold leading-snug text-white sm:text-[32px] lg:text-[40px]">
              Así pensamos. <span className="text-lavender-2">Así diseñamos.</span>
            </h2>
            <p className="relative z-10 mx-auto mb-9 max-w-[480px] text-[16.5px] text-white/70">
              Conoce cómo convertimos esta forma de pensar en un proceso: Think, Interface, Experience.
            </p>
            <div className="relative z-10">
              <Button href="/metodologia" variant="primary" onDark>
                Ver nuestra metodología
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
