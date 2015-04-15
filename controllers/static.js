var express = require('express')
var router = express.Router()

router.use(express.static('/home/gm/NetBeansProjects/MEANSampleProject/app/templates'))
router.use(express.static('/home/gm/NetBeansProjects/MEANSampleProject/app/assets'))

router.get('/', function(req,res){
    res.sendFile('/home/gm/NetBeansProjects/MEANSampleProject/app/layouts/app.html')
})

module.exports = router