const serve = require('koa-static');
const Koa = require('koa')
const path = require('path')
const koaBody = require('koa-body')
const render = require('koa-ejs')
const session = require('koa-session')

const dbInit = require('./db/mongoose')
const router = require('./routes/index')
const apiRouter = require('./routes/api')

const app = new Koa()

app.keys = ['koaapp']
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: false, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}

app.use(session(CONFIG, app))

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: true
})

// app.use(view(path.resolve(__dirname, 'views')))

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFieldsSize: 10 * 1024 * 1024 //10M
  }
}))

//public
app.use(serve(path.resolve(__dirname, '../public')));

app.use(router.routes()).use(router.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())

//初始化mongoose
dbInit()

// 中间件捕捉不到的错误 这里可以拦截
process.on('uncaughtException', err => {
  console.error('app uncaughtException', err.stack);
});

process.on('unhandledRejection', (reason, p) => {
  console.error('app Unhandled Rejection at:', p, 'reason:', reason);
});


app.listen(5000);

console.log('listening on port 5000');