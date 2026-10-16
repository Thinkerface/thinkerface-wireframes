export interface NavItem {
  label: string;
  href: string;
}

/**
 * Navegación de la rama "home-onepage": el sitio es una sola página y
 * cada link lleva a una sección del Home por ancla. Header y Footer
 * leen de acá para no repetir el mapa del sitio.
 */
export const mainNav: NavItem[] = [
  { label: "Somos", href: "/#somos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Casos", href: "/#casos" },
  { label: "Metodología", href: "/#metodologia" },
  { label: "Contacto", href: "/#contacto" },
];
