const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const docs = path.join(root, 'docs');
const source = fs.existsSync(path.join(dist, 'index.dev.html'))
  ? path.join(dist, 'index.dev.html')
  : path.join(dist, 'index.html');

// Mantém o HTML leve: as imagens continuam como arquivos separados.
// A cópia para /docs permite que o GitHub Pages as sirva junto do site.
fs.mkdirSync(docs, { recursive: true });
fs.copyFileSync(source, path.join(root, 'index.html'));
fs.copyFileSync(source, path.join(docs, 'index.html'));
fs.cpSync(path.join(dist, 'images'), path.join(docs, 'images'), {
  recursive: true,
  force: true,
});
