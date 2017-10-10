var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');

// middlerware
app.use (bodyParser.json());

// html commands
app.post ('/event', function (request, response) {
	console.log('body', request.body.message);
});

app.listen (3000, function() {
	console.log ('example app listening on port 3000');
})