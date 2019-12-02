var express    = require("express"),
	app        = express(),
	bodyParser = require("body-parser"),
	mongoose   = require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp",{
	useNewUrlParser:true,
	useFindAndModify:false,
	useCreateIndex:true,
	useUnifiedTopology:true
});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//SCHEMA FOR THE CAMPGROUND
var campgroundSchema = new mongoose.Schema({
	name : String,
	image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// INSERT A CAMPGROUND
/*Campground.create({
	name: "raghav", 
	image:"http://vivalifestyleandtravel.com/images/cache/c-1509451562-2093217504.jpg"
	},
	function(err, campground){
		if(err)
			console.log(err);
		else{
			console.log("OUR NEWLY INSERTED CAMPGROUND");
			console.log(campground);
		}
	});
*/
app.get("/", function(req, res){

	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	// get all campgrounds from the DB
	Campground.find({}, function(err,allCampgrounds){
		if(err)
			console.log(err);
		else{
			res.render("campgrounds", {campgrounds: allCampgrounds});	
		}
	});
});

app.post("/campgrounds", function(req, res){
	// get the data, add it and redirect
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	
	Campground.create(newCampground, function(err, newlyCreated){
		if(err)
			console.log(err);
		else
			res.redirect("/campgrounds");
	});
});

// study the REST convention pls --

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

// start the server
app.listen(3000, function(){
	console.log("Server is listening at PORT 3000.");
});