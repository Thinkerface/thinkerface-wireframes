"use client";

import { useEffect, useState } from "react";

const WORDS = ["viven", "recuerdan", "comparten"];
const HOLD_MS = 5000; // tiempo que cada palabra queda visible
const TRANSITION_MS = 400; // debe coincidir con la duración de las animaciones en globals.css

/**
 * Palabra que rota en loop infinito dentro del H1 del hero de Home:
 * "viven" → "recuerdan" → "comparten" → "viven"... Cada 5s se anima
 * la salida de la palabra actual y la entrada de la siguiente.
 *
 * Vive como Client Component aparte (no como parte de app/page.tsx)
 * porque es lo único del Home que necesita estado/temporizadores; el
 * resto de la página se queda como Server Component.
 */
export default function RotatingWord({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  // Fase "in" → espera HOLD_MS y dispara la salida.
  useEffect(() => {
    if (phase !== "in") return;
    const holdTimer = setTimeout(() => setPhase("out"), HOLD_MS);
    return () => clearTimeout(holdTimer);
  }, [phase, index]);

  // Fase "out" → espera a que termine la animación de salida, avanza
  // a la siguiente palabra del loop y vuelve a la fase "in".
  useEffect(() => {
    if (phase !== "out") return;
    const exitTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
      setPhase("in");
    }, TRANSITION_MS);
    return () => clearTimeout(exitTimer);
  }, [phase]);

  return (
    <span className="relative inline-block" aria-live="off">
      <span
        key={index}
        aria-hidden="true"
        className={`inline-block ${phase === "out" ? "animate-word-out" : "animate-word-in"} ${className}`}
      >
        {WORDS[index]}
      </span>
      {/* Alternativa estática para lectores de pantalla, así no
          anuncian el cambio de palabra cada 5 segundos. */}
      <span className="sr-only">{WORDS.join(", ")}</span>
    </span>
  );
}
