var express = require("express");
var app = express();

var rp = require("request-promise");

var bodyParser = require("body-parser");


app.get("/", function(req, res){
	res.send("HOME PAGE!!!");
});

// start the server
app.listen(3000, function(){
	console.log("Server is listening at PORT 3000.");
});