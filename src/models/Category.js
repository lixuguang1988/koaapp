const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  title: String,
  description: String, //简介
  picture: String,  //封面图
  status: {
    type: Boolean,
    default: true
  },
  createBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

module.exports = mongoose.model('Category', schema)