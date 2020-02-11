describe('Using Counter component on index page', () => {
  before(() => {
    cy.visit('/')
  })

  it('has the correct <h3>', () => {
    cy.contains('h3', 'Local library component demo')
  })

  it('it displays the Counter component', () => {
    cy.contains('div', 'Default Counter')
  })

  it('initial counter value is zero', () => {
    cy.get('.component-container > div').contains('0')
  })

  it('click increments counter by 1', () => {
    cy.get('.component-container')
      .contains('+')
      .click()
    cy.get('.component-container > div').contains('1')
  })

  it('click decrements counter by 1', () => {
    cy.get('.component-container')
      .contains('-')
      .click()
    cy.get('.component-container > div').contains('0')
  })

  it('clicking 3 times increments counter to 3', () => {
    cy.get('.component-container')
      .contains('+')
      .click()
      .click()
      .click()
    cy.get('.component-container > div').contains('3')
  })
})
