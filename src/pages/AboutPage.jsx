import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiStar, FiTriangle } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '80px 0 40px', width: '100%' }}
    >
      <div className="container"> 
        
        {/* Main Glass Card */}
        <div style={{ 
          background: 'transparent', 
          backdropFilter: 'transparent', 
          padding: '40px', 
          border: '1px solid rgba(0, 0, 0, 0.04)', 
          width: '100%',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)'
        }}>
          
          {/* Header */}
          <h2 style={{ fontSize: '2rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-primary)', marginBottom: '8px', textAlign: 'center' }}>
            ABOUT RAGUNATH
          </h2>
          <div style={{ width: '40px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto 24px', borderRadius: '2px' }}></div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px', fontWeight: '600', textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            Hello! I'm <span style={{ color: 'var(--accent-primary)', fontWeight: '800' }}>Ragunath</span>, an aspiring Full Stack Developer bringing a unique blend of analytical logic and interactive creativity into building digital products layouts rightly!
          </p>

          {/* Grid setup splitting overview */}
          <div className="responsive-grid-columns-about" style={{ marginBottom: '48px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', fontWeight: '500' }}>
              <p style={{ marginBottom: '16px' }}>
                <strong>I enjoy turning ideas into real-world applications.</strong> I craft user-centered designs that turn complex workflow problems into effortless operations with a smooth blend of design clarity and secure structures setup rightly.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Currently pursuing a <strong>Bachelor of Computer Science at SNS College of Engineering</strong>, I'm specializing in building high-end responsive dashboards layout architectures. My focus ensures meaningful user interactions setup adequately.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontStyle: 'italic', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '12px' }}>
                "Great software creates delightful and meaningful user experiences, bridged effortlessly load setups correct!"
              </p>
            </div>
            <div style={{
              height: '240px', background: 'var(--accent-light)', border: '1px solid rgba(0,0,0,0.02)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '900', color: 'var(--accent-primary)', fontSize: '2rem',
              borderRadius: '20px', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.4)'
            }}>
              R | N
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '40px 0' }}></div>

          {/* 💼 🎒 Experience & Education section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '48px' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-primary)' }}>
                <FiBriefcase style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>EXPERIENCE</h3>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>ST software solutions</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '12px' }}>Full-Stack Development Intern</p>
                <ul style={{ paddingLeft: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>Developed full-stack web applications using MERN (MongoDB, Express, React, Node)</li>
                  <li>Built responsive user interfaces and created RESTful APIs for backend workflow setups</li>
                </ul>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-primary)' }}>
                <FiBookOpen style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>EDUCATION</h3>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>SNS College of Engineering</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '4px' }}>Bachelor of Computer Science</p>
                <p style={{ fontSize: '0.82rem', color: '#6B7280' }}>2022 – 2026</p>
              </div>
            </div>

          </div>

          <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '40px 0' }}></div>

          {/* 🪄 The Magic Touch */}
          <h3 style={{ fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FiStar style={{ color: 'var(--accent-primary)' }} /> THE MAGICIAN TOUCH
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '32px', fontWeight: '600' }}>
            Apart from coding, I am also a <strong>magician</strong>. Performing magic has taught me creativity, confidence, and the importance of audience engagement. Just like an illusion creates surprise, I design layouts software interfaces that deliver delightful, memorable experiences layout correctly frame.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {['Logic', 'Creativity', 'Engagement'].map((item) => (
              <div key={item} style={{ background: 'var(--accent-light)', border: '1px solid rgba(0,0,0,0.02)', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>{item}</h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
