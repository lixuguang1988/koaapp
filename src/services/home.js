const Topic = require('../models/Topic')

const getTopics = async (query) => {
  const page = query.page || 0
  const pageSize = query.pageSize || 20
  const topics = await Topic.find({
    status: true,
  }).
  skip(page * pageSize ).
  limit(pageSize).
  sort({top: -1, good: -1, createdAt: -1}).
  populate({path: 'author', select: 'username id avatar'})
  console.log(topics)
  return topics
}

module.exports = {
  getTopics: getTopics
}