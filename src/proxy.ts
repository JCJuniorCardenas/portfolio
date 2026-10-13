import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["es", "pt"];

// Orden de prioridad: elección guardada (cookie) > idioma del navegador >
// país (Brasil → portugués) > español.
function pickLocale(request: NextRequest): string {
  const saved = request.cookies.get("lang")?.value;
  if (saved && SUPPORTED.includes(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase().split("-")[0];
    if (SUPPORTED.includes(tag)) return tag;
  }

  if (request.headers.get("x-vercel-ip-country") === "BR") return "pt";
  return "es";
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}`;
  return NextResponse.redirect(url);
}

// Solo la raíz: el resto de las rutas y los archivos estáticos no pasan por acá.
export const config = { matcher: "/" };
