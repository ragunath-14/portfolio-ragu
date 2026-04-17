import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "React E-Commerce Platform",
    description: "A premium e-commerce layout showcasing advanced shopping workflows, dynamic catalogues, filtering, and sleek aesthetic visuals.",
    tags: ["React", "UI/UX", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1542312213-909249ba6588?q=80&w=600&auto=format&fit=crop",
    link: "https://react-e-commerce-gray-five.vercel.app/",
  },
  {
    title: "Question Paper Bank",
    description: "A comprehensive digital portal designed for students and staff providing secure uploads and access to full question bank resources.",
    tags: ["React", "Dashboard", "System"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
    link: "https://qs-bank-edupappers.vercel.app/",
  },
  {
    title: "AI Stock Analyzer",
    description: "An intelligent dashboard platform leveraging algorithm monitoring to analyze and visualize accurate stock market trends secure setups.",
    tags: ["React", "AI", "Dashboard"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
    link: "https://ai-stock-project.netlify.app/login",
  },
  {
    title: "Day Clean ERP Application",
    description: "Streamline inventory, billing, and sales management with real-time tracking, reporting, and secure user role management setups.",
    tags: ["Figma", "ERP", "UI/UX", "System"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    link: "https://marine-eject-74043143.figma.site/",
  }
];


const Projects = () => {
  return (
    <motion.div 
      id="projects"
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff' }}>Recent Projects</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
      </div>

      <div className="responsive-grid grid-3-col" style={{ gap: '24px' }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="glass-panel"
            style={{
              width: '100%',
              padding: '0', // Overriding padding for image layout
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Image Banner */}
            <div style={{
              width: '100%',
              height: '180px',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(0,0,0,0.2)'
            }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85,
                  transition: 'transform 0.3s ease',
                }}
                className="hover-zoom"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50px',
                background: 'linear-gradient(to top, rgba(15,15,15,1), rgba(15,15,15,0))'
              }} />
            </div>

            {/* Content Container */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Tags */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: '0.65rem',
                    padding: '4px 10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#94a3b8',
                    borderRadius: '20px',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px', color: '#fff' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#9ca3af', lineHeight: '1.6', marginBottom: '24px' }}>
                {project.description}
              </p>

              {/* Links at bottom */}
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', flex: 1 }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.02, background: '#111827' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      background: '#000000',
                      border: 'none',
                      color: '#fff', 
                      padding: '12px', 
                      borderRadius: '12px', 
                      cursor: 'pointer', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    View Project <FiExternalLink style={{ fontSize: '1rem' }} />
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
