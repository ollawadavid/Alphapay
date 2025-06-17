import Loginpage from "../../support/POM/Alphapay/Loginpage";
import logout from "../../support/POM/Alphapay/logoutpage";
import dashboardpage from "../../support/POM/Alphapay/dashboardpage";
import websitepage from "../../support/POM/Alphapay/websitepage";
import logoutAssertion from "../../support/POM/Assertions/logoutAssertion";

describe('logout', () =>{
    const login = new Loginpage();
    const signout = new logout();
    const overview = new dashboardpage();
    const homepage = new websitepage();
    const signoutcheck = new logoutAssertion();
   
    before('visit site', () =>{
        homepage.website()
    })

    it('logout of account', () =>{
       
        login.login('tester11@gmail.com', 'Password1!');
        overview.dashboard();
        signout.logout();
        signoutcheck.logoutSuccess(); 
    })
})