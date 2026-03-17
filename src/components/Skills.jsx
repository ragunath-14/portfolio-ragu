import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiFramer } from 'react-icons/fi';

const skills = [
  { name: "React / Next.js", icon: <FiCode /> },
  { name: "Node.js / Express", icon: <FiCpu /> },
  { name: "Framer Motion", icon: <FiFramer /> },
  { name: "TypeScript", icon: <FiLayers /> },
  { name: "Tailwind CSS", icon: <FiCode /> },
  { name: "Docker / AWS", icon: <FiLayers /> }
];

const Skills = () => {
  return (
    <motion.div 
      id="skills"
      className="container"
      style={{
        width: '100%',
        margin: '20px auto 40px',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Skills & Stack</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 20px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ color: '#00f2fe', display: 'flex', fontSize: '1.2rem' }}>{skill.icon}</span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
