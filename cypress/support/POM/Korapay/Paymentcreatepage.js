import { randomName, randomEmail, randomAmount } from '../../random.js';  

class Paymentcreate{

    customernamefield() {
         cy.get('#customer-name')
    }

    emailfield() {
        return cy.get('#customer-email')
    }

    amountfield() {
        return cy.get('#link-amount')
    }

    submitbutton() {
        return cy.get("button[type='submit']")
    }

    payment() {
        this.customernamefield().type(randomName());
        this.emailfield().type(randomEmail());
        this.amountfield().type(randomAmount());
        this.submitbutton().click()
    }
    maxamount() {
        this.customername().type(randomName());
        this.email().type(randomEmail());
        this.amount().type(randomAmount());
    }

    emptyfullname() {
        this.email().type(randomEmail());
        this.amount().type(randomAmount());
    }

    emptyemail() {
        this.customername().type(randomName);
        this.amount().type(randomAmount());
    }

    emptyamount() {
        this.customername().type(randomName());
        this.email().type(randomEmail());
    }
}
export default Paymentcreate
