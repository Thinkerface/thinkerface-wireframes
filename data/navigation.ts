export interface NavItem {
  label: string;
  href: string;
}

/**
 * Fuente única de la navegación principal (6 links: Home, Somos,
 * Metodología, Servicios, Casos, Contacto). El detalle de caso de
 * éxito no tiene link propio en el nav — se llega a él desde el
 * listado de Casos.
 *
 * El Header la consume directo. El Footer reutiliza los mismos href
 * para su columna "Firma" (filtrando Home y Contacto), así evitamos
 * mantener el listado de rutas escrito dos veces.
 */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Somos", href: "/somos" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos", href: "/casos" },
  { label: "Contacto", href: "/contacto" },
];
