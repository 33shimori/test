var router = require('express').Router()
var bodyParser = require('../json/node_modules/body-parser')

router.use(bodyParser.json())

router.use(require('../json/auth'))
router.use('/api/posts', require('./api/posts'))
router.use('/api/sessions', require('./api/sessions'))
router.use('/api/users', require('./api/users'))
router.use(require('./static'))

module.exports = router
