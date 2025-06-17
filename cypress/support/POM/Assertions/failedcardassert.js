class failedcardassert{
    errormessage() {
        cy.get('.details-error').should('contain.text', 'Invalid')
    }
}
export default failedcardassert