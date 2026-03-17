import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const tabs = [
    { id: '#home', label: 'Home' },
    { id: '#about', label: 'About' },
    { id: '#resume', label: 'Skills' },
    { id: '#experience', label: 'Experience' },
    { id: '#contact', label: 'Contact' }
  ];

  return (
    <header style={{
      width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1000',
      background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '65px'
      }}>
        
        {/* Logo Left */}
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: '800', 
          color: 'var(--accent-primary)',
          fontFamily: 'var(--font-primary)'
        }}>
          Ragu
        </div>

        {/* Desktop Nav Links Right */}
        <nav style={{ display: 'flex', gap: '24px' }} className="desktop-nav">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.id}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'color 0.2s',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(tab.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon (Visually matching image) */}
        <div className="mobile-menu-btn" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', cursor: 'pointer' }}>
          <FiMenu />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
