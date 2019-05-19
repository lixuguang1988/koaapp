const crypto  = require('crypto')


module.exports = {
  md5: (val) => {
    const md5 = crypto.createHash('md5')
    md5.update(val)
    return md5.digest('hex')
  }
}