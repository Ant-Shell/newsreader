describe('article details', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url'), {
      fixture: 'ArticleData.json'
    })
    cy.visit('/')
  })

  it('has various news details', () => {
    
  })
})