const http = require('http');
// first alternaltive - create function for request listener
//and then use it for create server
// function requestHandler(req, res) {

// }

// http.createServer(requestHandler);

// same can be achived with arrow function
// http.createServer((req, res) => {
//     ...
// });

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    // attach header to response
    res.setHeader('Content-Type', 'text/html');
    // write response
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
});

// start the server and listen on port 3000 to incoming requests
// ongoing loop
server.listen(3000);