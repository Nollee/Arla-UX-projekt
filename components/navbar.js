export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
        <a href="#login">Login</a>
        <a href="#about">About</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </nav>
    `;
  }
}