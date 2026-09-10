const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const source = fs.existsSync(path.join(dist, 'index.dev.html'))
  ? path.join(dist, 'index.dev.html')
  : path.join(dist, 'index.html');

let html = fs.readFileSync(source, 'utf8');
function embedImages(directory, publicPath = '/images') {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relativePath = `${publicPath}/${entry.name}`;
    const diskPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      embedImages(diskPath, relativePath);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    const mimeType = extension === '.jpg' || extension === '.jpeg'
      ? 'image/jpeg'
      : extension === '.webp'
        ? 'image/webp'
        : extension === '.png'
          ? 'image/png'
          : null;
    if (!mimeType) continue;

    const image = fs.readFileSync(diskPath);
    const dataUri = `data:${mimeType};base64,${image.toString('base64')}`;
    html = html.replaceAll(relativePath, dataUri);
  }
}

embedImages(path.join(root, 'public', 'images'));

fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
for (const destination of [
  path.join(root, 'index.html'),
  path.join(dist, 'index.html'),
  path.join(root, 'docs', 'index.html'),
]) {
  fs.writeFileSync(destination, html);
}
