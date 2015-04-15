var jwt = require('jwt-simple')
var config = require('/home/gm/NetBeansProjects/MEANSampleProject/app/json/config')

module.exports = function (req, res, next) {
    if (req.headers['x-auth']){
        req.auth = jwt.decode(req.headers['x-auth'], config.secret)
    }
    next()
}