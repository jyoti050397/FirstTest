import LoginPage from '../projectobjects/loginPage';
import EmailInvitePage from '../projectobjects/emailinvitePage';
import BillingPage from '../projectobjects/billingPage';


describe('ClickUp Test', () => {
  const loginPage = new LoginPage();
  const emailInvitePage = new EmailInvitePage();
  const billingPage = new BillingPage()

  beforeEach(() => {
    cy.fixture('credential').then((credentials) => {
      cy.Login(credentials.userName, credentials.Password);
      
      
    });
    Cypress.on('uncaught:exception', () => {
      // Ignore the uncaught exception
      return false;
    });
  });
  
  it('Execution of test steps', () => {
    cy.fixture('credential').then((credentials) => {
    
    loginPage.clickProfile()

    emailInvitePage.hover();

    emailInvitePage.clickPeople();

    emailInvitePage.checkSections();

    emailInvitePage.searchEmail(credentials.email);

    //emailInvitePage.guideInvite();

    emailInvitePage.inviteGuest(credentials.email2);

    emailInvitePage.cancelInvitedEmail();

  });
})
  


})