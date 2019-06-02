const mongoose = require('mongoose')
const { Schema, model } = mongoose

const schema = new Schema({
  title: {
    type: String,
    required: true
  }, //标题
  description: String, //简介
  picture: String,  //封面图
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  content: String, //内容
  keywords: [String],  //关键字
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  commments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  good: {
    type: Boolean,
    default: false    
  }, //精华帖
  top: {
    type: Boolean,
    default: false
  },
  status: {
    type: Boolean,
    default: true
  }
}, {timestamps: true})

module.exports = model('Topic', schema)