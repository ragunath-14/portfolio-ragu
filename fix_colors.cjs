const fs = require('fs');
try {
  let content = fs.readFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/Home.jsx', 'utf8');

  // Replace standard black text with theme variable definitions
  content = content.replace(/color: '#111827'/g, "color: 'var(--text-primary)'");
  content = content.replace(/color: '#4B5563'/g, "color: 'var(--text-secondary)'");
  content = content.replace(/color: '#6B7280'/g, "color: 'var(--text-secondary)'");

  // Make Projects cards dark with glass effect for correct contrast overlays
  content = content.replace(/background: '#F8FAFC'/g, "background: 'rgba(15, 15, 15, 0.65)', backdropFilter: 'blur(10px)'");
  content = content.replace(/background: '#ffffff'/g, "background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)'"); // Inner boxes

  // Remove the glass effect offsets on sections added previously to retain wallpaper view
  content = content.replace(/background: 'rgba\(255, 255, 255, 0.4\)', backdropFilter: 'blur\(10px\)'/g, "background: 'transparent'");
  content = content.replace(/background: 'rgba\(255, 255, 255, 0.45\)', backdropFilter: 'blur\(16px\)'/g, "background: 'transparent'");

  fs.writeFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/Home.jsx', content);
  console.log('Success');
} catch (e) {
  console.error(e);
}
