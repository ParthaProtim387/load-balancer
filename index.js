const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const deploy_path = path.join(__dirname, 'dist', 'simple-app', 'browser');

app.use(express.static(deploy_path));

app.get('*', (req, res) => {
  res.sendFile(deploy_path);
});

app.get('/api/processid', (req, res) => {
    res.json({ processId: process.pid });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});