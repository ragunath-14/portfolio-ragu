const Footer = () => {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { label: 'About Me',   id: '#about' },
    { label: 'Projects',   id: '#projects' },
    { label: 'Skills',     id: '#resume' },
    { label: 'Contact',    id: '#contact' },
  ];

  return (
    <footer style={{
      background: '#070710',
      borderTop: '1px solid rgba(139,92,246,0.1)',
      color: '#6b7280',
      padding: '40px 0 24px',
    }}>
      <div className="container">

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '28px',
          marginBottom: '32px',
        }}>
          {/* Brand */}
          <div>
            <h4 style={{
              fontSize: '1.1rem', fontWeight: '900', marginBottom: '12px',
              background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Ragu.
            </h4>
            <p style={{ fontSize: '0.82rem', lineHeight: '1.7', color: '#6b7280' }}>
              Aspiring Full Stack Developer creating interactive digital interfaces with modern design and clean code.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.id}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
                  style={{
                    textDecoration: 'none', color: '#6b7280', fontSize: '0.82rem',
                    fontWeight: '500', cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#a78bfa')}
                  onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#6b7280' }}>
              <p style={{ fontWeight: '700', color: '#a1a1b5' }}>Ragunath</p>
              <p>
                <a href="tel:+918610766098" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91 86107 66098
                </a>
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                <a href="mailto:ragu08974@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  ragu08974@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>
            © 2026 Ragu Portfolio. All rights reserved.
          </p>
          <p style={{ fontSize: '0.72rem', color: '#374151' }}>
            Built with React + Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
