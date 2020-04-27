export default class HowToPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="howto" class="page">
        <div class="welcome-wrapper">
        <div class="welcome-h1">
        <h1>Velkommen</h1>
        </div>
        <p>
        Du vil besvare omkring 100 spørgsmål omhandlende din gård og dit landbrug. Du vil her blive præsenteret for 8 forskellige kategorier (ses til herunder). <br>
        Herefter udfyldes spørgsmål til hver kategori, når du har færdigbesvaret en kategori, vil den blive streget ud på din side. Her efter vil du få opdateringer på dine resultater - og mulighed for at vinde præmien!
        </p>

        <div class="howto-icon-wrapper">
        <div class="icon-top">
        <img src="./images/cow-food.svg" alt="dyrefoder">
        </div>
        <div class="icon-bot">
        <img src="./images/energy.svg" alt="elektricitet">
        </div>

        <div class="icon-top">
        <img src="./images/animals.svg" alt="kvæg">
        </div>
        
        <div class="icon-bot">
        <img src="./images/recycle.svg" alt="ressourcer">
        </div>

        <div class="icon-top">
        <img src="./images/water.svg" alt="vand">
        </div>

        <div class="icon-bot">
        <img src="./images/cheese.svg" alt="mejeri">
        </div>

        <div class="icon-top">
        <img src="./images/organic.svg" alt="organisk">
        </div>





        </div>
        </div>

        <a class="back-btn" href="#welcome">
        <svg class="back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25.243">
        <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-6 -5.379)">
          <path id="Path_85" data-name="Path 85" d="M7.5,18h21" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_86" data-name="Path 86" d="M18,7.5,28.5,18,18,28.5" fill="none"
          stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
      </svg>
        <p>Tilbage</p>        
      </a>

      <a class="start-btn" href="#yourpage">
      <p>Start</p>        
    </a>

        
        </section>
      `;
    }
  }