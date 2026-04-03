const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/juanmontes/Proyectos/WEB JFM/IMAGENES LOGO';
const targetDir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let c = 0;
for (let i = 1; i <= 300; i++) {
  const padded = String(i).padStart(3, '0');
  const sourceFile = path.join(sourceDir, `ezgif-frame-${padded}.png`);
  if (fs.existsSync(sourceFile)) {
    const targetFile = path.join(targetDir, `frame_${c}.png`);
    fs.copyFileSync(sourceFile, targetFile);
    c++;
  }
}
console.log(`Copied ${c} files.`);
