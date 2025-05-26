describe('User API - Positive and Negative Scenarios', () => {
  const baseUrl = 'https://www.saucedemo.com';

  it('should successfully load login page (status 200)', () => {
    cy.request(baseUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include('<title>Swag Labs</title>');
    });
  });

  it('should fail to login with incorrect credentials (UI validation)', () => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('invalid_pass');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should allow login with valid credentials and redirect to inventory', () => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory');
  });
});
