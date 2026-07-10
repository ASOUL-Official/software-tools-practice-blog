const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 4000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

function resolveUrl(url) {
  const clean = decodeURIComponent(url.split('?')[0]);
  const requested = clean === '/' ? '/index.html' : clean;
  const filePath = path.normalize(path.join(root, requested));
  if (!filePath.startsWith(root)) return null;
  return filePath;
}

function serve(req, res) {
  const filePath = resolveUrl(req.url);
  if (!filePath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const type = mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  });
}

if (process.argv.includes('--check')) {
  const required = [
    'index.html',
    'assets/styles.css',
    'assets/app.js',
    'docs/report-outline.md',
    'docs/assessment-map.md',
    'scripts/deploy-nginx.sh'
  ];
  const missing = required.filter((item) => !fs.existsSync(path.join(root, item)));
  if (missing.length) {
    console.error(`Missing files: ${missing.join(', ')}`);
    process.exit(1);
  }
  console.log('Project check passed.');
  process.exit(0);
}

http.createServer(serve).listen(port, () => {
  console.log(`Practice blog running at http://localhost:${port}`);
});
