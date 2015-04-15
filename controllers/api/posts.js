var Post = require('/home/gm/NetBeansProjects/MEANSampleProject/app/models/post')
var router = require('express').Router()
var websockets = require('/home/gm/NetBeansProjects/MEANSampleProject/app/json/websockets')


router.get('/', function(req,res, next){
    Post.find()
            .sort('-date')
            .exec(function(err, posts){
        if(err) { return next (err)}
        res.json(posts)
    })
})

//router.post('/api/posts',function(req, res, next){
//z    var post = new Post({
//        username: req.body.username,
//        body: req.body.body
//    })
//    post.save(function(err, post){
//        if (err) {return next(err)}
//        res.status(201).json(post)
//    })
//})

router.post('/', function(req,res,next){
    var  post = new Post({body: req.body.body})
    post.username = req.auth.username
    post.save(function(err, post) {
        if (err) {return next (err)}
        websockets.broadcast('new_post', post)
        res.status(201).json(post)
    })
})


module.exports = router