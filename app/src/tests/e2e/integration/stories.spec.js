it('should load the stories', () => {
  cy.visit('/stories/top');
  cy.findAllByText(/Top/i).should('have.length', 1);
  cy.findAllByText(/Jobs/i).should('have.length', 1);
});
