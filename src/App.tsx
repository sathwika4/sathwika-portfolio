import { FormEvent, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUp, ArrowUpRight, Check, ChevronRight, Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { achievements, Project, projects, skillGroups, socialLinks } from './data'

const roles = ['AI/ML Engineer', 'Machine Learning Enthusiast', 'Software Developer', 'Problem Solver']

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [contactStatus, setContactStatus] = useState<'idle' | 'error'>('idle')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const role = roles[roleIndex]
    if (reduceMotion) { setTypedRole(role); return }
    if (typedRole === role) {
      const pause = window.setTimeout(() => setRoleIndex((value) => (value + 1) % roles.length), 1800)
      return () => window.clearTimeout(pause)
    }
    const timer = window.setTimeout(() => setTypedRole(role.slice(0, typedRole.length + 1)), 75)
    return () => window.clearTimeout(timer)
  }, [roleIndex, typedRole, reduceMotion])

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact']
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-35% 0px -55% 0px' })
    sections.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  const navItems = useMemo(() => ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'], [])
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.6 } }

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = String(form.get('subject') ?? '')
    const message = String(form.get('message') ?? '')
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    window.location.href = `mailto:sathwikabejjankii@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    setContactStatus('idle')
  }

  return (
    <div className="app-shell">
      <div className="noise" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to home"><span>BS</span><i /></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => <button key={item} className={activeSection === item ? 'active' : ''} onClick={() => scrollTo(item)}>{item}</button>)}
            <button className="nav-connect" onClick={() => scrollTo('contact')}>Let’s connect <ArrowUpRight size={15} /></button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <motion.div {...reveal} className="eyebrow"><span className="eyebrow-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></motion.div>
            <motion.p {...reveal} className="kicker">HELLO, I’M</motion.p>
            <motion.h1 {...reveal}>Sathwika<br /><em>Bejjanki</em></motion.h1>
            <motion.div {...reveal} className="role-line"><span>/{typedRole}</span><b className="cursor" /></motion.div>
            <motion.p {...reveal} className="hero-description">A Computer Science and Engineering student building intelligent solutions, exploring machine learning, and turning thoughtful ideas into useful software.</motion.p>
            <motion.div {...reveal} className="hero-actions"><button className="button primary" onClick={() => scrollTo('projects')}>Explore my work <ArrowUpRight size={17} /></button><button className="button secondary" onClick={() => scrollTo('contact')}>Let’s connect <ChevronRight size={17} /></button><a className="button text-button" href="/Sathwika-Bejjanki-Resume.docx" download>Resume <Download size={16} /></a></motion.div>
            <motion.div {...reveal} className="social-row"><a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={socialLinks.email}><Mail size={17} /> Email</a></motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait-frame"><div className="portrait-glow" /><img src="/sathwika.png" alt="Sathwika Bejjanki smiling in a pink dress" /></div>
            <div className="float-tag tag-python">Python <span>✦</span></div><div className="float-tag tag-ai">AI / ML <span>◈</span></div><div className="float-tag tag-react">React <span>⌁</span></div>
            <div className="visual-caption"><span>01</span><i /><span>curiosity → creation</span></div>
          </motion.div>
          <button className="scroll-cue" onClick={() => scrollTo('about')}><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></button>
        </section>

        <motion.section id="about" className="section container about" {...reveal}>
          <div className="section-label">01 / ABOUT ME</div><div className="about-grid"><div><h2>Beyond<br /><em>the code.</em></h2></div><div className="about-copy"><p className="lead">I’m interested in understanding how intelligent systems work — and transforming ideas into practical applications.</p><p>I’m a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at <strong>SR University</strong>. My technical interests include machine learning, deep learning, natural language processing, Python programming, and software development.</p><p>Through individual projects, team collaborations, and technical activities, I’m continuously developing my problem-solving skills and exploring new technologies.</p><div className="about-stats"><div><strong>9.4</strong><span>CGPA / 10</span></div><div><strong>2028</strong><span>GRADUATING</span></div><div><strong>∞</strong><span>THINGS TO LEARN</span></div></div></div></div>
          <div className="value-cards">{[['01', 'AI & Innovation', 'Curious about the possibilities of intelligent technology.'], ['02', 'Problem Solving', 'Breaking complex problems into clear, useful solutions.'], ['03', 'Continuous Learning', 'Always exploring, building, and improving.']].map(([number, title, text]) => <div className="value-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={18} /></div>)}</div>
        </motion.section>

        <motion.section id="skills" className="section container" {...reveal}><div className="section-label">02 / TOOLKIT</div><div className="section-heading"><h2>Things I <em>work with.</em></h2><p>A growing toolkit for exploring ideas, building products, and making data more meaningful.</p></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-card" key={group.label}><span className="skill-icon">{group.icon}</span><h3>{group.label}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></motion.section>

        <motion.section id="projects" className="section container" {...reveal}><div className="section-label">03 / SELECTED WORK</div><div className="section-heading project-heading"><h2>Things I’ve <em>built.</em></h2><p>Projects where curiosity met a problem worth solving.</p></div><div className="projects-list">{projects.map((project, index) => <button className={`project-card ${project.accent}`} key={project.title} onClick={() => setSelectedProject(project)}><span className="project-index">0{index + 1}</span><div className="project-art"><span>{project.shortTitle}</span><div className="art-lines" /></div><div className="project-info"><span className="project-category">{project.category} <i>·</i> {project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div></div><ArrowUpRight className="project-arrow" /></button>)}</div></motion.section>

        <motion.section id="achievements" className="section container" {...reveal}><div className="section-label">04 / MILESTONES</div><div className="section-heading"><h2>Building with <em>purpose.</em></h2><p>Experiences that keep me learning beyond the classroom.</p></div><div className="timeline">{achievements.map((item, index) => <div className="timeline-item" key={item.title}><div className="timeline-marker">{item.icon}</div><div className="timeline-content"><span>0{index + 1} — {item.eyebrow}</span><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></motion.section>

        <motion.section id="education" className="section container education" {...reveal}><div className="section-label">05 / EDUCATION</div><div className="education-card"><div><span className="mini-label">CURRENTLY LEARNING</span><h2>Computer Science<br /><em>+ AI / ML</em></h2></div><div className="education-details"><div><span>2024 — 2028</span><strong>SR University</strong><p>B.Tech · Computer Science and Engineering<br />Artificial Intelligence and Machine Learning</p></div><div><span>ACADEMIC RECORD</span><strong>9.4 / 10 CGPA</strong><p>Resonance Junior College<br />Intermediate · 849 / 1000</p></div></div></div></motion.section>

        <motion.section id="contact" className="section container contact" {...reveal}><div className="section-label">06 / CONTACT</div><div className="contact-grid"><div><h2>Let’s build<br /><em>something together.</em></h2><p>Have an interesting idea, collaboration opportunity, or technical discussion? I’d love to connect.</p><a className="email-link" href={socialLinks.email}>sathwikabejjankii@gmail.com <ArrowUpRight size={17} /></a><div className="contact-links"><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div></div><form className="contact-form" onSubmit={submitContact}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Subject<input name="subject" required placeholder="What’s on your mind?" /></label><label>Message<textarea name="message" required rows={4} placeholder="Tell me a little about it..." /></label>{contactStatus === 'error' && <p className="form-note">Your email app couldn’t be opened from this form. Please use the email link directly.</p>}<button className="button primary" type="submit">Send message <ArrowUpRight size={17} /></button></form></div></motion.section>
      </main>

      <footer className="footer container"><div><span className="brand footer-brand"><span>BS</span></span><p>Designed & built by Sathwika Bejjanki</p></div><div className="footer-right"><span>© {new Date().getFullYear()} Sathwika</span><button onClick={() => scrollTo('home')}>Back to top <ArrowUp size={15} /></button></div></footer>

      <AnimatePresence>{selectedProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}><motion.div className="project-modal" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 22 }} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X /></button><span className={`modal-accent ${selectedProject.accent}`}>{selectedProject.category}</span><h2>{selectedProject.title}</h2><p className="modal-description">{selectedProject.description}</p><div className="modal-columns"><div><span className="mini-label">TECHNOLOGIES</span><div className="project-tech">{selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div><div><span className="mini-label">DETAILS</span><ul>{selectedProject.details.map((detail) => <li key={detail}><Check size={15} />{detail}</li>)}</ul></div></div>{selectedProject.achievement && <div className="achievement-note">✦ {selectedProject.achievement}</div>}<div className="modal-footer"><span>Links will be added when available.</span><button className="button secondary" onClick={() => setSelectedProject(null)}>Close <X size={15} /></button></div></motion.div></motion.div>}</AnimatePresence>
    </div>
  )
}

export default App
