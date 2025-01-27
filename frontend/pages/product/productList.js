import useSWR from 'swr'

const ProductList = () => {
  const { data: products, error } = useSWR('http://localhost:3000/products')
  // const error = null
  // const products = [
  //   {
  //     id: 1,
  //     brand: "Marca1",
  //     description: "Televisión 54''",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 80000
  //   },
  //   {
  //     id: 2,
  //     brand: "Marca1",
  //     description: "Microondas 120W",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 40000
  //   },
  //   {
  //     id: 3,
  //     brand: "Marca1",
  //     description: "Horno Gas Premium",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 30000
  //   },
  //   {
  //     id: 4,
  //     brand: "Marca2",
  //     description: "Refrigerador",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 20000
  //   },
  //   {
  //     id: 5,
  //     brand: "Marca2",
  //     description: "Cargador Smart Phone USB",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 15000
  //   },
  //   {
  //     id: 6,
  //     brand: "Marca2",
  //     description: "Lámpara Led USB",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 50000
  //   },
  //   {
  //     id: 7,
  //     brand: "Marca2",
  //     description: "Estufa Infrarrojo",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 80000
  //   },
  //   {
  //     id: 8,
  //     brand: "Marca3",
  //     description: "Calefont a gas",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 70000
  //   },
  //   {
  //     id: 9,
  //     brand: "Marca3",
  //     description: "Aspiradora sin bolsa",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 80000
  //   },
  //   {
  //     id: 10,
  //     brand: "Marca3",
  //     description: "Audífonos inalámbricos Galaxy",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 40000
  //   },
  //   {
  //     id: 11,
  //     brand: "Marca4",
  //     description: "Mouse USB",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 30000
  //   },
  //   {
  //     id: 12,
  //     brand: "Marca4",
  //     description: "Bicicleta Moutainbike Aro 29",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 40000
  //   },
  //   {
  //     id: 13,
  //     brand: "Marca4",
  //     description: "Hervidor Nuclear 1.7L",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 80000
  //   },
  //   {
  //     id: 14,
  //     brand: "Marca5",
  //     description: "Extractor de jugo Nutrimenos",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 80000
  //   },
  //   {
  //     id: 15,
  //     brand: "Marca5",
  //     description: "Minipimer MaxiHand 2000",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 60000
  //   },
  //   {
  //     id: 16,
  //     brand: "Marca5",
  //     description: "Consola Polystation 7",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 120000
  //   },
  //   {
  //     id: 17,
  //     brand: "Marca6",
  //     description: "Parlante Bluetooth LoudTeeth 1000",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 90000
  //   },
  //   {
  //     id: 18,
  //     brand: "Marca6",
  //     description: "Laptop Gamer YPS Bell",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 180000
  //   },
  //   {
  //     id: 39,
  //     brand: "Marca6",
  //     description: "Smartphone Teledummy II",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 120000
  //   },
  //   {
  //     id: 19,
  //     brand: "Marca7",
  //     description: "Neumaticos TripleMax 205/60/R16 Pack de 4 unidades",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 150000
  //   },
  //   {
  //     id: 20,
  //     brand: "Marca7",
  //     description: "Barra Antivuelco Universal para Camioneta 4x4",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 120000
  //   },
  //   {
  //     id: 21,
  //     brand: "Marca7",
  //     description: "Cooler 6 litros recargable",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 45000
  //   },
  //   {
  //     id: 22,
  //     brand: "Marca8",
  //     description: "Set de herramientas",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 65000
  //   },
  //   {
  //     id: 23,
  //     brand: "Marca8",
  //     description: "Taladro percutor 700W",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 120000
  //   },
  //   {
  //     id: 24,
  //     brand: "Marca8",
  //     description: "Lijadora Ultrasonido 800W",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 140000
  //   },
  //   {
  //     id: 25,
  //     brand: "Marca9",
  //     description: "Pack toallas mano Bambu-Menta",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 5000
  //   },
  //   {
  //     id: 26,
  //     brand: "Marca9",
  //     description: "Cafetera Picasso 2.6L",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 50000
  //   },
  //   {
  //     id: 27,
  //     brand: "Marca9",
  //     description: "Parrilla Eléctrica XXL",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 180000
  //   },
  //   {
  //     id: 28,
  //     brand: "Marca10",
  //     description: "Licuadora Expert Red",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 80000
  //   },
  //   {
  //     id: 29,
  //     brand: "Marca10",
  //     description: "Cama King Size Europea",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 140000
  //   },
  //   {
  //     id: 30,
  //     brand: "Marca11",
  //     description: "Cojín Velvet Pompones",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 25000
  //   },
  //   {
  //     id: 31,
  //     brand: "Marca11",
  //     description: "Coche Travel System Tesla",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 35000
  //   },
  //   {
  //     id: 32,
  //     brand: "Marca12",
  //     description: "Control Inalámbrico Robot",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 65000
  //   },
  //   {
  //     id: 40,
  //     brand: "Marca12",
  //     description: "Freezer Horizontal 99L",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 120000
  //   },
  //   {
  //     id: 33,
  //     brand: "Marca13",
  //     description: "Carpa de Playa 'El Yaque'",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 50000
  //   },
  //   {
  //     id: 34,
  //     brand: "Marca13",
  //     description: "Bolso Travel Duffle 80L",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 40000
  //   },
  //   {
  //     id: 35,
  //     brand: "Marca14",
  //     description: "Colchón inflable 2 plazas",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 20000
  //   },
  //   {
  //     id: 36,
  //     brand: "Marca14",
  //     description: "Cocinilla a gas Mini",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 25000
  //   },
  //   {
  //     id: 37,
  //     brand: "Marca15",
  //     description: "Tabla Surf 7'11 Pipeline",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 180000
  //   },
  //   {
  //     id: 38,
  //     brand: "Marca15",
  //     description: "Set asado 4 piezas",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 40000
  //   },
  //   {
  //     id: 850,
  //     brand: "Marca Acme",
  //     description: "Libélula livea 20W",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 15000
  //   },
  //   {
  //     id: 888,
  //     brand: "Marca Acme",
  //     description: "Cable de teléfono inteligente 100 metros",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 10000
  //   },
  //   {
  //     id: 39,
  //     brand: "Marca Acme",
  //     description: "Plan directv 50 mb",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 5000
  //   },
  //   {
  //     id: 40,
  //     brand: "Marca Acme",
  //     description: "Muñeca lipo 30",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 18000
  //   },
  //   {
  //     id: 150,
  //     brand: "Marca Acme",
  //     description: "luces crypto 80W",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 9000
  //   },
  //   {
  //     id: 500,
  //     brand: "Marca Acme",
  //     description: "luces crypto 120W",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 29990
  //   },
  //   {
  //     id: 600,
  //     brand: "Marca Acme",
  //     description: "Earpods cimul",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 129990
  //   },
  //   {
  //     id: 41,
  //     brand: "Ferrati",
  //     description: "Automóvil eléctrico para niños 8 años",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 389990
  //   },
  //   {
  //     id: 42,
  //     brand: "Televi",
  //     description: "Televisión 75 pulgadas 8k libre región, Timeplex",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 1200000
  //   },
  //   {
  //     id: 43,
  //     brand: "Televi",
  //     description: "Televisión 60 pulgadas 4k libre región, Maracaná",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 500000
  //   },
  //   {
  //     id: 44,
  //     brand: "Televi",
  //     description: "Televisión 80 pulgadas QLED libre región, Maracaná",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 389990
  //   },
  //   {
  //     id: 45,
  //     brand: "Televi",
  //     description: "Televisión 80 QLED, Rio",
  //     image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
  //     price: 2500000
  //   }
  // ]

  return {
    data: products,
    isLoading: !error && !products,
    isError: error
  }
}

export default ProductList
