class changePasswordfail{
    assertfail() {
        return cy.get('div[role="status"]')
    }

    assertfail() {
        this.assertfail().should('have.text', 'Invalid credentials').should('be.visible')
    }

}
export default changePasswordfail