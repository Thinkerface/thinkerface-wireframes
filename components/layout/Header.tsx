"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";

/**
 * Header global — se monta una sola vez en app/layout.tsx y por eso no
 * se repite por página (a diferencia de los wireframes HTML, donde el
 * mismo bloque estaba copiado en los 7 archivos).
 *
 * Es "use client" por dos razones puntuales, no por defecto:
 * 1. usePathname() calcula el link activo solo — en los wireframes esa
 *    clase "active" se escribía a mano en cada archivo.
 * 2. El menú móvil necesita estado (useState) para abrir/cerrar, algo
 *    que en el wireframe HTML era solo decorativo (tres líneas fijas).
 */
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-8 lg:px-20 py-[18px]">
        <Link href="/" className="flex items-center" aria-label="Thinkerface">
          {/* Logo real de marca. 234px de alto original — se escala a 28px
              (h-7), muy por encima del mínimo de 20px del manual. */}
          <Image src="/logo.png" alt="Thinkerface" width={1662} height={234} className="h-7 w-auto" priority />
        </Link>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex gap-9">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-1 text-[15px] transition-colors ${
                      isActive ? "font-bold text-navy" : "font-medium text-navy-soft hover:text-navy"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded bg-lavender-deep" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <Button href="/contacto" variant="primary" className="hidden sm:inline-flex">
            Hablemos
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="relative block h-4 w-[22px] md:hidden"
          >
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded bg-navy transition-transform ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-full rounded bg-navy transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-full rounded bg-navy transition-transform ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-white md:hidden" aria-label="Navegación móvil">
          <ul className="flex flex-col px-8 py-4">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-[15px] ${isActive ? "font-bold text-navy" : "font-medium text-navy-soft"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button href="/contacto" variant="primary" className="w-full justify-center">
                Hablemos
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
