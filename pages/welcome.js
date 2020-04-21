export default class WelcomePage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="welcome" class="page">
        test
        
        </section>
      `;
    }
  }