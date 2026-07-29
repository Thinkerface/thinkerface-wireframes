import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Thinkerface",
  description: "Todo comienza con una decisión. Cuéntanos qué experiencia quieres crear.",
};

// --- Contenido de placeholder tal cual el wireframe aprobado -------------

const infoItems = [
  {
    label: "Escríbenos",
    value: "hola@hellothinkerface.com",
    href: "mailto:hola@hellothinkerface.com",
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 4l8 8 8-8" />
      </>
    ),
  },
  {
    label: "Llámanos",
    value: "+57 1 234 5678",
    href: "tel:+5712345678",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
    ),
  },
  {
    label: "Visítanos",
    value: "Bogotá, Colombia",
    href: undefined,
    icon: (
      <>
        <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
];

// Mismos íconos que usa el Footer, en versión clara — tercera vez que se
// repite este set de SVG (Footer, acá). Candidato a un componente
// SocialLinks compartido si aparece una cuarta vez.
const socialLinks = [
  { label: "LinkedIn", rect: true, path: "M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3" },
  { label: "Instagram", circle: true, path: "M17.5 6.5h.01" },
  { label: "X", path: "M4 4l16 16M20 4 4 20" },
];

const processSteps = [
  {
    step: "1",
    title: "Recibimos tu mensaje",
    description: "Leemos con calma cada mensaje que llega, sin respuestas automáticas genéricas.",
  },
  {
    step: "2",
    title: "Conversamos sobre tu reto",
    description: "Agendamos una llamada breve para entender qué experiencia quieres crear.",
  },
  {
    step: "3",
    title: "Diseñamos la propuesta",
    description: "Te compartimos un enfoque claro: alcance, metodología y próximos pasos.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Header />

      {/* ===================== PAGE HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-1 via-lavender-2 to-[#FFF3FA] py-[88px] text-center">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,77,193,.35),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[640px] px-8">
          <span className="mb-[18px] block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
            Contacto
          </span>
          <h1 className="mb-4 text-h1 text-navy">
            Todo comienza con una decisión.
          </h1>
          <p className="text-body2 text-navy-soft">Cuéntanos qué experiencia quieres crear.</p>
        </div>
      </section>

      {/* ===================== FORMULARIO + INFO ===================== */}
      <section className="py-24">
        <div className="mx-auto grid max-w-container gap-12 px-8 lg:px-20 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <ContactForm />

          <div>
            <div className="relative mb-7 flex h-[200px] items-center justify-center overflow-hidden rounded-[18px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/thinkerface-bogota/700/400"
                alt="Bogotá, Colombia"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/55" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.16]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
                  <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </div>
            </div>

            {infoItems.map((item) => {
              const content = (
                <>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-lavender-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-navy">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-[0.06em] text-muted">
                      {item.label}
                    </span>
                    <span className="text-[15.5px] font-bold text-navy">{item.value}</span>
                  </div>
                </>
              );

              // Rama explícita en vez de un tag dinámico (<Wrapper>): así
              // TypeScript valida bien los atributos de <a> vs <div>.
              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className="mb-[26px] flex items-start gap-4">
                    {content}
                  </a>
                );
              }
              return (
                <div key={item.label} className="mb-[26px] flex items-start gap-4">
                  {content}
                </div>
              );
            })}

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-border bg-graybg transition-colors hover:border-lavender-deep hover:bg-lavender-1"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-navy">
                    {social.rect && <rect x="3" y="3" width="18" height="18" rx="2" />}
                    {social.circle && (
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                      </>
                    )}
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUÉ PASA DESPUÉS ===================== */}
      <section className="bg-graybg py-24">
        <div className="mx-auto max-w-container px-8 lg:px-20">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="mb-3.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-soft">
              Qué pasa después
            </span>
            <h2 className="text-h2 text-navy">
              De tu mensaje a la primera conversación
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-card border border-border bg-white p-[30px_26px]">
                <span className="mb-[18px] flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[13px] font-extrabold text-white">
                  {item.step}
                </span>
                <h3 className="mb-2 text-h6 text-navy">{item.title}</h3>
                <p className="text-body3 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
