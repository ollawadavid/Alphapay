class passwordPage{

    securitybutton() {
        return cy.get('a[href="/dashboard/settings/security"]')
    }

    oldpassword() {
        return cy.get("input[placeholder='Old Password']")
    }

    newpassword() {
        return cy.get("input[placeholder='New Password']")
    }

    submitbutton() {
        return cy.contains('button', 'Change')
    }

   
     update(Oldassword, Newpassword){
         this.securitybutton().click()
         this.oldpassword().type(Oldassword)
         this.newpassword().type(Newpassword)
         this.submitbutton().click()
     }

}

export default passwordPage;