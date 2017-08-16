// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");

module.exports = function (sequelize, DataTypes) {
    var ShoppingList = sequelize.define("ShoppingList", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        got: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });
    return ShoppingList;
}


/*var list = {
    //select all items 
    selectAll: function (cb) {
        /*orm.selectAll("items", function(res) {
          cb(res);
        });
        ShoppingList.findAll({}).then(function (res) {
            cb(res);
        });
    },

    // The variables cols and vals are arrays.
    // add one item to database
    insertOne: function (cols, vals, cb) {
        /*orm.insertOne("items", cols, vals, function(res) {
          cb(res);
        });
        console.log(req.body);
        ShoppingList.create({
            item: req.body.item,
            got: req.body.got
        }).then(function (res) {
            cb(res);
        })

    },

    //chane boolean status of exsiting item
    updateOne: function (objColVals, condition, cb) {
        /*orm.updateOne("items", objColVals, condition, function (res) {
            cb(res);
        });
             var updateList = {
            got: req.body.got
        }
        ShoppingList.update(updateList,{
            where:{
                id:req.body.id
            }
        }).then(function (res) {
            cb(res);
        })
    }


// Export the database functions for the controller 
module.exports = list;*/
