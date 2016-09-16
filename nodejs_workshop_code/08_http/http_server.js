//var fs = require('fs');

var http = require('http');
http.createServer(function (req, res) {
	console.log("Incoming Request: " + req.method + " " + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end("Hello Nodejs from Node.js HTTP Server!!!" + "\n");
}).listen(8000);
console.log('HTTP Server running at port 8000. Access through http://localhost:8000/');
