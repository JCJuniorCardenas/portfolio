import type { ProjectId } from "./projects";

export const es = {
  lang: "es",
  meta: {
    title: "Julio César Deglise Cárdenas — Full Stack Developer",
    description: "Portfolio de Julio César Deglise Cárdenas, Full Stack Developer especializado en Node.js, NestJS y TypeScript.",
  },
  nav: { experience: "Experiencia", projects: "Proyectos", stack: "Stack", contact: "Contacto", cta: "Disponible →" },
  hero: { name: "Julio César Deglise Cárdenas", seeProjects: "Ver proyectos", downloadCv: "Descargar CV" },
  cvFile: "/CV-Julio-Deglise-Cardenas.pdf",
  stats: { projects: "Proyectos", demos: "Demos en producción" },
  experience: {
    heading: "Experiencia",
    about: "Full Stack Developer con foco en backend, especializado en Node.js, NestJS y TypeScript. Experiencia construyendo APIs REST escalables, autenticación JWT, pagos e infraestructura cloud con AWS y Terraform.",
    jobs: [
      { date: "JUN 2026 — ACTUALIDAD", title: "Programador Full Stack", type: "(Pasantía · Part-time)", company: "Nexa · Remoto", bullets: ["Backend con Node.js/NestJS en equipo distribuido", "AWS + Terraform (IaC) y Docker", "Seguridad y escalabilidad"] },
      { date: "JUN 2026 — ACTUALIDAD", title: "Desarrollador Backend", type: "(Pasantía · Part-time)", company: "Islas Frío", bullets: ["Funcionalidades backend y APIs REST", "Bases de datos y metodología ágil"] },
    ],
    previous: { date: "2023 — 2024", title: "Asistente Administrativo", company: "Hospital San José", text: "Gestión de datos y documentación sensible en entornos de alto volumen." },
  },
  projectsSection: { heading: "Proyectos seleccionados", demo: "Ver Demo ↗", code: "Ver Código ↗", previewOf: "Preview de", defaultLabel: "Proyecto" },
  projects: {
    "clinica-turnos": { title: "Clínica Turnos — Agenda con IA", label: "Proyecto", description: "Agenda para clínicas con asistente de WhatsApp con IA y panel web en vivo. La IA solo propone: el backend valida cada acción y pide confirmación. Un índice único en PostgreSQL evita la doble reserva y cada clínica ve solo sus datos, con tests de concurrencia y de aislamiento.", note: ["Usuario de prueba (rol doctor)", "doctor@demo.test", "clave: Doc-xjlc6hvehEA6"] },
    "automotores-batalla": { title: "Automotores Batalla — Sitio de concesionaria", label: "Proyecto", description: "Sitio de una concesionaria: catálogo de autos 0km y usados con fichas, galería de fotos y visor 360°, simulador de cuotas y consultas directas por WhatsApp. Incluye un panel de administración para cargar autos y fotos. Monorepo con Next.js, NestJS y PostgreSQL. La demo usa autos y precios de ejemplo." },
    "team-acebal": { title: "Team Acebal — Gestión de Academia", label: "Proyecto", description: "Plataforma multi-usuario para academias de artes marciales — alumnos, pagos y graduaciones con dashboard de vencimientos. Auth JWT, registro público con verificación por email y migraciones reales sobre PostgreSQL.", note: ["Usuario de prueba (con datos de ejemplo)", "demo@academia.test", "clave: Demo-75d20e71272c"] },
    "registro-financiero": { title: "Registro Financiero", label: "Proyecto", description: "App full-stack de gestión financiera personal — gastos e ingresos por categorías, con auth JWT.", note: ["Usuario de prueba (con datos de ejemplo)", "demo@gastos.test", "clave: Demo-34bca9f42b38"] },
    jamby: { title: "API eCommerce (Jamby)", label: "Proyecto", description: "Tienda online de zapatillas urbanas con REST API, roles Admin/User y tests con Jest." },
    "fabian-diaz": { title: "Fabián Díaz — Turnos", label: "Proyecto", description: "Web y sistema de reservas de turnos online para la barbería de Fabián Díaz, con experiencia tipo app (PWA)." },
    trackifly: { title: "TrackiFly", label: "Proyecto colaborativo", description: "Plataforma logística y de envíos. Backend con perfiles, pedidos masivos, tiempo real, Mercado Pago y auth dual." },
    "palta-landing": { title: "Los 108 — Landing y tienda de paltas", label: "Proyecto", description: "Landing con animaciones al scroll, tienda de pedidos y panel de administración para un campo de paltas de Corrientes. El servidor valida precios y stock, y admite pago con Mercado Pago o transferencia. La demo usa productos y precios de ejemplo." },
  } as Record<ProjectId, { title: string; label: string; description: string; note?: string[] }>,
  stack: {
    heading: "Stack técnico",
    categories: ["Backend", "Frontend", "Bases de datos", "Cloud & DevOps", "Integraciones", "Testing"],
  },
  education: {
    heading: "Educación",
    training: "Formación",
    entries: [
      { title: "Tecnicatura en Programación", detail: "Teclab Instituto Técnico Superior · MAR 2026 — DIC 2026" },
      { title: "Full Stack Developer", detail: "Henry · SEPT 2025 — ABR 2026" },
    ],
    certifications: "Certificaciones",
    certs: ["Desarrollo Web Full Stack · Henry", "Graph Developer - Associate · Apollo GraphQL", "JavaScript · Coderhouse"],
    more: "+3 certificaciones adicionales",
  },
  footer: { index: "05 / CONTACTO", titleTop: "¿Tenés un proyecto backend", titleBottom: "en mente?", emailLabel: "Email de Julio César" },
  floating: "Hablemos",
  switchLabel: "Idioma",
};

export type Dict = typeof es;
