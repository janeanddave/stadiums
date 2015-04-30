"use strict";
module.exports = function (sequelize, DataTypes) {
  var Stadium = sequelize.define("Stadium", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // TODO figure out migration
        // this.belongsTo(models.Team);
      }
    }
  });
  return Stadium;
};