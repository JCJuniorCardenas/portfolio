"use client";

import { useEffect } from "react";

// Los backends gratis de Render se duermen tras 15 min sin uso y tardan
// ~40 s en despertar. Al abrir el portfolio se les envía un ping en segundo
// plano para que estén listos cuando alguien abra una demo.
const BACKENDS = [
  "https://team-acebal.onrender.com/health",
  "https://barberia-turnos-x1ih.onrender.com/",
  "https://gestion-de-gastos-gvho.onrender.com/",
];

export function WarmUp() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("warmed")) return;
      sessionStorage.setItem("warmed", "1");
    } catch {
      // sin sessionStorage: se hace el ping igual
    }
    // no-cors: no hace falta leer la respuesta, solo despertar el servicio.
    for (const url of BACKENDS) {
      fetch(url, { mode: "no-cors", cache: "no-store" }).catch(() => {});
    }
  }, []);

  return null;
}
