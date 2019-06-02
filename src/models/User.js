const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String, //用户名
  avatar: String, //头像
  lastLoginDate: Date, //上次登录时间
  birthday: Date, //出生日期
  password: String, //密码 md5加密
  isAdmin: {
    type: Boolean,
    default: false,
  }, //是否是管理员
  token: String //token 可能不需要
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)