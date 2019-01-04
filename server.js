const http = require("http");
const url = require("url");
const port = 9000;

var server = http.createServer ( function (request , response) {
	//allow js to accept the reply
	response.writeHead(200, {"Access-Control-Allow-Origin": "*"});

	var query = url.parse(request.url, true).query;

	response.write('<h1>' + query.title + '</h1>');
	response.end('<p>' + query.cont + '</p>');
});

server.listen (port , function () {
	console.log ("Server listening on port " + port);
});
	