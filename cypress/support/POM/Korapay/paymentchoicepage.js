class paymentchoicepage {
    debitcard() {
        // using span with text because it specifically targets the button with the text specified
        return cy.contains('span', 'Pay with Debit Card')
    }

    debit() {
        this.debitcard().click();
    }
}
export default paymentchoicepage