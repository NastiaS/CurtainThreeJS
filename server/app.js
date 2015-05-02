var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();


module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../custom.html');

app.use(express.static(publicPath));

//bower static path

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next){
	res.sendFile(indexHtmlPath);
});
