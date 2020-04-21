export default class YourPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="yourpage" class="page">
          <header class="topbar">
            <h2>Din side</h2>
          </header>
          <h3>About me</h3> 
          <p>Some info about me. Enjoy!</p>
        </section> 
      `; 
    }
  } 