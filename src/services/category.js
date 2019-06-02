const Category = require('../models/Category')

/**
 * 获取全部有效分类列表
 * 以order倒序, 更新时间倒序
 */
const getCategoryList = async () => {
  const data = Category.find({ status: true})
              .sort({order: -1, updateAt: -1})
  return data
}



module.exports = {
  getCategoryList: getCategoryList
}