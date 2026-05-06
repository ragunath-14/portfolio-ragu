const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\ragu0\\.gemini\\antigravity\\brain\\cb490cd6-f578-4b59-9c90-c6b32d3b73df\\media__1778034920317.jpg";
const dst = "c:\\Users\\ragu0\\Desktop\\portfolio ragu\\ragu\\src\\assets\\hero_avatar.jpg";

try {
    if (fs.existsSync(src)) {
        console.log(`Source exists: ${src}`);
    } else {
        console.log(`Source does not exist: ${src}`);
        process.exit(1);
    }
    
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
    console.log(`Successfully copied to ${dst}`);
} catch (e) {
    console.error(`Error: ${e.message}`);
}
