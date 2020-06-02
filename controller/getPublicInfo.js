var query = require('../mysql/mysqlPool');


module.exports = function(p){
    let sqlGetPublicInfo = 'select * from user;';
    return query(sqlGetPublicInfo)
    // return new Promise((resolve,reject)=>{

    // })
}