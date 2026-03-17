const fs = require('fs');
const path = require('path');

const src1 = "C:\\Users\\ragu0\\.gemini\\antigravity\\brain\\4713fa91-2401-4bee-ba6e-84c262a34ad1\\ecommerce_preview_1773736793864.png";
const src2 = "C:\\Users\\ragu0\\.gemini\\antigravity\\brain\\4713fa91-2401-4bee-ba6e-84c262a34ad1\\qsbank_preview_1773736824525.png";

const destDir = path.join(__dirname, 'src', 'assets', 'projects');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created directory:', destDir);
  }

  fs.copyFileSync(src1, path.join(destDir, 'ecommerce.png'));
  console.log('Copied image 1');
  
  fs.copyFileSync(src2, path.join(destDir, 'qsbank.png'));
  console.log('Copied image 2');

  console.log('Images copied successfully to', destDir);
} catch (err) {
  console.error('Error copying files:', err);
}
