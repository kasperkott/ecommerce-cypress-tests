import LoginPage from '../support/pages/LoginPage';
// In reality, the saucedemo.com app does not fetch product data from a separate endpoint like /inventory.json.
// The data is embedded directly into the HTML, so intercept will not work — this is just a placeholder example.
describe('Mocked Inventory Product Price (Example Only)', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/inventory.json', (req) => {
      req.reply((res) => {
        if (res.body && res.body.length > 0) {
          res.body[0].price = 9999;
        }
      });
    }).as('mockInventory');

    cy.visit('/'); // Odwiedź stronę przed użyciem loginu
    LoginPage.login('standard_user', 'secret_sauce');

    cy.url().should('include', '/inventory.html');
  });

  it('should display mocked product price', () => {
    cy.contains('$9999').should('be.visible');
  });
});