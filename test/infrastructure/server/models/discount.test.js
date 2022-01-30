const { discountByBrand } = require('@models/discount')

const discountMock = [{ brand: 'Marca1' }, { brand: 'Marca2' }]
jest.mock('@schema/discount-schema', () =>( {
  find: jest.fn(val => discountMock.find(el => el.brand === val.brand)),
}))

describe('Discount model test', () => {
  it('return a discount by brand', async() => {
    const brand = 'Marca1'

    const discount = await discountByBrand(brand)

    expect(discount).toEqual({ brand })
  })
})
