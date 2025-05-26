class CartPage {
  elements = {
    cartButton: () => cy.get('.shopping_cart_link'),
    cartItems: () => cy.get('.cart_item'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
  };

  openCart() {
    this.elements.cartButton().click();
  }

  getNumberOfItems() {
    return this.elements.cartItems().its('length');
  }

  clickCheckout() {
    this.elements.checkoutButton().click();
  }
}

export default new CartPage();
