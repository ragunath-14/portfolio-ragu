const fs = require('fs');
try {
  let content = fs.readFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/components/Contact.jsx', 'utf8');

  // Replace absolute dark colors to light
  content = content.replace(/color: '#1a1a1a'/g, "color: 'var(--text-primary)'");
  content = content.replace(/color: '#666'/g, "color: 'var(--text-secondary)'");

  // Replace background light cards to dark glass framing setup
  content = content.replace(/background: '#fcfcfc'/g, "background: 'rgba(25, 25, 25, 0.45)', backdropFilter: 'blur(8px)'");
  content = content.replace(/background: '#ffffff'/g, "background: 'rgba(15, 15, 15, 0.55)', backdropFilter: 'blur(10px)'");
  content = content.replace(/border: '1px solid #e5e5e5'/g, "border: '1px solid rgba(255,255,255,0.05)'");

  fs.writeFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/components/Contact.jsx', content);
  console.log('Success');
} catch (e) {
  console.error(e);
}
