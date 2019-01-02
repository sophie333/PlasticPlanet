var http = require("http");
var url = require("url");
var port = 9000;

var server = http.createServer ( function (request , response) {
	//allow js to accept the reply 
	response.writeHead(200, {"Access-Control-Allow-Origin": "*"}); 
	//response.write("<p>URL requested: " + request.url);
	
	var urlParts = url.parse(request.url, true);
	if (urlParts.path == "/blue") {
		response.end('<p>Some <span style = "color: blue;">blue </span>text</p>');
	} 
	else if (urlParts.path == "/red") {
		response.end('<p>Some <span style = "color: red;">red </span>text</p>');
	} 
	else if (urlParts.path == "/green") {
		response.end('<p>Some <span style = "color: green;">green </span>text</p>');
	} 
	else if (urlParts.path == "/time") {
		response.end('<p>' + new Date() + '</p>');
	}
	else {
		response.end('<p>Some plain text</p>');
	}
});

server.listen (port , function () {
	console.log ("Server listening on port " + port);
});
	