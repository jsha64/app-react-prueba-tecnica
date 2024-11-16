import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validar datos
    if (!email || !password) {
      return NextResponse.json(
        { error: "Correo y contraseña son obligatorios" },
        { status: 400 }
      );
    }

    // Hacer una solicitud POST a la API de reqres.in
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "Error de autenticación" },
        { status: response.status }
      );
    }

    const data = await response.json(); // Aquí obtenemos el token real de reqres.in

    // Configurar cabeceras con cookies si es necesario
    const responseHeaders = new Headers();
    responseHeaders.set(
      "Set-Cookie",
      `authToken=${data.token}; Path=/; HttpOnly; SameSite=Strict`
    );

    return NextResponse.json(
      { success: true, token: data.token },
      {
        status: 200,
        headers: responseHeaders,
      }
    );
  } catch (error) {
    console.error("Error en el login:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

