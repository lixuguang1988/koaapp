// const { getTopics } = require('../services/home')
const { doRegister, findOneByUsername, findUsername } = require('../services/user')
const { validateUsername, validatePassword } = require('../utils/validator')
const { md5 } = require('../utils/format')

module.exports = {
  register: async (ctx, next) => {
    await ctx.render('register', {
    })
  },
  create: async(ctx, next) => {
    const { username, password } = ctx.request.body || ctx.query
    let response = {
      code: 1,
      message: '用户创建成功!'
    }
    if(!username){
      response = {
        code: 0,
        message: '用户名不能为空!'
      }
    }
    if(!validateUsername(username)){
      response = {
        code : 0,
        message: '用户名不和要求！'
      }
    }
    if(!password){
      response = {
        code: 0,
        message: '密码不能为空!'
      }
    }
    if(!validatePassword(password)){
      response = {
        code: 0,
        message: '密码要求6位'
      }
    }
    if(response.code !== 1){
      ctx.body = response
      return false
    }

    try{

      const exist = await findOneByUsername(username)
      if(exist){
        ctx.body = { 
          code: 0,
          message: '用户名已存在！'
        }
        return false
      }

      const doc = await doRegister({
        username: username,
        password: md5(password)
      })

      ctx.body = {...response, data: doc._doc }

    }catch(error){
      ctx.status = 500
      ctx.body = {
        code: 500,
        message: error.toString() || '未知错误'
      }
    }

  },
  doLogin: async (ctx, next) => {
    const { username, password } = ctx.request.body || ctx.query
    let response = {
      code: 1,
      message: '用户登录成功!'
    }

    try{

      const doc = await findUsername(username,  md5(password))
      if(!doc){
        response = { 
          code: 0,
          message: '用户名或密码不正确！'
        }
      }else{
        const {password, ...rest} = doc._doc
        ctx.session.userInfo = rest
        ctx.session.uid = doc._id
        ctx.session.username = doc.username
        response = {...response, data: doc._doc }
      }

      ctx.body = response

    }catch(error){
      ctx.status = 500
      ctx.body = {
        code: 500,
        message: error.toString() || '未知错误'
      }
    }    
  },
  login: async(ctx, next) => {
    await ctx.render('login', {
    })
  },
  doLogout: async(ctx, next) => {
    ctx.session.userInfo = null
    ctx.session.uid = null
    ctx.session.username = null
  }
}