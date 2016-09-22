var http = require('http');
var qs = require('querystring');

function onRequest (request, response)
{
    console.log(request.method + " request for " + request.url);

    var body = '';
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function() {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        var form = qs.parse(body);
        console.log(form);
        response.write('Hi ' + form.firstname + ' ' + form.lastname + '!\n');
        response.end();
    });
}

http.createServer(onRequest).listen(8888);
console.log('Server is listening on port 8888');
