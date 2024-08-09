const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
    const method = req.method.toUpperCase();

    // Define routes
    const routes = {
        '': (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the Home Page</h1>');
        },
        'about': (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>`);
        },
        'api': (req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Hello, this is the API endpoint' }));
        },
        'notfound': (req, res) => {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    };

    // Choose the handler based on the path
    const chosenHandler = routes[path] || routes['notfound'];

    // Log request details
    console.log(`Received ${method} request for path: /${path}`);
    console.log('Headers:', req.headers);

    // Set response headers
    res.setHeader('X-Powered-By', 'Node.js');

    // Execute the chosen handler
    chosenHandler(req, res);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
