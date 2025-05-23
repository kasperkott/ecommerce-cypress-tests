import { LoginPage } from '../support/pages/LoginPage'
import { CartPage } from '../support/pages/CartPage'

describe('Add to Cart Test', () => {
  it('should add product to cart and verify it', () => {
    const loginPage = new LoginPage()
    const cartPage = new CartPage()

    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()

    cartPage.addFirstProductToCart()
    cartPage.openCart()
    cartPage.verifyProductInCart()
  })
})
