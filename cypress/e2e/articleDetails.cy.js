describe('article details', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url'), {
      fixture: 'ArticleData.json'
    })
    cy.visit('/')
  })

  it('has various news details', () => {
    cy.get('[data-cy="card"]').first().click()
    cy.url('/1')
    cy.get('[data-cy="details-container"]')
    .should('contain','Biden Administration Moves to Tighten Limits on Deadly Air Pollution')
    .and('contain', 'By Coral Davenport')
    .and('contain', 'A new rule would, for the first time in a decade, reduce emissions of soot that disproportionately harm communities of color.')
    .and('contain', 'Section: climate')
    .and('contain', 'Publish Date: 2023-01-06T10:00:11-05:00')
    .and('contain', 'For more information, please click here.')
  })
})