const Category = require('../models/Category')

module.exports = {
  index: async(ctx, next) => {
    const userInfo = ctx.session.userInfo
    if(!userInfo || !userInfo.isAdmin ){
      ctx.redirect('/noRight')
      return 
    }

    Category.insertMany([
      {
        title: 'React',
        description: '用于构建用户界面的 JavaScript 库',
        createBy: ctx.session.uid,
      },
      {
        title: 'Vue',
        description: '渐进式 JavaScript 框架',
        createBy: ctx.session.uid,
      },
      {
        title: 'Angular',
        description: '一套框架，多种平台 移动端 & 桌面端',
        createBy: ctx.session.uid,
      },
    ])

    ctx.body = {code: 1, message: 'ok'}
  }
}