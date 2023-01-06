describe('articles', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url'), {
      fixture: 'articleData.json'
    })
    cy.visit('/')
  })

  it('has a header with a banner and search bar', () => {
    // target header
    // verify banner
    // verify search bar
  })

  it('has article cards', () => {
    // target card container
    // verify number of cards
    // verify card contents
  })

  it('can search for articles', () => {
    // target search bar
    // perform search
    // verify number of cards
  })

  it('has a footer with text inside', () => {
    // target footer
    // verify fontent of footer
  })


})