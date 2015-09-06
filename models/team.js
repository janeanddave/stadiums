"use strict";
module.exports = function (sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    name: DataTypes.STRING,
    logo_image_url: DataTypes.STRING,
    mascot: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        this.hasOne(models.Stadium);
      }
    },
    underscored: true
  });
  return Team;
};