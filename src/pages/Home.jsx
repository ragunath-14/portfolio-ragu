import { motion } from 'framer-motion';
import { FiLayout, FiImage, FiPenTool, FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import AboutPage from './AboutPage';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      items: [
        { name: "JavaScript", icon: <FiCode /> },
        { name: "Node.js / Express.js", icon: <FiCpu /> },
        { name: "HTML / CSS", icon: <FiLayout /> },
        { name: "React.js", icon: <FiCode /> },
        { name: "GitHub", icon: <FiLayers /> }
      ]
    },
    {
      category: "Tools & Soft Skills",
      items: [
        { name: "Figma / Canva", icon: <FiLayers /> },
        { name: "Visual Studio Code", icon: <FiCode /> },
        { name: "Collaboration", icon: <FiLayers /> },
        { name: "Critical Thinking", icon: <FiLayout /> }
      ]
    }
  ];
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ minHeight: '100vh', color: 'var(--text-primary)' }}
    >
      
      {/* 🚀 SECTION 1: HERO */}
      <div id="home" style={{ 
        backgroundImage: "url('/src/assets/abstract_bg.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%' 
      }}>
        <div className="hero-grid container">
          
          {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <div className="status-badge">
            <span style={{ width: 8, height: 8, background: 'var(--accent-primary)', borderRadius: '50%' }} />
            Available for new projects
          </div>
          
          <h1 style={{ 
            fontSize: 'max(2.8rem, 4.5vw)', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            color: 'var(--text-primary)', 
            marginBottom: '16px' 
          }}>
            Hi, I'm <span style={{ color: 'var(--accent-primary)' }}>Ragunath</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            color: 'var(--text-secondary)', 
            marginBottom: '16px' 
          }}>
            Full Stack Developer
          </p>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1rem', 
            lineHeight: '1.6', 
            maxWidth: '460px', 
            marginBottom: '32px' 
          }}>
            Passionate Web Developer aiming to create intuitive, responsive, and visually appealing applications with strong collaboration and problem-solving skills aiming for meaningful impact setup correctly!
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="/Ragu resume .pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="primary-btn">Resume</button>
            </a>
            <button 
              className="primary-btn" 
              style={{ background: 'transparent', border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)' }}
              onClick={() => window.open('https://wa.me/8610766098')}
            >
              Let's Talk
            </button>
          </div>
        </motion.div>

        {/* Right Side: Circular Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          <div className="image-frame-container">
            {/* Inner frame renders visual background center setup */}
            <div className="image-frame" style={{ 
              backgroundImage: `url('/src/assets/hero.png')` 
            }} />
            
            {/* Overlay Floating Card */}
            <div className="floating-card">
              <div className="icon-bg">💻</div>
              <div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>FOCUS</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>Full Stack Dev</div>
              </div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>

      {/* 🚀 SECTION 2: ABOUT */}
      <div id="about" style={{ background: 'transparent', width: '100%' }}>
        <AboutPage />
      </div>

      {/* 🚀 SECTION 3: SKILLS */}
      <div id="resume" style={{ background: 'transparent', width: '100%' }}>
        <div className="container" style={{ padding: '100px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.02)' }}>
          
          {/* Header centered from image template setup accurate layout frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '600px' }}
        >
          <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '12px' }}>
            My <span style={{ color: 'var(--accent-primary)' }}>Skills</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            A comprehensive toolkit that allows me to bridge the gap between design and development.
          </p>
        </motion.div>

        {/* Cards Categories Grid layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px', width: '100%', maxWidth: '800px' }}>
          
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,0,0,0.03)', borderRadius: '24px',
                padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ 
                  background: 'var(--accent-light)', color: 'var(--accent-primary)', 
                  padding: '12px', borderRadius: '12px', fontSize: '1.2rem', display: 'flex' 
                }}>
                  <FiLayout />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)' }}>{cat.category}</h3>
              </div>

              <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', marginBottom: '16px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', display: 'flex' }}>
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

          </div>

        </div>
      </div>

      {/* 🚀 SECTION 4: EXPERIENCE & EDUCATION */}
      <div id="experience" style={{ background: 'transparent', width: '100%' }}>
        <div className="container" style={{ padding: '150px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', width: '100%', maxWidth: '1050px' }}>
          
          {/* 💼 Experience timeline layout splits layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '32px' }}>Experience</h3>
            <div style={{ borderLeft: '2px solid #E5E7EB', paddingLeft: '24px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              <motion.div style={{ position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', position: 'absolute', left: '-31px', top: '6px', boxShadow: '0 0 8px var(--accent-glow)' }} />
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>ST software solutions</h4>
                <p style={{ fontSize: '1rem', color: 'var(--accent-primary)', marginBottom: '12px', fontWeight: '600' }}>Full-Stack Development Intern</p>
                <ul style={{ paddingLeft: '16px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                  <li>Developed full-stack web applications using MongoDB, Express.js, React.js, Node.js</li>
                  <li>Built responsive user interfaces</li>
                  <li>Created RESTful APIs for backend services</li>
                </ul>
              </motion.div>

            </div>
          </motion.div>

          {/* 🎓 Education timeline layout absolute stacked accurately frame splits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '32px' }}>Education</h3>
            <div style={{ borderLeft: '2px solid #E5E7EB', paddingLeft: '24px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              <motion.div style={{ position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', position: 'absolute', left: '-31px', top: '6px', boxShadow: '0 0 8px var(--accent-glow)' }} />
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>SNS College of Engineering</h4>
                <p style={{ fontSize: '1rem', color: 'var(--accent-primary)', marginBottom: '6px', fontWeight: '600' }}>Bachelor of Computer Science</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>2022 – 2026</p>
              </motion.div>

              <motion.div style={{ position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', position: 'absolute', left: '-31px', top: '6px', boxShadow: '0 0 8px var(--accent-glow)' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>S H N V Higher Secondary School</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '4px', fontWeight: '600' }}>Higher Secondary School</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>2020 – 2021 | Sivakasi</p>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>

      </div>

      {/* 🚀 SECTION 5: PROJECTS */}
      <div id="projects" style={{ background: 'transparent', width: '100%' }}>
        <div className="container" style={{ padding: '100px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.02)' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '600px' }}
          >
            <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '12px' }}>
              My <span style={{ color: 'var(--accent-primary)' }}>Projects</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              A collection of technical products covering data analysis and user-centered interfaces.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px', width: '100%', maxWidth: '1100px' }}>
            
            {/* Project 1: E-Commerce */}
            <motion.div 
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              style={{ background: 'rgba(15, 15, 15, 0.65)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', background: '#F3F4F6' }}>
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" 
                  alt="React E-Commerce" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="hover-zoom"
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>React E-Commerce Platform</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                    A premium retail layout showcasing advanced shopping workflows, dynamic product catalogues, and modern aesthetic visuals.
                  </p>
                </div>
                <a href="https://react-e-commerce-gray-five.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ background: 'var(--accent-primary)', color: '#000000', border: 'none', padding: '12px 20px', borderRadius: '12px', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: '700', width: '100%', textAlign: 'center' }}>View Project</button>
                </a>
              </div>
            </motion.div>

            {/* Project 2: Edu Papers */}
            <motion.div 
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              style={{ background: 'rgba(15, 15, 15, 0.65)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', background: '#F3F4F6' }}>
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" 
                  alt="Edu Papers Portal" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="hover-zoom"
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>Questions Paper Bank</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                    A secure digital portal designed for students and staff providing automated question paper repository uploads and visual lookups.
                  </p>
                </div>
                <a href="https://qs-bank-edupappers-c2wxs5k13-ragunath-14s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ background: 'var(--accent-primary)', color: '#000000', border: 'none', padding: '12px 20px', borderRadius: '12px', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: '700', width: '100%', textAlign: 'center' }}>View Project</button>
                </a>
              </div>
            </motion.div>

            {/* Project 3: AI Stock Analyzer */}
            <motion.div 
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              style={{ background: 'rgba(15, 15, 15, 0.65)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', background: '#F3F4F6' }}>
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop" 
                  alt="AI Stock Analyzer" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="hover-zoom"
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>AI Stock Analyzer Toolkit</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                    An intelligent dashboard platform leveraging algorithm monitoring to analyze and visualize accurate stock market trends secure setups.
                  </p>
                </div>
                <a href="https://ai-stock-project.netlify.app/login" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ background: 'var(--accent-primary)', color: '#000000', border: 'none', padding: '12px 20px', borderRadius: '12px', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: '700', width: '100%', textAlign: 'center' }}>View Project</button>
                </a>
              </div>
            </motion.div>

            {/* Project 4: Day Clean ERP Application */}
            <motion.div 
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              style={{ background: 'rgba(15, 15, 15, 0.65)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', background: '#F3F4F6' }}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" 
                  alt="Day Clean ERP" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="hover-zoom"
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>Day Clean ERP Application</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                    Streamline inventory, billing, and sales management with real-time tracking, reporting, and secure user role management setups.
                  </p>
                </div>
                <a href="https://marine-eject-74043143.figma.site/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ background: 'var(--accent-primary)', color: '#000000', border: 'none', padding: '12px 20px', borderRadius: '12px', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: '700', width: '100%', textAlign: 'center' }}>View Project</button>
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      <div id="contact" style={{ width: '100%', paddingBottom: '60px' }}>
        <Contact />
      </div>

      <Footer />

    </motion.main>
  );
};

export default Home;
