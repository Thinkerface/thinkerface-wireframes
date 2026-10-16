import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Thinkerface — Diseño que conecta",
  description:
    "Agencia de diseño de interacción que combina estrategia, storytelling, UX, data, tecnología e inteligencia artificial para conectar personas, marcas y negocios.",
};

// --- Contenido según "Thinkerface Website – Arquitectura de Información" ---

const heroWords = ["People", "Emotions", "Stories", "Brands", "Business", "Results"];

const services = [
  {
    num: "01",
    title: "Consultoría",
    description:
      "Asesoramos a las marcas y empresas en el diseño de experiencias de usuario (UX) que conectan su estrategia de marca y Brand Storytelling con las necesidades y expectativas de las personas.",
  },
  {
    num: "02",
    title: "Diseño UX",
    description:
      "Diseñamos productos, plataformas e interfaces digitales intuitivas, funcionales y memorables que conectan las necesidades de las personas con los objetivos del negocio.",
  },
  {
    num: "03",
    title: "Customer Experience Design",
    description:
      "Entendemos que cada interacción cuenta, y que la verdadera conexión sucede cuando el storytelling de una marca se vive en todos sus puntos de contacto y se construye coherencia entre lo que se dice y lo que se vive.",
  },
  {
    num: "04",
    title: "User Research",
    description:
      "Primero las personas. Investigamos para entender qué piensan, sienten, necesitan y hacen, así identificamos insights que nos permiten tomar mejores decisiones de diseño para crear soluciones más humanas que construyen valor para los negocios.",
  },
];

const clients = [
  "HubSpot",
  "Sodimac Media",
  "Virgin Mobile",
  "Brigard Urrutia",
  "Hoy",
  "Adobe",
  "Acción",
  "The O",
  "11 22",
  "Bamboo Rocks",
];

const stats = [
  { value: "23+", title: "Años de experiencia", text: "Diseñando experiencias que conectan personas y marcas." },
  { value: "5", title: "Países", text: "Con experiencia en proyectos de diseño UX." },
  { value: "UX + CX", title: "Experiencias integradas", text: "Conectamos el mundo físico y digital." },
  { value: "Data", title: "Diseño medible", text: "Optimizamos experiencias para generar resultados." },
  { value: "5", title: "Especialidades", text: "Nuestra red de Marketing + Storytelling." },
];

const wrap = "mx-auto max-w-container px-8 lg:px-20";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#FFF3FA] py-24">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,77,193,.35),transparent_70%)]" />

        <div className={`relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${wrap}`}>
          <div>
            <h1 className="mb-6 text-h1 text-navy">Diseño que conecta</h1>
            <p className="mb-9 text-h5 text-navy-soft">
              {heroWords.map((word) => (
                <span key={word} className="mr-2 inline-block">
                  {word}
                  <span className="text-primary">.</span>
                </span>
              ))}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#contacto" variant="primary">
                Hablemos
              </Button>
              <Button href="#metodologia" variant="secondary">
                Conoce nuestra metodología
              </Button>
            </div>
          </div>

          {/* Nodos conectados: el lenguaje gráfico "Decision Flow" del manual */}
          <div className="relative h-[280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-primary to-navy-soft shadow-[0_30px_60px_-20px_rgba(16,27,61,0.35)] lg:h-[400px]">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
              <path d="M60 340 C 110 260, 90 190, 175 155 S 300 125, 335 55" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="1 12" strokeLinecap="round" />
              <path d="M60 340 C 110 260, 90 190, 175 155 S 300 125, 335 55" stroke="#fff" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" />
              {[[60, 340], [175, 155], [335, 55]].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="20" fill="#fff" fillOpacity="0.18" />
                  <circle cx={cx} cy={cy} r="8" fill="#fff" />
                </g>
              ))}
            </svg>
            <span className="absolute bottom-[8%] left-[9%] text-[11px] font-bold uppercase tracking-[0.1em] text-white/85">People</span>
            <span className="absolute left-[40%] top-[30%] text-[11px] font-bold uppercase tracking-[0.1em] text-white/85">Brands</span>
            <span className="absolute right-[7%] top-[6%] text-[11px] font-bold uppercase tracking-[0.1em] text-white/85">Results</span>
          </div>
        </div>
      </section>

      {/* ============ BLOQUE 2 — PROPUESTA ============ */}
      <section className="py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
          <p className="text-h4 text-navy">
            We design user experiences where every interaction becomes an opportunity to connect people with brands,
            stories with emotions, and design with business growth.
          </p>
          <div>
            <p className="mb-8 text-body1 text-muted">
              Diseñamos experiencias de usuario donde cada interacción se convierte en una oportunidad para conectar
              personas con marcas, historias con emociones y diseño con crecimiento del negocio.
            </p>
            <Button href="#contacto" variant="primary">
              Let&apos;s Build Better Interactions
            </Button>
          </div>
        </div>
      </section>

      {/* ============ BLOQUE 3 — VIDEO DE MARCA ============ */}
      <section aria-label="Video de marca" className="pb-24">
        <div className={wrap}>
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[28px] bg-navy">
            {/* Placeholder: reemplazar por el video de marca (iframe/<video>) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/thinkerface-video/1600/900"
              alt="Video de marca Thinkerface (espacio reservado)"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-navy/40" />
            <button
              type="button"
              aria-label="Reproducir video de marca"
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============ FRASE: EVERYTHING STARTS WITH A CHOICE ============ */}
      <section className="overflow-hidden bg-navy py-24 text-center">
        <p className="mx-auto max-w-[1200px] px-8 font-display text-[clamp(44px,9vw,128px)] font-bold uppercase leading-[0.95] tracking-tight text-white">
          Everything starts with a <span className="text-primary">choice</span>
        </p>
      </section>

      {/* ============ BLOQUE 4 — SOMOS + SERVICIOS ============ */}
      <section id="somos" className="py-24">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">Somos Thinkerface</span>
            <h2 className="mb-6 text-h3 text-navy">Agencia de diseño de interacción</h2>
            <p className="text-body2 text-muted">
              Somos una agencia de Diseño de interacción que combina estrategia, storytelling, UX, data, tecnología e
              inteligencia artificial para transformar cada punto de contacto en una oportunidad para conectar
              personas, marcas y negocios.
            </p>
          </div>

          <div id="servicios">
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">Lo que hacemos</span>
            <ol className="divide-y divide-border border-y border-border">
              {services.map((service) => (
                <li key={service.num} className="grid gap-4 py-9 sm:grid-cols-[72px_1fr]">
                  <span className="font-display text-h4 text-primary">{service.num}</span>
                  <div>
                    <h3 className="mb-3 text-h4 uppercase text-navy">{service.title}</h3>
                    <p className="text-body3 text-muted">{service.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ BLOQUE 5 — CASOS ============ */}
      <section id="casos" className="bg-graybg py-24">
        <div className={wrap}>
          <div className="mb-14 max-w-[720px]">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">Casos con clientes</span>
            <h2 className="text-h2 text-navy">Buenas experiencias</h2>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {clients.map((client) => (
              <li key={client} className="group relative aspect-[4/5] overflow-hidden rounded-card bg-navy">
                {/* Imagen de referencia — reemplazar por la del caso real */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${client.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/480/600`}
                  alt={`Caso ${client}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 font-display text-h6 text-white">{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ SECCIÓN 6 — CIFRAS ============ */}
      <section className="py-24">
        <div className={wrap}>
          <h2 className="mb-14 text-h2 text-navy">Nuestras cifras</h2>
          <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.title} className="border-t-2 border-primary pt-5">
                <dt className="mb-3 font-display text-h3 text-navy">{stat.value}</dt>
                <dd>
                  <span className="mb-1.5 block text-h6 text-navy">{stat.title}</span>
                  <span className="text-body3 text-muted">{stat.text}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ BLOQUE 7 — METODOLOGÍA ============ */}
      <section id="metodologia" className="bg-navy py-24 text-white">
        <div className={wrap}>
          <h2 className="mb-14 max-w-[900px] text-h2 text-white">
            Nuestra metodología <span className="text-primary">THINK + INTERFACE</span> nos permite pasar del Brand
            Storytelling al Customer Experience.
          </h2>
          <div className="mb-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-card border border-white/15 bg-white/5 p-9">
              <span className="mb-4 block font-display text-h4 text-primary">THINK</span>
              <p className="text-body2 text-white/80">Para entender la marca, su propósito y su historia.</p>
            </div>
            <div className="rounded-card border border-white/15 bg-white/5 p-9">
              <span className="mb-4 block font-display text-h4 text-primary">INTERFACE</span>
              <p className="text-body2 text-white/80">
                Para entender cómo las personas interactúan y sus puntos de contacto donde toman decisiones.
              </p>
            </div>
          </div>
          <p className="max-w-[820px] text-body1 text-white/70">
            Porque cada punto de contacto es una oportunidad para conectar personas, emociones, historias y negocios,
            creando mejores experiencias y mejores resultados.
          </p>
        </div>
      </section>

      {/* ============ BLOQUE 8 — LOGOS ============ */}
      <section aria-label="Marcas con las que trabajamos" className="py-24">
        <div className={wrap}>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <li
                key={client}
                className="flex h-24 items-center justify-center rounded-card border border-border bg-graybg px-4 text-center font-display text-h6 text-navy-soft"
              >
                {/* Placeholder: reemplazar por el logo SVG de cada cliente */}
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ SECCIÓN 9 — FORMULARIO ============ */}
      <section id="contacto" className="bg-graybg py-24">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20`}>
          <div>
            <h2 className="mb-5 text-h2 text-navy">Todo comienza con una decisión.</h2>
            <p className="text-body1 text-muted">Cuéntanos qué experiencia quieres crear.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
