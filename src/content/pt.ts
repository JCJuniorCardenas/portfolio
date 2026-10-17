import type { Dict } from "./es";

export const pt: Dict = {
  lang: "pt",
  meta: {
    title: "Julio César Deglise Cárdenas — Full Stack Developer",
    description: "Portfólio de Julio César Deglise Cárdenas, Full Stack Developer especializado em Node.js, NestJS e TypeScript.",
  },
  nav: { experience: "Experiência", projects: "Projetos", stack: "Stack", contact: "Contato", cta: "Disponível →" },
  hero: { name: "Julio César Deglise Cárdenas", seeProjects: "Ver projetos", downloadCv: "Baixar CV" },
  cvFile: "/CV-Julio-Deglise-Cardenas-PT.pdf",
  stats: { projects: "Projetos", demos: "Demos em produção" },
  experience: {
    heading: "Experiência",
    about: "Full Stack Developer com foco em backend, especializado em Node.js, NestJS e TypeScript. Experiência construindo APIs REST escaláveis, autenticação JWT, pagamentos e infraestrutura em nuvem com AWS e Terraform. Português bilíngue, disponível para trabalho 100% remoto com equipes brasileiras e latino-americanas.",
    jobs: [
      { date: "JUN 2026 — ATUAL", title: "Programador Full Stack", type: "(Estágio · Meio período)", company: "Nexa · Remoto", bullets: ["Backend com Node.js/NestJS em equipe distribuída", "AWS + Terraform (IaC) e Docker", "Segurança e escalabilidade"] },
      { date: "JUN 2026 — ATUAL", title: "Desenvolvedor Backend", type: "(Estágio · Meio período)", company: "Islas Frío", bullets: ["Funcionalidades backend e APIs REST", "Bancos de dados e metodologia ágil"] },
    ],
    previous: { date: "2023 — 2024", title: "Assistente Administrativo", company: "Hospital San José", text: "Gestão de dados e documentação sensível em ambientes de alto volume." },
  },
  projectsSection: { heading: "Projetos selecionados", demo: "Ver Demo ↗", code: "Ver Código ↗", previewOf: "Prévia de", defaultLabel: "Projeto" },
  projects: {
    "whatsapp-bot": { title: "Bot de WhatsApp com IA — Agendamentos", label: "Projeto", description: "Bot de WhatsApp que agenda horários entendendo linguagem natural com IA (Gemini). A IA propõe e o código decide: reservar ou cancelar exige um “sim” da pessoa. Webhook da Meta com assinatura validada, avaliação reprodutível da IA e mais de 200 testes." },
    "team-acebal": { title: "Team Acebal — Gestão de Academia", label: "Projeto", description: "Plataforma multiusuário para academias de artes marciais — alunos, pagamentos e graduações com dashboard de vencimentos. Autenticação JWT, cadastro público com verificação por e-mail e migrações reais sobre PostgreSQL." },
    "registro-financiero": { title: "Registro Financeiro", label: "Projeto", description: "App full-stack de gestão financeira pessoal — despesas e receitas por categorias, com autenticação JWT." },
    jamby: { title: "API eCommerce (Jamby)", label: "Projeto", description: "Loja online de tênis urbanos com REST API, perfis Admin/User e testes com Jest." },
    "el-vasco": { title: "El Vasco — Agendamentos", label: "Projeto", description: "Sistema de agendamento online para barbearia, com experiência de aplicativo (PWA)." },
    trackifly: { title: "TrackiFly", label: "Projeto colaborativo", description: "Plataforma de logística e envios. Backend com perfis, pedidos em massa, tempo real, Mercado Pago e autenticação dupla." },
    "palta-landing": { title: "Los 108 — Landing e loja de abacates", label: "Projeto", description: "Landing com animações ao rolar a página, loja de pedidos e painel de administração para uma fazenda de abacates em Corrientes. O servidor valida preços e estoque e aceita pagamento com Mercado Pago ou transferência. A demo usa produtos e preços de exemplo." },
  },
  stack: {
    heading: "Stack técnico",
    categories: ["Backend", "Frontend", "Bancos de dados", "Cloud & DevOps", "Integrações", "Testes"],
  },
  education: {
    heading: "Educação",
    training: "Formação",
    entries: [
      { title: "Tecnicatura en Programación", detail: "Teclab Instituto Técnico Superior · MAR 2026 — DEZ 2026" },
      { title: "Full Stack Developer", detail: "Henry · SET 2025 — ABR 2026" },
    ],
    certifications: "Certificações",
    certs: ["Desenvolvimento Web Full Stack · Henry", "Graph Developer - Associate · Apollo GraphQL", "JavaScript · Coderhouse"],
    more: "+3 certificações adicionais",
  },
  footer: { index: "05 / CONTATO", titleTop: "Tem um projeto backend", titleBottom: "em mente?", emailLabel: "E-mail de Julio César" },
  floating: "Vamos conversar",
  switchLabel: "Idioma",
};
