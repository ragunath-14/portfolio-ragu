const fs = require('fs');
try {
  let content = fs.readFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/AboutPage.jsx', 'utf8');

  // Replace colors to white variables
  content = content.replace(/color: '#111827'/g, "color: 'var(--text-primary)'");
  content = content.replace(/color: '#374151'/g, "color: 'var(--text-secondary)'");
  content = content.replace(/color: '#4B5563'/g, "color: 'var(--text-secondary)'");
  content = content.replace(/color: '#6A7280'/g, "color: 'var(--text-secondary)'");

  // Remove White Card container background framing
  content = content.replace(/background: 'rgba\(255, 255, 255, 0.85\)'/g, "background: 'transparent'");
  content = content.replace(/backdropFilter: 'blur\(16px\)'/g, "backdropFilter: 'transparent'");

  // Inner boxes like education/experience might have #F9FAFB background setup
  content = content.replace(/background: '#F9FAFB'/g, "background: 'rgba(255, 255, 255, 0.05)'");

  fs.writeFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/AboutPage.jsx', content);
  console.log('Success');
} catch (e) {
  console.error(e);
}
