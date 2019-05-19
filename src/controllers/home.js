const { getTopics } = require('../services/home')

module.exports = {
  index: async (ctx, next) => {
    const topics = await getTopics(ctx.query)
    const userInfo = ctx.session.userInfo
    await ctx.render('home', {
      topics: topics,
      userInfo: userInfo || {}
    })
  }
}