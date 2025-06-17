import Loginpage from '../../support/POM/Alphapay/Loginpage';
import websitepage from '../../support/POM/Alphapay/websitepage';

describe('Sign-in', () =>{
    const signin = new Loginpage();
    const homepage = new websitepage();

    beforeEach('visit site', () =>{
        homepage.website()
    })
    
    it.only('Verify ueer can sign-in with correct details', () =>{
        signin.login('te1236@gmail.com', 'Password1!')
        //assertion
        cy.get('div[role="status"]').should('contain', 'Welcome').should('be.visible')
    })

    it('Verify user cannot sign-in with incorrect details', () =>{
        signin.login('email@gmail.com', 'password1!')
        //assertion
        cy.get('div[role="status"]').should('contain', 'Invalid').should('be.visible')
    })
})