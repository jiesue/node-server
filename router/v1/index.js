var express = require("express");
var api = express.Router();

//设置跨域请求头
api.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Access-control-max-age", 1000);       //测试通过
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



api.get("/timezone", function(req, res) {
    res.send("Sample response for /timezone");
});
api.get("/all_timezones", function(req, res) {
    res.send("Sample response for /all_timezones");
});

module.exports = api;