const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    
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
        const body = [];
        // register event listener on data event = will be fired when new buffer is ready to be read
        // within defined function, we can access the buffer
        req.on('data', (chunk) => {
            // add new chunk to the body array
            body.push(chunk);
            console.log(chunk);
        });

        // register event listener on end event = will be fired when all data has been read
        req.on('end', () => {
            // create new buffer and concatenate all chunks into one
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // extract message from parsedBody - witout the property name
            const message = parsedBody.split('=')[1];
            // write message to a file
            fs.writeFileSync('message.txt', message);
        });

        // redirect user to the root page
        res.statusCode = 302;
        // default header that is accepted by the browser
        res.setHeader('Location', '/');
        return res.end();
    }

});

// start the server and listen on port 3000 to incoming requests
// ongoing loop
server.listen(3000);