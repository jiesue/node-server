
var multiparty = require('multiparty');
var path = require('path')
var baseUrl = 'http://10.0.147.180:3000'
module.exports = function (req, res) {
    var form = new multiparty.Form();//实例化表单
    form.uploadDir = path.resolve(__dirname, '../public/img');//定义上传路径为根目录/upload
    form.parse(req, function (err, fields, files) {
        // var title = fields.title[0];
        // var pic = files.pic[0].path;
        console.log('11111111====================');
        console.log(fields);
        console.log('22222222====================');
        console.log(files);
        files['avatar'][0]['size'] == 0 ? fields.jieimgUrl = null :
            fields.jieimgUrl = baseUrl + '/static/img/' + path.basename(files['avatar'][0]['path'])
        res.json(fields)
    });
}


