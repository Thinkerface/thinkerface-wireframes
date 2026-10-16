"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Consultoría",
  "Diseño UX",
  "Customer Experience Design",
  "User Research",
  "Aún no lo sé",
];

const inputClasses =
  "w-full rounded-[10px] border border-border bg-graybg px-4 py-3.5 text-[14.5px] text-navy outline-none transition-colors placeholder:text-muted focus:border-lavender-deep focus:bg-white";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      servicio: formData.get("servicio"),
      mensaje: formData.get("mensaje"),
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error en el envío");

      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[24px] border border-border bg-white p-8 shadow-[0_30px_60px_-36px_rgba(16,27,61,0.16)] sm:p-11">
      <h2 className="mb-1.5 text-h4 text-navy">Cuéntanos sobre tu proyecto</h2>
      <p className="mb-7 text-[14.5px] text-muted">Respondemos todos los mensajes en menos de 24 horas hábiles.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="mb-2 block text-[13px] font-bold text-navy">
              Nombre completo
            </label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required className={inputClasses} />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-[13px] font-bold text-navy">
              Correo electrónico
            </label>
            <input id="email" name="email" type="email" placeholder="tu@empresa.com" required className={inputClasses} />
          </div>
        </div>

        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="empresa" className="mb-2 block text-[13px] font-bold text-navy">
              Empresa
            </label>
            <input id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="servicio" className="mb-2 block text-[13px] font-bold text-navy">
              Servicio de interés
            </label>
            <select id="servicio" name="servicio" className={inputClasses}>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="mensaje" className="mb-2 block text-[13px] font-bold text-navy">
            Cuéntanos qué experiencia quieres crear
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Describe brevemente tu reto o proyecto..."
            rows={5}
            required
            className={`${inputClasses} resize-y`}
          />
        </div>

        <Button type="submit" variant="primary" className="w-full justify-center" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : status === "success" ? "Mensaje enviado ✓" : "Enviar mensaje"}
        </Button>

        {status === "error" && (
          <p className="mt-4 text-center text-[13px] font-semibold text-red-600">
            Hubo un error al enviar tu mensaje. Intenta de nuevo o escríbenos directo por correo.
          </p>
        )}
        {status === "success" && (
          <p className="mt-4 text-center text-[13px] font-semibold text-green-600">
            ¡Gracias! Te responderemos en menos de 24 horas hábiles.
          </p>
        )}

        <p className="mt-4 text-center text-[12.5px] text-muted">
          Al enviar este formulario aceptas nuestra política de privacidad.
        </p>
      </form>
    </div>
  );
}