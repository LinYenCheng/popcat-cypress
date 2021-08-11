context('popcat.spec', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit('https://popcat.click/');
  });

  describe('貓貓點擊大賽', () => {
    it('點 1000 下', () => {
      Array(1000).fill('val').forEach((elm, index) => {
        cy.wait(100 * (index % 5 + 1));
        cy.get('.cat-img').click();
      });
    });
  });  
});
