class signInPage {
    signInButton() {
        return cy.get('a[href="/sign-in"]')
    }

    clickSignIn() {
        this.signInButton.click();
    }
}
export default signInPage