import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-primary)', textTransform: 'uppercase' }}>Get in Touch</h2>
        <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
      </div>

      <div className="responsive-grid" style={{ gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        {/* Left Information */}
        <div style={{
          background: 'rgba(25, 25, 25, 0.45)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.05)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px' }}>Let's talk about it!</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '24px' }}>
            Available for freelance projects, remote positions, and consulting sessions setups layouts.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ background: '#f4f2ee', padding: '10px', color: '#947a50', display: 'flex' }}><FiMail fontSize="1.2rem"/></div>
              <p style={{ fontSize: '0.85rem', fontWeight: '600' }}>ragu08974@gmail.com</p>
            </div>

          </div>
        </div>

        {/* Right Form with Headless AJAX + Fallback Handler */}
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
              const response = await fetch("https://formsubmit.co/ajax/ragu08974@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({ name, email, message })
              });
              const data = await response.json();
              if (data.success === "true" || response.ok) {
                alert("Message forwarded to Gmail successfully!");
                form.reset();
              } else {
                triggerMailto();
              }
            } catch (error) {
              triggerMailto(); // Fallback if certificates issue persists
            }
          }}
          style={{
            background: 'rgba(15, 15, 15, 0.55)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '24px',
            display: 'flex', flexDirection: 'column', gap: '12px'
          }}
        >

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '0.5px' }}>NAME</label>
            <motion.input 
              whileFocus={{ scale: 1.01, borderColor: 'var(--accent-primary)' }}
              type="text" 
              name="name"
              required
              style={{
                background: 'rgba(25, 25, 25, 0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)',
                padding: '14px 16px', color: 'var(--text-primary)', fontSize: '0.88rem', borderRadius: '10px', outline: 'none', transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '0.5px' }}>EMAIL</label>
            <motion.input 
              whileFocus={{ scale: 1.01, borderColor: 'var(--accent-primary)' }}
              type="email" 
              name="email"
              required
              style={{
                background: 'rgba(25, 25, 25, 0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)',
                padding: '14px 16px', color: 'var(--text-primary)', fontSize: '0.88rem', borderRadius: '10px', outline: 'none', transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: '700', letterSpacing: '0.5px' }}>MESSAGE</label>
            <motion.textarea 
              whileFocus={{ scale: 1.01, borderColor: 'var(--accent-primary)' }}
              name="message"
              rows="4"
              required
              style={{
                background: 'rgba(25, 25, 25, 0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)',
                padding: '14px 16px', color: 'var(--text-primary)', fontSize: '0.88rem', resize: 'none', borderRadius: '10px', outline: 'none', transition: 'border-color 0.2s'
              }}
            />
          </div>
          
          <button type="submit" className="primary-btn" style={{ width: '100%', justifyContent: 'center', padding: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Send Message <FiSend />
          </button>
        </form>

      </div>
    </motion.div>
  );
};

export default Contact;
