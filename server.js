var express = require("express");
var app = express();
var path = require("path");

app.get('/', function(request, response){
	response.sendFile(path.join(__dirname+'/index.html'));
	//__dirname will resolve to your project folder
});

app.get('/about', function(request, response){
	response.sendFile(path.join(__dirname)+'/about.html'));
});

app.listen(3000);