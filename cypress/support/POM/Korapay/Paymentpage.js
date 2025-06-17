class PaymentPage {
  entercardnumber() {
    return cy.get('[data-testid="card-number"]')
  }

  // entercardpin() {
  //   cy.get('#card-expiry').type(Cypress.env('ATM_CARD_PIN'));
  // }

cardnumber() {
  this.entercardnumber().type(Cypress.env('ATM_CARD_NUMBER'));
}

}
  
  export default PaymentPage;
  