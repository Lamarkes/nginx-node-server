const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-type': 'text/plain'});
	res.end('Hello, this is a Node Server');
});



const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
