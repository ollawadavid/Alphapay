class Logout{
    
    logoutbutton() {
        return cy.get('[href="/coming-soon"]')   
    }

    logout(){
        this.logoutbutton().click()
    }
}
export default Logout;