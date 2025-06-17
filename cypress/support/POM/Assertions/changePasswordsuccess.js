class changePasswordsuccess{
    assertSuccess() {
        return cy.get('div[role="status"]')
    }

    assert() {
        this.assertSuccess().should('have.text', 'Password updated successfully').should('be.visible')
    }

}
export default changePasswordsuccess