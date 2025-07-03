
import LoginPage from '../../pages/LoginPage';
import MerchantPage from '../../pages/MerchantPage';

describe('Add Test Merchant', () => {
  before(function () {
    cy.fixture('user').as('userData');
  });

  it('should login and add test merchant with test customer number', function () {
    LoginPage.visit();
    LoginPage.fillEmail(this.userData.email);
    LoginPage.fillPassword(this.userData.password);
    LoginPage.submit();

    // its optional: wait briefly for page load or popup
    cy.wait(2000);
    cy.reload();
    cy.get('.relative > .transition-colors').click();
    // Handle popup if implemented
    cy.closePopupIfVisible();

    MerchantPage.clickAddMerchant();
    MerchantPage.searchMerchant('Lennard');
    MerchantPage.selectMerchant();
    MerchantPage.enterCustomerNumber(this.userData.customerNumber);
    MerchantPage.submitForm();
    MerchantPage.verifySuccess();
  });
});
