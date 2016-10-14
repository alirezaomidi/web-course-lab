var http = require('http');

function onRequest (request, response)
{
    console.log(request.method + " request for " + request.url);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Salam, Chetori?!');
}

http.createServer(onRequest).listen(8000);
console.log('Server is on http://localhost:8000');
