describe('API User Test', () => {
  it('should get user data via API', () => {
    cy.request('https://reqres.in/api/users/2').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('email')
    })
  })
})
