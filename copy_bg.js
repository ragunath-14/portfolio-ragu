const fs = require('fs');
try {
  fs.copyFileSync(
    'C:/Users/ragu0/.gemini/antigravity/brain/99fa0633-fb14-40f4-8a38-1b3c2e581db2/abstract_bg_1773737681321.png',
    'c:/Users/ragu0/Desktop/portfolio ragu/ragu/src/assets/abstract_bg.png'
  );
  console.log('Success');
} catch (e) {
  console.error(e);
}
