class PaymentPagefailedcard {
    
    cardNumberField = '#card-number';
    expiryDateField = '#card-expiry';
    cvvField = '#card-cvv';
    paymentButton = '.kpy-col-btn';
    // otpSubmitButton = '.kpy-col-btn.otp-form-btn';
  
    // Fill in the card details form
    enterfailedcard(failedcard) {
      cy.get(this.cardNumberField).type(failedcard.cardNumber);
      cy.get(this.expiryDateField).type(failedcard.expiryDate);
      cy.get(this.cvvField).type(failedcard.cvv);
      cy.get(this.paymentButton).click();
    }
  
    // // Fill in the PIN fields
    // enterCardPin(failedcardcard) {
    //   cy.get(`${this.cardPinField}0`).type(card.PIN1);
    //   cy.get(`${this.cardPinField}1`).type(card.PIN2);
    //   cy.get(`${this.cardPinField}2`).type(card.PIN3);
    //   cy.get(`${this.cardPinField}3`).type(card.PIN4);
    // }
  
    // Enter OTP and submit
    // submit(failedcardcard) {
    //   cy.get(this.otpField).type(card.OTP);
    //   cy.get(this.otpSubmitButton).click();
    // // Wait for the OTP field to be visible before proceeding
    //   cy.get(this.otpField).should('be.visible');
    // }
  }
  
  export default PaymentPagefailedcard;
  