export default class LoginPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="login" class="page">
      <div class="login-h1">
      <h1>Login</h1>
      </div>
      <div class="login-code"></div>
      <input type="number" id="code-number" placeholder="2">
      <input type="number" id="code-number" placeholder="5">
      <input type="number" id="code-number" placeholder="1">
      <input type="number" id="code-number" placeholder="3">

      
      </section>
    `;
  }
}