export default class FoodQuestion {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('questions').innerHTML += /* html */ `
        <section id="food" class="page">
        <h1>Mad</h1>
          </section>
      
      `;
    }

  }