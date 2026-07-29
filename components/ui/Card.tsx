import Link from "next/link";
import type { ReactNode } from "react";

export interface CardProps {
  title: string;
  /** Descripción simple en texto plano — la usan Home y Somos. */
  description?: string;
  /**
   * Alternativa a `description` para el patrón "no X. Y." (negación +
   * afirmación) que usa Servicios: si se define, reemplaza el render de
   * `description` sin cambiar el resto de la card (mismo borde, mismo
   * ícono, mismo footer). Evita tener una card aparte solo por esto.
   */
  contrast?: { negate?: string; affirm: string };
  /**
   * Imagen real cuando exista fotografía (`src`); mientras no la haya,
   * se renderiza el placeholder degradado de marca. El componente no
   * cambia de forma cuando llegue contenido real: solo se le empieza a
   * pasar `image.src` (ver punto 4 del documento de traspaso).
   */
  image?: { src?: string; alt: string };
  /** Ícono en vez de imagen — lo usan las cards de servicio, que no llevan foto. */
  icon?: ReactNode;
  /** Etiqueta superpuesta sobre la imagen (p. ej. la industria de un caso). Solo aplica si hay `image`. */
  tag?: string;
  /** Si se define, toda la card es un link — así se usan las cards de Casos. */
  href?: string;
  /** Slot libre para lo que cambia entre usos: tags de "incluye", una métrica de impacto, un link "Ver caso"... */
  footer?: ReactNode;
  /**
   * Alineación centrada (ícono, título y descripción centrados). Las
   * cards de servicio (Home/Servicios) van alineadas a la izquierda por
   * defecto; las cards de "Nuestros principios" (Somos) van centradas.
   * Mismo componente, no una variante nueva por página.
   */
  centered?: boolean;
  className?: string;
}

/**
 * Card genérica reutilizada en Servicios (con `icon`, sin imagen), en
 * Casos (con `image` y `tag`) y en Somos (con `icon` + `centered`). Es
 * una sola implementación en vez de varias (ServiceCard / CaseCard)
 * porque título, descripción e imagen son el contrato común; `icon`,
 * `tag`, `footer` y `centered` son extensiones opcionales para que cada
 * página use solo lo que necesita.
 */
export default function Card({
  title,
  description,
  contrast,
  image,
  icon,
  tag,
  href,
  footer,
  centered = false,
  className = "",
}: CardProps) {
  const baseClasses = `block overflow-hidden rounded-card border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(16,27,61,0.2)] ${className}`;

  const content = (
    <>
      {image && (
        <div className="relative h-[180px] bg-gradient-to-br from-lavender-1 to-lavender-deep">
          {image.src ? (
            // Cuando ya hay foto real, se reemplaza por next/image (fuera del alcance de este componente base).
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          ) : (
            <span className="sr-only">{image.alt}</span>
          )}
          {tag && (
            <span className="absolute left-3.5 top-3.5 rounded-pill bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-navy">
              {tag}
            </span>
          )}
        </div>
      )}

      <div className={`${image ? "p-6" : "p-8"} ${centered ? "text-center" : ""}`}>
        {icon && !image && (
          // El ícono hereda color vía currentColor: pasar los SVG con stroke="currentColor".
          <div
            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-1 text-navy ${
              centered ? "mx-auto" : ""
            }`}
          >
            {icon}
          </div>
        )}
        <h3 className="mb-2.5 text-h6 text-navy">{title}</h3>
        {contrast ? (
          <div>
            {contrast.negate && (
              <span className="mb-1.5 block text-sm text-muted line-through decoration-lavender-deep">
                {contrast.negate}
              </span>
            )}
            <span className="block text-[15.5px] font-bold leading-snug text-navy">{contrast.affirm}</span>
          </div>
        ) : (
          description && <p className="text-body3 text-muted">{description}</p>
        )}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
