var http = require('http');
var fs = require('fs');

function serverStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) { responseCode = 200; }
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(5000, {'Content-Type' : 'text/plain'});
            res.end("500 - Internal Error");
        }
        else {
            res.writeHead(responseCode, {'Content-Type' : contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serverStaticFile(res, '/index.html', 'text/html');
            break;
        case '/about':
            serverStaticFile(res, '/about.html', 'text/html');
            break;
        case '/style.css':
            serverStaticFile(res, '/style.css', '');
            break;
        case '/img/about.jpg':
            serverStaticFile(res, '/img/about.jpg', 'image/jpeg');
            break;
        case '/img/cry.jpg':
            serverStaticFile(res, '/img/cry.jpg', 'image/jpeg');
            break;
        case '/img/welcome.jpg':
            serverStaticFile(res, '/img/welcome.jpg', 'image/jpeg');
            break;
        case '/img/graduation.jpg':
            serverStaticFile(res, '/img/gallery/graduation.jpg', 'image/jpeg');
            break;
        case '/img/study.jpg':
            serverStaticFile(res, '/img/gallery/study.jpg', 'image/jpeg');
            break;
        case '/video/memes.mp4':
            serverStaticFile(res, '/video/students/memes.mp4', 'application/mp4');
            break;
        default:
            serverStaticFile(res, '/error.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl+C to terminate");