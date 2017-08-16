var express = require('express');
var router = express.Router();
var ShoppingList = require('../models/')["ShoppingList"];


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
 
	ShoppingList.findAll({})
	.then(function(dbShoppingList){
		res.render('index', {dbShoppingList})
        
	})
});
    /* list.selectAll(function(data) {
    var hbsObject = {
      items: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});*/

router.post("/", function(req, res) {
      // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
	ShoppingList.create({item_name: req.body.item_name})
	.then(function(dbShoppingList){
		console.log(dbShoppingList);
		res.redirect('/');
	});
}); 
    /*list.insertOne([
    "item_name", "got"
  ], [
    req.body.name, false
  ], function() {
    res.redirect("/");
  });
});*/

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  list.updateOne({
    got: req.body.got
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;