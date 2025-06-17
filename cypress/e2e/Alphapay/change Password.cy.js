import websitepage from "../../support/POM/Alphapay/websitepage"
import Loginpage from "../../support/POM/Alphapay/Loginpage"
import passwordPage from "../../support/POM/Alphapay/passwordPage"
import dashboardpage from "../../support/POM/Alphapay/dashboardpage"
import changePasswordsuccess from "../../support/POM/Assertions/changePasswordsuccess"
import changePasswordfail from "../../support/POM/Assertions/changePasswordfail"

describe('change password', () =>{
    const homepage = new websitepage();
    const signin = new Loginpage();
    const password = new passwordPage();
    const overview = new dashboardpage();
    const passwordsuccess = new changePasswordsuccess();
    const passwordfail = new changePasswordfail();

    beforeEach('visit website', () =>{
        homepage.website()
    })

    it('Verify user can successfully change password', () =>{
        signin.login('webss@gmail.com', 'passwOrd1234555!')
        overview.dashboard()
        password.update('passwOrd123455!', 'passwOrd1234555!')
        passwordsuccess.assertSuccess()
    })

    it.only('Verify user cannot change password when entering incorrect old password', () =>{
        signin.login('webss@gmail.com', 'passwOrd1234555!')
        password.update('PasswOrd1234!!', 'passwOrd123!')
        passwordfail.assertfail()
    })
})