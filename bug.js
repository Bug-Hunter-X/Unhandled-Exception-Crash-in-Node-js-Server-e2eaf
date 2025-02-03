const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  console.log('Request received');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// The bug is that if the server encounters an unhandled exception, it will crash without logging an error or gracefully shutting down.