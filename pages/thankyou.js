export default class ThankYouPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="thankyou" class="page">
        <div class="thankyou-wrapper">
        <h1>Tak for dine svar!</h1>
        <div class="ty-options">
        <a href="#check" class="ty-option">
        <img src="images/ret.svg" alt="ret eller gennemgå"> 
        <h3>Ret eller gennemgå</h3>
        </a>
        <a href="#yourpage" onclick="fillCows()" class="ty-option">
        <img src="images/godkend.svg" alt="godkend"> 
        <h3>Godkend og vend tilbage</h3>
        </a>
        <a href="#data" class="ty-option">
        <img src="images/sammenlign.svg" alt="sammenlign med tidligere"> 
        <h3>Sammenlign med tidligere</h3>
        </a>

        </div>
        </div>
        
        </section>
      `;
    }
  }