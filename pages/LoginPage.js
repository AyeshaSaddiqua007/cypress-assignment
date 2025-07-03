class LoginPage {
  visit() {
    cy.visit('https://shop.kollex.de/login');
  }
//saving URL has better ways too like using variables but its was not needed at this point
  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(email, password) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
    cy.closeTopPopupIfExists();
  }
}

export default new LoginPage();
