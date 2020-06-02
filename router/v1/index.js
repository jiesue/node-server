var express = require("express");
var router = express.Router();
var query = require('../../mysql/mysqlPool.js');
var getPublicInfo = require('../../controller/getPublicInfo')
//设置跨域请求头
router.all('*', function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Access-control-max-age", 1000);
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



router.get("/timezone", function(req, res) {
    console.log("服务器接受到了请求"+req.url);
    getPublicInfo(req).then(result=>{
        res.json(result)
    })
});
router.get("/all_timezones", function(req, res) {
    res.send("Sample response for /all_timezones");
});

module.exports = router;