import LoginPage from '../support/pages/LoginPage';
import CartPage from '../support/pages/CartPage';

describe('Add to Cart - Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should add a product to the cart and verify it', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    CartPage.openCart();
    CartPage.getNumberOfItems().should('eq', 1);
  });
});
