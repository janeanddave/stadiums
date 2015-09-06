var express = require("express");
var db = require("./models");
var path = require("path");

var app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/api/stadiums", function (req, res) {
  db.Stadium.findAll().then(function (stadiums) {
    res.json(stadiums);
  });
});

app.get("/api/stadiums/:id", function (req, res) {
  var id = req.params.id;
  db.Stadium.find(id).then(function (stadiums) {
    res.json(stadiums);
  });
});

app.get("/api/teams", function (req, res) {
  db.Team.findAll().then(function (teams) {
    res.json(teams);
  });
});

app.get("/api/teams/:id", function (req, res) {
  var id = req.params.id;
  db.Team.find(id).then(function (teams) {
    res.json(teams);
  });
});

require('./db/seed')(db)
  .then(function () {
    var port = 3000;
    app.listen(port, function () {
      console.log(new Array(51).join("*"));
      console.log("\t LISTENING ON: \n\t\t" + port);
      console.log(new Array(51).join("*"));
    });
  });

