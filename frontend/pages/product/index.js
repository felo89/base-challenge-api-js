import ProductList from './productList'
import Card from '../components/card'

const Product = () => {
  const { data, isLoading, isError } = ProductList()
  const addCart = 'Agregar al carrito'
  
  if (isError) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {data.map(product => {
        const price = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)
        return (
          <div key={product._id}>
            <Card
              image={product.image}
              title={`${product.description} ${product.brand}`}
              description={`${price}`}
              hasButton={true}
              buttonText={addCart}
            />
          </div>
      )})}
    </div>
  )
}

export default Product
