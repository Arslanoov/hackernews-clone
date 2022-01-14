it('should load the page', () => {
  cy.visit('/');
  cy.findAllByText(/Top/i).should('have.length', 1);
});
