const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <html>
            <body>
                <h1>My Jenkins Pipeline App</h1>
                <h2>MILESTONE 2</h2>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
