class Paymentcreateassert{
    url() {
        cy.url().should('eq', 'https://checkout.koraapi.com/pay/QkPen8uAo893H1j');
    }
    
}
export default Paymentcreateassert