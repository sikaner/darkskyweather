/* global cy */
describe('Request', () => {
  it('displays weather from lat/lng', () => {
    cy.request('http://localhost:3001/weather?lat=32.939176499999995&lng=-96.9849399')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('body')
      })
  })
  it('fetch lat/lng from address', () => {
    cy.request('http://localhost:3001/latng?type=address&value=coppell')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('body')
      })
  })
})
