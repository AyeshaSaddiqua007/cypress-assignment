// import productPage from '../../pages/ProductPage';
// import userMenu from '../../pages/UserMenuPage';

// describe('Place order and logout', () => {
//   beforeEach(() => {
//     // Add login logic here if required
//     cy.visit(); // or your base product page
//   });

//   it('should place an order for Coca-Cola and logout', () => {
//     productPage.addProductToCart('Coca-Cola');
//     productPage.openCart();
//     productPage.placeOrder();
//     userMenu.logout();
//   });
// });
// import loginPage from '../../pages/LoginPage';
// import productPage from '../../pages/ProductPage';
// import userMenu from '../../pages/UserMenuPage';
// import listPage from '../../pages/ListPage';



// describe('Place order and logout', () => {
//   let userData;

//   before(() => {
//     // Load fixture once before all tests
//     cy.fixture('userCredentials').then((data) => {
//       userData = data;
//     });
//   });

//   beforeEach(() => {
//     // Use fixture data to login
//     loginPage.visit();
//     loginPage.fillEmail(userData.email);
//     loginPage.fillPassword(userData.password);
//     loginPage.submit();

//     // Optionally, wait or assert login success here
//   });

//   it('should place an order for Coca-Cola and logout', () => {
//     productPage.addProductToCart('Coca-Cola');
//     productPage.openCart();
//     productPage.placeOrder();
//     userMenu.logout();

//   });
// });
import loginPage from '../../pages/LoginPage';
import listPage from '../../pages/ListPage';
import productPage from '../../pages/ProductPage';
import userMenu from '../../pages/UserMenuPage';

describe('Place order and logout', () => {
    
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      loginPage.visit();
      loginPage.fillEmail(user.email);
      loginPage.fillPassword(user.password);
      loginPage.submit();
    

      // Wait for login to complete
      cy.url().should('not.include', '/login');
cy.wait(1000);
//cy.reload();
//cy.closeTopPopupIfExists();
//cy.closeTopPopupIfExists();
// cy.get('body').then($body => {
//     if ($body.find('.relative > .transition-colors').length > 0) {
//       cy.get('.relative > .transition-colors')
//         .should('be.visible')
//         .click(); // or any action to dismiss
//     }
//   });
  cy.wait(1000);
  cy.reload();
  cy.get('.relative > .transition-colors').click();
      // Select the list by name
      listPage.selectListByName('q w e r t y l i m i');

      // Optional: Click the add-items icon if needed
      //listPage.clickAddItemsIcon();
    });
  });

  it('should place an order for Coca-Cola and logout', () => {
    productPage.addProductToCart('Coca-Cola');
    productPage.openCart();
    productPage.placeOrder();
    userMenu.logout();
  });
});
