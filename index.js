var express = require("express");

var apiVersion1 = require("./router/v1/index.js");
var apiVersion2 = require("./router/v2/index.js");
var app = express();
app.use('/static',express.static(__dirname + '/public'));
app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);

app.listen(3000, function() {
    console.log("App started on port 3000");
});