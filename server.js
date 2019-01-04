var http = require("http");
var url = require("url");
var ContentArray = require ('./ContentArray.js');
var port = 9000;

var server = http.createServer ( function (request , response) {
	//allow js to accept the reply
	response.writeHead(200, {"Access-Control-Allow-Origin": "*"});
	//response.write("<p>URL requested: " + request.url);

	//var contentArray = new ContentArray();
	//console.log(contentArray);

	console.log('a: '+request.method);
	console.log('b: '+request.headers);
	console.log('c: '+request.url);

	var urlParts = url.parse(request.url, true);

	if (urlParts.path == "/0") {
		//let h = contentArray.getContent(0).title;
		//var p = objArray.getContent(0).content;

		response.write('<h1>#1 Dangers of Plastic</h1>');
		response.end('<p>Some <span style = "color: blue;">blue </span>text</p>');
	}
	else if (urlParts.path == "/1") {
		response.write('<h1>#2 Dangers of Plastic</h1>');
		response.end('<p>Some <span style = "color: red;">red </span>text</p>');
	}
	else if (urlParts.path == "/2") {
		response.write('<h1>#3 Dangers of Plastic</h1>');
		response.end('<p>Some <span style = "color: green;">green </span>text</p>');
	}
	else {
		response.write('<h1>#ERR Not a Danger</h1>');
		response.end('<p>Some plain text</p>');
	}
});

server.listen (port , function () {
	console.log ("Server listening on port " + port);
});
	