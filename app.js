var express   = require("express");
var db = require("./models");

var app = express();

app.get('/', function (req, res) {
  res.send('hello world!');
});

require('./db/seed')(db)
  .then(function () {
    app.listen(process.env.PORT || 3000, function () {
      console.log(new Array(51).join("*"));
      console.log("\t LISTENING ON: \n\t\t localhost:3000");
      console.log(new Array(51).join("*"));
    });
  });

