var express = require('express');
var router = express.Router();
var db = require('../models/');


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  	db.ShoppingList.findAll({})
	.then(function(dbShoppingList){
		res.render('index', dbShoppingList)
        
	})
    /*list.selectAll(function(data) {
    var hbsObject = {
      items: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });*/
});

router.post("/", function(req, res) {
 	db.ShoppingList.create({item_name: req.body.item_name})
	.then(function(newItem){
		console.log(newItem);
		res.redirect('/');
	});
});
    
/* list.insertOne([
    "item_name", "got"
  ], [
    req.body.name, false
  ], function() {
    res.redirect("/");
  });
});*/

router.put("/:id", function(req, res) {
    var updateList = {
          got: true,
      }
      db.ShoppingList.update(updatePost,{
          where:{
              id: req.body.id
          }
      }).then(function (dbUpdate){
          res.json(dbUpdate);
      })
  });
    
    
/*var condition = "id = " + req.params.id;

  console.log("condition", condition);

  list.updateOne({
    got: req.body.got
  }, condition, function() {
    res.redirect("/");
  });
});*/


// Export routes for server.js to use.
module.exports = router;