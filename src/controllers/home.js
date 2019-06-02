const { getTopics } = require('../services/home')

module.exports = {
  index: async (ctx, next) => {
    const topics = await getTopics(ctx.query)
    await ctx.render('home', {
      topics: topics,
      userInfo: ctx.session.userInfo || {},
      username: ctx.session.username,
      uid: ctx.session.uid
    })
  },
  about: async ( ctx, next) => {
    await ctx.render('about', {
      userInfo: ctx.session.userInfo || {},
      username: ctx.session.username,
      uid: ctx.session.uid
    })   
  }
}