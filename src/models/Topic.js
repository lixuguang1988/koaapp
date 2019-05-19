const mongoose = require('mongoose')
const { Schema, model } = mongoose

const schema = new Schema({
  title: String,
  description: String,
  content: String,
  keywords: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  good: Boolean,
  status: Boolean
})

module.exports = model('Topic', schema)