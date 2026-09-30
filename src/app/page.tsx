"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FloatingContact } from "../components/FloatingContact";
import { Reveal } from "../components/Reveal";
import { StatCounter } from "../components/StatCounter";

type Project = {
  title: string;
  demoUrl?: string;
  codeUrl: string;
  image: string;
  description: string;
  label?: string;
  tags: string[];
};

const projects: Project[] = [
  { title: "Team Acebal — Gestión de Academia", demoUrl: "https://frontend-beta-seven-77.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/team-acebal", image: "/preview-0.svg", description: "Plataforma multi-usuario para academias de artes marciales — alumnos, pagos y graduaciones con dashboard de vencimientos. Auth JWT, registro público con verificación por email y migraciones reales sobre PostgreSQL.", label: "Proyecto", tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "React"] },
  { title: "Registro Financiero", demoUrl: "https://gestion-de-gastos-ten.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/Gestion-de-gastos", image: "/preview-0.svg", description: "App full-stack de gestión financiera personal — gastos e ingresos por categorías, con auth JWT.", label: "Proyecto", tags: ["NestJS", "TypeScript", "PostgreSQL", "JWT"] },
  { title: "API eCommerce (Jamby)", demoUrl: "https://ecommerce-jcjunior-cardenas.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/ecommerce-jcjunior-cardenas", image: "/preview-1.svg", description: "Tienda online de zapatillas urbanas con REST API, roles Admin/User y tests con Jest.", tags: ["Node.js", "Express", "MongoDB", "JWT", "Jest"] },
  { title: "El Vasco — Turnos", demoUrl: "https://barberia-turnos-chi.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/barberia-turnos", image: "/preview-2.svg", description: "Sistema de reservas de turnos online para barbería, con experiencia tipo app (PWA).", tags: ["NestJS", "React", "PostgreSQL", "PWA"] },
  { title: "TrackiFly", demoUrl: "https://front-tracki-fly-zts5-n0y0lh2ds-trackifly-apps-projects.vercel.app/es", codeUrl: "https://github.com/JCJuniorCardenas/Back-TrackiFly", image: "/preview-3.svg", description: "Plataforma logística y de envíos. Backend con perfiles, pedidos masivos, tiempo real, Mercado Pago y auth dual.", label: "Proyecto colaborativo", tags: ["NestJS", "TypeScript", "PostgreSQL", "Mercado Pago", "WebSockets"] },
];

const stackCategories: Record<string, string[]> = {
  Backend: ["Node.js", "NestJS", "Express", "TypeScript", "REST APIs", "JWT", "Bcrypt", "Swagger/OpenAPI", "Python"],
  Frontend: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  "Bases de datos": ["PostgreSQL", "TypeORM", "Prisma", "MongoDB"],
  "Cloud & DevOps": ["AWS", "Terraform", "Docker", "Cloudinary", "Git", "GitHub"],
  Integraciones: ["Mercado Pago", "Passport", "Mailer SMTP"],
  Testing: ["Jest", "Postman"],
};

const totalTechs = Object.values(stackCategories).reduce((sum, items) => sum + items.length, 0);

const getProjectImage = (project: Project) => project.demoUrl
  ? `https://api.microlink.io/?url=${encodeURIComponent(project.demoUrl)}&screenshot=true&meta=false&embed=screenshot.url`
  : project.image;

export default function Home() {
  return <main>
    <nav className="nav"><a className="logo" href="#inicio">JCD<span>.</span></a><div className="nav-links"><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a><a href="#stack">Stack</a><a href="#contacto">Contacto</a></div><a className="nav-cta" href="mailto:juliocesar45941285@gmail.com">Disponible →</a></nav>

    <section id="inicio" className="hero section-wrap">
      <p className="hero-name">Julio César Deglise Cárdenas</p>
      <h1>Full Stack<br /><em>Developer</em></h1>
      <p className="hero-subtitle">Programo backends con NestJS, los conecto a una base de datos real y dejo la app funcionando en producción, no solo en mi máquina.</p>
      <div className="hero-bottom"><a className="arrow-link" href="#proyectos">Ver proyectos <span>↘</span></a></div>
    </section>

    <Reveal as="section" className="stats-strip section-wrap">
      <StatCounter value={projects.length} label="Proyectos full-stack" />
      <StatCounter value={totalTechs} label="Tecnologías en uso" />
      <StatCounter value={projects.filter((p) => p.demoUrl).length} label="Demos en producción" />
    </Reveal>

    <section id="experiencia" className="section-wrap section">
      <div className="section-heading"><span className="section-index">01 /</span><h2>Experiencia</h2><span className="rule" /></div>
      <Reveal as="div" className="about-grid">
        <p className="about-copy">Full Stack Developer con foco en backend, especializado en Node.js, NestJS y TypeScript. Experiencia construyendo APIs REST escalables, autenticación JWT, pagos e infraestructura cloud con AWS y Terraform.</p>
        <div className="timeline">
          <article><span className="timeline-date">JUN 2026 — ACTUALIDAD</span><h3>Programador Full Stack <small>(Pasantía · Part-time)</small></h3><p className="company">Nexa · Remoto</p><ul><li>Backend con Node.js/NestJS en equipo distribuido</li><li>AWS + Terraform (IaC) y Docker</li><li>Seguridad y escalabilidad</li></ul></article>
          <article><span className="timeline-date">JUN 2026 — ACTUALIDAD</span><h3>Desarrollador Backend <small>(Pasantía · Part-time)</small></h3><p className="company">Islas Frío</p><ul><li>Funcionalidades backend y APIs REST</li><li>Bases de datos y metodología ágil</li></ul></article>
          <article className="secondary"><span className="timeline-date">2023 — 2024</span><h3>Asistente Administrativo</h3><p className="company">Hospital San José</p><p>Gestión de datos y documentación sensible en entornos de alto volumen.</p></article>
        </div>
      </Reveal>
    </section>

    <section id="proyectos" className="section-wrap section">
      <div className="section-heading"><span className="section-index">02 /</span><h2>Proyectos seleccionados</h2><span className="rule" /></div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal as="article" className="project-card" delay={Math.min(index * 0.08, 0.32)} key={project.title}>
            <a className="project-image" href={project.demoUrl ?? project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Image src={getProjectImage(project)} alt={`Preview de ${project.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" />
            </a>
            <div className="project-content">
              <span className="project-label">{project.label ?? "Proyecto"}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-actions">
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Ver Demo ↗</a>}
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Ver Código ↗</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section id="stack" className="section-wrap section">
      <div className="section-heading"><span className="section-index">03 /</span><h2>Stack técnico</h2><span className="rule" /></div>
      <div className="stack-grid">
        {Object.entries(stackCategories).map(([category, items], index) => (
          <Reveal as="div" delay={Math.min(index * 0.06, 0.24)} key={category}>
            <h3>{category}</h3>
            <div className="tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>

    <section id="educacion" className="section-wrap section education">
      <div className="section-heading"><span className="section-index">04 /</span><h2>Educación</h2><span className="rule" /></div>
      <div className="education-list">
        <Reveal as="div">
          <h3>Formación</h3>
          <div className="education-entry"><strong>Tecnicatura en Programación</strong><span>Teclab Instituto Técnico Superior · MAR 2026 — DIC 2026</span></div>
          <div className="education-entry"><strong>Full Stack Developer</strong><span>Henry · SEPT 2025 — ABR 2026</span></div>
        </Reveal>
        <Reveal as="div" delay={0.1}>
          <h3>Certificaciones</h3>
          <div className="tags"><span>Desarrollo Web Full Stack · Henry</span><span>Graph Developer - Associate · Apollo GraphQL</span><span>JavaScript · Coderhouse</span></div>
          <small className="cert-more">+3 certificaciones adicionales</small>
        </Reveal>
      </div>
    </section>

    <Reveal as="footer" id="contacto" className="footer section-wrap">
      <div><span className="section-index">05 / CONTACTO</span><h2>¿Tenés un proyecto backend<br />en mente?</h2></div>
      <div className="contact-links">
        <div className="contact-icons">
          <a className="contact-gmail" href="mailto:juliocesar45941285@gmail.com" aria-label="Email de Julio César"><SiGmail size={26} /></a>
          <a className="contact-whatsapp" href="https://wa.me/5493772692892" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Julio César"><FaWhatsapp size={26} /></a>
          <a className="contact-linkedin" href="https://www.linkedin.com/in/julio-c%C3%A9sar-junior-deglise-cardenas-3246b8296/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Julio César"><FaLinkedin size={26} /></a>
          <a className="contact-github" href="https://github.com/JCJuniorCardenas" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Julio César"><FaGithub size={26} /></a>
        </div>
      </div>
    </Reveal>

    <FloatingContact />
  </main>;
}
