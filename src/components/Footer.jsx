const Footer = () => {
  return (
    <footer style={{ background: '#111111', color: '#8c8c8c', padding: '40px 0 24px', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
        
        {/* Short info left */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
            RAGU PORTFOLIO
          </h4>
          <p style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
            Aspiring Full Stack Developer creating highly accurate interactive digital interfaces loaded securely correctly.
          </p>
        </div>

        {/* Quick Links Center */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
            QUICK LINKS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
            <span>ABOUT ME</span>
            <span>PROJECTS</span>
            <span>CONTACT</span>
            <span>SKILLS</span>
          </div>
        </div>

        {/* Contact right */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
            CONTACT US
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#d4d4d8' }}>
            <p style={{ fontWeight: '700', color: '#ffffff' }}>RAGUNATH ENTERPRISE</p>
            <p>Tel: <a href="tel:+918610766098" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8610766098</a></p>
            <p>E-mail: ragu08974@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Credits loaded bottom absolute */}
      <div style={{ borderTop: '1px solid #222', paddingTop: '16px', textAlign: 'center', fontSize: '0.75rem', color: '#666' }}>
        © 2026 Ragu Portfolio. All rights reserved. Design inspired by references loops overlays correctly.
      </div>
    </footer>
  );
};

export default Footer;
