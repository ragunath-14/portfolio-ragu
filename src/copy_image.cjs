const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\ragu0\\.gemini\\antigravity\\brain\\fb36f8ec-6960-4318-b691-e3866f697268\\media__1773748323422.jpg";
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
