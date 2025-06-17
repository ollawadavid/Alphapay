class paymentbuttondisabled{
    button() {
        // Locate the button by its class and text and assert that it is disabled
        cy.contains('button', 'Proceed').should('be.disabled');  
    }
}
export default paymentbuttondisabled