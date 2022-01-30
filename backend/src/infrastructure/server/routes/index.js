const { getProducts, getProductById } = require('../controllers/productController')
const { getDiscountByBrand } = require('../controllers/discountController')

function loadRoutes(router) {
  router.get('/products', getProducts)
  router.get('/product/:id', getProductById)
  router.get('/discount/:brand', getDiscountByBrand)

  return router
}

module.exports = { loadRoutes }
