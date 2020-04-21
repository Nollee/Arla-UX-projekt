export default class CowsQuestion {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('questions').innerHTML += /* html */ `
        <section id="cows" class="page">
        <h1>Køer</h1>
          </section>
      
      `;
    }

  }