const fs = require('fs');

const files = [
  'c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/Home.jsx',
  'c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/AboutPage.jsx'
];

files.forEach(p => {
  try {
    let content = fs.readFileSync(p, 'utf8');

    // Replace serif font with modern geometric Sans-serif Outfit
    content = content.replace(/fontFamily: '"Fraunces", serif'/g, "fontFamily: 'var(--font-primary)'");
    content = content.replace(/fontFamily: '"Fraunces", serif'/g, "fontFamily: 'var(--font-primary)'");

    fs.writeFileSync(p, content);
    console.log(`Updated ${p}`);
  } catch(e) {
    console.error(e);
  }
});
