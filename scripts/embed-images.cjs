const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const source = fs.existsSync(path.join(dist, 'index.dev.html'))
  ? path.join(dist, 'index.dev.html')
  : path.join(dist, 'index.html');

let html = fs.readFileSync(source, 'utf8');
for (const file of fs.readdirSync(path.join(root, 'public', 'images'))) {
  if (!file.endsWith('.png')) continue;

  const image = fs.readFileSync(path.join(root, 'public', 'images', file));
  const dataUri = `data:image/png;base64,${image.toString('base64')}`;
  html = html.replaceAll(`/images/${file}`, dataUri);
}

fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
for (const destination of [
  path.join(root, 'index.html'),
  path.join(dist, 'index.html'),
  path.join(root, 'docs', 'index.html'),
]) {
  fs.writeFileSync(destination, html);
}
