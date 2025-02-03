const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  try {
    console.log('Request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

const port = 3000;

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Perform any necessary cleanup here before exiting
  process.exit(1); // Indicate an error exit code
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});