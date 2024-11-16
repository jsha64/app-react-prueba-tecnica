// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  // Rutas protegidas
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      // Redirigir a login si no hay token
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Aplicar middleware a todas las rutas
export const config = {
  matcher: ["/:path*"],
};

