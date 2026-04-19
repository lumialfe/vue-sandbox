describe('The Home Page', () => {
  it('successfully adds one to counter', () => {
    cy.visit('/')

    expect(cy.get('p').contains('Count:')).to.exist

    cy.get('button').contains('++').click()

    expect(cy.get('p').contains('1')).to.exist
  })
})