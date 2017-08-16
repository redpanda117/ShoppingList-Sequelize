// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");

module.exports = function (sequelize, DataTypes) {
    var ShoppingList = sequelize.define("ShoppingList", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Pens",
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

