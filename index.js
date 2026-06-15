const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cygan:Cygan20762%40@cluster0.huylzre.mongodb.net/myapp?appName=Cluster0')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log('MongoDB error:', err));

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <html>
            <body>
                <h1>My Jenkins Pipeline App</h1>
                <h2>MILESTONE 2</h2>
                <h2>MILESTONE 3</h2>
                <h2>MILESTONE 4</h2>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
