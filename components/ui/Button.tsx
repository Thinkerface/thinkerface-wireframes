import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "text";

export interface ButtonProps {
  /** primary = pastilla navy sólida · secondary = pastilla con borde · text = link con flecha */
  variant?: ButtonVariant;
  /**
   * Poner en true cuando el botón vive sobre un fondo navy (CTA final,
   * franja de metodología, etc.). En los wireframes cada variante tenía
   * una versión "on-dark" aparte — aquí es el mismo componente con un
   * prop, no un botón distinto.
   */
  onDark?: boolean;
  /** Si se define, el botón navega (renderiza <Link>). Si no, es un <button>. */
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center gap-2 font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

/**
 * Magenta (--color-primary) es el color de interacción de la marca: si
 * un elemento se puede clickear, tiene magenta en algún estado. Por eso
 * primary y secondary comparten ese color en vez de tener una versión
 * "navy" y otra "magenta" — la única diferencia entre variantes es
 * sólido vs. contorno, no el color.
 *
 * `onDark` ya no cambia el color de fondo/borde (magenta funciona igual
 * de bien sobre blanco o sobre navy) — sólo ajusta el ring de foco para
 * que sea visible en ambos fondos.
 */
const variantStyles: Record<ButtonVariant, { normal: string; dark: string }> = {
  primary: {
    normal:
      "rounded-pill bg-primary px-[30px] py-[14px] text-[15px] text-white hover:bg-primary-dark hover:-translate-y-px active:translate-y-0 active:bg-primary-dark focus-visible:ring-primary focus-visible:ring-offset-white",
    dark: "rounded-pill bg-primary px-[30px] py-[14px] text-[15px] text-white hover:bg-primary-dark hover:-translate-y-px active:translate-y-0 active:bg-primary-dark focus-visible:ring-white focus-visible:ring-offset-navy",
  },
  secondary: {
    normal:
      "rounded-pill border-[1.5px] border-primary bg-transparent px-[30px] py-[14px] text-[15px] text-primary hover:bg-lavender-2 active:bg-lavender-2 focus-visible:ring-primary focus-visible:ring-offset-white",
    dark: "rounded-pill border-[1.5px] border-white bg-transparent px-[30px] py-[14px] text-[15px] text-white hover:bg-white/10 active:bg-white/15 focus-visible:ring-white focus-visible:ring-offset-navy",
  },
  text: {
    normal: "group gap-1.5 p-0 text-[15px] text-primary hover:text-primary-dark focus-visible:ring-primary focus-visible:ring-offset-white",
    dark: "group gap-1.5 p-0 text-[15px] text-white hover:text-lavender-2 focus-visible:ring-white focus-visible:ring-offset-navy",
  },
};

/**
 * Botón base del sistema de diseño. Sin "use client": no usa hooks
 * propios, así que puede vivir tanto en Server como en Client
 * Components. `href` lo convierte en <Link> (navegación); sin `href`
 * es un <button> nativo, útil para el submit del formulario de
 * Contacto sin necesitar un handler de JS.
 */
export default function Button({
  variant = "primary",
  onDark = false,
  href,
  type = "button",
  onClick,
  disabled,
  className = "",
  children,
}: ButtonProps) {
  const styles = variantStyles[variant][onDark ? "dark" : "normal"];
  const classes = `${base} ${styles} ${className}`;

  const content =
    variant === "text" ? (
      <>
        {children}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
