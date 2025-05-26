Cypress.Commands.add('checkUrlIncludes', (path) => {
  cy.url().should('include', path);
});
