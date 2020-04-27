export default class LoginPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="login" class="page">
      <div class="login-wrapper">
      <img src="./images/login-logo.svg" alt="logo">
      <div class="login-h1">
      <h1 id="h1-login">Farm pin</h1>
      </div>
      <div class="login-code">
      <input type="text" class="code-number" placeholder="2" maxlength="1">
      <input type="text" class="code-number" placeholder="5" maxlength="1">
      <input type="text" class="code-number" placeholder="1" maxlength="1">
      <input type="text" class="code-number" placeholder="3" maxlength="1">
      </div>

      <a id="login-btn" href="#welcome">Login</a>
      </div>
      
      </section>
    `;
  }
}