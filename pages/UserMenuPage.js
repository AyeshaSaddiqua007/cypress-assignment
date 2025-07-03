class UserMenuPage {
    logout() {
      // Click user icon
      cy.get('[data-testid="user-icon"]').click();
      // Click logout (Abmeldung)
      cy.contains('Abmeldung').click();
      // Verify URL contains login or logout page
      cy.url().should('include', '/login');
    }
  }
  
  export default new UserMenuPage();
  
  
  