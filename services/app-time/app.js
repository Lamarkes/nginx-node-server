const http = require('http');
const date = new Date();

const hour = date.getHours();
let day_moment;

if (hour > 0 && hour < 12) {
  day_moment = 'Good Morning, its time to get up!';
} else if (hour > 12 && hour < 16) {
  day_moment = 'Good afternoon, lets make some coffee!';
} else {
  day_moment = 'Good evening, turn the lights on now!';
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('Its ' + hour + ':00 -> ' + day_moment);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

