const Router = require('koa-router')
const home = require('../controllers/home')
const user = require('../controllers/user')

const router = new Router()

router.get('/', home.index)
router.get('/register', user.register)
router.get('/login', user.login)

module.exports = router