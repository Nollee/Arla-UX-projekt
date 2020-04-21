export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
      <a href="#yourpage"><img src="../images/arla_logo.svg" alt="arla logo"></a>  
        <a href="#login">Login</a>
        <a href="#about">About</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#yourpage">Din side</a> 
        <a href="#questions">Questions</a> 
      </nav>
    `;
  }
}
