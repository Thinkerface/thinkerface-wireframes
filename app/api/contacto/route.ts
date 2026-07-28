import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, empresa, servicio, mensaje } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Sitio Web <onboarding@resend.dev>',
      to: 'scamacho@activamc.com',
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      replyTo: email,
      text: `Nombre: ${nombre}
Email: ${email}
Empresa: ${empresa || "No especificada"}
Servicio de interés: ${servicio || "No especificado"}

Mensaje:
${mensaje}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { success: false, error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}