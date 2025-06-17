import Paymentcreate from "../../support/POM/Korapay/Paymentcreatepage";
import Paymentcreateassert from "../../support/POM/Assertions/Paymentcreateassert";
import korapaysite from "../../support/POM/Korapay/korapaysitepage"
import paymentchoicepage from "../../support/POM/Korapay/paymentchoicepage";
import PaymentPage from "../../support/POM/Korapay/Paymentpage";
import paymentbuttondisabled from "../../support/POM/Assertions/paymentbuttondisabled";

describe('payment with atm card', () =>{
    const pay = new Paymentcreate();
    const homepage = new korapaysite();
    const choice = new paymentchoicepage();
    const paymentPage = new PaymentPage();
    const disabled = new paymentbuttondisabled();
    const assert = new Paymentcreateassert();

    beforeEach('visit site', () =>{
        homepage.website()
        assert.url();
    })
    
    it.only('Verify user with valid debit card details is able to make payment', () =>{

        pay.payment('David', 'Test@gmail.com', '1000000');
        choice.debit();
        paymentPage.cardnumber();
        
})

    it('Verify user cannot proceed to payment page if amount exceed maximum amount', () =>{
        pay.maxamount('User', 'user@gmail.com', '1000000001')
        disabled.button();
    })

    it('Verify user cannot initiate payment with an invalid email address', () =>{
        pay.maxamount('test', 'Test.com', '1000000');
        disabled.button();
    })

    it('Verify user cannot proceed without entering full name', () =>{
        pay.emptyfullname('user@gmail.com', '1000000');
        disabled.button();
        //failed
    })

    it('Verify user cannot proceed without entering email address', () =>{
        pay.emptyemail('testuser', '1000000');
        disabled.button();
    })

    it('Verify user cannot proceed without entering amount', () =>{
        pay.emptyamount('Tester', 'Tester@email.com');
        disabled.button();
    })
})