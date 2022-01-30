const { discountByBrand } = require('../models/discount')

const getDiscountByBrand = async ctx => {
  try {
    const brandName = ctx.params.brand
    const discount = await discountByBrand(brandName)

    ctx.status = 200
    ctx.body = discount
  } catch (error) {
    ctx.status = 500
    ctx.body = "Error"
  }
}

module.exports = { getDiscountByBrand }
