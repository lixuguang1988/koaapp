// const { getTopics } = require('../services/home')

module.exports = {
  register: async (ctx, next) => {
    await ctx.render('register', {
    })
  },
  login: async(ctx, next) => {
    await ctx.render('login', {
    })
  },
  logout: async(ctx, next) => {
    ctx.session.userInfo = null
    ctx.session.uid = null
    ctx.session.username = null
    //跳转到首页
    ctx.redirect('/')
  },
  index:  async(ctx, next) => {
    await ctx.render('user', {
      
    })
  }
}