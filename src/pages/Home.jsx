import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiLayout, FiCode, FiCpu, FiLayers, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import AboutPage from './AboutPage';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import heroBg from '../assets/hero_bg.png';

/* ─── Floating particles ─── */
const Particles = ({ count = 20 }) => {
  const pts = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    color: ['#8B5CF6', '#3B82F6', '#14B8A6', '#a78bfa'][i % 4],
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {pts.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{ y: [0, -100, 0], x: [0, (Math.random() * 30 - 15), 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

/* ─── Typewriter hook ─── */
const useTypewriter = (words, speed = 90) => {
  const [displayed, setDisplayed] = useState('');
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[wIdx];
    const delay = del ? speed / 2 : cIdx === cur.length ? 1600 : cIdx === 0 ? 500 : speed;
    const t = setTimeout(() => {
      if (!del && cIdx < cur.length) { setDisplayed(cur.slice(0, cIdx + 1)); setCIdx(c => c + 1); }
      else if (!del && cIdx === cur.length) { setDel(true); }
      else if (del && cIdx > 0) { setDisplayed(cur.slice(0, cIdx - 1)); setCIdx(c => c - 1); }
      else { setDel(false); setWIdx(w => (w + 1) % words.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [cIdx, del, wIdx, words, speed]);

  return displayed;
};

/* ─── Glowing orb ─── */
const Orb = ({ color, size, style }) => (
  <div className="orb" style={{ width: size, height: size, background: color, ...style }} />
);

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const typeText = useTypewriter(
    ['Full Stack Developer', 'React.js Developer', 'MERN Stack Engineer', 'UI/UX Enthusiast'],
    80
  );

  const skillCategories = [
    {
      category: 'Technical Skills',
      icon: <FiCode />,
      items: [
        { name: 'JavaScript', icon: <FiCode /> },
        { name: 'Node.js / Express.js', icon: <FiCpu /> },
        { name: 'HTML / CSS', icon: <FiLayout /> },
        { name: 'React.js', icon: <FiCode /> },
        { name: 'GitHub', icon: <FiLayers /> },
        { name: 'MongoDB', icon: <FiCpu /> },
      ],
    },
    {
      category: 'Tools & Soft Skills',
      icon: <FiLayers />,
      items: [
        { name: 'Figma / Canva', icon: <FiLayers /> },
        { name: 'Visual Studio Code', icon: <FiCode /> },
        { name: 'Collaboration', icon: <FiLayers /> },
        { name: 'Critical Thinking', icon: <FiLayout /> },
      ],
    },
  ];

  const projects = [
    {
      title: 'React E-Commerce Platform',
      desc: 'A premium retail layout showcasing advanced shopping workflows, dynamic product catalogues, and modern aesthetic visuals.',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop',
      link: 'https://react-e-commerce-gray-five.vercel.app/',
      tag: 'React.js',
    },
    {
      title: 'Questions Paper Bank',
      desc: 'A secure digital portal for students and staff providing automated question paper repository uploads.',
      img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop',
      link: 'https://qs-bank-edupappers.vercel.app/',
      tag: 'MERN Stack',
    },
    {
      title: 'AI Stock Analyzer Toolkit',
      desc: 'An intelligent dashboard leveraging algorithm monitoring to analyze and visualize stock market trends.',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
      link: 'https://ai-stock-project.netlify.app/login',
      tag: 'Node.js + AI',
    },
    {
      title: 'Day Clean ERP Application',
      desc: 'Streamlines inventory, billing, and sales management with real-time tracking and secure user roles.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      link: 'https://marine-eject-74043143.figma.site/',
      tag: 'Figma + React',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };
  const stagger = { show: { transition: { staggerChildren: 0.12 } } };

  /* shared section label/header block */
  const SectionHeader = ({ tag, title, highlight, sub }) => (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      style={{ textAlign: 'center', marginBottom: '48px' }}
    >
      <span className="section-tag">{tag}</span>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: '900', color: '#fff', marginBottom: '12px' }}>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {sub && <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>{sub}</p>}
    </motion.div>
  );

  return (
    <motion.main
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh', color: 'var(--text-primary)', background: 'var(--bg-primary)', width: '100%', overflowX: 'hidden' }}
    >
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <div id="home" ref={heroRef} style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '100vh' }}>

        {/* BG image parallax */}
        <motion.div style={{
          position: 'absolute', inset: 0, y: heroY, opacity: heroOpacity,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0,
        }} />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg,rgba(5,5,15,0.88) 0%,rgba(5,5,15,0.6) 55%,rgba(5,5,15,0.9) 100%)',
          zIndex: 0,
        }} />

        {/* Orbs */}
        <Orb color="rgba(139,92,246,0.15)" size="350px" style={{ top: '-80px', left: '-120px' }} />
        <Orb color="rgba(59,130,246,0.1)"  size="300px" style={{ top: '30%', right: '-80px', animationDelay: '2s' }} />
        <Orb color="rgba(20,184,166,0.08)" size="280px" style={{ bottom: '0', left: '30%', animationDelay: '4s' }} />

        <Particles count={20} />

        {/* Content */}
        <div className="hero-grid container" style={{ position: 'relative', zIndex: 2 }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'inherit' }}
          >
            <motion.div className="status-badge"
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ alignSelf: 'center' }}
            >
              <span className="status-dot" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: '900', lineHeight: '1.1', color: '#fff', marginBottom: '14px', wordBreak: 'break-word' }}
            >
              Hi, I'm <span className="gradient-text">Ragunath</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              style={{ fontSize: 'clamp(1rem, 3.5vw, 1.3rem)', fontWeight: '700', color: '#a78bfa', marginBottom: '14px', minHeight: '1.6em' }}
            >
              {typeText}<span className="typewriter-cursor" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.88rem, 2.5vw, 1rem)', lineHeight: '1.7', maxWidth: '460px', marginBottom: '28px', margin: '0 auto 28px' }}
            >
              Passionate Full Stack Developer building intuitive, responsive, and visually stunning applications — from backend APIs to polished frontends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="btn-row"
            >
              <a href="/Ragu resume .pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="primary-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  View Resume <FiArrowRight />
                </button>
              </a>
              <button
                className="primary-btn"
                style={{ background: 'transparent', border: '1.5px solid rgba(139,92,246,0.5)', color: '#a78bfa', boxShadow: 'none' }}
                onClick={() => window.open('https://wa.me/8610766098')}
              >
                Let's Talk 💬
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
              className="stats-row"
            >
              {[{ value: '4+', label: 'Projects Live' }, { value: '1yr+', label: 'Experience' }, { value: '∞', label: 'Passion' }].map((s, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: '900', background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}
          >
            <motion.div className="image-frame-container" whileHover={{ scale: 1.02 }}>
              <div className="image-frame" style={{ backgroundImage: `url('/src/assets/hero_avatar.jpg')` }} />
              <div className="floating-card">
                <div className="icon-bg">💻</div>
                <div>
                  <div style={{ fontSize: '0.55rem', color: '#a78bfa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Focus</div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: '800' }}>Full Stack Dev</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="scroll-indicator"
        >
          <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '22px', height: '36px', border: '2px solid rgba(139,92,246,0.4)', borderRadius: '11px', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}
          >
            <div style={{ width: '3px', height: '7px', background: '#8B5CF6', borderRadius: '2px' }} />
          </motion.div>
        </motion.div>
      </div>

      {/* ════════════════════════════════
          ABOUT
      ════════════════════════════════ */}
      <div id="about" style={{ width: '100%' }}>
        <AboutPage />
      </div>

      {/* ════════════════════════════════
          SKILLS
      ════════════════════════════════ */}
      <div id="resume" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <Orb color="rgba(59,130,246,0.07)" size="500px" style={{ top: '0', right: '-200px' }} />

        <div className="container" style={{ padding: '80px 16px' }}>
          <SectionHeader tag="What I Know" title="My" highlight="Skills"
            sub="A comprehensive toolkit bridging design and development." />

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={stagger}
            className="skills-grid"
            style={{ maxWidth: '860px', margin: '0 auto' }}
          >
            {skillCategories.map((cat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="skill-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa', padding: '10px', borderRadius: '10px', fontSize: '1.1rem', display: 'flex', flexShrink: 0 }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff' }}>{cat.category}</h3>
                </div>
                <div style={{ height: '1px', background: 'rgba(139,92,246,0.1)', marginBottom: '18px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.items.map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}
                    >
                      <span style={{ color: '#8B5CF6', display: 'flex', flexShrink: 0 }}>{item.icon}</span>
                      {item.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════
          EXPERIENCE & EDUCATION
      ════════════════════════════════ */}
      <div id="experience" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <Orb color="rgba(20,184,166,0.06)" size="450px" style={{ bottom: '0', left: '-150px', animationDelay: '3s' }} />

        <div className="container" style={{ padding: '80px 16px' }}>
          <SectionHeader tag="My Journey" title="Experience &" highlight="Education" />

          <div className="experience-grid">

            {/* Experience */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
            >
              <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#fff', marginBottom: '24px' }}>Experience</h3>
              <div style={{ borderLeft: '2px solid rgba(139,92,246,0.3)', paddingLeft: '24px', position: 'relative' }}>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6 }}
                  style={{ position: 'relative', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '16px', padding: '18px' }}
                >
                  <div className="timeline-dot" />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>ST Software Solutions</h4>
                  <p style={{ fontSize: '0.85rem', color: '#a78bfa', marginBottom: '10px', fontWeight: '600' }}>Full-Stack Development Intern</p>
                  <ul style={{ paddingLeft: '16px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.7' }}>
                    <li>Built full-stack apps with MongoDB, Express.js, React.js, Node.js</li>
                    <li>Designed responsive user interfaces</li>
                    <li>Created RESTful APIs for backend services</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
            >
              <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#fff', marginBottom: '24px' }}>Education</h3>
              <div style={{ borderLeft: '2px solid rgba(59,130,246,0.3)', paddingLeft: '24px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { school: 'SNS College of Engineering', degree: 'Bachelor of Computer Science', year: '2022 – 2026' },
                  { school: 'S H N V Higher Secondary School', degree: 'Higher Secondary School', year: '2020 – 2021 | Sivakasi' },
                ].map((edu, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                    style={{ position: 'relative', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(59,130,246,0.12)', borderRadius: '16px', padding: '18px' }}
                  >
                    <div className="timeline-dot" style={{ background: 'linear-gradient(135deg,#3B82F6,#14B8A6)', boxShadow: '0 0 12px rgba(59,130,246,0.6)' }} />
                    <h4 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>{edu.school}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#60a5fa', marginBottom: '3px', fontWeight: '600' }}>{edu.degree}</p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          PROJECTS
      ════════════════════════════════ */}
      <div id="projects" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <Orb color="rgba(139,92,246,0.07)" size="500px" style={{ top: '-80px', right: '-150px' }} />

        <div className="container" style={{ padding: '80px 16px' }}>
          <SectionHeader tag="What I've Built" title="My" highlight="Projects"
            sub="A collection of technical products covering data analysis and user-centered interfaces." />

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="projects-grid"
          >
            {projects.map((proj, idx) => (
              <motion.div key={idx} variants={fadeUp} className="project-card">
                <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', top: '10px', left: '10px',
                    background: 'rgba(139,92,246,0.9)', backdropFilter: 'blur(6px)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: '700',
                    padding: '3px 10px', borderRadius: '20px',
                  }}>
                    {proj.tag}
                  </div>
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>{proj.title}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{proj.desc}</p>
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                        background: 'linear-gradient(135deg,rgba(139,92,246,0.18),rgba(59,130,246,0.18))',
                        border: '1px solid rgba(139,92,246,0.35)',
                        color: '#a78bfa', padding: '11px 16px', borderRadius: '11px',
                        cursor: 'pointer', fontSize: '0.88rem', fontWeight: '700',
                      }}
                    >
                      <FiExternalLink /> View Project
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════
          CONTACT
      ════════════════════════════════ */}
      <div id="contact" style={{ width: '100%', paddingBottom: '40px' }}>
        <Contact />
      </div>

      <Footer />
    </motion.main>
  );
};

export default Home;
