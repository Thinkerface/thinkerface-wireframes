import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// --- Contenido de placeholder tal cual el wireframe aprobado -------------
// El wireframe de esta página solo desarrolló un caso completo (Aura
// Bank) — las otras 5 tarjetas de /casos son teasers sin detalle propio
// todavía. Por eso solo "aura-bank" tiene datos completos acá; cualquier
// otro slug (vitalis-salud, nortem-retail...) devuelve 404 hasta que
// tengan su propio contenido. Cuando eso pase, esto se mueve a
// data/cases.ts para que /casos y esta página lean del mismo lugar.

const auraBankCase = {
  slug: "aura-bank",
  client: "Aura Bank",
  category: "Customer Experience · Banca digital",
  summary:
    "Cómo convertimos una experiencia bancaria fría y transaccional en una relación cercana que los clientes recuerdan y recomiendan.",
  facts: {
    cliente: "Aura Bank",
    industria: "Banca digital",
    servicios: "CX · UX/UI · Research",
    duracion: "8 meses",
  },
  reto: {
    title: "Una marca percibida como fría, lenta y desconectada",
    paragraphs: [
      "Aunque los productos financieros de Aura Bank eran competitivos, sus clientes digitales abandonaban la app en momentos clave: al solicitar productos, al resolver un problema o al buscar ayuda.",
      "Las entrevistas iniciales mostraron un patrón claro: las personas no dudaban de la seguridad del banco, dudaban de que alguien las estuviera escuchando. La marca hablaba de innovación, pero la experiencia se sentía igual que la de cualquier banco tradicional.",
    ],
  },
  experiencia: {
    title: "De la fricción a la confianza, paso a paso",
    items: [
      "Investigamos el comportamiento real de los usuarios en cada canal, digital y presencial.",
      "Mapeamos el customer journey completo e identificamos los momentos de mayor fricción.",
      "Rediseñamos la arquitectura de información y los flujos críticos de la app.",
      "Creamos un nuevo sistema de comunicación más cercano y humano para cada interacción.",
      "Capacitamos a los equipos de servicio para sostener la experiencia en el tiempo.",
    ],
  },
  impacto: [
    { value: "+38%", label: "NPS" },
    { value: "-45%", label: "Tiempo de resolución" },
    { value: "+22%", label: "Retención de clientes" },
    { value: "+30%", label: "Adopción de la app" },
  ],
  quote: {
    text: "La confianza no se construye con más funciones. Se construye con menos fricción y más humanidad en cada momento.",
    attribution: "Equipo de Experiencia, Aura Bank",
  },
};

// Casos relacionados: mismo teaser que ya se usa en /casos. Vive
// duplicado acá a propósito, igual que en el wireframe HTML original —
// centralizarlo en data/cases.ts queda para cuando se resuelva el punto
// anterior.
const relatedCases = [
  { slug: "vitalis-salud", client: "Vitalis Salud", industry: "Salud", description: "Rediseñamos el recorrido de pacientes para reducir la ansiedad antes de cada cita." },
  { slug: "nortem-retail", client: "Nortem Retail", industry: "Retail", description: "Conectamos la experiencia física y digital en más de 60 tiendas." },
  { slug: "confia-seguros", client: "Confía Seguros", industry: "Seguros", description: "Simplificamos el proceso de reclamos más temido por los usuarios." },
];

function getCase(slug: string) {
  return slug === auraBankCase.slug ? auraBankCase : undefined;
}

// Pre-renderiza el único caso con contenido real. Los demás slugs se
// siguen resolviendo en runtime (Next no bloquea dynamicParams) y caen
// en notFound() más abajo hasta que tengan datos.
export function generateStaticParams() {
  return [{ slug: auraBankCase.slug }];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseStudy = getCase(params.slug);
  if (!caseStudy) return { title: "Caso no encontrado — Thinkerface" };
  return {
    title: `${caseStudy.client} — Casos de éxito | Thinkerface`,
    description: caseStudy.summary,
  };
}

export default async function CasoDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCase(slug);
  if (!caseStudy) notFound();

  return (
    <>
      <Header />

      <div className="mx-auto max-w-container px-8 pt-5 text-[13.5px] text-muted">
        <Link href="/casos" className="font-semibold hover:text-navy">
          Casos
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="font-bold text-navy">{caseStudy.client}</span>
      </div>

      {/* ===================== CASE HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#EFEDFA] pb-14 pt-7">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-container px-8">
          <div className="max-w-[760px]">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              {caseStudy.category}
            </span>
            <h1 className="mb-4 text-[30px] font-extrabold leading-[1.2] tracking-tight text-navy sm:text-[38px] lg:text-[46px]">
              {caseStudy.client}
            </h1>
            <p className="mb-7 max-w-[600px] text-[17px] leading-relaxed text-navy-soft">{caseStudy.summary}</p>

            <div className="flex flex-wrap gap-9">
              <div>
                <span className="mb-1.5 block text-[11.5px] font-bold uppercase tracking-[0.08em] text-navy-soft">Cliente</span>
                <span className="text-[15px] font-bold text-navy">{caseStudy.facts.cliente}</span>
              </div>
              <div>
                <span className="mb-1.5 block text-[11.5px] font-bold uppercase tracking-[0.08em] text-navy-soft">Industria</span>
                <span className="text-[15px] font-bold text-navy">{caseStudy.facts.industria}</span>
              </div>
              <div>
                <span className="mb-1.5 block text-[11.5px] font-bold uppercase tracking-[0.08em] text-navy-soft">Servicios</span>
                <span className="text-[15px] font-bold text-navy">{caseStudy.facts.servicios}</span>
              </div>
              <div>
                <span className="mb-1.5 block text-[11.5px] font-bold uppercase tracking-[0.08em] text-navy-soft">Duración</span>
                <span className="text-[15px] font-bold text-navy">{caseStudy.facts.duracion}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-2 max-w-container px-8">
          <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-navy-soft to-navy lg:h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(143,134,217,.4),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,.12),transparent_50%)]" />
            <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/[0.14]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[30px] w-[30px]">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EL RETO ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-[760px] px-8">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">El reto</span>
          <h2 className="mb-5 text-[24px] font-extrabold leading-snug text-navy sm:text-[28px] lg:text-[32px]">
            {caseStudy.reto.title}
          </h2>
          {caseStudy.reto.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-3.5 text-[17px] leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ===================== LA EXPERIENCIA DISEÑADA ===================== */}
      <section className="bg-graybg py-24">
        <div className="mx-auto grid max-w-container gap-16 px-8 lg:grid-cols-2 lg:items-center">
          <div className="order-first h-[280px] rounded-[24px] bg-gradient-to-br from-lavender-1 to-lavender-deep lg:order-none lg:h-[360px]" />
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              La experiencia diseñada
            </span>
            <h2 className="mb-[18px] text-[24px] font-extrabold leading-snug text-navy sm:text-[28px] lg:text-[30px]">
              {caseStudy.experiencia.title}
            </h2>
            <ul>
              {caseStudy.experiencia.items.map((item, index) => (
                <li
                  key={item}
                  className={`relative py-3.5 pl-[30px] text-[15.5px] leading-relaxed text-navy-soft ${
                    index < caseStudy.experiencia.items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="absolute left-0 top-3.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-lavender-1 text-[11px] font-extrabold text-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== EL IMPACTO ===================== */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-24 text-white">
        <div className="mx-auto max-w-container px-8">
          <div className="mx-auto mb-12 max-w-[600px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-lavender-2">
              El impacto
            </span>
            <h2 className="text-[24px] font-extrabold sm:text-[28px] lg:text-[32px]">Resultados que se sintieron rápido</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {caseStudy.impacto.map((item) => (
              <div key={item.label}>
                <div className="text-[34px] font-extrabold sm:text-[40px] lg:text-[46px]">{item.value}</div>
                <div className="mt-2 text-sm text-white/65">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LO QUE APRENDIMOS ===================== */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-[760px] px-8">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Lo que aprendimos
          </span>
          <div className="mb-2 text-[64px] font-extrabold leading-none text-lavender-2">&ldquo;</div>
          <blockquote className="mb-[22px] text-[22px] font-extrabold leading-snug text-navy sm:text-[26px] lg:text-[30px]">
            {caseStudy.quote.text}
          </blockquote>
          <p className="text-[14.5px] font-semibold text-muted">{caseStudy.quote.attribution}</p>
        </div>
      </section>

      {/* ===================== GALERÍA ===================== */}
      <section className="bg-graybg py-24">
        <div className="mx-auto max-w-container px-8">
          <div className="mb-10 text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">Galería</span>
            <h2 className="text-[24px] font-extrabold text-navy sm:text-[28px] lg:text-[32px]">El proyecto en detalle</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { dark: false, icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 8h6M9 12h6" /></> },
              { dark: true, icon: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></> },
              { dark: true, icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></> },
              { dark: false, icon: <path d="M4 19V5a2 2 0 0 1 2-2h10l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /> },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex h-[260px] items-end overflow-hidden rounded-[18px] p-4 ${
                  item.dark ? "bg-gradient-to-br from-navy-soft to-navy" : "bg-gradient-to-br from-lavender-1 to-lavender-deep"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.3),transparent_45%)]" />
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.22]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    {item.icon}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MÁS CASOS ===================== */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-8">
          <div className="mb-10 text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">Más casos</span>
            <h2 className="text-[24px] font-extrabold text-navy sm:text-[28px] lg:text-[32px]">
              Otras experiencias que hemos diseñado
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedCases.map((related) => (
              <Card
                key={related.slug}
                href={`/casos/${related.slug}`}
                image={{ alt: `${related.client} — ${related.industry}` }}
                tag={related.industry}
                title={related.client}
                description={related.description}
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
              ¿Quieres resultados <span className="text-lavender-2">como estos?</span>
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
