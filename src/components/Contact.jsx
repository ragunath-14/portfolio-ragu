import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="container"
      style={{ padding: '80px 16px 20px' }}
    >
      {/* Header */}
      <motion.div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)',
          color: '#a78bfa', fontSize: '0.72rem', fontWeight: '700',
          letterSpacing: '2px', textTransform: 'uppercase',
          padding: '5px 14px', borderRadius: '20px', marginBottom: '14px',
        }}>
          Say Hello
        </span>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: '900', color: '#fff', marginBottom: '10px',
        }}>
          Get in{' '}
          <span style={{
            background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Touch
          </span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto', lineHeight: '1.6' }}>
          Available for freelance projects, remote positions, and consulting sessions.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="contact-grid" style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Info panel */}
        <div style={{
          background: 'rgba(139,92,246,0.06)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(139,92,246,0.15)',
          padding: '24px', borderRadius: '20px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>Let's talk!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Ready to collaborate? Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(139,92,246,0.15)', padding: '10px', borderRadius: '10px',
              color: '#a78bfa', display: 'flex', alignItems: 'center', flexShrink: 0,
            }}>
              <FiMail fontSize="1.1rem" />
            </div>
            <div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Email</p>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#fff', wordBreak: 'break-all' }}>ragu08974@gmail.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['Open to Work', 'Full Stack', 'Remote'].map((badge) => (
              <span key={badge} style={{
                background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)',
                color: '#a78bfa', fontSize: '0.75rem', fontWeight: '700',
                padding: '4px 12px', borderRadius: '20px',
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const triggerMailto = () => {
              window.location.href = `mailto:ragu08974@gmail.com?subject=Message from ${name}&body=From: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            };
            try {
              const resp = await fetch('https://formsubmit.co/ajax/ragu08974@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ name, email, message }),
              });
              const data = await resp.json();
              if (data.success === 'true' || resp.ok) { alert('Message sent successfully! 🎉'); form.reset(); }
              else triggerMailto();
            } catch { triggerMailto(); }
          }}
          style={{
            background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(139,92,246,0.12)',
            padding: '24px', borderRadius: '20px',
            display: 'flex', flexDirection: 'column', gap: '14px',
          }}
        >
          {[
            { label: 'NAME',    name: 'name',    type: 'text',  placeholder: 'Your name' },
            { label: 'EMAIL',   name: 'email',   type: 'email', placeholder: 'your@email.com' },
          ].map((f) => (
            <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '1px' }}>{f.label}</label>
              <input
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                required
                style={{
                  background: 'rgba(20,20,40,0.6)', border: '1px solid rgba(139,92,246,0.2)',
                  padding: '13px 16px', color: '#fff', fontSize: '0.9rem',
                  borderRadius: '10px', outline: 'none', width: '100%',
                  transition: 'border-color 0.2s', fontFamily: 'var(--font-primary)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.6)')}
                onBlur={(e)  => (e.target.style.borderColor = 'rgba(139,92,246,0.2)')}
              />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '1px' }}>MESSAGE</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project..."
              required
              style={{
                background: 'rgba(20,20,40,0.6)', border: '1px solid rgba(139,92,246,0.2)',
                padding: '13px 16px', color: '#fff', fontSize: '0.9rem',
                resize: 'vertical', borderRadius: '10px', outline: 'none',
                width: '100%', transition: 'border-color 0.2s', fontFamily: 'var(--font-primary)',
                minHeight: '110px',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.6)')}
              onBlur={(e)  => (e.target.style.borderColor = 'rgba(139,92,246,0.2)')}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 10px 24px rgba(139,92,246,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
              border: 'none', color: '#fff', padding: '14px',
              borderRadius: '12px', cursor: 'pointer',
              fontSize: '0.95rem', fontWeight: '700', fontFamily: 'var(--font-primary)',
            }}
          >
            Send Message <FiSend />
          </motion.button>
        </form>

      </div>
    </motion.div>
  );
};

export default Contact;
