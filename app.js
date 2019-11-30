var express = require("express");
var app = express();

// var rp = require("request-promise");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var campgrounds = [
		{name: "raghav", image:"http://vivalifestyleandtravel.com/images/cache/c-1509451562-2093217504.jpg"},
		{name: "mohit", image:"https://www.tripsavvy.com/thmb/mU3xd61g1i_9VaZEm9I4_-lyfps=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/camping-under-the-stary-sky-on-mountain-805170924-5986334fd088c0001167b241.jpg"},
		{name: "gunjan", image:"https://cdn.hiconsumption.com/wp-content/uploads/2015/06/Best-Places-To-Camp-In-The-US-0-Hero.jpg"},
		{name: "didu", image:"https://img.theculturetrip.com/768x432/wp-content/uploads/2018/02/best-camping-sites-near-pune-india.jpg"},
		{name: "raghav", image:"http://vivalifestyleandtravel.com/images/cache/c-1509451562-2093217504.jpg"},
		{name: "mohit", image:"https://www.tripsavvy.com/thmb/mU3xd61g1i_9VaZEm9I4_-lyfps=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/camping-under-the-stary-sky-on-mountain-805170924-5986334fd088c0001167b241.jpg"},
		{name: "gunjan", image:"https://cdn.hiconsumption.com/wp-content/uploads/2015/06/Best-Places-To-Camp-In-The-US-0-Hero.jpg"},
		{name: "didu", image:"https://img.theculturetrip.com/768x432/wp-content/uploads/2018/02/best-camping-sites-near-pune-india.jpg"},
		{name: "raghav", image:"http://vivalifestyleandtravel.com/images/cache/c-1509451562-2093217504.jpg"},
		{name: "mohit", image:"https://www.tripsavvy.com/thmb/mU3xd61g1i_9VaZEm9I4_-lyfps=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/camping-under-the-stary-sky-on-mountain-805170924-5986334fd088c0001167b241.jpg"},
		{name: "gunjan", image:"https://cdn.hiconsumption.com/wp-content/uploads/2015/06/Best-Places-To-Camp-In-The-US-0-Hero.jpg"},
		{name: "didu", image:"https://img.theculturetrip.com/768x432/wp-content/uploads/2018/02/best-camping-sites-near-pune-india.jpg"}

];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	// res.send("raghav is awesome");
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	// get the data, add it and redirect
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);

	res.redirect("/campgrounds");
});

// study the REST convention pls --

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

// start the server
app.listen(3000, function(){
	console.log("Server is listening at PORT 3000.");
});