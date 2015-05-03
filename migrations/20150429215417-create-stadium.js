"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Stadiums", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: "Teams",
        referenceKey: "id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Stadiums").done(done);
  }
};