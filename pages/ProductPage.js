class ProductPage {
  addProductToCart(productName) {
    cy.wait(1000);
    cy.reload();
    cy.get('[data-testid="shopping-list"]')
      .filter(`:contains("${productName}")`)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .within(() => {
        cy.get('.icon.icon--plus').click();
      });
  }

  openCart() {
    cy.get('.icon.icon--cart').eq(1).wait(500)
    .click({ force: true });
  }

  placeOrder() {
    cy.contains('Jetzt bestellen').click({ force: true });
  }
}

export default new ProductPage();


