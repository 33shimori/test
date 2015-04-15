
var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var app = express()
var bcrypt = require('bcrypt')
var User = require('/home/gm/NetBeansProjects/MEANSampleProject/app/json/user')
app.use(require('body-parser').json())

//var users = [{username:'dickeyxxx', 
//        password:'$2a$10$BFpXNSlHZ1JmiLiBhcNljuq7qBwD/2VQebP4./.frk.gT5yIhi8qy'}]
var secretKey = 'supersecretkey'

//function findUserByUsername(username){
//    return _.find(users, {username: username})
//}
//
//function validateUser(user, password, cb) {
//    bcrypt.compare(password, user.password,cb)
//}

app.post('/session', function (req, res, next //next added 
){
//    var user = findUserByUsername(req.body.username)
//    validateUser(user,req.body.password, function(err,valid){
//        if(err || !valid){return res.send(401)} // unauthorized
//        var token = jwt.encode({username: user.username}, secretKey)
    User.findOne({username: req.body.username})
            .select('password')
            .exec(function(err,user){
                if (err){return next(err)}
                if (!user){return res.sendStatus(401)}
            bcrypt.compare(req.body.password, user.password,function(err,valid){
                if(err){return next (err)}
                if (!valid){return res.sendStatus(401)}
                var token = jwt.encode({username: user.username},secretKey)
            res.json(token)
        })
    })
})

app.get('/user', function (req, res) {
    var token = req.headers['X-auth']
    var auth = jwt.decode(token, secretKey)
    User.findOne({username: auth.username},function(err,user){
        res.json(user)
    })
})

app.post('/user',function(req,res,next){
    var user = new User({username:req.body.username})
    bcrypt.hash(req.body.password,10,function(err, hash)
    {
        user.password = hash
        user.save(function(err){
            if(err){throw next(err)}
            res.sendStatus(201)
        })
    })
})

app.listen(3000, function () {
    console.log('listening 3000')
})