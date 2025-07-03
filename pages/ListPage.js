class ListPage {
  
  selectListByName(name) {
    cy.wait(100);
    cy.contains(name).scrollIntoView().click({force:true});
  }
}

export default new ListPage();  

  