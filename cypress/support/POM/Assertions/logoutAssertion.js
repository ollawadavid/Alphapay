class logoutAssertion{
    logoutSuccess() {
        cy.url().should('include', 'https://alphapay.netlify.app/auth/login');
    }

}
export default logoutAssertion