const fs = require('fs');

const requestHandler = (req, res) => {
    // get url from request
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
        return req.on('end', () => {
            // create new buffer and concatenate all chunks into one
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // extract message from parsedBody - witout the property name
            const message = parsedBody.split('=')[1];
            // write message to a file
            fs.writeFile('message.txt', message, (err) => {
                // set status code
                res.statusCode = 302;
                // set header to redirect user to the root page
                res.setHeader('Location', '/');
                return res.end();
            })
        });
    }

    // attach header to response
    res.setHeader('Content-Type', 'text/html');
    // write response
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;

