import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const tabs = [
    { id: '#home',       label: 'Home' },
    { id: '#about',      label: 'About' },
    { id: '#resume',     label: 'Skills' },
    { id: '#experience', label: 'Experience' },
    { id: '#contact',    label: 'Contact' },
  ];

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg,#8B5CF6,#3B82F6,#14B8A6)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          zIndex: 1100,
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%',
          position: 'fixed',
          top: '2px',
          left: '0',
          zIndex: 1000,
          background: scrolled ? 'rgba(5,5,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(139,92,246,0.12)' : '1px solid transparent',
          transition: 'all 0.4s ease',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('#home')}
            style={{
              fontSize: '1.4rem', fontWeight: '900', fontFamily: 'var(--font-primary)',
              background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              cursor: 'pointer', userSelect: 'none',
            }}
          >
            Ragu.
          </motion.div>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
            {tabs.map((tab) => (
              <motion.a
                key={tab.id}
                href={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); scrollTo(tab.id); }}
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  color: activeTab === tab.id ? '#a78bfa' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: activeTab === tab.id ? 'rgba(139,92,246,0.1)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="navUnderline" style={{
                    position: 'absolute', bottom: 2, left: '20%', width: '60%',
                    height: '2px', background: 'linear-gradient(90deg,#8B5CF6,#3B82F6)',
                    borderRadius: '1px',
                  }} />
                )}
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 20px rgba(139,92,246,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#contact')}
              style={{
                marginLeft: '12px',
                background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
                color: '#fff', border: 'none',
                padding: '8px 18px', borderRadius: '10px',
                fontSize: '0.82rem', fontWeight: '700', cursor: 'pointer',
              }}
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              fontSize: '1.4rem', color: '#a78bfa', cursor: 'pointer',
              background: 'none', border: 'none', padding: '4px 8px',
              display: 'flex', alignItems: 'center',
            }}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            overflow: 'hidden',
            background: 'rgba(5,5,15,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: mobileOpen ? '1px solid rgba(139,92,246,0.1)' : 'none',
            width: '100%',
          }}
        >
          <div style={{ padding: '8px 16px 16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.id}
                onClick={(e) => { e.preventDefault(); scrollTo(tab.id); }}
                style={{
                  textDecoration: 'none',
                  color: activeTab === tab.id ? '#a78bfa' : 'var(--text-secondary)',
                  fontSize: '0.95rem', fontWeight: '600',
                  padding: '12px 16px', borderRadius: '10px', display: 'block',
                  background: activeTab === tab.id ? 'rgba(139,92,246,0.1)' : 'transparent',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
              </a>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              style={{
                marginTop: '8px',
                background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
                color: '#fff', border: 'none',
                padding: '13px', borderRadius: '12px',
                fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', width: '100%',
              }}
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Navbar;
