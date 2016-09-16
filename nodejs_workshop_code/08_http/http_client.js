var http = require('http');

var options = {
    host: 'www.wipro.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make http.request...");

var req = http.request(options, function(response) {
	console.log("\n\n>>>http.request response >>> " + response.statusCode + "\n");
	response.pipe(process.stdout);
});
req.end();

console.log("Going to make http.get...");

http.get('http://www.wipro.com', function(response) {
	console.log("\n\n>>>http.get response >>> " + response.statusCode + "\n");
	response.pipe(process.stdout);
});
