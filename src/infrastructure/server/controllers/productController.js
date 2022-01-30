const productsModel = require('../models/product')

const getProducts = async ctx => {
  try {
    const products = await productsModel.allProducts()
    ctx.status = 200
    ctx.body = products
  } catch (error) {
    ctx.status = 500
    ctx.body = "Error"
  }
}

const getProductById = async ctx => {
  try {
    const productId = ctx.params.id
    const product = await productsModel.productById(productId)
    ctx.status = 200
    ctx.body = product
  } catch (error) {
    ctx.status = 500
    ctx.body = "Error"
  }
}

module.exports = { getProducts, getProductById }
