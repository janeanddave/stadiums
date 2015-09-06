var express = require("express");
var db = require("./models");

var app = express();

app.get('/', function (req, res) {
  res.send('hello world!');
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

