export class CartPage {
  addFirstProductToCart() {
    cy.get('.inventory_item').first().find('button').click()
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  verifyProductInCart() {
    cy.get('.cart_item').should('have.length.at.least', 1)
  }
}
