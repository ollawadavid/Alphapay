import Signup from "../../support/POM/Alphapay/signupPage";
import websitepage from '../../support/POM/Alphapay/websitepage';

describe('Alphapy Sign-up', () => {
  
  const usersignup = new Signup();
  const homepage = new websitepage();
 

  beforeEach('visit site', () =>{
    homepage.website()
})

  it.only('Verify user can sign up successfully with correct details', () => {
    usersignup.signup('David ttest', 't0ttt', '09012385387', 'webss@gmail.com', 'qwertyuiop123!', 'qwertyuiop123!');
    cy.get('div[role="status"]').contains('Successful').should('be.visible')
  })

  it('Verify user cannot sign-up with already existing details', () =>{
    usersignup.signup('David Test', 'tester', '08012345698', 'tester@gmail.com', 'Password1!', 'Password1!')
    cy.get('div[role="status"]').contains('already exists').should('be.visible')
  })

  it('verify user cannot sign-up with an invalid email', () =>{
    usersignup.signup('David Test', 'tester2', '08012345334', 'mailer.com', 'Password1!', 'Password1!')
    cy.get('div[class="error"').contains('your email is quite weird').should('be.visible')
  })
})