const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = {
  html: 'text/html',
  js: 'text/javascript',
  css: 'text/css',
  png: 'image/png',
  ico: 'image/x-icon',
  json: 'application/json',
  svg: 'image/svg+xml',
};

const dir = path.join(__dirname, 'dist');

http.createServer((req, res) => {
  let filePath = req.url === '/' ? 'index.html' : req.url;
  let fullPath = path.join(dir, filePath);
  try {
    let content = fs.readFileSync(fullPath);
    let ext = path.extname(fullPath).slice(1);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(content);
  } catch (e) {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(8080, () => console.log('Servidor rodando em http://localhost:8080'));
