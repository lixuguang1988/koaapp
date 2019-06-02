const mongoose = require('mongoose')
const { Schema, model } = mongoose

const schema = new Schema({
  content: String, //内容
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  commmentAt:{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }, //回复的那条
  good: { 
    type: Number, 
    default: 0
  }, //顶
  bad: { 
    type: Number, 
    default: 0
  },  //踩
  status: {
    type: Boolean,
    default: true
  }
}, {timestamps: true})

module.exports = model('Topic', schema)