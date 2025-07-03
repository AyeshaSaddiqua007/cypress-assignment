class MerchantPage {
    clickAddMerchant() {
      cy.wait(1000);
      cy.contains('Deine Händler hinzufügen').scrollIntoView().click();

    }
  
    searchMerchant(name) {
      cy.get('input[placeholder="Name des Lieferanten"]').type(name);
    }
  
    selectMerchant() {
      cy.contains('Lennard & Söhne GmbH').click();
    }
  
    enterCustomerNumber(number) {
      cy.get('#newCustomerNumber-0').type(number);
      // WE did not use placeholde element as we cant type there
    }
  
    submitForm() {
      cy.contains('Hinzufügen').click();
    }
  
    verifySuccess() {
      cy.contains('Success!').should('be.visible');
    }
  }
  
  export default new MerchantPage();
  