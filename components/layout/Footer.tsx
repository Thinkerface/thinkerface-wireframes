import Link from "next/link";
import { mainNav } from "@/data/navigation";

// Etiquetas del footer que difieren del label corto del nav principal
// (p. ej. "Somos" en el header, "Somos Thinkerface" en el footer).
const footerLabelOverrides: Record<string, string> = {
  "/somos": "Somos Thinkerface",
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3",
    rect: true,
  },
  {
    label: "Instagram",
    href: "#",
    path: "M17.5 6.5h.01",
    circle: true,
  },
  {
    label: "X",
    href: "#",
    path: "M4 4l16 16M20 4 4 20",
  },
];

/**
 * Footer global — igual que el Header, se monta una sola vez en
 * app/layout.tsx. No necesita "use client": no tiene estado ni
 * hooks, así que se queda como Server Component.
 *
 * La columna "Firma" reutiliza `mainNav` (filtrando Home y Contacto)
 * en vez de tener su propio listado de rutas, para no repetir el
 * mapa del sitio en dos componentes distintos.
 */
export default function Footer() {
  const firmaLinks = mainNav.filter((item) => item.href !== "/" && item.href !== "/contacto");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 text-white/70">
      <div className="mx-auto max-w-container px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 text-[21px] font-extrabold text-white">
              Thinker<span className="text-lavender-2">face</span>
            </div>
            <p className="mb-6 max-w-[300px] text-[14.5px] leading-relaxed text-white/60">
              Convertimos el Brand Storytelling en experiencias que las personas viven, recuerdan y comparten.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
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

          <div>
            <h4 className="mb-[18px] text-[13px] font-bold uppercase tracking-wider text-lavender-2">Firma</h4>
            <ul className="space-y-3">
              {firmaLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14.5px] text-white/70 transition-colors hover:text-white">
                    {footerLabelOverrides[item.href] ?? item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] text-[13px] font-bold uppercase tracking-wider text-lavender-2">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hola@hellothinkerface.com" className="text-[14.5px] text-white/70 hover:text-white">
                  hola@hellothinkerface.com
                </a>
              </li>
              <li>
                <Link href="/contacto" className="text-[14.5px] text-white/70 hover:text-white">
                  Comenzar un proyecto
                </Link>
              </li>
              <li>
                <span className="text-[14.5px] text-white/70">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-[13px] text-white/50">
          <span>© {year} Thinkerface. Todos los derechos reservados.</span>
          <div className="flex gap-[22px]">
            {/* TODO: reemplazar por rutas reales cuando existan las páginas legales */}
            <a href="#">Términos de uso</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
