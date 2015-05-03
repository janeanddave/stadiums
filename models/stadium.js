"use strict";
module.exports = function (sequelize, DataTypes) {
  var Stadium = sequelize.define("Stadium", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        this.belongsTo(models.Team);
      }
    },
    tableName: 'Stadiums'
  });
  return Stadium;
};
