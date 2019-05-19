const validateUsername = (val) => {
  return true
}

const validatePassword  = val => {
  return val.length >= 6
}

module.exports = {
  validateUsername: validateUsername,
  validatePassword: validatePassword
}