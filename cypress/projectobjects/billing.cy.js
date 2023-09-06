import LoginPage from '../projectobjects/loginPage';

import BillingPage from '../projectobjects/billingPage';

describe('ClickUp Test', () => {
  const loginPage = new LoginPage();
  const billingPage = new BillingPage()

  before(() => {
    cy.fixture('credential').then((credentials) => {
      cy.Login(credentials.userName, credentials.Password);
    });
    Cypress.on('uncaught:exception', () => {
      // Ignore the uncaught exception
      return false;
    });
  });

  it('Test case 1', () => {

    loginPage.clickProfile()

    billingPage.clickUpgradeButton()

    billingPage.verifyBillingPageUrl()

    billingPage.verifyPlanOptions()
    
    billingPage.verifyToggleSetToYearly()

    billingPage. verifyPlanCosts()

    billingPage.verifyMostPopularPlan()

    billingPage.clickUnlimitedUpgradeButton()

    billingPage.verifyBilledMonthlySelected()

    billingPage.selectCountryAfganistan()

    billingPage.verifyZipCodeDisabled()
    
    billingPage.clickCloseButton()
})
})