const http = require('http');
const routes = require('./routes')


const server = http.createServer(routes);

// start the server and listen on port 3000 to incoming requests
// ongoing loop
server.listen(3000);