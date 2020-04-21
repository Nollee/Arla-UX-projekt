export default class LoginPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('content').innerHTML += /* html */ `
      <section id="login" class="page">
      <h1>login</h1>
      </section>
      `
    
    }
}