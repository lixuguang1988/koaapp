const Router = require('koa-router')
const home = require('../controllers/home')
const user = require('../controllers/user')
const topic = require('../controllers/topic')
const category = require('../controllers/category')

const router = new Router()

router.get('/', home.index)
router.get('/user/:id', user.index)
router.get('/register', user.register)
router.get('/login', user.login)
router.get('/logout', user.logout)
router.get('/topic/create', topic.create)
router.get('/topic/:id', topic.detail)
router.get('/category', category.index)
router.get('/about', home.about)

module.exports = router