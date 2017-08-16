// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//the css and image
app.use(express.static(path.join(__dirname, "/public")));


//favicon 
//app.use(express.static("favicon.ico"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));                       
                       
// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");                       
                       
// Import routes and give the server access to them.
var routes = require("./controllers/item_controller.js");
app.use("/", routes);


db.sequelize.sync({}).then(function(){
    app.listen(PORT,function(){
        console.log("Listening on port %s", PORT);
    });
})