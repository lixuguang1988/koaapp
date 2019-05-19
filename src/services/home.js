const Topic = require('../models/Topic')

const getTopics = async (query) => {
  const page = query.page || 0
  const pageSize = query.pageSize || 20
  const docs = await Topic.find({
    status: true,
  }).
  skip(page * pageSize ).
  limit(pageSize).
  sort({good: -1})

  return docs
}

module.exports = {
  getTopics: getTopics
}