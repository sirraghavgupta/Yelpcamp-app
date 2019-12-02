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
	image: String, 
	description : String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// INSERT A CAMPGROUND
/*Campground.create({
	name: "raghav", 
	image:"http://vivalifestyleandtravel.com/images/cache/c-1509451562-2093217504.jpg",
	description : "this is a huge campground. its a granite hill. no water, no bathrooms."
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
// LANDING
app.get("/", function(req, res){

	res.render("landing");
});

// INDEX
app.get("/campgrounds", function(req, res){
	// get all campgrounds from the DB
	Campground.find({}, function(err, allCampgrounds){
		if(err)
			console.log(err);
		else{
			res.render("index", {campgrounds: allCampgrounds});	
		}
	});
});

// CREATE
app.post("/campgrounds", function(req, res){
	// get the data, add it and redirect
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampground = {name: name, image: image, description:description};
	
	Campground.create(newCampground, function(err, newlyCreated){
		if(err)
			console.log(err);
		else
			res.redirect("/campgrounds");
	});
});

// NEW 
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

// SHOW
app.get("/campgrounds/:id", function(req, res){
	// find the campground with that id 
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err)
			console.log(err);
		
		else
			res.render("show", {campground:foundCampground});
	});
});

// start the server
app.listen(3000, function(){
	console.log("Server is listening at PORT 3000.");
});