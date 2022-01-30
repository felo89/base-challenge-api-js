const { discountByBrand } = require('@models/discount')
const { getDiscountByBrand } = require('@controllers/discountController')

jest.mock('@models/discount', () => ({
  discountByBrand: jest.fn(),
}))

let ctx = {}

describe('Discount controller test', () => {
  describe('getDiscounts', () => {
    beforeAll(() => {
      ctx = { params: { brand: 'Marca1' } }
    })

    it('return a discount', async () => {
      const discountMock = { brand: 'Marca1' }
      discountByBrand.mockReturnValueOnce(discountMock)

      await getDiscountByBrand(ctx)

      expect(ctx.body).toEqual(discountMock)
      expect(ctx.status).toEqual(200)
    })

    it('return an error when discountByBrand fails', async () => {
      discountByBrand.mockImplementation(() => {
        throw new Error();
      })

      await getDiscountByBrand(ctx)

      expect(ctx.status).toBe(500)
      expect(ctx.body).toBe("Error")
    })
  })
})
