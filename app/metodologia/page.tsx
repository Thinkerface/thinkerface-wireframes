import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Metodología — THINK, INTERFACE, EXPERIENCE | Thinkerface",
  description:
    "Tres etapas que conectan la estrategia de marca con la experiencia que las personas realmente viven.",
};

// --- Contenido de placeholder tal cual el wireframe aprobado -------------

const stages = [
  {
    num: "01",
    label: "THINK",
    title: "Comprender la marca",
    tagline: "Pensamos antes de diseñar",
    description:
      "Entendemos su propósito, su negocio, su narrativa y el lugar que ocupa frente a las personas. Sin esta base, cualquier interfaz o experiencia se construye sobre supuestos, no sobre estrategia.",
    tags: ["Propósito", "Negocio", "Narrativa", "Posicionamiento"],
    icon: (
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    ),
    dark: false,
    reverse: false,
    bg: "",
  },
  {
    num: "02",
    label: "INTERFACE",
    title: "Comprender a las personas",
    tagline: "Diseñamos cada interacción",
    description:
      "Investigamos el comportamiento real de las personas, mapeamos su recorrido y diseñamos cada punto de contacto — digital o humano — con intención, para que cada interacción sume a la relación.",
    tags: ["Investigación", "Customer Journey", "UX", "CX", "Service Design"],
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
    dark: true,
    reverse: true,
    bg: "bg-graybg",
  },
  {
    num: "03",
    label: "EXPERIENCE",
    title: "Diseñar la experiencia",
    tagline: "Creamos momentos memorables",
    description:
      "Damos forma a los productos, servicios, canales y contenidos que las personas van a vivir. Porque una buena experiencia se convierte en conversación, y una conversación hace crecer una marca.",
    tags: ["Productos", "Servicios", "Canales", "Contenidos", "Interacciones"],
    icon: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />,
    dark: false,
    reverse: false,
    bg: "",
  },
];

/**
 * Bloque de etapa (visual + copy alternados). No es la misma pieza que
 * `Card`: acá el layout es de dos columnas con tags sueltos, no una
 * tarjeta con borde — por eso vive local en vez de forzarlo dentro de
 * Card. Si Servicios necesita algo parecido, se evalúa extraerlo.
 */
function Stage({
  num,
  label,
  title,
  tagline,
  description,
  tags,
  icon,
  dark,
  reverse,
  bg,
}: {
  num: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  dark: boolean;
  reverse: boolean;
  bg: string;
}) {
  return (
    <section className={bg}>
      <div className="mx-auto grid max-w-container gap-14 px-8 py-24 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
        <div
          className={`relative order-first h-[240px] overflow-hidden rounded-[24px] lg:h-[380px] ${
            dark ? "bg-gradient-to-br from-navy-soft to-navy" : "bg-gradient-to-br from-lavender-1 to-lavender-deep"
          } ${reverse ? "lg:order-2" : "lg:order-none"}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.35),transparent_45%)]" />
          <span
            className={`absolute -bottom-3 right-4 text-[90px] font-extrabold leading-none sm:text-[140px] ${
              dark ? "text-white/[0.18]" : "text-white/30"
            }`}
          >
            {num}
          </span>
          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              {icon}
            </svg>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <span className="mb-[18px] inline-block rounded-pill bg-lavender-1 px-4 py-1.5 text-[13px] font-extrabold tracking-[0.14em] text-lavender-deep">
            {num} · {label}
          </span>
          <h2 className="mb-2 text-[26px] font-extrabold leading-snug text-navy sm:text-[30px] lg:text-[34px]">
            {title}
          </h2>
          <span className="mb-[18px] block text-[15px] font-bold uppercase tracking-[0.06em] text-navy-soft">
            {tagline}
          </span>
          <p className="mb-6 text-[16.5px] leading-relaxed text-muted">{description}</p>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill border border-border bg-graybg px-[18px] py-2 text-[13.5px] font-semibold text-navy"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Conector vertical entre etapas — solo decorativo, sin contenido. */
function Connector() {
  return (
    <div className="mx-auto flex max-w-container flex-col items-center gap-1.5 px-8 py-2" aria-hidden="true">
      <span className="h-9 w-[1.5px] bg-border" />
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-lavender-deep text-base font-bold text-lavender-deep">
        ↓
      </span>
      <span className="h-9 w-[1.5px] bg-border" />
    </div>
  );
}

export default function MetodologiaPage() {
  return (
    <>
      <Header />

      {/* ===================== PAGE HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#EFEDFA] py-[88px] text-center">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(143,134,217,.35),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[720px] px-8">
          <span className="mb-[18px] block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Nuestra metodología
          </span>
          <h1 className="mb-[22px] text-[30px] font-extrabold leading-[1.2] tracking-tight text-navy sm:text-[38px] lg:text-[46px]">
            Todo comienza con una decisión.
          </h1>
          <p className="mx-auto mb-8 max-w-[560px] text-[17px] leading-relaxed text-navy-soft">
            Tres etapas que conectan la estrategia de marca con la experiencia que las personas realmente viven.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
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
        </div>
      </section>

      {/* ===================== ETAPAS ===================== */}
      <Stage {...stages[0]} />
      <Connector />
      <Stage {...stages[1]} />
      <Connector />
      <Stage {...stages[2]} />

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-navy-light px-8 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(143,134,217,.35),transparent_70%)]" />
            <h2 className="relative z-10 mx-auto mb-4 max-w-[680px] text-[26px] font-extrabold leading-snug text-white sm:text-[32px] lg:text-[40px]">
              Así se ve nuestra metodología{" "}
              <span className="text-lavender-2">aplicada a un proyecto real.</span>
            </h2>
            <p className="relative z-10 mx-auto mb-9 max-w-[480px] text-[16.5px] text-white/70">
              Descubre los servicios que activan cada etapa, o revisa los casos donde ya la hemos puesto en
              práctica.
            </p>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/servicios" variant="primary" onDark>
                Ver servicios
              </Button>
              <Button href="/casos" variant="secondary" onDark>
                Ver casos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
