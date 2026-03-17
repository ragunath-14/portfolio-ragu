const fs = require('fs');
try {
  let content = fs.readFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/Home.jsx', 'utf8');

  // Fix buttons text color which was white on white
  content = content.replace(/color: '#fff'/g, "color: '#000000'");

  // Widen cards min-width forcing cohesive professional 2x2 rows structure setup accurately frame
  content = content.replace(/minmax\(320px, 1fr\)/g, "minmax(420px, 1fr)");

  fs.writeFileSync('c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/pages/Home.jsx', content);
  console.log('Success');
} catch (e) {
  console.error(e);
}
