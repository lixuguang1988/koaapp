const User = require('../models/User')

const doRegister = async (data) => {
  const doc = new User(data)
  await doc.save()
  return doc 
}

const findOneByUsername = async (username) => {
  const doc = await User.findOne({username: username})
  return doc
}

const findUsername = async (username, password) => {
  const doc = await User.findOne({username: username, password: password})
  return doc
}

module.exports = {
  doRegister: doRegister,
  findOneByUsername: findOneByUsername,
  findUsername: findUsername
}