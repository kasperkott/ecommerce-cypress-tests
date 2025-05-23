import { LoginPage } from '../support/pages/LoginPage'

describe('Login Test', () => {
  it('should login successfully with valid credentials', () => {
    const loginPage = new LoginPage()
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()

    cy.url().should('include', '/inventory')
  })
})
