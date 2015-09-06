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

require('./db/seed')(db)
  .then(function () {
    var port = 3000;
    app.listen(port, function () {
      console.log(new Array(51).join("*"));
      console.log("\t LISTENING ON: \n\t\t" + port);
      console.log(new Array(51).join("*"));
    });
  });

