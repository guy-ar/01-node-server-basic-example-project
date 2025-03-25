const http = require('http');
const fs = require('fs');
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
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    const url = req.url;
    // check for the url
    if (url === '/') {
        // include input to get content that will be saved to a file
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && req.method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        // redirect user to the root page
        res.statusCode = 302;
        // default header that is accepted by the browser
        res.setHeader('Location', '/');
        return res.end();
    }

    // attach header to response
    res.setHeader('Content-Type', 'text/html');
    // write response
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

// start the server and listen on port 3000 to incoming requests
// ongoing loop
server.listen(3000);