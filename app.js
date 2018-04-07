var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    Company     = require("./models/company"),
     Police      = require("./models/police"),
    methodOverride = require("method-override");


    var seedDB     = require("./seeds");
       mongoose.Promise = global.Promise;
    //requiring routes

    seedDB();



mongoose.connect("mongodb://localhost/zone", {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


//root route
app.get("/", function(req, res){
    // Get all campgrounds from DB
    Company.find({}, function(err, allCompany){
       if(err){
           console.log(err);
       } else {
          res.render("companyorg",{company:allCompany});
       }
    });
});

//police Organizations routes
app.get("/pol", function(req, res){
    // Get all campgrounds from DB
    Police.find({}, function(err, allPolice){
       if(err){
           console.log(err);
       } else {
          res.render("policeorg",{police:allPolice});
       }
    });
});




app.listen(process.env.PORT || 5000,function() {
  console.log("zoneconnection server started!!")
});
