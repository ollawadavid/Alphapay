import Paymentcreate from "../../support/POM/Korapay/Paymentcreatepage";
import korapaysitepage from "../../support/POM/Korapay/korapaysitepage";
import Paymentcreateassert from "../../support/POM/Assertions/Paymentcreateassert";

describe('Korapay checkout payment creation', () =>{
    const checkout = new Paymentcreate();
    const site = new korapaysitepage();
    const payassert = new Paymentcreateassert();

    before('visit site', () =>{
        site.website()
    })
    
    it('Verify user is able to create payment checkout', () =>{
        checkout.payment();
        payassert.create();
    })
})