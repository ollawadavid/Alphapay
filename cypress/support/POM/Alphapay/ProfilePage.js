class profilePage{

    

    usernamefield() {
        return cy.get("input[placeholder='Doe']")
    }

    fullnamefield() {
        return cy.get("input[placeholder='John Doe']")
    }
    submitbutton() {
        return cy.get('form > .button')
    }

    update(username, fullname){
        this.profilebutton().click()
        this.usernamefield().clear().type(username)
        this.fullnamefield().clear().type(fullname)
        this.submitbutton().click()
    }

}

export default profilePage;