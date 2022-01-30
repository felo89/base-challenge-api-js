const discountSchema = require('../schema/discount-schema')

const discountByBrand = async brand => {
  const discount = await discountSchema.find({ brand })
  return discount
}

module.exports = { discountByBrand }
