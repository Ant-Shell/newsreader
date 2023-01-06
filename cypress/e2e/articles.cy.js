describe('articles', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url'), {
      fixture: 'articleData.json'
    })
    cy.visit('/')
  })

  it('has a header with a banner and search bar', () => {

  })

  it('has article cards', () => {

  })

  it('has a footer with text inside', () => {
    
  })


})