import LoginPage from '../support/pages/LoginPage';

describe('Login Page - Login Scenarios', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('should log in successfully with valid credentials from fixture', () => {
    cy.fixture('correct_user').then((user) => {
      LoginPage.login(user.username, user.password);
    });

    cy.checkUrlIncludes('/inventory.html');
  });

  it('should display error message with invalid credentials from fixture', () => {
    cy.fixture('wrong_user').then((user) => {
      LoginPage.login(user.username, user.password);
    });

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match any user in this service');

    cy.checkUrlIncludes('/'); 
  });
});
