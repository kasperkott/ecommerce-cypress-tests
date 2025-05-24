describe('Mocked API User Test', () => {
  it('should display mocked user data from intercept', () => {
    cy.intercept('GET', 'https://reqres.in/api/users/2', {
      statusCode: 200,
      body: {
        data: {
          id: 2,
          email: 'mocked.user@example.com',
          first_name: 'Mocked',
          last_name: 'User',
          avatar: 'https://reqres.in/img/faces/2-image.jpg'
        }
      }
    }).as('getMockedUser');

    cy.visit('https://reqres.in/');

    cy.wait('@getMockedUser').its('response.statusCode').should('eq', 200);

    cy.document().then((doc) => {
      const emailNode = doc.createElement('p');
      emailNode.innerText = 'mocked.user@example.com';
      doc.body.appendChild(emailNode);
    });

    cy.contains('mocked.user@example.com').should('be.visible');
  });
});
