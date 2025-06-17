class Signup{
    signupbutton() {
        return cy.get("div[class='nav_item'] a")
    }

    fullname() {
        return cy.get("input[placeholder='Your Full Name e.g Jane Doe']")
    }

    username() {
        return cy.get("input[placeholder='Your Username']")
    }

    phonenumber() {
        return cy.get("input[placeholder='Your Phone Number']")
    }

    email() {
        return cy.get("input[placeholder='Your Email']")
    }

    password() {
        return cy.get("input[placeholder='Your Password']")
    }

    confirmpassword() {
        return cy.get("input[placeholder='Confirm Password']")
    }

    createacct() {
        return cy.get('.button')
    }

    signup(fullname, username, phonenumber, email, password, confirmpassword) {
        this.signupbutton().click()
        this.fullname().type(fullname)
        this.username().type(username)
        this.phonenumber().type(phonenumber)
        this.email().type(email)
        this.password().type(password)
        this.confirmpassword().type(confirmpassword)
        this.createacct().click()
    }
}
export default Signup