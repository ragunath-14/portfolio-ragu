import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="container" style={{ margin: '80px auto 40px' }}>
      <div className="responsive-grid" style={{ alignItems: 'center' }}>
        
        {/* Left Side Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left' }}
        >
          {/* Available badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              display: 'inline-flex', alignHeight: 'center', gap: '8px',
              padding: '6px 12px', background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px',
              fontSize: '0.75rem', color: '#fff', marginBottom: '16px'
            }}
          >
            <span style={{
              width: '6px', height: '6px', background: '#fff',
              borderRadius: '50%', boxShadow: '0 0 4px #fff'
            }} />
            Open for opportunities
          </motion.div>

          <h1 style={{
            fontSize: 'max(2.8rem, 4vw)', fontWeight: '900', letterSpacing: '-1.5px',
            lineHeight: '1.1', marginBottom: '16px', color: '#fff'
          }}>
            Crafting <br /> Next-Gen <span className="gradient-text">Websites</span>
          </h1>
          
          <p style={{
            color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.6',
            maxWidth: '450px', marginBottom: '32px'
          }}>
            Hi, I'm Ragu. I build beautiful interactive digital experiences and accessible fluid frontends targeting global users.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start' }}>
            <button className="primary" style={{ padding: '14px 24px' }}>
              View Projects <FiArrowRight />
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#fff', padding: '12px', borderRadius: '14px', cursor: 'pointer'
            }}>
              <FiLinkedin fontSize="1.2rem" />
            </button>
          </div>
        </motion.div>

        {/* Right Side absolute dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              width: '280px', height: '280px', borderRadius: '32px',
              background: 'rgba(255,255,255,0.01)',
              position: 'relative', overflow: 'hidden', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.06)', display: 'flex',
              justifyContent: 'center', alignItems: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              background: '#ffffff', filter: 'blur(40px)',
              position: 'absolute', opacity: '0.1'
            }} />
            <span style={{ fontSize: '4rem', fontWeight: '900', color: '#fff' }}>R</span>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
