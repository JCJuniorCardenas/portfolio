export type ProjectId = "whatsapp-bot" | "team-acebal" | "registro-financiero" | "jamby" | "el-vasco" | "trackifly";

export type ProjectBase = {
  id: ProjectId;
  demoUrl?: string; // sin demo pública: la imagen lleva al código
  codeUrl: string;
  image: string;
  imagePosition: string;
  tags: string[];
};

// Datos que no cambian según el idioma. Los textos están en es.ts / pt.ts.
export const projectsBase: ProjectBase[] = [
  { id: "whatsapp-bot", codeUrl: "https://github.com/JCJuniorCardenas/whatsapp-ai-bot", image: "/previews/whatsapp-bot.jpg", imagePosition: "center", tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Gemini AI", "WhatsApp API", "Jest"] },
  { id: "team-acebal", demoUrl: "https://frontend-beta-seven-77.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/team-acebal", image: "/previews/team-acebal.jpg", imagePosition: "top", tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "React"] },
  { id: "registro-financiero", demoUrl: "https://gestion-de-gastos-ten.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/Gestion-de-gastos", image: "/previews/registro-financiero.jpg", imagePosition: "top", tags: ["NestJS", "TypeScript", "PostgreSQL", "JWT"] },
  { id: "jamby", demoUrl: "https://ecommerce-jcjunior-cardenas.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/ecommerce-jcjunior-cardenas", image: "/previews/jamby.jpg", imagePosition: "center 30%", tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Jest"] },
  { id: "el-vasco", demoUrl: "https://barberia-turnos-chi.vercel.app/", codeUrl: "https://github.com/JCJuniorCardenas/barberia-turnos", image: "/previews/el-vasco.jpg", imagePosition: "center 70%", tags: ["NestJS", "React", "PostgreSQL", "PWA"] },
  { id: "trackifly", demoUrl: "https://front-tracki-fly-zts5.vercel.app/es", codeUrl: "https://github.com/JCJuniorCardenas/Back-TrackiFly", image: "/previews/trackifly.jpg", imagePosition: "top", tags: ["NestJS", "TypeScript", "PostgreSQL", "Mercado Pago", "WebSockets"] },
];

export const stackItems: string[][] = [
  ["Node.js", "NestJS", "Express", "TypeScript", "REST APIs", "JWT", "Bcrypt", "Swagger/OpenAPI", "Python"],
  ["Next.js", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  ["PostgreSQL", "TypeORM", "Prisma", "MongoDB"],
  ["AWS", "Terraform", "Docker", "Cloudinary", "Git", "GitHub"],
  ["Mercado Pago", "WhatsApp Cloud API", "Gemini API", "Passport", "Mailer SMTP"],
  ["Jest", "Postman"],
];
