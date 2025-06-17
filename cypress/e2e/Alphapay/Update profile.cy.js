import websitepage from '../../support/POM/Alphapay/websitepage';
import Loginpage from '../../support/POM/Alphapay/Loginpage';
import profilePage from '../../support/POM/Alphapay/ProfilePage';

describe('Update user profile', () =>{
    const signin = new Loginpage();
    const update = new profilePage();
    const homepage = new websitepage();

    before('visit website', () =>{
        homepage.website();
    })

    it('Updating The User Profile and Saving', () =>{
      
      signin.login('testz@gmail.com', 'Password1!');
      update.update('david test', 'Tester 1');

      //Assertion
      cy.get('h1').should('contain.text', 'david')
      
    })
})