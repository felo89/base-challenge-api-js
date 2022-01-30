const productsModel = require('../models/product')

const getProducts = async ctx => {
  const products = await productsModel.allProducts()
  ctx.body = products
}

const getProductById = async ctx => {
  const productId = ctx.params.id
  const product = await productsModel.productById(productId)
  ctx.body = product
}

module.exports = { getProducts, getProductById }
