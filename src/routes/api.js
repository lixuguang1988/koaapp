const Router = require('koa-router')
const user = require('../controllers/user.api')
const topic = require('../controllers/topic.api')

const router = new Router({
  prefix: '/api'
})

router.post('/register', user.create)
router.post('/login', user.doLogin)

router.post('/topic/create', user.checkLogin, topic.create)

module.exports = router