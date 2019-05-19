const Router = require('koa-router')
const user = require('../controllers/user')

const router = new Router({
  prefix: '/api'
})

router.post('/register', user.create)
router.post('/login', user.doLogin)
router.post('/logout', user.doLogout)

module.exports = router