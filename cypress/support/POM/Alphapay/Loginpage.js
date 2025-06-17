
class Loginpage{
    

    signinbutton() {
      return cy.contains('button', 'LOG IN')
    }
    
    EmailField() {
      return cy.get("input[placeholder='example@gmail.com");
    }
  
     passwordField() {
      return cy.get("input[placeholder='password']");
    }
  
     loginButton() {
      return cy.get('.button');
    }
  
    // Action for logging in
    login(Email, password) {
      this.signinbutton().click();
      this.EmailField().type(Email);
      this.passwordField().type(password);
      this.loginButton().click();
    }
  }
  
  export default Loginpage;
  