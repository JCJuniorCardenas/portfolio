import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FloatingContact } from "../../components/FloatingContact";
import { LangSwitch } from "../../components/LangSwitch";
import { Reveal } from "../../components/Reveal";
import { StatCounter } from "../../components/StatCounter";
import { projectsBase, stackItems } from "../../content/projects";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const [job1, job2] = t.experience.jobs;

  return <main>
    <nav className="nav"><a className="logo" href="#inicio">JCD<span>.</span></a><div className="nav-links"><a href="#experiencia">{t.nav.experience}</a><a href="#proyectos">{t.nav.projects}</a><a href="#stack">{t.nav.stack}</a><a href="#contacto">{t.nav.contact}</a></div><div className="nav-right"><LangSwitch current={lang} label={t.switchLabel} /><a className="nav-cta" href="mailto:juliocesar45941285@gmail.com">{t.nav.cta}</a></div></nav>

    <section id="inicio" className="hero section-wrap">
      <p className="hero-name">{t.hero.name}</p>
      <h1>Full Stack<br /><em>Developer</em></h1>
      <div className="hero-bottom">
        <a className="arrow-link" href="#proyectos">{t.hero.seeProjects} <span>↘</span></a>
        <a className="arrow-link cv-link" href={t.cvFile} download>{t.hero.downloadCv} <span>↓</span></a>
      </div>
    </section>

    <Reveal as="section" className="stats-strip stats-strip--two section-wrap">
      <StatCounter value={projectsBase.length} label={t.stats.projects} />
      <StatCounter value={projectsBase.filter((p) => p.demoUrl).length} label={t.stats.demos} />
    </Reveal>

    <section id="experiencia" className="section-wrap section">
      <div className="section-heading"><span className="section-index">01 /</span><h2>{t.experience.heading}</h2><span className="rule" /></div>
      <Reveal as="div" className="about-grid">
        <p className="about-copy">{t.experience.about}</p>
        <div className="timeline">
          {[job1, job2].map((job) => (
            <article key={job.company}><span className="timeline-date">{job.date}</span><h3>{job.title} <small>{job.type}</small></h3><p className="company">{job.company}</p><ul>{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul></article>
          ))}
          <article className="secondary"><span className="timeline-date">{t.experience.previous.date}</span><h3>{t.experience.previous.title}</h3><p className="company">{t.experience.previous.company}</p><p>{t.experience.previous.text}</p></article>
        </div>
      </Reveal>
    </section>

    <section id="proyectos" className="section-wrap section">
      <div className="section-heading"><span className="section-index">02 /</span><h2>{t.projectsSection.heading}</h2><span className="rule" /></div>
      <div
        className={`projects-grid${projectsBase.length % 2 ? " projects-grid--odd" : ""}`}
        style={{ "--pairs": Math.floor(projectsBase.length / 2) } as React.CSSProperties}
      >
        {projectsBase.map((project, index) => {
          const text = t.projects[project.id];
          return (
            <Reveal as="article" className="project-card" delay={Math.min(index * 0.08, 0.32)} key={project.id}>
              <a className="project-image" href={project.demoUrl ?? project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Image style={{ objectPosition: project.imagePosition }} src={project.image} alt={`${t.projectsSection.previewOf} ${text.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" />
              </a>
              <div className="project-content">
                <span className="project-label">{text.label}</span>
                <h3>{text.title}</h3>
                <p>{text.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">{t.projectsSection.demo}</a>}
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">{t.projectsSection.code}</a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>

    <section id="stack" className="section-wrap section">
      <div className="section-heading"><span className="section-index">03 /</span><h2>{t.stack.heading}</h2><span className="rule" /></div>
      <div className="stack-grid">
        {t.stack.categories.map((category, index) => (
          <Reveal as="div" delay={Math.min(index * 0.06, 0.24)} key={category}>
            <h3>{category}</h3>
            <div className="tags">{stackItems[index].map((item) => <span key={item}>{item}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>

    <section id="educacion" className="section-wrap section education">
      <div className="section-heading"><span className="section-index">04 /</span><h2>{t.education.heading}</h2><span className="rule" /></div>
      <div className="education-list">
        <Reveal as="div">
          <h3>{t.education.training}</h3>
          {t.education.entries.map((entry) => <div className="education-entry" key={entry.title}><strong>{entry.title}</strong><span>{entry.detail}</span></div>)}
        </Reveal>
        <Reveal as="div" delay={0.1}>
          <h3>{t.education.certifications}</h3>
          <div className="tags">{t.education.certs.map((cert) => <span key={cert}>{cert}</span>)}</div>
          <small className="cert-more">{t.education.more}</small>
        </Reveal>
      </div>
    </section>

    <Reveal as="footer" id="contacto" className="footer section-wrap">
      <div><span className="section-index">{t.footer.index}</span><h2>{t.footer.titleTop}<br />{t.footer.titleBottom}</h2></div>
      <div className="contact-links">
        <div className="contact-icons">
          <a className="contact-gmail" href="mailto:juliocesar45941285@gmail.com" aria-label={t.footer.emailLabel}><SiGmail size={26} /></a>
          <a className="contact-whatsapp" href="https://wa.me/5493772692892" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={26} /></a>
          <a className="contact-linkedin" href="https://www.linkedin.com/in/julio-c%C3%A9sar-junior-deglise-cardenas-3246b8296/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={26} /></a>
          <a className="contact-github" href="https://github.com/JCJuniorCardenas" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={26} /></a>
        </div>
      </div>
    </Reveal>

    <FloatingContact label={t.floating} />
  </main>;
}
