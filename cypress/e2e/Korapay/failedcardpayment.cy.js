import Paymentcreate from "../../support/POM/Korapay/Paymentcreatepage";
import PaymentPagefailedcard from "../../support/POM/Korapay/Paymentpagefailedcard";
import Paymentcreateassert from "../../support/POM/Assertions/Paymentcreateassert";
import korapaysitepage from "../../support/POM/Korapay/korapaysitepage";
import paymentchoicepage from "../../support/POM/Korapay/paymentchoicepage";
import failedcardassertpage from '../../support/POM/Assertions/failedcardassert';

describe('payment with atm card', () =>{

    const pay = new Paymentcreate();
    const homepage = new korapaysitepage();
    const choice = new paymentchoicepage();
    const assert = new Paymentcreateassert();
    const Paymentpagefailedcard = new PaymentPagefailedcard();
    const error = new failedcardassertpage();

    before('visit site', () =>{
        homepage.website();
        assert.url();
    })
    
    it('Verify user cannot make payment with debit card having insufficient funds', () =>{

        pay.payment('David', 'Test@gmail.com', '1000');
        choice.debit();

        cy.fixture('failedcard').then((failedcard) => {
            // Fill in the payment form using the page object methods
            Paymentpagefailedcard.enterfailedcard(failedcard);
            Paymentpagefailedcard.enterfailedcard(failedcard);
          });

        error.errormessage();

})
})