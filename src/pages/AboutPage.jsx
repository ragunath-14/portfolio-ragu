import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiStar } from 'react-icons/fi';

const AboutPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      style={{ padding: '80px 0 40px', width: '100%' }}
    >
      <div className="container">

        {/* Header */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)',
            color: '#a78bfa', fontSize: '0.72rem', fontWeight: '700',
            letterSpacing: '2px', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: '20px', marginBottom: '14px',
          }}>
            Who I Am
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: '900',
            color: '#fff', marginBottom: '8px',
          }}>
            About{' '}
            <span style={{
              background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Ragunath
            </span>
          </h2>
          <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg,#8B5CF6,#3B82F6)', margin: '0 auto 20px', borderRadius: '2px' }} />
          <p style={{
            color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            lineHeight: '1.8', maxWidth: '680px', margin: '0 auto',
          }}>
            Hello! I'm{' '}
            <span style={{ color: '#a78bfa', fontWeight: '800' }}>Ragunath</span>
            , an aspiring Full Stack Developer bringing a unique blend of analytical logic and interactive creativity into building digital products.
          </p>
        </motion.div>

        {/* Bio + decorative box */}
        <motion.div variants={fadeUp} className="responsive-grid-columns-about" style={{ marginBottom: '48px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.88rem, 2vw, 1rem)', lineHeight: '1.8', fontWeight: '500' }}>
            <p style={{ marginBottom: '16px' }}>
              <strong style={{ color: '#fff' }}>I enjoy turning ideas into real-world applications.</strong>{' '}
              I craft user-centered designs that turn complex workflow problems into effortless operations with a smooth blend of design clarity and secure architecture.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Currently pursuing a{' '}
              <strong style={{ color: '#fff' }}>Bachelor of Computer Science at SNS College of Engineering</strong>
              , I'm specializing in building high-end responsive dashboards and layout architectures.
            </p>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic',
              borderLeft: '3px solid #8B5CF6', paddingLeft: '14px',
            }}>
              "Great software creates delightful and meaningful user experiences."
            </p>
          </div>

          <div style={{
            height: '200px',
            background: 'linear-gradient(135deg,rgba(139,92,246,0.15),rgba(59,130,246,0.1))',
            border: '1px solid rgba(139,92,246,0.2)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontWeight: '900', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            background2: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
            borderRadius: '20px',
            WebkitBackgroundClip: 'text',
          }}>
            <span style={{
              background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>R | N</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(139,92,246,0.1)', margin: '8px 0 40px' }} />

        {/* Experience & Education cards */}
        <motion.div variants={fadeUp}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px', marginBottom: '48px',
          }}
        >
          {/* Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <FiBriefcase style={{ color: '#a78bfa', fontSize: '1.1rem', flexShrink: 0 }} />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Experience</h3>
            </div>
            <div style={{
              background: 'rgba(139,92,246,0.05)', padding: '18px', borderRadius: '16px',
              border: '1px solid rgba(139,92,246,0.15)',
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>ST Software Solutions</h4>
              <p style={{ fontSize: '0.83rem', color: '#a78bfa', fontWeight: '600', marginBottom: '10px' }}>Full-Stack Development Intern</p>
              <ul style={{ paddingLeft: '16px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <li>Full-stack apps with MERN stack</li>
                <li>Responsive UI & RESTful APIs</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <FiBookOpen style={{ color: '#a78bfa', fontSize: '1.1rem', flexShrink: 0 }} />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Education</h3>
            </div>
            <div style={{
              background: 'rgba(59,130,246,0.05)', padding: '18px', borderRadius: '16px',
              border: '1px solid rgba(59,130,246,0.15)',
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>SNS College of Engineering</h4>
              <p style={{ fontSize: '0.83rem', color: '#60a5fa', fontWeight: '600', marginBottom: '3px' }}>Bachelor of Computer Science</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>2022 – 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(139,92,246,0.1)', margin: '0 0 36px' }} />

        {/* Magic touch */}
        <motion.div variants={fadeUp}>
          <h3 style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: '900',
            textTransform: 'uppercase', marginBottom: '10px', color: '#fff',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <FiStar style={{ color: '#a78bfa', flexShrink: 0 }} /> The Magician Touch
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.8', marginBottom: '24px' }}>
            Apart from coding, I am also a <strong style={{ color: '#fff' }}>magician</strong>. Performing magic has taught me creativity, confidence, and the importance of audience engagement — just like I design interfaces that deliver delightful, memorable experiences.
          </p>

          <div className="magic-grid">
            {['Logic', 'Creativity', 'Engagement'].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.04, borderColor: 'rgba(139,92,246,0.5)' }}
                style={{
                  background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
                  padding: '16px', textAlign: 'center', borderRadius: '12px',
                  transition: 'border-color 0.2s',
                }}
              >
                <h4 style={{ fontSize: '0.88rem', fontWeight: '800', color: '#a78bfa', textTransform: 'uppercase' }}>{item}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
