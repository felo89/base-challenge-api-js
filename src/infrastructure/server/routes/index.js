const { getProducts, getProductById } = require('./controllers/productController')

function loadRoutes(router) {
  router.get('/products', getProducts)
  router.get('/product/:id', getProductById)

  return router
}

module.exports = { loadRoutes }
