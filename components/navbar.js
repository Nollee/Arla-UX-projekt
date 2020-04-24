export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
      <a href="#yourpage"><img src="../images/arla_logo.svg" alt="arla logo"></a>  
        <a href="#login">Login</a>
        <a href="#yourpage">Din side</a>  
        <a href="#check">check</a>
        <a href="#thankyou">thankyou</a>   
        <a href="#questions">Questions</a> 
        <a href="#prize">Præmie</a>
        <a href="#tips">Tips</a> 
      </nav>
    `;
  }
}
