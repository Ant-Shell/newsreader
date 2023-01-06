describe('articles', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url'), {
      fixture: 'articleData.json'
    })
    cy.visit('/')
  })

  it('has a header with a banner and search bar', () => {
    cy.get('[data-cy="header"]')
    .within(() => {
      cy.get('[data-cy="banner"]').contains('Science News Reader')
      cy.get('[data-cy="search"]').should('be.visible')
    })
  })

  it('has article cards', () => {
    cy.get('[data-cy="article-container"]').children().should('have.length', 3)
    cy.get('[data-cy="article-container"]')
    .within(() => {
      cy.get('[data-cy="card"]').first()
      .should('contain', 'Biden Administration Moves to Tighten Limits on Deadly Air Pollution')
      cy.get('[data-cy="card"]').eq(1)
      .should('contain', "These Engineers Want to Build Conscious Robots. Others Say It's a Bad Idea.")
      cy.get('[data-cy="card"]').last()
      .should('contain', "Damar Hamlin's Ability to Communicate Signals a 'Turning Point'")
    })
  })

  it('can search for articles', () => {
    cy.get('[data-cy="search"]').type('These').should('have.value', 'These')
    cy.get('[data-cy="article-container"]').children().should('have.length', 1)
    cy.get('[data-cy="card"]').first()
    .should('contain', "These Engineers Want to Build Conscious Robots. Others Say It's a Bad Idea.")
  })

  it('has a footer with text inside', () => {
    cy.get('[data-cy="footer"]').contains('Created by Anthony Shellman')
  })
})
