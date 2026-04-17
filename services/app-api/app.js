
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });


    if(req.url === '/'){
        res.end(JSON.stringify({ message: 'Welcome to the Home Page' }));
    }else if(req.url === '/users'){
        res.end(JSON.stringify({
            id:1,
            name: 'Teste',
            server: process.env.HOSTNAME
        }));
    }
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server running at http://localhost:3002');
});