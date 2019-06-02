const mongoose = require('mongoose')
const { doCreate } = require('../services/topic')

const ObjectId = mongoose.Types.ObjectId

module.exports = {
  create: async(ctx, next) => {
    const { title, keywords, description, category, content } = ctx.request.body || ctx.query
    let response = {
      code: 1,
      message: '话题创建成功!'
    }
    if(!title || !title.length > 64){
      response = {
        code: 0,
        message: '标题的长度必须大于0小于64个字符!'
      }
    }
    if(!content){
      response = {
        code : 0,
        message: '内容不能为空!'
      }
    }
    
    if(response.code === 0){
      ctx.body = response
      return false
    }

    try{

      const doc = await doCreate({
        title: title,
        category: ObjectId(category),
        content: content,
        keywords: keywords.split(',').filter(item=>(item.trim())),
        description: description,
        author: ObjectId(ctx.session.uid),
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
}