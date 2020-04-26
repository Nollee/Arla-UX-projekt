export default class WelcomePage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="welcome" class="page">
        <div class="welcome-wrapper">
        <div class="welcome-h1">
        <h1>Velkommen</h1>
        </div>
        <p>
        Velkommen til arla-gården+ <br>
        Du vil herinde blev stillet en masse spørgsmål, som vil være med til at bestemme hvor bæredygtig dit landbrug er. <br><br> Som noget nyt har du nu muligheden for at være med til at blive en del af helt ny mælkekarton, som repræsentere landmændene. Denne mælkekarton vil blive solgt sammen med de andre mælkekartoner og her vil en andel af indkomsten fra kartonen gå direkte til dig. Du kan læse mere om den nye økonomiske gevinst og hvordan man bliver gyldig til at blive en del af den, indepå <i>Præmie</i> under <i>Dit landbrug</i> 
        
        </p>

        <div class="welcome-icon-wrapper">
        <img class="welcome-icons" src="images/welcome-ressource.svg" alt="arbejde">
        <img class="arrow" src="images/arrow.svg" alt="arrow">
        <img class="welcome-icons" src="images/welcome-result.svg" alt="resultat">

        </div>
        </div>
        <a class="next-btn" href="#howto">
        <p>Næste</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25.243">
  <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-6 -5.379)">
    <path id="Path_85" data-name="Path 85" d="M7.5,18h21" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Path_86" data-name="Path 86" d="M18,7.5,28.5,18,18,28.5" fill="none"
    stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>        
      </a>

        
        </section>
      `;
    }
  }