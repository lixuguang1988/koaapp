const mongoose = require('mongoose')
const Topic = require('../models/Topic')
const ObjectId = mongoose.Types.ObjectId

const getDetail = async (id) => {
  const data = await Topic.findOne({
    _id: ObjectId(id),
    status: true,
  }).
  populate({path: 'author', select: 'username id avatar'}).
  populate({path: 'category', select: 'title description picture id'})
  // populate('commments')
  return data
}

const doCreate = async ( data ) => {
  const doc = await Topic.create(data)
  return doc
}

module.exports = {
  getDetail: getDetail,
  doCreate: doCreate
}