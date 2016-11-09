var express = require("express");
var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));


app.use(express.static(__dirname + '/public')); 		//public is directory for all static files like images, audio, css files , etc
app.set('views', __dirname + '/views'); 				// views is directory for all template files

app.get('/', function(request, response){
	response.sendFile(path.join(__dirname+'/index.html')); //__dirname will resolve to your project folder
	
});

app.listen(app.get('port'));