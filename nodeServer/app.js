var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');
var http = require ('http');

var app = express();

// setup environmet
app.set ('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//.createServer(listener).listen (port, function() {...});
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server is listening on port '+ app.get('port'));
})

// html command
app.post ('/event', function(req,res) {
  console.log(res);
})

module.exports = app;





