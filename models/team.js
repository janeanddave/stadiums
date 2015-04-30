"use strict";
module.exports = function (sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    name: DataTypes.STRING,
    logo_image_url: DataTypes.STRING,
    mascot: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // TODO figure out migration
        // this.hasOne(models.Stadium);
      }
    }
  });
  return Team;
};