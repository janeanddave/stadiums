var express = require("express");

var app = express();

app.get('/', function (req, res) {
  res.send('hello world!');
});

var server = app.listen(process.env.PORT || 3000, function() {
  console.log(new Array(51).join("*"));
  console.log("\t LISTENING ON: \n\t\t localhost:3000");
  console.log(new Array(51).join("*"));
});
