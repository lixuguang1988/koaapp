const { getDetail } = require('../services/topic')
const { getCategoryList } = require('../services/category')

module.exports = {
  detail: async (ctx, next) => {
    const data = await getDetail(ctx.params.id)
    const resData = {
      userInfo: ctx.session.userInfo || {},
      username: ctx.session.username,
      uid: ctx.session.uid
    }
    if(data){
      resData.data = data
    }else{
      resData.error = true
    }
    await ctx.render('topic_detail', resData)
  },
  create: async (ctx, next) => {
    const uid = ctx.session.uid
    if(!uid){
      ctx.redirect('/no-right')
      return false
    }
    const resData = {
      userInfo: ctx.session.userInfo || {},
      username: ctx.session.username,
      uid: ctx.session.uid
    }
    const categoryList = await getCategoryList()
    resData.categoryList = categoryList
    
    await ctx.render('topic_create', resData)
  }
}