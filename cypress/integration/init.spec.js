/* global cy */
describe('Cypress', () => {
  it('visit app', () => {
    cy.visit('/')
  })
  it('type address/zipcode', () => {
    const input = '75019'
    cy.get('#zipcode-address')
      .type(input)
      .should('have.value', input)
  })
  it('search for zipcode/address weather for 75019', () => {
    cy.get('#search-weather')
      .click()
      .get('#weather-display')
      .should('contain.text', 'Current temperature in Coppell, TX 75019, USA is')
  })
  it('search for invalid address/zipcode', () => {
    const input = '#$#!'
    cy.get('#zipcode-address')
      .clear()
      .type(input)
      .get('#search-weather')
      .click()
      .get('.Toastify')
  })
})
