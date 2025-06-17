class dashboardpage{
    profilebutton() {
        return cy.get("img[alt='profile_image']")
    }

    dashboard(){
        this.profilebutton().click()
    }
}
export default dashboardpage